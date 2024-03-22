---
categories:
  - warning
title: "[已解决] 更新至 LLVM 15 后 AMD 显卡可能出现显示错误"
date: 2023-02-10T22:58:58-07:00
important: false
draft: false
---

该问题已通过早前推送的 `mesa` v1:22.3.1-2 修复。该问题是 Mesa 和链接时优化 (LTO, Link-Time Optimisation) 存在相容性问题造成的。

Ref: https://gitlab.freedesktop.org/mesa/mesa/-/issues/6911

---

近日，有使用 AMD Ryzen APU 笔记本的开发者发现在更新 LLVM 15.0.7 后，SDDM 和 KDE 等界面出现了缺字的问题。我们目前正在调查这一问题，如果您在使用 AMD 显卡，在有进一步消息前请不要更新系统。

如果您已经更新系统，请通过如下命令降级系统：

```
sudo apt install mesa=1:22.3.1
```

以暂时解决可用性问题，但届时 GL 将不可用。我们为此造成的不便表示歉意。

---

— Mingcong Bai
