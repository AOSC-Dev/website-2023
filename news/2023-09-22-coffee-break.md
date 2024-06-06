---
categories:
  - book
title: "Coffee Break: September Issue 2/2"
date: 2023-09-22T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS Updates
---------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### Road to LoongArch Port

With the number of LoongArch users among our contributors growing in the past few months. In the past few weeks, we worked hard to enhance the usability and quality of our LoongArch port. In the mean time, we have also initiated effort to merge the port from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

![Community contributor Wang Jiangjin backporting LSX/LASX support from GCC's master branch](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/gcc-backporting.jpg)

In the past two weeks, we introduced and fixed many packages and backported enhancements for our basic development toolchain and runtime. We would like to thank our contributors, [Jiajie Chen (jiegec)](https://github.com/jiegec), [cth451](https://github.com/cthbleachbit/), [Kaiyang Wu (OriginCode)](https://github.com/OriginCode), [Zixing Liu (liushuyu)](https://github.com/liushuyu), and [Jiangjin Wang](https://github.com/RedL0tus), etc., as well as help and support from our colleagues and friends from Loongson and the LoongArch community. Here below are what we have accomplished.

System components and applications:

- Fixed LiveKit bootloader and introduced installation support.
- Updated Linux Kernel to 6.5.4, updating the LoongArch support patchset, and introduced another patchset for KVM (Kernel Virtual Machine) support.
- Updated Firefox to 117.0.1, updating architecture support patch.
- Introduced Telegram Desktop, Fish, etc.
- Completed base tools and utilities collection (especially those written in Rust, such as fd and ripgrep).- Updated GRUB to 2.12rc1, cleaning up the patchset.

Toolchain and core runtime:

- Updated AOSC OS Core to 11.0.1, introducing mainline updates, such as GCC 13.2.0.
- Updated Binutils to 2.41, introducing support for LSX and LASX instructions.
- Backported LSX/LASX instruction support from GCC's `master` branch to 13.2.0.
- Backported LSX/LASX instruction support from Glibc's `master` branch to 2.37.
- Backported LLVM's lld linker support, enabling LTO for Rust applications.
- Implemented D language support for GCC, as well as LoongArch support for LDC.

We plan to work on the following in the near future:

- Adapting the x86 LAX binary translator, testing x86 application runtime support on LoongArch.
- Enable LSX instruction set optimisation in GCC and other toolchains, rebuilding the system distribution.
- ...

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### Core 11.0.1

![Core 11 Nya~](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/core-11-banner.png)

This week, [Zixing Liu (liushuyu)](https://github.com/liushuyu) released Core 11.0.1 with enhanced D language support for MIPS and POWER ports, as well as GNU Modula-2 support in GCC.

### Software Suite Updates Available

Recently, we introduced a large set of updates for different types of applications and runtime components in our update surveys:

- **Browser Updates:** Including Mozilla Firefox 117.0.1, Thunderbird 115.2.2, Google Chrome/Chromium 116.0.5845.179, and other browsers.
- **Virtualization Components Update:** Including libvirt 9.6.0, virt-manager 4.1.0, open-vm-tools 12.3.0, as well as updates to other applications and runtime components.

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- Firefox (`firefox`) was updated to 117.0.1, with fixes for several security vulnerabilities.
- Thunderbird (`thunderbird`) was updated to 115.2.2, with the brand-new [Supernova UI](https://blog.thunderbird.net/2023/07/our-fastest-most-beautiful-release-ever-thunderbird-115-supernova-is-here/)
- Chromium (`chromium`) and Google Chrome (`google-chrome`) was updated to 116.0.5845.179, with fixes for several security vulnerabilities.
- Bash basic configuration ([bash-config](https://github.com/AOSC-Dev/bash-config)) was updated to 0.5.1, improving performance for the SSH prompt, introducing a Git prompt component implemented in Rust ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status)), and fixing an issue where the `gdc` command with one of the Git aliases.
- GCC (`gcc`) was updated to fix up D language support for MIPS and POWER ports, as well as added GNU Modula-2 language support.
- Discord was updated to 0.0.30.
- Fcitx's Moegirl Wiki dictionary ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) was updated to 20230914 with many new phrases added.
- Fend command-line calculator and unit converter (`fend`) was updated to 1.2.2.
- The Fish shell (`fish`) was updated to 3.6.1.
- libvirt (`libvirt`) was updated to 9.6.0 with many new features and fixes.
- Node.js (`nodejs`) was updated to 18.17.1 with LoongArch support as well as improved compatibility with newer projects.
- Operating System Information Database (`osinfo-db`) was updated to 20230719 with configuration and deployment information for newer operating systems.
- Introduced WebUI support to qBittorrent BitTorrent download manager (`qbittorrent`).
- `cargo-audit` was updated to 0.18.1, enhancing performance.
- Starship universal shell prompt customiser (`starship`) was updated to 1.16.0, introducing support for Gitoxide and other prompt integration.
- Fixed an issue where Tilix (`tilix`) failed to launch after an update to the LDC runtime (`liblphobos`)
- ZFS Kernel module and adminstrative tools was updated to 2.1.12, fixing support for AArch64.
- AOSC OS topic manager ([atm](https://github.com/AOSC-Dev/atm)) was updated to 0.6.2, adding LoongArch support.
- The system installer ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) was updated to 0.9.8, adding LoongArch GRUB installation support, changing the default behaviour to install GRUB as removable images on RISC-V devices.

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- bash-git-status ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status)), a Git status prompt for Bash implemented in Rust.
- Maliit on-screen keyboard suite (`maliit-framework`, `maliit-keyboard`) for Plasma Mobile devices.
- SANLock (`sanlock`), a shared storage lock manager.
- OCaml-Augeas (`ocaml-augeas`), OCaml bindings for the Augeas configuration API.
- undeaD (`undead`), a collection of obsolete D langauge (Phobos) modules.

#### Peripheral Projects

- The [aosc-mklive](https://github.com/AOSC-Dev/aosc-mklive/) live media toolkit was updated to fix an issue where the graphical interface fails to start on LoongArch-based motherboards with BMC modules; it also introduced two new variables for specifying distribution branches and revision numbers; the update also disables the media checksum verification by default, which was known to take a long time and was unreliable.
- [aoscify-starship-theme](https://github.com/AOSC-Dev/aoscify-starship-theme), a re-implementation of AOSC OS's default Bash prompt appearance, saw preliminary implementation.

#### Development Tools

- The [Autobuild3](https://github.com/AOSC-Dev/autobuild3) packaging toolkit updated to 1.6.104，which fixed installation routines for Rust applications with shared libraries; added the `ABBUILDDEPONLY=` switch to only install build-time dependencies for meta-packages with no specific version requirements, speeding up pacakging; registered default Rust compiler flags (`RUSTFLAGS`) for all ports; lowered the baseline requirement for the PowerPC port to 603, allowing Afterglow to run on (even) older Macintosh computers; enabled the `-gc-section` flag for all Afterglow ports, minimising binary sizes; registered default build flags for SPARC64 (SPARC V9), preparing for a new port.
- Our containerised pacakging environment manager, [Ciel](https://github.com/AOSC-Dev/ciel-rs) was updated to 3.2.0, adding support for specifying target architectures during the "new workspace wizard" (non-native architectures runs under QEMU user emulation); the update also switched the default distribution format for BuildKit to SquashFS, significantly speeding up workspace deployment.

### In the Oven

To help testing our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Go 1.21 and Application Updates Survey:** Introducing the Go 1.21 toolchain and updating Go applications and runtime components.
- **OpenSSL 3.1.1 (`openssl-3.1.1`):** Introducing OpenSSL 3.1.1 to replaced the ageing OpenSSL 1.1 runtime
- **LibTIFF Security Update Survey (`security-survey-2023h1-libtiff`)：** Updating libtiff to 4.5.1, rebuilding and updating affected packages

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### Coming Soon: *SIGILL's* Inaugural Issue

In the past few months, a few of our community contributors purchased various Loongson 3A5000/6000-based systems, with different use cases in mind.

So, how did they fair? Find out in *SIGILL's* inaugural issue!

![A Loongson 3A5000-based desktop computer at the AOSCC 2023 venue](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/3a5000.jpg)

Now "Hiring"
------------

AOSC is a community driven by volunteers, with many ideas but little manpower. The following are projects we plan to tackle in the near future. If you are interested in lending a hand, please join us via the QR codes listed below to get in touch.

### Community Forum

Though "old-fashioned," a forum can be a valuable platform for more serious discussions. Please get in touch with us if you are interested in moderating our forum.

Come Chat!
----------

Most of our work are conducted over the Internet, come chat and work with us! Please note that most members of the following chat groups are Chinese speakers, but please feel free to ask for assistance and translation.

### WeChat

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/wechat.jpg)

### Tencent QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/qq.jpg)

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230922/imgs/discord.png)

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