---
categories:
  - warning
title: "[已修复]从较老的系统版本更新时可能遇到错误"
date: 2024-04-26T22:19:13-08:00
important: true
draft: false
---

根据多位用户报告，在从较老的系统镜像 (<= 20240331) 更新时可能会遇到错误；这是我们近期大批量更新底层软件时产生的依赖环造成的，仍需进一步修缮。

如果您遇到此类问题，请运行如下一系列命令解决（其中第一个命令的错误是可以忽略的）：

```bash
sudo dpkg --configure --force-depends --force-configure-any systemd linux-pam
sudo dpkg -i /var/cache/apt/archives/util-linux-runtime_*.deb
sudo oma fix-broken
sudo oma upgrade
```

我们为此带来的不便表示歉意!
