---
categories:
  - book
title: "Coffee Break: October Issue 1/2"
date: 2023-10-14T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS: Featured Items
-----------------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### Road to LoongArch Port: Together We Advance!

We spent much of the past few weeks on improving LoongArch software support and user experience. In this interim, more community contributors have started to daily their LoongArch devices and we have since discovered a series of software bugs and firmware-related issues. Since our last issue, community contributors and engineers from Loongson's various departments collaborated to investigate, test, and resolve a few of these problems, which bugged many LoongArch users from the community:

- By [addressing an inconsistency in LoongArch's kernel workaround for writecombine](https://lore.kernel.org/loongarch/e95d97c98caa525b04cf6383a74db9cadf694afb.camel@icenowy.me/T/#m085bf4e68fd112902e0ae3fddb03d9a8b9eef0fb), AMD graphics cards, when used with with the `amdgpu` kernel module, Firefox's UI and multimedia contents no longer exhibits rendering issues - worry no more about your graphics card being borked!
- Investigated the issue where motherboards with AST2500 BMC modules could not launch X11 graphical environments from discrete graphics cards out of the box. We have since assembled a set of working configuration, so that users of such motherboards can now enjoy using them as a desktop workstation out of the box.
- Obtained Loongson's QVL (Qualified Vendor List) and testing procedures and verfied that the TC512A0's instability under heavy storage I/O was caused by unstable RAM modules. In the future, users will be able to reference our (yet to be announced) community QVL and hardware compatibility database, saving time and money.
- With the help of [xen0n](https://github.com/xen0n/) from the Gentoo community, we have successfully built Thunderbird for our LoongArch port. Future AOSC OS releases will come with a complete browser suite.
- By updating dependencies in Rust application sources and submitting upstream patches, we have successfully introduced many more applications that had previously failed to build. Future AOSC OS releases will come with a more complete set of applications, from system installers to utilities.
- Rebuilt the whole AOSC OS repository using toolchains and the Glibc runtime with the LSX vector SIMD extension. In accordance with [section 7.3](https://github.com/loongson/la-softdev-convention/blob/2975b325e1d31c8b52d75f9948d627343c5a454c/la-softdev-convention.adoc#73-vector-instruction-support) of Loongson's *Software Development and Build Convention for LoongArch&trade; Architectures*, AOSC OS for LoongArch is now built with the LSX optimisations enabled by default.

![Currently, LoongArch devices with AMD Polaris graphics cards suffers from stability issues under heavy graphical load. Pictured is a community member stress testing his device using glmark2, while working with other community contributors and engineeers at Loongson to test changes in the Kernel and other components. We are still investigating the causes and potential solutions to this issue.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/glmark2-benchmark.jpg)

#### Open Source Better Together

In addition to working with other community members and Loongson's engineers, we plan to join the Loongson Open Source Community in its effort to enhance the efficiency and quality of communication and collaboration between the community and vendor. In the coming, our community contributors will participate or lead the following tasks (you may follow the links in each of the items listed below for RFCs and we welcome your suggestions and criticisms):

- Implementing a community-maintained QVL validation system with out-of-the-box testing frameworks, based on prior communications with engineers at Loongson. We will also assemble a ["hardware compatibility database"](https://github.com/loongson-community/areweloongyet/issues/68) for reference by new users, in order to save time and money when finding compatible components and expansions.
- Composing a ["LoongArch User and Contributor's Quick Start Reference"](https://github.com/loongson-community/areweloongyet/issues/71) to help introducing them to the workings of LoongArch hardware and software projects.
- Drafting a formal report and file it to the management at Loongson, providing feedback on our experience during our collaboration with their engineers over the past month or two. With a constructive attitude, we hope that this formal communication will help improving communication and collaboration between community contributors and Loongson's engineers. We would also like to make this an opportunity to strive for more space for open and transparent community collaboration with Loongson.

The products of above tasks will be made available on ["Are We Loong Yet?"](https://areweloongyet.com/), a partnering community, in order to make the fruits of our work available to a wider user base. We will continue to foster collaboration between communities to build an even more healthy, inclusive, and efficient Loongson Open Source Community. Ain't no mountain high enough!

![Homepage of "Are We Loong Yet?"](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/areweloongyet.png)

#### Towards a Stable AOSC OS LoongArch Port

Earlier, we have also initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### OpenSSL 3 Update Now Available 

After almost two months of rebuilding, tweaking, and updating, the OpenSSL 3 runtime update is now available in the stable repository. This update replaces the OpenSSL 1.1 runtime, which had [lost upstream support](https://www.openssl.org/blog/blog/2023/09/11/eol-111/).

Should you run into problems during the update, please [file an issue](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) or get in touch via our [community chat groups](https://aosc.io/contact/). To ensure compatibility with some older software packages, we will continue to ship an OpenSSL 1.1 compatibility runtime package (`openssl-1.1`). However, considering the potential security risks, we recommend that you update such software packages or get in touch with the distributors regarding OpenSSL 3 compatibility.

**Note: This wave of update is fairly large in volume, the system update may take a bit longer than usual. Moreover, considering that OpenSSL is a basic system runtime, should an accident occur during the update, it may render your system unusable. We therefore recommend that you plug in your laptops or other battery-powered devices to an AC power source and ensure steady power supply to avoid accidents.**

### Vim to Become Part of the Base System

For many years, GNU Nano and GNU ed were the only two editors pre-installed with AOSC OS, despite many Vim users amongst our contributors and users. This was due to our assumption that, by preinstalling Vim, it will pull in a large amount of extra dependencies. Last week, [Cinhi Young](https://github.com/Cyanoxygen/) discovered that, by splitting gVim (Vim's GTK-based graphical frontend) out of the current `vim` package, it would not introduce much dependencies into the base system at all.

![Vim 9.0](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/vim-9.0.en.png)

Therefore, we have split our Vim package into two, with `vim` containing the basic text mode editor and runtime, and `gvim` containing the graphical interface. With this change, Vim can be easily incorporated in the base system. The next wave of AOSC OS releases will come with Vim pre-installed and current users will receive Vim automatically in the next editors suite (`editor-base`) update as a recommended dependency. Of course, you still have the choice to remove Vim if it's not your cup of tea:

```
oma purge vim
```

### curl 8.4.0 Update Now Available to Address a Severe Security Vulnerability

Last week, the curl upstream [notified distributions and users](https://github.com/curl/curl/discussions/12026) of what was "probably the worst curl security flaw in a long time." This security vulnerability has been addressed at 6:00, UTC time. AOSC OS has since made the update available in the stable repository, we suggest that users and developers update their systems at their earliest convenience.

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- curl (`curl`) was updated to 8.4.0 to address a high-risk security vulnerability, [CVE-2023-38545](https://curl.se/docs/CVE-2023-38545.html).
- Discord (`discord`) was updated to 0.0.31.
- FreeCAD, the computer-assisted design suite (`freecad`) was updated to 0.21.1.
- Kodi home media center (`kodi`) was updated to 20.2, introducing support for AV1 decoding and NFSv4 remote file system, along with other new features.
- LibreOffice productivity suite (`libreoffice`) was updated to 7.5.4.2, fixing compatibility with OpenSSL 3 and introducing LoongArch support.
- OpenJDK 8 (`openjdk-8`) was updated to 8u382+ga, fixing multiple security vulnerabilities.
- OpenJDK 11 (`openjdk-11`) was updated to 11.0.20.1+ga, fixing multiple security vulnerabilities and introducing JIT support for 64-bit RISC-V, significantly improving runtime performance.
- OpenJDK 17 (`openjdk`) was updated to 17.0.8.1+ga, fixing multiple security vulnerabilities and introducing JIT support for 64-bit RISC-V, significantly improving runtime performance.
- Telegram (`telegram-desktop`) was updated to 4.10.1, adding support for its "Stories" feature.
- Vim (`vim`) was updated to 9.0.2009, splitting out the graphical editor interface to ease user selection.
- Visual Studio Code and VSCodium integrated development environments (`vscode`, `vscodium`) were updated to 1.83.0.
- Downloader for YouTube and other media streaming websites, yt-dlp (`yt-dlp`), was updated to 2023.09.24, adding and fixing analyzer and downloading support for many streaming websites.
- Citra (`citra`), a Nintendo 3DS emulator, was updated to 1958 with many new features and fixes.
- Yuzu (`yuzu`), a Nintendo Switch emulator, was updated to 1560 with many new features and fixes.
- qBittorrent (`qbittorrent`), a Bittorrent client, was updated to 4.5.4, fixing compatibility with OpenSSL 3.
- Apache HTTP server (`httpd`) was updated to 2.4.57, fixing multiple security vulnerabilities since 2.4.55.
- Exim mail transport agent (`exim`) was updated to 4.96, fixing multiple security vulnerabilities.
- PHP (`php`) was updated to 8.2.8 with JIT support for AMD64 and AArch64.
- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) system distribution generator (`aoscbootstrap`) was updated to 0.3.1, adding support for custom distribution branches, improving error outputs for the include feature, as well as introducing support for LoongArch.
- [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) (`aosc-findupdate`) was updated to 0.2.1 with support for LoongArch.
- [Repository mirror data](https://github.com/AOSC-Dev/aosc-os-repository-data) was updated to 20231007 with updated data for newly added mirrors.
- [apt-gen-list-rs](https://github.com/AOSC-Dev/apt-gen-list-rs) repository mirror manager (`apt-gen-list`) was updated to 0.7.0, with Omakase plugin and support for LoongArch.
- [Omakase](https://github.com/AOSC-Dev/oma) package management frontend (`oma`) was updated to 1.0.8 with updated internal dependencies.
- Apache Ant Java project builder (`apache-ant`) was updated to 1.10.4.
- Apache Maven Java project builder (`apache-maven`) was updated to 3.9.4.
- Gradle project builder (`gradle`) was updated to 8.3 with support for Kotlin DSL.
- Racket toolchain and development environment (`racket`) was updated to 8.10.
- Ruby language toolchain (`ruby`) was updated to 3.2.2, fixing compatibility with OpenSSL 3, introducing MJIT, TypeProf, and other new language features and improved execution performance.
- Gperftools CPU profiler (`gperftools`) was updated to 2.13 with 64-bit RISC-V support.
- Qt 6 (`qt-6`) was updated to 6.5.1.

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- Fcitx5's Mozc Japanese input engine (`fcitx5-mozc`).
- Cython 0.29 compatibility toolchain (`cython-0.29`) - the previously introduced Cython 3.0.2 update broke compatibility with some older sources, preventing them from being built; this compatibility toolchain can help workaround these issues.
- Flann (`flann`), a high performance library for the Approximate Nearest Neighbour algorithm.
- OpenSSL 1.1 compatibility runtime (`openssl-1.1`) - useful for applications that are not yet migrated to the OpenSSL 3 runtime; however, as OpenSSL 1.1 is no longer supported by the upstream, we do not recommend using this package unless absolutely necessary.

#### Removed Packages

We removed the following packages from the AOSC OS repository in the past two weeks:

- Dog (`dog`), a command-line DNS querying utility - this package has lost maintenance and is not compatible with OpenSSL 3.
- grpcio's Python module (`grpcio`) - this package has been merged with the gRPC runtime package (`grpc`).
- Mumble voice chat application (`mumble`) - we lack users amongst our contributors and could not test these packages properly, resulting in them becoming orphaned.
- PyPy 2.x toolchain (`pypy`) - we lack users amongst our contributors and could not test these packages properly, resulting in them becoming orphaned.
- Retdec disassembler (`retdec`) - we lack users amongst our contributors and could not test these packages properly, resulting in them becoming orphaned.
- Ruby GNOME2 components (`ruby-atk`, `ruby-gtk2`, etc.) - these packages are not compatible with Ruby 3.0 and higher and there are no longer packages in our repositories that require these packages.
- ScreenRuler on-screen ruler (`screenruler`) - upstream no longer maintains this project, its dependencies no longer builds.
- Swift XMPP chat client (`swift-im`) - we lack users amongst our contributors and could not test these packages properly, resulting in them becoming orphaned.
- Telegram command-line utility (`tg`) - upstream no longer maintains this project and it no longer functions correctly.
- Vaultwarden password manager server (`vaultwarden`) - this package is best distributed in its official containers.
- ydcv-rs (`ydcv-rs`), YouDao Dictionary client - upstream no longer maintains this project and it no longer functions correctly.

#### Peripheral Projects

- [treevsrepo](https://github.com/AOSC-Dev/treevsrepo) (`treevsrepo`), a package version comparison and auditing tool, was updated to 0.3.4 with LoongArch support.
- [p-vector](https://github.com/AOSC-Dev/p-vector-rs) (`p-vector`), an APT/Oma repository manager, was updated to 0.3.6, fixing compatibility with OpenSSL 3 and introducing support LoongArch.
- Community contributor [Jiangjin Wang](https://github.com/RedL0tus) developed a new wallpaper metadata manager and generator, [wpmeta](https://github.com/AOSC-Dev/wpmeta). The new toolkit comes with multilingual support. Future AOSC OS wallpaper packages will come with translations for titles and author names.

#### Development Tools

- The [Autobuild3](https://github.com/AOSC-Dev/autobuild3) packaging toolkit was updated to 1.6.109.
    - Enabling LSX optimisation by default in accordance with the compatibility conventions outlined in [section 7.3](https://github.com/loongson/la-softdev-convention/blob/2975b325e1d31c8b52d75f9948d627343c5a454c/la-softdev-convention.adoc#73-vector-instruction-support) of the *Software Development and Build Convention for LoongArch&trade; Architectures*.
    - Calibrating LoongArch's compatibility baseline to `loongarch64` instead of the `la464` cores found in 3A5000 and other processors of that generation. This change enables AOSC OS to run on LoongArch-based Loongson 2K series processors.
    - Fixing an issue where Rust applications would fail to build on RISC-V (`riscv64`) without Link-Time Optimisation enabled.
    - Disabling MSA optimisation on MIPS64 R6 (`mips64r6el`) for Rust applications to workaround a mis-optimisation which breaks `sha2`-family hash checksum verification.

### In the Oven

To help testing our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Boost 1.83:** Updating Boost runtime libraries to 1.83, updating and rebuilding affected packages, improving compatibility with some newer C++ sources.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### OSPP 2023 Projects: All Green!

With months of effort by mentors of our community and the students, all of our two OSPP 2023 projects have passed mentor review, indicating that the students have successfully completed all assigned tasks. Congratulations to [leedagee](https://github.com/leedagee) and his mentor [Camber Huang](https://github.com/CamberLoid) for the ["Autobuild3 Automated Package Testing Framework"](https://summer-ospp.ac.cn/org/prodetail/23f3e0033?list=org&navpage=org) project; and [Wantao Liu](https://github.com/LWanTao) and his mentor [Mingcong Bai](https://github.com/MingcongBai) for the ["Simplified Chinese Localisation for Free and Open Source Software"](https://summer-ospp.ac.cn/org/prodetail/23f3e0032?list=org&navpage=org) project!

We hope to see continued contribution to community projects and the wider open source ecosystem from our students.

### Two New AArch64 Build Servers Deployed for AOSC OS Maintenance

After [upgrading our AMD64 build server](https://wiki.aosc.io/zh/community/crowdsourcing/epyc-22333-upgrade-2023/) earlier this year, our computational resources for maintaining the AArch64 (`arm64`) port became relatively limited. Added with limited Internet bandwidth and storage I/O performance, the current build server could no longer keep up with the aforementioned build server for AMD64 (`amd64`). This slowed down compilation, packaging, and testing for our Primary (tier 1) archiectures.

In June, a friend from the community donated two high-performance AArch64 servers - one with a 64-core Phytium FT2000/64 processor and the other with a 64-core Kunpeng 920 processor. Shortly after, with support from friends of the community, we [successfully crowdsourced some additional essential parts](https://wiki.aosc.io/zh/community/crowdsourcing/new-aarch64-server-parts/) and got sponsorship for colocation.

![Two new servers deployed for AOSC OS AArch64 maintenance.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/new-aarch64-servers.jpg)

As of today, these servers are now [live and deployed](https://github.com/AOSC-Dev/Buildbots/compare/588d37621c6d0528db82a37306540230445687ad...630b94a078d4803334ed6329ff028ff3ec352ff4), accelerating and easing maintenance for AOSC OS's AArch64 port. Thank you for all your support!

### Coming Soon: *SIGILL's* Inaugural Issue

> From the editor: Well, it's been a bit too long since we announced this project, hasn't it. We would like to offer an explanation for this delay. As we are currently working with engineers at Loongson to debug some of the issues surfaced as we began to use our LoongArch devices, we would like to refrain from commenting on and making fun of these issues before we come up with resolutions or at least arrive at basic understanding of the problems at hand. On the other hand, as we have extensive records on these issues and their potential solutions, we would like to split this inaugural issue into multiple episodes to help making them easier to read. As we finish editing these episodes, we will make sure that all issues referenced will come with guides and references to resolve them or at least our analysis of the casues. We believe that by doing so, readers will get the best out of our journey towards working LoongArch-powered dailies. We thank you for your understanding and patience.

In the past few months, a few of our community contributors purchased various Loongson 3A5000/6000-based systems, with different use cases in mind.

So, how did they fair? Find out in *SIGILL's* inaugural issue!

![A Loongson 3A5000-based desktop computer at the AOSCC 2023 venue](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/3a5000.jpg)

Now "Hiring"
------------

AOSC is a community driven by volunteers, with many ideas but little manpower. The following are projects we plan to tackle in the near future. If you are interested in lending a hand, please join us via the QR codes listed below to get in touch.

### Community Forum

Though "old-fashioned," a forum can be a valuable platform for more serious discussions. Please get in touch with us if you are interested in moderating our forum.

Come Chat!
----------

Most of our work are conducted over the Internet, come chat and work with us! Please note that most members of the following chat groups are Chinese speakers, but please feel free to ask for assistance and translation.

### WeChat

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/wechat.jpg)

### Tencent QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/qq.jpg)

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/discord.png)

Community Outreach
------------------

Ever since we caught ourselves in a conflict at Baidu Tieba's Linux community, we have effectively halted all outreaching and promotional campaigns. Now that our projects and community are both maturing, we have decided to re-double our outreach and promotional efforts to expand our networks for friends and collaborators.

The semimonthly issue you are reading right now is part of the aforementioned effort. So far, we have planned the following columns:

- Coffee Break: Semimonthly Newsletters
- SIGILL: Rare and Unusual Hardware
- Retro: Retro Software and Hardware
- Live: In-Person Events

"Coffee Break" issues are published every second and fourth Fridays at 12 P.M. UTC+8 time. Other columns are published irregularly per content and editing schedules. The English version of the aforementioned materials are published on the following platforms:

- Our community portal
- Twitter/X: @aosc_dev

We are also seeking coverage from Linux-related media to help spread the word.