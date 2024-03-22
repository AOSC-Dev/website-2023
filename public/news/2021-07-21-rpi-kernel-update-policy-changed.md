---
categories:
  - warning
title: "Updating Kernel on Raspberry Pi Requires Manual Intervention"
date: 2021-07-21T16:26:57+08:00
important: true
---

The mainline kernel and boot firmware for Raspberry Pi have been updated, and we added a LTS kernel flavor (5.10).
Because we have switched to the mainstream kernel update policy, please uninstall `linux-kernel-rpi64` and install
`linux+kernel+rpi64` (or `linux+kernel+rpi64+lts` if you want to use LTS kernel) before updating the kernel.

---

— Kaiyang Wu, Xinhui Yang
