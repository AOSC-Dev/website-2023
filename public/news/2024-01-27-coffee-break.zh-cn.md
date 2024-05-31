---
categories:
  - book
title: "安记冰室・一月下"
date: 2024-01-27T12:00:00+08:00
important: false
draft: false
---

> “您都喝点儿啥？”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

改版说明
--------

时隔一个月，《安记冰室》再次与各位见面了。新的一年，本刊将继续为您报道我社各项工作进展和活动资讯，通过改版和内容简化，以更精炼的方式为您呈现这些信息。从本期开始，本刊将更着重从用户角度报道各类社区及项目资讯，包含如下几个板块：

- 社区脉动：本版报道我社最新活动资讯，包括如投票、问卷和例会等线上活动和 AOSCC 等线下活动
- 系统快讯：本版报道 AOSC OS 和星霞 OS 近期的各类更新、改进等，助您了解最新系统特性和问题等
- 开发者角：本版报道各类开发工具的更新资讯和各类事关我社新老贡献者的资讯

社区脉动
--------

### 安同“春晚”：首届年度“烙饼会”将于 2 月 15 日开幕

![安同开源社区祝您新春快乐，龙年大吉！](/assets/coffee-break/20240127/imgs/aosc-new-year.png)

农历新年在即，是时候筹划新一年的坑和白日梦了。我们计划在 2 月 15 日（农历初六）下午至傍晚以视频会议的形式举办我社首届“烙饼会”，邀请社区各项目的主要贡献者介绍工作情况和未来一年的工作计划展望。届时，各讲者将以“闪电秀”的形式，用 10 - 20 分钟的时间介绍各自参与的项目，并在介绍完毕后接受来自社区的提问。“烙饼会”也将于 Bilibili 等视频平台全程推流直播。

我们将于未来一周内发布具体日程，目前计划如下讲者和课题：

- [白铭骢](https://github.com/MingcongBai)：AOSC OS 维护情况及特性计划综述（泛 Debian 支持、libLoL、“合龙”等，详细的留给其他各位讲）、新网站建设及其他社区活动（“流浪相机”及 AOSCC 2024）等
- [陈嘉杰 (jiegec)](https://github.com/jiegec)：AOSC OS 自动化维护框架之 BuildIt 及 Dickens
- [傅孝元](https://github.com/eatradish)：新 AOSC OS 安装程序及 oma（小熊猫）包管理前端
- [刘子兴](https://github.com/liushuyu)：Autobuild4、ACBS 及 Ciel 开发展望
- [杨欣辉](https://github.com/Cyanoxygen)：Devena 设备支持框架及 AOSC OS 初次启动向导
- [王江津](https://github.com/RedL0tus)：Spiral 泛 Debian 兼容性框架及系统更新摘要规范

敬请期待！

### “流浪相机”项目筹备完成

今年，我们计划参考 B 站 Up 主 [-LKs-](https://space.bilibili.com/125526/) 的“漂流相机”计划组织社区“流浪相机”计划。本计划预先约定一套摄影器材，将一台由社区好友借用的相机寄出在参与者间接龙。参与者将自己选出的最优作品投稿，组成廿四年下半年壁纸集。

目前，我们也已完成基本筹划工作，目前计划如下：

- 器材：索尼 a7RV 无反相机，搭配 SIGMA 45mm F2.8 DG DN 镜头
- 运行时长：半年，三月中启动，至九月中截止
- 运行地区：中国大陆，含香港和澳门特别行政区
- 参与方式：报名审阅制，仅限现有 AOSC 项目、壁纸投稿贡献者及上述贡献者信任的个人

二月，我们将开始收集报名并开始设计接龙时间表，敬请留意社区各资讯平台更新。

### AOSC 社区论坛 (AOSC BBS) 上线

![社区论坛板块展示](/assets/coffee-break/20240127/imgs/bbs.png)

年末，我们上线了社区论坛 (AOSC BBS) ，旨在为社区成员提供进行技术讨论和寻求技术支持的场合。本论坛亦用于发布社区新闻、活动公告和系统支持信息等。

本论坛分为如下几大板块：

- 综合：用于讨论与社区运营、活动、人员及项目相关的各类话题
- 公告：用于发布社区项目和活动相关信息
- 设备支持：用于发布设备支持进展及讨论 AOSC OS 设备支持的相关问题
- “星霞”发行版：用于讨论与 Afterglow（星霞 OS）发行版有关话题
- 安记冰室：用于发布社区新闻及发布社区期刊《安记冰室》
- 站务反馈：用于提交有关论坛运营的反馈意见等

访问论坛：https://bbs.aosc.io/

### 《聊斋》创刊号发布

本期内容是由[千须末 (OriginCode)](https://github.com/OriginCode) 编撰的“龙芯 3A5000 体验报告”，记录了其在九月初开始使用 3A5000 台式机的体验、遇到的问题和与社区好友们一同摸索到的各类解决方法。

点此阅读：https://github.com/AOSC-Dev/newsroom/blob/master/sigill/20241231/zh_CN.md

系统快讯
--------

### AOSC OS on Windows 11.1.0 发布

![AOSC OS on WSL 示意图](/assets/coffee-break/20240127/imgs/aosc-os-on-wsl.png)

月初，[Kexy Biscuit](https://github.com/KexyBiscuit) 发布了 AOSC OS on Windows 11.1.0，现可于微软商店获取。该项目基于微软的 [Windows Subsystem for Linux](https://learn.microsoft.com/zh-cn/windows/wsl/about) 技术构建，旨在方便用户在 Windows 上部署 AOSC OS 系统环境及各应用。

本次更新包含如下特性：

- 截至 2024 年 1 月 7 日最新的系统组件
- 更新 AOSC OS 图标至新设计
- 支持 Windows Terminal JSON 碎片扩展，以提高集成度和用户体验
- 应用现声明支持最低 Windows 10 版本 1607（操作系统生成版本 14393）

安装方式：

- 微软商店（推荐）：https://www.microsoft.com/store/apps/9NMDF21NV65Z
- 侧载包：https://github.com/AOSC-Dev/AOSCOSLauncher/releases/tag/v11.1.0

### LibLoL Debian 安装包现可供测试

月底，[王邈](https://github.com/shankerwangmiao)发布了 [libLoL](https://github.com/AOSC-Dev/liblol) 龙架构新旧世界应用程序兼容层的 Debian 安装包，方便在龙架构的各位 Debian 用户安装使用。

下载链接：https://github.com/AOSC-Dev/liblol/releases/tag/debian%2Fv0.1.4_pre2-1

如果您在使用过程中遇到问题或困难，请通过文末联系方式或在 [libLoL 仓库的工单页](https://github.com/AOSC-Dev/liblol/issues)反馈问题。

### Spiral：AOSC OS 泛 Debian 兼容框架

长久以来困扰 AOSC OS 用户的一大问题就是软件包的兼容性。虽然 AOSC OS 如同基于 Debian 和 Ubuntu 的各主流发行版一样使用 Debian 软件包 (`.deb`)，但由于系统组件命名和版本策略上的差异，我们的系统实际上无法直接安装为这些发行版设计的软件。这一问题在安装如金山 WPS for Linux、腾讯 QQ 等各类商用和专有软件时尤为突出，为用户带来了极大不便。

因此，[王江津](https://github.com/RedL0tus)立项了 [Spiral](https://wiki.aosc.io/developer/minutes/20240125/) 项目，旨在基于软件包内容自动生成兼容 Debian 软件包名称和版本等兼容数据，让 AOSC OS 在一定程度兼容 Debian 的软件源体系。我们计划在该项目完成实现后针对某些常见软件标记这类信息，为用户使用这类软件提供便利；在中长期，我们计划通过重构 AOSC OS 所有软件包，为所有软件包标记 Debian 兼容信息。

### LiveKit 安装与维护环境新版展望

![AOSC OS 图形化安装程序](/assets/coffee-break/20240127/imgs/deploykit-gui.png)

近期，在[傅孝元](https://github.com/eatradish)、[杨欣辉](https://github.com/Cyanoxygen)和[白铭骢](https://github.com/MingcongBai)等人的努力下，我们将在近期发布的 LiveKit 安装与维护环境中引入如下新特性：

- 图形化安装程序：安装程序新增图形界面，使用更加便利顺手
- 增强内置工具集：新增高级网络配置、文件管理器和文本编辑器等内置工具，方便不同使用场景
- 新增多语言支持：启动 LiveKit 后提供语言选择菜单，方便不同母语用户使用
- 调优使用体验：通过增加与 AOSC OS 桌面版兼容的快捷键配置、新增内存容量提示等，让使用体验更快捷可靠

### 上半年新壁纸默认壁纸出炉

![廿三年上半年默认壁纸图赏](/assets/coffee-break/20240127/imgs/2024h1-wallpapers.jpg)

通过社区投票，我们选出了如下两张默认壁纸：

- 默认壁纸：沙漠远眺 / The Desert（作者：椰椰雪球）；得票率 55.9%
- 默认锁屏背景：梅里雪山日出 / Morrow Ray Upon Meili（作者：YzyParry）；得票率 58.8%

我们将在近期推送更新后的系统壁纸包，新的系统包将使用上述两张默认壁纸。

### AOSC OS 将获芯动“风华”显卡官方支持

![“风华二号”显卡样张（图转 PCBeta）](/assets/coffee-break/20240127/imgs/fenghua-2.jpg)

作为最早发布且功能相对完整的龙架构 (LoongArch)“新世界”发行版之一，AOSC OS 广受龙芯爱好者社区关注和喜爱。近日，我们的发行版也引起了国产显卡厂商芯动科技 (INNOSILICON) 的注意。上周，芯动的生态工程师与我社维护者[白铭骢](https://github.com/MingcongBai)和 Arch Linux、Debian 和 Gentoo 发行版龙架构版本的维护者接触，了解了适配上的各注意事项和预期。我社维护者也将参与该公司“风华”系列显卡的驱动测试、评估和反馈工作。

芯动将在年后发布“风华”系列显卡的驱动包，经过适配，相信各位 AOSC OS 用户很快就能顺利在我们的系统上驱动起芯动公司的“风华”系列显卡了。

### “合龙”竣工在即

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。经过过去近半年的努力，我们已基本将前沿分支上的龙架构适配和更新内容全部合并至系统稳定分支。我们相信“合龙”工作将在未来两周内完成，龙架构（LoongArch，系统架构名 `loongarch64`）将成为 AOSC OS 的正式支持的架构之一。考虑到该版系统用户众多且软件支持也已相对完整，我们计划将龙架构列作 AOSC OS 的第三个一级架构 (Primary Architecture)，与 x86-64 (`amd64`) 和 AArch64 (`arm64`) 移植同级，享受最及时的软件更新。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈。待正式版发布，我们将另行报道。

### 用户公告

**Mesa 23.3.0 更新后较老的 AMD Radeon 显卡视频硬解功能可能存在故障**

根据用户反馈，GCN (Graphics Core Next) 架构前较老的 AMD Radeon 显卡（如信创硬件上较为常见的 AMD Radeon R5 230 和 HD7350 两个型号）上无法正常使用硬件视频解码加速（简称硬解），其症状为视频画面为全黑或有大量杂斑。经调查，该问题是由 [Mesa 23.3 引入的](https://gitlab.freedesktop.org/mesa/mesa/-/issues/10345)，且暂无稳定版本修复了这一问题。

因此，我们建议此类显卡用户暂时打开 Mesa 24 测试源，方可缓解这一问题。请输入如下命令打开该测试源：

```
sudo oma topics
```

而后，输入 "mesa-24"，按 Enter 或空格键选中该测试源，而后按 Esc 应用更改，方可收到版本为 `1:23.3.2+git20240103+dxheaders1.611.0` 的 `mesa` 组件包更新。更新安装完成后，请重启电脑。

Mesa 24 的稳定版本预计将于二月发布，在此之前请保持该测试源打开以便保障视频硬解功能可用。我们为此带来的不便表示歉意。

**字体更新后系统界面可能出现显示问题**

![界面显示问题示意图](/assets/coffee-break/20240127/imgs/font-issue.jpg)

安装近期推送的字体更新，您可能会发现系统中某些程序界面上的字体渲染会出现问题（如图例）；该问题很可能是字体中数据结构发生变化导致的。

如果您遇到该问题，重新登录当前会话即可解决问题。

**全新安装 AOSC OS on WSL 时 systemd 可能无法正常启动**

根据用户反馈，全新安装 AOSC OS on WSL 后，systemd 无法正常完成初始化，导致部分依赖 systemd 和 dbus 的工具无法使用，用户亦无法使用 systemd 相关工具。

经调查，该问题是由 AOSC OS on WSL 缺少 /etc/machine-id 文件导致；systemd 初次启动时会生成全新的 machine-id，由于构建AOSC OS on WSL 时清除掉了此文件，初次启动时产生竞态条件，进而导致 systemd 无法正常初始化。

如果您遇到该问题，请输入如下命令：

```
sudo umount /etc/machine-id
sudo rm /etc/machine-id
sudo touch /etc/machine-id
sudo chmod 444 /etc/machine-id
```

然后使用 `wsl.exe --shutdown` 命令彻底关闭 WSL 会话，并再次启动 AOSC OS on WSL 即可解决问题。AOSC OS on WSL 的下一个版本预计将修复此问题。

我们为此带来的不便表示歉意。

**MIPS64 Release 6 版本降级为 AOSC OS “实验性架构”**

由于 MIPS64 Release 6 架构长期无可用硬件且 LLVM 17 后出现严重的工具链可用性问题（无法构建任何 Rust 程序），为避免后续拖延其他一、二级架构的更新和维护，我们决定将该移植降级为“实验性架构”。

降级后，我们将继续维护该架构移植，但对其软件包更新时效性不作保障；如果您在使用这一架构移植时遇到困难，请联系我们。

开发者角
--------

### Autobuild4 正式投产

近期，由[刘子兴](https://github.com/liushuyu)开发的新一代半自动软件包构建工具 [Autobuild4](https://github.com/AOSC-Dev/autobuild4) 正式发布，对用户界面、可靠性和代码规范要求等方面均进行了增强改进。Autobuild4 目前出于生产测试状态，且考虑到其目前尚未经过充分测试验证，您在使用时可能会遇到一些问题。在此，我们鼓励您积极报告任何问题、疑惑和批评意见，一起将 Autobuild4 做得更好更强。

### “狄更斯”自动打包脚本审阅工具

一月中旬，[陈嘉杰 (jiegec)](https://github.com/jiegec) 立项了用于自动审阅 AOSC OS 软件包构建脚本的[“狄更斯 (dickens)”](https://github.com/AOSC-Dev/dickens) 项目。该工具将根据 [Autobuild Package Manifest Language](https://wiki.aosc.io/developer/automation/apml/) 和 [AOSC OS 软件包样式指南](https://wiki.aosc.io/zh/developer/packaging/package-styling-manual/) 定义的规范自动审阅贡献者编写的打包脚本并反馈质量合规状态和修改意见，降低社区贡献者的审阅和维护压力。

### 新年新气象：AOSC-Dev 代码仓库即将进行大扫除

如今，我社 [AOSC-Dev](https://github.com/AOSC-Dev) 代码仓库已有超过 300 个历史项目，过时项目、外部项目等混杂其中，给项目管理带来了一定困难。我们计划在未来两周内组织对该代码仓库进行大扫除，并分出两个新的代码仓库（GitHub 组织）：

- [AOSC-Archive](https://github.com/AOSC-Archive)：用于归档已停止维护的社区项目
- [AOSC-Tracking](https://github.com/AOSC-Tracking)：用于追踪和更新各 AOSC OS 项目和软件包的补丁

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [Felix Yan](https://github.com/felixonmars)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [秦斐然](https://github.com/Nyovelt)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [Suyun](https://github.com/Suyun114)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [王翔 (KatyushaScarlet)](https://github.com/KatyushaScarlet)
- [SignKirigami](https://github.com/prcups) 



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
