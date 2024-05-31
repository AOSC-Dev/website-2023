---
categories:
  - book
title: "安记冰室・四月上"
date: 2024-04-13T12:00:00+08:00
important: false
draft: false
---
<!-- 端着卤煮火烧的 -->

> “卤煮喂，炸豆腐哟——”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

用词说明
--------

![安同开源社区系统项目徽标与名称](/assets/coffee-break/20240413/imgs/new-logos.png)

从本期《安记冰室》开始，我们将按照当前社区系统项目的中文命名指代 AOSC OS，即：安同 OS。为方便读者，我们会在首次使用“安同 OS”一词时附加“（英译名：AOSC OS）”说明。

社区脉动
--------

### 三个项目！我社已获批参与开源之夏

![软件所“开源之夏”项目主页](/assets/coffee-break/20240413/imgs/ospp-2024.jpg)

四月初，中科院软件所“开源之夏”活动组委会公布了 2024 年“开源之夏”活动的社区与组织，自 2020 年开始参与的我社也在列。今年，组委会为我社分配了三个项目配额。

我们将会抽出三名贡献者作为导师带领在校学生参与社区实习项目。我们初步计划提交如下三个方向的实习项目：

- 系统适配：设计制作用于 RISC-V 设备的特制安同 OS 镜像
- 文档支持：设计编写系统用户手册
- 本地化：参与上游本地化项目

我们计划于下周公布相关项目导师和考核指标等详细信息，敬请期待。

系统快讯
--------

### AOSC 启动盘制作向导发布

![基于 Fedora Media Writer 制作的 AOSC 启动盘制作向导](/assets/coffee-break/20240413/imgs/media-writer.png)

应用户要求，我们基于 Fedora Media Writer 制作了启动盘制作向导，方便 Windows、macOS 和安同 OS 用户制作启动盘

安同 OS 用户可通过如下命令安装启动盘制作向导：

```bash
oma install aosc-media-writer
```

点此下载：

- Windows (x86-64): https://releases.aosc.io/writer/AOSCMediaWriter-win64-0.3.3.exe
- macOS (AArch64): https://releases.aosc.io/writer/AOSCMediaWriter-osx-arm64-0.3.3.dmg
- macOS (x86-64): https://releases.aosc.io/writer/AOSCMediaWriter-osx-0.3.3.dmg

### 用好玩好：安同 OS 龙架构版新功能预览一瞥

自发布以来，安同 OS 龙架构版由于其易用性和兼容性相对良好广受用户欢迎。用户数量不断增长的同时，来自用户朋友的各类反馈报告也极大地帮助了我们不断改善系统软硬件支持和用户体验。

如今，龙架构版已发布两个月，朋友们用得可还舒服？社区好友“轮子妈”看来还挺满意，这可都在龙芯 3A6000 小主机 (NUC) 上玩出花来了——他为龙芯小主机定制了外置显卡盒子，加上 AMD Radeon RX 6750XT 显卡……

…… 什么，你说比例失调？你就说能不能原神启动吧（虽然是云原神）——

![龙芯 NUC 小主机也可以（云）原神，启动！（摄影：轮子妈）](/assets/coffee-break/20240413/imgs/loong-genshin.jpg)

当然，能玩的原生游戏还是越多越好啦，这部分尚需努力。那么，近期龙架构版还有啥玩头呢？

请允许我们推荐测试 Linux 内核 6.9 版（`linux-kernel-6.9`）：新增来自[自发对称破缺](https//github.com/Fanfansfan)修改的 Intel xe 驱动，支持在龙架构上使用 Intel DG1 和 DG2 系列显卡；配合近期推送的 Mesa 图形库和多媒体驱动更新，还可以完美硬解视频。

此外小声说下：该版内核还支持搭载新世界固件的 2K2000 开发板，有拿到新世界固件的幸运儿可以装上试试看啦！

使用如下命令即可获取 6.9 版测试内核：

```bash
oma topics --opt-in linux-kernel-6.9
```

### 超级小熊猫力：oma 1.3 开放测试

![oma 1.3 终端管理界面](/assets/coffee-break/20240413/imgs/oma-1.3.png)

小熊猫包管理 oma 1.3 版本的特性开发业已完成，现开放测试！oma 1.3 引入了 TUI 界面，提供直观的搜索、安装和管理功能；亦改进了进程管理、测试源界面和依赖错误报告界面

使用如下命令即可打开 oma 1.3 测试源：

```bash
oma topics --opt-in oma-1.3.0
```

期待各位的试用和反馈，一齐改进安同 OS 的包管理体验！

开发者角
--------

### 新鲜热辣：Core 11.3.0 与 Rust 1.77

近期，我们推送了 Core 11.3.0 和 Rust 1.77 更新，在引入新的 Rust 工具链特性的同时，还修复了先前 Glibc (GNU C Library) 中调试符号摆放不正确与 Rust 工具链找不到安同 OS 中 GCC 标准库和头文件的问题。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [shatian114](https://github.com/shatian114)
- [skybird](https://github.com/SkyBird233)
- [xen0n](https://github.com/xen0n)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [ouankou](https://github.com/ouankou)


栏目介绍
--------

考虑到社区项目和文化等日趋成熟，我们决定重启外联和宣传工作，在更广阔的天地寻找志同道合的朋友。

您阅读的本期半月刊即是我们外宣工作的一部分，我们的文字宣传栏目如下：

- 安记冰室：社区双周报及访谈栏目
- 聊斋：信创及稀见软硬件专题
- 怀古：古董软硬件专题
- 实况：各类线下活动资讯

其中，《安记冰室》于北京时间 (UTC+8) 每月第二、四个周末发布，其他栏目均视讯息内容及编辑进展发布；发布平台包括：

- 社区门户
- 微信公众号“安同开源”
- Bilibili 帐号“安同开源社区”
- 知乎帐号“安同开源社区”
- 微博帐号 @安同开源
- Twitter/X @aosc_dev_cn 及 @aosc_dev（英文）

此外，我们正寻求国内开源及 Linux 相关媒体的朋友合作，一起将我社的工作和文化广而告之。
