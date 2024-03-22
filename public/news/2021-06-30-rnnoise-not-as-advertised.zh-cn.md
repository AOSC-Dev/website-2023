---
categories:
  - warning
title: "[已解决] rnnoise 包含的软件不正确"
date: 2021-06-30T08:28:30+08:00
important: false
---

由于工作上的食物，目前源内 `rnnoise` 包并不包含真正的 RNNoise 软件，
而是 [noise-suppression-for-voice](https://github.com/werman/noise-suppression-for-voice/)。
我们稍后将推送修复。

当前的 `rnnoise` 包更新后将使用来自 [Xiph.org](https://gitlab.xiph.org/xiph/rnnoise) 的源码，
而当前的 `rnnoise` 将以新包 `noise-suppression-for-voice` 代替。

----

— Mag Mell, Mingcong Bai
