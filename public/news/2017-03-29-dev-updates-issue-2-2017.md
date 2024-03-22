---
categories:
  - news
date: '2017-03-29'
important: false
title: 'Dev. Updates (Issue #2, 2017)'
url: /news/2017/03/29/dev-updates-issue-2-2017.html
---


March is approaching its end, and thus time for the second issue of AOSC development update. In general, this has been a relatively quiet period - for our developers are experiencing time constraints, things are recently picking up again so no worries.

What happened with AOSC OS?
---------------------------

There have been general updates and security fixes for AOSC OS, but not to neglect the recent GNOME update. GNOME 3.24 is already made available by the time of writing.

Our MIPS ports has gain extra care from Junde Yhi and Jiaxun Yang, our new developer. Jiaxun Yang has been able to fix the Silicon Motion display driver used by various YeeLoong laptop models - which should boost desktop performance significantly. Junde Yhi has been working on "mainline" or "standard" Kernels (mainline and long-term support flavours) for both the MIPS32el and MIPS64el ports, and they are both tested on Loongson devices running on 2E/2F/3A series processors. Junde Yhi has also said that we could be expecting GNOME 3.24 on MIPS64el in the coming month. Tarballs will be released for the two architectures in the coming month.

Our ARM ports however, are experiencing a reduction in release line-up. Icenowy Zheng, our ARMv7 and ARMv8 maintainer has decided to drop a large amount of device-specific images - and now only releasing those tested by herself and community members - those images with no real world testing conducted are dropped. If you have an ARM device that you would like to run AOSC OS on, please get in contact with us at the `#aosc` channel on Freenode, or shoot an e-mail at Icenowy at `icenowy at aosc dot io`.

Infrastructure changes
----------------------

Several website changes has been put in place since Issue #1:

- The "People" page is added to the Community Portal to display our (current and historic) developers and contributors, where their homepages are showcased.
- AOSC WebMail, "Hermes" is now online, thanks to Howard Xiao, or ["dargasea"](https://github.com/dargasea) - this mail service is available to all AOSC developers and contributors.

What you could expect before Issue #3
-------------------------------------

In the coming months, as AOSCC closes in, we will start to work on a feature list for AOSC OS Core 5, and begin preparation for AOSCC 2017 - which will be held in Guangzhou, in July of this year.

There will be extra additions to our community infrastucture:

- Package information site, currently worked on by Dingyuan Wang, or ["gumblex"](https://github.com/https://github.com/gumblex).
- Mirror status site, worked on by Xiaoxing Ye, or ["yexiaoxing"](https://github.com/yexiaoxing).

But before which, we really don't have much else to tell you. So stay tuned for the third issue, and thanks for coming by.