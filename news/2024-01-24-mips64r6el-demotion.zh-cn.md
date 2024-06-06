---
categories:
  - warning
title: "MIPS64 Release 6 版本降级为实验性架构移植"
date: 2024-01-24T18:47:12+08:00
important: false
draft: false
---

由于 MIPS64 Release 6 架构长期无可用硬件且 LLVM 17 后出现严重的工具链可用性问题（无法构建任何 Rust 程序），为避免后续拖延其他一、二级架构的更新和维护，我们决定将该移植降级为“实验性架构”。

降级后，我们将继续维护该架构移植，但对其软件包更新时效性不作保障；如果您在使用这一架构移植时遇到困难，请[联系我们](https://aosc.io/zh-cn/contact/)。

— 白铭骢
