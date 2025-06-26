---
categories:
  - journals
title: "安记冰室・七月下"
date: 2024-08-04T23:00:00+08:00
important: false

---

[afterglow]: https://website-2023.aosc.io/afterglow
[amd64-installer]: https://releases.aosc.io/os-amd64/installer/aosc-os_installer_20240801_amd64.iso
[aoscbootstrap]: https://github.com/AOSC-Dev/aoscbootstrap
[aosc-os-abbs]: https://github.com/AOSC-Dev/aosc-os-abbs
[arm64-installer]: https://releases.aosc.io/os-arm64/installer/aosc-os_installer_20240801_arm64.iso
[ciel]: https://github.com/AOSC-Dev/ciel-rs
[cyanoxygen]: https://github.com/Cyanoxygen
[deepin-osc]: https://www.deepin.org/index/zh
[dkcli]: https://github.com/AOSC-Dev/dkcli
[eatradish]: https://github.com/eatradish
[jiegec]: https://github.com/jiegec
[katyushascarlet]: https://github.com/KatyushaScarlet
[kexybiscuit]: https://github.com/KexyBiscuit
[la64-installer]: https://releases.aosc.io/os-loongarch64/installer/aosc-os_installer_20240801_loongarch64.iso
[liblol]: https://liblol.aosc.io/
[mascot]: https://website-2023.aosc.io/mascot
[mingcongbai]: https://github.com/MingcongBai
[p-vector-rs]: https://github.com/AOSC-Dev/p-vector-rs
[reworkit]: https://github.com/AOSC-Dev/reworkit
[shankerwangmiao]: https://github.com/shankerwangmiao
[uniontech]: https://www.uniontech.com/
[zhaxia]: https://www.mihuashi.com/profiles/571437
[zstd]: https://github.com/facebook/zstd


<!-- 拿着糯米鸡的 -->

> “食个糯米鸡咯！”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

用户公告
--------

近期，由于我们的疏忽，推送了两轮存在问题的更新。至发稿时所有问题更新均已得到修复，下面转发两则公告供各位用户朋友参考。

### FLAC 1.4.3 更新可能导致桌面启动失败

根据用户反馈，更新 FLAC 1.4.3 后龙架构系统无法进入桌面，症状为登录后短暂黑屏并返回登录界面。

经查，先前更新 FLAC 1.4.3 重构过程中的构建环境存在问题，更新后的系统组件未正确链接到更新后的 FLAC 动态库 (`libFLAC.so.12`) 。而 KDE 桌面基础组件也在此列，因而无法正确载入，导致桌面启动失败。

该问题已通过推送 `libsndfile` 版本 1.2.0-2 修复，请您在更新时确保该组件版本大于或等于此版本（如 1.2.0-3 或 1.3.0 则可判定为大于，而 1.2.0-1 则小于），否则请勿更新并耐心等待推送。

### PostgreSQL 推送事故

由于维护者疏忽，在约两周前（7 月 17 日）手动合并 ICU 74.2 更新相关软件包时，我们误将 x86-64 (`amd64`) 及 AArch64 (`arm64`) 两个架构中本已于开发分支撤回的 `postgresql` 版本 16.3 的软件包推送至了稳定源。目前我们已推送再版的 13.15 版软件包并重构了受波及的软件。

如果您使用 PostgreSQL 16.3 创建了数据库，我们建议您及早导出数据并妥善备份。如需查验该问题，请使用数据库管理员账户通过 psql 工具访问数据库时，如果发现类似如下输出：

```
psql (16.3, server 13.15)
Type "help" for help.
```

请立即备份数据并重新使用 13.15 版本的 PostgreSQL 重新导入数据。

重新打包的 PostgreSQL 13.15 已经推送，如果您并未使用该数据库，放心更新系统即可；如果您升级后并未执行迁移，您也可以放心更新，更新后请通过如下命令检查 PostgreSQL 服务运行情况：

```
systemctl status postgresqld
```

### Chromium 127.0 浏览器更新测试征集

[KexyBiscuit][kexybiscuit] 整理了由[陈嘉杰][jiegec]维护的 Chromium 126 补丁集，移除了过期的补丁、并将其余的补丁和上游新增的补丁适配至 Chromium 127 上。

同时，考虑到 LLVM 18 已支持龙架构的 LSX 向量扩展指令集，本次生成中为龙架构（LoongArch64，下同）上的 Clang 开启了 LSX 优化，由此发现了上游一处生成脚本中的[缺陷](https://issues.chromium.org/issues/356038456)，其修复补丁也包含在本次的测试版本中，并已交由上游[审阅](https://chromium-review.googlesource.com/c/chromium/src/+/5740787)。

如果您有兴趣测试安同 OS 上的 Chromium 127.0.6533.88，请通过如下命令打开测试源并安装 Chromium。需注意，目前安同 OS 上的 Chromium 仅支持 AMD64 (x86-64) 、AArch64 和龙架构。需注意，命令中的测试源名称是准确的：

```shell
sudo oma topics --opt-in chromium-127.0.6533.72 && sudo oma install chromium
```

如果您在使用 Chromium 127.0.6533.88 测试版的过程中遇到问题或有疑问及反馈，请通过安同社区各聊天群组或社区论坛以联系我们，或直接前往[拉取请求](https://github.com/AOSC-Dev/aosc-os-abbs/pull/7270)下方留言。感谢各位参与！


社区脉动
--------

### 不虚此行：AOSCC 2024 后记

![AOSCC 2024 与会者合照](/coffee-break/20240803/imgs/aoscc-2024-group-photo.jpg)

2024 年 7 月 14 日，又一年的 AOSCC 圆满落幕，社区好友们在吉林大学王湘浩楼 B108 报告厅度过了一个充实的周末。18 位讲者带来的 17 场演讲，覆盖了社区报告、个人经历、技术分享、运营和发行版维护经验，干货多多。本届 AOSCC 也突破了参与者人数新高，达到了 130 余人。由于本届参与人数众多，为了更好地维持执行、服务各位参会者，本届 AOSCC 首次动员社区贡献者及校方人员组织了 16 人的志愿者团队。他们在会议前整理了周边物品，来接待各位与会者，并在会议期间引导入场、维持秩序；直播组的同事们也一如既往地给力和专业，自发搬运超过 50 公斤的设备和物资支持 AOSCC 的直播、互动与录制工作。

AOSCC 一直以来致力于为一线工作者提供展示与交流的平台，为新人及对参与开源社区工作跃跃欲试的朋友们破除信息差、缩短沟通距离。因此，希望 AOSCC 乃至安同开源社区能成为推进扩大化、公众化和草根化开源参与的积极力量，也希望能在各地看到更多地方性的开源社区集会；更重要地，希望 AOSCC 能够证明草根社区的专业、热情及积极作用。明年，我们会积极推动 AOSCC 的再次成功筹备和举办，也希望有兴趣提供会场资源及支持的各位积极联系我们，提供宝贵线索。在此之前，我们会继续组织“安同校园行”活动，让更多院校社团和组织接触开源社区的最新动向。

AOSCC 是由安同开源社区诸多社区好友、赞助方的慷慨解囊，以及社区志愿者和贡献者们的日夜操劳实现的——感谢各位的支持与努力，让 AOSCC 继续保持志愿性、独立性和社区驱动。最后，再次感谢各位与会者、讲者与工作人员，在未来的一年，让我们一起进步，一起安同！

### AOSCC 2024 纪念品与社区周边发售说明

今年的 AOSCC 周边包含贴纸、帆布袋、T 恤和钥匙扣，融合了诸多社区文化元素，其中包括社区长久以来形成的梗（众人拾柴火焰高）、社区维护龙架构发行期间遇到的轶事（高负载下 AMD 显卡会重置的问题），以及画师[五十根炸虾][zhaxia]基于[社区吉祥物][mascot]“安安”和“同同”设计的贴纸和表情包。

由于社区好友们订购社区周边的呼声甚高，我们决定将今年除编织袋外的所有纪念品和周边再版，并以成本价及运费为标准开放订购。

如果您有意订购再版周边，敬请关注我们后续发布的订购问卷！

### 山东大学上线社区软件源服务器镜像

![山东大学（青岛）镜像源上线我社软件仓库服务器镜像](/coffee-break/20240803/imgs/new-mirror-sdu-oops.png)

日前，山东大学（青岛）镜像源上线了我社软件仓库服务器镜像。

该镜像源由山东大学镜像站运营团队负责维护，是在山东大学（青岛）信息化工作办公室指导下立项，由山东大学（青岛）网管会镜像站学生运营团队运营的开源镜像站平台。衷心感谢各位同学的大力支持！

### 持续维护：社区上线多台 MIPS 龙芯三号构建服务器

![社区上线多台 MIPS 龙芯三号构建服务器](/coffee-break/20240803/imgs/new-3b4000-servers.jpg)

日前，[王翔 (KatyushaScarlet)][katyushascarlet] 向社区捐赠了一台 MIPS 架构的双路龙芯 3B4000 构建服务器。该服务器搭载 8 个核心及 32GiB 内存，并已开始接收社区自动化设施 BuildIt! 的构建任务。

此外，社区还计划上线由[统信软件技术有限公司][uniontech]及 [deepin 社区][deepin-osc]联合捐赠的两台双路 3B4000 构建服务器。这些服务器将助力我社安同 OS MIPS 龙芯 3 号发行的维护工作。同时，在星霞 OS 维护重启后，这些服务器还将承载星霞 OS 的龙芯 2F 版本的维护工作。

衷心感谢各位慷慨捐赠和大力支持！

系统快讯
--------

### localhost：安同 OS 核心包第 12 版代号出炉

![localhost 成为新一代安同 OS 核心包代号！](/coffee-break/20240803/imgs/core-12-localhost.jpg)

经过又一轮紧张刺激的投票，“localhost”以 73 票领先于其他六十余个代号提名，成为 2024 - 2025 年度的系统核心包代号。

### 将塞爆进行到底：安同 OS 离线安装盘发布

![安同 OS 安装介质：一站式、全功能、方便快捷](/coffee-break/20240803/imgs/installation-media-slim.png)

一直以来，由于安同 OS 依赖树齐全及功能全开的设计导向，系统大小与其他操作系统相比明显偏大。这一特征加之以安装盘需要从互联网拖取（大小相当可观的）系统包的设计广受用户诟病——一个超过 3GiB 大小的安装盘，居然还需要下载系统数据！

为解决这一问题，我们实现了一款基于 OverlayFS 差分文件系统组装的离线系统安装盘。该安装盘集成了所有系统镜像并对共用组件进行了去重，这样一来，用户朋友们不但不需要在安装过程中等待下载，还可以：

- 直接从 U 盘或光盘启动试用安同 OS 的桌面版
- 在搭载 NVIDIA 显卡的设备上正常启动安装和试用环境

可谓一石三鸟！虽然系统大小直奔 8GiB，双层 DVD 都要塞不下了，但您就说功能全不全吧——

此外，离线安装盘还包含重新设计的命令行安装器 [dkcli][dkcli]，支持在线、离线安装，更有无人值守配置支持，欢迎试用。

#### 发行说明

安装盘维护者[杨欣辉][cyanoxygen]为该安装盘的功能细节和使用流程编写了一份详尽的[发行说明](2024-08-04-offline-installer-release-notes.md)，欢迎查阅。

#### 下载安装盘

欢迎各位用户朋友下载试用，您的反馈和建议是我们工作的动力：

- [x86-64](https://releases.aosc.io/os-amd64/installer/aosc-os_installer_20240801_amd64.iso)
- [AArch64](https://releases.aosc.io/os-arm64/installer/aosc-os_installer_20240801_arm64.iso)
- [龙架构 (LoongArch)](https://releases.aosc.io/os-loongarch64/installer/aosc-os_installer_20240801_loongarch64.iso)

### 世界线“合龙”：龙架构旧世界固件启动新世界系统已成现实！

![新引导器及内核补丁助您打破世界线隔阂！](/coffee-break/20240803/imgs/breaking-the-world-boundary.jpg)

继“坏人”王邈设计实现的 [libLoL 兼容层][liblol]打通新旧世界应用程序兼容性后，坏人再放大招，实现了从 GRUB 系统引导器到内核的旧世界固件启动支持——这意味着新旧世界的隔阂从固件到应用程序均已成为历史！

龙架构电脑玩家们很可能听说过，3A5000/3C5000L + 7A1000 的主板和笔记本有好几个型号一直没能得到新世界固件更新，因而无缘组件更新、应用更新更频繁、硬件支持更好的各大新世界发行版。如果您的旧世界设备因此吃灰，这一启动支持的实现意味着您可以在任意旧世界固件设备上启动和使用安同 OS 在内的一众新世界发行版了。

#### 现实意义

新世界系统的旧世界固件启动支持将惠及各类龙架构设备用户。

不论对于二手设备玩家还是商业、政企用户，该支持将帮助旧世界设备向新世界系统的迁移，也将大大简化设备采购流程（用户及管理员均无需关心设备固件的新世界兼容性）、降低操作系统发行商的支持成本（用户无法启动系统的概率大大降低，且无需比对固件信息进行查错，甚至引导用户获取及刷写固件）。

#### 支持设备

我们已在如下设备使用安同 OS 测试过该启动支持：

- 联想开天 M540z
- 航天龙梦 ML5A（旧世界商用固件）
- 清华同方 超锐 L860-T2（卓怡恒通 L71）

#### 实现原理

简略地说，GRUB 引导器和内核的旧世界支持主要通过探测旧世界固件独有的启动参数接口（Boot Parameters Interface，简称 BPI）签名调整所需的起始内存地址、内存分段、中断控制器、ACPI 表等的规范及行为实现的。该实现支持目前已知的 BPI01000 及 BPI01001 两种启动参数接口。

实现过程中，王邈参考了龙芯为 deepin 内核提交的[旧世界固件 BPI 支持补丁](https://github.com/deepin-community/kernel/pull/130)并对其内容进行了大幅度精简及修缮。感兴趣的读者朋友们可以查阅王邈编写的[补丁草稿](https://gist.github.com/shankerwangmiao/a15e17fc5c1c1dfb883490862107fcbb)。

#### 更新计划

安同 OS 计划近期为内核及 GRUB 引导器更新引入旧世界启动支持，下一版系统安装盘也将支持在上述旧世界设备上直接引导和安装安同 OS。我们将在未来数日通知并推荐各新世界系统维护者及厂商评估、测试及集成实现旧世界启动支持的相关补丁。

### 稳定、兼容、界面三重升级：oma 1.3 发布多版更新

![oma 1.3 助您轻松管理系统组件](/coffee-break/20240803/imgs/oma-slim.png)

随着安同 OS 用户群体日益壮大，作为一线系统管理项目的小熊猫包管理 (oma) 也收到了越来越多的用户反馈。在过去一个月中，oma 发布了多个 1.3 修复版本，在修缮使用问题的至于，大幅度改善了 Debian/Ubuntu 兼容性，还优化了诸如测试源 (topic) 设置界面的清晰度。如下是 oma 近期发布版本的更改日志，欲知 oma 近期的开发进展，请参阅下列发布公告：

- [v1.3.36 更新日志](/en-us)
- [v1.3.34 更新日志](/en-us)
- [v1.3.33 更新日志](/en-us)
- [v1.3.32 更新日志](/en-us)
- [v1.3.31 更新日志](/en-us)
- [v1.3.30 更新日志](/en-us)
- [v1.3.29 更新日志](/en-us)

您对小熊猫包管理的使用体验满意吗？欢迎来我社群组和论坛分享您的体会！

### 快上加快：安同 OS 换用 Zstd 压缩软件包

近日，[王邈][shankerwangmiao]发现安同 OS 的软件包若改用 [Zstd][zstd] 压缩算法（原为 LZMA）可大幅缩短打包时的压缩耗时，在性能较低且线程较少的机器上，解压速度也显著更快。

我们已于上周开始将所有新推送的软件包改为 Zstd 压缩，您发现软件安装速度变快了吗？

### 紫华不再：安同 OS MIPS64 Release 6 移植停止维护

![安同 OS 不再维护 MIPS64 Release 6 版本](/coffee-break/20240803/imgs/mips-r6-closing-time-slim.png)

在数年间一次又一次的期待和失落后，我们决定即日起停止 MIPS64 Release 6 的一切维护工作。

2022 年底，我社数名安同 OS 维护者响应芯联芯 (CIP United) 关于 MIPS64 Release 6 开发板需要社区发行版的需求，推动了社区与企业合作维护安同 OS 移植的第一次尝试。2024 年夏末，芯联芯的 MIPS 芯片研发路线愈发模糊，硬件架构的未来飘渺，已经维护近两年的安同 OS MIPS64 Release 6 移植 (`mips64r6el`) 依然以三级（实验性）架构的形式存在着。

考虑到长久以来，该移植的硬件资源基本由我社志愿提供、维护效率极低，已难以为继。更不用说多名社区贡献者在长期投入业余时间维持和维护，且如今已对该移植缺乏维护热情，继续推动 MIPS64 Release 6 的维护工作无疑会造成不成比例的时间和精力成本。因此，我们决定即日起结束对安同 OS MIPS64 Release 6 移植的维护，将更多精力投入到其他未来更明朗、用户呼声更高的架构移植的维护工作中。

感谢各位社区贡献者、芯联芯同事们一直以来为 MIPS64 Release 6 系统乃至开源生态的维护付出的努力！也许有朝一日，我们能再次看到 MIPS 的一抹紫华重现眼前。

### 星霞初现：星霞 OS 开发正式重启

[星霞 OS（英文名 Afterglow，原 AOSC OS/Retro）][afterglow]是社区为老旧设备（又称 Retro 设备）定制的系统发行。星霞 OS 基于安同 OS 开发，采用精简特性集、配置调优和软件精选等手段，持续维护良好体验和性能，让老旧设备焕发新生、让用户们“重拾旧爱”。

但由于近年社区事务繁忙，以及龙架构“合龙”等工作带来的维护压力，星霞 OS 的开发工作已经停滞一年之久。社区的古董电脑兴趣小组近年来也涌入了大批古董电脑爱好者，因此星霞 OS 的关注度逐渐升高，需要尽快重启星霞 OS 的维护工作。

在 AOSCC 2024 期间，白铭骢就发布了星霞 OS 移植重启的计划，并于近日发起了重启工作。目前社区正在重新推动 Intel 80486 版本移植，并计划在未来按批次重启针对其他架构的移植。目前计划第一批移植对象包含 Intel 80486 (`i486`)、龙芯 2F (`loongson2f`) 和搭载 32 位 PowerPC 处理器的 Macintosh 及 IBM RS/6000 系列主机 (`powerpc`)。

同时，社区好友轮子妈为这些移植贡献了数个工具链优化补丁，并根据基于 OpenWrt 开发维护的经验，针对各架构提出了有关编译器优化参数的建议。相信有了轮子妈的贡献，重启后星霞 OS 的性能会比当前的版本更好。

星霞 OS 维护重启完毕后，将推出数个针对不同用途的版本：

- 最小系统：搭载命令行界面的最小化系统发行
- 桌面版：预装经美化调优的基于 KDE 3 的 Trinity Desktop Environment 桌面环境
- 个人服务器版：与安同 OS 一样，在最小系统的基础上预装常用的服务器软件

同时，社区还计划发布星霞 OS 的盒装实体版，供社区好友订购。敬请期待！

### Mesa 上游合并 llvmpipe OrcJIT 及 RISC-V 支持

![正在使用 llvmpipe 的 RISC-V 设备示意图](/coffee-break/20240803/imgs/riscv64-orcjit.png)

经过接近两年的审阅、修订及测试工作，图形加速套件 Mesa 的 llvmpipe OrcJIT 及 RISC-V 支持终于成功合并上游。该支持合并后，RISC-V 将可以正常使用由 OrcJIT 加持的软渲染加速。感谢 [Alex Fan](https://github.com/alexfanqi) 及 [Yukari Chiba](https://github.com/YukariChiba) 等贡献者为此上游补丁付出的努力！在此过程中，我社率先在安同 OS 的 Mesa 组件中集成、测试了该支持，并多次提供反馈。

此外，由我社贡献者 [Icenowy Zheng](https://github.com/Icenowy) 实现的[龙架构 llvmpipe OrcJIT 适配](https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/30197)及[盘上着色器缓存支持](https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/30036)也已合并上游，预计将随 Mesa 24.3 一同发布（安同 OS 的 Mesa 组件已在过去一段时间对这部分功能进行测试了测试验证）。

开发者角
--------

### abbs-update-checksum 工具发布：便捷刷新软件包校验和信息

自 BuildIt! 上线后，安同 OS 维护正式实现自动化。为了方便各位贡献者提交软件包更新，[傅孝元][eatradish]开发了一个用于刷新软件包校验和的小工具 [abbs-update-checksum](https://github.com/AOSC-Dev/abbs-update-checksum)。这款小工具取代了之前需要进入维护容器、需要 ACBS 才能执行的刷新源码包校验和的操作，使得各位安同 OS 维护者无需在自己的机器上部署 ACBS 即可刷新软件包信息，进而提交软件包更新。

同时，相比于传统的 `acbs-build -gw` 命令，这款小工具支持多线程下载，并能更好地处理架构特定源码包配置。相信这款小工具将大大方便各位软件包的日常更新维护工作。

### p-vector-rs, Ciel, aoscbootstrap 发布：适配 Zstd 压缩格式

早前，[王邈][shankerwangmiao]提出将安同 OS 的软件包压缩算法由 LZMA (xz) 更换为 ZStandatd (zstd)，以争取更快的压缩和解压缩时间。近日，安同 OS 的维护基础设施套件陆续实现了 Zstd 压缩算法的支持，并将安同 OS 的默认软件包压缩算法更改为 Zstd：

- [aoscbootstrap][aoscbootstrap]: 安同 OS 系统发行生成器
- [Ciel][ciel]: 安同 OS 构建容器管理器
- [p-vector-rs][p-vector-rs]: 安同 OS 软件仓库元数据生成器

由于 Zstd 解压缩速率的显著优势，我们预期用户在更新系统及批量安装软件包的耗时将明显降低。但由于 Zstd 压缩格式的改动是最近才引入的，因此绝大部分软件包依旧是以 xz 格式压缩的。使用 Zstd 压缩的软件包将陆续进入安同 OS 软件仓库。

### Kaboom 系统自举套件更新：适配最新基础包

[Kaboom](https://github.com/AOSC-Dev/kaboom)（安同 OS 系统移植自举工具）能够从头构建出带有包管理器及 Autobuild 基础设施的安同 OS 基础开发环境，因此常用于引入安同 OS 的新移植及重启现有移植。

日前，[白铭骢](/en-us)对 Kaboom 进行了翻修：

- 适配了安同 OS 核心包第 11 版 (Core 11)
- 修复了自举期间的构建错误
- 与[安同 OS 软件包树][aosc-os-abbs]对齐了各核心组件版本

翻修后的 Kaboom 将承载首批星霞 OS 移植重启工作。后续，社区将定期利用 Kaboom 全盘重构系统，以期验证工具链可用性并及时维护核心组件的构建脚本。

### ReworkIt! 发布：覆盖式测试安同 OS 软件包构建情况

由于缺少人手及兴趣，部分安同 OS 的软件包经常陷入无人看管和维护的状态。为了缓解此类情况，[傅孝元][eatradish]开发了 [ReworkIt!][reworkit]，用于覆盖式测试软件包构建脚本。该工具可检查安同 OS 软件仓库的软件包质量，后续还将实现针对仓库内的构建通过情况的统计与呈现，以帮助维护者们及时发现过期无法构建的软件包。

长久来说，我们希望通过部署 ReworkIt! 和提高维护意识，以便整体性提高安同 OS 的维护质量。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [Arkadi Shishlov](https://github.com/arkadijs)
- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [diredocks](https://github.com/diredocks)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [王翔 (KatyushaScarlet)](https://github.com/KatyushaScarlet)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [leavelet](https://github.com/leavelet)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [Outvi V](https://github.com/outloudvi)
- [bubu](https://github.com/p3psi-boo)
- [SignKirigami](https://github.com/prcups)
- [王江津](https://github.com/RedL0tus)
- [rickliu2000](https://github.com/rickliu2000)
- [王邈](https://github.com/shankerwangmiao)
- [shatian114](https://github.com/shatian114)
- [skybird](https://github.com/SkyBird233)
- [Student Main](https://github.com/stdmnpkg)
- [StephDC](https://github.com/StephDC)
- [Suyun](https://github.com/Suyun114)
- [Zamir SUN](https://github.com/sztsian)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [A1ca7raz](https://github.com/A1ca7raz)
- [韩于惟](https://github.com/hanyuwei70)
- [Harry Chen](https://github.com/Harry-Chen)
- [Chris Su](https://github.com/slchris)
- [TechCiel](https://github.com/TechCiel)
- [xtex](https://github.com/xtexChooser)

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
