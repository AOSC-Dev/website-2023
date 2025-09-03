---
categories:
  - news
  - advisories
title: "请您测试：龙架构 AMD 显卡稳定性修复"
date: 2024-06-17T22:19:13-08:00
important: false

---
![](/assets/news/2024-06-17-amd-gpu-reset.jpg)
经排查，我们终于定位到了龙架构用户在使用 AMD GCN 2.0（如 R7 360）、GCN 3.0（如 R9 Nano）及 GCN 4.0（如 RX 400/500 系列及 WX 2100/3100/4100/5100/7100）架构显卡且有高图形负载（如 3D 游戏和高清视频）时偶发驱动复位和桌面重启等不稳定现象的症结并提出了修复；如确定修复可用，使用 AMD 显卡的各位用户朋友们终于可以舒心地发挥您显卡的机能了（先前我们针对这些显卡默认关闭了动态电源管理规避稳定性问题）！

## 波及范围

如果您使用如下型号的 AMD 显卡，该测试修复可解决您在龙架构设备上的显卡复位问题；由于 AMD 显卡产品线庞杂，故有如此之长的列表，请见谅！

您也可以使用 TechPowerUp 的 GPU 参数数据库 (GPU Specs Database) 查询 [GCN 2.0](https://www.techpowerup.com/gpu-specs/?mobile=No&architecture=GCN%202.0&sort=generation)、[GCN 3.0](https://www.techpowerup.com/gpu-specs/?mobile=No&architecture=GCN%203.0&sort=generation) 及 [GCN 4.0](https://www.techpowerup.com/gpu-specs/?mobile=No&architecture=GCN%204.0&sort=generation) 对应的显卡列表以确定您的显卡是否受影响。

**AMD Radeon 系列：**

- HD7790, HD8770

- R7 260, R7 260X, R7 360

-  R9 285, R9 285X, R9 290, R9 290X, R9 295X2, R9 360, R9 380, R9 380X, R9 390, R9 390X

-  R9 Fury, R9 Fury X, R9 Nano

-  RX 455, RX 460, RX 470, RX 470D, RX480

-  RX 540, RX 550, RX 550X, RX 560, RX 560D, RX 570, RX 580, RX 590, RX 590 GME

-  530, 530X, 535, 620, 625, 630, 640

**AMD FirePro 系列：**

-  S7100X, S7150, S7150 X2

- S9100, S9150, S9170, S9300 X2

-  W4300, W5100, W7100, W8100, W9100

**AMD Radeon Pro 系列：**

-  WX 2100, WX 3100, WX 3200, WX 4100, RX 5100, WX 7100, WX 8200, WX 9100

-  Duo, SSG

实际上，[GCN 1.0 ](https://www.techpowerup.com/gpu-specs/?mobile=No&architecture=GCN%201.0&sort=generation) 系列显卡（如 R7 240）也受此问题影响，但造成问题的原因可能不同，我们仍在定位这一问题并将努力研究解决方案。

## 测试指引

请打开终端并输入如下命令：

```bash
oma topics --opt-in linux-kernel-6.10
```

并按照指引更新系统；内核包版本应为 6.10.0-0.4，请留意 oma 确认界面。

## 技术分析

我们在 Linux 内核相关支持代码中发现，AMD 在 2015 年分别引入的 amdgpu gfx7/cik (GCN2) 支持 ¹ 及 gfx8 (GCN4) 代码 ² 中分别包含同样的规避性代码，在写入内存及发出中断请求前执行了额外的 EVENT_WRITE_EOP (Write and End-of-Pipe) 指令重复写入内存，以期解决一处（AMD 完全没有进行解释的）潜在硬件问题。

这一修复在搭载龙芯 7A 桥片的龙架构上产生了副作用：两次额外的写操作在已知中断请求及 DMA 数据处理顺序有概率发生错误 ³ 的龙芯 7A 桥片上可能造成数据不一致问题，进而导致先前遇到的驱动超时、崩溃及复位问题。

为此，社区维护者郑兴达针对 gfx7 及 gfx8 架构显卡编写了两个补丁 ⁴，在保持两次写入的规避代码的设定下，让两次写入的数据保持一致，规避龙架构上可能发生数据不一致的问题。

———

¹ AMD 在 [amdgpu](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a2e73f56fa6282481927ec43aa9362c03c2e2104) 及 [radeon](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a9c73a0e022c33954835e66fec3cd744af90ec98) 内核模块针对 gfx7/cik (GCN 2.0/3.0) 架构显卡的规避补丁

² AMD 针对 [gfx8 (GCN 4.0) 架构显卡的规避补丁](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bf26da927a1cd57c9deb2db29ae8cf276ba8b17b)

³ 从龙芯中科陈华才老师[针对7A 桥片平台的 radeon 内核模块的修复](https://github.com/chenhuacai/linux/commit/da63bd7429f2bb7ce7988a95d125f50426466555)说明可见，7A 桥片中断请求及 DMA 数据处理顺序有概率出现问题

⁴ 郑兴达针对 [amdgpu](https://github.com/AOSC-Tracking/linux/commit/1d0e4bb75b29ef80b7129d76c9a0609d9b912eeb) 及 [radeon](https://github.com/AOSC-Tracking/linux/commit/c7772bb8b1a27d59bbb32ef8612a9a41fecb6410) 内核模块的修复补丁
