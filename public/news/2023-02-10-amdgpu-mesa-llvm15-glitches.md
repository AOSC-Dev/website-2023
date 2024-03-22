---
categories:
  - warning
title: "[SOLVED] AMD GPUs May Suffer from Display Artifacts After LLVM 15 Update"
date: 2023-02-09T22:55:48-07:00
important: true
draft: false
---

This issue, caused by incompatibilities between Mesa and Link-Time
Optimisation (LTO), has been resolved with `mesa` v1:22.3.1-2.

Ref: https://gitlab.freedesktop.org/mesa/mesa/-/issues/6911

---

One of our AOSC OS maintainers has recently discovered that, after the LLVM
15.0.7 update, characters went missing in certain SDDM and KDE applications.
We are currently investigating this issue. If you use an AMD GPU, please do
not update your system until further notice.

If you have already updated your system and are affected by this issue, please
downgrade your system using the following command:

```
sudo apt install mesa=1:22.3.1
```

This should at least make your system usable. We apologise for any
inconvenience this may have caused.

---

— Mingcong Bai
