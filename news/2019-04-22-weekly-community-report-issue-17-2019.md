---
categories:
  - news
date: '2019-04-22'
important: false
title: 'Weekly Community Report: Issue 17, 2019'
url: /news/2019/04/22/weekly-community-report-issue-17-2019.html
---


End of Cycle (Imminent)!
------------------------

After some four months drowning in updates and rebuilds, the current cycle is now looking to start its one-month freezing period on Tuesday! In the coming month, we will work to smooth out the rough edges (.so dependencies, etc.) and make sure that Stable users will receive a smooth updating experience.

Core 6
------

After nearly a year in delay, [Core 6](https://aosc.io/news#888-re-cap-aoscc-2018) "Fsck" will ship as a part of this coming cycle update. Coming in this major Core update...

- GCC 8.3.1, with many performance and new features from the upstream.
- GNU C Library 2.29, and many other component updates.
- Added `i586` (yes, Pentium-class devices), and Loongson 2F, 3A/B support.
- The `ppc64` port will be specifically optimised for the PowerPC G5 processor - as our PowerPC 32/64-bit Big Endian ports are now built for the PowerPC-based Macintosh computers.

The i586 Port
-------------

The i586, now that we have mentioned it... Will serve as an experimental port, where we try and refactor parts of the AOSC OS dependency tree to make the system lighter to install and run. This will undoubtedly help us as a distribution which ports to newest, as well as vintage and long abadoned devices (from your newest Intel Coffee Lake laptops, to the "Clamshell" iBook G3's).

The reference device for this port will be the 2001 Sony Vaio PCG-C1VP running Windows 2000 (its owner - me - is considering swapping out he motherboard with one from the PCG-C1VN for Windows 9x support). This machine comes with the following (rough) list of hardware:

- Transmeta Crusoe TM5600 @ 600MHz (Hi there Mr. Torvalds!)
- 192MB RAM (16MB eaten by the processors CMS - Code Morphing Software)
- 15GB HDD @ 4200RPM, dual booting Windows and AOSC OS
- 1024x480 LCD

----

![vaio-c1](https://i.imgur.com/Jm3SBj5.jpg)

----

We'll see how it goes over the summer - maybe we'll see it as a demonstration machine at AOSCC 2019!

Taming ACBS
-----------

Our venerable infrastructure contributor and resident Python guru [@gumblex](https://github.com/gumblex) is currently undertaking a massive refactor for our ACBS (Autobuild CI Build System), which our packagers use to build packages daily.

With this factor, we are hoping to see more reliable sequential/batch build support and dependency resolving.

Checksum
--------

Utilising a tool from [@gumblex](https://github.com/gumblex), we have now covered most packages in our [ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs/) and [Core Tree](https://github.com/AOSC-Dev/aosc-os-core/) with SHA256 checksums.

Further more, we have now [made it imperative](https://github.com/AOSC-Dev/acbs/commit/14309140e90d99f41380a432e41c29971dd6e1fa) to include checksum  when packages from a source package/tarball.

Security Update Workflow and AOSA Announcement
----------------------------------------------

Effective next week, we will start posting AOSA (AOSC OS Security Advisory) whenever the updates are ready for all branches. Formerly, AOSAs for the Testing branch will be delayed until it merges with Stable at the end of each cycle. Additionally, security issues that affects both Stable and Testing branches will be announced under a shared AOSA ID, as long as they describe an identical issue.

Furthermore, our contributor [@KexyBiscuit](https://github.com/KexyBiscuit) has offered to work on announcing future advisories in the future - after I have become too busy to write up security reports.

----

— Mingcong Bai