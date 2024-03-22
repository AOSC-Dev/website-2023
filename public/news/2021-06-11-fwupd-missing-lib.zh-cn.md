---
categories:
  - warning
title: "[已解决] fwupd 可能无法更新及安装设备固件"
date: 2021-06-11T14:09:45+08:00
important: false
---

目前 `fwupd` 因为缺少 `libsmbios_c.so.2` 无法使用
LVFS (Linux Vendor Firmware Service) 更新检查和安装功能。
我们将尽快推送修复。

----

2021-06-16 更新
---------------

该问题的修复已推送至 stable 源。

----

— Mingcong Bai
