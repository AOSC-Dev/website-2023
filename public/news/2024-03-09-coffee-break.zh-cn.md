---
categories:
  - book
title: "安记冰室・三月上"
date: 2024-03-09T12:00:00+08:00
important: false
draft: false
---
<!-- 端着红肠的 -->

> “切一盘儿红肠儿——”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

社区脉动
--------

### 廿四年“流浪相机”报名开放

三月中旬，我们计划参考 B 站 Up 主 [-LKs-](https://space.bilibili.com/125526/) 的“漂流相机”启动廿四年度“流浪相机”计划。本计划预先约定一套摄影器材，将一台由社区好友借用的相机寄出在参与者间接龙。参与者将自己选出的最优作品投稿，组成廿四年下半年壁纸集。

目前，我们也已完成基本筹划工作，目前计划如下：

- 器材：索尼 α7R V (ILCE-7RM5) 无反相机，搭配 SIGMA 45mm F2.8 DG DN Contemporary 镜头
- 运行时长：半年，三月中启动，至九月中截止
- 运行地区：中国大陆，含香港和澳门特别行政区
- 参与方式：报名审阅制，仅限现有 AOSC 项目、壁纸投稿贡献者及上述贡献者信任的个人

本次“流浪相机”计划组织 20 人参与，给每位参与者一周时间接收相机、拍照和寄出相机。如无特殊情况，每位参与者在收到摄影设备后应在 5 天内完成拍照，然后寄出相机；如在时间安排上有特殊情况，请在流浪相机的组织群组（报名者会收到邀请）告知。我们将在 3 月 10 日报名截止后根据地理位置和个人情况进行排期。

感谢您的报名！

报名链接：https://f.wps.cn/g/fHeWYf29/

![亦可扫此二维码报名](/assets/coffee-break/20240309/imgs/roaming-camera-signup.png)

### 三台新构建服务器上线

![社区新服务器](/assets/coffee-break/20240309/imgs/new-servers.jpg)

过去两周，承蒙多位社区好友和组织的慷慨贡献，我社上线三台构建服务器，包括两台龙架构服务器和一台 x86 服务器。其中，由[北京大学学生 Linux 俱乐部 (LCPU)](https://lcpu.club/) 捐赠的 x86 服务器是目前我社相对性能最高的服务器。

以下是捐赠者名录：

- 龙架构服务器 (loong13)：“龍丨逍雄琥”和“磨牙大辉郎”
- 龙架构服务器 (viperdesign)：“蝰蛇设计 (Viperdesign)”
- x86 服务器 (towards-modern-distro)：北京大学学生 Linux 俱乐部 (LCPU)
- 内存 (8GiB)：[王翔 (KatyushaScarlet)](https://github.com/KatyushaScarlet)
- 固态硬盘 (512GB)：cola整体网路

感谢各位捐赠者对社区工作的大力支持！

### libLoL 0.1.4 发布

近日，社区开发者[王邈](https://github.com/shankerwangmiao)发布了龙架构旧世界 ABI 兼容运行时 libLoL 的 0.1.4 版，新增一部分系统调用的备用 (fallback) 调用及 Glibc 的 `libanl`，`libutil` 和 `libnsl` 兼容库，可改善一部分应用的兼容性。为方便龙架构 Debian 用户安装使用 libLoL，我们开始提供 Debian 软件包，可通过 [libLoL 主页](https://liblol.aosc.io/docs/usage/#debian) 下载。

此外，我们开始系统性测试来自[龙芯应用合作社](http://app.loongapps.cn/)的各类旧世界软件的可用性，为兼容性或可用性存在问题的软件整理和发布修复方式，并对无法兼容的软件也编写了技术原因分析。欢迎各位浏览参考 [libLoL 应用兼容性数据库](https://liblol.aosc.io/docs/apps/)或为我们提供兼容性线索，感谢！

系统快讯
--------

### AOSC OS 发布三月龙架构版本系统发行更新

![AOSC OS 龙架构版](/assets/coffee-break/20240309/imgs/aosc-os-loongarch64.png)

龙架构版本发布系统发行更新：安装盘版本为 20240303，系统包版本为 20240304。

发布公告：https://bbs.loongarch.org/d/376-aosc-os

本次更新主要解决如下问题：

- 在较老的 AMD 显卡 (GCN 1/2) 上启动图形界面后画面锁死的问题
- 在使用 7A 桥片集显时无法显示的问题
- 华硕 XC-LS3A6M 主板第二个以太网接口 (RJ45) 无法使用的问题

集显显示功能方面，考虑到目前 loongson 内核模块在某些主板上存在问题，暂时没有开启加速（使用 EFI Framebuffer 提供基础显示功能，类似 Windows 未安装显示驱动时的情况）。因此，如果您在使用集显时发现图形性能较差，此乃正常现象，我们依然推荐您使用 AMD 独立显卡安装和使用 AOSC OS。

### KDE Plasma 6 发布：AOSC OS 的 KDE 桌面环境更新与维护计划

![KDE Plasma 6 桌面截图](/assets/coffee-break/20240309/imgs/plasma-6.png)

二月底，KDE 社区[发布了](https://kde.org/announcements/megarelease/6/) KDE Plasma 桌面环境的第六个大版本及配套应用程序和运行时库。该版本引入许多新特性、修复和设计更动，相信对社区许多关注桌面环境体验的朋友都有一定吸引力。考虑到许多社区用户询问了 AOSC OS 引入 KDE Plasma 6 桌面的计划，我们在这里简要介绍下引入和维护计划。

简单地说，我们计划引入 KDE Plasma 6 桌面环境的方式为：**长期维护，长期预览**。根据我社维护引入 KDE 5 的经验，KDE 桌面环境发布大版本后一般需要几个月时间才能解决各类较为明显的问题和特性缺失；因此，我们计划：

- 在一段时间内继续默认提供 KDE 5 桌面，在 KDE Plasma 6 就绪前一直提供更新和修复
- KDE Plasma 6 提供预览源，供用户和开发者测试
- 在预览期间，贡献者对默认配置和体验等进行考察和打磨

关于许多用户关切的默认使用 X11 或 Wayland 的问题，我们计划在 KDE Plasma 6 发布后继续使用 X11 显示服务器，以期保障输入法、缩放及各类语音/视频类应用程序的兼容性；考虑到一部分用户对 Wayland 的偏好，我们将在软件源中提供 KDE Plasma 6 桌面的 Wayland 会话，但不会默认预装。

我们计划在未来两周发布 KDE Plasma 6 的测试更新，敬请期待！

### LiveKit 加入安全启动 (Secure Boot) 支持提示

![LiveKit 启动时的安全启动提示](/assets/coffee-break/20240309/imgs/livekit-secure-boot-notice.png)

社区开发者[王邈](https://github.com/shankerwangmiao)为 LiveKit 安装盘生成工具新增了安全启动 (Secure Boot) 支持提示，通过载入来自 Debian 的、经签名的 GRUB 引导器二进制，在开启安全启动功能的 x86 和 AArch64 设备上显示 AOSC OS 不支持安全启动的提示，并给出选项让用户返回 UEFI 设置界面修改相关选项。这一更改将有助于用户了解安全启动导致 AOSC OS 无法启动的原因和潜在解决方式（先前，由于这一部分组件的缺失，用户在开启安全启动的情况下，AOSC OS 无法报告这一问题；在用户视角，这一情况就像是 AOSC OS 由于引导数据损坏而启动失败了一样）。

根据微软知识库 Microsoft Learn 的[专题介绍](https://learn.microsoft.com/zh-cn/windows-hardware/design/device-experiences/oem-secure-boot)，安全启动是：

> 安全启动是电脑行业成员开发的一种安全标准，用于帮助确保设备仅使用受原始设备制造商 (OEM) 信任的软件进行启动。 当电脑启动时，固件会检查每个启动软件片段的签名，包括 UEFI 固件驱动程序（也称为 Option ROM¹）、EFI 应用程序和操作系统。 如果签名有效，则电脑将会启动，而固件会将控制权转递给操作系统。

¹ 编注：原文为“选项 ROM”，一般我们称之为 Option ROM 且无常用翻译，故修改原文。

理论上说，安全启动有助于改善计算机软件可信度，但由于绝大多数个人电脑厂商均只预装了来自微软的签名证书，除从微软处获得了有效签名的一部分较为知名的 Linux 发行版外，没有获得签名的第三方系统便无法在开启此功能的设备上启动了。

此外，考虑到签名所需的费用和对法律实体的需求（我社属于无实体的业余团体），安同开源社区没有获取此类签名证书的现实条件；虽然用户可以手动添加其信任的操作系统发行方的证书允许此类系统启动，但由于我社暂时没有能力维护安全的公钥签名体系，考虑到给用户带来的风险，我们暂无发布经签名的引导器和内核的计划。

因此，AOSC OS 在可见未来不会支持在开启安全启动的设备上启动和安装。

### Debian/Ubuntu 软件兼容框架 Spiral 开放测试

![本 AOSC OS 具有超级牛力](/assets/coffee-break/20240309/imgs/spiral-cow-power.png)

社区开发者[王江津](https://github.com/RedL0tus)近日完成了 Spiral 软件兼容框架的初步开发，可为 AOSC OS 提供为 Debian、Ubuntu 及各类衍生发行版（如 Loongnix 和统信 UOS）开发的商用软件的兼容性。

我们目前已针对各类常用软件，如金山 WPS for Linux、腾讯 QQ、搜狗拼音输入法、Google Chrome、Microsoft Edge 和 Spotify 等软件进行了适配，发现这些软件均工作良好。目前我们已为 x86 和龙架构用户提供 `spiral-preview` 测试源进行测试。如果您希望测试 Spiral 框架，请以管理员身份在终端输入如下命令：

```
oma topics
```

并根据指示开启 `spiral-preview` 测试源，系统自动更新后方可安装和使用为 Debian/Ubuntu 及衍生系统开发的商业软件。考虑到兼容性工程的工作量大和场景复杂，Spiral 框架需要许多时间完善和测试。如果您在使用 Spiral 框架的过程中遇到任何问题，请与我们联系、报告问题，感谢！

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [Camber Huang](https://github.com/CamberLoid)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [Outvi V](https://github.com/outloudvi)
- [SignKirigami](https://github.com/prcups)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [skybird](https://github.com/SkyBird233)
- [Suyun](https://github.com/Suyun114)
- [温柔](https://github.com/xunpod)

开发者角
--------

### BuildIt v2 立项

[BuildIt!](https://github.com/AOSC-Dev/buildit) 打包自动化设施已投产数月，期间大幅度提高了 AOSC OS 维护效率和贡献者积极性。与此同时，该框架需求不断膨胀，复杂度日渐提高。“屎山”未起，社区开发者[陈嘉杰](https://github.com/jiegec)便计划开启 v2 版本开发工作，简化认证流程、增强任务跟踪和管理功能并通过引入用户角色和权限管理允许外部贡献者使用该设施。

日前，陈嘉杰发布了 BuildIt v2 的[设计文档](https://github.com/AOSC-Dev/buildit/blob/v2/DESIGN.md)和[愿景帖](https://github.com/AOSC-Dev/buildit/issues/8)。如果您有点子或意愿协助开发工作，请通过我社[各聊天群组](https://aosc.io/zh-cn/contact)与陈嘉杰联系。

### Dickens 软件包质量检查与报告工具投产

由社区开发者[陈嘉杰](https://github.com/jiegec) 开发的 [Dickens](https://github.com/AOSC-Dev/dickens) 自动质量检查与报告工具已投产，配合 [BuildIt!](https://github.com/AOSC-Dev/buildit) 打包自动化设施使用，可协助 AOSC OS 维护者了解软件包内容发生的变化、潜在质量问题等信息，让打包测试工作更轻松高效。

### libaosc-rs: AOSC 社区 Rust 项目通用组件库

近日，社区开发者[傅孝元](https://github.com/eatradish)发起了 [libaosc-rs](https://github.com/AOSC-Dev/libaosc-rs) 项目，旨在简化 AOSC 社区各类 Rust 语言工具的开发和维护工作，欢迎使用。

### Autobuild4 发布多个修补版本

至截稿时，社区打包工具 [Autobuild4](https://github.com/AOSC-Dev/autobuild4) 发布了第 29 个修补版本，改善了各类功能的可用性并增强了各类 [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 功能。在多位开发者的努力下，Autobuild4 已成为社区的默认打包工具。



栏目介绍
--------

考虑到社区项目和文化等日趋成熟，我们决定重启外联和宣传工作，在更广阔的天地寻找志同道合的朋友。

您阅读的本期半月刊即是我们外宣工作的一部分，我们的文字宣传栏目如下：

- 安记冰室：社区双周报及访谈栏目
- 聊斋：信创及稀见软硬件专题
- 怀古：古董软硬件专题
- 实况：各类线下活动资讯

其中，《安记冰室》于北京时间 (UTC+8) 每月第二、四个周五午间 12 时发布，其他栏目均视讯息内容及编辑进展发布；发布平台包括：

- 社区门户
- 微信公众号“安同开源”
- Bilibili 帐号“安同开源社区”
- 知乎帐号“安同开源社区”
- 微博帐号 @安同开源
- Twitter/X @aosc_dev_cn 及 @aosc_dev（英文）

此外，我们正寻求国内开源及 Linux 相关媒体的朋友合作，一起将我社的工作和文化广而告之。
