---
categories:
  - news
title: "Coffee Break: November Issue 1/2"
date: 2023-11-11T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS: Featured Items
-----------------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### AOSC OS for Apple Silicon Preview Now Available

At the time of writing, we have implemented a basic installer for AOSC OS on Apple Silicon-based devices - [aosc-asahi-installer](https://github.com/AOSC-Dev/aosc-asahi-installer). This installer, based on [asahi-installer](https://github.com/AsahiLinux/asahi-installer) from the [Asahi Linux](https://asahilinux.org/) project, supports installing AOSC OS from macOS, including the Desktop, Base, and Server editions.

![A Mac mini M1 running AOSC OS.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/apple-silicon.jpg)

AOSC OS support for Apple Silicon is still in its early days, a lot of work will be required for hardware support and out-of-the-box configurations. We plan to continue working with Apple Silicon hardware in the next few weeks to improve user experience for owners of such devices.

If you would like to install AOSC OS on your Apple Silicon computer, simply run the following command in your terminal application on macOS Ventura (13) or newer:

```
curl https://raw.githubusercontent.com/AOSC-Dev/aosc-asahi-installer/master/install-system.sh | sh
```

### Updates from the Frontier: Mainlining LoongArch

Earlier, we have initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- Command-line YouDao Dictionary client (`ydcv-rs`) was updated to 0.6.1, implementing support for the latest YouDao Dictionary API.
- Default Bash Configuration (`bash-startup`) was updated to 0.5.2.4, with support for setting custom command history sizes.
- NVIDIA graphics card driver (`nvidia`, `nvidia+32`) was updated to 545.29.02, preparing for Linux Kernel 6.6.
- Discord was updated to 0.0.34.
- NVIDIA X Control Library (`libxnvctrl`, `libxnvctrl+32`) was updated to 545.23.06, fixing incorrect symlinks on runtime libraries.
- Feishin (`feishin`), a music player client for self-hosted streaming services, was updated to 0.5.1.
- GTK+ 3.x runtime library was updated to enable missing features.
- Font configuration collection (`fontconfig`) was updated to address an issue where bitmap fonts were not disabled correctly.
- Linux Kernel for MIPS-based Loongson systems (`linux-kernel-lemote`) was updated to 5.4.259, enabling more kernel modules and fixes no-dispaly issue on AMD graphics cards.
- GRUB for MIPS-based Loongson systems (`grub-loongson3`) was updated to fix GRUB installation.

#### Peripheral Projects

- The system installer ([DeployKit](https://github.com/AOSC-Dev/aoscdk-rs)) version 0.10.0 was released with partition map verification (i.e., checking for EFI system partitions on EFI-based systems, etc.).

### In the Oven

To help test our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Boost 1.83:** Updating Boost runtime libraries to 1.83, updating and rebuilding affected packages, improving compatibility with some newer C++ sources.
- **October Graphical Stack Update (`graphical-stack-survey-20231031`)：** Updating many graphical stack components, improving stability and support for newer hardware; also fixes hardware video encoding on Firefox, improving multimedia streaming experience.
- **libpaper 2.1.0 (`libpaper-2.1.0`)：** Updates paper size and paging support library to 2.1.0.
- **Linux Kernel 6.6 (`linux-kernel-6.6`)：** Updates Linux Kernel to the 6.6 branch, enabling new hardware support (enabling ACPI support on RISC-V, introducing LoongArch configuration, etc.) and improving performance (disabling scheduler debugging `CONFIG_DEBUG_PREEMPT` on x86_64, which was enabled by mistake, improving application launch times).
- **Fix-ups for MIPS-based Loongson Systems (`loongson3-fixup-2`)：** Introducing the `update-grub` command to GRUB for MIPS-based Loongson systems (`grub-loongson3`), selecting `loongson` as the default Kernel graphical driver, disabling tcmalloc support for LevelDB to fix RIME input method crashes, etc.
- **signing-party (`signing-party-new`)：** Introducing  `signing-party`, useful for PGP signing parties and other social occasions.
- **systemd 254 (`systemd-254`)：** Updating systemd to 254.5, enabling EFI support for all architectures and introduces a trigger (extra binary format support) to reload binfmt (extra binary format support) configurations when they are updated.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### Celebrating Yet Another Successful Year at OSPP

After months of hard work, the two OSPP 2023 projects from our community have passed assessment by the OSPP host, marking the birth of yet another two successful OSPP projects. Let's extend our celebration to our intern [leedagee](https://github.com/leedagee) and mentor [Camber Huang](https://github.com/CamberLoid) from the [Autobuild 3 Automatic Testing Framework](https://summer-ospp.ac.cn/org/prodetail/23f3e0033) project; and intern [Wantao Liu](https://github.com/lwantao) and mentor [Mingcong Bai](https://github.com/MingcongBai) from the [Free and Open Source Softawre Localisation](https://summer-ospp.ac.cn/org/prodetail/23f3e0032) project!

We hope that our interns will continue to exercise their skills in the open source communities.

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

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/telegram.png)

### Discord

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/discord.png)

### WeChat

Please scan this QR code and note that you would like to join our community chat group.

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/wechat.png)

### QQ

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231111/imgs/qq.jpg)

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
