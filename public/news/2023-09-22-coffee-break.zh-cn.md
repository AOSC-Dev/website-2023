---
categories:
  - book
title: "安记冰室・九月下"
date: 2023-09-22T12:00:00+08:00
important: false
draft: false
---

> “你喝啥嘞——”

欢迎阅读安同开源社区 (AOSC) 双周报——《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

AOSC OS 快讯
------------

在过去两周中，社区开发者们除继续对 [AOSC OS](https://aosc.io/zh-cn/downloads/) 进行日常维护外，还为系统引入了许多更新、修复，推进了系统周边组件的开发，希望这些工作能为您的工作与娱乐生活带来便利。

### 龙架构 (LoongArch) 移植：“合龙”工作启动

近几个月来，社区贡献者中的龙架构 (LoongArch) 用户与日俱增。在过去几周中，我们开始快速推进 LoongArch 移植修缮，并启动了“合龙”工作——将目前位于前沿分支 (`frontier`) 中的移植工作合并到稳定分支 (`stable`) 中。在未来数个月中，我们将就两个分支中的源码及配置差异进行[审阅、测试及合并工作](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701)，直到 LoongArch 架构构建配置等成为稳定系统的一部分。

![社区贡献者王江津（咸鱼）正在移植 GCC 主分支上的 LSX/LASX 补丁](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/gcc-backporting.jpg)

过去两周，我们为 LoongArch 移植引入和修复了许多软件包，并为基础开发工具和运行时引入了许多前沿改进。感谢[陈嘉杰 (jiegec)](https://github.com/jiegec) 、[cth451](https://github.com/cthbleachbit/)、[吴楷阳 (OriginCode)](https://github.com/OriginCode) 、[刘子兴 (liushuyu)](https://github.com/liushuyu) 及[王江津（咸鱼）](https://github.com/RedL0tus)等贡献者，以及来自龙芯中科与 LoongArch 社区的同事朋友们的协助。

其中，系统组件和应用程序方面：

- 修复 LiveKit 介质无法引导的问题，并引入了安装程序支持
- 将 Linux 内核更新至 6.5.4，更新 LoongArch 支持补丁，并引入 KVM 虚拟化支持补丁
- 将 Firefox 更新至 117.0.1，更新架构修复补丁
- 引入 Telegram Desktop，Fish 等软件包
- 补全之前缺少的预装工具（尤其是使用 Rust 编写的 fd 及 ripgrep 等）
- 将 GRUB 更新至 2.12rc1，清理补丁

核心工具链方面：

- 将 AOSC OS Core 更新至 11.0.1 稳定版本，引入 GCC 13.2.0 等主线分支更新
- 将 Binutils 更新至 2.41，包含 LSX 及 LASX 指令集支持
- 从 GCC 主分支 (`master`) 移植 LSX/LASX 指令集支持至 GCC 13.2.0
- 从 Glibc 主分支 (`master`) 移植 LSX/LASX 指令集支持补丁至 Glibc 2.37
- 引入 LLVM lld 链接器支持，并为 Rust 程序打开 LTO 优化
- 新增 GCC 中的 D 语言支持，添加 LDC 的 LoongArch 架构支持

在未来一段时间中，我们还将推进如下工作：

- 引入 x86 LAT 二进制转译器及运行时，实验 x86 应用程序运行支持
- GCC 等工具链默认打开 LSX 指令集优化，重构系统
- ……

目前，用于 LoongArch 的实验性系统发行已经可以从[社区主页下载](https://aosc.io/zh-cn/downloads)，欢迎试用并提供反馈，亦欢迎有志之士加入“合龙”工作！

### Core 11.0.1 发布

![Core 11 喵～](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/core-11-banner.png)

本周，社区贡献者[刘子兴 (liushuyu)](https://github.com/liushuyu)发布了 Core 11.0.1，修缮 MIPS 及 POWER 架构的 D 语言支持，并开启了 GCC 的 GNU Modula-2 语言支持。

### 数个套件更新进入稳定源

过去半个月中，我们以套件更新 (Survey) 的形式为 AOSC OS 引入了数类软件的更新：

- **浏览器套件更新：** 包括 Mozilla Firefox 117.0.1，Thunderbird 115.2.2 以及 Google Chrome/Chromium 116.0.5845.179 等浏览器更新
- **虚拟化套件更新：** 包括 libvirt 9.6.0，virt-manager 4.1.0，open-vm-tools 12.3.0 等应用程序及运行时组件更新

### 更新速览

#### 系统组件

过去两周中我们为 AOSC OS 推送了许多更新，这里简要介绍其中几项：

- 火狐浏览器 (`firefox`) 更新至 117.0.1，修复数个安全漏洞
- Thunderbird 邮件客户端 (`thunderbird`) 更新至 115.2.2，引入全新的 [Supernova 界面](https://blog.thunderbird.net/2023/07/our-fastest-most-beautiful-release-ever-thunderbird-115-supernova-is-here/)
- Chromium (`chromium`) 及 Google Chrome 浏览器 (`google-chrome`) 更新至 116.0.5845.179，修复多项安全漏洞
- Bash 基础配置 ([bash-config](https://github.com/AOSC-Dev/bash-config)) 更新至 0.5.1，优化 SSH 提示符逻辑，新增使用 Rust 实现的 Git 提示符组件 ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status))，修复 `gdc` 命令与 Git 命令别名的冲突问题
- GCC (`gcc`) 修缮 MIPS 及 POWER 架构的 D 语言支持，新增 GNU Modula-2 语言支持
- Discord 聊天、语音及直播软件更新至 0.0.30
- Fcitx 的萌娘百科词库 ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) 更新至 20230914，引入许多新词
- Fend 命令行计算器及单位转换工具 (`fend`) 更新至 1.2.2
- Fish 命令提示符 (`fish`) 更新至 3.6.1
- libvirt (`libvirt`) 套件更新至 9.6.0，包含大量新特性及修复
- Node.js (`nodejs`) 更新至 18.17.1，新增龙架构 (LoongArch) 支持，改善与各项目新代码的兼容性
- 操作系统信息库 (`osinfo-db`) 更新至 20230719，新增许多新操作系统的默认虚拟机及部署配置
- qBittorrent BitTorrent 下载管理器 (`qbittorrent`) 新增网页管理界面
- Rust 软件组件安全性审计工具 `cargo-audit` 更新至 0.18.1，优化检查速度
- Starship 通用命令提示符自定义工具 (`starship`) 更新至 1.16.0，新增 Gitoxide 支持等新特性
- 修复 Tilix 可分屏终端模拟器 (`tilix`) 在 LDC 运行时 (`liblphobos`) 更新后无法启动的问题
- ZFS 文件系统内核模块及管理工具更新至 2.1.12，修复 AArch64 支持
- AOSC OS 测试源管理工具 ([atm](https://github.com/AOSC-Dev/atm)) 更新至 0.6.2，修复龙架构 (LoongArch) 构建支持
- 系统安装器 ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) 更新至 0.9.8，修复龙架构 (LoongArch) 上的 GRUB 支持，默认在 RISC-V 架构上以可移动模式安装 GRUB 引导程序镜像

#### 新增组件

过去两周，AOSC OS 软件仓库中新增如下软件包：

- bash-git-status ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status))，使用 Rust 重实现的 Bash Git 状态提示符
- Maliit 键盘套件 (`maliit-framework`, `maliit-keyboard`)，用于 Plasma Mobile 移动设备界面
- SANLock (`sanlock`)，存储集群访问管理器
- OCaml-Augeas (`ocaml-augeas`)，Augeas 配置文件编辑库的 OCaml 语言绑定
- undeaD (`undead`)，D 语言老旧组件集合

#### 周边项目

- [aosc-mklive](https://github.com/AOSC-Dev/aosc-mklive/) 安装维护盘生成工具修复搭载基板管理控制器的龙架构 (LoongArch) 主板上无法使用独显启动图形界面的问题；新增指定自定义发行分支及修订版本的支持；默认关闭过分拉长启动时间的介质校验和检查
- [aoscify-starship-theme](https://github.com/AOSC-Dev/aoscify-starship-theme) 立项，使用 Starship 重新实现 AOSC OS 的默认 Bash 提示符

#### 开发工具

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) 半自动打包工具更新至 1.6.104，修复带有共享库的 Rust 软件的安装流程；新增针对无需登记依赖确切版本的元包的 `ABBUILDDEPONLY=` 选项，提高打包效率；登记所有架构的 默认 Rust 构建参数 (`RUSTFLAGS`)；降低 32 位大端序 PowerPC 移植的处理器基线至 PowerPC 603，以便在更老的 Macintosh 电脑上运行星霞 OS (Afterglow)；在所有星霞架构上打开 `-gc-section` 参数，最小化二进制大小；登记 SPARC64 (SPARC V9) 构建参数，为新架构移植作准备
- 容器化打包环境管理工具 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 更新至 3.2.0，新增在工作区初始化向导中指定目标架构（非原生架构使用 QEMU 用户态模拟运行）的功能；此外，换用 SquashFS 格式的 BuildKit 发行，大幅度缩短环境部署耗时

### 尝鲜预报

为更好地测试我们的系统更新，我们为不同类别的更新创建相应测试源，供用户与贡献者测试。目前，我们开放如下测试源：

- **Go 1.21 及应用更新：** 引入 Go 1.21 工具链并更新仓库中使用 Go 编写的各应用程序及运行时组件
- **LibTIFF 安全更新 (`security-survey-2023h1-libtiff`)：** 更新 libtiff 至 4.5.1，同时涉及大量其他软件包重构和更新
- **OpenSSL 3.1.1 (`openssl-3.1.1`)：** 引入 OpenSSL 3.1 以替代老旧的 OpenSSL 1.1.1 运行时

这些测试源也将同步至我们的龙架构 (LoongArch) 前沿分支 (`frontier`)，并为正式引入龙架构支持做准备。

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

![AOSCC 2023 会场上的龙芯 3A5000 台式机](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/3a5000.jpg)

招工启事
--------

AOSC 是由志愿者在业余时间组织和驱动的社区，想法众多但人力不足。以下是我们最近希望完成的一些工作，如果您有兴趣，欢迎通过“一起吹水”栏目中列出的任意方式与我们取得联系：

### 社区论坛

论坛也许“老土”，但也不失为用于认真交流问答的好平台。如果您有兴趣参与论坛管理和维护，请联系我们。

一起吹水
--------

互联网是我社的主要活动场所，欢迎来社区各群聊及语音频道交流玩耍：

### 微信群

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/discord.png)

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
