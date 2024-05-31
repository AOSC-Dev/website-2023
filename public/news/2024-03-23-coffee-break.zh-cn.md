---
categories:
  - book
title: "安记冰室・三月下"
date: 2024-03-23T12:00:00+08:00
important: false
draft: false
---
<!-- 端着鱼丸汤的 -->

> “鱼丸，鱼丸，卖鱼丸——”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

社区脉动
--------

### libLoL 0.1.5 开放测试

![libLoL 伴您畅游新世界](/assets/coffee-break/20240323/imgs/liblol.png)

近日，社区开发者[王邈](https://github.com/shankerwangmiao)发布了龙架构旧世界 ABI 兼容运行时 libLoL 的 0.1.5~pre6 版：Glibc 版本更新至 2.39，编译时新增 ABI 及符号完整性检查，并将 `libcrypt` 库实现更改为 `libxcrypt`。这些更改的主要目的是避免潜在的兼容性问题。

AOSC OS 用户可通过如下命令打开 `liblol-0.1.5` 测试源进行测试：

```bash
oma topics --opt-in liblol-0.1.5
```

如果您在测试 libLoL 0.1.5 的过程中发现问题或遇到困难，请通过社区[各聊天群组](https://aosc.io/zh-cn/contact/)或[社区论坛](https://bbs.aosc.io/)与联系我们。

### 廿四年“流浪相机”活动周一启航

![流浪相机——到远方去！](/assets/coffee-break/20240323/imgs/roaming-camera.png)

经过近期筹备，“流浪相机”活动将于下周一（3 月 25 日）正式启动，期间将在 10 名参与者间传递，范围囊括中国多个省市与香港特别行政区。此外，根据参与者的意见，我们还准备了一本参与者留言簿，并将于活动结束后整理和发布相册供社区好友订购。

我们将于活动期间定期发布各位参与者的作品，敬请期待！

### 社区参加两场外联活动

![白铭骢介绍社区历史](/assets/coffee-break/20240323/imgs/lcpu-mingcongbai.jpg)

三月中，[白铭骢](https://github.com/MingcongBai)代表社区参加了两场外联活动，它们分别是由北大 Linux 俱乐部 (LCPU) 联合清华大学 TUNA 协会举办的“走向现代发行版 (Towards Modern Distro)”和曲阜师范大学计算机协会 (QFNU-ACE) 举办的“计算进化：安同曲阜师大行”。

其中，在“走向现代发行版”活动中，白铭骢以“包工、搅屎棍与大佬：安同 OS 的开发日常、雄心与无奈”为题介绍了社区工作、未来规划，并对当前志愿社区的现状和同企业单位的合作进行了简要讨论；在“计算进化：安同曲阜师大行”活动中，向曲阜师范大学计算机协会的同学们介绍了社区的历史与当前任务，并鼓励社团同学参与到社区的工作中来。我们希望这些活动能增进计算机爱好者与社团对我社工作的了解，并以此为契机吸引更多贡献者参与到社区工作中。

两场活动均有直播，目前回放正在剪辑中；届时我们将另行发布新闻稿。

系统快讯
--------

### AOSC OS 即将推送 Debian/Ubuntu 兼容性更新

![Spiral 超级牛力！](/assets/coffee-break/20240323/imgs/spiral-cow-power.png)

经过近两个月的公开测试，Spiral 兼容性框架在用户间的反响良好，测试中亦发现可以正常安装运行诸如金山 WPS for Linux、腾讯 QQ、微信、Google Chrome、Microsoft Edge 和 Spotify 等常用软件。据此，我们计划在未来数日内向稳定源推送 Debian/Ubuntu 兼容性更新。安装更新后，您将可以直接安装诸如上述软件的官方 .deb 软件包。

敬请期待！

### KDE 5 三月更新开放公测

![KDE 5 系统属性](/assets/coffee-break/20240323/imgs/aosc-os-kinfocenter-202403.png)

二月底 KDE Plasma 6 桌面环境发布后，KDE 5 的官方维护也临近尾声。考虑到 KDE Plasma 6 体验目前尚未成熟，我们对 KDE 5 桌面组件进行了最后一次更新检查，以期纳入各类特性和修复。目前我们已为一级架构推送了相关测试更新，请通过如下命令打开 KDE 5 三月更新(`kde-survey-20240304`) 测试源：

```bash
oma topics --opt-in kde-survey-20240304
```

如果您在测试 KDE 5 三月更新的过程中发现问题或遇到困难，请通过社区[各聊天群组](https://aosc.io/zh-cn/contact/)或[社区论坛](https://bbs.aosc.io/)与联系我们。

开发者角
--------

### BuildIt v2 投产

近日，社区开发者[陈嘉杰](https://github.com/jiegec)完成了 v2 的初步开发工作，引入了诸如任务跟踪和管理功能、网页管理功能和构建机配置要求等功能，目前已在生产测试中。

先前，陈嘉杰发布了 BuildIt v2 的[设计文档](https://github.com/AOSC-Dev/buildit/blob/v2/DESIGN.md)和[愿景帖](https://github.com/AOSC-Dev/buildit/issues/8)，目前仍有不少特性有待实现。如果您有意愿协助开发工作，请通过我社[各聊天群组](https://aosc.io/zh-cn/contact)与陈嘉杰联系。

### Autobuild 4.1 分支发布

伴随着 Spiral 兼容性框架初步测试的结束，[Autobuild](https://github.com/AOSC-Dev/autobuild4) 也合并了 Spiral 相关的标记功能，并发布了 4.1 系列的新版本。初版 Spiral 支持标记如下兼容包名：

- 共享库（如 `libc6` 和 `libc-dev` 等）
- GObject-Introspection Typelibs（如 `gir1.2-gnomekeyring-1.0` 等）
- Python 模块（如 `python3-setuptools` 等）

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [柴天浩](https://github.com/cthbleachbit)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [Outvi V](https://github.com/outloudvi)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [skybird](https://github.com/SkyBird233)
- [Suyun](https://github.com/Suyun114)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [leavelet](https://github.com/leavelet)
- [shatian114](https://github.com/shatian114)



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
