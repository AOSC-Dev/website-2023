---
categories:
  - book
title: "安记冰室・十一月上"
date: 2023-11-11T12:00:00+08:00
important: false
draft: false
---

> “你家活莫斯？”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去几周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### Apple Silicon 版 AOSC OS 预览系统发布

至截稿时，我们已经为搭载 Apple Silicon 的苹果电脑基本实现了 AOSC OS 安装器：[aosc-asahi-installer](https://github.com/AOSC-Dev/aosc-asahi-installer)。该安装器基于 [Asahi Linux 项目](https://asahilinux.org/) 的 [asahi-installer](https://github.com/AsahiLinux/asahi-installer)，支持从 macOS 系统安装 AOSC OS 的三大版本：桌面版 (Desktop)、基础版 (Base) 和服务器版 (Server)。

![Mac mini M1 运行 AOSC OS](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/apple-silicon.jpg)

目前，AOSC OS 的 Apple Silicon 支持尚处于早期预览阶段，许多基础支持功能和细节配置有待完善。我们计划在未来数周内逐步完善各方面支持，给 Apple Silicon 用户提供稳定的使用体验。

您可以在 macOS Ventura (13) 及以上版本系统使用如下命令安装 AOSC OS：

```
curl https://raw.githubusercontent.com/AOSC-Dev/aosc-asahi-installer/master/install-system.sh | sh
```

### 持续推进 AOSC OS“合龙”

先前，我们启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- 命令行有道词典 (`ydcv-rs`) 更新至 0.6.1，适配最新有道词典 API
- Bash 基础配置 (`bash-startup`) 更新至 0.5.2.4，新增自定义命令历史大小的支持
- NVIDIA 显卡驱动 (`nvidia`, `nvidia+32`) 更新至 545.29.02，为 Linux 内核 6.6 更新作准备
- Discord 聊天、语音及直播软件更新至 0.0.34
- NVIDIA X 控制库 (`libxnvctrl`, `libxnvctrl+32`) 更新至 545.23.06，修复运行时库没有正确创建软链接的问题
- Feishin 流媒体服务客户端 (`feishin`) 更新至 0.4.1
- GTK+ 3.x 运行时库修复缺少特性的问题
- 字体配置管理集 (`fontconfig`) 修复没有正确禁用点阵字体的问题
- MIPS 龙芯内核 (`linux-kernel-lemote`) 更新至 5.4.259，开启更多内核模块，修复 AMD 显卡无显示的问题
- MIPS 龙芯 GRUB (`grub-loongson3`) 修复 GRUB 无法安装的问题

#### 周边项目

- 系统安装器 ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) 发布 0.10.0 版，新增分区配置检查（如 EFI 启动的系统必须有 EFI 系统分区等）

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。目前，我们开放如下测试源：

- **Boost 1.83 (`boost-1.83`)：** 将 Boost 运行时库更新至 1.83 并更新或重构相关软件，提升对部分新 C++ 程序源码的兼容性
- **十月图形栈套件更新 (`graphical-stack-survey-20231031`)：** 引入大量图形栈组件更新，修缮新硬件支持并提高稳定性；修复 Firefox 视频硬件解码支持，提高多媒体浏览体验
- **libpaper 2.1.0 (`libpaper-2.1.0`)：** 更新纸张尺寸信息和分页支持库至 2.1.0 分支
- **Linux 内核 6.6 (`linux-kernel-6.6`)：** 将 Linux 内核更新至 6.6 分支，新增硬件支持（如在 RISC-V 上打开 ACPI 支持，新增龙架构配置等），引入性能优化等（如在 x86_64 架构内核上关闭先前因为疏忽打开的调度器调试支持`CONFIG_DEBUG_PREEMPT`，加速应用启动）
- **MIPS 龙芯修缮 (`loongson3-fixup-2`)：** 为龙芯专版 GRUB (`grub-loongson3`) 新增 `update-grub` 命令，默认为板载显卡选用 `loongson` 驱动，关闭 LevelDB 的 tcmalloc 支持以修复中州韵 (RIME) 输入法崩溃的问题等
- **signing-party (`signing-party-new`)：** 引入 `signing-party` 包，方便用户参加 PGP 签名派对等社交场合
- **systemd 254 (`systemd-254`)：** 将 systemd 更新至 254.5，为所有架构打开 EFI 支持，新增用于重载 binfmt（额外二进制格式支持）配置的触发器脚本（在安装其他包含 binfmt 配置的包时会自动重载配置）


这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

输入如下命令方可随时加入或退出测试源：

```
sudo oma topics
```

如果您在使用如上测试源的过程中遇到问题，请随时联系我们，我们将尽力协助您修复问题。

社区快讯
--------

### 社区“开源之夏 (OSPP) 2023”圆满收官！

经过几个月以来学生和导师的努力，社区的两个 OSPP 2023 项目均顺利通过组委会审核，圆满收官。恭喜[“Autobuild 3 自动化打包测试框架”](https://summer-ospp.ac.cn/org/prodetail/23f3e0033)项目学生 [leedagee](https://github.com/leedagee) 和导师 [Camber Huang](https://github.com/CamberLoid)；[“自由及开源软件简中本地化工作”](https://summer-ospp.ac.cn/org/prodetail/23f3e0032) 项目学生 [刘万涛](https://github.com/lwantao) 和导师 [白铭骢](https://github.com/MingcongBai)！

希望两位学生能继续在各开源社区中发光发热！

### 预告：《聊斋》创刊号

> 编者按：拖这么久了，也许有必要解释下为什么这期《聊斋》为何迟迟没有发布——考虑到目前社区正与龙芯中科的工程师协同调试使用过程中遇到的问题，我们不希望在有关问题得到解决或得出初步结论之前草率地进行讨论或吐槽；此外，遇到的问题和解决过程记录较长，我们目前希望更系统性地整理该刊内容，并分期发布，方便读者阅读。在一切就绪后，《聊斋》中遇到的每个问题将附有解决方案、或对问题原因的分析，以期最大化此类内容的建设性。感谢各位读者的理解和耐心！

过去几个月中，社区贡献者陆续购买了数台搭载龙芯 3A5000 及 3A6000 的设备，用于各种不同场景。那么，龙架构 (LoongArch) 加持的龙芯设备的使用体验如何呢？敬请期待《聊斋》创刊号！

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/3a5000.jpg)

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

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/discord.png)

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
