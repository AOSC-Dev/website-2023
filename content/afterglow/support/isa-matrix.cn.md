---
title: "Afterglow 架构支持规格表"
---

Afterglow 支持多种处理器架构，本表介绍支持的各类处理器架构及相应的微架构指令集扩展支持、软件包架构名及编译器目标名等信息。

{{< category-block "架构支持规格一览" >}}

如下是 Afterglow 支持的处理器架构一览表。

| 处理器架构名       | 微架构指令集扩展支持要求 | 软件包架构名  | 编译器目标名                   |
|--------------------|--------------------------|---------------|--------------------------------|
| Alpha              | 无                       | `alpha`       | `alpha-aosc-linux-gnu`         |
| ARMv4              | 无                       | `armv4`       | `arm-aosc-linux-gnueabi`       |
| ARMv6（硬浮点）    | Thumb-2, NEON            | `armv6hf`     | `arm-aosc-linux-gnueabihf`     |
| ARMv7（硬浮点）    | Thumb-2, NEON            | `armv6hf`     | `arm-aosc-linux-gnueabihf`     |
| 基于 MIPS 的龙芯二号处理器[^1] | LoongMMI     | `loongson2f`  | `mips64el-aosc-linux-gnuabi64` |
| Intel 80486 或更新 | 无                       | `i486`        | `i486-aosc-linux-gnu`          |
| Motorola 68000 系列处理器[^2] | 无            | `m68k`        | `m68k-aosc-linux-gnu`          |
| PowerPC（32 位，大端序）| 无                  | `ppc32be`     | `powerpc-aosc-linux-gnu`       |
| PowerPC（64 位，大端序）| AltiVec             | `ppc64be`     | `powerpc64le-aosc-linux-gnu`   |
| SPARC（64 位）     | SPARC V9, VIS 1.0        | `sparc64`     | `sparc64-aosc-linux-gnu`       |

[^1]: 该架构移植仅支持龙芯 2F 处理器，不支持 2E 及之前的处理器型号
[^2]: 该架构移植仅支持 68020 及更新的处理器型号