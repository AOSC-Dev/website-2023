---
categories:
  - journals
title: "安记冰室・八月号暨 AOSCC 2025 特刊"
date: 2025-08-17T22:00:00+08:00
important: false
home: false
---

本期编者：ZeroAurora Camber  
本期审校：白铭骢

> 卖拨隆细噢——

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍过去一个月的开发进展、社区事务与近期社区内外活动资讯。本栏目不发表评论性内容。

## 冰室再开张：《安记冰室》恢复更新

![《安记冰室》题图](/assets/news/coffee-break/20250817/imgs/coffee-break.webp)

由于社区志愿者工作生活繁忙，《安记冰室》自 2 月以来便处于断更状态。随着新贡献者的加入，我们很高兴地宣布，自本特刊开始，《安记冰室》恢复更新！~~（但谁也说不好能撑多久呢）~~

自本次特刊起，我们将对本刊的内容安排进行调整。具体而言，新版《安记冰室》将不再按板块区分内容，而是择取最近一个月内最具有代表性的新闻予以详细报道；其他在过去一个月时间曾在社区各个自媒体渠道发布的内容将统一汇总在《新闻汇总》栏目，以超链接形式提供跳转；保留“红花榜”，以期更好地展示与激励社区工作。

特别需要提及的是，随着贡献者例会恢复每周常态开展，其产出的会议纪要成了展示开发者工作的主要方式。因此，新版《安记冰室》**取消了原有的《开发者角》栏目**。我们鼓励贡献者通过**阅读会议纪要**或**直接参与例会**的方式来跟进开发动态。

试更新期间，《安记冰室》将于**每个月第三个周日**发布。若有文本内容上的疑虑或建议，欢迎在社区各个交流渠道讨论（详见文末《一起吹水》栏目），也欢迎有兴趣参与刊物维护的读者通过上述渠道联系我们。

## 特别栏目：十载 AOSCC，与你同行：AOSCC 2025 小记

![AOSCC 2025 宣传图](/assets/news/coffee-break/20250817/imgs/aoscc-2025.webp)

7 月 26 日至 27 日，AOSCC 2025 在上海交通大学闵行校区东上院阶梯教室 100 顺利举办。本届 AOSCC 创下了多项历史新高：讲者最多（20 人）、与会人数最多（实到 269 人）、分享课题最丰富（19 个）、周边文创最多样、线上互动最活跃……在 26 日的会场上，来自五湖四海的各界朋友们聚在一起，留下了这样壮观而难忘的合照：

![AOSCC 2025 与会人员合照](/assets/news/coffee-break/20250817/imgs/aoscc-2025-group-photo.webp)

自去年开始，AOSCC 将“一线优先”作为会议的中心主题，致力于在社区新人和用户与国内开源生态一线开发者中搭建桥梁。今年，我们亦邀请到了来自一线的多名开发者和社区运营为我们带来精彩的分享，介绍从发行版维护到固件、内核、安全等多个技术课题，乃至社团和社区项目管理经验等同等重要的非技术课题。

作为我社历史上规模最大的社区聚会，AOSCC 2025 的成功举办离不开志愿者们的付出：社区和学校社团方共 25 位志愿者辛勤劳动，主持了签到、物料分发、秩序维护和环境清理等工作，为参会者提供了优秀的服务；直播组的同事们搭建了稳定的网络和设备环境，打造了出色的直播体验；70 余名社区好友在短短四小时内众筹了 11711.60 元人民币，可谓「安同速度」。此外，AOSCC 2025 也首次启用了由 [TechCiel](https://github.com/TechCiel) 制作的数字化会务系统。得益于他们的支持，本届 AOSCC 的参会体验得到了飞跃性的提升，在此衷心表示感谢。

若您错过了本次 AOSCC，亦或是意犹未尽想要回顾本次聚会的精彩瞬间，我们在社区的 [bilibili 空间](https://space.bilibili.com/3494371531950426)提供了本次活动的回播。本次聚会的所有幻灯片也均已在[社区服务器](https://repo.aosc.io/aosc-documentation/aoscc/2025/)发布。

2025 年是 AOSCC 十周年。十年来，AOSCC 从十余人和一间小教室，到数百人和大型阶梯教室；从好友间的展示分享，到一线工作者云集的大型会议；从名不见经传的聚会，到“国内顶流开源漫展”…… 我们见证了安同开源社区逐渐成长，更见证了国内计算机科学技术与开源文化的发展壮大。未来，我们将继续“安于同学合作”，积极为社区一线工作者搭建沟通渠道与展示舞台，继续坚守在信创文化与开源事业一线；也欢迎读者加入安同开源社区的贡献者队伍中，让我们一起进步，一起安同！

十载 AOSCC，与你同行，感谢有你！

## 安同 OS 重要更新一览

在过去的一个月时间，安同 OS 发布了一系列重要更新，**请尽快更新您的安同 OS！**

### 安全更新

- 7-Zip 25.01：修复一处解压时可能导致任意文件写入并可进而触发代码执行的漏洞，漏洞编号 CVE-2025-55188（严重性：低）
- 适用于 GNU C 函数库 2.40 的安全补丁：修复一处重复释放漏洞，漏洞编号 CVE-2025-8058（严重性：中）
- 适用于 Linux 的 Intel 处理器微码包，版本 20250812：修复多个特权提升及拒绝服务漏洞（含 5 个高危漏洞）
- BusyBox 1.37.0 安全更新：修复一处 TOCTOU（检查到使用时间）竞态条件漏洞（严重性：高）
- Firefox 141.0：修复 Mozilla 基金会第 2025-56 号安全公告中披露的 16 个安全漏洞（含 6 个高危漏洞） 
- Git 2.50.1：修复五处高危漏洞，包含两处远程代码执行漏洞 (CVE-2025-48385, CVE-2025-48386) 
- Mihomo 1.19.11 安全更新：修复 2 例本地提权漏洞 
- OpenJDK 安全更新（2025 年 7 月）：修复 Oracle 重要更新公告（2025 年 7 月）中披露的逾 10 个安全漏洞（含多个高危漏洞） 
- Poppler 25.07.0 安全更新：修复一处远程拒绝服务攻击漏洞 - CVE-2023-34872（严重性：中） 
- Thunderbird 141.0：修复 Mozilla 基金会第 2025-61 号安全公告中披露的 16 个安全漏洞（含 6 个高危漏洞）
- Unbound 1.23.1+icannbundle20210902：修复 3 个安全漏洞（高危、中危、低危各一个） 
- uv 0.8.6：修复一处利用解析实现差异导致某些组件包安装器解压有害 ZIP 内容的漏洞，漏洞编号 CVE-2025-54368（严重性：中）

### 其他更新

- Linux 内核，版本 6.14.11-2：新增龙芯 2K3000 片上以太网 GMAC 设备的支持
- Linux 内核（长期维护版本），版本 6.12.34：修复 Intel Skylake 设备上启用 IOMMU 特性后显示输出时有闪黑的问题，并修复龙芯 3A6000 笔记本（如攀升 NL38-N11 及其他型号）触摸板不可用的问题 

## Meow~ AOSC Core 13 命名确认！

![Core 13 字符画](/assets/news/coffee-break/20250817/imgs/core-13.webp)

按照传统，每年的 AOSCC 上都要进行核心包组（Core）下个开发周期的版本代号投票，今年也不例外——在 7 月 26 日上午的议程中，现场的与会者共同决定了 Core 13 的版本代号：Meow！由 TechCiel 设计的 ~~（高仿联合国）~~ 投票大屏完整地记录下了这一属于社区猫猫们的胜利。

![投票结果](/assets/news/coffee-break/20250817/imgs/core-13-voting.webp)

按照开发计划，AOSC Core 13 将包含下列重要系统核心组件的更新：

- GCC 15.2
- glibc 2.42
- 龙架构 LA664 (3A6000, 3B6000, 3C6000) 平台性能修复

若您对尝鲜感兴趣，敬请关注我社后续的测试公告。

## 双喜临门：社区 Telegram 与 bilibili 频道关注者双双破千

![bilibili 账号截图](/assets/news/coffee-break/20250817/imgs/bilibili.webp)

7 月 6 日，我社在 Telegram 上的新闻资讯频道“AOSC 社区脉动”（@aosc_os）订阅人数破千；7 月 27 日（AOSCC 2025 第二日），我社在 bilibili 上的账号“安同开源社区”关注破千——短短一月，双喜临门！

感谢各位用户和社区同事的支持，今后也请多多关注安同开源社区的各个自媒体账号！

## 倒计时停止：RISC-V 下一阶段维护目标确定

长期以来，安同 OS 的 RISC-V 移植面临着多种隐患：算力滞后、设备基础差、稳定性堪忧、支持难以完善…… 这导致了社区整体对 RISC-V 移植的维护意愿较低，甚至一度难以为继。在 AOSCC 2025 上，社区贡献者白铭骢提示，若 2025 年 10 月 1 日前现状无改观，RISC-V 移植或将面临降级或冻结的风险。

幸运的是，在会后，数个社区好友主动站出来，接下了 RISC-V 移植维护的重任。在接下来的一段时间内，他们会共同努力改善系统发行与软件包质量与测试覆盖率。这也就意味着，“RISC-V 惨遭降级”的倒计时，尚未开始便已停止。

RISC-V 无疑是安同 OS 中数个架构移植中最为特殊但也最为艰难的，而这一问题绝非安同独有：它号称开放自由、未来可期，但却因为硬件性能差、标准碎片化、设备问题多而复杂等问题始终难以得到重视和采用，开发者们亦难以使用 RISC-V 设备完成日常工作，这对安同 OS 等发行版的工作造成了显著的困难。衷心希望更多对这一架构感兴趣的开发者投入到架构生态的实际开发维护中来。

## 救火师傅，您这水龙头保千兆吗：小熊猫包管理（oma）1.19 和 1.20 更新来啦

![oma 1.20](/assets/news/coffee-break/20250817/imgs/oma-1.20.webp)

小熊猫包管理 (oma) 进入维护模式了——才怪，v1.20 追尾着 v1.19 来啦！

随着 AOSCC 2025 的落幕，社区开发者[宇宙眼镜人](https://github.com/eatradish)基于会议前后的用户反馈，接连发布了小熊猫包管理 v1.19 + v1.20 正式版。v1.19 对 oma 的审阅界面进行了翻修，修复了数个特定环境下的功能性问题，并增强了 oma 对系统环境监测的可定制性；v1.20 对用户需求为 oma 实现了自定义镜像支持、优化了测试源的进入/退出行为，并针对龙架构无 SIMD 移植等项目需求引入了源配置模板功能。

### 安装指北

oma v1.20 日前已经推送安同 OS 稳定源，更新系统即可获取。

我们亦同步将 oma 更新推送到了我们的 Debian/Ubuntu 软件源中，Debian、Ubuntu 及衍生版，Linux Mint、deepin 及 openKylin 用户可以通过如下命令获取 oma v1.20 更新。

```sh
curl -sSf https://repo.aosc.io/get-oma.sh | sudo sh
```

## 你好，SYSU：中山大学软件源镜像站上线

![中山大学软件源镜像站](/assets/news/coffee-break/20250817/imgs/sysu-mirror.webp)

8 月 6 日，中山大学开源软件镜像站上架了我社[软件源服务器镜像](https://mirror.sysu.edu.cn/anthon/)。中山大学镜像站补全了我社在华南地区镜像的缺失，通过默认启用的准实时镜像重定向服务，华南地区的用户无需额外配置即可享受高质量的软件包下载体验。感谢学校和社团同学对我社工作的大力支持！

## 新闻汇总

本节用以汇集过去一个月中我社发布的新闻和公告，以供读者查阅。

- [小熊猫包管理 (oma) v1.19 测试公告](https://aosc.io/news/detail/2025-08-01-oma-1.19-preview.zh-cn.md)（2025 年 8 月 1 日）
- [AOSCC 2025 会务反馈问卷](https://aosc.io/news/detail/2025-08-04-aoscc-2025-feedback.zh-cn.md)（2025 年 8 月 4 日）
- [小熊猫包管理 (oma) v1.20 测试公告](https://aosc.io/news/detail/2025-08-11-oma-1.20-preview.zh-cn.md)（2025 年 8 月 11 日）

## 例会纪要汇总

本节用以汇集过去一个月内社区例会纪要链接，若有意参与社区例会，敬请留意我社各聊天群组消息。

- [2025 年 8 月 2 日](https://aosc.io/news/detail/2025-08-02-contributor-minutes.zh-cn.md)：开源之夏进度同步、Aoska 应用商店前后端开发讨论、八月发行更新内容，以及会务反馈等事项
- [2025 年 8 月 9 日](https://aosc.io/news/detail/2025-08-09-contributor-minutes.zh-cn.md)：开源之夏进度同步、bash-config PATH/MANPATH 处理，以及其他维护疑难问题讨论

## 红花榜

感谢在过去一个月中参与 AOSC 项目开发和维护工作的各位同事：

- [abc1763613206](https://github.com/abc1763613206)
- [AirFortressIlikara](https://github.com/AirFortressIlikara)
- [arkadijs](https://github.com/arkadijs)
- [BenderBlog](https://github.com/BenderBlog)
- [black-desk](https://github.com/black-desk)
- [CAB233](https://github.com/CAB233)
- [CamberLoid](https://github.com/CamberLoid)
- [chenx97](https://github.com/chenx97)
- [Cherrling](https://github.com/Cherrling)
- [chitang233](https://github.com/chitang233)
- [chiyuki0325](https://github.com/chiyuki0325)
- [ComixHe](https://github.com/ComixHe)
- [Cyanoxygen](https://github.com/Cyanoxygen)
- [dabao1955](https://github.com/dabao1955)
- [darkyzhou](https://github.com/darkyzhou)
- [Dustymind](https://github.com/Dustymind)
- [eatradish](https://github.com/eatradish)
- [Fearyncess](https://github.com/Fearyncess)
- [FurryAcetylCoA](https://github.com/FurryAcetylCoA)
- [grayawa](https://github.com/grayawa)
- [handsomexdd1024](https://github.com/handsomexdd1024)
- [HmnSn](https://github.com/HmnSn)
- [Icenowy](https://github.com/Icenowy)
- [jiegec](https://github.com/jiegec)
- [KexyBiscuit](https://github.com/KexyBiscuit)
- [liushuyu](https://github.com/liushuyu)
- [LuolikongQwQ](https://github.com/LuolikongQwQ)
- [Mcxiaowei](https://github.com/Mcxiaowei)
- [Mikura-Kyouka](https://github.com/Mikura-Kyouka)
- [MingcongBai](https://github.com/MingcongBai)
- [misaka4e21](https://github.com/misaka4e21)
- [miwu04](https://github.com/miwu04)
- [nihui](https://github.com/nihui)
- [OriginCode](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [ouni666](https://github.com/ouni666)
- [outloudvi](https://github.com/outloudvi)
- [pch666777](https://github.com/pch666777)
- [prcups](https://github.com/prcups)
- [pugaizai](https://github.com/pugaizai)
- [purofle](https://github.com/purofle)
- [RawDiamondMC](https://github.com/RawDiamondMC)
- [RedL0tus](https://github.com/RedL0tus)
- [ruaharico](https://github.com/ruaharico)
- [RyogiMutsuki](https://github.com/RyogiMutsuki)
- [ShellWen](https://github.com/ShellWen)
- [SherkeyXD](https://github.com/SherkeyXD)
- [SkyBird233](https://github.com/SkyBird233)
- [sparrowhe](https://github.com/sparrowhe)
- [stdmnpkg](https://github.com/stdmnpkg)
- [stydxm](https://github.com/stydxm)
- [TechCiel](https://github.com/TechCiel)
- [wxiwnd](https://github.com/wxiwnd)
- [xflcx1991](https://github.com/xflcx1991)
- [Xinmudotmoe](https://github.com/Xinmudotmoe)
- [xry111](https://github.com/xry111)
- [xtexx](https://github.com/xtexx)
- [yangzongkainj](https://github.com/yangzongkainj)
- [ZeroAurora](https://github.com/ZeroAurora)

## 一起吹水

我社成员遍布世界各地，正因这一特质，我们的日常工作和交流基本都通过互联网进行。每天，社区好友们在我们的众多聊天群组中工作、交流和娱乐。若您对我们的工作感兴趣，欢迎来一起聊天吹水！

我社的各个即时聊天群组的加入方式可在[门户网站](https://aosc.io/contact)上找到。

## 栏目介绍

《安记冰室》是我社用于工作展示的月刊，于北京时间 (UTC+8) 每月第三个周日发布，发布平台包括：

- 社区门户
- 微信公众号“安同开源”
- Bilibili 帐号“安同开源社区”
- Twitter/X @aosc_dev_cn 及 @aosc_dev（英文）

此外，我们正寻求国内开源及 Linux 相关媒体的朋友合作，一起将我社的工作和文化广而告之。
