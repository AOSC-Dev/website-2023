---
categories:
  - news
title: "Coffee Break: October Issue 2/2"
date: 2023-10-28T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS: Featured Items
-----------------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

Now Available: New Wave of AOSC OS System Releases
====

Recently, we released a new wave of AOSC OS system releases. This wave contains a year's worth of component updates, incorporating routine updates, bugfixes, and enhanced hardware support.

You may obtain AOSC OS from our downloads page: [https://aosc.io/downloads](https://aosc.io/downloads)

![AOSC OS Desktop.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/desktop.en.png)

New Features
----

This wave of update includes many new features and improvements to the default user experience. Most notably, all new system releases now come pre-installed with [Omakase](https://github.com/AOSC-Dev/oma), our in-house package management interface which aims to improve ease-of-use and reliability. The Linux Kernel, as well as the graphical and audio stacks also got refreshed to improve user experience on newer hardware. We have also made updates to key system components, most notably:

- Linux Kernel was updated to the 6.4 branch (6.1 longterm versions also available) to ensure a smooth experience on newer hardware. We have also incorporated additional patches to improve out-of-the-box experience on Microsoft Surface devices, as well as Huawei's Kunpeng 920- and Phytium D2000/8-based devices.
- Core was updated to 11.0.1, boasting the newest core runtime libraries and toolchain, such as Glibc 2.37 with new architecture support and instruction set optimisations, and GCC 13.2.0, which provides support for latest programming language features.
- OpenSSL runtime was updated to 3.1.1 with support for latest cryptographic algorithms, as well as key security enhancements.
- The default browsers also saw updates, such as Mozilla Firefox 117.0.1 and Thunderbird 115.2.2.
- The KDE Plasma desktop was updated to contain newest versions from end of 2022, with interface and performance tweaks and optimisations applied by default.
- Enhanced Shell prompt with SSH connection marker, optimised Git status prompts, and standardised profile scripts.
- More powerful editors, with Vim now pre-installed in addition to GNU Nano.

### Omakase 1.1 Released

After months of development work, AOSC OS's default package manager, [Omakase](https://github.com/AOSC-Dev/oma) has received its first feature update. In addition to addressing design, maintenance, and usability issues found in the 1.0 releases, Omakase 1.1 also introduced a number of quality-of-life improvements:

- **System integration** - Omakase will now detect power state and control system power/session management, preventing unexpected failures during package management operations
- **UI improvements** - Introducing an easier-to-understand history and undo interface; confirmation interfaces will now be printed on terminal scrollback for easy review
- **Performance optimisation** - Parallelized download and extraction makes for much quicker metadata refresh operations
- **Plugin Support** - Enhance Omakase's features by introducing external/third-party extensions.

We would love to hear your thoughts and criticisms. [Get in touch!](#come-chat)

### Wallpaper Collection Update for 2023H1 Now Available

Last week, we made the wallpaper collection update for early 2023 available in our community repository. The update contains 10 most popular community submissions and updates the default wallpapers for our Desktop releases.

![New wallpapers in the 2023H1 collection.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/2023h1-wallpapers.jpg)

We received many more [great submissions](https://github.com/AOSC-Dev/aosc-os-abbs/discussions/4474) from friends of the community. These submissions are available from the "extras" collection. You may obtain them with the command below:

```
oma install aosc-community-wallpapers-extras-2023
```

Thank you for your submissions and enjoy!

### System Branding Update

In late August, we introduced [new visual IDs for our system distributions](https://github.com/AOSC-Dev/newsroom/blob/masterhttps://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230825/en.md#new-visual-ids-for-system-distributions), including new logos for AOSC OS and Afterglow, our legacy-device-optimised distribution. Recently, we have update our system brandings in accordance with the new visual IDs:

![AOSC OS adorned with the new logo.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/branding.en.png)

### Updates from the Frontier: Mainlining LoongArch

Earlier, we have initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- [Omakase](https://github.com/AOSC-Dev/oma) was updated to 1.1.6, with many quality-of-life improvements and bugfixes.
- OpenSSL runtime (`openssl`, `openssl+32`) was updated to 3.1.4，addressing [a "moderate" security vulnerability](https://www.openssl.org/news/secadv/20231024.txt).
- Editors suite (`editor-base`) now comes with Vim.
- Discord was updated to 0.0.32
- Fcitx's Moegirl Wiki dictionary ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) was updated to 20231028 with many new phrases added.
- Feishin (`feishin`), a music player client for self-hosted streaming services, was updated to 0.4.1.
- Fend (`fend`), a command-line calculator and unit converter, was updated to 1.3.0.
- MangoHud (`mangohud`, `mangohud+32`), a display overlay for monitoring FPS, was updated to 0.7.0, enabling NVIDIA GPU status monitoring support.
- Visual Studio Code (`vscode`) 及 VSCodium (`vscodium`) was updated to 1.83.1
- Neofetch (`neofetch`), a command-line system information viewer, was updated to 7.3.10+git20230913, introducing the new AOSC OS logo.
- Desktop support suite (`desktop-base`) was updated to 11.0.0+campanula20190706, introducing the new AOSC OS logo.
- APT was updated to 2.6.1 to address build failures in the 2.5 releases.
- APT repository configuration manager [apt-gen-list](https://github.com/AOSC-Dev/apt-gen-list-rs) was updated to 0.7.0 with Omakase integration.
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) was updated to 1.7.2 with the new [package testing framework](https://wiki.aosc.io/developer/packaging/autobuild3-testing-framework/).

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- Dua (`dua`) - A command-line desktop usage analyzer and visualiser.
- NVIDIA X Control Library (`libxnvctrl`, `libxnvctrl+32`) - For reading NVIDIA GPU configuration and status.
- Pivy (`pivy`) - Python bindings for Coin3D.
- [repo-refresh](https://github.com/AOSC-Dev/scriptlets/tree/master/repo-refresh) (`repo-refresh`) - A simple script for refreshing the local package metadata database.
- Wallpaper metadata generator (`wpmeta`) - Used to generate AOSC OS wallpaper collection packages.

#### Peripheral Projects

- The system installer ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) version 0.9.9 was released, with improved wapfile size calculation, the default value on devices with small RAM should now be more reasonable.
- Community developer [Xiaoyuan "Mag Mell" Fu](https://github.com/eatradish) and  [Xinhui Yang](https://github.com/Cyanoxygen) commenced work to port the backend of our [packages information site](https://packages.aosc.io/) to PostgreSQL. The new backend is expected to be more reliable than our current implementation.
- Community developer [Xinhui Yang](https://github.com/Cyanoxygen) developed a [dpkg](https://wiki.debian.org/dpkg) package version comparison implementation in PL/pgSQL - [dpkg-vercmp-plpgsql](https://github.com/AOSC-Dev/dpkg-vercmp-plpgsql).
- Community developer [Tianhao Chai](https://github.com/cthbleachbit) implemented logic for listing newest and outdated packages in our package repository management toolkit, [p-vector-rs](https://github.com/AOSC-Dev/p-vector-rs).
- Repository manifest management toolkit [RepoKit](https://github.com/AOSC-Dev/repokit) saw fixes in its incremental scanner and a much faster implementation for calculating system release sizes using .xz metadata.
- Our lucky draw utility, [choupiaotoujiang](https://github.com/AOSC-Dev/choupiaotoujiang), switched to use the lighter `fastrand` random number generator library.
- Community developer [Tianhao Chai](https://github.com/cthbleachbit) implemented a [Dracut module](https://github.com/AOSC-Dev/dracut-stressapptest) to integrate `stressapptest` in the initramfs. This will be useful for testing memory on non-x86 devices.

#### Development Tools

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) version 1.7.2 was released. The new version introduces the [package testing framework](https://wiki.aosc.io/developer/packaging/autobuild3-testing-framework/) implemented by our community developer [leedagee](https://github.com/leedagee). The framework was implemented as a [OSPP 2023](https://summer-ospp.ac.cn/) project and will provide yet another means to enhance our package quality assurance standards.
- Our containerised pacakging environment manager, [Ciel](https://github.com/AOSC-Dev/ciel-rs), was updated to 3.2.1, fixing architecture detection for MIPS-based Loongson 3 (`loongson3`) systems.

### In the Oven

To help test our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Default Bash Configuration 0.5.2.2 (`bash-config-0.5.2.2`)：** Fixing incorrectly set `umask` values in non-login sessions and adds `~/.local/bin` to the default executable search path (`$PATH`).
- **Boost 1.83:** Updating Boost runtime libraries to 1.83, updating and rebuilding affected packages, improving compatibility with some newer C++ sources.
- **[Mirrormgr](https://github.com/AOSC-Dev/mirrormgr) 0.8.0 (`mirrormgr-0.8.0`)：** Our new, dialog-based package repository mirror manager. Mirrormgr will replace `apt-gen-list` in the near future.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

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
--------

Most of our work are conducted over the Internet, come chat and work with us! Please note that most members of the following chat groups are Chinese speakers, but please feel free to ask for assistance and translation.

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/discord.png)

### WeChat

Please scan this QR code and note that you would like to join our community chat group.

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/wechat.png)

### QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231028/imgs/qq.jpg)

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
