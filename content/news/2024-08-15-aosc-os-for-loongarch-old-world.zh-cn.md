---
categories:
  - news
  - advisories
title: "安同 OS 龙架构“旧世界”设备兼容方案正式发布"
date: 2024-08-15T12:00:00+08:00
important: true
home: true
---
![](/assets/news/breaking-the-world-boundary.jpg)
七月底，我们初步实现了在龙架构“旧世界”固件设备上启动新世界系统（如安同 OS）的引导器 (GRUB) 及内核方案，初步支持联想开天 M540z 及航天龙梦 ML5A 两款设备；在过去半个多月，我们继续对这一方案进行了验证测试、完善及规范化，并对四路 3C5000L 服务器（国光 GS6000L-4C5L）及卓宜恒通 L71 笔记本等“旧世界”设备进行了测试验证，实现了所有板载设备及外设的支持。

除正式支持在“旧世界”设备上正常启动、安装和使用外，安同 OS 还实现了“新世界”（如安同 OS、Loong Arch Linux、Yongbao 和 deepin）及“旧世界”（如 Loongnix 及 UOS）系统的多启动支持；结合 libLoL，两个“世界”的软硬件隔阂已被彻底打破，真正为用户实现了“新世界”与“旧世界”系统的选用及组合自由。

这一兼容方案的实现证明了“新世界”系统在软硬件兼容性上的显著优势，更是“新世界”系统用户友好性、用途兼容性和行业适用性的又一例证。

## 功能概览

上述方案通过三个方面增强了对“旧世界”软硬件生态的兼容性：

- GRUB 引导器：新增从旧世界固件引导的支持
- os-prober 多系统探测器：os-prober 新增对旧世界系统的探测功能，通过二段启动（链式启动，即 chainloading）载入旧世界引导器
- Linux 内核：新增对“旧世界”固件内存映射、ACPI 表及中断控制器行为及参数的兼容性

## 硬件支持概览

经测试验证，本兼容方案支持如下设备：

- 台式机：联想开天 M540z（龙芯 3A5000）
- 台式机：航天龙梦 ML5A（龙芯 3A5000）
- 笔记本：卓宜恒通 L71（龙芯 3A5000M）
- 笔记本：清华同方超锐 L860-T2（龙芯 3A5000M）
- 服务器：国光 GS6000L-4C5L（龙芯 3C5000L，四路）

从技术指标上说，我们的引导器及内核兼容补丁支持 BPI01000 及 BPI01001 两版引导参数接口规范的支持，理论上可支持所有已知的、基于龙架构的“旧世界”龙芯三号设备；如果您持有其他型号的“旧世界”设备，欢迎您下载文末的安同 OS 安装盘并反馈测试结果。

目前，我们尚未验证基于“旧世界”EFI 固件的龙芯 2K2000 设备的支持。

## 系统支持概览

目前已有如下系统集成了引导器及内核的“旧世界”固件兼容补丁：

- [安同 OS](https://website-2023.aosc.io/download)
- [deepin V23](https://www.deepin.org/zh/download/)（服务器支持将随后续更新提供）

## 补丁下载

我们欢迎且强烈推荐各龙架构“新世界”系统维护者及开发商集成这一兼容方案，以期为龙架构用户提供入门及迁移的便利；该兼容方案通过对 GRUB、os-prober 及内核的修改实现，我们基于常用的主线版本整理了补丁，并确保了补丁内容规范整洁，达到准上游标准（但考虑到该实现的长期支持必要性尚不明确，暂无推进上游的计划，但对就推动这一工作进行协商讨论持开放态度）

如下补丁一律可通过 git format-patch 命令，基于最近一个（分支）发布标签 (tag) 生成；如需基于 Linux 内核 6.11 分支生“旧世界”兼容补丁，按如下方法基于当前最新的 v6.11-rc3 标签操作生成即可（其他组件同理）：
```
git format-patch v6.11-rc3
```
### Linux 内核

- [6.11 测试分支](https://github.com/AOSC-Tracking/linux/tree/v6.11-ow)
- [6.10 稳定分支](https://github.com/AOSC-Tracking/linux/tree/v6.10-ow)
- [6.6 分支](https://github.com/AOSC-Tracking/linux/tree/v6.6-ow)（适用于需符合版本兼容规范的国产“新世界”系统）

注：国产“新世界”系统需先剔除龙芯提交的 BPI 相关补丁，具体剔除列表可参考 deepin V23 近期合并该组补丁时的[修改列表](https://github.com/deepin-community/kernel/pull/356)

### GRUB 引导器

- [2.12 版（上游源码）](https://github.com/AOSC-Tracking/grub/tree/grub-2.12-ow)
- [2.12 版（Debian 源码）](https://github.com/AOSC-Tracking/grub/tree/grub-2.12-ow-debian)，适用于 deepin 及麒麟等国产桌面系统

注：Debian 源码版本为 [2.12-5](https://sources.debian.org/src/grub2/2.12-5/)

### os-prober 多系统探测器

- [1.82 版](https://github.com/AOSC-Tracking/os-prober/tree/1.82-ow)

## 参考资料

有关“新世界”与“旧世界”固件引导协议相关的技术性细节，我们推荐您阅读《咱龙了吗？》站点上的[《旧世界与新世界（底层细节）》](https://areweloongyet.com/docs/world-compat-details/)一文。

## 系统下载

近日发布的安同 OS 安装盘 (20240814) 已包含上述所有兼容特性，欢迎下载试用！

[下载安装盘 >> ](https://releases.aosc.io/os-loongarch64/installer/aosc-os_installer_20240814_loongarch64.iso)
