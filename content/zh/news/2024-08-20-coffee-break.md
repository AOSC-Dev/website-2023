---
categories:
  - journals
title: "安记冰室・八月上 | 一周年特辑"
date: 2024-08-20T23:00:00+08:00
important: false

---

<!-- 含着春砂仁的 -->

> “蜂蜜春砂仁！”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

《安记冰室》开业一周年！
--------

![《安记冰室》是我社的主要外宣工程之一](/assets/news/coffee-break/20240818/imgs/biweeklys-slim.png)

一年前，社区恢复外宣的主要工程之一《安记冰室》发布了创刊号。此后，《冰室》以半月刊的形式，对社区工作、活动及项目进展等进行概括性的报道，以多栏目板块的形式帮助用户索引其所关注的内容。年初改版时，又特别引入了“开发者角”栏目，面向开发者，尤其是社区贡献者群体提供信息参考，以便新老人员尽快了解工作流及工具链方面的变化。从信息呈现策略上说，《冰室》着重于在介绍“发生了什么”之余，向读者介绍和解释其与每条新闻和各工具使用、活动参与等方面的具体联系。

从创刊至今，《冰室》已报道过百条社区新闻，在此过程中，愈发多的读者和用户了解到了社区的工作方式和成果；在转发传阅的过程中，不仅让我们收获了更多关注、吸引到了更多贡献者，在用户及贡献者群体不断扩大的过程中，我们也吸收到了许多新信息、新想法和新批评。因此，《冰室》不只是社区的主要外宣窗口，也是社区与尚未熟悉的朋友们接触的主要界面之一。

此外，通过展示各项工作背后具体鲜活的个人，《冰室》还希望在扩大社区知名度和行业认可的同时，为各位贡献者辛勤劳动的历程与成果提供展示平台，并留下具体记录。相信这在贡献者们体现个人价值、扩展人脉和就业发展等方面都会有具体和切实的积极意义。

总而言之，《冰室》是改善我社内外沟通透明度、扩展影响力和协助贡献者专业发展的工具与平台。在一周年之际，感谢各位社区同事不厌其烦地参与供稿、审稿与发布工作，在丰富社区工作内容与参与途径之余，为社区的发展留下清晰的印记，为埋头苦干的志愿者们欢呼鼓舞。

— 白铭骢，2024 年 8 月 18 日

社区脉动
--------

### AOSCC 2024 会务满意度调查

![AOSCC 2024 的顺利举办离不开各位讲者、志愿者和与会者的配合协作](/assets/news/coffee-break/20240818/imgs/aoscc-2024.jpg)

本届 AOSCC 是安同开源社区自创办以来参与人数最多、讲者最多、主题最丰富的一届。本届 AOSCC 得以顺利举办离不开大家的努力配合，感谢各位！

为更好地筹备下一届聚会，我们设计了《AOSCC 会务满意度调查》，以收集与会者的感受、意见和匹配，敬请各位填答！问卷包含参会方式、宣传、选址、会场环境、议程、交通等多个方面，以期尽可能多地收集多方面、多视角的与会者反馈。

[填写会务满意度调查 >>](https://www.wjx.cn/vm/PVelmw8.aspx)

### 安同 OS 软件包树 (aosc-os-abbs) 喜迎第十万个提交！

![十万个提交，十万步脚印](/assets/news/coffee-break/20240818/imgs/hundred-thousandth-slim.png)

安同 OS 使用 Git 管理软件包源码配置已有近十年历史。今天，随着 Visual Studio Code 1.92.1 的合入，软件包树 [aosc-os-abbs](https://github.com/AOSC-Dev/aosc-os-abbs) 迎来了[第十万个提交](https://github.com/AOSC-Dev/aosc-os-abbs/commit/d56c6d0636193b2f48ba9f573393c0467c58806c)。

一步一脚印，安同 OS 始终坚持为用户提供简明、可靠和舒心的工作环境。

系统快讯
--------

### oma 1.6 发布：发布 Debian/Ubuntu 安装包，界面、兼容性双升级

![oma 1.6 特性更新发布：界面、兼容性双升级](/assets/news/coffee-break/20240818/imgs/oma-slim.png)

近日，[傅孝元](https://github.com/eatradish)发布了小熊猫包管理 (oma) 的 1.6 版，在修复数个兼容性问题的同时，对一部分界面进行了调优，也改善了诸如 Windows Terminal 及 TTY 等环境下的使用体验。此外，oma 1.6 还发行了针对 Debian 及 Ubuntu 的 .deb 安装包，方便用户安装使用；具体来说，oma 支持如下版本的 Debian 和 Ubuntu：

- Debian 12
- Debian 11
- Ubuntu 24.04 LTS
- Ubuntu 22.04 LTS
- Ubuntu 20.04 LTS

相对于先前的 oma 1.3 系列，oma 1.6 版包含如下主要特性：

- 探测终端背景并自动调整界面配色，确保各种终端配色下 oma 界面的对比度
- 重新设计了 command-not-found 界面，用表格形式更清晰地呈现安装建议
- 优化 `oma install --reinstall` 行为，在指定 `--reinstall` 参数时自动补全“推荐 (Recommends)”级别的依赖
- 更改 `oma install` 的默认行为，取消了 `fix-broken`（自动修复依赖问题）行为，修复了安装冲突包时未正确报告依赖错误的问题
- 修缮简单软件源 (flat repository) 的刷新支持，行为上与 APT 无限接近
- 新增 oma 测试源管理器 (`oma topics`) 对 `file:/` 与 `file:///` 协议的支持
- 修整了进度条布局对齐，下载界面更为整洁
- 新增在无 256 色的终端环境下使用标准终端主题（16 色）配色的支持

您也许会对 oma 的版本变化之大有所惊讶，实际上这是我们调整了 oma 版本发布规范的结果，详请见下文[“oma 发布贡献者指南”](#oma-发布贡献者指南)一节。

### 安同 OS 重返系统软件包版本监测网站 Repology

![Repology 上的安同 OS 主页](/assets/news/coffee-break/20240818/imgs/repology-aosc.png)

相信关注 Linux 发行版与软件包更新的朋友们对 [Repology](https://repology.org/) 大概不会陌生，但也许您也发现了安同 OS 一直缺席这一网站的监测仓库列表；实际上，安同 OS 曾经在 Repology 的监测列表上，但由于系统软件包信息站年久失修，Repology 决定暂停监测安同 OS 的仓库

虽然近几个月以来，在[陈嘉杰](https://github.com/jiegec)、[杨欣辉](https://github.com/Cyanoxygen)、[傅孝元](https://github.com/eatradish)等人的努力下软件包站重新恢复了服务，但一部分数据库结构并未完成迁移，Repology 上线条件并不充分；为改变这一现状并方便用户和维护者查阅安同 OS 的相对维护与更新状态，近日，[张丙戊](https://github.com/xtexChooser)及[杨欣辉](https://github.com/Cyanoxygen)在修复仓库元数据库收集工具 [abbs-meta-rs](https://github.com/AOSC-Dev/abbs-meta-rs) 后，重新向 Repology 提交了监测请求并[提交了监测配置](https://github.com/repology/repology-updater/pull/1418)并已成功受上游接纳；至此，安同 OS 正式重返 Repology 的监测列表

欢迎感兴趣的朋友们关注 Repology 上安同 OS 的更新维护状态数据，并向我们反馈潜在问题与关切

[Repology 上的安同 OS 主页 >>](https://repology.org/repository/aosc)

### 依赖调优、加强保险：安同 OS 系统套件与关键组件更新发布

![系统套件与关键组件更新可大幅度提高安同 OS 的可定制性和可靠性](/assets/news/coffee-break/20240818/imgs/oma-confirm.png)

作为一个量大料足的“塞爆”发行版，安同 OS 虽然通过充分标记依赖简化了软件包和环境的部署流程，但长久以来在依赖标记上的矫枉过正和僵化也广受用户诟病——用户往往会遇到卸载系统预装软件时连带卸载桌面环境乃至系统组件的问题，造成了较大困扰。

日前，我们推送了一大批针对预装软件包和软件包组 (`*-base`) 的更新，将不必要的软件包降级为了“推荐依赖 (Recommends)”（即默认安装但允许删除）。这样一来，用户朋友们就可以随意卸载自己不需要的应用程序而不至于陷入“依赖地狱”了。

同时，我们还将一部分基础包标记为“关键组件 (Essential)”，原则上不允许用户卸载。如果用户尝试删除这些包时，oma 将如下例报错，除非用户指定额外选项，oma 将保护这些关键组件：

```
ERROR 软件包 networkmanager 是不允许删除的关键组件。
```

降低依赖硬度和标记关键组件两个更改双管齐下，此次的更新为安同 OS 的系统组件提供了基本安全网：用户可更灵活地根据自己的需要和喜好卸载不需要的软件，且在很大程度上杜绝了不可逆的“卸穿”系统的意外（我们标记的关键组件可供用户运行 `oma undo` 等方式，将系统恢复到原先的状态）。

### 打破隔阂：安同 OS 正式推出“旧世界”固件兼容性更新

![联想开天 M540z（最早的龙芯 3A5000 整机之一）运行安同 OS](/assets/news/coffee-break/20240818/imgs/breaking-the-world-boundary.jpg)

安同 OS 龙架构 (LoongArch) 版本的一大工作重点便是解决架构专属生态历史性的隔阂：“新世界”和“旧世界”。

这一隔阂由固件而上，将 ACPI/DT 外设管理、引导器、内核，乃至桌面应用程序等方面的兼容性一分为二。分裂的生态不仅让初次接触龙架构硬件的用户晕头转向，就算是长期参与龙架构系统与应用开发的朋友和同事们也难免感到无奈。“什么硬件可以用怎样的系统和哪些软件”这样的三向组合问题，便是龙架构用户生态发展的一大难题。

年初，[王邈](https://github.com/shankerwangmiao)（“坏人”）发布了 [libLoL](https://liblol.aosc.io/) “旧世界”应用程序兼容层，使得用户可以在“新世界”系统上运行当前依然大量流通的“旧世界”商用应用程序（如 WPS 和 QQ、微信等），打通了应用程序层面上的“世界墙”。在解决应用程序层面的兼容难题后，[王邈](https://github.com/shankerwangmiao)便将目光转向应用生态以下的固件与引导兼容问题。

七月底，[王邈](https://github.com/shankerwangmiao)与[白铭骢](https://github.com/MingcongBai)等人从引导器 (GRUB) 及内核层面着手实现了“旧世界”固件兼容性，并调整了管理界面，方便用户们双启动“新世界”（如安同 OS、deepin 和 Loong Arch Linux）和“旧世界”（如 Loongnix 和统信 UOS）操作系统。这兼容性方案已在多款龙芯三号设备验证通过：

- 台式机：联想开天 M540z（龙芯 3A5000）
- 台式机：航天龙梦 ML5A（龙芯 3A5000）
- 笔记本：卓宜恒通 L71（龙芯 3A5000M）
- 笔记本：清华同方超锐 L860-T2（龙芯 3A5000M）
- 服务器：国光 GS6000L-4C5L（龙芯 3C5000L，四路）

根据上述测试结果，我们相信所有龙芯三号“旧世界”设备已可以正常启动安同 OS 等新世界操作系统。此外，安同 OS 的 20240801 版安装盘及 deepin V23 正式版已集成该兼容方案。

考虑到这一方案可大大降低用户支持成本，并方便用户更自由地选用适合自己经济与性能需要的龙架构设备，我们欢迎且强烈推荐各龙架构“新世界”系统维护者及开发商集成这一兼容方案。为此，[白铭骢](https://github.com/MingcongBai)编写了“旧世界”设备兼容方案的发行注记，欢迎查阅参考。

[“旧世界”设备兼容方案发行注记 >>](/assets/news/coffee-break/20240818/loongarch64-ow-support.md)

开发者角
--------

### 修订记录透明化：《测试源内软件包迭代版本规范》开始实施

长期以来，在测试源 (topic) 内修订软件包及从测试源到稳定源 (stable) 推送更新的流程中存在修订历史不清的问题。这一问题也会为参与测试的用户和维护者带来困扰：由于未使用软件包版本标记修订且多次同版本覆盖软件包，用户及开发者往往无法正确接收软件更新推送（因为 APT 更新检查逻辑查验的软件包版本甚至大小都可能未发生变化）。

目前的工作流中出现此种同版本覆盖的场景主要有如下两种：

- 重复推送在测试过程中多次修订的软件包
- 测试源合并时推送稳定源更新

《测试源内软件包迭代版本规范》通过设计一套针对预发布软件包修订版本标注的规范解决上述问题，让测试流程及稳定源推送前后各软件包修订都得到充分标注。

[查阅《测试源内软件包迭代版本规范》正文 >>](https://wiki.aosc.io/zh/developer/packaging/topic-version-suffix/)

### oma 发布《贡献者指南》

日前，[傅孝元](https://github.com/eatradish)与[白铭骢](https://github.com/MingcongBai)编写发布了 oma 的贡献者指南，指引社区好友高效参与 oma 开发与测试。

同时，该指南为更清晰地标记和管理 oma 的版本更新，重新定义了版本分支规则，在继续沿用 `x.y.z` 三段式版本号的基础上，重新定义各版本位的意义：

- `x`：重大特性更新（如功能重构、新界面设计等）
- `y`：特性更新（小范围界面修缮、行为变化等，如此次修改的测试源刷新逻辑、进度条和 `--no-refresh-topics` 参数）
- `z`：问题修复

此外，贡献者指南还将 oma 先前的双分支开发策略改为双分支 + 多特性分支模式（类似安同 OS 的测试主题制）：

- `master` 分支承接同一 `x` 版本系列的更新，任何新特性都以单独的“主题”分支提交合并
- `next` 面向下一 `x` 版本系列的更新，其余与 `master` 同理

[查阅《oma 贡献者指南》正文 >>](https://github.com/AOSC-Dev/oma/blob/master/CONTRIBUTING.md)

### 统一界面、优化性能：Ciel 及 ACBS 改用 oma 包管理界面

考虑到 oma 目前功能与使用方式已基本成熟，也实现了完整的无交互使用模式，[傅孝元](https://github.com/eatradish)将安同 OS 构建容器管理器 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 及软件包构建脚本管理器 [ACBS](https://github.com/AOSC-Dev/acbs) 中使用的包管理前端更改为 oma。这一更改可提高构建环境的搭建速度，还可以在很大程度上验证 oma 在生产环境中的可用性情况。

如果您在使用 oma 管理 Ciel 工作区及使用 ACBS 构建系统软件包时遇到问题或有任何建议，欢迎通过下文“联系我们”中的聊天群组与我们联系，抑或直接向 oma 提交[问题报告](https://github.com/AOSC-Dev/oma/issues/new)。

### 数据工程：ACBS 引入 .srcinfo.json 元数据生成功能

考虑到[软件包信息站](https://packages.aosc.io)对 Autobuild 软件包信息格式 [APML](https://wiki.aosc.io/developer/automation/apml/) 的解析功能较弱且在解析 Bash 脚本时有实际困难，一些依赖条件较为复杂的软件包信息页会误报不少变量错误，[傅孝元](https://github.com/eatradish)为 [ACBS](https://github.com/AOSC-Dev/acbs) 加入了通过 `autobuild -p` 一键生成 JSON 格式元数据的功能，以期改善与[软件包信息站](https://packages.aosc.io)的互操作性。

我们计划在近期对 ABBS 树中的所有软件包进行一次性数据生成，并后续实现 CI 流程，为每一个合并请求 (Pull Request) 自动生成和更新相关数据。

### abbs-update-checksum 0.2.1 版发布：调整下载线程数、增强 CHKSUMS 改写功能

近日，软件包源码校验和更新工具 [abbs-update-checksum](https://github.com/AOSC-Dev/abbs-update-checksum) 发布了 0.2.1 版，将默认下载线程数改为 4 个（先前无限制，可能造成连通性不可靠的问题），还修复 `SRCS`/`CHKSUMS` 条目数量不一致时未正确报错的问题。

### 软件包信息站 (packages-site-rs) 修复软件包 JSON 数据生成器

为恢复安同 OS 在 [Repology](https://repology.org/) 上的信息监控，[张丙戊](https://github.com/xtexChooser)修复了[软件包信息站](https://packages.aosc.io/)中全仓库软件包数据 JSON 文件的生成功能，方便各 API 客户端使用。

[安同 OS 全仓库软件包 JSON 数据 >>](https://packages.aosc.io/list.json)

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [Arkadi Shishlov](https://github.com/arkadijs)
- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [Harry Chen](https://github.com/Harry-Chen)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [王翔 (KatyushaScarlet)](https://github.com/KatyushaScarlet)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [bubu](https://github.com/p3psi-boo)
- [王江津](https://github.com/RedL0tus)
- [rickliu2000](https://github.com/rickliu2000)
- [王邈](https://github.com/shankerwangmiao)
- [skybird](https://github.com/SkyBird233)
- [Student Main](https://github.com/stdmnpkg)
- [Suyun](https://github.com/Suyun114)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [lwzheng](https://github.com/lwzhenglittle)
- [日落果](https://github.com/purofle)
- [梓瑶](https://github.com/ziyao233)

一起吹水
--------

<details>
    <summary>点此查看进群说明，一起吹水玩耍吧~</summary>

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

请扫描此二维码添加好友**并说明来意：申请加入 AOSC 社区频道。**

![wechat](/assets/wechat.png)

### QQ 群

![qq](/assets/qq.jpg)

### Telegram 群组

![telegram](/assets/telegram.png)

### Discord 语音频道

![discord](/assets/discord.png)
</details>

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
