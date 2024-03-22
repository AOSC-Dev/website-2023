---
categories:
  - news
title: "安记冰室・十二月上"
date: 2023-12-09T12:00:00+08:00
important: false
draft: false
---

> “你们滋饮点么？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### oma 1.2 发布

近日，社区开发者 [傅孝元](https://github.com/eatradish) 发布了 oma 1.2 版，该版引入了如下几个特性：

- 大幅度改善报错和调试信息，方便用户和开发者解决使用过程中遇到的问题
- 新增 `--sysroot=` 参数，允许管理设备中安装的其他 AOSC OS 系统或容器

此外，随着 1.2 的发布，我们决定将 Omakase 更名为 oma，摒弃之前名不副实的 Omakase 命名。Omakase 最初的设计类似 Nix，基于中心配置重新组装系统，而目前的实现相对传统，即由用户“点单”安装软件包的设计显然和 Omakase 指代的“厨师发办”意思相悖。

> …… 那么，oma 的全称是什么呢？我们也不知道！欢迎各位读者广开脑洞～

该版本 oma 已推送至 AOSC OS 稳定源，祝使用愉快！

### 持续维护：新龙芯 3B4000 双路服务器即将投产

近年来，龙架构 (LoongArch) 已逐渐替代 MIPS 架构，成为龙芯处理器的核心指令集架构。然而，先前许多龙芯爱好者手上依然有基于 MIPS 的 1000 至 4000 系列龙芯，甚至有古董电脑玩家手上依然有龙芯 2F 机器（如龙梦的逸珑 8089 上网本）。我社发行版依然支持这些 MIPS 龙芯设备，且计划在未来数年内继续提供支持：其中，AOSC OS 主线发行支持龙芯三号 1000 - 4000 系列；面向老旧设备的星霞 OS (Afterglow) 则支持龙芯 2F。然而，开源软件更新和修复频繁且代码量不断增大，这给我社唯一一台 MIPS 龙芯编译服务器带来不小压力。

-
为提高 MIPS 龙芯架构的维护算力，我社发起募捐并计划组装一台新龙芯 3B4000 双路服务器。社区好友慷慨解囊，捐钱捐物，在一天内我们便集齐了所需硬件和款项。目前各种零件还在路上，我们计划在下周完成组装并将这台新服务器投入生产，为持续维护 AOSC OS 和星霞提供新的动力。

### 持续推进 AOSC OS“合龙”

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- [oma](https://github.com/AOSC-Dev/oma) 包管理前端更新至 1.2.4，引入数个新特性及修复（见上文“oma 1.2 发布”）
- LLVM 运行时及工具链（`llvm`, `llvm-runtime`；Clang, LLDB, LLD 等）更新至 17.0.6，引入数个新架构支持特性和修复
- Fcitx 5 (`fcitx5-*`) 及中州韵输入法各组件 (`rime-*`) 更新至最新版本，引入新特性和改进并修复中州韵输入时系统日志输出大量错误的问题
- Discord 聊天、语音及直播软件 (`discord`) 更新至 0.0.37
- Docker 系统及应用容器管理器 (`docker`) 更新至 24.0.7
- Docker Compose 多容器管理器 (`docker-compose`) 更新至 2.23.3
- Feishin 流媒体服务客户端 (`feishin`) 更新至 0.5.2
- Nano 文本编辑器 (`nano`) 更新至 7.2 并同步最新 nanorc 高亮配置集
- OpenVPN 代理服务器管理套件 (`openvpn`) 更新至 2.5.2
- PostgreSQL 数据库套件 (`postgresql`) 更新至 13.13，支持基于 LLVM 17 的 JIT 加速引擎
- Rust 编程语言工具链 (`rustc`) 更新至 1.74.0
- SuperSlicer 3D 打印机指令生成器 (`superslicer`) 更新至 2.25.9.3，新增 Prusa 打印机散热选项支持
- Telegram 即时通信客户端 (`telegram-desktop`) 更新至 4.12.2
- hwinfo 系统硬件查看器 (`hwinfo`) 更新至 23.2，新增龙架构 (LoongArch) 支持
- i3 平铺窗口管理器 (`i3`) 更新至 4.23，新增“聚焦工作区 (focus workspace)”命令并修复数个程序和文档问题
- ripgrep 高性能文件内容搜索工具 (`ripgrep`) 更新至 14.0.3
- strace 程序调试器 (`strace`) 更新至 6.5，新增龙架构 (LoongArch) 支持
- 为二进制模拟器（如 Wine、Mono 和 Qemu 用户态模拟器等）新增自动二进制格式配置重载支持，后续安装这些软件包，无需重启系统即可开始使用
- 修复 Evolution 邮件客户端 (`evolution`) 在 WebKitGTK+ 网页渲染引擎更新后内容高度不正常的问题
- 修复 Pytest (`pytest`) 因缺少组件依赖无法运行的问题

**新增组件**

其中，AOSC OS 软件仓库中新增如下软件包：

- Python INI 文件解析模块 (`iniconfig`)
- ICNS 图像渲染库及处理工具 (`libicns`)
- NVMe 协议库 (`libnvme`)

**本期包工**

感谢这两周参与 AOSC OS 维护工作的各位同事（按字母顺序）：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [傅孝元](https://github.com/eatradish)
- [Felix Yan](https://github.com/felixonmars)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)

#### 开发工具

- [ACBS](https://github.com/AOSC-Dev/acbs) 软件包构建脚本、源码及构建管理器发布 20231205 版：[刘子兴](http://github.com/AOSC-Dev/acbs) 为源码记录文件实现了 `use-url-name` 选项，允许控制下载源码时是否保持 URL 中记录的文件名并修复子包构建顺序计算不正确导致报错的问题
- [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) 软件包更新查询工具发布 0.4.0 版：[Felix Yan](https://github.com/felixonmars) 修复了先前依赖更新后无法正确识别查询类别的问题；[陈嘉杰 (jiegec)](https://github.com/jiegec) 新增 `-U` 选项，可利用 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 和 [ACBS](https://github.com/AOSC-Dev/acbs) 在查找更新后自动下载源码并刷新校验值记录；[傅孝元](https://github.com/eatradish) 改善了错误管理逻辑
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具发布 1.7.6 版：[白铭骢](https://github.com/MingcongBai) 修复了某些软件包因为 `TZ` 时区设置变量未设定时无法编译的问题（默认设置 `TZ=UTC`）
- [mirrormgr](https://github.com/AOSC-Dev/mirrormgr) 软件包源镜像管理器发布 0.9.0 版：[傅孝元](https://github.com/eatradish) 新增测试源刷新功能
- [pushpkg](https://github.com/AOSC-Dev/scriptlets/tree/master/pushpkg) 软件包推送工具发布 0+git20231129 版：[Felix Yan](https://github.com/felixonmars) 新增 `-i` (`--identity-file`) 选项，允许在推送软件包时指定非标准位置存放的私钥文件
- [照妖镜 (treevsrepo)](https://github.com/AOSC-Dev/treevsrepo) 软件包版本比对工具引入许多新特性和修复：其中 [陈嘉杰 (jiegec)](https://github.com/jiegec) 为 treevsrepo 引入了测试源 (topic) 版本比对支持、修复了 Epoch 比对行为不正确的问题并修复软件包变种版本比对时未参考具体对应架构的问题；[傅孝元](https://github.com/eatradish) 修复了探测软件源中某些软件包无法比对的问题
- [陈嘉杰 (jiegec)](https://github.com/jiegec) 开始实现一款名为 [BuildIt!](https://github.com/AOSC-Dev/buildit) 的自动打包机器人，在实现完成后，软件包维护者们可以从 Telegram 发起各架构软件包构建，无需自行登录 SSH 并手动上传软件包，提高打包效率，降低维护工作繁琐程度


#### 周边项目

- Apple Silicon 设备启动及管理脚本 ([asahi-scripts](https://github.com/AOSC-Dev/asahi-scripts))：[杨欣辉](https://github.com/Cyanoxygen) 实现了虚拟内存交换文件 (swapfile) 创建逻辑并改进分区 ID 随机化和记录流程；初次启动配置更可靠、修复先前安装 AOSC OS 后没有虚拟内存文件的问题，改善高负载下系统稳定性和响应度
- Bash 基础配置 ([bash-config](https://github.com/AOSC-Dev/bash-config)) 发布 0.6.3 版：[白铭骢](https://github.com/MingcongBai) 和 [刘子兴](https://github.com/liushuyu) 将用于切换到上级目录的语法糖改写为动态函数，允许切换到最多 16 层上级目录；默认关闭可执行路径哈希记录 (executable PATH hashing) 功能，以免在多个可执行路径下存在同名命令时出现执行命令时选用可执行路径 `$PATH` 变量中记录顺序不一致的问题

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。其中，如下几个测试源包含重要更新：

- **Linux 内核 6.6 (`linux-kernel-6.6`)：** 将 Linux 内核更新至 6.6 分支，新增硬件支持（如在 RISC-V 上打开 ACPI 支持，新增龙架构配置等），引入性能优化等（如在 x86_64 架构内核上关闭先前因为疏忽打开的调度器调试支持`CONFIG_DEBUG_PREEMPT`，加速应用启动）
- **MIPS 龙芯修缮 (`loongson3-fixup-2`)：** 为龙芯专版 GRUB (`grub-loongson3`) 新增 `update-grub` 命令，默认为板载显卡选用 `loongson` 驱动，关闭 LevelDB 的 tcmalloc 支持以修复中州韵 (RIME) 输入法崩溃的问题等
- **十一月底 Mozilla 套件更新 (`mozilla-survey-20231122`)：** 更新 Firefox 浏览器至 112.0、Thunderbird 邮件客户端至 115.5.0，为所有主线架构打开硬件视频编解码加速支持及 OpenH264 编解码器支持，允许在支持 WebRTC 特性的架构上使用视讯会议平台
- **signing-party (`signing-party-new`)：** 引入 `signing-party` 包，方便用户参加 PGP 签名派对等社交场合
- **鸭子 (Yazi) 命令行文件管理器 (`yazi-new`)：** 引入鸭子命令行文件管理器 (`yazi`)

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 社区论坛即将上线

![社区论坛一瞥](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/bbs.png)

两周前，我们初步搭建了社区论坛并设计了基础板块，我们计划在各类文案和规则文档完成后上线社区论坛；论坛默认语言为中文，但开设英文专版以便国际友人参与讨论。在论坛搭建完成后，论坛将用同步发布各类社区及项目信息；《安记冰室》等专栏也将在论坛发布。

目前论坛尚未开放注册，我们计划在年内完成上述准备工作。

论坛地址：https://bbs.aosc.io/

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

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

请扫描此二维码添加好友并说明来意：申请加入 AOSC 社区频道。

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/discord.png)

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
