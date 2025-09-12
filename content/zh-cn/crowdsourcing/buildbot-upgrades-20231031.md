---
title: '[众筹成功] 构建服务器升级'
draft: false
date: 2023-10-30
---

本众筹项目旨在升级两台社区构建服务器，“kp920”(AArch64, 24426) 及“Stomatapoda”(LoongArch, 27863)，以期解决其性能瓶颈：

- kp920 上的构建盘 (buildroots) 目前为一块 SAS 接口的机械盘，该盘性能问题较大，导致 Ciel 在高强度 I/O 操作（如更新容器系统或安装依赖）时性能严重滞后。为此，我们希望购买一块 SAS 接口的固态硬盘。
- Stomatapoda 上搭载的 16 核龙芯 3C5000 处理器只搭配了 32GiB 内存，在构建某些应用程序时内存严重不足，导致经常使用大量交换空间 (swap space)——如在构建 Mozilla Firefox 117.0.1 时，若打开链接时优化 (LTO)，构建过程需要超过 80GiB 的内存。为此，我们希望购买 128GiB 内存。

## 预算计划

- kp920
    - 1 \* HGST Ultrastar SS200, 800GB：人民币 500 元
- Stomatapoda
    - 4 \* 紫光 S2332GU3200ZG2, 32GiB, DDR4 Registered ECC @ 3200MT/s：人民币 700 * 4 = 2800 元

总计：人民币 3300 元

## 日程计划

在本众筹项目成功完成后：

- 将购买上述 HGST 固态硬盘并将其寄往 kp920 的托管方。
- 通过龙芯的采购渠道直接购买上述内存模块并由 Stomatapoda 在龙芯武汉的托管方安装。

## 负责人

- Lain Yang <fsf@live.com> ：采购负责人
