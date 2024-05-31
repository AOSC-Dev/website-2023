---
categories:
  - warning
title: "[已修复]近期更新引入了不必要的依赖"
date: 2024-03-20T22:19:13-08:00
important: true
draft: false
---

由于维护者的失误，导致近期的 suitesparse 软件包更新为 amd64 和 arm64 架构引入了作为强依赖的 CUDA 运行时和 NVIDIA 驱动程序。我们为此深表歉意，请大家暂时不要更新系统，等待我们为该软件包推送修复。如果您已经更新系统，也请耐心等待。

在修复推送之后，您可以执行如下命令以更新系统，并删除不必要的依赖：

```bash
oma upgrade
```