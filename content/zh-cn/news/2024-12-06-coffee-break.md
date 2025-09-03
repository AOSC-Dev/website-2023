---
categories:
  - journals
title: "安记冰室・十一月号 | 庆祝社区十三周年"
date: 2024-12-06T12:00:00+08:00
important: false
home: true
---
<!-- 提着扎啤的 -->

> “哈扎啤，吃蛤喇，搞开源！”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

2011 - 2024：十三载，一起安同！
--------

![AOSC，十三岁生日快乐！](/assets/news/coffee-break/20241206/imgs/aosc-at-13-slim.png)

2024 年 12 月 1 日，我社迎来了诞生至今的十三周年纪念日。

2024 年也是令人难忘的第十三年：安同 OS 维护实现自动化，龙架构移植的正式发布让安同 OS 终结了十余年“开发者多于用户”的“屈辱”历史，libLoL 和 oma 走出社区利好其他发行版，社区编译服务器队列大幅度扩充，AOSCC 2024 初次迎来多所院校“争当东道主”的新气象，社区外宣、外联工作重启，社区贡献者重新走进校园推进知识共享，…… 回望过去一年，今年的成绩是大家的共同努力换来的，值得我们一同欢欣鼓舞。

感谢各位贡献者在各项目上的辛勤工作和对我社文化工作的贡献。未来一年，让我们一起携手，继续用爱发电，一起安同！

白铭骢   
2024 年 12 月 1 日

发刊变更说明
--------

由于《安记冰室》编辑人员工作生活繁忙，难以跟上双周报的编辑、发布节奏，我们决定于本月开始将社区期刊改为每月末发行。换言之，《安记冰室》十二月号将于 12 月底发布，期间社区用户公告、活动新闻等照常通过社区各公众平台发布。

感谢各位的理解。

用户公告
--------

### gfxreconstruct 软件包标记错误

由于维护者疏忽，我们错误将今日引入的 `gfxreconstruct` 工具的软件包名标记为了 `gfxconstruct`。考虑到软件包刚刚引入，我们决定采取撤包并重新上传带有正确名称的软件包的操作。

如果您安装了该软件包，请先使用如下命令卸载：

```
oma remove gfxconstruct
```

待正确的 gfxreconstruct 软件包推送后，请通过如下命令重新安装：

```
oma install gfxreconstruct
```

我们为此带来的不便表示歉意。

### 部分 Linux 内核版本可能导致 Tailscale 部分功能不可用

根据[上游用户报告](https://github.com/tailscale/tailscale/issues/13863)，Linux 内核版本：

- 6.11.4
- 6.11.5
- 6.6.57
- 6.6.58

由于上游提交 [netfilter: xtables: avoid NFPROTO_UNSPEC where needed](https://github.com/torvalds/linux/commit/0bfcb7b71e735560077a42847f69597ec7dcc326) 中的一处[错别字](https://lore.kernel.org/all/20241019-xtables-typos-v2-1-6b8b1735dc8e@0upti.me/) (typo) ，导致 `ip6tables(8)` 的 `--set-mark` 参数无法正常工作，影响到了  Tailscale 的部分功能（如 Magic DNS）。

**解决方案**

目前，该问题已确认在更新版本内核中得到解决。请注意更新 Linux 内核版本并避免使用上述四个内核版本，以防遇到上述可用性问题。

社区脉动
--------

### 青岛、西安见：十二月校园行日程预告

![安同校园行兰州大学站：兰大开源社区同学在龙芯 3A6000 台式机上游玩《东方 Project》系列游戏](/assets/news/coffee-break/20241206/imgs/touhou-on-3a6000.jpg)

2024 年最后一个月，安同校园行活动还将继续；本月，我们将走进两所高校：山东大学（青岛）及西安电子科技大学（南校区），与两所学校的同学互动并根据同学反馈的偏好邀请多名讲者作专题分享。

我们在 12 月的校园行日程如下：

- 12 月 7 日：山东大学（青岛校区）
- 12 月 15 日：西安电子科技大学（南校区）

希望能在上述两所学校看到同学及社区好友们的身影。校园行的专题分享环节将在我社 BiliBili 帐号“@安同开源社区”全程直播，敬请期待！

### 社区 2024 年度文化衫：现已发货

![2024 年度文化衫一览](/assets/news/coffee-break/20241103/imgs/merch-poster-coffee-break.jpg)

日前，社区 2024 年度文化衫已陆续发货，在国内的朋友们预计在 12 月初就能收到各位选购的文化衫了！本次我们以成本价共售出超过 140 件文化衫，足见各位对社区周边文创的喜爱，感谢各位支持。

但也有一则坏消息，我们目前发现厂家少发 4 件白色（o... oma!）款式卫衣，具体规格如下：

- 1 × M
- 2 × XL
- 1 × 2XL

我们已联系受缺货影响的买家，并将尽快与厂家协调补发，还请谅解。

再次感谢各位捧场，希望能在外出旅途和各类活动中看到 AOSC 文化衫的身影。

### 友情转发：龙芯社区十二月活动预告

2024 年末，龙芯社区活动逐渐升温，现友情转发两场来自不同组织背景的龙芯社区活动，欢迎各位参考并根据需要和兴趣关注与报名。

**龙架构双周会**

来自龙芯爱好者社区，首次龙架构双周会将于 12 月 8 日在武汉举行：

> LoongArch 双周会是由龙芯爱好者社区发起的，围绕龙架构进行议题展开的社区会议。会议分为双周会报告和社区问答两大版块，前者集中探讨龙架构社区动态及龙架构项目进展等议题，后者将收集统计社区对龙架构的意见和建议，向龙芯进行反馈。
> 
> LoongArch 双周会不设置任何的参与门槛，旨在为广大的龙芯爱好者搭建与社区同好的沟通桥梁，同步龙架构相关的最新社区进展，促进龙架构社区高质高效的发展。第一次龙架构双周会详情请见龙芯爱好者社区双周会[内容征集贴](https://www.loongbbs.cn/d/59-第一次龙架构双周会内容征集)，欢迎每一位龙芯爱好者的参会。

线下参与方式：

- 时间：12月8日（周日）下午2点
- 地点：龙芯中科武汉技术有限公司会议室
- 地址：湖北省武汉市江汉区经济开发区江兴路 11 号圈外创智中心 B 座 4 层 401-404

线上参与方式（腾讯会议）：

- 会议号：612-757-415
- 参会密码：2594

[参会链接 >>](https://meeting.tencent.com/dm/0sHxfNgRUtjt)

有关 LoongArch 双周会的具体细节，请见龙芯爱好者社区论坛的[双周会专区](https://www.loongbbs.cn/t/loongarch_biweekly_meeting)。

**非官方 Loong Meetup**

来自《咱龙了吗？》维护者 xen0n，非官方 Loong Meetup 将于 12 月 21 日下午在杭州举行：

- 活动时间：2024 年 12 月 21 日下午
- 活动时长：半天（下午）
- 地点：浙江杭州，具体待定
- 演讲者注意：讲者报名最后截止时间为 12 月 1 日 24:00（任意时区），讲者报名截止日期后的讲者报名将不保证一定被处理

> Loong Meetup 是《咱龙了吗？》维护者 xen0n 发起的，非官方 LoongArch 技术交流活动厂牌，本次活动是承蒙 jelawat 同学的详尽准备，而得以在 xen0n 的百咕至终举办的 Loong Meetup 先行筹备活动；视报名情况，也可能会含有您关注的主题的技术分享。
> 
> xen0n 与 jelawat 在 12 月的杭州欢迎每一个热心 LoongArch 社区建设工作的您，无论您是否有技术背景。

如果您有兴趣参与，请扫如下海报中的二维码或[点此链接](https://www.wjx.top/vm/tbPpsjk.aspx)提交意向报名：

![非官方 Loong Meetup 报名海报](/assets/news/coffee-break/20241206/imgs/loong-meet-poster.png)

系统快讯
--------

### 双击即得：图形化 .deb 软件包安装向导正式推送

![图形化 .deb 软件包安装向导](/assets/news/coffee-break/20241206/imgs/deb-installer.png)

尽管安同 OS 存在能够直接安装第三方发布的 `.deb` 软件包的 Spiral 泛 Debian 软件包兼容性，用户依然需要启动终端模拟器手动输入 `oma install` 命令安装下载的 `.deb` 软件包。需要终端才能安装软件包的行为，让大多数对终端操作不熟悉或不敢使用终端操作的用户望而却步。

为了增进安装第三方软件包的体验，[傅孝元](https://github.com/eatradish)开发了一款图形界面的[软件包安装向导](https://github.com/AOSC-Dev/deb-installer)。该向导能够让用户在文件管理器双击安装下载的 `.deb` 软件包，就像在 Windows 中安装软件一样，使得安装软件包的操作方便快捷。

### hwdata 信息缺漏征集

![以联想 ThinkBook 14+ 2024 AMD 版为例，许多 PCI 设备的型号信息均有缺失](/assets/news/coffee-break/20241206/imgs/hwdata-missing.png)

在维护安同 OS 的过程中，我们发现硬件信息数据库 [hwdata](https://github.com/vcrhonek/hwdata) 对许多新硬件信息的维护并不到位，导致许多硬件具体名称等信息缺失。如果在您的 Linux 机器上运行 `lspci` 或 `lsusb` 命令，发现有类似：

```
Intel Corporation device 008a
```

即：`[公司名] device xxxx`

这样的输出，则说明目前 hwdata 中缺少您设备对应的正式名称。我们目前正在收集这些信息，并尝试向 hwdata 上游补全相关信息，让 PCI/USB 等硬件信息查阅更为便利。

如果您的设备有类似上述输出，欢迎您将 `lspci -nnk` 及/或 `lsusb` 的输出通过如下表单提交给我们，感谢！

> 注：本表欢迎所有 Linux 发行版的用户填写，欢迎扩散！

[填写《hwdata 信息缺漏征集表》 >>](https://f.wps.cn/g/CVMkcGLP/)

### 用于主线设备的 Linux 内核 6.12 测试公告

![Linux 6.12 内核测试包来啦！](/assets/news/coffee-break/20241206/imgs/kernel-20241203.png)

近日，<Kernel.org> 发布了 Linux 内核主线版本 6.12 及其首个稳定版本 6.12.1。与此同时，安同 OS 的 6.12 版本内核补丁集同样趋于稳定，可供感兴趣的用户测试使用。

安同 OS 在内核 6.12 版本中作出的主要修改如下：

- 启用 DRM Panic 特性，并引入补丁以启用 AMD 及 NVIDIA 开源驱动的 DRM Panic 支持
- 引入 AMD 提交给上游、预计将于 6.13 合并的 3D V-Cache 性能优化器补丁
- 引入龙芯提交给上游、预计将于 6.13 合并的 I²S 音频补丁、KVM 相关补丁等
- 跟进 PixArt 触摸板上游补丁更新，修复影响其他供应商输入设备识别的问题
- 修复部分龙架构设备 S3 睡眠时遇到的内核警告信息
- 引入实验性的补丁以尝试解决部分惠普笔记本的性能问题
- 其余所有安同 OS 引入的内核补丁亦均与其上游保持同步，更新为最新或最稳定的版本
- 启用实验性的基于 MIPS 的龙芯三号内核生成，目前其问题较多、配置亦未与其他架构同步，因此将不会主动推送给这一架构的用户

**测试指引**

安同 OS 用户可通过如下命令获取 6.12 系列内核的测试版更新：

```bash
oma topics --opt-in linux-kernel-6.12.0
```

**已知问题**

NVIDIA 显卡驱动在部分硬件配置上可能无法正常显示系统画面，如果您遇到了该问题，请尝试添加如下内核参数：

```bash
nvidia_drm.modeset=1
```

### 安同 OS 核心包组第 12 版 (Core 12) 测试公告

![Core 12 对安同 OS 核心软件包将对核心运行时库及工具链进行翻新，并为 x86-64 及 POWER 架构引入多微架构优化](/assets/news/coffee-break/20241206/imgs/core-12-slim.png)

安同 OS 一年一度的核心组件更新来了！本次核心组件将更新到第 12 版，并使用代号 “localhost（本地主机）” 。本次核心组件包含以下软件更新：

- GNU glibc（GNU C 语言运行时库）升级至 2.40
- GNU GCC 编译器套件升级至 14.2.0

本次核心组件还带来如下组件的更替：

- 标准 DEFLATE 格式压缩/解压缩支持库 zlib 将被替换为性能更佳的实现 [`zlib-ng`](https://github.com/zlib-ng/zlib-ng)：zlib-ng 为多数架构的向量指令集编写了优化的实现，而标准的 zlib 并无相关优化。安同 OS 的 zlib-ng 将以 zlib 兼容模式构建，直接替代原来的 zlib。

同时，我们也在本次更新引入了数个架构优化相关、二进制安全性及开发特性相关的关键更改：

- GNU glibc 的多微架构优化库 (HWCAPS 子目录）支持。HWCAPS 子目录允许系统安装为同一种处理器架构中不同微架构等级优化过的运行库，因此系统将在程序加载时自动调用最优的运行库。我们已经为核心组件中的运行库启用了 HWCAPS 构建，升级到 Core 12 后，执行特定任务时系统性能将有所提升。
- 提升各架构的调优目标至更新的主流型号，如 x86-64 将这一目标提升至 AMD Zen4 (`-mtune=znver4`)、龙架构提升至 LA664 核心 (`-mtune=la664`)
- 默认改用 `-fhardening` 二进制加固参数，启用更多由新编译器、链接器引入的二进制加固特性
- 重新启用栈帧指针 (Frame Pointer)，可大幅度改善二进制调试体验

**尝鲜测试**

如果您对 Core 12 的特性感兴趣、希望尝鲜，欢迎您使用如下命令加入 Core 12 预览测试：

```bash
oma topics --opt-in core-12
```

如果您在试用 Core 12 过程中遇到问题或有疑问及反馈，请通过社区各聊天群组或社区论坛与联系我们，或直接前往 Core 12 测试主题的[拉取请求](https://github.com/AOSC-Dev/aosc-os-abbs/pull/5863)中回帖反馈。

### VSCodium 龙架构新世界版完成移植！

日前，龙架构爱好者 [darkyzhou](https://github.com/darkyzhou) 完成了对 [VSCodium]() 的龙架构新世界移植，并已开始发布二进制发行供各位试用。如果您有在龙架构设备上使用 Visual Studio Code/VSCodium IDE 完成开发工作的需求，那么您有福了！

由于 VSCodium 龙架构版目前生成环境中的 glibc 版本新于安同 OS 核心包第 11 版中提供的版本，如需使用，请参考[上节指引](#安同-os-核心包组第-12-版-core-12-测试公告)打开第 12 版核心包的测试源，方可解压使用。我们也将在近期在软件源中正式推送 VSCodium 龙架构软件包。

开发者角
--------

### Autobuild 4.5.0 发布：Core 12 配套、修复 32 位 x86 子系统构建问题

安同 OS 核心包组第 12 版 (Core 12) 发布在即，作为安同 OS 基础工具的 [Autobuild](https://github.com/AOSC-Dev/autobuild) 则抢先一步，发布了 4.5.0 特性更新。本次特性更新除 HWCAPS 子目录支持这一关键特性外，我们还对所有架构的优化参数进行了清理和调整，如为所有架构打开栈帧指针、针对星霞 OS 使用 `-O2 -fno-tree` 取代性能劣化明显的 `-Os` 默认优化级别等。

此前，在翻新安同 OS 的 32 位 x86 子系统 (`optenv32`) 的过程中，我们发现先前发布的半自动打包工具 [Autobuild](https://github.com/AOSC-Dev/autobuild4) 4.4.0 版本中对 [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/) 路径变量 `$PKG_CONFIG_PATH` 错误拼写为 `$PKG_CONFIG_DIR`，导致数个软件包无法正常构建。该问题现已随 4.5.0 发布修复。

### aoscbootstrap 0.8.0 发布：增强测试源集成功能

为更方便地发布带有测试性功能的系统镜像，[杨欣辉](https://github.com/Cyanoxygen) 发布了系统发行生成工具 [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) 0.8.0，增强其对测试源 (topics) 的集成功能：可同时引入多个测试源并在生成后的系统镜像中保存测试源配置状态。

该功能已于近期的测试镜像中投产测试，见如下生成安装镜像的用例：

```bash
env TOPICS="deploykit-survey-20241113 linux-kernel-6.12.0" \
    ./aosc-mklive.sh installer
```

### Ciel 3.5.1 发布：修复默认 umask 及终端标题设置行为

近日，容器化打包工具 [Ciel](https://github.com/AOSC-Dev/ciel-rs) 3.5.1 发布，包含 [poscat](https://github.com/poscat0x04) 修正的在非 Bash 提示符下创建的系统文件权限不正确的问题及 [杨欣辉](https://github.com/Cyanoxygen) 对 systemd >= 256 版中 Ciel 未能正确设置终端标题的问题。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [BC204](https://github.com/BC204)
- [CAB233](https://github.com/CAB233)
- [Henry Chen](https://github.com/chenx97)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [Kexy Biscuit（百合ヶ咲るる）](https://github.com/KexyBiscuit)
- [leafcompost](https://github.com/leafcompost)
- [leavelet](https://github.com/leavelet)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [Alan Lin](https://github.com/miwu04)
- [繁杂绪 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [Outvi V](https://github.com/outloudvi)
- [pch666777](https://github.com/pch666777)
- [SignKirigami](https://github.com/prcups)
- [Rick Liu](https://github.com/rickliu2000)
- [SkyBird233](https://github.com/SkyBird233)
- [Student Main](https://github.com/stdmnpkg)
- [StephDC](https://github.com/StephDC)
- [wxiwnd](https://github.com/wxiwnd)
- [张丙戊](https://github.com/xtexChooser)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [multimode_Liu](https://github.com/Dustymind)
- [mouyase](https://github.com/mouyase)
- [poscat](https://github.com/poscat0x04)

栏目介绍
--------

考虑到社区项目和文化等日趋成熟，我们决定重启外联和宣传工作，在更广阔的天地寻找志同道合的朋友。

您阅读的本期半月刊即是我们外宣工作的一部分，我们的文字宣传栏目如下：

- 安记冰室：社区双周报及访谈栏目
- 聊斋：信创及稀见软硬件专题
- 怀古：古董软硬件专题
- 实况：各类线下活动资讯

其中，《安记冰室》于北京时间 (UTC+8) 每月末发布，其他栏目均视讯息内容及编辑进展发布；发布平台包括：

- 社区门户
- 微信公众号“安同开源”
- Bilibili 帐号“安同开源社区”
- 微博帐号 @安同开源
- Twitter/X @aosc_dev_cn 及 @aosc_dev（英文）

此外，我们正寻求国内开源及 Linux 相关媒体的朋友合作，一起将我社的工作和文化广而告之。
