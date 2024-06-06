---
categories:
  - book
title: "安记冰室・十月下"
date: 2023-10-28T12:00:00+08:00
important: false
draft: false
---

> “你要火撒？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### AOSC OS 发布新一批系统发行

近日，我们发布了新一批 AOSC OS 系统发行，包含一年以来的系统组件更新，在引入更新和修复系统中存在的问题的同时，还改善了硬件支持。

前往我社下载页面即可获取 AOSC OS：[https://aosc.io/zh-cn/downloads](https://aosc.io/zh-cn/downloads)

![AOSC OS 默认桌面](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/desktop.zh_CN.png)

#### 系统特性

本次发行更新囊括许多新特性和使用体验改进，其中最为明显的是新增了社区开发的 [Omakase 软件包管理前端](https://github.com/AOSC-Dev/oma)，让系统组件的管理更方便、可靠；更新了内核、图形栈、音频栈等关键硬件支持组件，确保在新硬件上的使用体验；我们也对系统各关键组件进行了修缮和更新，主要的几项有：

- 更新 Linux 内核至 6.4 分支，同时提供 6.1 长期支持分支，确保新硬件上的系统体验；另有引入一系列针对 Microsoft Surface、华为擎云 W510 和飞腾 D2000/8 系列设备的补丁，改善这些设备上的开箱使用体验
- Core 更新至 11.0.1，包含最新核心运行时库及工具链，如包含更多架构支持及指令集优化的 Glibc 2.37 和支持各类最新语言特性的 GCC 13.2.0
- 引入 OpenSSL 3.1.1 运行时，包含最新的算法库及安全修复
- 更新预装浏览器套件，包括 Mozilla Firefox 117.0.1 及 Thunderbird 115.2.2
- 更新 KDE Plasma 桌面套件，包含截至 2022 年底的最新版本，对默认使用体验和性能进行了调优
- 增强默认命令提示符功能，如增加 SSH 远程命令行标记、优化 Git 提示符和规范化启动脚本等
- 增强默认编辑器功能，在 GNU Nano 的基础上附加预装 Vim 编辑器

### Omakase 1.1 发布

经过数个月的开发，AOSC OS 的默认软件包管理工具 [Omakase](https://github.com/AOSC-Dev/oma) 终于迎来了第一个特性更新！Omakase 1.1 在修复 1.0 分支中存在的一些设计、开发和使用问题的同时，引入了许多便利用户的特性：

- **系统集成：** 自动检查电源条件，控制系统电源及会话管理，有效避免意外故障
- **界面进化：** 重新设计历史及撤销功能，操作历史、回放及撤销界面更简明易懂；各项操作确认后，向终端回显操作内容，以便查阅
- **性能优化：** 优化下载及解压逻辑，源数据刷新大幅度增速
- **插件支持：** 支持功能扩展及第三方特性集成

欢迎您在[我社各聊天群组](#一起吹水)对 Omakase 的设计和使用体验提出批评建议，祝您使用愉快！

### 2023 上半年壁纸包更新发布

上周，我们发布了 2023 上半年的壁纸包更新，引入十张得票最高的社区好友投稿，更换了桌面版 (Desktop) 系统的默认壁纸。

![2023 上半年新壁纸](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/2023h1-wallpapers.jpg)

此外，我们还将其他[优秀投稿](https://github.com/AOSC-Dev/aosc-os-abbs/discussions/4474)纳入了 2023 版的扩充壁纸包中。您可以通过如下命令安装扩充壁纸包：

```
oma install aosc-community-wallpapers-extras-2023
```

感谢各位社区好友的投稿，希望这些壁纸能为您的 AOSC OS 增添光彩！

### “改朝换代”：系统徽标更新

八月底，我们推出了社区发行版的[新视觉 ID 设计](https://github.com/AOSC-Dev/newsroom/blob/masterhttps://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/zh_CN.md#%E5%8F%91%E8%A1%8C%E7%89%88%E6%96%B0%E8%A7%86%E8%A7%89-id)，包含 AOSC OS 和老旧设备专版“星霞” (Afterglow) 的新徽标。近期，我们通过系统徽标套件更新引入了这些新 Logo，效果如图：

![AOSC OS 新徽标展示](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/branding.zh_CN.png)

### 持续推进 AOSC OS“合龙”

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- [Omakase](https://github.com/AOSC-Dev/oma) 更新至 1.1.6，引入大量便民特性和问题修复
- OpenSSL 运行时 (`openssl`, `openssl+32`) 更新至 3.1.4，修复[一处“中等”级别安全漏洞](https://www.openssl.org/news/secadv/20231024.txt)
- 系统编辑器套件 (`editor-base`) 新增 Vim
- Discord 聊天、语音及直播软件更新至 0.0.32
- Fcitx 的萌娘百科词库 ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) 更新至 20231028，引入许多新词
- Feishin 流媒体服务客户端 (`feishin`) 更新至 0.4.1
- Fend 命令行计算器及单位转换工具 (`fend`) 更新至 1.3.0
- MangoHud 游戏性能监控 (`mangohud`, `mangohud+32`) 更新至 0.7.0，新增 NVIDIA 显卡状态监控支持
- Visual Studio Code (`vscode`) 及 VSCodium (`vscodium`) 更新至 1.83.1
- Neofetch 系统信息查看器 (`neofetch`) 更新至 7.3.10+git20230913，换用新系统徽标
- 桌面支持套件 (`desktop-base`) 更新至 11.0.0+campanula20190706，换用新系统徽标
- APT 更新至 2.6.1，修复 2.5 分支的编译错误
- APT 软件源配置管理工具 [apt-gen-list](https://github.com/AOSC-Dev/apt-gen-list-rs) 更新至 0.7.0，加入 Omakase 集成功能
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 更新至 1.7.2，引入[软件包测试框架](https://wiki.aosc.io/developer/packaging/autobuild3-testing-framework/)

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- Dua (`dua`)：命令行磁盘占用分析及可视化工具
- NVIDIA X 控制库 (`libxnvctrl`, `libxnvctrl+32`)：用于读取 NVIDIA 显卡设置和信息
- Pivy (`pivy`)：Coin3D 的 Python 语言绑定库
- [repo-refresh](https://github.com/AOSC-Dev/scriptlets/tree/master/repo-refresh) (`repo-refresh`)：本地软件源数据刷新工具
- 壁纸元数据生成器 (`wpmeta`)：用于生成 AOSC OS 壁纸包

#### 周边项目

- 系统安装器 ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) 发布 0.9.9 版，优化了虚拟内存文件 (swapfile) 默认大小的计算逻辑，在小内存设备上默认设置更为合理
- 社区开发者[傅孝元](https://github.com/eatradish)和[杨欣辉](https://github.com/Cyanoxygen)开始为[软件包信息查询网站](https://packages.aosc.io/)后端实现 PostgreSQL 后端，以期提高服务稳定性
- 社区开发者[杨欣辉](https://github.com/Cyanoxygen)开发了一款基于 PL/pgSQL 的 [dpkg](https://wiki.debian.org/dpkg) 软件包版本比较库，[dpkg-vercmp-plpgsql](https://github.com/AOSC-Dev/dpkg-vercmp-plpgsql)
- 软件源管理工具 [p-vector-rs](https://github.com/AOSC-Dev/p-vector-rs) 新增由社区开发者[柴天浩](https://github.com/cthbleachbit)实现的最新版及旧版软件包查询及分列逻辑
- 软件及系统发行源管理工具 [RepoKit](https://github.com/AOSC-Dev/repokit) 修复增量刷新功能，并引入基于 xz 元数据快速计算解压后大小的功能
- “抽票投奖”抽奖工具 [choupiaotoujiang](https://github.com/AOSC-Dev/choupiaotoujiang) 换用更为轻量的 `fastrand` 随机库
- 社区开发者[柴天浩](https://github.com/cthbleachbit)开发了一款将内存稳定性测试工具 `stressapptest` 集成至初始化内存盘中的 [Dracut 模块](https://github.com/AOSC-Dev/dracut-stressapptest)，后续可用于在非 x86 设备上集成内存测试功能

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 发布 1.7.2 版，正式加入由社区开发者 [leedagee](https://github.com/leedagee) 在[“开源之夏”](https://summer-ospp.ac.cn/)期间开发的[软件包测试框架](https://wiki.aosc.io/developer/packaging/autobuild3-testing-framework/)，框架将在不久的未来默认开启，作为提高系统软件包质量的又一手段
- 容器化打包环境管理工具 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 发布 3.2.1 版，修复基于 MIPS 的龙芯三号 (`loongson3`) 系统上的架构探测功能

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。目前，我们开放如下测试源：

- **Bash 基础配置 0.5.2.2 版 (`bash-config-0.5.2.2`)：** 修复非登录会话 (non-login session) 中未正确设置新文件权限位 (`umask`) 的问题，并将当前用户的 `~/.local/bin` 加入默认可执行文件搜索路径 (`$PATH`)
- **Boost 1.83 (`boost-1.83`)：** 将 Boost 运行时库更新至 1.83 并更新或重构相关软件，提升对部分新 C++ 程序源码的兼容性
- **[Mirrormgr](https://github.com/AOSC-Dev/mirrormgr) 0.8.0 (`mirrormgr-0.8.0`)：** 软件源镜像管理器，包含基于选单的新界面，后续将替代现有的 `apt-gen-list`

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 预告：《聊斋》创刊号

> 编者按：拖这么久了，也许有必要解释下为什么这期《聊斋》为何迟迟没有发布——考虑到目前社区正与龙芯中科的工程师协同调试使用过程中遇到的问题，我们不希望在有关问题得到解决或得出初步结论之前草率地进行讨论或吐槽；此外，遇到的问题和解决过程记录较长，我们目前希望更系统性地整理该刊内容，并分期发布，方便读者阅读。在一切就绪后，《聊斋》中遇到的每个问题将附有解决方案、或对问题原因的分析，以期最大化此类内容的建设性。感谢各位读者的理解和耐心！

过去几个月中，社区贡献者陆续购买了数台搭载龙芯 3A5000 及 3A6000 的设备，用于各种不同场景。那么，龙架构 (LoongArch) 加持的龙芯设备的使用体验如何呢？敬请期待《聊斋》创刊号！

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/3a5000.jpg)

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区论坛

论坛也许“老土”，但也不失为用于认真交流问答的好平台。如果您有兴趣参与论坛管理和维护，请联系我们。

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

请扫描此二维码添加好友并说明来意：申请加入 AOSC 社区频道。

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/discord.png)

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
