---
categories:
  - book
title: "安记冰室・八月上｜创刊号"
date: 2023-08-11T12:00:00+08:00
important: false
draft: false
---

> “你地饮滴咩呀——”

欢迎阅读安同开源社区 (AOSC) 双周报《安记冰室》的创刊号！《安记冰室》旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去两周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### 初识 Omakase

我们为 AOSC OS 量身定做的包管理前端 [Omakase](https://github.com/AOSC-Dev/oma) 正式进入主源，并将跟随 `admin-base`（管理套件）软件包的更新自动安装。Omakase 的主要设计目标有：

- **改善 APT 的界面：** 让界面指引、报错及操作逻辑更为简洁易懂
- **增强防呆机制：** 通过清晰的指引和操作撤销等机制，助您避免因粗心或其他原因造成系统故障，进而浪费时间和精力
- **优化网络性能：** 使用 HTTP/2 和多线程下载等技术，大幅度加快软件包安装与更新
- **提升使用效率：** 优化子命令布局，增强搜索功能，让您的系统管理体验更轻松明晰

![oma-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/omakase.png)

快更新系统，输入 `oma` 命令体验 AOSC OS 的全新包管理吧！Omakase 目前处在 1.0 的初期开发阶段，有许多[新特性与设计](https://repo.aosc.io/aosc-documentation/aoscc-2023/magmell/omakase.pdf)仍在规划当中，欢迎您就使用体验或问题，向我们提出批评建议或[提交问题报告](https://github.com/AOSC-Dev/oma/issues/new)！

Omakase 基于来自 Debian 的 [APT](https://wiki.debian.org/zh_CN/Apt) 开发，并保持与 AOSC OS 先前使用的 APT 功能与行为兼容。为照顾 AOSC OS 老用户的使用习惯，我们将继续在系统中预装 APT，与 Omakase 共存。

### LiveKit 尺寸优化

虽说 AOSC OS 的丰满尺寸早已“臭名昭著”，但除了确保系统特性齐全和组件简化外，优化系统尺寸亦是改善用户体验的重要一环。

月初，杨欣辉 (GitHub: [@Cyanoxygen](https://github.com/Cyanoxygen)) 针对 LiveKit（AOSC OS 标准启动与安装环境）的生成脚本[提交了一项改进](https://github.com/AOSC-Dev/aosc-mklive/commit/8339e1879cfe113bedcc3b30539057be50315677)，删除不常用字体和文档数据。通过此项改进，后续发布的 LiveKit 镜像将减重约 200 – 300 MiB。

![livekit-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/livekit.png)

### AOSC OS/Retro 正式版系统发布

如果您手上还有舍不得扔掉的古董电脑，我们针对老旧设备优化的 AOSC OS/Retro 系统可助您的古董电脑发挥余热，找到新的用途。七月底，我们发布了支持 32 位 x86 设备的 AOSC OS/Retro 正式版，目前，只需 128 MiB 内存、3 GiB 硬盘空间和 VGA 显示卡，您就可以享受完整的 AOSC OS/Retro 体验（小声说一句：如果您愿意手动安装基本系统，AOSC OS/Retro 在搭载 32 MiB 内存、500 MiB 硬盘的 486 机器上就能运行）！

![retro-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/retro.png)

兼容其他架构的 AOSC OS/Retro 正式版系统亦将于年内陆续发布，为您手上各类稀奇古怪的老旧设备提供持续软件支持，敬请期待！

### 更新速览

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- Linux 内核更新至 6.4，改进硬件支持；此更新修复了 12 代 Intel/NVIDIA 双显卡无法启动图形界面的问题，并改善了对华为擎云系列台式机的兼容性
- Neofetch 更新至 7.3.9，修复了 AArch64 设备上处理器型号错误显示为“Yes”的问题
- 修复了 WPS Office 在 AArch64 设备上无法启动的问题
- 修复了中州韵 (RIME) 输入法在 AArch64 设备上无法使用的问题
- 修复了 htop 无法正确处理 CPU 核心下线状态的问题
- Fcitx 的萌娘百科词库 ([fcitx-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) 更新至 20230714，引入许多新词
- FeelUOwn 播放器更新至 3.8.13，引入 Bilibili 搜索与播放插件
- Blender 更新至 3.6，包含大量用户界面改进与新功能
- VirtualBox 更新至 7.0.10，现兼容 Linux Kernel 6.4
- 新增 [Ouch](https://github.com/ouch-org/ouch)，一站式命令行压缩包管理工具

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。本周，我们新增了如下几个测试源：

- **AOSC OS Core 11 (`core-k`)：** 更新系统核心运行时：Glibc 更新至 2.37，GCC 更新至 13.2.0，Linux API 头更新至 6.4.7，Zstd 更新至 1.5.5
- **LLVM 16 与 Rust 1.71 (`llvm-16.0.4`)：** 引入 LLVM 16 和 Rust 1.71 及其众多新特性，修缮了龙芯 1000~4000 系列支持，并为 IBM POWER 架构新增了 D 语言支持
- **OpenSSL 3.1.1 (`openssl-3.1.1`)：** 引入 OpenSSL 3.1.1 以替代老旧的 OpenSSL 1.1 运行时

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支，并为引入将龙架构为 AOSC OS 正式支持的架构作准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### AArch64 构建服务器增列

得益于社区内朋友们的热心捐助，我们即将上线两台 AArch64 构建服务器：

- 联想 ThinkSystem SR358F V2，搭载 64 核飞腾 FT2000+ 处理器，128 GiB 内存
- 华为 TaiShan 200，搭载 64 核鲲鹏 920 处理器，256 GiB 内存

上线后，这些服务器将大幅度提高 AOSC OS AArch64 架构版本的维护效率。

![kp920](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/kp920.png)

### 社区重启外宣工作

自从 2013 年在百度贴吧 Linux 吧引发冲突后，社区基本暂停了所有外联和宣发工作。2023 年，考虑到社区项目和文化等日趋成熟，我们决定重启外联和宣传工作，在更广阔的天地寻找志同道合的朋友。

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

### AOSCC 2023 纪念品

2023 年度 AOSCC 贴纸集、编织袋和纪念衫即将再版，请留意各群组讯息。

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区新门户

目前的社区门户现已使用三年，一些设计上的问题也开始展现出来，比如布局效率低和新闻资讯、下载页面可见度低等，故近期开始着手设计新门户。下图为新门户页面设计稿，现征求建设性意见供贡献者参考；本次设计的主要目标和思考如下：

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/new-portal.png)

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

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/wechat.jpg)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/discord.png)