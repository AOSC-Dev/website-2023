---
categories:
  - warning
title: "[已解决] GNOME 40 上 GDM 不工作"
date: 2021-04-06T18:34:00+08:00
important: false
---

目前 GNOME 40 测试用更新可以通过 [ATM](https://github.com/AOSC-Dev/atm/) 打开 `gnome-40` topic 获取，但是 GDM 目前因为认证配置不正确，无法启动。如果依然想尝鲜，可以考虑使用 LightDM 或 SDDM 启动 GNOME / GNOME on Xorg 会话。

该问题修复后，我们会发布针对 gdm 的修复更新。

----

2021-04-07 更新
-----------------

下述的更新解决了上述 GDM 启动失败的问题：

    gnome-40-main amd64
    ^ [gdm](https://packages.aosc.io/packages/gdm) 40~rc ⇒ 40.0
    ^ [gdm-dbg](https://packages.aosc.io/packages/gdm-dbg) 40~rc ⇒ 40.0

----

— Mingcong Bai
