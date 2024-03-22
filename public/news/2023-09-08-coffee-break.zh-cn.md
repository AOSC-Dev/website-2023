---
categories:
  - news
title: "安记冰室・九月上"
date: 2023-09-08T12:00:00+08:00
important: false
draft: false
---

> “饮料呀？喝点啥子不嘛？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去两周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### Core 11 发布（喵喵喵）

经过多个月的测试和适配，AOSC OS 的 Core 11 更新终于发布啦！Core 是系统核心运行时及工具链的总称，其组件版本及特性保持一定稳定性，每年更新一次。此外，Core 还定义系统的版本号——本次更新后，AOSC OS 进入 11.0.0 版本周期。同以往一样，Core 11 的代号是本年度 AOSCC 由与会者们提名和选出的，本版本代号为 Koshki（俄：Кошки），代指猫的复数形式喵。

![Core 11 喵～](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/core-11-banner.png)

本次 AOSC OS Core 更新的内容有：

- **Glibc 更新至 2.37：** 带来众多函数优化及修复
- **GCC 更新至 13.2.0：** 完善 C23/C++23 支持，新增 AMD Zen 4 及龙架构 (LoongArch) 等处理器的优化支持
- **Linux API 头更新至 6.4.7：** 引入新特性支持，改善与新软件的兼容性
- **Zstandard 更新至 1.5.5：** 大幅度提升压缩及解压性能
- 发行版数据中，AOSC OS/Retro 更名为 Afterglow（星霞）

此外，AOSC OS Core 还增加了龙架构 (LoongArch) 支持，为今年底至明年初龙架构成为正式支持架构打下基础。

### Omakase 1.1 展望

在 [Omakase](https://github.com/AOSC-Dev/oma) 1.0 进入基本系统之际，开发者[傅孝元](https://github.com/eatradish)已经在同步推进 1.1 分支的开发工作。至截稿时，Omakase 1.1 已进入最终调整和排错阶段，每周末于贡献者例会进行体验及可用性测试。

Omakase 1.1 的主要开发目标有：

- **模块化：** 整理代码，方便其他开发者利用 Omakase 特性
- **系统集成：** 自动检查电源条件，控制系统电源及会话管理，有效避免意外故障
- **界面进化：** 重新设计历史及撤销功能，操作历史、回放及撤销界面更简明易懂；各项操作确认后，向终端回显操作内容，以便查阅
- **性能优化：** 优化下载及解压逻辑，源数据刷新大幅度增速
- **插件支持：** 支持功能扩展及第三方特性集成

我们将于 UTC+8 时间本周日下午二时的贡献者例会中就 Omakase 1.1 的设计进行展示及讨论，届时欢迎来[我社 Discord 语音频道](https://discord.gg/VYPHgt9)参与讨论。

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- 主线内核更新至 6.4.10，长期支持版 (Longterm) 内核更新至 6.1.45，修复 AMD 处理器中近期发现的安全漏洞 ([CVE-2023-20569](https://www.cve.org/CVERecord?id=CVE-2023-20569))
- Discord 聊天、语音及直播软件更新至 0.0.29
- Qemu 虚拟机及模拟器套件更新至 8.1.0
- Binutils 更新至 2.41，引入许多龙架构 (LoongArch) 指令支持
- Less 更新至 643，修复安全漏洞 [CVE-2022-46663](https://github.com/advisories/GHSA-5xw7-xf7p-gm82)
- GNU 调试器 (GDB) 更新至 13.2
- PowerShell 更新至 7.3.6
- Prism Launcher 开源 Minecraft 启动器更新至 7.2
- Zotero 文献管理器更新至 6.0.26
- 对各软件包中的 Bash 启动配置进行清理，规范化文件摆放，修复终端模拟器会话中某些功能无法正常使用的问题
- [系统安装器 (DeployKit)](https://github.com/AOSC-Dev/aoscdk-rs) 更新至 0.9.6，修复无法获取最新系统发行列表的问题

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- canokey-qemu (`canokey-qemu`)，用于在虚拟机中模拟 Canokey 设备
- eza (`eza`)，增强型 `ls(1)` 命令
- Feishin (`feishin`)，自建流媒体服务客户端
- libu2f-emu (`libu2f-emu`)，用于在虚拟机中模拟通用第二因素 (Universal 2nd Factor，简称 U2F) 设备
- libblkio (`libblkio`)，用于调用块设备 I/O
- Lempel-Ziv Finite State Entropy (`lzfse`)，来自苹果公司的无损压缩工具及算法库

#### 删除组件

过去两周中，我们移除了这些软件包：

- EDK2 (`edk2`) 虚拟机 EFI 镜像：该包并入到 Qemu (`qemu`) 一同安装
- SeaBIOS (`seabios`) 虚拟机 BIOS 镜像：该包并入到 Qemu (`qemu`) 一同安装
- exa (`exa`) 增强型 `ls(1)` 命令：该包已停止维护，系统更新时将自动安装替代品 eza (`eza`)，命令名称不变

#### 周边项目

- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) 发行版生成工具修复软件包校验逻辑，增强 `--include-files` 指定软件包列表出错时的提示输出

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 开始初步实现软件包测试功能，当前代码位于 `testing-suite` 分支

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。本周，我们新增了如下几个测试源：

- **OpenSSL 3.1.1 (`openssl-3.1.1`)：** 引入 OpenSSL 3.1.1 以替代老旧的 OpenSSL 1.1 运行时
- **Security Survey 2023H1/Libtiff (`security-survey-2023h1-libtiff`)：** 更新 libtiff 至 4.5.1，同时涉及大量其他软件包重构和更新

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入将龙架构支持作准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 预告：《聊斋》创刊号

过去几个月中，社区贡献者陆续购买了数台搭载龙芯 3A5000 及 3A6000 设备，用于各种不同场景。

那么，龙架构 (LoongArch) 加持的龙芯设备的使用体验如何呢？敬请期待《聊斋》创刊号！

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/3a5000.jpg)

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区新门户

目前的社区门户现已使用三年，一些设计上的问题也开始展现出来，比如布局效率低和新闻资讯、下载页面可见度低等，故近期开始着手设计新门户。下图为新门户页面设计稿，现征求建设性意见供贡献者参考；本次设计的主要目标和思考如下：

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/new-portal.png)

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

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/discord.png)

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
