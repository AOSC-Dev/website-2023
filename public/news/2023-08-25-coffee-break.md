---
categories:
  - news
title: "Coffee Break: August Issue 2/2"
date: 2023-08-25T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS Updates
---------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### AOSC OS/Retro Renamed "Afterglow"

AOSC OS/Retro's naming was originally a play on IBM's OS/2. More recently, the distribution's naming was criticized for its lack of creativity and that it is tongue-twisting. After a few rounds of brainstorming with members of the AOSC Retro group, a new name, Afterglow, was chosen to take AOSC OS/Retro's place. Afterglow, taking its name from the last ray of light before nighttime and flashbacks of good memories, will keep your old favorites going.

![Afterglow running on an IBM ThinkPad X41](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/x41-afterglow.jpg)

### New Visual IDs for System Distributions

This week, with input from the community, we have finalized the designs for our system distributions - AOSC OS and Afterglow.

![New visual IDs for our system distributions](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/new-logos.png)

- For AOSC OS, we have re-introduced the four colours from our community logo. The logo, employing depth illusions, resembles a pavement, stepping up like a stair case. AOSC OS, with its simplicity and reliability, helps users progress in their everyday work and life.
- For Afterglow, the new logo takes the shape of a meteor shower and makes use of an afterglow-inspired color palette. Staying true to its name, Afterglow will continue to provide support for ageing devices, extracting the last bit of life out of the old classics.

You may download the aforementioned logos and visual ID designs from our [GitHub repository, AOSC-Dev/logo](https://github.com/AOSC-Dev/logo).

### Sneak Peek: Omakase 1.1

As [Omakase](https://github.com/AOSC-Dev/oma) 1.0 enters our system distribution, [Xiaoyuan "Mag Mell" Fu](https://github.com/eatradish) was already hard at work developing Omakase 1.1. At the time of publicaiton, Omakase 1.1's development is mostly complete and testing will commence this wekeend.

Omakase 1.1 focuses on bringing improvements on the following fronts:

- **Modularity** - Clean up project code and componentizing them to help other developers make use of Omakase features
- **System integration** - Omakase will now detect power state and control system power/session management, preventing unexpected failures during package management operations
- **UI improvements** - Introducing an easier-to-understand history and undo interface; confirmation interfaces will now be printed on terminal scrollback for easy review
- **Performance optimisation** - Parallelized download and extraction makes for much quicker metadata refresh operations

We will demo and review Omakase 1.1's changes during our contributor meetings on Sunday at 2 P.M., UTC+8 time. Join us at our [Discord server](https://discord.gg/VYPHgt9)!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- [Omakase](https://github.com/AOSC-Dev/oma) was updated to 1.0.7, fixing an issue where `oma` would fail to fetch metadata from flat (simple) repositories and adds LoongArch build support
- Mesa graphical stack was updated to 23.1.4, optimising performance and usability for various mainstream graphics chips (especially for Steam Deck)
- Rust was updated to 1.71.0
- LLVM was updated to 16.0.6 and is again usable on MIPS
- LDC was updated to 1.32.2, adding support for our POWER (`ppc64el`) and MIPS-based Loongson 3 (`loongson3`) ports
- curl was updated to 8.1.1, fixing several security vulnerabilities
- yt-dlp was updated to 2023.07.06, fixing and adding support for various streaming sites
- Fcitx's Moegirl Wiki dictionary ([fcitx-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) was updated to 20230814, introducing new phrases.
- fail2ban was updated to 1.0.2, fixing an issue where the system service would fail to start
- e2fsprogs was update to 1.47.0, fixing a compatibility issue with ext4 filesystems created with newer versions of the tool, where `fsck.ext4` would complain about a missing feature
- FreeRDP was updated to 2.10.0, fixing random crashes
- Remmina was updated to 1.4.31, fixing an issue where copying from Adobe Acrobat and other WPF-based Windows applications would result in a short hang
- [Bash configuration](https://github.com/AOSC-Dev/bash-config)was updated to 0.4.7.7, fixing an issue where the `cd` command completion returns variable names
- Fixed an issue where VirtualBox references non-existing kernel module versions during updates
- [System installer (DeployKit)](https://github.com/AOSC-Dev/aoscdk-rs) was updated to 0.9.5, fixing an issue where AArch64 devices would fail to boot into GRUB after installation, optimising installation performance for Afterglow, adding LoongArch build support

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- Distrobox (`distrobox`) - Quickly deploy Linux distributions in containers
- EDID Decode (`edid-decode`) - EDID data decoder
- gitoxide (`gitoxide`) - A Git implementation in Rust
- HW PROBE (`hw-probe`) - A device listing and testing utility
- JetBrains Mono (`jetbrains-mono`) - A Monospace font for developers from JetBrains, an IDE developer
- lldpd (`lldpd`) - Tools and libraries for the Link Layer Discovery Protocol (LLDP)
- Taskwarrior (`taskwarrior`) - A command-line personal task manager

#### Peripheral Projects

- [aosc-mklive](https://github.com/AOSC-Dev/aosc-mklive) can now generate Afterglow LiveKit images at the size of a single CD (approximately 700 MiB)

#### Development Tools

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) was updated to 1.6.94, adding support for dpkg Pre-Depends and improving the Rust build template

### In the Oven

To help testing our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **AOSC OS Core 11 (`core-k`):** Updating the core system runtime: Glibc 2.37, GCC 13.2.0, Linux API Headers 6.4.7, and Zstandard 1.5.5
- **Bash Profile Clean-up Survey (`etc-profile-cleanup-survey-20230614`)：** Surveying Bash profile scripts in various packages and moving them to more standardised locations; profile scripts should now apply properly on non-login sessions (such as graphical terminal emulators)
- **Linux Kernel Survey for August(`linux-kernel-survey-20230825`)：** Updating the mainline kernel to 6.4.10, Long-Term Support (LTS) kernel to 6.1.45, addressing a recently disclosed security flaw in AMD processors ([CVE-2023-20569](https://www.cve.org/CVERecord?id=CVE-2023-20569))
- **OpenSSL 3.1.1 (`openssl-3.1.1`):** Introducing OpenSSL 3.1.1 to replaced the ageing OpenSSL 1.1 runtime
- **Security Survey 2023H1/Libtiff (`security-survey-2023h1-libtiff`)：** Updating libtiff to 4.5.1, rebuilding and updating affected packages

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### OSPP 2023 Project Updates

This year, community contributors [Mingcong Bai](https://github.com/MingcongBai) and [Camber Huang](https://github.com/CamberLoid) became mentors for two of our [OSPP 2023](https://summer-ospp.ac.cn/) projects. The projects are moving along nicely.

In the past month, [Wantao Liu](https://github.com/LWanTao/) worked to improve Simplified Chinese localisation (zh_CN) for the Trinity Desktop Environment and restructured our L10n guide into [a website](https://lwantao.github.io/l10n4zh-cookbook/); Wantao's work will help improve Afterglow's user experience for Simplified Chinese users and provide a nice reference site for our future L10n work. [leedagee](https://github.com/leedagee) developed an automatic package testing framework for Autobuild3, providing essential tools for quality assurance for our maintenance automation effort.

You may find more details on the aforementioned projects, students, and mentors through the links below:

- [Autobuild3 Automated Package Testing Framework](https://summer-ospp.ac.cn/org/prodetail/23f3e0033)
- [Chinese Only: Simplified Chinese Free and Open Source Software Localisation](https://summer-ospp.ac.cn/org/prodetail/23f3e0032)

### Now Taking Orders: AOSCC 2023 Sticker Pack

The AOSCC sticker pack for 2023 has been re-printed and is now available for order. Each set (with two pages) will be sold at 10 CNY to reimburse the cost of printing and shipping. This batch of stickers should be more durable, thanks to a more scratch-resistant laminate.

Please order your stickers with [this form](https://forms.gle/Ba8GJoxkVGBqdSEr5).

Now "Hiring"
------------

AOSC is a community driven by volunteers, with many ideas but little manpower. The following are projects we plan to tackle in the near future. If you are interested in lending a hand, please join us via the QR codes listed below to get in touch.

### New Community Portal

Now that our current community portal has been deployed for over three years, its design issues are beginning to show - low space efficiency, poor visibility for news updates and downloads, etc. To address these problems, we commenced work to redesign the community portal. The image below showcases a mock-up for our new community portal for reference and constructive criticism.

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/new-portal.png)

The design characteristics of the new portal are as follows:

- Inspired by [the original Windows XP homepage](https://web.archive.org/web/20011103050531/http://www.microsoft.com/windows/default.asp), the new design learns from its strong space efficiency and adapts the old design for the modern Web.
- More emphasis on community projects and news items, as well as commonly used links.
- Multi-dimensional navigation - quick navigation to the top-right, with links to the download and "about" page, as well as language settings; an always-visible navigation bar to the left; main content body to the right.
- A three-paned banner to help promote key items, below which lists news items, system downloads, and frequently-used links; to the bottom left is a variable section, also dedicated for key promotional items (e.g., AOSC OS feature showcase, or  as needed, polls, crowdsourcing campaigns, and upcoming events).
- The website changes its colour schemes seasonally; color schemes can be specified for specific languages and during specific periods.

We have now began to plan for implementation - join the discussion at our community chat groups!

### Community Forum

Though "old-fashioned," a forum can be a valuable platform for more serious discussions. Please get in touch with us if you are interested in moderating our forum.

Come Chat!
----------

Most of our work are conducted over the Internet, come chat and work with us! Please note that most members of the following chat groups are Chinese speakers, but please feel free to ask for assistance and translation.

### WeChat

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/wechat.jpg)

### Tencent QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/qq.jpg)

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/imgs/discord.png)

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