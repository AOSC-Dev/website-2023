---
categories:
  - book
title: "安记冰室・二月下"
date: 2024-02-26T12:00:00+08:00
important: false
draft: false
---
> “龙年大吉！”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

社区脉动
--------

### 廿四年“流浪相机”报名开放

三月中旬，我们计划参考 B 站 Up 主 [-LKs-](https://space.bilibili.com/125526/) 的“漂流相机”启动廿四年度“流浪相机”计划。本计划预先约定一套摄影器材，将一台由社区好友借用的相机寄出在参与者间接龙。参与者将自己选出的最优作品投稿，组成廿四年下半年壁纸集。
目前，我们也已完成基本筹划工作，目前计划如下：

- 器材：索尼 α7R V (ILCE-7RM5) 无反相机，搭配 SIGMA 45mm F2.8 DG DN Contemporary 镜头
- 运行时长：半年，三月中启动，至九月中截止
- 运行地区：中国大陆，含香港和澳门特别行政区
- 参与方式：报名审阅制，仅限现有 AOSC 项目、壁纸投稿贡献者及上述贡献者信任的个人

本次“流浪相机”计划组织 20 人参与，给每位参与者一周时间接收相机、拍照和寄出相机。如无特殊情况，每位参与者在收到摄影设备后应在 5 天内完成拍照，然后寄出相机；如在时间安排上有特殊情况，请在流浪相机的组织群组（报名者会收到邀请）告知。我们将在 3 月 10 日报名截止后根据地理位置和个人情况进行排期

感谢您的报名！

报名链接：https://f.wps.cn/g/fHeWYf29/

![亦可扫此二维码报名](/assets/coffee-break/20240226/imgs/roaming-camera-signup.png)

### “烙饼会”直播录像发布

![社区年度烙饼会](/assets/coffee-break/20240226/imgs/aosc-springcon-2024.png)

社区贡献者[温柔](https://github.com/xunpod)和[王江津](https://github.com/RedL0tus)分别在 Bilibili 和 YouTube 上发布了我社“烙饼会”的现场录像，欢迎观看。

- Bilibili：https://www.bilibili.com/video/BV1Fj421X7gX
- YouTube：https://www.youtube.com/watch?v=olxw2rG7hZY

### 社区视频宣传计划

在 25 日的社区贡献者会议上，我们讨论了视频外宣工作的计划，达成了包括目标平台、栏目设计、导向和质量要求等的初步共识：

- 初步计划三个视频栏目，其中中短篇幅的包括用户指南和重大特性宣传，长篇栏目有同校园社团、地方组织和企业代表的访谈视频
- 视频发布平台包括到 Bilibili 和 YouTube，内容以中文为主
- 目标受众为系统用户，指南视频主要提供解决方案，特性宣传主要介绍对用户使用体验的影响

未来几周中，社区贡献者[温柔](https://github.com/xunpod)将摸索制作和发布第一批短篇视频，敬请期待！

### 龙架构新构建服务器上线

![社区好友 Xinmudotmoe 贡献的龙架构构建服务器](/assets/coffee-break/20240226/imgs/loongarch64-server-dragonfly.png)

近日，社区好友 [Xinmudotmoe](http://t.me/xm_moe) 为社区提供了一台龙芯 3C5000 服务器，助力我社 AOSC OS 龙架构移植的维护工作；该机器搭载 16 个核心和 128GiB 内存，更通过修改固件[^1]将处理器主频超到了 2.5GHz，一跃成为我社性能最高的龙架构编译服务器。

再次感谢 Xinmudotmoe 的慷慨贡献！

[^1]: 考虑到目前超频的方案较为复杂，[Xinmudotmoe](http://t.me/xm_moe) 欢迎有兴趣的同学们联系交流。

系统快讯
--------

### AOSC OS 龙架构版发布！

![AOSC OS 龙架构版发布！](/assets/coffee-break/20240226/imgs/aosc-os-loongarch64.png)

日前，我们在龙芯开源社区论坛发布了 AOSC OS 的第一批龙架构稳定版系统，现可供下载，欢迎试用！

AOSC OS 以“简明可靠”为设计及维护目标的，面向有一定 Linux 使用经验的用户，针对个人桌面设备优化体验，并致力于为用户提供开箱即用和简便可靠的工作环境。欲知有关龙架构版的系统特性、安装指南和已知问题等信息，请见龙芯开源社区论坛上的发布帖。

发布地址：https://bbs.loongarch.org/d/376-aosc-os

### Debian/Ubuntu 软件兼容框架 Spiral 即将开放测试

![本 AOSC OS 具有超级牛力](/assets/coffee-break/20240226/imgs/spiral-cow-power.png)

社区开发者[王江津](https://github.com/RedL0tus)近日完成了 Spiral 软件兼容框架的初步开发，可为 AOSC OS 提供为 Debian、Ubuntu 及各类衍生发行版（如 Loongnix 和统信 UOS）开发的商用软件的兼容性。

我们目前已针对各类常用软件，如金山 WPS for Linux、腾讯 QQ、搜狗拼音输入法、Google Chrome、Microsoft Edge 和 Spotify 等软件进行了适配，发现这些软件均工作良好。考虑到兼容性工程的工作量大和场景复杂，我们计划在未来两周内进一步完善各方面组件，并在时机合适时开放测试，供各位使用。

敬请期待！

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
- [秦斐然](https://github.com/Nyovelt)
- [千须末 (OriginCode)](https://github.com/OriginCode)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [Suyun](https://github.com/Suyun114)
- [温柔](https://github.com/xunpod)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [skybird](https://github.com/SkyBird233)


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
