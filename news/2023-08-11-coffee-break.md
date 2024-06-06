---
categories:
  - book
title: "Coffee Break: August Issue 1/2"
date: 2023-08-11T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS Updates
---------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### Introducing: Omakase

Recently, [Omakase](https://github.com/AOSC-Dev/oma), the package manager we've tailor-made for AOSC OS, has been introduced to the community repository and will be installed automatically with an `admin-base` (administrative tools suite) update. Omakase is designed with the following goals in mind:

- **Improving APT's interface:** Simplifying and clarifying user interfaces and administrative operations.
- **Protection against user errors:** By implementing clearer text prompts and undo/redo functionalities, Omakase can help prevent user-induced system malfunctions from occuring, saving time and energy.
- **Optimizing networking performance:** With support for HTTP/2 and a multi-threaded downloader, Omakase can update and install packages much more efficiently.
- **Enhancing user experience:** Re-organizing various subcommands and augmenting the search function to help you get stuff done more quickly.

![oma-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/omakase.png)

Update your system today to test out `oma`, our brand-new package manager! As Omakase's is still very much a young project, there are many [new features and designs](https://repo.aosc.io/aosc-documentation/aoscc-2023/magmell/omakase.pdf) that are yet to be implemented. If you have any questions and suggestions, or have run into problems, please do [file an issue](https://github.com/AOSC-Dev/oma/issues/new)！

Omakase is built upon Debian's [APT](https://wiki.debian.org/Apt) and remains functionally compatible with it. To help ease the transition, we will continue to pre-install APT along side Omakase with AOSC OS.

### Stripping the LiveKit

It's no news to anyone that AOSC OS is a heavy distribution. But as it is a price we paid for full feature sets and simplified dependency tree, downsizing the system where appropriate is also one way to improve user experience.

Earlier this month, Yang Xinhui (GitHub: [@Cyanoxygen](https://github.com/Cyanoxygen)) submitted [an improvement](https://github.com/AOSC-Dev/aosc-mklive/commit/8339e1879cfe113bedcc3b30539057be50315677) to LiveKit's generation script to strip out rarely used fonts and man pages. After this change, we expect future LiveKit ISO images to be 200 – 300 MiB smaller.

![livekit-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/livekit.png)

### AOSC OS/Retro is Now Considered Stable

If you have any old (and even vintage) computers that you could not bear to throw away, our AOSC OS/Retro distribution can help you keep them running as useful devices. Late in July, we announced the stable releases for 32-bit x86 devices. With just 128 MiB of RAM, 3 GiB of storage space, and a VGA card, AOSC OS/Retro's full desktop is ready for you to enjoy. Oh - if you would care to install the system manually, AOSC OS/Retro's base system will run on just 32 MiB of RAM, 500 MiB of storage space, and an 486-class machine.

![retro-screenshot](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/retro.png)

AOSC OS/Retro's various other architectural ports will be made available later this year to help you keep more machines running. Stay tuned!

### At a Glance: AOSC OS Updates

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- Linux Kernel was updated to 6.4, improving compatibility with newer hardware, along with a fix for the issue where NVIDIA hybrid graphics on 12th generation Intel hardware would fail to start the graphical environment; Huawei's Qinyun desktop computers also saw usability improvement.
- Neofetch was updated to 7.3.9, fixing an issue where AArch64 processor models were displayed as "Yes."
- WPS Office now launches correctly on AArch64.
- The RIME input method engine is now usable on AArch64.
- Fixed an issue where htop miscounts core counts on processors with offlined cores.
- Fcitx's Moegirl Wiki dictionary ([fcitx-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) was updated to 20230714, introducing new phrases.
- FeelUOwn music player was updated to 3.8.13, also introducing the Bilibili plugin.
- Blender was updated to 3.6 with user interface enhancements and new features.
- VirtualBox was updated to 7.0.10 to fix compatibility with Linux Kernel 6.4.
- [Ouch](https://github.com/ouch-org/ouch) was introduced to the repository as a one-stop command-line de/compression utility.

### In the Oven

To help testing our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **AOSC OS Core 11 (`core-k`):** Updating the core system runtime: Glibc 2.37, GCC 13.2.0, Linux API Headers 6.4.7, and Zstd 1.5.5.
- **LLVM 16 and Rust 1.71 (`llvm-16.0.4`):** Introducing LLVM 16 and Rust 1.71, along with their new features and fixes, improving support for Loongson 1000 - 4000 series systems, as well as introducing D language support for IBM POWER systems.
- **OpenSSL 3.1.1 (`openssl-3.1.1`):** Introducing OpenSSL 3.1.1 to replaced the ageing OpenSSL 1.1 runtime.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### New AArch64 Build Servers

Thanks to generous donations from the friends from our community, we will deploy two new AArch64 build servers in the near future:

- Lenovo ThinkSystem SR358F V2 with a 64-core Phytium FT2000+ processor and 128 GiB of RAM.
- Huawei TaiShan 200 with a 64-core Kunpeng 920 processor and 256 GiB of RAM.

These new servers will tremendously ease our maintenance efforts towards AOSC OS for AArch64.

![kp920](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/kp920.png)

### Rebooting Our Outreaching Efforts

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

### AOSCC 2023 Souvenirs

We are currently planning another batch for this year's AOSCC souvenirs - sticker packs, tote bags, and commemorative shirts. Please stay tuned for updates on our chat groups.

Now "Hiring"
------------

AOSC is a community driven by volunteers, with many ideas but little manpower. The following are projects we plan to tackle in the near future. If you are interested in lending a hand, please join us via the QR codes listed below to get in touch.

### New Community Portal

Now that our current community portal has been deployed for over three years, its design issues are beginning to show - low space efficiency, poor visibility for news updates and downloads, etc. To address these problems, we commenced work to redesign the community portal. The image below showcases a mock-up for our new community portal for reference and constructive criticism.

![portal](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/new-portal.png)

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

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/wechat.jpg)

### Tencent QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/qq.jpg)

### Telegram

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20230811/imgs/discord.png)
