---
categories:
  - book
title: "Coffee Break: September Issue 1/2"
date: 2023-09-08T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS Updates
---------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### Core 11 Released (Nya~)

After months of testing and adjustment, AOSC OS Core 11 update is now available! Core is a collection of core system runtime and toolchains. Its component version and features freezes on a yearly basis. The Core defines AOSC OS's version number, with this release marking the 11.0.0 release cycle for AOSC OS.

As per usual, community members nominated and voted for this release's codename during our annual conference, AOSCC. The codename was decided to be Koshki (Russian: Кошки), referring to the plural form of the word "cat."

![Core 11 Nya!](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/core-11-banner.png)

This AOSC OS Core release brings the following changes:

- **Glibc 2.37** with many function optimisation and fixes
- **GCC 13.2.0** with enhanced C23/C++23 support and optimizsation support for AMD Zen 4 and LoongArch
- **Linux API Headers 6.4.7** with new features and enhanced compatibility with newer software sources
- **Zstandard 1.5.5** with significant performance boosts for compression and decompression operations
- In our distribution definition files, AOSC OS/Retro has been renamed Afterglow

Moreover, this Core update brought support for LoongArch, paving the way for an official LoongArch port later this year or early next year.

### Sneak Peek: Omakase 1.1

As [Omakase](https://github.com/AOSC-Dev/oma) 1.0 enters our system distribution, [Xiaoyuan "Mag Mell" Fu](https://github.com/eatradish) was already hard at work developing Omakase 1.1. At the time of publication, Omakase 1.1's development is currently under contributor testing and debugging, holding usability testing sessions during our weekly contributor's meetings.

Omakase 1.1 focuses on bringing improvements on the following fronts:

- **Modularity** - Clean up project code and componentizing them to help other developers make use of Omakase features
- **System integration** - Omakase will now detect power state and control system power/session management, preventing unexpected failures during package management operations
- **UI improvements** - Introducing an easier-to-understand history and undo interface; confirmation interfaces will now be printed on terminal scrollback for easy review
- **Performance optimisation** - Parallelized download and extraction makes for much quicker metadata refresh operations
- **Plugin Support** - Enhance Omakase's features by introducing external/third-party extensions.

We will demo and review Omakase 1.1's changes during our contributor meetings on Sunday at 2 P.M., UTC+8 time. Join us at our [Discord server](https://discord.gg/VYPHgt9)!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- The mainline kernel was updated to 6.4.10, the Longterm kernel was updated to 6.1.45, addressing a recently disclosed security flaw in AMD processors ([CVE-2023-20569](https://www.cve.org/CVERecord?id=CVE-2023-20569))
- Discord voice chat and livestreaming client was updated to 0.0.29
- Qemu virtualisation and emulation suite was updated to 8.1.0
- Binutils was updated to 2.41, introducing support for many more LoongArch instructions
- Less was updated to 643, fixing [CVE-2022-46663](https://github.com/advisories/GHSA-5xw7-xf7p-gm82)
- GNU Debugger (GDB) was updated to 13.2
- PowerShell was updated to 7.3.6
- Prism Launcher, an open-source Minecraft launcher, was updated to 7.2
- Zotero bibliography and reference manager was updated to 6.0.26
- Surveyed Bash profile scripts in various packages and moved them to more standardised locations; profile scripts should now apply properly on non-login sessions (such as graphical terminal emulators)
- [The System Installer (DeployKit)](https://github.com/AOSC-Dev/aoscdk-rs) was updated to 0.9.6, fixing an issue where the installer fails to fetch metadata for the newest system releases

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- canokey-qemu (`canokey-qemu`) - Library for Qemu to provide a virtual canokey to the guest OS
- eza (`eza`) - An enhanced `ls(1)` command implementation
- Feishin (`feishin`) - A music player client for self-hosted streaming services
- libu2f-emu (`libu2f-emu`) - A C library for emulating Universal 2nd Factor (U2F) device
- libblkio (`libblkio`) - A library for block device I/O with support for multi-queue devices
- Lempel-Ziv Finite State Entropy (`lzfse`) - Tools and libraries for Apple Inc.'s lossless compression algorithm

#### Removed Packages

We removed the following packages from the AOSC OS repository in the past two weeks:

- EDK2 (`edk2`) OVMF images - this package is now installed along with Qemu (`qemu`)
- SeaBIOS (`seabios`) BIOS images - this package is now installed along with Qemu (`qemu`)
- exa (`exa`) enhanced `ls(1)` command implementation - this package is no longer maintained; the next system update will install its replacement, eza (`eza`) automatically, keeping the original command name

#### Peripheral Projects

- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) (our distribution generation toolkit) was updated to fix the verification logic for packages and to improve the error output for `--include-files`

#### Development Tools

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) began to see initial work on a package testing framework on the `testing-suite` branch

### In the Oven

To help testing our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

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

### Coming Soon: *SIGILL's* Inaugural Issue

In the past few months, a few of our community contributors purchased various Loongson 3A5000/6000-based systems, with different use cases in mind.

So, how did they fair? Find out in *SIGILL's* inaugural issue!

![A Loongson 3A5000-based desktop computer at the AOSCC 2023 venue](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/3a5000.jpg)

Now "Hiring"
------------

AOSC is a community driven by volunteers, with many ideas but little manpower. The following are projects we plan to tackle in the near future. If you are interested in lending a hand, please join us via the QR codes listed below to get in touch.

### New Community Portal

Now that our current community portal has been deployed for over three years, its design issues are beginning to show - low space efficiency, poor visibility for news updates and downloads, etc. To address these problems, we commenced work to redesign the community portal. The image below showcases a mock-up for our new community portal for reference and constructive criticism.

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/new-portal.png)

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

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/wechat.jpg)

### Tencent QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/qq.jpg)

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230908/imgs/discord.png)

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
