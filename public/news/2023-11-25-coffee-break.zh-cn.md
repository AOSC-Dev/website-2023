---
categories:
  - news
title: "安记冰室・十一月下｜社庆特辑"
date: 2023-11-25T12:00:00+08:00
important: false
draft: false
---

> “实㑚吃点何事啊？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

专栏：社区十二周年
------------------

![2011 ~ 2023，安同十二载](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/12th-annivesary.jpg)

12 月 1 日，安同开源社区 (AOSC) 即将走过第十二个周年。

2011 年底，三个初中生打出“安于同学合作”的口号，一路跌跌撞撞走到了今天。曾经高傲且不可一世的“学生主导”社区早已被一棒打醒——十余年埋头苦干，我们一步一脚印，在学习和实践中找到了属于自己的风格。“安于同学合作”，在立项和持续改良各社区项目的同时，我们也与行内其他开发者和社区打成一片，参与移植适配和本地化工作，提出新方案、思路，一起为推进开源软件的更广泛应用作出贡献。与此同时，我们强调以人为本、助人为先，在推进社区项目的同时广交朋友；不论是线上的聊天群组还是线下的 AOSCC 年度聚会，安同开源社区都努力成为维系社区人脉、维护开发者和用户关系、扩展社区与企业关系和资源共享的一股积极力量。

过去的一年中，社区维护的 Linux 发行版 AOSC OS（中译：安同 OS）逐步趋于成熟，在为用户提供可靠、舒心的使用体验的同时，也带动着社区项目的发展。其中，我社维护的软件包管理前端 [Omakase](https://github.com/AOSC-Dev/oma) 正式成为系统的基础组件，逐步替代 APT 成为新的包管理工具；系统安装器 [DeployKit](https://github.com/AOSC-Dev/aoscdk-rs) 逐渐稳定，为各种不同架构的设备提供界面统一、高效部署的安装体验；基于 AOSC OS 衍生的专用发行如维护与恢复环境 RescueKit、硬件稳定性测试环境 BurnKit 等也将陆续亮相，丰富各类用户的系统工具包。与此同时，AOSC OS 推进龙架构 (LoongArch) 支持，作为该架构设备桌面支持和体验改善的排头兵，为新架构用户排雷、解决问题、优化性能，相信能在给 LoongArch 爱好者们提供好用的系统的同时，给其他发行版的架构支持工作提供参考和代码贡献。

在未来的一年中，我们将继续努力，持续维护和改良 AOSC OS 各版本和周边软件的使用体验，完善面向老设备的 Afterglow 发行版设计和维护流程，推进社区网站和文档资源整理工作，筹备 AOSCC 2024 线下聚会，扩展社区在开源软件生态中的贡献和与不同软硬件厂商的积极合作。安同开源社区将继续以积极、友好和专业的态度服务来自社区内外的用户、开发者和爱好者们。

你好，安同！在一起，才是开源。

创始人白铭骢于 2023 年 11 月 23 日

*（好了，白某的肉麻话讲完了，下面讲正事儿……）*

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### Apple Silicon 版 AOSC OS 系统发布

![安同 OS，启动！](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/apple-silicon.jpg)

Apple Silicon 版 AOSC OS 系统发布，搭载 M1 或 M2 芯片的 Mac 电脑用户现可安装 AOSC OS 系统。目前的系统在绝大多数基于 M1 芯片的设备开箱即用[^1]，除 OpenGL 图形加速[^2]和 Thunderbolt[^3] 外，内置存储、各接口、音频、Wi-Fi 和摄像头等内置设备均可使用。M2 支持仍在完善中[^4]，M3 支持即将发布。

在 macOS Ventura (13) 或更新版本系统的终端中运行如下命令即可安装 AOSC OS：

```
curl https://releases.aosc.io/install-asahi | sh
```

如果您在安装或使用系统时遇到问题，请在 AOSC OS GitHub 仓库 [报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) 或于下列联系方式中与我们取得联系。


### 2023 年底 AOSC OS 壁纸开放征集

多年来，得益于来自社区的踊跃投稿，AOSC OS 的壁纸包内容愈发丰富（目前包含超过 100 张）。距离上次壁纸征集已有半年，现征集社区壁纸投稿，欢迎大家参与！

考虑到过去数次壁纸征集投稿量非常大，导致壁纸包大小急剧增长，今年年底征集我们将在贡献者间进行初步选拔，选出 10 张壁纸纳入默认的壁纸包中（其余投稿将包含在额外 (extras) 壁纸包中，但考虑到对系统大小的影响，因此默认不预装）。来年上半年的默认壁纸将通过社区投票在通过初选的壁纸中选出。

#### 投稿规则

- **投稿仅限原创作品**，但格式不限（摄影作品或平面设计均可）
- 除非作为平铺图案使用，壁纸分辨率**必须高于 3000×2000**
- 投稿**不得包含商标及（虚拟及现实生活中）除安安/同同外的肖像**
- 投稿**不得包含有关政治、种族、宗教的观点性内容**

#### 投稿流程

1. 在 GitHub 上的 [征集公告](https://github.com/AOSC-Dev/aosc-os-abbs/discussions/4836) 跟帖回复要投稿的壁纸
2. 在**每张**壁纸链接下注明如下信息：壁纸标题、作者名称及邮箱地址，以及壁纸许可

> 注：如上规则解释权归社区贡献者所有。在征集截止后，社区贡献者将召开例会，届时我们将根据合规性及质量规则筛选壁纸投稿，并组织内部投票选出十张候选默认壁纸。

**投稿截止时间：UTC +8 时间 12 月 15 日零时。**

感谢您的投稿！

### 软件更新清单数据 (Topic Update Manifest)

相信使用过 Windows 的朋友们大多都见过 Windows Update 的界面。虽说 Windows Update 由于种种设计和使用体验问题可以说是毁誉参半，但我们发现其对系统更新内容的整理和呈现方式实际上有可取之处。Linux 世界中，系统更新大多以软件包为单位来更新，且数量往往较多；包管理系统就是 Linux 世界的 Windows Update，但用户在更新系统时往往只能看到具体更新了什么软件包，但很难了解到这些软件包更新的内容和效果。

以 Windows Update 更新包的描述格式为蓝本，我们设计了一款用于描述更新大致内容的[元数据格式规范](https://gist.github.com/MingcongBai/912e778216aad58cf504713dcd4898cc)，方便包管理前端呈现用户可读的系统更新概览。该格式规范目前正在征求意见中，欢迎您来评论区提出意见和批评。

### 预览：BurnKit 硬件稳定性测试套件

在推进 AOSC OS 龙架构 (loongArch) 移植的过程中，社区开发者们被 LoongArch 设备的硬件兼容性弄得焦头烂额，从内存到显卡，稳定性问题时有发生；更“要命”的是，由于龙芯和第三方板卡官方没有提供官方兼容硬件列表，社区几位开发者可以说是被整得团团转，每周都在找、买、退各种硬件，方才整出几台基本稳定的，用于日常使用和开发工作的机器。

为了方便验证硬件稳定性，亦配合龙芯开源社区推进 [“龙架构硬件兼容性数据库 (QVL)”](https://github.com/loongson-community/areweloongyet/issues/68) 项目的数据收集需要，我们设计了一款专门用于压测设备各组件的系统发行——BurnKit。BurnKit 可写入 U 盘或光盘中直接启动使用。

BurnKit 的开发工作仍处于初步设计阶段，我们计划在 BurnKit 中包含如下几个测试项目：

- 内存稳定性测试：使用 [stressapptest](https://github.com/stressapptest/stressapptest) 持续测试设备 80% 的可用内存容量 24 小时，验证高内存 I/O 负载下的系统稳定性
- 图形内存测试：运行 10 个 [glmark2](https://github.com/glmark2/glmark2) 实例 1 小时，验证 GPU 显存访问的稳定性
- 存储 I/O 压测：每处理器核心运行 2 个 [stress-ng](https://github.com/ColinIanKing/stress-ng) 混合 I/O 压测项目，验证各工况下存储 I/O 的稳定性
- OpenGL 测试：使用 [Blender](https://www.blender.org) 的 Eevee OpenGL 渲染器渲染一个较为复杂的动画序列，验证 GPU 中 OpenGL 功能的稳定性
- GPGPU 测试：使用 [LuxMark](http://www.luxmark.info/) OpenCL 测试项目，验证 GPU 通用计算功能的稳定性
- 组合运行上述不同项目，验证多重负载下的整体系统稳定性

这些项目运行过程和日志都将统一整理好，方便提交到相关数据库中，方便他人参考。如果您希望就对 BurnKit 的设计和测试项目提出建议，欢迎在 [BurnKit](https://github.com/AOSC-Dev/burnkit) 仓库中提交工单 (issue) 或来我社各聊天群组（见文末“一起吹水”一节）讨论。

### 持续推进 AOSC OS“合龙”

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- 十月图形栈套件更新 (`graphical-stack-survey-20231031`)：引入大量图形栈组件更新，修缮新硬件支持并提高稳定性；修复 Firefox 视频硬件解码支持，提高多媒体浏览体验
- [Omakase](https://github.com/AOSC-Dev/oma) 包管理前端更新至 1.1.8，修复无法同时查询多个软件包详情和无法正常显示依赖报错的问题
- 软件源镜像管理器 (`mirrormgr`) 更新至 0.8.0，新增 Omakase 集成支持，取代先前的 apt-gen-list 工具
- systemd 系统初始化及服务管理器 (`systemd`) 更新至 254.6，引入大量新特性并修复了安装时的警告输出
- Firefox 浏览器 (`firefox`) 更新至 119.0.1，打开二级架构的硬件视频解码加速支持，大幅度提升观看在线视频时性能
- Telegram 即时通讯软件 (`telegram-desktop`) 更新至 4.11.8，支持数种新的消息及引用格式
- Discord 聊天、语音及直播软件更新至 0.0.35
- 命令行有道词典 (`ydcv-rs`) 更新至 0.6.3，修复“网络短语”栏目的解析特性及二级架构的 HTTPS 访问支持
- MKV 视频格式处理套件 (`mkvtoolnix`) 更新至 79.0，新增从 Dolby Vision 提取 AV1 等特性支持
- Blender 图形设计套件 (`blender`) 更新至 3.6.4
- R 统计学编程与绘图套件 (`r`) 更新至 4.3.1
- Exim 邮件服务器与客户端套件 (`exim`) 更新至 4.97，修复数个功能性问题与安全漏洞
- Fcitx 的萌娘百科词库 ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) 更新至 20231114，引入许多新词
- Boost 运行时与开发头文件库 (`boost`) 更新至 1.83 并更新或重构相关软件，改善部分新 C++ 程序的开发体验并引入了 NumPy 绑定库以支持 LuxCoreRender 等科学计算相关软件
- NVIDIA 通用计算与编程套件 CUDA (`cuda`) 更新至 12.2.2+535.104.05，修复与新 NVIDIA 驱动的兼容性
- Gitoxide 高性能 Git 实现 (`gitoxide`) 更新至 0.31.1，新增 Git dump 等协议特性支持
- 用于 Bash 的 Git 提示符组件 ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status)) 更新至 0.2.1，改善 Rebase 等操作时的提示样式
- 命令行文件搜索工具 (`fd`) 修复了在 Apple Silicon 设备等使用 16K 内核分页设备上无法使用的问题
- Sphinx 文档生成套件 (`sphinx`) 更新至 7.0.1，修复与文档格式转换工具 (`docutils`) 的兼容性
- Docutils 文档格式转换工具 (`docutils`) 更新至 0.20.1，修复与 Sphinx 7.x 的兼容性
- TeXLive 套件 (`texlive`) 修复安装时格式生成脚本报错及某些工具指向错误路径的问题
- 可执行文件压缩工具 (`upx`) 更新至 4.2.1，修复 Rust 二进制压缩支持
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具更新至 1.7.5，详见下文

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- 可移植事件主循环库 (`aml`)
- 只读 APFS 文件系统驱动 (`apfs-fuse`)
- 代码结构搜索、修整及重写工具 (`ast-grep`)
- 命令行程序性能分析工具 (`hyperfine`)
- EDID 与 DisplayID 解析库 (`libdisplay-info`)
- 命令行死链探测工具 (`lychee`)
- VNC 服务端 API 库 (`neatvnc`)
- C 语言递归下降解析器 (Recursive-descent Parser) 生成器库 (`peg`)
- Vulkan 开发者工具库 (`vulkan-utility-libraries`)

其中，与 Apple Silicon 设备支持有关的包有：

- 基础支持套件包 (`asahi-base`)
- ALSA 音频系统布局配置 (`alsa-ucm-conf-asahi`)
- 通用管理组件与脚本 (`asahi-common`)
- 固件提取器 (`asahi-fwextract`)
- Linux 内核 (`linux-kernel-asahi`, `linux+kernel+asahi`)
- 通用引导器 (`m1n1`)
- U-Boot 引导器镜像 (`uboot-asahi`)

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具发布 1.7.5 版，将 `/usr/gnemul` 模拟系统根路径加入到路径白名单中；默认关闭 `update-alternative` 工具过于敏感的警告输出；在构建后安装软件包时默认使用软件包中附带的新版配置文件
- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) 发行版生成工具发布 0.3.3 版，修复某些情况下清理多余文件时无法删除 `/proc` 下文件的问题

#### 周边项目

- Bash 基础配置 ([bash-config](https://github.com/AOSC-Dev/bash-config)) 发布 0.6.0 版，默认开启 `ip` 命令的彩色高亮功能
- PMON 配置生成器 ([pmon-update](https://github.com/loongson-community/pmon-update)) 新增发行版通用实现（先前只支持 Debian 系发行版），可改善搭载 PMON 固件的 MIPS 龙芯设备 (`loongson2f`, `loongson3`) 上管理多个内核版本时的体验

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。目前，我们开放如下测试源：

- **Linux 内核 6.6 (`linux-kernel-6.6`)：** 将 Linux 内核更新至 6.6 分支，新增硬件支持（如在 RISC-V 上打开 ACPI 支持，新增龙架构配置等），引入性能优化等（如在 x86_64 架构内核上关闭先前因为疏忽打开的调度器调试支持`CONFIG_DEBUG_PREEMPT`，加速应用启动）
- **MIPS 龙芯修缮 (`loongson3-fixup-2`)：** 为龙芯专版 GRUB (`grub-loongson3`) 新增 `update-grub` 命令，默认为板载显卡选用 `loongson` 驱动，关闭 LevelDB 的 tcmalloc 支持以修复中州韵 (RIME) 输入法崩溃的问题等
- **signing-party (`signing-party-new`)：** 引入 `signing-party` 包，方便用户参加 PGP 签名派对等社交场合

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 讨论会：社区论坛搭建筹备

考虑到社区邮件列表维护状态欠佳，我们希望尽快将社区的非即时通信转移到一个论坛系统上。

我们暂定于在 UTC+8 时间本周日（2023 年 11 月 26 日）下午二时就论坛平台选择、工作计划和人员安排等进行讨论。如果您有兴趣参与社区论坛维护和运营，欢迎来 [语音频道](https://discord.gg/VYPHgt9) 参与本次讨论会。

### 预告：《聊斋》创刊号

> 编者按：拖这么久了，也许有必要解释下为什么这期《聊斋》为何迟迟没有发布——考虑到目前社区正与龙芯中科的工程师协同调试使用过程中遇到的问题，我们不希望在有关问题得到解决或得出初步结论之前草率地进行讨论或吐槽；此外，遇到的问题和解决过程记录较长，我们目前希望更系统性地整理该刊内容，并分期发布，方便读者阅读。在一切就绪后，《聊斋》中遇到的每个问题将附有解决方案、或对问题原因的分析，以期最大化此类内容的建设性。感谢各位读者的理解和耐心！

过去几个月中，社区贡献者陆续购买了数台搭载龙芯 3A5000 及 3A6000 的设备，用于各种不同场景。那么，龙架构 (LoongArch) 加持的龙芯设备的使用体验如何呢？敬请期待《聊斋》创刊号！

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/3a5000.jpg)

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

请扫描此二维码添加好友并说明来意：申请加入 AOSC 社区频道。

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/discord.png)

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
