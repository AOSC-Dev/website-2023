---
categories:
  - book
title: "安记冰室・二月上"
date: 2024-02-10T12:00:00+08:00
important: false
draft: false
---
> “龙年大吉！”

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去两周的开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

新春寄语
--------

![安同开源社区祝您新春快乐，龙年大吉！](/assets/coffee-break/20240210/imgs/aosc-new-year.png)

今天是龙年的第一天，希望大家都能与家人团聚、共享新春佳节的美好。

农历新年，社区贡献者们也奔波在回家的路上或在为自己和家人的生活忙前忙后，本期内容也因此较为简略，还请海涵！除夕钟声响起后不到 15 分钟，我社也完成了历时逾半年的“合龙”工作，龙架构 (LoongArch) 正式入列 AOSC OS 一级架构，其软件生态和使用体验将在未来数日、数月甚至数年间，在社区维护者的努力下不断成熟和丰富。

最后祝各位龙年大吉，万事顺意；也祝各位同事和社区伙伴们合作愉快，共同进步！

—— 白铭骢

社区脉动
--------

### 首届年度“烙饼会”将于 2 月 15 日开幕

农历新年在即，是时候筹划新一年的坑和白日梦了。我们计划在 2 月 15 日（农历初六）下午以视频会议的形式举办我社首届“烙饼会”，邀请社区各项目的主要贡献者介绍工作情况和未来一年的工作计划展望。届时，各讲者将以“闪电秀”的形式，用 10 - 15 分钟的时间介绍各自参与的项目，并在介绍完毕后接受来自社区的提问。“烙饼会”也将于 Bilibili 等视频平台全程推流直播。

我们将于未来一周内发布具体日程，目前计划由如下贡献者展示各自项目：

- [白铭骢](https://github.com/MingcongBai)：AOSC OS 维护情况及特性计划综述、新网站建设及其他社区活动（“流浪相机”及 AOSCC 2024）等
- [陈嘉杰 (jiegec)](https://github.com/jiegec)：AOSC OS 自动化维护框架之 BuildIt 及 Dickens
- [傅孝元](https://github.com/eatradish)：新 AOSC OS 安装程序及 oma（小熊猫）包管理前端
- [刘子兴](https://github.com/liushuyu)：Autobuild4、ACBS 及 Ciel 开发展望
- [杨欣辉](https://github.com/Cyanoxygen)：Devena 设备支持框架及 AOSC OS 初次启动向导
- [王江津](https://github.com/RedL0tus)：Spiral 泛 Debian 兼容性框架及系统更新摘要规范

参会前，请参阅 AOSC 廿四年度烙饼会的[参会信息、日程指南与注意事项](https://wiki.aosc.io/zh/community/springcon/2024/)，帮助我们将第一届“烙饼会”办好，下周见！

腾讯会议链接：https://meeting.tencent.com/dm/z4b5FnLlBX63

### libLoL 主页上线

![libLoL 主页](/assets/coffee-break/20240210/imgs/liblol-home.png)

本周，社区贡献者[温柔](https://github.com/xunpod)完成并上线了龙架构新旧世界兼容层 libLoL 的主页，该站点将用于展示 libLoL 安装教程和各旧世界应用的兼容性信息、使用指南等。希望本站点的上线能帮助各位方便快捷地使用龙架构电脑完成日常工作；我们也同时希望开放、标准化和可持续的新世界软件生态能够日益壮大，取代当前商用软件仍在使用的封闭而不可持续的旧世界生态。

主页地址：https://liblol.aosc.io

系统快讯
--------

### AOSC OS “合龙”工作圆满落幕

![AOSC OS 架构支持示意](/assets/coffee-break/20240210/imgs/port-tiers.zh-cn.png)

龙年第一天，历时逾半年的龙架构移植已完成合并，正式“合龙”。考虑到维护者和社区好友间用户之众，且该架构软件生态已基本成熟，龙架构将正式升格为 AOSC OS 支持水平最高的一级架构。

年假期间，我们将对龙架构移植进行最后修缮，预计在年假内将发布龙架构的第一批稳定系统包，敬请期待！

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
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
- [SignKirigami](https://github.com/prcups)
- [王江津](https://github.com/RedL0tus)
- [王邈](https://github.com/shankerwangmiao)
- [Suyun](https://github.com/Suyun114)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [温柔](https://github.com/xunpod)



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
