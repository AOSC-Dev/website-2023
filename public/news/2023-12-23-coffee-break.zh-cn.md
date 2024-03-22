---
categories:
  - news
title: "安记冰室・十二月下"
date: 2023-12-23T12:00:00+08:00
important: false
draft: false
---

> “你饮咩茶啊？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

专栏：新年寄语
--------------

各位读者朋友们：

您现在阅读的是我社在本年度发布的最后一期双周报《安记冰室》。我很欣慰：本刊从八月开始记录我社开发和组织工作的点点滴滴，不仅成功重启了我社的外宣工作，更让社区各位同事的辛勤工作得到了充分展示。如您所见，十二月下号很可能是我们工作成果最多的一期——自动化设施的正式投产、非标准设备支持的新进展、新构建工具的开工大吉无疑为 2023 年画下了圆满的句号。我相信，2024 年的安同开源社区也将继续前进，认真、专业、热情地实现我们的技术和文化愿景，提出新想法、实践新思路、造就新成绩，并以此全心全意服务社区内外的用户、好友和同仁们。

在新年之际，我在此感谢今年以来为社区各位同事在开发和组织工作的不懈努力，也预祝各位同事和读者朋友们新年快乐，万事顺意，身体健康！

白铭骢，于《安记冰室》十二月下号截稿前

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### 解放生产力：AOSC OS 自动化设施正式投产！

近两周，社区开发者 [陈嘉杰 (jiegec)](https://github.com/jiegec) 发起了 [BuildIt!](https://github.com/AOSC-Dev/buildit) 项目，与 [傅孝元](https://github.com/eatradish) 一同协作，以最小最简的原则进行设计和实现工作，至截稿时已正式实现、发布和部署了我社发行版 AOSC OS 的自动维护设施，**结束了社区长达十余年的人工维护历史。**

从本质上说，BuildIt! 是一个构建任务分发管理器，其主要功能有：

- 机器人界面，维护者可以通过 Telegram 聊天软件给管理器提交任务和发出其他指令
- 将维护者提交的构建任务分发到社区的各构建服务器
- 在目标服务器启动 Ciel，使用标准流程编译和上传软件包
- 将编译成功的软件包上传至相应软件源中
- 收集、汇总编译日志和状态，通过机器人交互界面反馈给维护者
- 根据维护者提供的信息向 [ABBS 软件包构建配置树](https://github.com/AOSC-Dev/aosc-os-abbs) 提交合并请求、自动生成更改概览、标记更改类型
- 根据构建情况自动更新上述合并请求

作为一个支持多种架构和设备的、维护着数千个系统组件（软件包）且由志愿者业余参与维护的 Linux 发行版，这一自动化设施的实现和投产将无疑起到“解放生产力”的作用：维护者们不再需要逐一登录各构建服务器、手动输入构建和上传等指令和坐在电脑前等待构建任务完成；在编码和测试工作完成后，亦无需编写格式繁琐的合并请求正文，更不用自动勾选和记录构建测试情况。在本周三自动化设施投产后，我社的维护积极性已有可见改善——将啰嗦的流程和千篇一律的重复劳动排除后，相信我社维护者将有更多精力和意愿推进 AOSC OS 的细节调优、结构标准化和质量管控工作。

自动化设施只是一个起点，一个前提，相信从这周开始，AOSC OS 的持续维护和发展将进入效率更高、质量更高、开发者和用户体验共进的新轨道。BuildIt! 的实现和投产无疑是迎接 2024 年之际令社区贡献者们欢欣鼓舞的一大里程碑事件。

### Devena 计划：AOSC OS 非标准设备镜像支持库

AOSC OS 关爱您的开发板和各类非标准设备！

Devena（全称 Device Enablement）最初由 [Icenowy Zheng](https://github.com/Icenowy) 提出，旨在为 AOSC OS 提供各种 ARM 设备提供开箱支持，通过引入设备专属支持组件，大幅度简化在如树莓派、Apple Silicon 乃至 Surface 等设备上安装 AOSC OS 的流程、优化使用体验。

![Devena 初次启动向导](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/devena-init.png)

其中，[devena-lib](https://github.com/AOSC-Dev/devena-lib) 为 Devena 计划的核心项目，目前由 [杨欣辉](https://github.com/Cyanoxygen) 主管。该项目主旨是定义各类设备需要用到的、可以复用的过程，如：初次启动设置过程、日常内核更新及固件更新过程等。devena-lib 将初次启动过程分为若干个小步骤，利用 Dracut 初始化内存盘管理器的框架完成操作。这些初次启动设置的步骤是绝大多数需要使用特殊 AOSC OS 镜像的 Devena 目标设备所需要的，如：

- 调整分区表 (GPT)
- 扩展根分区大小和文件系统
- 生成随机的文件系统和分区表 UUID
- 生成和应用基于设备具体硬件条件优化的系统配置

Devena 日后还将开发一个基于 Kconfig 的镜像生成器，让用户可以随时生成给自己的开发板使用的镜像。

### 新世代 AOSC OS 构建工具 Autobuild4 开发启动

在社区发行版维护转向自动化之际，社区开发者 [刘子兴](https://github.com/liushuyu) 发布了我社新一代的软件包构建工具 [Autobuild4](https://github.com/AOSC-Dev/autobuild4)。Autobuild4 相对目前已投产使用近十载的 [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 更注重可靠性、使用简化和性能优化。此外，Autobuild4 将集成现有 [ACBS](https://github.com/AOSC-Dev/acbs) 软件包配置与源码管理器的功能，可以直接管理现有的构建配置。

在初步开发完成后，Autobuild4 还将引入诸如自动依赖补全、泛 Debian 兼容性等特性，以其改善发行版维护质量和提升系统软件兼容性。

有关 Autobuild4 的实现愿景，请见我社于 12 月 16 日的 [讨论纪要](https://wiki.aosc.io/developer/minutes/20231216/)。

### 展望 LibLoL：龙架构旧世界应用程序兼容运行时

从龙芯开源社区[“咱龙了吗？”](https://areweloongyet.com/)网站的[《每周一龙》](https://areweloongyet.com/newsletter) 栏目上的捷报频频中不难看出，当下龙架构 (LoongArch) 软件生态建设如火如荼、成绩斐然——在上游项目和如我社等系统集成项目的协作努力下，龙芯用户们使用有如 AOSC OS 等开源操作系统的体验日益改善。但是，[“新世界”和“旧世界”](https://areweloongyet.com/docs/old-and-new-worlds) 两个软件生态的割裂格局尚未成为历史，许多商业软件，如金山 WPS Office、腾讯 QQ 和龙芯打印机驱动引擎 LSVP 等商业软件至今面向封闭和非标准的旧世界生态发布，而使用面向开源、上游集成和标准化的新世界生态的用户们则无奈与这些软件有如“阴阳两隔”，无福消受。

尽管我社在原则和行动上上坚定支持新世界生态，期待着龙芯软件生态的日益开放化和标准化，我们认为作为操作系统发行方必须牢记服务用户需求的宗旨，因此，我们不应该对生态割裂这一不幸而无奈的现状坐视不管。对此，我社开发者 [王邈](https://github.com/shankerwangmiao) 交出了他的答卷：libLoL (LoongArch on LoongArch) 旧世界应用程序兼容运行时。这一项目由两大部分组成：

- 内核部分：通过 [la_ow_syscall](https://github.com/shankerwangmiao/la_ow_syscall) 模块，给 Linux 内核新增旧世界系统调用支持，进而使得新世界内核得以兼容旧世界运行时和应用程序
- 运行时部分：使用旧世界发行版 [Loongnix](https://www.loongson.cn/system/loongnix) 的核心运行时库，使得旧世界应用程序可以无缝在新世界系统上启动

LibLoL 目前 [已经完成运行时部分的设计](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4949)，在完成内核模块（亦可理解为驱动）的载入向导后，将作为可选特性提供给使用龙架构设备的 AOSC OS 用户使用，敬请期待！我们也欢迎其他新世界发行版维护者考察 LibLoL，视自身情况和需求集成这一项目的成果。

最后再次重申我社立场：开发这一旧世界兼容运行时的初衷是提升兼容性和方便用户。**我社坚决反对闭门造车和不可持续的旧世界软件生态建设，并强烈呼吁龙芯恪守十一月底有关支持上游开源生态建设的承诺，坚持和鼓励新世界软件生态建设。**

### 会议预告：KDE 6 测试考察

![Arch Linux 的 KDE-Unstable 已开始推送 KDE 6 测试版相关组件](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/arch-linux-kde-unstable.png)

多年来，AOSC OS 的桌面体验一直得益于 KDE 桌面环境的强力驱动，KDE 桌面的发展直接决定着 AOSC OS 的核心用户体验。

KDE 6 将于 2024 年春季发布，考虑到该桌面更新发布在即且 Arch Linux 已有专用 [KDE-Unstable](https://archlinux.org/packages/?repo=KDE-Unstable) 源可供测试，我们计划在 UTC+8 时间本周日（12 月 24 日）下午 2 时组织会议，对 Arch Linux 的 KDE 6 桌面打包方式、配置和使用体验进行考察，以便筹划 AOSC OS 相应的更新工作。届时，考察将以视频直播的方式进行。

欢迎各位来我社 [语音频道](https://discord.gg/VYPHgt9) 参与本次会议。

### QVQNetwork 新镜像上线！

![QVQNetwork 新镜像上线！](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/new-mirror-qvqnetwork.png)

近日，[QVQNetwork 开源镜像站](https://mirrors.qvq.net.cn/) 收录了我社软件源。该 1Gbps 带宽镜像位于重庆市，相信将为中国内地用户们提供高质高速的服务。

再次感谢 QVQNetwork 的鼎力相助！

### 持续推进 AOSC OS“合龙”

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- [oma](https://github.com/AOSC-Dev/oma) 包管理前端更新至 1.2.4，修复一些运行时报错并改善 dpkg 修复软件包管理器状态的逻辑
- [AOSC OS 系统安装器](https://github.com/AOSC-Dev/aoscdk-rs) 更新至 0.11.
- 十一月底 Mozilla 套件更新 (`mozilla-survey-20231122`)：更新 Firefox 浏览器 (`firefox`) 至 120.0.1、Thunderbird 邮件客户端 (`thunderbird`) 至 115.5.2，为所有主线架构打开硬件视频编解码加速支持及 OpenH264 编解码器支持，允许在支持 WebRTC 特性的架构上使用视讯会议平台
- Visual Studio Code (`vscode`) 及 VSCodium (`vscodium`) 集成开发环境更新至 1.85.0
- Discord 聊天、语音及直播软件 (`discord`) 更新至 0.0.39
- Gitoxide 高性能 Git 客户端 (`gitoxide`) 更新至 0.32.0
- OpenVPN 代理服务器管理套件 (`openvpn`) 更新至 2.5.3
- open-rs 万用文件打开器 (`open-rs`) 更新至 5.0.1
- PipeWire 音视频设备及媒体流管理器 (`pipewire`) 更新至 1.0.0
- yt-dlp 在线视频及流媒体下载器 (`yt-dlp`) 更新至 2023.11.16，修复数个流媒体网站的支持
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具更新至 1.8.3（详见下文“开发工具”节）
- [ACBS](https://github.com/AOSC-Dev/acbs) 软件包构建脚本、源码及构建管理器更新至 20231217.4（详见下文“开发工具”节）
- 硬件设备信息库 (`hwdata`) 更新至 0.377，新增大量硬件组件名称、参数等信息
- 修复 OpenVDB 数据结构运行时库更新导致 Blender 等应用程序无法正常启动的问题
- 修复了大量 Rust 程序在基于 MIPS 的龙芯移植 (`loongson3`) 上无法构建的问题
- 修复了 Shadowsocks (`shadowsocks-libev`) 无法使用一般用户权限启用 `IP_TRANSPARENT` 特性的问题
- 合并了龙架构 (LoongArch) 专属的适配修改，AOSC OS 即将可以基于稳定源构建龙架构系统移植

**新增组件**

其中，AOSC OS 软件仓库中新增如下软件包：

- 命令行图像转 ASCII 艺术字工具 (`aarty`)
- 高性能内存分配器 (`mimalloc`)
- Mold 链接器 (`mold`)
- “鸭子”命令行文件管理器 (`yazi`)
- 命令行目录切换助手 (`zoxide`)

**本期包工**

感谢这两周参与 AOSC OS 维护工作的各位同事（按 GitHub 用户名字母顺序）：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [柴天浩](https://github.com/cthbleachbit)
- [傅孝元](https://github.com/eatradish)
- [Felix Yan](https://github.com/felixonmars)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [canarypwn](https://github.com/Nyovelt)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [王江津](https://github.com/RedL0tus)
- [Suyun](https://github.com/Suyun114)

#### 开发工具

- [ACBS](https://github.com/AOSC-Dev/acbs) 软件包构建脚本、源码及构建管理器发布 20231217.4 版：[刘子兴](https://github.com/liushuyu) 和 [白铭骢](https://github.com/MingcongBai) 重新设计了 ACBS 构建概要界面，方便自动化设施识别和反馈构建情况
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具发布 1.8.3 版：[刘子兴](https://github.com/liushuyu) 修复了龙架构上由于工具链中已知问题导致某些软件包链接时优化（Link-Time Optimisation，简称 LTO）过程中报错的问题，并引入了一套用于清理编译器和链接器参数中多余空格的逻辑；[白铭骢](https://github.com/MingcongBai) 修缮了 Rust 构建模板中 ld.lld 缺失时的报错信息，使其更易懂并为用户提出解决方案；[千须末 (OriginCode)](https://github.com/OriginCode) 修复了 Meson 构建模板在搭配新版 Meson 使用时关于调用方式不正确的警告
- [陈嘉杰 (jiegec)](https://github.com/jiegec) 和 [傅孝元](https://github.com/eatradish) 完成了 [BuildIt!](https://github.com/AOSC-Dev/buildit) AOSC OS 自动化维护设施的基础实现（详见上文“解放生产力：AOSC OS 自动化设施正式投产！”专栏）
- [刘子兴](https://github.com/liushuyu) 公布了 [Autobuild4](https://github.com/AOSC-Dev/autobuild4) 次世代软件包维护套件的初始实现（详见上文“新世代 AOSC OS 构建工具 Autobuild4 开发启动”专栏）
- [傅孝元](https://github.com/eatradish) 实现了一款名为 [minzhengbu](https://github.com/AOSC-Dev/minzhengbu) 的 GitHub 登录信息同步设施，使用 Telegram 的维护者可通过该工具绑定 GitHub 帐号，以便配合 BuildIt! 使用（如提交合并请求等操作）

#### 周边项目

- Bash 基础配置 ([bash-config](https://github.com/AOSC-Dev/bash-config)) 发布 0.6.5 版：[白铭骢](https://github.com/MingcongBai) 修复了 WSL 环境下可执行文件搜索目录 (`$PATH`) 被覆盖的问题，并为 `git diff` 命令默认开启了行末空白高亮
- [RepoKit](https://github.com/AOSC-Dev/repokit) 软件源管理套件新增 [QVQNetwork 开源镜像站](https://mirrors.qvq.net.cn/) 相关信息，安装程序等应用程序的用户现可使用该镜像下载相关数据
- [杨欣辉](https://github.com/Cyanoxygen) 发布了 [Devena 非标准设备镜像支持库](https://github.com/AOSC-Dev/devena-libs)（详见上文“Devena 计划：AOSC OS 非标准设备镜像支持库”专栏）

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。其中，如下几个测试源包含重要更新：

- **十二月命令提示符套件更新 (`app-shells-survey-20231210`)：** 更新各命令提示符（如 Bash 和 Fish）并引入相应新特性
- **十二月 Wine 及 Vulkan 图形库套件更新 (`wine-vulkan-survey-202312`)：** 更新 Wine（Windows 应用程序模拟器）及 Vulkan 图形库组件，改善 Windows 游戏（尤其是 32 位的 DirectX 游戏）体验
- **十二月 WSL (Windows Subsystem for Linux) 套件更新 (`wsl-survey-20231213`)：** 改善“适用于 Linux 的 Windows 子系统”开箱使用体验，如默认打开 systemd 支持等，并引入管理后台服务和内存缓存相关的工具
- **Linux 内核 6.6 (`linux-kernel-6.6`)：** 将 Linux 内核更新至 6.6 分支，新增硬件支持（如在 RISC-V 上打开 ACPI 支持，新增龙架构配置等），引入性能优化等（如在 x86_64 架构内核上关闭先前因为疏忽打开的调度器调试支持 `CONFIG_DEBUG_PREEMPT`，加速应用启动）
- **龙架构交叉编译器 (`loongarch64-cross-new`)：** 引入龙架构 (LoongArch) 交叉编译器组件
- **MIPS 龙芯修缮 (`loongson3-fixup-2`)：** 为龙芯专版 GRUB (`grub-loongson3`) 新增 `update-grub` 命令，默认为板载显卡选用 `loongson` 驱动，关闭 LevelDB 的 tcmalloc 支持以修复中州韵 (RIME) 输入法崩溃的问题等

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 《聊斋》创刊号将于下周发布

上周，我们以社区名义将由 [白铭骢](https://github.com/MingcongBai) 主编的《社区报告：关于改善龙芯中科与社区协作的几点观察和意见》提交给了龙芯中科相关的领导，将我社在过去数个月观察和参与龙芯社区软件生态维护的过程中发现的一些问题和
疑问整理起来，以建设性为原则提出意见，希望能够进一步推动社区与龙芯中科的积极协作。至此，我们认为已充分证明我社的善意，发布这期围绕龙架构设备编写的《聊斋》创刊号的时机已经成熟。

![“千字节跳动”：在龙架构上由于 AMDGPU 内核驱动未正确实现写入合并 (write-combine) 导致的显示问题](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/kilobytedance.jpg)

《聊斋》创刊号由 [千须末 (OriginCode)](https://github.com/OriginCode) 主编，命题“龙芯 3A5000 体验报告”。他将在本文中回顾从 AOSCC 2023 抽奖赢得一台龙芯 3A5000 台式机后的经历的“命运羁绊”和“干沟万壑”。（笑）

### AOSC OS 廿三年末默认壁纸投票

![晋级决赛的 16 张 AOSC OS 壁纸](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/wallpaper-poll.jpg)

经过贡献者初选，我们选出了得票最多的 16 张壁纸晋级社区投票。在未来一周余，我们将通过社区投票选出 2023 年底的默认 AOSC OS 壁纸和锁屏背景，欢迎您的参与！投票不设多选限制（您可以随意选择 1 - 16 张壁纸）。

本次晋级的壁纸有：

- 斜阳几何 / Geometric Dusk（作者：Ariel AxionL）
- 爽秋 / Brisk（作者：白铭骢）
- 倒影之路 / Pathway of Reflections（作者：lz233）
- 玉龙雪山 / Yulong（作者：新一）
- 沙漠远眺 / The Desert（作者：椰椰雪球）
- 乌云过后 / Skylight（作者：椰椰雪球）
- 地之脊 II / Mountain Range II（作者：Mogician Yang）
- 拼图 II / Patches II（作者：Mogician Yang）
- 向天 / Fly Low（作者：Mogician Yang）
- 富士山 I / Mount Fuji I（作者：Yu Changyuan）
- 富士山 III / Mount Fuji III（作者：Yu Changyuan）
- 棉花堡 / Pamukkale（作者：Yu Changyaun）
- 祁连山 / Qilian Mountain（作者：Yu Changyuan）
- 油菜花田 I / Rapeseed Field I（作者：Yu Changyuan）
- 油菜花田 III / Rapeseed Field III（作者：Yu Changyuan）
- 梅里雪山日出 / Morrow Ray Upon Meili（作者：YzyParry）

本投票将于 UTC+8 时间 2023 年 12 月 31 日午夜截止。

投票链接：https://forms.gle/EAEjwTEEgDDzw4GG6

### AOSC 廿四年“流浪相机”计划初步意向问卷

社区计划在 2024 年仿照 B 站 Up 主 [LKs](https://space.bilibili.com/125526/) 的“漂流相机”搞一个“流浪相机”计划，预先约定一套摄影器材（相机和镜头），将一台由社区好友借用的相机寄出，在半年到一年间在参与者间接龙，并将自己选出的最优作品投稿，作为作为廿四年中或年底的默认壁纸集。第一轮“流浪相机”属于实验性运作，我们计划限定现有贡献者和经过某种流程确认可信任的社区好友（比如贡献者认识的人）参与。

本问卷用于收集关于活动时长、地理范围、器材和各类意见等初步意向。本计划预计在 2024 年三月前启动。

问卷链接：https://forms.gle/zA74WjimoXrmJURh7

### 安安/同同表情包内容征集问卷

![社区吉祥物：安安和同同](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/mascots.png)

社区计划寻找画师，根据我社吉祥物“安安”和“同同”创作各类表情，制作表情包：表情包中的各类表情除在社区聊天群组内使用之外，还可用于社区网站、外宣和活动等用途。和其他甲方沟通时，对方反馈官网提供的立绘及设定可能不够全面，且表情包具体内容也需要提前确定，以便画师进行设计。

本问卷用于收集表情包内容相关的点子，包括但不限于：表情主题、吉祥物的姿势、配字和具体的梗等；请尽可能详细地描述你的点子。本问卷将于 UTC+8 时间 12 月 31 日午夜截止。

我们计划在年初落实此事，届时可能需要发起募捐用于报销画师等相关款项，后续会再有通知。

问卷链接：https://forms.gle/t4rcLj6omCE4cufy5

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

请扫描此二维码添加好友并说明来意：申请加入 AOSC 社区频道。

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/discord.png)

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
