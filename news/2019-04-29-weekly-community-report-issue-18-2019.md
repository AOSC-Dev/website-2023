---
categories:
  - news
date: '2019-04-29'
important: false
title: 'Weekly Community Report: Issue 18, 2019'
url: /news/2019/04/29/weekly-community-report-issue-18-2019.html
---


AOSCC 2019 - It's Happening!
----------------------------

We are happy to announce that, after much searching, we have ourselves a host university for the AOSCC 2019 events!

The AOSCC 2019 will take place in University of Science and Technology of China - in Hefei, China, on July 12 - 14th. The events details and venues are kindly negotiated and made available by [LUG@USTC](https://lug.ustc.edu.cn/).

Freezing Period
---------------

On April 23rd, we have officially entered a month of freezing period for AOSC OS's Testing branch. For the meanwhile, we are working to sync all package updates on the Testing branch, across all currently active ports.

If you are using the Stable branch, you will continue to receive security and [exceptional](https://wiki.aosc.io/developer/packaging/cycle-exceptions) updates.

AGX Xavier!
-----------

To continue the tradition of mis-using NVIDIA's development boards, we have obtained an NVIDIA Jetson AGX Xavier Developer Kit several days back. "JellyXavier," as it is named as a BuildBot, is now available for all [dev-pubkeys](https://github.com/AOSC-Dev/dev-pubkeys/)-registered AOSC developers at Relay port 24444.

This build host will be dedicated to the building of AArch64 (`arm64`) packages. Formerly, both AArch64 (`arm64`) and ARMv7 (`armel`) packages are built on a shared BuildBot - an NVIDIA Jetson TX1 Developer Kit, with a measly 4GiB of RAM. In the recent cycles, we have been constantly plagued by this insufficient amount of RAM - and this in turn has resulted in the two ARM ports lagging behind the other architectures.

The AGX Xavier, however, comes with 8 very fast NVIDIA "Carmel" cores, and 16GiB of RAM. Registering as the second fastest out of [all Relay BuildBots](https://wiki.aosc.io/developer/infrastructure/buildbots/). This hardware addition will undoubtedly help us catch up (and eventually enrich) both ARM ports.

As for the Jetson TX1, it will now be dedicated to build ARMv7 packages (which of course, is much more available for this task).

![xavier-in-position](https://i.imgur.com/MGsn8Cc.jpg)
*Xavier in the Madison, WI. "Engine Room".*

AOSC - How Moe Is... She?
-------------------------

Over the past weekend, community member [Shimizu Saki (清水 紗季)](https://github.com/eatradish) initiated the [aosc-moe](https://github.com/AOSC-Dev/aosc-moe) project - to create a "Moe," anime-inspired character to represent our community.

Confused? This is quite similar to the concept of an [OS-tan](https://en.wikipedia.org/wiki/OS-tan) - have a good read!

At the time of writing, more details about the character's name and other features are being finalised - and hopefully we will see her here on the Portal soon.

Progess Report on the i586 Port
-------------------------------

At the time of writing, we have a bootable copy of AOSC OS i586 port! The port now contains packages needed for a "Base" variant tarball, and is now working towards a full-fledged desktop experience.

The port is currently tested to run on a Sony PCG-C1VN sub-notebook. The sub-notebook is powered by a 600MHz Transmeta Crusoe processor, with 192MiB of RAM and 7GiB of HDD space made available for AOSC OS. The sub-notebook dual boots Windows Me - for my personal entertainment needs and a rudimentary test for GRUB functionalities.

I am currently working to create a refined Kernel config for the port. At present, the port will boot and login with a memory footprint of approximately 20MiB. Not bad, if I may say so myself - but there are space for improvement, as we move more features out of the Kernel image, and built as modules. Having based our Kernel config on the AMD64 port's, we have much to cut down.

And finally, a video recording of the computer running a WindowMaker session.

{{<youtube SU-vEjBLYWY>}}

The AOSC OS/Retro Project
-------------------------

With the i586 port going along, we have also started work on creating a set of visual designs for our OS/Retro family of ports. This family of ports will contain support deprecated and outdated architectures, such as i586 and the big endian PowerPC 32/64-bit devices. To better adapt to these older devices, system features and dependencies will be cut down, resulting in smaller install sizes and more reasonable performance (compared to the current PowerPC ports, which shares the same build configuration as all other "mainline" ports).

The logo design was initially made by community member [Neruthes](https://github.com/neruthes), and further modifications made by me.

![poster](https://i.imgur.com/WBbscw7.jpg)
*Poster, "20th Century, Millennium, Present."*

![logo](https://i.imgur.com/rvRthLX.png)
*Logo, full colour, tilted.*

![logo16](https://i.imgur.com/hUdq5nB.png)
*Logo, 16-colour.*

----

— Mingcong Bai, with regards.