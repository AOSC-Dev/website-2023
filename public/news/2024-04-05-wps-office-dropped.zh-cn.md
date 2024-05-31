---
categories:
  - news
title: "我社停止维护 WPS Office for Linux 软件包"
date: 2024-04-05T22:19:13-08:00
important: false
draft: false
---
![](/assets/news/2024-04-05-wps-office-dropped.png)

由于金山办公方面进一步收紧 WPS Office for Linux 的下载途径（目前需要动态密钥和时间戳才能下载），我们已无法有效维护目前软件仓库中的 WPS Office for Linux 软件包 (wps-office)，将从软件源删除该包且不再推送更新。

幸运的是，由于我们已经正式推送了 Spiral 兼容框架，用户现在可以直接从 WPS Office for Linux 官网下载本机架构的 .deb 软件包，然后使用类似如下的命令即可安装：

```bash
oma install wps-office_11.1.0.11719_loongarch64.deb
```
感谢您的理解和支持!
