---
categories:
  - news
title: "Coffee Break: December Issue 1/2"
date: 2023-12-09T12:00:00+08:00
important: false
draft: false
---

> "What would y'all like to drink today?"

Thank you for reading "Coffee Break," AOSC's semi-monthly newsletter! Here, you will find summaries of development updates, community matters, and upcoming events in an accessible and fun fashion. This column is also used to publish interview transcripts with individuals and representatives from various groups, clubs, and industries and will be published as special issues. This column does not contain op-ed-type contents.

AOSC OS: Featured Items
-----------------------

In the past two weeks, besides routine maintenance on [AOSC OS](https://aosc.io/downloads), community developers also introduced many updates and fixes, as well as the accompanying applications and components. We hope that these updates will bring you enjoyment and productivity.

### oma 1.2 Released

Recently, community developer [Mag Mell](https://github.com/eatradish) has released oma version 1.2 with several new features:

- Much improved error output and debug logging, allowing for easier troubleshooting by users and developers alike.
- New `--sysroot=` parameter to manager other AOSC OS installations on your devices.

With the 1.2 release, we have also decided to rename Omakase as oma. "Omakase" was really a misnomer, previously used by our initial implementation, which was a Nix-like manifest-driven package manager (like how the chef assembles your meal per their specification); the current implementation is a much conservative one, working similarly to APT.

> Well, so what does oma stand for? Who knows! Let us know if you have any ideas.

oma 1.2 is now available in AOSC OS's stable repository, enjoy!

### Stayin' Alive: A New Dual Loongson 3B4000 Server to Bolster AOSC OS Maintenance

In recent years, the LoongArch instruction set architecture has gradually replaced MIPS to drive Loongson's processor cores. However, many Loongson users and enthusiasts still have MIPS-based 1000 - 4000 generation Loongson devices on hand, even ones built around the ancient Loongson 2F processor (such as Lemote's YeeLoong 8089 netbook).

Our community distributions still support these MIPS-based Loongson devices and plan to continue offering support in the coming years. Our AOSC OS mainline distribution supports Loongson 3 of the 1000 - 4000 generations; Afterglow, our distribution for legacy devices, supports Loongson 2F platforms. However, as open source software updates are frequent and the distribution code base continues to grow, our only MIPS Loongson build server is beginning to struggle.

![Our recently acquired dual 3B4000 motherboard.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/3b4000.jpg)

To alleviate this computational shortfall, we called a crowdsourcing project to build our new dual 3B4000 server. Thanks to the generosity of our community members, we managed to source all parts and funds necessary in just a day. While the parts are still on the way, we plan to assemble the server and put it into use in the coming week. This new server will continue to support AOSC OS and Afterglow maintenance for this architecture.

### Updates from the Frontier: Mainlining LoongArch

Earlier, we have initiated the effort to merge the LoongArch port AOSC OS from the `frontier` branch to our `stable` branch. In the next few months, we will continue to [review, test, and merge]https://github.com/AOSC-Dev/aosc-os-abbs/pull/4701) the changes between the two branches. The completion of this task marks the LoongArch port as stable.

You may download the experimental LoongArch system release from the [community portal](https://aosc.io/zh-cn/downloads). We look forward to hearing your feedback and welcome your contribution to making our LoongArch port better!

### At a Glance: AOSC OS Updates

#### System Components

A good number of updates made it into AOSC OS in the past two weeks, here are a few items of note:


- [oma](https://github.com/AOSC-Dev/oma) package manager frontend was updated to 1.2.4, introducing new features and fixes (see "oma 1.2 Released" above).
- LLVM runtime and toolchain (`llvm`, `llvm-runtime`; containing Clang, LLDB, LLD, etc.) was updated to 17.0.6, with support for many new architecture features and bug fixes.
- Fcitx 5 (`fcitx5-*`) and RIME input method engine components (`rime-*`) were updated to their newest versions, introducing new features and a fix for system log flooding when using the RIME input methods.
- Discord (`discord`) was update to 0.0.37.
- Docker system and application container manager (`docker`) was updated to 24.0.7.
- Docker Compose multi-container manager (`docker-compose`) was updated to 2.23.3.
- Feishin media streaming service client (`feishin`) was updated to 0.5.2.
- Nano text editor (`nano`) was updated to 7.2 with updated nanorc syntax highlighting collection.
- OpenVPN (`openvpn`) was update to 2.5.2.
- PostgreSQL database suite (`postgresql`) was updated to 13.13 with support for LLVM 17-based JIT engine.
- Rust programming language toolchain (`rustc`) was updated to 1.74.0.
- SuperSlicer 3D printer instruction generator (`superslicer`) was updated to 2.25.9.3 with support for cooling instructions for Prusa printers.
- Telegram instant messaging client (`telegram-desktop`) was updated to 4.12.2.
- hwinfo system hardware viewer (`hwinfo`) was updated to 23.2 with support for LoongArch.
- i3 tiling window manager (`i3`) was updated to 4.23 with support for the "focus workspace" command, as well as other usability and documentation fixes.
- ripgrep high-performance file content search utility (`ripgrep`) was updated to 14.0.3.
- strace program debugger (`strace`) was updated to 6.5 with support for LoongArch.
- Introduced automatic reloading support for binary translators and emulators (Wine, Mono, and Qemu user emulator, etc.), these tools should now work right away after installation without rebooting.
- Fixes an issue in the Evolution mail client (`evolution`) where a recent update to the WebKitGTK+ webpage rendering engine resulted in incorrect content height.
- Fixes an issue where Pytest (`pytest`) fails to run due to missing dependencies.

**New Packages**

We introduced a few packages into the AOSC OS repository in the past two weeks:

- `iniconfig`: A small and simple INI-file parser module for Python.
- `libicns`: Library and tools for manipulating Macintosh .icns files.
- `libnvme`: Library for NVMe protocol definition.

**Contributors**

Thank you to our colleagues who helped maintain AOSC OS (in alphabetical order):

- [salieri](https://github.com/BC204)
- [Henry Chen](https://github.com/chenx97)
- [Mag Mell](https://github.com/eatradish)
- [Felix Yan](https://github.com/felixonmars)
- [德州润华](https://github.com/HouLiXieBuRou)
- [Icenowy Zheng](https://github.com/Icenowy)
- [jiegec](https://github.com/jiegec)
- [Mingcong Bai](https://github.com/MingcongBai)
- [OriginCode](https://github.com/OriginCode)

#### Development Tools

- [ACBS](https://github.com/AOSC-Dev/acbs) package build script, source, and build manager version 20231205 was released. [Zixing Liu](http://github.com/AOSC-Dev/acbs) implemented a `use-url-name` switch for the source code records, allowing packagers to control whether to keep the original file name as recorded in the URL; this version also fixes an issue where dependencies (and thus build orders) for sub-packages were incorrectly calculated.
- [aosc-findupdate](https://github.com/AOSC-Dev/aosc-findupdate) package version checker version 0.4.0 was released. [Felix Yan](https://github.com/felixonmars) fixed an issue where the utility fails to recognise update checking settings following a dependency update; [jiegec](https://github.com/jiegec) introduced the `-U` switch, which makes use of [Ciel](https://github.com/AOSC-Dev/ciel-rs) and [ACBS](https://github.com/AOSC-Dev/acbs) to automatically download source code files and refresh checksums after update checks; [Mag Mell](https://github.com/eatradish) improved error handling logic.
- [Autobuild3](https://github.com/AOSC-Dev/autobuild3) semi-automatic packaging toolkit version 1.7.6 was released. [Mingcong Bai](https://github.com/MingcongBai) fixed an issue where some packages would fail to build due to an unset `TZ` timezone variable (Autobuild3 will now set `TZ=UTC` at the start of each build).
- [mirrormgr](https://github.com/AOSC-Dev/mirrormgr) package repository mirror manager version 0.9.0 was released. [Mag Mell](https://github.com/eatradish) introduced support for refreshing topic repositories.
- [pushpkg](https://github.com/AOSC-Dev/scriptlets/tree/master/pushpkg) package uploading utility version 0+git20231129 was released. [Felix Yan](https://github.com/felixonmars) introduced the `-i` (`--identity-file`) switch, allowing maintainers to specify identity files (private keys) stored in non-standard locations.
- [treevsrepo](https://github.com/AOSC-Dev/treevsrepo) package version difference checker introduced many new features and fixes. [jiegec](https://github.com/jiegec) introduced support for checking versions against testing (topic) repositories and fixed the previously broken Epoch comparison logic, as well as an issue where versions of package variants did not match the target architectures; [Mag Mell](https://github.com/eatradish) fixed an issue where the checker fails to recognise some packages in the repository.
- [jiegec](https://github.com/jiegec) commenced work to implement an automated packaging agent (bot) named [BuildIt!](https://github.com/AOSC-Dev/buildit). Very soon, package maintainers will be able to initiate packge build jobs from Telegram, without the need to log into individual build servers via SSH. This will greatly enhance efficiency and make maintenance work less tedious.

#### Peripheral Projects

- Apple Silicon device booting and management scripts ([asahi-scripts](https://github.com/AOSC-Dev/asahi-scripts)): [Xinhui Yang](https://github.com/Cyanoxygen) implemented a swapfile creation logic and improved partition ID randomisation and recording logic. This should make the first-boot routines more robust, as well as addressing a previous issue where AOSC OS did not have any available swap space after installation - the system should now be more stable and responsive under heavy load.
- Bash basic configuration, ([bash-config](https://github.com/AOSC-Dev/bash-config)), version 0.6.3 was released. [Mingcong Bai](https://github.com/MingcongBai) and [Zixing Liu](https://github.com/liushuyu) rewrote the cd-to-parent-directories shorthand as a dynamic function, which will now allow switching to parent directories up to 16 levels from the current working directory; the executable PATH hashing function was disabled to avoid confusion when a command is available from multiple directories in the executable path (`$PATH`) and Bash refuses to follow the path order recorded in that variable.

### In the Oven

To help test our system updates, we created various "topic" repositories to deliver them to our users and maintainers. The following topic repositories were created earlier this week:

- **Linux Kernel 6.6 (`linux-kernel-6.6`)：** Updates Linux Kernel to the 6.6 branch, enabling new hardware support (enabling ACPI support on RISC-V, introducing LoongArch configuration, etc.) and improving performance (disabling scheduler debugging `CONFIG_DEBUG_PREEMPT` on x86_64, which was enabled by mistake, improving application launch times).
- **Fix-ups for MIPS-based Loongson Systems (`loongson3-fixup-2`)：** Introducing the `update-grub` command to GRUB for MIPS-based Loongson systems (`grub-loongson3`), selecting `loongson` as the default Kernel graphical driver, disabling tcmalloc support for LevelDB to fix RIME input method crashes, etc.
- **End of November Mozilla Survey (`mozilla-survey-20231122`)：** Updates Firefox to 112.0 and Thunderbird to 115.5.0, enabling hardware video encode/decode acceleration for all mainline architectures and introducing OpenH264 codec support, making it possible to make use of audio/video conferencing on architectures with WebRTC support.
- **signing-party (`signing-party-new`)：** Introducing  `signing-party`, useful for PGP signing parties and other social occasions.
- **Yazi terminal file manager (`yazi-new`)：** Introduces Yazi as a new terminal file manager (`yazi`).

Changes from these topics will also make it to our work-in-progress LoongArch port, helping adopting LoongArch as an officially supported architecture.

You may enable and test out the aforementioned updates with the following command:

```
sudo oma topics
```

Should you run into issues while using the topic repositories, please don't hesitate to get in touch for assistance.

Community Updates
-----------------

### Coming Soon: AOSC BBS

![A sneak peak at our new community BBS.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/coffee-break/20231209/imgs/bbs.png)

Two weeks ago, we have set up our community forum (BBS) and designed the basic board layout. We plan to open up the BBS for registration after readying all necessary documentation. The BBS defaults to the Chinese language by default, but comes with English language boards for our friends around the world. The BBS will host all community and project announcements and future bi-weekly issues will also be published there.

We plan to complete the aforementioned preparation by the end of this year.

URL to our new BBS, for your record: https://bbs.aosc.io/

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
