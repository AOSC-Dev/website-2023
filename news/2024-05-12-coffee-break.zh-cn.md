---
categories:
  - book
title: "安记冰室・五月上"
date: 2024-05-12T12:00:00+08:00
important: false
draft: false
---
<!-- 举着糖葫芦的 -->

> “葫芦儿—— 冰塔儿——”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

社区脉动
--------

### AOSCC 2024：咱上长春去！

![AOSCC 2024 东道主：吉林大学 Linux 用户协会！](/assets/coffee-break/20240512/imgs/aoscc-2024-jlu.png)

一年一度的社区线下聚会临近，来自多所院校的学生社团报名承办活动。最终，来自吉林大学和南阳理工学院的社团获得校方支持，角逐本年度 AOSCC 的东道主。为选出今年的活动场地，我们在 4 月 24 日至 5 月 1 日间组织了场地投票，期间有超过 500 人次参与了 AOSCC 2024 年的场地投票，足见社区对 AOSCC 的关注之高。

![AOSCC 2024 投票结果](/assets/coffee-break/20240512/imgs/aoscc-2024-poll.png)

最终，吉林大学以 310:249 的优势胜出，成为 AOSCC 2024 的东道主！

在未来两个半月中，我们将和吉林大学校方老师、领导及 Linux 用户组的同学们一同投入到 AOSCC 2024 的筹备工作中，望合作愉快！

### 网络存储双加速：社区新软件源服务器即将上线

![王邈与社区新软件源服务器在 Equinix HK5 机房前合影](/assets/coffee-break/20240512/imgs/junko-in-transit.jpg)

位于美国加利福尼亚州弗里蒙特市 [Hurricane Electric](https://he.net/) Fremont 2 数据中心的社区软件源服务器部署已逾四年，其带宽和存储性能均已出现明显局限。为保障服务质量和网络性能，我们决定组装部署新的软件源服务器。在 [Apernet Internet Laboratory（光圈网络）](https://apernet.io/)的大力支持下，我们在其位于香港特别行政区将军澳的 [Equinix](https://equinix.com/) HK5 数据中心完成了新软件源的组装上架，并将于近期上线服务安同 OS（英译：AOSC OS）用户。

新软件源服务器的服务质量和性能将有显著提高，其配置如下：

- 平台：华硕 RS700A-E9-RS12V2 1U 机架式服务器
- 处理器：双路 AMD EPYC（霄龙）7282 处理器，共 32 核 64 线程
- 内存：32 × 16GiB DDR4 ECC 内存，总容量达 512GiB
- 主存储：两块 7.68TB 西部数据 Ultrastar DC SN640 NVMe 固态硬盘，组成冗余阵列 (RAID 1)
- 网络：25Gbps 上下行带宽

由此可见，该服务器的计算性能（AMD Zen2，相对于当前服务器的 Intel Skylake 微架构）和存储性能（NVMe 固态，相对于当前的 SATA 机械硬盘）均得到了升级，相信将为各位用户朋友带来更好的系统软件安装和更新体验。

在此再次感谢 [Apernet Internet Laboratory（光圈网络）](https://apernet.io/)和 [Wencey Wang](https://github.com/WenceyWang) 同学在托管和服务器部件上的大力支持，以及[王邈](https://github.com/shankerwangmiao)多次奔赴香港机房对社区的新软件源服务器进行组装和测试！

### 新世界很大：libLoL 0.1.5 发布

![新世界很大，libLoL 带您去看看！](/assets/coffee-break/20240512/imgs/liblol.png)

近日，社区开发者[王邈](https://github.com/shankerwangmiao)发布了龙架构旧世界 ABI 兼容运行时 libLoL 的 0.1.5 版：glibc 版本更新至 2.39，编译时新增 ABI 及符号完整性检查，并将 libcrypt 库实现更改为 libxcrypt；这些更改的主要目的是避免潜在的兼容性问题。

libLoL 支持如下新世界龙架构发行版：

- 安同 OS (AOSC OS)
- Debian
- 深度 (Deepin)
- Gentoo
- Loong Arch Linux（Arch Linux 龙架构衍生版）
- Slackwareloong（Slackware 龙架构衍生版）

如果您在使用 libLoL 0.1.5 的过程中发现问题或遇到困难，请通过社区各聊天群组或社区论坛与联系我们；

### 流浪相机 2024 作品一瞥

![流浪相机 2024 部分投稿作品图赏](/assets/coffee-break/20240512/imgs/roaming-camera.jpg)

于 3 月 25 日启动的社区“流浪相机”活动已完成四站接力，使用社区好友借用的相机在全国各地接力摄影。日前，前方参与者发回许多风格各异、赏心悦目的投稿作品，供各位读者欣赏。

在未来数月中，剩余 6 位参与者还将继续在不同地市景点拍照，预计将于秋季到来前完成摄影，将“流浪”途中的美景呈现给各位。在“流浪相机”接力完成后，我们将整理和发布相册供社区好友订购，参与者投稿还将加入安同 OS 的默认壁纸包，给各位的电脑桌面带来新的光影和色彩。

系统快讯
--------

### 安同 OS 核心包集 Core 11.4.1 发布

![Core 11 是安同 OS 在 2024 - 2024 周期的系统核心包集](/assets/coffee-break/20240512/imgs/core-11-banner.png)

近日，安同 OS 核心包集 (Core) 发布了 11.4.1 版，主要更新 glibc 运行时库至 2.38。该更新旨在改善与龙架构 (LoongArch) 新世界 ABI 商业软件（如龙芯 x86 架构转译器和风华二号显卡驱动）的兼容性。

该更新还修复了 glibc 自带的域名服务缓存守护程序 nscd 中的四个安全漏洞：

- [CVE-2024-33599](https://www.cve.org/CVERecord?id=CVE-2024-33599)
- [CVE-2024-33600](https://www.cve.org/CVERecord?id=CVE-2024-33600)
- [CVE-2024-33601](https://www.cve.org/CVERecord?id=CVE-2024-33601)
- [CVE-2024-33602](https://www.cve.org/CVERecord?id=CVE-2024-33602)

### 新技术，新优化：Core 12 前瞻

![Core 12 将于今年暑期公开测试](/assets/coffee-break/20240512/imgs/core-12-banner.png)

日前，[白铭骢](https://github.com/MingcongBai)和[陈嘉杰 (jiegec)](https://github.com/jiegec)发起了第 12 版系统核心包集 (Core 12) 的特性规划。该版核心包集将于今年暑期开启公测，包含诸如 glibc 2.39 和 GCC 编译器 14.1.0 等组件更新。

此外，Core 12 还将包含两个关键特性：

- **HWCAPS 子目录：** Core 12 将基于 glibc 上游定义的 HWCAPS 子目录 (HWCAPS Subdirectory) 规范，为 x86 和 POWER 架构提供针对多种处理器微架构优化的运行时库，让各类搭载新处理器的硬件更好地利用新的架构和指令集扩展，提高性能
- **增强二进制固化：** GCC 14 编译器引入了新的 `-fhardening` 加固 (Hardening) 选项，定义了一系列标准的二进制固化参数，标准均高于 Core 11 及之前的核心包集版本中定义的加固级别——基于 Core 12 工具链编译的二进制程序安全性将得到进一步强化

### 功能增强，修复细化：一睹 Linux 内核 6.9 版更新内容

![Linux 6.9 即将发布！](/assets/coffee-break/20240512/imgs/kernel-6.9.png)

Linux 内核 6.9 版将在发布在即，安同 OS 已对该版本更新进行充分测试验证，预计将于本周正式推送更新。安同 OS 的 Linux 6.9 内核包含许多更新和修缮：

- **英特尔 xe 显卡驱动支持：** 为诸如 ARM 和龙架构等平台的安同 OS 版本新增 Intel Arc/Xe 独立显卡支持
- **龙架构 AMD 显卡稳定性修缮：** 针对龙架构平台的潜在硬件缺陷有针对性地禁用了 AMD GCN 第四代核心（代号 Polaris，即 AMD Radeon RX 400/500 及 AMD Radeon Pro WX\*100）的动态电源管理支持，极大降低了显卡驱动崩溃的几率
- **龙架构睡眠修复：** 修复了大多数龙架构硬件平台上睡眠唤醒时会死机的问题，笔记本用户可以放心合盖睡眠了

### 龙芯 x86 架构转译器 LATX 1.5 开放测试

![LATX 可助您在龙架构设备上运行 x86 应用程序](/assets/coffee-break/20240512/imgs/latx-logo-concept.png)

近日，龙芯中科发布了龙芯 x86 架构转译器 LATX 1.5 的测试版，并创建了内测群和[工单系统](https://github.com/deuso/latx-build/issues)供用户和开发者反馈意见。LATX 1.5 引入了新的指令集扩展（如向量扩展和二进制转译指令集）支持，并加入 AOT（预编译）和运行时库直通等优化手段，可显著改善 x86 应用程序的运行性能。搭配 Wine 使用时，LATX 亦可运行为微软 Windows 设计发行的各类 x86 应用程序。

安同 OS 也迅速响应，发布了 LATX 1.5.1-rc1 版本的测试源供各位测试。您可以使用如下命令获取 LATX 1.5 测试版更新：

```bash
oma topics --opt-in latx-1.5.0
```

如果您在使用 LATX 1.5 时遇到困难或发现问题，请通过龙芯中科职工临时搭建的[工单系统](https://github.com/deuso/latx-build/issues)报告反馈。

### Deb 系一家亲：小熊猫包管理 oma 初步实现 Debian/Ubuntu 支持

![小熊猫包管理登陆 Ubuntu 24.04 LTS！](/assets/coffee-break/20240512/imgs/oma-on-ubuntu.png)

[傅孝元](https://github.com/eatradish)近日发布小熊猫包管理 [oma](https://github.com/AOSC-Dev/oma) 1.3.6 版更新，新增 Debian 和 Ubuntu 初步支持，让 Deb 系正统发行版也用上了来自安同“匪帮”的包管理前端，欢迎试用！

我们将在近期发布面向 Debian 和 Ubuntu 等发行版用户的 oma 软件包，敬请期待！

开发者角
--------

### BuildIt! 自动化设施新增半自动更新功能

日前，[陈嘉杰 (jiegec)](https://github.com/jiegec)和[傅孝元](https://github.com/eatradish)为安同 OS 自动化构建设施 BuildIt! 实现了 `/bump` 命令，可根据 [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) 工具返回的信息自动更新各类软件包并提交 Git 仓库、打开合并请求（对应测试源）。该功能将大幅度简化对软件包的常规更新和维护操作，节省维护者时间。

### Ciel 和 ACBS 发布更新：修复软件包变种连续构建

安同 OS 实现维护自动化后为构建工具链引入了软件包变种功能 (Package Modifier)，以便自动构建诸如 OpenJDK 和 LLVM 等需要自举和重构的软件。但这一功能引入时暴露了构建容器管理器 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 的本地软件包管理功能的漏洞，使得这些软件包无法正常连续构建。

为解决这一问题，[陈嘉杰 (jiegec)](https://github.com/jiegec)和[刘子兴](https://github.com/liushuyu)一同为容器管理器 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 和软件包元数据管理器 [ACBS](https://github.com/AOSC-Dev/acbs) 实现了容器内外的状态通信功能，修复了连续构建软件包变种时的故障，各位维护者可以放心将此类软件包的构建交给自动化设施了。

### 子系统包模板标准化：Autobuild 4.2 发布

安同 OS 的 32 位 x86 子系统 (optenv32) 的维护缺乏标准规范且关注度不足，是个“老大难”问题。该子系统的维护困难直接导致了诸如 Steam 和各类 32 位软件的使用体验的落后和不完善。

近日，[杨欣辉](https://github.com/Cyanoxygen)发布了安同 OS 软件包构建工具 [Autobuild](https://github.com/AOSC-Dev/autobuild4) 的 4.2 版，为子系统组件包构建引入了一系列标准模板和参数，大大降低了此类软件包的维护成本并提高了软件包质量检查标准。配合近期的 optenv32 翻修计划，相信将在不远的将来改善原生及模拟环境（如龙架构 x86 转译器）中 32 位 x86 软件的使用体验。

### 更新查询自动化：Anicca（无常）项目

在安同 OS 系统维护中，其中一大工作项目便是更新各类软件包了。为了让维护者同事们更直观地了解各类软件包的更新情况，[Suyun](https://github.com/Suyun114) 发起了 [Anicca（无常）](https://github.com/AOSC-Dev/anicca)项目，利用 GitHub Actions 机制调用 [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) 查询整个[软件包树](https://github.com/AOSC-Dev/aosc-os-abbs)的更新并将结果呈现到表格中。

此外，为降低 Anicca 项目的维护成本，[傅孝元](https://github.com/eatradish)为 [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) 新增了 JSON 支持功能，以便程序化地解析和呈现更新检查的结果；[skybird](https://github.com/SkyBird233) 也为 Anicca 设计了网页前端，现已提交至 Anicca 仓库供贡献者测试审阅。

### minipkgsite：迷你软件包信息站

由于设计复杂和稳定性欠佳，社区的软件包信息网站 [AOSC OS Packages](https://packages.aosc.io) 可用性长期欠佳且亟需修缮。也正因如此，发行版软件包版本监测网站 [Repology](https://repology.org/) 早前也移除了安同 OS 的版本监测。

考虑到修缮软件包站工作繁重，[傅孝元](https://github.com/eatradish)编写了名为 [minipkgsite](https://github.com/AOSC-Dev/minipkgsite) 的最小化软件包信息站。该网站带有包含基础功能的软件包查询前端及公开 API，相信将为安同 OS 重返 [Repology](https://repology.org/) 提供必要条件。

### 别了，Autobuild3

日前，[白铭骢](https://github.com/MingcongBai)和[柴天浩](https://github.com/cthbleachbit)完成了安同 OS [软件包树](https://github.com/AOSC-Dev/aosc-os-abbs)中工具脚本的 [Autobuild4](https://github.com/AOSC-Dev/autobuild4) 适配。至此，陪伴了安同 OS 维护者近十年的 [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 正式退休，成为社区项目归档中的一员。

别了，Autobuild3，我们会记住您错误憋着不报的臭脾气。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [Coelacanthus](https://github.com/CoelacanthusHex)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [德州润华](https://github.com/HouLiXieBuRou)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [SignKirigami](https://github.com/prcups)
- [Rick Liu](https://github.com/rickliu2000)
- [王邈](https://github.com/shankerwangmiao)
- [skybird](https://github.com/SkyBird233)
- [Suyun](https://github.com/Suyun114)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [Aoba K](https://github.com/nexplorer-3e)
- [Sharelter](https://github.com/Sharelter)
- [Student Main](https://github.com/stdmnpkg)


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
