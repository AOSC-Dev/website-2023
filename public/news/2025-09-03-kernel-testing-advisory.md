---
categories:
  - minutes
title: "安同 OS 测试公告：内核更新"
date: 2025-09-03T15:30:00+08:00
important: false
home: true
---

![testing-topic-kernel-firmware-20250903](/assets/news/testing-topic-kernel-firmware-20250903.webp)

近日，我们在测试源推送了 6.16（主线）及 6.17（预发布）两个分支的内核更新，以及 Linux 设备固件 (20250831) 更新，现邀请各位用户好友测试、反馈问题。

## 主要特性

6.16（主线）内核包含如下关键特性：

- 新增 Intel Lunar Lake 平台“能源敏感调度 (Energy Aware Scheduling)”支持
- 新增 Intel Alder Lake-S 及 Raptor Lake-S EDAC 控制器支持
- 新增 Realtek RTL8127A 10GbE 以太网卡支持
- 新增大量笔记本平台专属特性支持，如 Dell 电池健康及厂商信息探测支持及 ThinkPad 摄像头开关快捷键等
- 新增 Apple Magic Mouse 2 (USB-C) 支持
- 新增 Intel Xe 独立显卡风扇探测支持

6.17（预发布）内核在 6.16 内核基础上包含如下关键特性：

- 新增 Intel Bartlett Lake-S, Granite Rapids-D, Raptor Lake-HX 及 Wildcat Lake EDAC 控制器支持
- 新增 Bartlett Lake 等平台的 Intel RAPL 电源控制支持
- 新增 Lenovo Legion Go 平台支持
- 新增 Broadcom 800G 系列以太网卡支持
- 新增 Realtek RTL8851BU 及 RTL8852BU USB 无线网卡支持
- 大幅优化 AVX-512 平台的 CRC32C 计算性能

除 6.16 及 6.17 分支的上游更新外，本次内核更新包含如下关键修改：

- 龙架构默认安装 16KiB（默认）及 4KiB 分页双内核，后者主要用于 x86 模拟（如 Box64）及 GPGPU 计算（如 ROCm 及 Intel Compute Runtime）场景
- 修复部分 Lenovo ThinkBook 型号 FnLock 及背光在重启后被错误复位的问题
- 修复部分 USB 音频设备静音阈值设置错误的问题
- 引入完整 linux-surface 补丁集，支持更多 Surface 型号
- 修复龙芯 3B6000/3C6000 家族 KVM 客户机稳定性问题
- 修复龙芯 3A5000/3A6000 笔记本电脑屏幕背光调整功能
- 为龙架构及 RISC-V 启用 AMDGPU KFD（异构计算）支持
- 使用上游方案规避 AArch64 平台的 MPAM 问题
- 引入 SG2042/2044 平台初步支持

此外，我们还在测试源推送了 Linux 设备固件更新，包含大量的 AMD/Intel 处理器、GPU，以及各类无线网卡、以太网、声卡等外设的固件更新。

## 测试指南

欲测试 Linux 6.16 内核，请使用如下命令加入测试源、重启，并在引导界面选择 AOSC OS 选项：

```
oma topics --opt-in linux-kernel-6.16.0
```

欲测试 Linux 6.17 内核，请使用如下命令加入测试源、重启，并在引导界面选择 AOSC OS (RC Kernel) 选项：

```
oma topics --opt-in linux-kernel-rc-6.17.0-rc3
```

欲测试设备固件更新，请使用如下命令加入测试源并重启：

```
oma topics --opt-in firmware-survey-20250830
```

## 反馈问题

如果您在测试上述内核相关更新时遇到问题或有任何建议，欢迎您来我社各聊天群组与我们联系反馈。