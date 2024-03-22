---
categories:
  - news
title: "安记冰室・十月上"
date: 2023-10-14T12:00:00+08:00
important: false
draft: false
---

> “恁喝啥？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### 龙架构 (LoongArch) 移植：协作、共享、共进

国庆中秋长假以来的这几周，龙架构（下称 LoongArch）的软件支持和使用体验依然是我们的工作重点之一。在我社贡献者陆续用上不同 LoongArch 设备作为个人工作用机器后，在使用过程中发现了一些大大小小的问题。经过社区贡献者的努力，在龙芯多个部门工程师的积极协作下，我们调查、测试和解决了数个困扰社区用户们许久的问题，有如：

- 通过[修复 LoongArch 内核对写合并问题规避方式的不一致](https://lore.kernel.org/loongarch/e95d97c98caa525b04cf6383a74db9cadf694afb.camel@icenowy.me/T/#m085bf4e68fd112902e0ae3fddb03d9a8b9eef0fb)，使用 AMD 显卡配合 `amdgpu` 内核驱动时，Firefox 界面及网页多媒体内容中的渲染错误得到解决，再也不用纠结是不是显卡故障了
- 排查搭载 AST2500 BMC 模组主板无法正常使用独显启动 X11 图形界面的问题并整理出了一套可用配置，使用工作站主板的桌面用户可以享受开箱体验了
- 通过沟通龙芯主板 QVL（合格供应商名册, Qualified Vendor List）内容和测试基准，验证了 TC512A0 主板上高 I/O 负载时死机的起因为用户选用的内存稳定性欠佳，后续出现类似问题时可参考（即将发布的）社区 QVL 及硬件兼容性数据库，避免浪费不必要的时间和金钱
- 在 Gentoo 社区 [xen0n](https://github.com/xen0n/) 同学的协助下，成功构建了 Thunderbird 邮件客户端，至此 AOSC OS 的浏览器套件补全
- 通过更新 Rust 程序的依赖、提交上游补丁的方式，引入了许多先前无法构建的 Rust 程序，不论是系统安装、实用工具，AOSC OS 的基本系统组件日趋完整
- 使用带有 LSX 矢量指令集扩展的工具链和 Glibc 运行时库，按照龙芯中科制定的 *Software Development and Build Convention for LoongArch&trade; Architectures*（《龙架构&trade;软件开发与构建约定》）[第 7.3 节](https://github.com/loongson/la-softdev-convention/blob/2975b325e1d31c8b52d75f9948d627343c5a454c/la-softdev-convention.adoc#73-vector-instruction-support)中关于矢量指令集扩展支持的描述，重构了整个 AOSC OS 系统仓库，默认打开 LSX 矢量指令集优化

![龙架构设备上使用 AMD Polaris 设备存在高负载情况下稳定性欠佳的问题：我社成员正使用 glmark2 进行压力测试，协同龙芯工程师及我社贡献者测试内核等组件的新变化；目前，我们仍在调查造成此问题的原因及尝试各种潜在的解决方法](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/glmark2-benchmark.jpg)

#### 在一起，才是开源

在协作调试和测试的同时，我们亦准备以独立社区的身份，参与到龙芯开源社区的工作中，并为提高社区与龙芯官方的沟通和协作效率及质量尽一份力。在未来几周中，我们准备组织或参与如下工作；下列工作中亦有发布征求意见稿等信息，欢迎您通过各项中列出的链接提出建议和批评：

- 基于与龙芯工程师沟通收集到的测试内容和标准，建立一套社区维护的 QVL 测试系统，提供开箱即用的测试框架，编撰[“硬件兼容性数据库”](https://github.com/loongson-community/areweloongyet/issues/68)，方便新用户高效装机，避免花冤枉钱或在已知兼容性问题上浪费不必要的时间
- 撰写[“龙架构用户/贡献者必知必会”](https://github.com/loongson-community/areweloongyet/issues/71)，方便新用户和开发者快速上手，避免前人踩过的坑
- 在编写正式报告后与龙芯官方接触，反馈过去一个多月协同调试过程的体验和发现的一些问题，本着建设性原则，积极地改善企业工程师与社区贡献者的沟通和协作体验，并为公开透明的社区协作争取更多的空间

如上工作的成果将在合作社区[“咱龙了吗？”站点](https://areweloongyet.com/)上发布，以惠及各社区的更广阔用户群，敬请期待。我们将继续保持协作共享，与大家一起建立一个健康、包容、高效的龙芯开源社区，行则将至！

![“咱龙了吗？”站点主页](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/areweloongyet.png)

#### 持续推进 AOSC OS“合龙”

AOSC OS 方面，我们先前启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### OpenSSL 3 更新进入稳定源

经过近两个月的重构、修缮及更新工作，OpenSSL 3 运行时以进入稳定源，取代目前[已失去上游支持](https://www.openssl.org/blog/blog/2023/09/11/eol-111/)的 OpenSSL 1.1 运行时。

如果您在更新过程中遇到任何问题，请于 [aosc-os-abbs 仓库报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml)或[社区主群组](https://t.me/aosc_main) 与我们联系；为保持对部分老软件的支持，我们依然提供 OpenSSL 1.1 兼容包 (`openssl-1.1`)，但考虑到潜在安全风险，推荐您及早将软件更新或联系发行方适配 OpenSSL 3。

**请注意：本次更新涉及软件包较多，因此系统更新可能需要较长时间；此外，考虑到 OpenSSL 为系统基础库，如出现意外断电或重启的情况，将很有可能导致系统故障。因此，建议将笔记本等使用电池的设备接入交流电并保持供电稳定，以防更新时发生意外。**

### Vim 纳入基本系统组件

多年来，AOSC OS 预装的编辑器只有 GNU Nano 及 GNU ed，但实际上，我们的贡献者和用户群体中 Vim 用户亦相当多。先前，我们认为 Vim 默认附带的依赖较多，因此没有默认预装；上周，社区贡献者[杨欣辉](https://github.com/Cyanoxygen/)发现，只需将目前系统中 `vim` 软件包的 gVim（即 Vim 的 GTK 图形前端）独立打包，其实剩余的部分并不会为基本系统引入新依赖。

![Vim 9.0 主界面](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/vim-9.0.png)

因此，我们在最近的更新中将 Vim 基础包 `vim` 及图形前端 `gvim` 分开打包。这样一来，我们便可以顺理成章地将 Vim 引入到 AOSC OS 的基础包中了。下一批 AOSC OS 系统包将预装 Vim 编辑器，而现有用户也将在最近推送的编辑器套件包 (`editor-base`) 更新后，作为推荐依赖自动获取到 Vim 编辑器。当然，如果您不喜欢 Vim，可随时用此命令卸载：

```
oma purge vim
```

### curl 8.4.0 更新修复严重安全漏洞

curl 上周预告的[“近年来最严重安全问题”](https://github.com/curl/curl/discussions/12026)已于北京时间 10 月 12 日 14 时发布修复，AOSC OS 随后更新打包测试完成，至截稿时稳定源已推送更新，建议用户和开发者尽快更新系统。

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- curl (`curl`) 更新至 8.4.0，修复高危安全漏洞 [CVE-2023-38545](https://curl.se/docs/CVE-2023-38545.html)
- Discord 聊天、语音及直播软件 (`discord`) 更新至 0.0.31
- FreeCAD 计算机辅助设计套件 (`freecad`) 更新至 0.21.1
- Kodi 家庭影音中心 (`kodi`) 更新至 20.2，加入 AV1 解码功能、NFSv4 远程文件系统支持等新特性
- LibreOffice 办公套件 (`libreoffice`) 更新至 7.5.4.2，修复 OpenSSL 3 兼容性并引入龙架构 (LoongArch) 支持
- OpenJDK 8 (`openjdk-8`) 更新至 8u382+ga，修复多个安全漏洞
- OpenJDK 11 (`openjdk-11`) 更新至 11.0.20.1+ga，修复多个安全漏洞；新增 RISC-V 64 位架构 JIT 支持，大幅提升其运行时性能
- OpenJDK 17 (`openjdk`) 更新至 17.0.8.1+ga，修复数个安全漏洞；新增 RISC-V 64 位架构 JIT 支持，大幅提升其运行时性能
- Telegram 聊天软件 (`telegram-desktop`) 更新至 4.10.1，加入朋友圈短视频等新特性
- Vim 编辑器 (`vim`) 更新至 9.0.2009，并拆分命令行及图形界面编辑器，方便用户选用
- Visual Studio Code 及 VSCodium 集成开发环境 (`vscode`, `vscodium`) 更新至 1.83.0
- YouTube 及各网页媒体下载工具 yt-dlp (`yt-dlp`) 更新至 2023.09.24，新增及修复多个站点分析及下载支持
- Citra 任天堂 3DS 模拟器 (`citra`) 更新至 1958，引入许多新特性及修复
- Yuzu 任天堂 Switch 模拟器 (`yuzu`) 更新至 1560，引入许多新特性及修复
- qBittorrent 种子下载管理器 (`qbittorrent`) 更新至 4.5.4，修复 OpenSSL 3 兼容性
- Apache HTTP 服务器 (`httpd`) 更新至 2.4.57，修复自 2.4.55 版本以来的数个安全漏洞
- Exim 电子邮件收发服务器 (`exim`) 更新至 4.96，修复多个安全漏洞
- PHP (`php`) 更新至 8.2.8，为 AMD64 及 AArch64 架构引入 JIT 支持
- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) 系统发行生成工具 (`aoscbootstrap`) 更新至 0.3.1，新增自定义发行分支支持，改进引用功能报错，并引入龙架构 (LoongArch) 支持
- [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) (`aosc-findupdate`) 更新至 0.2.1，引入龙架构 (LoongArch) 支持
- [软件源镜像数据库](https://github.com/AOSC-Dev/aosc-os-repository-data) 更新至 20231007，新增多个镜像源数据
- [apt-gen-list-rs](https://github.com/AOSC-Dev/apt-gen-list-rs) 软件源镜像管理工具 (`apt-gen-list`) 更新至 0.7.0，新增 Omakase 对接功能及引入龙架构 (LoongArch) 支持
- [Omakase](https://github.com/AOSC-Dev/oma) 软件包管理前端 (`oma`) 更新至 1.0.8，更新内部组件版本
- Apache Ant Java 项目构建工具 (`apache-ant`) 更新至 1.10.4
- Apache Maven Java 项目构建工具 (`apache-maven`) 更新至 3.9.4
- Gradle 项目构建工具 (`gradle`) 更新至 8.3，新增 Kotlin 编程支持等新特性
- Racket 函数式变成语言工具链及 IDE (`racket`) 更新至 8.10
- Ruby 编程语言工具链 (`ruby`) 更新至 3.2.2，修复 OpenSSL 3 支持并引入 MJIT 和 TypeProf 等新语言特性，提升执行效率
- Gperftools 处理器性能分析工具 (`gperftools`) 更新至 2.13，新增 RISC-V 64 位架构支持
- Qt 6 运行时 (`qt-6`) 更新至 6.5.1

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- Fcitx5 的 Mozc 日语输入引擎 (`fcitx5-mozc`)
- Cython 0.29 兼容工具链 (`cython-0.29`)：先前引入的 Cython 3.0.2 更新与一部分较老的软件源码不兼容，导致这些软件包无法编译，引入这一兼容工具链可暂时解决问题
- Flann (`flann`) 高性能近似最近邻算法 (Approximate Nearest Neighbour) 库
- OpenSSL 1.1 兼容性运行时 (`openssl-1.1`)：用于尚未迁移到 OpenSSL 3 运行时的应用程序，但由于该软件包已经没有上游安全更新支持，如非必要不推荐使用

#### 删除组件

过去两周中，我们移除了这些软件包：

- 命令行 DNS 查询工具 Dog (`dog`)：该软件已失去维护且不兼容 OpenSSL 3
- grpcio Python 组件 (`grpcio`)：该包内容合并至 gPRC (`grpc`) 运行时包中
- Mumble 语音聊天软件 (`mumble`)：社区维护者中缺乏用户，不便于测试，故失去维护
- PyPy 2.x 工具链 (`pypy`)：社区维护者中缺乏用户，不便于测试，故失去维护
- Retdec 反编译工具 (`retdec`)：社区维护者中缺乏用户，不便于测试，故失去维护
- Ruby GNOME2 组件（`ruby-atk` 和 `ruby-gtk2` 等）：这些软件包不再支持 Ruby 3.0 以上版本，并且在我们的软件仓库中已经没有在使用的软件
- ScreenRuler 屏上尺子 (`screenruler`)：失去上游维护，其依赖已无法正常构建
- Swift XMPP 聊天软件 (`swift-im`)：社区维护者中缺乏用户，不便于测试，故失去维护
- Telegram 命令行工具 (`tg`)：失去上游维护，已不能正常使用
- Vaultwarden 密码管理器服务器 (`vaultwarden`)：该软件不便于作为软件包分发，建议用户使用官方容器等其他途径获取该软件
- ydcv-rs 有道词典客户端 (`ydcv-rs`)：失去上游维护，已不能正常使用

#### 周边项目

- [照妖镜](https://github.com/AOSC-Dev/treevsrepo)软件包版本比对及审计工具 (`treevsrepo`) 更新至 0.3.4，引入龙架构 (LoongArch) 支持
- [p-vector](https://github.com/AOSC-Dev/p-vector-rs) APT/Oma 软件源管理器 (`p-vector`) 更新至 0.3.6，修复 OpenSSL 3 兼容性并引入龙架构 (LoongArch) 支持
- 社区贡献者[王江津](https://github.com/RedL0tus) 开发了一款新的壁纸元数据管理及生成工具 [wpmeta](https://github.com/AOSC-Dev/wpmeta)，新增多语言支持，后续引入的 AOSC OS 壁纸将带有多语言标题及作者名称翻译

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具更新至 1.6.109
    - 按照龙芯中科制定的 *Software Development and Build Convention for LoongArch&trade; Architectures*（《龙架构&trade;软件开发与构建约定》）[第 7.3 节](https://github.com/loongson/la-softdev-convention/blob/2975b325e1d31c8b52d75f9948d627343c5a454c/la-softdev-convention.adoc#73-vector-instruction-support)中定义的兼容性规范默认打开了 LSX 矢量指令集优化
    - 将龙架构 (LoongArch) 兼容基线设置为 `loongarch64` 而非 3A5000 等处理器对应的 `la464` 核心，进而保障基于龙架构 (LoongArch) 的 2K 系列处理器支持
    - 修复 RISC-V (`riscv64`) 在不打开链接时优化（Link-Time Optimisation，简称 LTO）时无法构建 Rust 程序的问题
    - 默认关闭 MIPS64 R6 (`mips64r6el`) 架构 Rust 默认构建参数中的 MSA 优化以规避一处优化错误，先前，此问题导致 Rust 无法正确计算 `sha2` 系列校验值

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。目前，我们开放如下测试源：

- **Boost 1.83：** 将 Boost 运行时库更新至 1.83 并更新或重构相关软件，提升对部分新 C++ 程序源码的兼容性

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 我社 OSPP 2023 项目圆满收官

经过我社导师及学生们的努力，本年度社区组织的两个 OSPP 2023 项目均已成功通过导师审阅，意味着社区判定学生成功完成了各项目所制定的任务和目标。恭喜[“Autobuild3 自动化打包测试框架”](https://summer-ospp.ac.cn/org/prodetail/23f3e0033?list=org&navpage=org)项目学生 [leedagee](https://github.com/leedagee) 及导师 [Camber Huang](https://github.com/CamberLoid) 和[“自由及开源软件简中本地化工作”](https://summer-ospp.ac.cn/org/prodetail/23f3e0032?list=org&navpage=org)项目学生[刘万涛](https://github.com/LWanTao)及导师[白铭骢](https://github.com/MingcongBai)！

希望两位参与社区项目的学生能在社区和更广阔的天地，继续为各开源软件的发展和进步添砖加瓦。

### 社区友人捐赠的两台新 AArch64 构建服务器投入使用

年初[升级 AMD64 构建服务器](https://wiki.aosc.io/zh/community/crowdsourcing/epyc-22333-upgrade-2023/)后，同属 AOSC OS 一级架构的 AArch64 (`arm64`) 维护算力已大幅度落后于 AMD64 (`amd64`) 。加之网络及存储 I/O 性能方面的局限，现有 AArch64 构建服务器拖慢了一级架构编译、打包和测试的效率。六月，社区友人捐赠了两台高性能 AArch64 服务器：一台搭载 64 核飞腾 FT2000/64 处理器，另一台搭载 64 核华为鲲鹏 920。而后，社区朋友慷慨解囊，[成功众筹了一些必要部件](https://wiki.aosc.io/zh/community/crowdsourcing/new-aarch64-server-parts/)并提供托管服务。

![两台全新 AArch64 构建服务器](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/new-aarch64-servers.jpg)

目前，这些服务器已[正式上线并投入使用](https://github.com/AOSC-Dev/Buildbots/compare/588d37621c6d0528db82a37306540230445687ad...630b94a078d4803334ed6329ff028ff3ec352ff4)，为我们持续维护和改进 AOSC OS 的 AArch64 架构移植提供强劲动力。感谢社区各位友人的支持！

### 预告：《聊斋》创刊号

> 编者按：拖这么久了，也许有必要解释下为什么这期《聊斋》为何迟迟没有发布——考虑到目前社区正与龙芯中科的工程师协同调试使用过程中遇到的问题，我们不希望在有关问题得到解决或得出初步结论之前草率地进行讨论或吐槽；此外，遇到的问题和解决过程记录较长，我们目前希望更系统性地整理该刊内容，并分期发布，方便读者阅读。在一切就绪后，《聊斋》中遇到的每个问题将附有解决方案、或对问题原因的分析，以期最大化此类内容的建设性。感谢各位读者的理解和耐心！

过去几个月中，社区贡献者陆续购买了数台搭载龙芯 3A5000 及 3A6000 设备，用于各种不同场景。那么，龙架构 (LoongArch) 加持的龙芯设备的使用体验如何呢？敬请期待《聊斋》创刊号！

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/3a5000.jpg)

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区论坛

论坛也许“老土”，但也不失为用于认真交流问答的好平台。如果您有兴趣参与论坛管理和维护，请联系我们。

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/wechat.jpg)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/discord.png)

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