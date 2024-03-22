---
categories:
  - warning
title: "在树莓派上更新内核时需要手动干预"
date: 2021-07-21T16:27:01+08:00
important: true
---

目前树莓派的主线内核以及启动用固件已经更新完毕，并新增了 LTS 内核（5.10）。
由于现在切换到了主流的内核更新策略，请在更新内核时先卸载 `linux-kernel-rpi64` 软件包，然后再安装 `linux+kernel+rpi64`
（或 `linux+kernel+rpi64+lts`，如果要使用 LTS 内核）。

---

— Xinhui Yang
