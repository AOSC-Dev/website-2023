---
categories:
  - warning
title: "Mesa 22.0.2 设备支持变更预报"
date: 2022-05-05T23:31:12-07:00
important: true
---

AOSC OS 将于近期引入 Mesa 22.0.2 图形栈。该版本中基于 Gallium 框架重写了大多数老设备支持模块，也有一部分设备支持被丢弃。

其中：

- Intel GMA 915/945 系列集成显卡（多见于搭载 Intel Pentium 4/Core/Core 2 系列处理器的设备）
- Intel GMA 960/X3100 至 Intel Haswell/四代酷睿处理器的集成及核心显卡（多见于搭载 Intel Core 2 至四代酷睿处理器的设备）

将分别换用名为 i915g 及 Crocus 的新 Mesa OpenGL 驱动。由于该驱动相对较新，您可能会在使用过程中遇到一些可用性或性能问题。如遇到问题或有其他相关疑问，请[报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&template=bug-report.yml) 。

该版本还废弃了基于 ATI Radeon [R100](https://en.wikipedia.org/wiki/Radeon_R100_series)（即 Radeon 7000 系列）及 [R200](https://en.wikipedia.org/wiki/Radeon_R200_series)（即 Radeon 8000/9000 系列）核心的显卡的 OpenGL 支持。如果您的设备目前搭载这些显卡，您的图形体验可能会有一定恶化（尤其在使用包含 OpenGL 混成特效的桌面环境时），绝大多数 OpenGL 游戏也将回退到软件渲染。

AOSC OS/Retro 后续将换用 Mesa 的长期支持分支，继续提供上述设备的老驱动。

---

— Mingcong Bai
