---
categories:
  - book
title: "安记冰室・八月下"
date: 2023-08-25T12:00:00+08:00
important: false
draft: false
---

“练绣廉些米？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去两周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### AOSC OS/Retro 更名：星霞 (Afterglow)

AOSC OS 的 Retro 版本最初取名仿照 IBM OS/2，即 AOSC OS/Retro。但社区有批评全名读起来拗口、Retro 命名无聊浅显等。AOSC Retro 小组经过数轮头脑风暴，选出了星霞 (Afterglow) 这个新名称，取义“落日余晖”、“晚霞”和“美好回忆”，让您喜爱的老旧设备发挥余热。

![运行于 IBM ThinkPad X41 上的 Afterglow](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/x41-afterglow.jpg)

### 发行版新视觉 ID

本周，综合社区意见重新设计的 AOSC OS 及 Afterglow（原 AOSC OS/Retro）视觉 ID 上线：

![社区发行版新视觉 ID 展示](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/new-logos.png)

- AOSC OS（中译：安同OS）新徽标重新启用社区四色元素，以“街砖”为元素，综合 3D 远近关系展现类似阶梯的视觉效果，体现 AOSC OS 简明及可靠的特质，为用户的工作和生活的进步添砖加瓦。
- Afterglow（中译：星霞OS）新徽标以流星为视觉元素，配色则以落日余晖为题，体现 Afterglow 为老旧设备持续提供支持，助其发挥余热的本心。

我社各种徽标、视觉 ID 设计稿等均可从 [GitHub 仓库 AOSC-Dev/logo](https://github.com/AOSC-Dev/logo) 下载。

### Omakase 1.1 展望

在 [Omakase](https://github.com/AOSC-Dev/oma) 1.0 进入基本系统之际，开发者[傅孝元](https://github.com/eatradish)已经在同步推进 1.1 分支的开发工作。至截稿时，Omakase 1.1 的开发工作业已基本完成，并将于本周末转入测试调整。

Omakase 1.1 的主要开发目标有：

- **模块化：** 整理代码，方便其他开发者利用 Omakase 特性
- **系统集成：** 自动检查电源条件，控制系统电源及会话管理，有效避免意外故障
- **界面进化：** 重新设计历史及撤销功能，操作历史、回放及撤销界面更简明易懂；各项操作确认后，向终端回显操作内容，以便查阅
- **性能优化：** 优化下载及解压逻辑，源数据刷新大幅度增速

我们将于 UTC+8 时间本周日下午二时的贡献者例会中就 Omakase 1.1 的设计进行展示及讨论，届时欢迎来[我社 Discord 语音频道](https://discord.gg/VYPHgt9)参与讨论。

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- [Omakase](https://github.com/AOSC-Dev/oma) 更新至 1.0.7，修复无法刷新简单软件源 (Flat Repo) 元数据的问题，新增 LoongArch 构建支持
- Mesa 图形栈更新至 23.1.4，优化各类主流显卡（尤其是 Steam Deck 硬件）的性能和可用性
- Rust 更新至 1.71.0
- LLVM 更新至 16.0.6，修复 MIPS 可用性问题
- LDC 更新至 1.32.2，新增 POWER (`ppc64el`) 及基于 MIPS 的龙芯 3 (`loongson3`) 支持
- curl 更新至 8.1.1，修复数个安全问题
- yt-dlp 更新至 2023.07.06，修复及新增流媒体站点支持
- Fcitx 的萌娘百科词库 ([fcitx-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) 更新至 20230814，引入许多新词
- fail2ban 更新至 1.0.2，修复先前版本服务无法启用的问题
- e2fsprogs 更新至 1.47.0，修复无法检查使用新工具创建的 ext4 分区的问题
- FreeRDP 更新至 2.10.0，修复随机崩溃的问题
- Remmina 更新至 1.4.31，修复从 Adobe Acrobat 等其他基于 WPF 的 Windows 程序中复制时短时卡顿的问题
- [Bash 配置](https://github.com/AOSC-Dev/bash-config)更新至 0.4.7.7，修复 `cd` 命令补全时列出环境变量名的问题
- 修复 VirtualBox 更新时无法正确识别内核模块版本的问题
- [系统安装器 (DeployKit)](https://github.com/AOSC-Dev/aoscdk-rs) 更新至 0.9.5，修复某些 AArch64 SBSA 设备安装系统后无法自动启动 GRUB 引导器的问题，优化 Afterglow 安装性能，新增 LoongArch 构建支持

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- Distrobox (`distrobox`)，可用于快速部署各类 Linux 发行版
- EDID Decode (`edid-decode`)，EDID 数据解析工具
- gitoxide (`gitoxide`)，Git 版本控制系统的 Rust 实现
- HW PROBE (`hw-probe`)，设备索引及测试工具
- JetBrains Mono (`jetbrains-mono`)，来自 IDE 开发商 JetBrains 的等宽开发用字体
- lldpd (`lldpd`)，使用 802.1ab（链路层发现协议）探测本地网络中的设备
- Taskwarrior (`taskwarrior`)，命令行终端界面的个人日程管理器

#### 周边项目

- [aosc-mklive](https://github.com/AOSC-Dev/aosc-mklive/) 工具优化 Afterglow 生成逻辑，将 LiveKit 大小压缩至 CD 尺寸（约 700 MiB）

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 更新至 1.6.94，添加 dpkg Pre-Depends 依赖关系支持，并对 Rust 构建模板进行优化

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。本周，我们新增了如下几个测试源：

- **AOSC OS Core 11 (`core-k`)：** 更新系统核心运行时：Glibc 更新至 2.37，GCC 更新至 13.2.0，Linux API 头更新至 6.4.7，Zstandard 更新至 1.5.5
- **Bash 启动配置规范化 (`etc-profile-cleanup-survey-20230614`)：** 对各软件包中的 Bash 启动配置进行清理，规范化文件摆放，修复终端模拟器会话中某些功能无法正常使用的问题
- **Linux 内核八月更新 (`linux-kernel-survey-20230825`)：** 更新主线内核至 6.4.10，长期支持版（Long-Term Support，简称 LTS）内核至 6.1.45，修复 AMD 处理器中近期发现的安全漏洞 ([CVE-2023-20569](https://www.cve.org/CVERecord?id=CVE-2023-20569))
- **OpenSSL 3.1.1 (`openssl-3.1.1`)：** 引入 OpenSSL 3.1.1 以替代老旧的 OpenSSL 1.1 运行时
- **Security Survey 2023H1/Libtiff (`security-survey-2023h1-libtiff`)：** 安全更新终于有进展了！更新 libtiff 至 4.5.1，同时涉及大量其他软件包重构和更新

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支，并为正式引入将龙架构支持作准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 中科院软件所开源之夏 (OSPP) 2023 项目进展

由我社贡献者[白铭骢](https://github.com/MingcongBai)和[黄烜宁](https://github.com/CamberLoid)作为导师带领的 [OSPP 2023](https://summer-ospp.ac.cn/) 项目取得显著进展。

过去一个多月中，[刘万涛同学](https://github.com/LWanTao/)修缮了 Trinity Desktop Environment 的简中翻译，还将我们的本地化工作指南[改写为网页](https://lwantao.github.io/l10n4zh-cookbook/)；相信刘同学的工作成果将显著改善 Afterglow 的简中使用体验，并为社区后续组织本地化工作提供了更好用的参考资料。[leedagee 同学](https://github.com/leedagee)开发的 Autobuild3 自动化打包测试框架也已基本功能完备，为我社后续推进维护自动化提供可靠性保障。

上述项目的开发目标、学生及导师信息等请详见：

- [Autobuild3 自动化打包测试框架](https://summer-ospp.ac.cn/org/prodetail/23f3e0033)
- [自由及开源软件简中本地化工作](https://summer-ospp.ac.cn/org/prodetail/23f3e0032)

### AOSCC 2023 贴纸集订购

2023 年度 AOSCC 贴纸集已完成再版并已到货，我们计划以每套 10 元人民币 + 运费（每版 5 元，共 2 版）贩卖，以便收回再版印刷费用。本版贴纸还改进了覆膜的耐磨度，相信会比之前的贴纸更耐用。

请使用[本表](https://forms.gle/Ba8GJoxkVGBqdSEr5)登记订购意向。

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区新门户

目前的社区门户现已使用三年，一些设计上的问题也开始展现出来，比如布局效率低和新闻资讯、下载页面可见度低等，故近期开始着手设计新门户。下图为新门户页面设计稿，现征求建设性意见供贡献者参考；本次设计的主要目标和思考如下：

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/new-portal.png)

- 设计灵感来自 [Windows XP 的初版主页](https://web.archive.org/web/20011118061922/http://www.microsoft.com/china/windows/)，取其空间利用所长，并将布局、配色和呈现内容等适配到现今浏览器技术和浏览习惯等
- 着重展示社区项目和资讯板块，以及常用链接
- 浏览逻辑：右上角为快捷导航区，包括下载页面、社区介绍和语言设置；左侧为主导航区，全站通用且全时可见，右侧为内容板块
- 主页有三版面动态横幅区，展示需要着重宣传的内容，下方为固定的资讯要点、系统方案和常用链接板块，左下角为动态板块，亦用于需要着重展示的内容（如一般情况下展示 AOSC OS 特性，需要时改变为投票、众筹或活动介绍）
- 网站配色根据季节更改，另可根据语言设置，在特定期间显示独特配色（如在春节期间在中文页面上显示春节配色）

目前我们已开始初步策划实现方式，欢迎来社区群聊一同出力～

### 社区论坛

论坛也许“老土”，但也不失为用于认真交流问答的好平台。如果您有兴趣参与论坛管理和维护，请联系我们。

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/wechat.jpg)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/discord.png)

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
- Twitter/X @aosc_dev_cn 及 @aosc_dev（英文）

此外，我们正寻求国内开源及 Linux 相关媒体的朋友合作，一起将我社的工作和文化广而告之。