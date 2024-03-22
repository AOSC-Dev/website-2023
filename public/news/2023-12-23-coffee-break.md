---
categories:
  - news
title: "Coffee Break: December Issue 2/2"
date: 2023-12-23T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

Special: Happy New Year!
--------------

Dear Readers,

This will be the last *Coffee Break* issue of 2023. I'm happy to say that, since the inaugural issue in August, *Coffee Break* has successfully marked the return of our outreaching effort. Moreover, it demonstrated well the hard work our contributors put in to push our community projects forward.

As you will see, the second December issue is packed to the brim with news on important breakthroughs and new projects - the deployment of our first maintenance automation framework, improved support for non-standard devices, and the beginning of our new packaging toolkit - these new progress marked the end to a successful 2023 here at AOSC. In 2024, with our passion, professionalism, and diligence, AOSC will be sure to see great strides in realising our goals - whether technical or cultural. With new ideas, new methods, and new achievements, we will continue to - with full dedication - serve users, friends, and colleagues in and around our community.

On behalf of AOSC, I would like to extend my gratitude for the hardwork our contributors have put into development and operational tasks. I also wish our colleagues and readers a happy new year and great success and health in 2024.

— Mingcong Bai

AOSC OS: Featured Items
-----------------------

In the past two weeks, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### Revolutionising Productivity: AOSC OS Maintenance Automation is Now Live!

In the past two weeks, community developers [Jiajie Chen (jiegec)](https://github.com/jiegec) launched the [BuildIt!](https://github.com/AOSC-Dev/buildit) project - our maintenance automation framework. Working with [Xiaoyuan Fu](https://github.com/eatradish), this minimalistic implementation has been completed, published, and deployed to automate AOSC OS maintenance, **marking the end of more than a decade of manual maintenance.**

Essentially, BuildIt! is a build job distribution manager with the following key functionalities:

- A bot interface for maintainers to build jobs and send other commands via Telegram.
- Distributing maintainer-submitted build jobs to various community build servers.
- Launching Ciel to build packages according to standardised routines.
- Uploading built packages to their respective repositories.
- Collecting and uploading logs and status to report to maintainers via the bot interface.
- Submitting pull requests to the [ABBS tree](https://github.com/AOSC-Dev/aosc-os-abbs), automatically generating overviews and labels.
- Updating pull requests based on build status.

As a distribution with thousands of available components (packages) and support for multiple architectures and devices - not to mention one that's maintained by volunteers - the implementation of an automation framework revolutionises our productivity. Maintainers will no longer need to log onto individuals build servers, launching build jobs and uploading packages manually, and waiting for build jobs to complete in front of their computers. In terms of chores, after committing changes and testing updates, maintainers will no longer have to fill out the frankly quite verbose pull request templates or, worse yet, ticking test build checklists manually. Since the deployment of BuildIt! This past Wednesday, we have seen a noticeable uplift in maintainer participation. The elimination of mundane busywork will be sure to leave more room for other important tasks, such as experience optimisation, standardisation, and quality assurance.

This is only the beginning. AOSC OS's long-term maintenance will enter a new phase marked by higher efficiency and better quality, promising better developer and user experience. BuildIt!'s deployment is undoubtedly one of the most exciting historical milestones as we enter 2024.

### Devena: AOSC OS's Non-Standard Device Support Project

AOSC OS cares about your development board and non-standard devices!

Devena (Device Enablement) was initially named by [Icenowy Zheng](https://github.com/Icenowy) as an effort to provide out-of-the-box support for ARM devices. By implementing device-specific components, this project aims to simplify AOSC OS installation routines and improve user experience on devices like the Raspberry Pi, Apple Silicon devices, and Surface tablets.

![Devena's first-boot wizard.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/devena-init.png)

[devena-lib](https://github.com/AOSC-Dev/devena-lib) is a core project of the Devena project, currently headed by [Xinhui Yang](https://github.com/Cyanoxygen). This project aims to define reusable routines for different devices, such as a first-boot wizard, kernel and firmware updaters, etc. devena-lib splits the first-boot wizard into several steps and makes use of Dracut's initial RAM disk framework to complete these operations as early as possible. These routines will be needed by most Devena's target devices:

- Re-partitioning (GPT).
- Resizing root partitions and filesystems.
- Randomizing file system and partition UUIDs.
- Generating optimised system configurations for specific devices.

Devena will also introduce a Kconfig-based image generator, making it possible for users to generate images for their own images.

### Autobuild4 Development Commences

As we work towards automated maintenance for AOSC OS, community developer [Zixing Liu](https://github.com/liushuyu) has published early code for [Autobuild4](https://github.com/AOSC-Dev/autobuild4), our next-generation packaging toolkit. Compared to [Autobuild3](https://github.com/AOSC-Dev/autobuild3), which has been in use for close than a decade at this point, Autobuild4 focuses on improving reliability, ease-of-use, and performance optimisation. Autobuild4 will also incorporate [ACBS](https://github.com/AOSC-Dev/acbs)'s functionalities.

Over the longer term, Autobuild4 will also incorporate features such as automatic dependency generation and compatibility for Debian-like dependencies, improving quality of maintenance and application compatibility.

For details on Autobuild4's feature plans, please refer to our [contributor minutes](https://wiki.aosc.io/developer/minutes/20231216/) on December 16th.

### LibLoL: Compatibility Runtime for LoongArch's Old-World ABI

Taking a look at the [*This Week in Loong*](https://areweloongyet.com/newsletter) newsletters from Loongson Community's [*Are We Loong Yet?*](https://areweloongyet.com/), LoongArch's software ecosystem is advancing and expanding at a rapid pace. With the effort of both upstream projects and system integrators such as our community, users of open-source LoongArch system ports are seeing improvements in user experience over time. However, with the split ecosystem between the ["New World" and "Old World"](https://areweloongyet.com/docs/old-and-new-worlds), many proprietary software such as Kingsoft's WPS Office, Tencent's QQ, and Loongson's printer driver engine (LSVP) designed for the old-world ABI are not available to users of open source, upstream-targetting, and standardised new-world software ecosystem.

To be sure, we support the new-world ecosystem both in principle and action, as we like to see a more open and standardised LoongArch ecosystem. However, as system vendor, we should do what we can to help our users out this unfortunate, two-world reality. This week, community developer [Miao Wang](https://github.com/shankerwangmiao) came up with a solution - libLoL (LoongArch on LoongArch). LibLoL is a compatibility runtime for old-world applications with two key components:

- In the kernel - the [la_ow_syscall](https://github.com/shankerwangmiao/la_ow_syscall) kernel module provides support for old-world system calls, making it possible to run old-world applications on new-world kernels.
- In the userspace - leveraging the old-world distribution [Loongnix](https://www.loongson.cn/system/loongnix)'s core runtime libraries to run old-world applications seamlessly on new-world systems.

At present, LibLoL has completed [an initial runtime design](https://github.com/AOSC-Dev/aosc-os-abbs/pull/4949). With the completion of a kernel module wizard, libLoL will be provided as an optional component for AOSC OS users. We also welcome maintainers of other new-world distributions to reference our work and integrate libLoL in their system builds as deemed necessary.

Once again, the goal of developing libLoL is to improve application compatibility and to make our users' lives easier. **We resolutely oppose the old-world software ecosystem for its closeness and lack of sustainability. We urge Loongson to uphold its promises from late November and stay true to its upstream-first policy.**

### Coming Up: KDE 6 Testing and Survey

![Arch Linux has rolled out KDE 6 updates in its KDE-Unstable repository.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/arch-linux-kde-unstable.png)

For many years, AOSC OS's desktop experience has been built upon the KDE desktop environment. KDE's sustained development is key to AOSC OS's core user experience as a desktop distribution.

As KDE 6 will be released in spring 2024 and that Arch Linux has rolled out the [KDE-Unstable](https://archlinux.org/packages/?repo=KDE-Unstable) repository for early testing, we plan to hold a meeting on December 24th at 2 P.M., UTC+8 time. At the meeting, we will survey Arch Linux's KDE 6 packaging, configuration, and user experience to help plan out our own KDE 6 updates. The meeting will be held as a video livestream.

Come to our [Discord server](https://discord.gg/VYPHgt9) to participate.

### QVQNetwork Now Mirroring Our Community Repository!

![QVQNetwork Open Source Mirror Now Live!](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/new-mirror-qvqnetwork.png)

[QVQNetwork Open Source Mirror](https://mirrors.qvq.net.cn/), an 1Gbps bandwidth mirror located in Chongqing, China, has recently started to mirror our community repository. This repository will help serve our users located in mainland China.

We would like to extend our utmost gratitude for our friends at QVQNetwork. Thank you!

### Updates from the Frontier: Mainlining LoongArch

Earlier, we have initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- [oma](https://github.com/AOSC-Dev/oma) package management frontend has been updated to to 1.2.4, fixing some runtime errors and improving dpkg status handling logic.
- [AOSC OS system installer](https://github.com/AOSC-Dev/aoscdk-rs) has been updated to to 0.11.
- Mozilla Suite Survey (November 2023) (`mozilla-survey-20231122`): updating Firefox (`firefox`) to 120.0.1, Thunderbird (`thunderbird`) to 115.5.2, enabling hardware video acceleration and OpenH264 codec support for all ports, enabling the use of WebRTC-based audio/video conferencing.
- Visual Studio Code (`vscode`) and VSCodium (`vscodium`) has been updated to to 1.85.0.
- Discord (`discord`) has been updated to to 0.0.39.
- Gitoxide(`gitoxide`), a high-performance Git client, has been updated to 0.32.0.
- OpenVPN (`openvpn`) has been updated to 2.5.3.
- open-rs universal file opener (`open-rs`) has been updated to 5.0.1.
- PipeWire (`pipewire`), an audio/video device and stream manager, has been updated to 1.0.0.
- yt-dlp (`yt-dlp`), a media stream downloader, has been updated to 2023.11.16, fixing support for various video streaming platforms.
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) semi-automated packaging toolkit has been updated to 1.8.3 (see the "Development Tools" section below).
- [ACBS](https://github.com/AOSC-Dev/acbs) package build script, source, and build manager has been updated to 20231217.4 (see the "Development Tools" section below).
- Hardware device information database (`hwdata`) has been updated to 0.377, introducing many new information on hardware components and parameters.
- Fixed an issue where an OpenVDB runtime update rendered applications like Blender unusable.
- Improved Rust application building on the MIPS Loongson port (`loongson3`), fixing many build failures.
- Fixed an issue where Shadowsocks (`shadowsocks-libev`) could not make use of the `IP_TRANSPARENT` feature as normal users.
- Merged LoongArch-specific porting changes, mainlining is now imminent.

**New Packages**

We introduced a few packages into the AOSC OS repository in the past two weeks:

- Command-line image-to-ASCII art converter (`aarty`).
- High-performance memory allocator runtime (`mimalloc`).
- The Mold linker (`mold`).
- Yazi, a command-line file manager (`yazi`).
- Command-line directory switching helper (`zoxide`).

**Contributors**

Thank you to our colleagues who helped maintain AOSC OS (in alphabetical order):

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [Tianhao Chai](https://github.com/cthbleachbit)
- [Xiaoyuan Fu](https://github.com/eatradish)
- [Felix Yan](https://github.com/felixonmars)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [Jiajie Chen (jiegec)](https://github.com/jiegec)
- [Zixing Liu](https://github.com/liushuyu)
- [Mingcong Bai](https://github.com/MingcongBai)
- [canarypwn](https://github.com/Nyovelt)
- [OriginCode](https://github.com/OriginCode)
- [Jiangjin Wang](https://github.com/RedL0tus)
- [Suyun](https://github.com/Suyun114)

#### Development Tools

- [ACBS](https://github.com/AOSC-Dev/acbs) package build script, source, and build manager version 20231217.4 was released. [Zixing Liu](https://github.com/liushuyu) and [Mingcong Bai](https://github.com/MingcongBai) re-designed the build summary interface, making it easier for automation frameworks to recognise and report build status.
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) semi-automated packaging toolkit version 1.8.3 was released. [Zixing Liu](https://github.com/liushuyu) worked around an issue where link-time optimisation (LTO) would fail on LoongArch due to a toolchain bug, as well as introducing a routine to get rid of extraneous spaces in compiler and linker flags; [Mingcong Bai](https://github.com/MingcongBai) improved error output for missing ld.lld in the Rust build template, making it easier to understand by pointing out potential solutions; [OriginCode](https://github.com/OriginCode) fixed a warning about deprecated Meson invocation in the Meson build template.
- [Jiajie Chen (jiegec)](https://github.com/jiegec) and [Xiaoyuan Fu](https://github.com/eatradish) completed basic implementation of the [BuildIt!](https://github.com/AOSC-Dev/buildit) automation framework for AOSC OS maintenance (see the "Revolutionising Productivity: AOSC OS Maintenance Automation is Now Live!" above).
- [Zixing Liu](https://github.com/liushuyu) announced [Autobuild4](https://github.com/AOSC-Dev/autobuild4)'s early implementation (see the "Autobuild4 Development Commences" section above).
- [Xiaoyuan Fu](https://github.com/eatradish) implemented a GitHub authentication infrastructure named [minzhengbu](https://github.com/AOSC-Dev/minzhengbu). Maintainers using Telegram may now use this tool to connect their accounts, making it possible to open pull requests automatically with BuildIt!.

#### Peripheral Projects

- Basic Bash configuration ([bash-config](https://github.com/AOSC-Dev/bash-config)) version 0.6.5 was released. [Mingcong Bai](https://github.com/MingcongBai) fixed an issue where executable search path (`$PATH`) would be replaced erroneously under WSL environments, as well as enabling end-of-line whitespace highlighting in `git diff`.
- [RepoKit](https://github.com/AOSC-Dev/repokit) repository manager suite registers [QVQNetwork open source mirror](https://mirrors.qvq.net.cn/), the system installer and other applications may now make use of this information to download files and information from this mirror.
- [Xinhui Yang](https://github.com/Cyanoxygen) released [devena-lib](https://github.com/AOSC-Dev/devena-libs) (see the "Devena: AOSC OS's Non-Standard Device Support Project" section above).

### In the Oven

To help test our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Shell Survey (December 2023) (`app-shells-survey-20231210`)：** Updates many command-line shells (such as Bash and Fish), introducing many new features.
- **Wine Vulkan Gaming Survey (December 2023) (`wine-vulkan-survey-202312`)：** Updates Wine (Windows applications emulator) and Vulkan graphical stack components, improving Windows gaming experience (especially for 32-bit DirectX titles).
- **WSL (Windows Subsystem for Linux) Survey (December 2023) (`wsl-survey-20231213`)：** Introduces improvements to the out-of-the-box experience for WSL installations, enabling systemd support, and adding tools for managing daemons and memory caching.
- **Linux Kernel 6.6 (`linux-kernel-6.6`)：** Updates Linux Kernel to the 6.6 branch, enabling new hardware support (enabling ACPI support on RISC-V, introducing LoongArch configuration, etc.) and improving performance (disabling scheduler debugging `CONFIG_DEBUG_PREEMPT` on x86_64, which was enabled by mistake, improving application launch times).
- **Fix-ups for MIPS-based Loongson Systems (`loongson3-fixup-2`)：** Introducing the `update-grub` command to GRUB for MIPS-based Loongson systems (`grub-loongson3`), selecting `loongson` as the default Kernel graphical driver, disabling tcmalloc support for LevelDB to fix RIME input method crashes, etc.
- **Cross Toolchain for LoongArch64 (`loongarch64-cross-new`)：** Introducing a LoongArch cross toolchain.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### The Inagural Issue for *SIGILL* to be Published Next Week

Last week, our community submitted a report titled *Community Report: Observations and Suggestions for Improving Community-Loongson Collaboration* to Loongson's leadership. The report, penned by [Mingcong Bai](https://github.com/MingcongBai), contains a review of issues and concerns observed during the past few months, as our community participated in community efforts to improve LoongArch's software ecosystem. With many points of constructive criticism, the report aims to help improve collaboration between Loongson and the hobbyist community. With this, we believe that we have sufficiently proven our good will and it is now appropriate to publish our inaugural *SIGILL* issue on LoongArch devices.

!["Kilobyte Dance": Display corruption caused by incorrect write-combine implementation in the AMDGPU kernel module.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/kilobytedance.jpg)

This inaugural issue was penned by [千须末 (OriginCode)](https://github.com/OriginCode), entitled "Loongson 3A5000 User Experience Report." In this issue, he reviews his many endeavours with a Loongson 3A5000 desktop computer he won in an AOSCC 2023 raffle.

### AOSC OS 2023H2 Default Wallpaper Poll

![16 AOSC OS wallpaper finalists.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/wallpaper-poll.jpg)

After a first-round poll among community contributors, we have selected 16 finalists for AOSC OS's next default wallpaper. Over the next week, the community will select the next default wallpaper and lockscreen background with an open poll, come cast your vote (you may select as many wallpapers as you wish)!

The 16 finalists are as follows:

- Geometric Dusk (author: Ariel AxionL)
- Brisk (author: Mingcong Bai)
- Pathway of Reflections (author: lz233)
- Yulong (author: 新一)
- The Desert (author: 椰椰雪球)
- Skylight (author: 椰椰雪球)
- Mountain Range II (author: Mogician Yang)
- Patches II (author: Mogician Yang)
- Fly Low (author: Mogician Yang)
- Mount Fuji I (author: Yu Changyuan)
- Mount Fuji III (author: Yu Changyuan)
- Pamukkale (author: Yu Changyaun)
- Qilian Mountain (author: Yu Changyuan)
- Rapeseed Field I (author: Yu Changyuan)
- Rapeseed Field III (author: Yu Changyuan)
- Morrow Ray Upon Meili (author: YzyParry)

The poll will close at midnight on December 31, 2023, UTC+8 time.

Link to the poll: https://forms.gle/EAEjwTEEgDDzw4GG6

### The 2024 AOSC "Roaming Camera" Project Wants Your Opinions

In 2024, we plan to emulate Bilibili user [LKs](https://space.bilibili.com/125526/)'s "Drifting Camera" project and launch our own "Roaming Camera" project. In this project, one of the community member will loan out a camera-lens combo for 6 or 12 months. The camera will be shipped from one participant to the next, each selecting and submitting their best work. The resulting collection will become the default wallpapers for 2024H1 or 2024H2. As this first "Roaming Camera" is a trial run, we plan to only allow previous contributors and other trusted individuals (such as those recommended by said contributors) as participants.

To help planning this project, we have opened a survey for your opinions on the duration, geographic range, equipments, and other aspects essential to the project's success. We plan to officialy launch 2024's "Roaming Camera" project by March of 2024.

Link to the survey: https://forms.gle/zA74WjimoXrmJURh7

### Sticker Pack for An-an and Tong-tong

![An-an and Tong-tong, our community mascots.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231223/imgs/mascots.png)

We plan to commission an illustrator to create a sticker pack for our community mascots, An-An and Tong-Tong. The sticker pack will be used as chat stickers, website decorations, as well as components in our outreaching materials. When we talked to a few people who have previously commissioned such projects, a few noted that our current design documentation may not be sufficient for a sticker pack; collecting a list of designs will help the illustrator with creating said sticker pack.

For this purpose, we started a survey to collect themes, composition, contexts, and memes for the stickers. Please describe your ideas in as much details as possible. The survey will close at midnight on December 31, 2023, UTC+8 time.

We will work to implement this project early next year and we expect to launch crowdsource campaigns to reimburse the commission and other expenses.

Link to the survey: https://forms.gle/t4rcLj6omCE4cufy5

Come Chat!
--------

Most of our work are conducted over the Internet, come chat and work with us! Please note that most members of the following chat groups are Chinese speakers, but please feel free to ask for assistance and translation.

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/discord.png)

### WeChat

Please scan this QR code and note that you would like to join our community chat group.

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/wechat.png)

### QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/qq.jpg)

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
