---
categories:
  - community
title: "AOSC OS 龙架构版本系统发行更新公告"
date: 2024-03-06T22:19:13-08:00
important: false
draft: false
---

![AOSC OS 龙架构版](/assets/coffee-break/20240309/imgs/aosc-os-loongarch64.png)

龙架构版本发布系统发行更新：安装盘版本为 20240303，系统包版本为 20240304

[发布公告 >> ](https://bbs.loongarch.org/d/376-aosc-os)

本次更新主要解决如下问题：

・在较老的 AMD 显卡 (GCN 1/2) 上启动图形界面后画面锁死的问题

・在使用 7A 桥片集显时无法显示的问题 ¹

・华硕 XC-LS3A6M 主板第二个以太网接口 (RJ45) 无法使用的问题

—

¹ 集显显示功能方面，考虑到目前 loongson 内核模块在某些主板上存在问题，暂时没有开启加速（使用 EFI Framebuffer 提供基础显示功能，类似 Windows 未安装显示驱动时的情况）；
因此，如果您在使用集显时发现图形性能较差，此乃正常现象，我们依然推荐您使用 AMD 独立显卡安装和使用 AOSC OS。
