---
categories:
  - warning
title: "LiveKit 安装程序存在严重问题"
date: 2022-08-31T23:12:55-07:00
important: true
draft: false
---

我们在 LiveKit 中附带的安装程序 DeployKit ([aoscdk-rs](https://github.com/AOSC-Dev/aoscdk-rs)) 中发现一个严重问题，可能会导致无分区表数据设备中的元数据被意外销毁。这一问题可能导致 LUKS 及 MD 软 RAID 设备中的数据损毁。

我们即将推送带有修复 LiveKit 版本更新，请勿继续使用 20220901 前版本的 LiveKit！

---

— Mingcong Bai
