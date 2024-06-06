---
categories:
  - warning
title: "[SOLVED] Incorrect Software Packaged in rnnoise"
date: 2021-06-30T08:28:30+08:00
important: false
---

Due to a mistake, the rnnoise package in the community repository does not
contain the advertised software (but instead
[noise-suppression-for-voice](https://github.com/werman/noise-suppression-for-voice/)).

We have now released an update to the `rnnoise` package, containing RNNoise
from [Xiph.org](https://gitlab.xiph.org/xiph/rnnoise). The current `rnnoise`
is now replaced with a new package, `noise-suppression-for-voice`.

----

— Mingcong Bai
