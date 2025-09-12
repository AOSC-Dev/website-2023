---
categories:
  - advisories
title: "GStreamer 更新可能无法正常完成"
date: 2024-08-20T12:00:00+08:00
important: true

---
由于维护者疏忽，x86-64 (amd64) 架构的 gstreamer 包由于与 dssim-c 包存在文件冲突，可能无法完成更新；发现问题后，我们已推送更新修复这一问题

如果您已经在更新时遇到错误，请使用如下命令暂时规避问题：
```
oma remove dssim-c
```
而后，继续更新系统即可：
```
oma upgrade
```
我们为此造成的不便表示歉意！
