---
categories:
  - book
title: "安记冰室・五月下"
date: 2024-05-26T12:00:00+08:00
important: false
draft: false
---
<!-- 端着常德粉的 -->

> “七些莫得？粉还是米面儿？”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

社区脉动
--------

### 自白：安同开源社区、开源产业与全民信创

![白铭骢在软件所“开源之夏校园行”吉林大学站分享](/assets/coffee-break/20240526/imgs/ospp-jlu-2024.jpg)

> 安同开源社区，一个由初中生创立的技术社区至今已走过超过 12 个年头。从“为中国创造”的初心、国际化接轨、本地化探索到与产业化和信创行业的互动，这个以志愿者组织、运作和管理的社区坚持用爱发电，推动国际开源软件和国产软硬件的民间关注与参与。在商业化社区与国家全力推进开源产业化的当今，安同开源社区要如何坚持自己的独特性、建设性乃至话语权？

5 月 26 日，[白铭骢](https://github.com/MingcongBai)就这一课题在软件所“开源之夏校园行”吉林大学站的活动中与中国开源业界的专家们同台，分享了安同开源社区作为草根社区的工作、视角与倡议。该活动在 Bilibili 全程直播。

我们将在主办方完成视频剪辑后转发此段分享的录像，敬请期待！

### AArch64 新构建服务器上线

![又一 AArch64 构建服务器上线，由华为鲲鹏 920 驱动](/assets/coffee-break/20240526/imgs/aarch64-new-server.png)

近日，社区好友 quiccat 为社区提供了一台基于华为鲲鹏 920 处理器的 AArch64 服务器，搭载 16 个虚拟化核心和 64GiB 内存，将助力安同 OS (AOSC OS) AArch64 移植的维护工作。

感谢 quiccat 的捐赠及神楽坂早苗️提供的托管服务！

系统快讯
--------

### 八面玲珑：安同 OS 启动玲珑软件生态测试预览

![在安同 OS 上通过玲珑包管理安装的 deepin 浏览器、邮件客户端和日历应用](/assets/coffee-break/20240526/imgs/linglong-on-aosc.png)

在发行版间软件生态割裂的当今，许多组织与单位都在探索应用容器化和标准化的分发方案，以期降低软件发行商的适配压力和用户的心智负担。[玲珑](https://linglong.dev/)是来自[统信软件技术有限公司](https://uniontech.com/)的又一跨发行版生态项目，主要提供各类国产及 deepin 第一方桌面应用。

日前，安同 OS 发起了玲珑软件包支持的测试源供各位用户测试反馈。至此，玲珑成为安同 OS 支持的第四个跨发行版生态。如果您有兴趣测试安同 OS 上玲珑的使用体验，请通过如下命令打开测试源并安装玲珑：

```
oma topics --opt-in linglong-0.15.2-new && oma install linglong
```

而后，您就可以通过 `ll-cli` 命令安装玲珑生态上的软件了。

> 请注意：目前玲珑的主要支持 x86-64 (`amd64`) 架构，其他架构（如 ARM 和龙架构）中的软件数量相当有限。

如果您在使用玲珑的过程中遇到问题或有疑问及反馈，请通过社区各聊天群组或社区论坛与联系我们，或直接前往玲珑的开发仓库[提交问题报告](https://github.com/linuxdeepin/linglong/issues)。

### oma 1.3 改善 Ubuntu 和第三方软件源支持

在上期介绍 [oma](https://github.com/AOSC-Dev/oma) 小熊猫包管理新增 Debian/Ubuntu 系列发行版初步支持后，[傅孝元](https://github.com/eatradish)又为 oma 新增了诸如 `Acquire-by-Hash` 和 [deb822](https://manpages.debian.org/unstable/apt/sources.list.5.en.html#DEB822-STYLE_FORMAT) 源配置格式等功能，也验证了一众由 [Packagecloud](https://packagecloud.io/) 管理生成的软件源支持（如 Vivaldi 浏览器）。

至此，oma 1.3.11 版本已可以基本完美地在 Debian 和 Ubuntu 上使用了。欢迎各位 Deb 系发行版用户试用！

开发者角
--------

### Bump-n-Roll：Annica 加入“手气不错”功能

继五月初[陈嘉杰 (jiegec)](https://github.com/jiegec)为 [BuildIt!](https://github.com/AOSC-Dev/buildit) 自动化维护设施实现 `/bump` 更新命令支持后，[傅孝元](https://github.com/eatradish)又为其新增了 `/roll` 命令，随机呈现 10 个需要更新的软件包给维护者们“试试手气”。

在这一命令实现后，安同 OS 的测试源数量再次迎来了高峰（笑）。各位维护者快来玩玩看，让您感兴趣的软件包得到应有的关注！

### 走向全面自动化：安同 OS 软件包自动更新机制初步投产

BuildIt! 在解决构建和分发自动化之余，[傅孝元](https://github.com/eatradish)又通过 [autopr](https://github.com/AOSC-Dev/autopr) 实现了从更新探测开始的自动化辅助设施。autopr 可根据由维护者们编写的软件包更新白名单自动探测上游更新、在 [安同 OS 软件包树](https://github.com/AOSC-Dev/aosc-os-abbs) 开启合并请求、自动构建并申请维护者审阅。

这样一来，各类需要频繁更新的简单包，如硬件数据库 [hwdata](https://github.com/vcrhonek/hwdata) 和媒体下载工具 [yt-dlp](https://github.com/yt-dlp/yt-dlp) 等软件包都能得到第一时间的更新操作了——安同开源社区离维护自动化又近了一步。

### 系统发行自动化：ShipIt! 项目投产

自古以来（笑），安同 OS 的系统包生成和发布完全依赖人力，需要登录到各个架构的构建服务器上运行生成脚本并上传系统发行，过程冗长枯燥至极。这也导致了安同 OS 发布系统包的频率相当低，许多修复也没能得到及时的集成。

日前，[傅孝元](https://github.com/eatradish)开发了 [ShipIt!](https://github.com/AOSC-Dev/shipit) 项目，该设施可根据需要自动更新各类系统包并将其上传至预发布区供维护者测试验证。ShipIt! 以类似 BuildIt! 的逻辑实现了自动化系统包生成和发行设施，大大降低了系统包更新的负担。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [杨欣辉](https://github.com/Cyanoxygen)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [Kexy Biscuit](https://github.com/KexyBiscuit)
- [leavelet](https://github.com/leavelet)
- [刘子兴](https://github.com/liushuyu)
- [白铭骢](https://github.com/MingcongBai)
- [秦斐然](https://github.com/Nyovelt)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [SignKirigami](https://github.com/prcups)
- [shatian114](https://github.com/shatian114)
- [skybird](https://github.com/SkyBird233)
- [Student Main](https://github.com/stdmnpkg)
- [Suyun](https://github.com/Suyun114)
- [xen0n](https://github.com/xen0n)
- [温柔](https://github.com/xunpod)



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
