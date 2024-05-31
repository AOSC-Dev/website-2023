---
categories:
  - warning
title: "AOSC OS 软件源服务器恢复服务"
date: 2024-02-27T22:19:13-08:00
important: true
draft: false
---

我们已成功通过 TUNA 恢复了先前误删的软件包，软件源服务器已恢复服务！以下是本次故障发生和修复的过程及反思：

**故障原因**

- 故障是由于 @JeffBai 操作时没有注意检查命令导致的，他当时本来希望运行 `cd /mirror/debs/pool` 查阅测试源列表，但是错误地输入了 `rm -r /mirror/debs/pool`

- 此时，他以为是服务器 I/O 负载高（服务器使用机械硬盘，时有发生 I/O 饱和的情况），因此只是等待

- 大约一分钟后，发现是输入了错误命令，遂使用 `Ctrl+C` 停止

- 此时已有超过 `300GiB` 的文件被删除

**排障过程**

首先，为防止误删故障波及其他软件源，立即停止了软件源扫描和同步服务：

```bash
systemctl stop p-vector
systemctl stop p-vector.timer
systemctl stop p-vector.path
systemctl stop rsyncd
```
考虑到 TUNA 镜像我社软件源较为频繁，选用了 TUNA 作为数据源进行恢复，命令如下：

```bash
cd /mirror/debs/pool
rsync -avSHP rsync://mirrors.tuna.tsinghua.edu.cn/anthon/debs/pool/* .
```
命令完成后，恢复服务：

```bash
systemctl start p-vector
systemctl start p-vector.timer
systemctl start p-vector.path
systemctl start rsyncd
```

**反思**

- 切勿在注意力不集中时操作关键业务服务器

- 已为所有用户添加了 rm 命令强制交互提示的别名（如下）

```bash
alias rm='rm -i'
```