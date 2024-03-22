---
categories:
  - news
title: "Coffee Break: November Issue 2/2 | Celebrating 12 Years of AOSC"
date: 2023-11-25T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

Special: Celebrating 12 Years of AOSC
-------------------------------------

![2011 - 2023, 12 Years of AOSC](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/12th-annivesary.jpg)

December 1st will mark the 12th anniversary of our community, Anthon Open Source Community.

In late 2011, three middle school students founded AOSC. 12 years have since past, once arrogant and ignorant, we fumbled as we worked diligently to find our own place in the open source circle. In the spirit of collaborative development, as we started new projects and continued to maintain community projects, we have also formed deep bonds with other developers and communities in the open source circle. Participating in porting and adaptation, localisation, generating new ideas and methods, we strove to advance open source software for wider adoption.

On community-building, we emphasise a people-first approach - like a helpful neighbour, we made new friends as our projects progressed. In online chat groups and our in-person AOSCC conferences, AOSC strives to become a positive force in broadening community companionships, in maintaining developer-user relationship, and in extending collaboration and resource sharing between communities and enterprises.

In the past year, our Linux distribution, AOSC OS, has continued to mature. As it offers our users a reliable and pleasant experience, AOSC OS also drove development in a number of community projects. In particular, our new in-house package mangement frontend, [Omakase](https://github.com/AOSC-Dev/oma) has become a part of the base system and will gradually replace APT as the default package management toolset; the system installer, [DeployKit](https://github.com/AOSC-Dev/aoscdk-rs), has become more stable than ever, providing a unified and efficient installation experience for various hardware platforms; specialised AOSC OS derivatives like the RescueKit system maintenance and rescue environment and the BurnKit hardware stability evaluation environment will soon be released to help enrich your system adminsitrative toolbox.

At the same time, we have spent much effort in bringing LoongArch support to AOSC OS. As one of the first desktop-oriented Linux distribution for the architecture, we fixed bugs, resolved usability issues, and optimised performance in various desktop applications. Our work on this front will be sure to provide not only a well-maintained system environment for our users, but also reference and code contribution for other distributions, benefiting the wider LoongArch hobbyist and user community.

In the coming year, we will redouble our effort to maintain and improve AOSC OS and its various peripheral projects, to enhance Afterglow's design and maintenance for older hardware, and to better the presentation of our website and documentation. We will also organise AOSCC 2024 and continue our contribution to the wider open source software ecosystem, as well as in fostering collaboration with different software and hardware vendors. AOSC will uphold its constructive, friendly, and professional attitudes to serve users, developers, and hobbyists inside and outside of our community.

With AOSC, let's open source better together!

— Mingcong Bai, Founder of AOSC, on November 23, 2023.

*(That's enough lofty talk, let's get back into business...)*

AOSC OS: Featured Items
-----------------------

In the past two months, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### AOSC OS for Apple Silicon Now Available

![AOSC OS at the Apple Startup Manager.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231125/imgs/apple-silicon.jpg)

AOSC OS for Apple Silicon is now available for most M1 or M2 based Macs. This round of release will work out of the box on most M1-based systems[^1], with the exception of OpenGL[^2] and Thunderbolt[^3], the internal storage, ports,
audio, Wi-Fi, and webcam should work out of the box. Support for M2 devices is currently work-in-progress[^4] and M3 support will be coming soon.

On macOS Ventura (13) or newer, use following command in terminal to install AOSC OS:

```
curl https://releases.aosc.io/install-asahi | sh
```

Should you run into any issues whilst installing or using AOSC OS, please [file an issue](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) or get in touch with us via the channels listed below.

### Call for AOSC OS Wallpapers Now Open for 2023H2

In the past few years, thanks to active participation from our community members, our wallpaper collection has grown substantially (currently containing more than 100 wallpapers). Now that it has been over six months since our last call for wallpapers, we welcome your submissions!

The volume of the last few submissions had been vast and the size of our wallpaper package exponentially. In an attempt of controlling its size, the contributors will vote for ten (10) candidates for inclusion in the default wallpaper collection, these candidates will then go into a community poll to produce our next default wallpaper. The rest of the submissions will go into another non-preinstalled package (extras) in the interest of controlling our distribution size. 

#### Rules

1. **You must be the original author of your submission**, though you may submit photographs or graphic designs.
2. Your submission(s) must be of **3000x2000 or higher resolution**, unless they are used as tiled patterns.
3. Your submission **must not contain trademarks or (virtual or real-life) human(oid) portraits**, except for An-An and Tong-Tong.
4. Your submission **must not contain political, racial, or religious opinions.**

#### Submission Format

1. Upload your submission in a reply below.
2. Note the following under **each of your submissions:** title of wallpaper, your name and e-mail, and licensing terms.

*Note: The rules and expectations above are subject to interpretation by our community contributors. After the submission deadline, community contributors will convene to audit and filter all submissions based on rule compliance and quality. We will hold an internal vote to select ten candidates for the community poll.*

**Submissions will close at 0:00 on December 15th, UTC +8 time.**

Thank you in advance for your contribution!

### Topic Update Manifest

Most of you who have used Windows would probably be somewhat familiar with Windows Update. Despite the fact that Windows Update has been notorious for its various problematic user experience designs, we've found a thing or two that we could learn from it - in particular, the way it presents the list of available system updates. In the Linux world, system updates are done on per-package basis, usually in large numbers. The package manager is the Linux equivalent of Windows Update, but with a large list of package updates, users tend to have a hard time knowing what got updated and, much less so, what each update is meant to do.

With Windows Update as an inspiration, we have designed the [Topic Update Manifest](https://gist.github.com/MingcongBai/912e778216aad58cf504713dcd4898cc) which provides a digest for package updates. Package managers will be able to make use of this manifest data to present user-readable overviews for system updates. This manifest format is currently under RFC (Request for Comments), we look forward to your comments and critiques.

### Coming Soon: BurnKit Hardware Stability Evaluation Suite

While working on AOSC OS for LoongArch, our maintainers suffered great frustration with hardware compatibility on LoongArch hardware. From RAM modules to graphics cards, intermitten stability issues occured frequently. Worse yet,neither Loongson nor its third-party hardware vendors provided official hardware compatibility lists (or qualified vendor list, QVL for short). It took weeks of our developers have been working around the clock sourcing, purchasing, and returning components to finally find a configuration that worked reliably for everyday use and development work.

To help streamline hardware stability evaluation and to help the Loongson Open Source Community with assembling its ["LoongArch Hardware Compatibility Database (QVL)"](https://github.com/loongson-community/areweloongyet/issues/68), we designed BurnKit, a specialised distribution for stress testing various components on your devices. BurnKit is designed to be written to and booted from a USB flash drive.

BurnKit's development is still in its early days, but we plan to incorporate the following test procedures:

- Memory I/O: Using [stressapptest](https://github.com/stressapptest/stressapptest), testing 80% of available RAM for 24 hours to evaluate system stability under high memory I/O load.
- Graphical Memory: Running 10 [glmark2](https://github.com/glmark2/glmark2) instances for 1 hour to stress test GPU memory access.
- Storage I/O: Running 2 [stress-ng](https://github.com/ColinIanKing/stress-ng) mixed I/O stress tester per processor core to evaluate storage I/O stability under different workloads.
- OpenGL: Using [Blender](https://www.blender.org)'s Eevee OpenGL renderer to render a complex animation sequence to evaluate the stability of the GPU's OpenGL funtionalities.
- GPGPU: Using [LuxMark](http://www.luxmark.info/)'s OpenCL testsuite to evaluate the stability of the GPU's general-purpose computing functionalities.
- A combination of the aforementioned testsuites to evaluate system stability under mixed workloads.

BurnKit will also aggregate logs of each testsuite, making it easier for users to submit them to different databases and bug trackers. For any ideas and critiques for the BurnKit project, pleaes file an issue at the [BurnKit](https://github.com/AOSC-Dev/burnkit) repository or come chat at our community chat groups (see the "Come Chat!" section below).

### Updates from the Frontier: Mainlining LoongArch

Earlier, we have initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:

- October Graphical Stack Update (`graphical-stack-survey-20231031`): Updating many graphical stack components, improving stability and support for newer hardware; also fixes hardware video encoding on Firefox, improving multimedia streaming experience.
- [Omakase](https://github.com/AOSC-Dev/oma) package manager frontend was updated to 1.1.8, fixing an issue where Omakase may fail to query details of multiple packages and another issue where it may fail to display dependency errors.
- Software repository manager (`mirrormgr`) was updated to 0.8.0, introducing Omakase integration; `mirrormgr` will also replace apt-gen-list, which was previously used to serve this purpose.
- systemd (`systemd`) was updated to 254.6 with many new features and a fix for warning during installation.
- Firefox (`firefox`) was updated to 119.0.1 with hardware video acceleration for our secondary architectures, improving media streaming experiences on these devices.
- Telegram instant messenger (`telegram-desktop`) was updated to 4.11.8 with support for various new message types.
- Discord was updated to 0.0.35
- Command-line YouDao Dictionary client (`ydcv-rs`) was updated to 0.6.3, fixing the parser for YouDao's "Internet Phrases" section and HTTPS support for secondary architectures.
- MKV video manipulation toolkit (`mkvtoolnix`) was updated to 79.0 with many features, including that for extracting AV1 streams from Dolby Vision streams.
- Blender 3D graphics design suite (`blender`) was updated to 3.6.4.
- R statistics programming and graphing suite (`r`) was updated to 4.3.1.
- Exim e-mail server and client toolkit (`exim`) was updated to 4.97 with multiple usability and security fixes.
- Fcitx's Moegirl Wiki dictionary ([fcitx5-pinyin-moegirl](https://github.com/outloudvi/mw2fcitx)) was updated to 20231114 with many new phrases.
- Boost runtime and header library (`boost`) was updated to 1.83, updating or rebuilding affected packages, improving development experience with some newer C++ projects; also introducing NumPy bindings to allow building LuxCoreRender and other scientific software.
- NVIDIA's CUDA general purpose computing SDK (`cuda`) was updated to 12.2.2+535.104.05, fixing compatibility with newer NVIDIA driver versions.
- Gitoxide (`gitoxide`), a high-performance Git implementation, was updated to 0.31.1 with support for Git dump and numerous other protocol features.
- Bash's Git status component ([bash-git-status](https://github.com/AOSC-Dev/bash-git-status)) was updated to 0.2.1, improving status prompts during rebase and other operations.
- `fd`, a command-line file and directory searching utility was updated to fix a crash on Apple Silicon and other devices using the 16K kernel page size.
- Sphinx documentation generator suite (`sphinx`) was update to 7.0.1, fixing compatibility with `docutils`.
- Docutils documentation format converter suite (`docutils`) was updated to 0.20.1, fixing compatibility with Sphinx 7.x.
- TeXLive (`texlive`) was updated to fix an error during post-installation format generation and another issue where some tools pointed to non-existent paths.
- `upx`, an executable compression utility was updated to 4.2.1, fixing compression support for Rust binaries.
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) semi-automatic packaging toolkit was updated to 1.7.5, see below for new features with this version.

#### New Packages

We introduced a few packages into the AOSC OS repository in the past two weeks:

- `aml`: A portable event-based main loop library.
- `apfs-fuse`: A read-only userspace driver for the APFS file system.
- `ast-grep`: A command-line tool for code structure search, lint, and rewriting.
- `hyperfine`: A command-line benchmarking tool.
- `libdisplay-info`: A library for parsing EDID and DisplayID information.
- `lychee`: A command-line broken link checker.
- `neatvnc`: A VNC server API library.
- `peg`: A recursive-descent parser generators for C.
- `vulkan-utility-libraries`: Utility libraries for Vulkan developers.

The following packages were introduced for Apple Silicon support:

- `asahi-base`: Metapackage for Apple Silicon support.
- `alsa-ucm-conf-asahi`: Layout configuration for the ALSA audio system.
- `asahi-common`: Common administrative components and scripts.
- `asahi-fwextract`: Firmware extractor.
- `linux-kernel-asahi` and `linux+kernel+asahi`: Linux Kernel package.
- `m1n1`: A general-purpose bootloader.
- `uboot-asahi`: U-Boot bootloader image.

#### Development Tools

- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) semi-automatic packaging toolkit version 1.75 was released, adding `/usr/gnemul`, a path commonly used to store emulation system root filesystems, to the path whitelist; quieting `update-alternative`'s overly sensitive warning output; setting `dpkg` behaviour to install new configuration by default.
- [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap) distribution generator version 0.3.3 was released to address an issue where the clean-up sequence may fail to remove some files in `/proc`.

#### Peripheral Projects

- Bash basic configuration, ([bash-config](https://github.com/AOSC-Dev/bash-config)), version 0.6.0 was released, enabling `ip`'s color highlighting by default.
- PMON configuration generator, ([pmon-update](https://github.com/loongson-community/pmon-update)), was re-implemented to be compatible across different distributions (previously, `pmon-update` only supported Debian and its derivatives); this tool will be useful for managing multiple kernel versions on MIPS-based Looongson (`loongson2f` and `loongson3`) devices.

### In the Oven

To help test our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Linux Kernel 6.6 (`linux-kernel-6.6`)：** Updates Linux Kernel to the 6.6 branch, enabling new hardware support (enabling ACPI support on RISC-V, introducing LoongArch configuration, etc.) and improving performance (disabling scheduler debugging `CONFIG_DEBUG_PREEMPT` on x86_64, which was enabled by mistake, improving application launch times).
- **Fix-ups for MIPS-based Loongson Systems (`loongson3-fixup-2`)：** Introducing the `update-grub` command to GRUB for MIPS-based Loongson systems (`grub-loongson3`), selecting `loongson` as the default Kernel graphical driver, disabling tcmalloc support for LevelDB to fix RIME input method crashes, etc.
- **signing-party (`signing-party-new`)：** Introducing  `signing-party`, useful for PGP signing parties and other social occasions.

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### Discussion: Preparing for a Community BBS

As our community mailing list have been lacking maintenance, we would like to move our asynchronous communication channel to a communtiy BBS/forum.

We plan to hold a discussion session at 2 P.M. on November 26th, 2023, UTC+8 time to work out platform selection, implementation schedules, and administrative organisation for our new forum. If you are interested in participating in forum moderation, please consider attending this discussion session on our [voice channel](https://discord.gg/VYPHgt9).

### Coming Soon: *SIGILL's* Inaugural Issue

> From the editor: Well, it's been a bit too long since we announced this project, hasn't it. We would like to offer an explanation for this delay. As we are currently working with engineers at Loongson to debug some of the issues surfaced as we began to use our LoongArch devices, we would like to refrain from commenting on and making fun of these issues before we come up with resolutions or at least arrive at basic understanding of the problems at hand. On the other hand, as we have extensive records on these issues and their potential solutions, we would like to split this inaugural issue into multiple episodes to help making them easier to read. As we finish editing these episodes, we will make sure that all issues referenced will come with guides and references to resolve them or at least our analysis of the casues. We believe that by doing so, readers will get the best out of our journey towards working LoongArch-powered dailies. We thank you for your understanding and patience.

In the past few months, a few of our community contributors purchased various Loongson 3A5000/6000-based systems, with different use cases in mind.

So, how did they fair? Find out in *SIGILL's* inaugural issue!

![A Loongson 3A5000-based desktop computer at the AOSCC 2023 venue](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231014/imgs/3a5000.jpg)

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
