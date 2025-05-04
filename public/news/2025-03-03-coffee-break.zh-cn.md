
---
categories:
  - journals
title: "安记冰室・二月号"
date: 2025-03-03T22:00:00+08:00
important: false
home: false
---


<!-- 端着牛肉蛋肠的 -->

> 蛋肠唔准唔加豉油！

欢迎阅读安同开源社区 (AOSC) 期刊《安记冰室》！本栏目旨在以轻松可及的方式，以图文形式介绍近期开发进展、社区事务与近期社区内外活动资讯。此外，本栏目还用于发布与社团及行业人士及代表的访谈录，以特辑形式发布。本栏目不发表评论性内容。

公告速览
---

### 安全漏洞

过去一个月，我们推送了包含高危漏洞修复的 PostgreSQL 13.19、OpenH264 2.6.0，以及包含一般危急度安全漏洞修复的 X.Org Server 21.1.16 及 XWayland 24.1.6。

**请尽快更新您的安同 OS！**

### 问题更新

早前，我们推送的 NetworkManager 1.50.0 可能无法通过 DHCP 获取 IPv4 地址。该问题现已推送修复，如遇到问题请确保组件版本为 1.50.2 或以上。

### 镜像访问优化

为改善先前用户频繁报告的软件源访问困难的问题，我们搭建了[自动镜像跳转服务](redir.aosc.io)并开放测试。通过 `oma mirror` 命令选中如下镜像方可测试：

```
AOSC Automatic Redirect Mirror [TESTING] (Global) (redir)
```

该镜像源可以提高国内绝大多数地区的软件安装和更新体验。

社区脉动
---

### 三月见：《安同校园行》即将重启

经过两个月的休整，《安同校园行》将在三月正式重启！3 月 15 日，我们将前往河海大学，与河海大学计算机协会的同学们一起举办 2025 年的第一场校园行活动。活动日程等信息将在活动举办前一周陆续公布，敬请期待！

安同从校园诞生，助力校园及草根开源社区和组织的发展也是社区建立时的初心之一。如今，校园社团亦是我们关注和扶持的对象。自 2024 年起，我们与众多高校社团协作，组织《安同校园行》活动，邀请社区贡献者、行业代表等走进校园，分享社区和专业工作经验，让更多学生接触、了解和融入开源社区乃至行业前沿。 

如果您是学校相关社团负责人、对在您的学校承办《安同校园行》感兴趣，抑或希望推荐在某所学校举办相关活动，请通过下方“一起吹水”栏目中列出的联系方式与我们联系！

### 上点档次：新“下载中心”页面上线

![全新“下载中心”页面现已上线](/assets/news/coffee-break/20250301/imgs/new-download-page.png)
> 全新“下载中心”页面现已上线

去年九月社区新门户页面上线已来，“下载中心”信息稀少、指引不清和界面美工粗糙等问题长期受到用户和贡献者的诟病。可惜的是，长期以来因为人力和点子的缺失，这一页面的修缮一直没有得到太多关注。

二月，[skybird](https://github.com/skybird233) 带头重新设计实现了“下载中心”页面，经过多次设计论证和征求意见，我们终于在月底上线了全新的“下载中心”页面。全新设计中板块更为紧凑，并补上了先前缺席的 Apple silicon 版系统下载信息；更重要地是，改版后的页面引入了下载详情页，对各系统版本的下载来源、校验和及写入方法等都添加了详尽指引：

![下载详情页](/assets/news/coffee-break/20250301/imgs/new-download-details.png)
> 下载详情页提供各种系统版本的下载来源、校验和及写入方法等信息

希望新的“下载中心”页面可以给各位带来更清晰高效的下载体验，也能让更多初识安同 OS 的朋友们找到最适合自己的系统版本。

如果您在浏览社区门户页面时遇到困难、发现问题或有改进建议，请通过下方“一起吹水”栏目中列出的联系方式与我们联系。

### 网络提升：社区新增一批准实时镜像源

针对用户朋友们之前反映的有关安同 OS 软件源访问不稳定、下载速度慢等问题，我们协同数个国内高校镜像源建立了一套准实时镜像同步和重定向系统，根据用户所在地理位置及网络服务配置自动跳转请求至性能最好的镜像源，以期改善各位用户的使用体验。

目前，有如下学校接入了准实时镜像同步（镜像源内容与社区软件源几乎同时同步），分别服务如下省、市、地区的用户朋友：

- 华东：[南京大学开源镜像站](https://mirrors.nju.edu.cn/)
- 华南：[南京大学开源镜像站](https://mirrors.nju.edu.cn/)
- 西北：[兰州大学开源社区镜像站](https://mirror.lzu.edu.cn/)
- 华北：[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)
- 华中：[南阳理工学院开源镜像站](https://mirror.nyist.edu.cn/)
- 东北：[吉林大学开源镜像站](http://mirrors.jlu.edu.cn/)

目前该系统已初步于 [redir.aosc.io](https://redir.aosc.io/) 上线（后续将替代原 [repo.aosc.io](https://repo.aosc.io/) 的部分请求响应），感谢上述各位高校镜像源管理方的大力支持！

### 迈向新年：《乙巳烙饼会》回顾

![“乙巳烙饼会”已于 2025 年 2 月 1 日（正月初四）成功举办。](/assets/news/coffee-break/20250301/imgs/springcon-2025-cover.png)
> “乙巳烙饼会”已于 2025 年 2 月 1 日（正月初四）成功举办。

“烙饼会”是我们自 2024 年起在春节假期期间举办的线上社区活动。期间，社区贡献者介绍自去年 AOSCC 以来的工作进展，并对未来的工作计划和存在的挑战进行简要介绍，期间还会现场回答社区好友们的提问。

在此次“乙巳烙饼会”中，社区的以下贡献者就以下主题进行了报告与交流：

- 白铭骢：失信贡献者来拜年：半年度工作报告与工作进展说明
- Kexy Biscuit（百合ヶ咲るる）：补丁星期二：安同 OS 组件的安全与功能更新
- Henry Chen：打赢复活赛：龙芯三号 (MIPS) 救援过程简介
- 傅孝元（宇宙眼镜人）：小熊猫包管理半年记：成果、心得与未来挑战
- 闇月（OriginCode）：包工的自我修养：软件包维护流程分享（自用维护小工具和“玩具”介绍）

我社在 [Bilibili](https://www.bilibili.com/video/BV1CNcFeYEBQ) 发布了此次“烙饼会”的直播回放，欢迎观看。

### 社区贴纸包开放订购

![本次新发行的安同 OS 系统贴纸包（2025 版）](/assets/news/coffee-break/20250301/imgs/aosc-os-ports-stickers.jpg)
> 本次新发行的安同 OS 系统贴纸包（2025 版）

应社区好友要求，我们决定开放一批共 200 套社区贴纸包供各位订购；欢迎[点此填写订购意向表](https://f.wps.cn/g/eVWc4lGC/)或使用下方二维码进入填写表单：

![AOSC 贴纸包订购意向表（2025 年 2 月）](/assets/news/coffee-break/20250301/imgs/qrcode-sticker-pack.png)

**发行信息**

本次发行的贴纸包包含两款贴纸，感兴趣的朋友可根据喜好和需要分开订购：

- AOSCC 2024 贴纸包
- 安同 OS 系统贴纸包（2025 版）

其中，《AOSCC 2024 贴纸包》是我们去年在吉林大学举办线下聚会期间发行的，其主要内容包括社区徽标、吉祥物和梗等；这一贴纸包是我社自 2016 年开始发行的，一直以来广受社区好友喜爱。

《安同 OS 系统贴纸包（2025 版）》是今年 2 月新推出的安同 OS 系统贴纸设计，采用全新的景深设计，更有基于各处理器厂商主流配色制作的亮色版本，相信能给各位的安同 OS 设备新一抹色彩。

**工艺与规格**

本次发行的贴纸采用与过去两批 AOSCC 贴纸一样的“PVC 不干胶过哑膜”工艺，经用户测试耐久度优秀且不易掉色。

本次两套贴纸每份的大小规格如下：

- 《AOSCC 2024 贴纸包》：A4 (210 x 290mm)，共两张
- 《安同 OS 系统贴纸包（2025 版）》：120 x 160mm，共一张

**定价信息**

![印刷厂收据](/assets/news/coffee-break/20250301/imgs/receipt.jpg)
> 印刷厂收据

我社周边贩卖一向遵从成本价出售、邮费自理的原则。根据厂商折合每张贴纸 5.3 元的总包报价（见附图），本次贴纸定价如下：

- 《AOSCC 2024 贴纸包》：10.6 元
- 《安同 OS 系统贴纸包（2025 版）》：5.3 元

为降低沟通与组织成本，本次贴纸包的邮费以顺丰到付的方式结算，从武汉发出（如有特殊需要请在表中备注）。

**付款方式**

请扫表中二维码付款，并主动通过如下方式联系白铭骢确定数量、付款及发货安排等信息：

- Telegram: @JeffBai
- 微信：MingcongBai
- QQ: 2879378668

**贴纸质量问题反馈**

已经收到贴纸的各位朋友，如果你们发现贴纸有裁切、覆膜、颜色等方面的质量问题，请私信联系白铭骢并附上存在质量问题的贴纸的照片，我们将尽快安排重发，邮费将由白铭骢承担。

### 《流浪相机 2025》启动筹备中

![《流浪相机 2025》，再到远方去！](/assets/news/coffee-break/20250301/imgs/roaming-camera-2025.png)
> 《流浪相机 2025》，再到远方去！

继 2024 年《流浪相机》活动圆满落幕，我们计划在今年三月内完成 2025 年活动的筹备工作。如果您对旅游、摄影感兴趣，亦希望通过这一活动为安同 OS 与星霞 OS 贡献壁纸，敬请留意社区公众平台的后续信息！

系统快讯
---

### 安同 OS 一月发行更新修订版发布

![安同 OS 一月发行更新修复了数个平台支持问题](/assets/news/coffee-break/20250301/imgs/aosc-os-2025-01-fix1-relnote.png)
> 安同 OS 一月发行更新修复了数个平台支持问题

本次发行修订包含自 2025 年 1 月发行更新发布以来用户反馈的数个问题修复。

**平台支持修复**

- 修复兆芯开先 KX-7000 系列平台无法启动系统的问题
- 修复联想小新 Pro 13（2019，锐龙版）在睡眠唤醒时短暂花屏的问题

**安装体验修复**

- 修复龙芯三号 (MIPS) 平台无法使用安装程序“自动分区”功能的问题
- 修复龙架构及龙芯三号 (MIPS) 平台安装程序错误将安装盘列为目标存储设备的问题

如果您使用搭载兆芯开先 KX-7000 系列处理器的设备，请使用本次发布的新安装介质安装系统。我们建议所有安同 OS 用户择机更新系统，以便及时获取系统软件更新与修复。

本次修订的安同 OS 安装盘现可从社区门户[下载中心](https://aosc.io/download)下载。

### 小熊猫包管理 (oma) 1.14 发布

![oma 1.14，始于 1.14.514，诶！](/assets/news/coffee-break/20250301/imgs/oma-banner-1.14.514.png)
> oma 1.14，始于 1.14.514，诶！

在小熊猫包管理 (oma) 1.13 引入大量新特性后，1.14 周期的主要工作转向代码重构和巩固，在增强 oma 可靠性的同时，为下一周期的特性开发打好基础。因此，本次发布的 oma 可见特性较少。

当然，1.14 还是带来了几个不错的特性的：可选（建议）软件包依赖提示、阅读器操作功能增强和测试源 (topics) 配置界面性能优化等。

目前，oma 1.14 已推送给安同 OS 及 Debian、Ubuntu、Linux Mint、deepin 和开放麒麟 2.0 及其衍生版，各位用户朋友可以通过系统更新获取。

**新用户指南**

oma 还支持其他 Debian 系或基于 APT 包管理的发行版，并支持 x86-64 (`amd64`)、AArch64 (`arm64`) 及龙架构 (`loong64`) 三个处理器架构。oma 目前支持的操作系统及版本如下：

- Debian Trixie/Sid、12 及 11
- Ubuntu 24.04 LTS、22.04 LTS 及 20.04 LTS
- Linux Mint 22、21 及 20 系列
- Linux Mint Debian Edition 6 系列
- deepin V23
- 开放麒麟 (openKylin) 2.0
- GXDE OS 15

通过如下命令即可安装 oma：

```bash
curl -sSf https://repo.aosc.io/get-oma.sh | sudo sh
```

### Firefox 启用 HEVC 硬件解码支持

![在安同 OS 使用 Firefox 在 Bilibili 选择 HEVC 编码后收看动画](/assets/news/coffee-break/20250301/imgs/firefox-135-hevc.png)
> 在安同 OS 使用 Firefox 在 Bilibili 选择 HEVC 编码后收看动画

2 月 24 日，[Henry Chen](https://github.com/chenx97) 将 Firefox 计划在 137 版本合入的 Linux 平台 HEVC 硬件解码支持回合至目前的 135 版本，为 Firefox 默认启用了基于 VA-API 驱动程序的 HEVC 硬件解码支持。

大多数较新的 AMD/Intel 显卡均支持 HEVC 格式的视频的硬件解码（NVIDIA 显卡则需要额外配置）。用户更新 Firefox 后，在播放 HEVC 编码的视频流媒体（如 Bilibili 的 HEVC 格式视频）时可获得更好的体验。

### 让历史追赶不及：安同 OS 发布龙芯三号 (MIPS) 移植复活记

![安同 OS 龙芯三号 (MIPS) 版，让历史追赶不及！](/assets/news/coffee-break/20250301/imgs/aosc-os-loongson3.png)
> 安同 OS 龙芯三号 (MIPS) 版，让历史追赶不及！

今年春节，我们发布了安同 OS 龙芯三号 (MIPS) 的新安装盘，首次实现了 3A4000 及 3B4000 平台的完整安装和使用支持。

> *Thanks for making loongson3 better than yesterday.*

如安同 OS 维护者 [Henry Chen](https://github.com/chenx97) 所说，过去半年，经过数名社区贡献者投入数百小时，安同 OS 龙芯三号 (MIPS) 移植成功在一些方面超越了历史最高水平。

那么，我们做了什么呢？在此列出几点供各位参考：

- 将来自 GRUB 2.02 的 `mips64-efi` 平台支持补丁移植至 GRUB 主线，支持最新的文件系统特性和外设，并修复了长期存在的内存分配问题，可支持更大的内核镜像与初始化内存盘
- 完整排查龙梦维护的 Linux 5.4 内核补丁，补充提交及历史记录，并将其移植到最新的稳定和长期支持 (longterm) 内核，让各位龙芯三号 (MIPS) 用户用上最新的内核的同时也能用上温控、风扇调速等平台功能，使用 Wi-Fi 6/7 网络和各种最新外设不是梦
- 修缮 Firefox JIT 引擎代码，Firefox 134 及以上版本功能完备可靠，甚至可以支持视频硬解，高清 B 站视频随便看
- 针对性优化 dracut 初始化内存盘生成工具逻辑，提高与部分早期 PMON/LEFI 固件的兼容性（此类固件在引导阶段时可用内存容量有限）
- 积极参与 LLVM 与 Rust 的上游维护工作，让龙芯三号 (MIPS) 平台用上最新的 LLVM 与 Rust 工具链

是不是特别城市化？快下载安同 OS 龙芯三号 (MIPS) 版试试看吧～

开发者角
---

### 自动化检查工具：PackFixerUpper 项目邀您测试

![PackFixerUpper 中附带的 `pakfixer` 工具可自动化报告和修正软件包构建配置中存在的问题](/assets/news/coffee-break/20250301/imgs/pakfixer.png)
> PackFixerUpper 中附带的 `pakfixer` 工具可自动化报告和修正软件包构建配置中存在的问题

安同 OS 软件包维护与贡献过程中难度最大、流程最繁琐的可能就是将软件包构建配置修缮至符合[《AOSC OS 软件包样式指南》](https://wiki.aosc.io/zh/developer/packaging/package-styling-manual/)的水准了，由于要求严格和条例众多，许多多年参与维护工作的“老登”们也总是在提交 Pull Request 的时候被同事以一大堆修改请求驳回。

日前，打包界“小登”[张丙戊](https://github.com/xtexx)发布了 [PackFixerUpper](https://github.com/AOSC-Dev/pfu) 项目，其中包含自动化检测打包问题的工具集与程序库，可用于 GitHub CI 检查和生成本地检查报告等场景。其中，该项目还包含一个名为 `pakfixer` 的工具，可自动化报告并修正软件包构建配置中存在的问题。

听起来不错？快来试试看吧～

### Autobuild 4.7.10 发布：适配 Core 12.1、加固 ELF 及构建系统分析功能

作为安同 OS 软件包维护的核心工具链组件，Autobuild 的特性开发和功能修缮一直相当活跃。

在过去两期《安记冰室》间，Autobuild 发布了带有增强 ELF 分析功能和 32 位子系统 (optenv32) 的 4.7 版，并在[刘子兴](http://github.com/liushuyu)、[Student Main](https://github.com/stdmnpkg) 和[白铭骢](https://github.com/MingcongBai)等人的参与下发布了 10 版修正更新，其中较为关键的有对 Core 12.1 中龙芯三号 (MIPS) 平台 ll/sc 规避移动到 Binutils 的适配（删除了 `-mfix-loongson3-llsc` 编译器参数，并依靠 Binutils 内建机制进行规避）、对 Spiral 中包含多个软件包名匹配的情况时可能的崩溃问题修复和对 ELF 和构建系统分析功能的进一步加固。

### 红花榜

感谢在过去一期中参与 AOSC 项目开发和维护工作的各位同事：

- [Arkadi Shishlov](https://github.com/arkadijs)
- [salieri](https://github.com/BC204)
- [CAB233](https://github.com/CAB233)
- [Calcite](https://github.com/CalciteW)
- [Henry Chen](https://github.com/chenx97)
- [斬風千雪](https://github.com/chiyuki0325)
- [杨欣辉](https://github.com/Cyanoxygen)
- [darkyzhou](https://github.com/darkyzhou)
- [multimode_Liu](https://github.com/Dustymind)
- [傅孝元](https://github.com/eatradish)
- [Zixuan "Lain" Yang](https://github.com/Fearyncess)
- [Felix Yan](https://github.com/felixonmars)
- [Harry Chen](https://github.com/Harry-Chen)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [陈嘉杰 (jiegec)](https://github.com/jiegec)
- [王翔](https://github.com/KatyushaScarlet)
- [Kexy Biscuit a.k.a. るる](https://github.com/KexyBiscuit)
- [leavelet](https://github.com/leavelet)
- [刘子兴](https://github.com/liushuyu)
- [lwzheng](https://github.com/lwzhenglittle)
- [白铭骢](https://github.com/MingcongBai)
- [Alan Lin](https://github.com/miwu04)
- [mouyase](https://github.com/mouyase)
- [Neko205](https://github.com/neko205-mx)
- [闇月 (OriginCode)](https://github.com/OriginCode)
- [ouankou](https://github.com/ouankou)
- [Outvi V](https://github.com/outloudvi)
- [SignKirigami](https://github.com/prcups)
- [王江津](https://github.com/RedL0tus)
- [Shyliuli](https://github.com/Shyliuli)
- [skybird](https://github.com/SkyBird233)
- [Student Main](https://github.com/stdmnpkg)
- [StephDC](https://github.com/StephDC)
- [wxiwnd](https://github.com/wxiwnd)
- [张丙戊](https://github.com/xtexx)
- [温柔](https://github.com/xunpod)
- [梓瑶](https://github.com/ziyao233)

此外，欢迎新加入我社贡献者行列的新人，愿合作愉快，共同进步：

- [BenderBlog](https://github.com/BenderBlog)
- [clover-yan](https://github.com/clover-yan)
- [dabao1955](https://github.com/dabao1955)
- [kf](https://github.com/HmnSn)
- [model-err](https://github.com/model-err)
- [Harico Twilight](https://github.com/ruaharico)
- [Xeonacid](https://github.com/Xeonacid)
- [xry111](https://github.com/xry111)
- [yangzongkainj](https://github.com/yangzongkainj)
- [ZeroAurora](https://github.com/ZeroAurora)
- [zhuanghai1](https://github.com/zhuanghai1)



栏目介绍
--------

考虑到社区项目和文化等日趋成熟，我们决定重启外联和宣传工作，在更广阔的天地寻找志同道合的朋友。

您阅读的本期期刊即是我们外宣工作的一部分，我们的文字宣传栏目如下：

- 安记冰室：社区月报及访谈栏目
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
