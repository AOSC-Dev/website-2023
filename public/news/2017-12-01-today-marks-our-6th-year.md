---
categories:
  - news
date: '2017-12-01'
important: false
title: Today... Marks Our 6th Year!
url: /news/2017/12/01/today-marks-our-6th-year.html
---


![banner](/assets/i/news/6th-banner.png)

Once again it is December 1st, 6 years since the night when an idea sparked between two of my friends and I in a middle school dormitory - to make something of our own, something we could be proud of. It started as a "designed in China, and for China" Linux distribution project based on openSUSE: AnthonOS（安同 OS）. Six years since that night our project still stands, bearing the name of AOSC OS - a Linux distribution which targets general usage (your desktop, server, laptop, tablets, etc.), and a strong emphasis on multilingual support and community interaction.

Six years we have stood mostly in silence (well before I elaborate on a hype, partly due to our inability to self-advertise, *giggles*) - though our existence, much like an old Chinese poem, we come down like rains riding the winds of spring, "Silent and soft, it moistens everything". Our contributors, as passionate as they have been to projects of our community, contributions are made to upstream projects either on behalf of the community or on individual basis. [Icenowy Zheng](https://github.com/Icenowy/) is now a long term contributor to the mainlining effort for Allwinner-based ARM devices; [Zixing Liu](https://github.com/liushuyu/), and many others ([me](https://github.com/MingcongBai/) included) continue to provide Simplified Chinese translation enhancements to projects like MATE Desktop, GNOME, and WineHQ; along with multitudes of loose patches to over 50 projects as we push on with the development of AOSC OS. Our year since December of 2016 has been mostly normal, as we continued to embrace the upstream projects which made our work towards AOSC OS possible.

That said, it doesn't mean that we have kept to the old occupations and standards for another year. In our 6th year, we have pushed heavily on the standardisation of our development routines, and a harder push towards quality assurance. The introduction of [Ciel](https://github.com/AOSC-Dev/ciel/) and ACID marked the first step toward reproducible builds and continuous integration - while Ciel provides a tool to initialise, update, and rollback environments, ACID invokes Ciel to continuously create these build environments to build **every single one** of the packages available, and to find all those which failed to build or those in violation of a set of quality assurance requirements defined in [Autobuild3](https://github.com/AOSC-Dev/autobuild3/) - our package building toolkit since 2014.

Along with that, with help from [Dingyuan Wang](https://github.com/gumblex/) and [Zero King](https://github.com/l2dy/) who helped to provide integration of AOSC OS' package catalogue with [Repology](https://repology.org/), so that we could better track our updates - and to reference with other distributions, regarding their build configuration, and in some cases, fixes needed to complete a build, or to produce a working package.

Community interaction has also seen improvements, introduction of new types of requests, `optreq` (Optimisation Request), `updreq` (Update Request), upon the original `pakreq` (Package Request) - users of AOSC OS could now shape the distribution they came to love with suggestions and requests, and we, as packagers/developers, could build AOSC OS to their needs and wishes.

Looking forward, the 7th year presents quite some challenges for our fellow contributors. Since the introduction of monthly update cycles, we have been able to establish a dual-track system of feature-based updates and security/bug-fix updates - however, we have not been able to release monthly wave on time as often as we wished. In addition, our architecture ports (ARM, MIPS, PowerPC alike) had struggled to go in sync with AMD64 since the introduction of this monthly update pattern due to lack of computing power. We will, in the coming year, continue to find the solutions to the issue - as corporate as this sounds, we have yet to have the opportunity to look deeper into this issue.

There are issues we are looking to fix before the end of 2017 though. For example, our system releases have not been updated since February, but we plan on releasing a new wave of system releases later in December - after November's updates are ready (they will come in the first half of December), and that updates are synced among our architectures - unlikely for MIPS 32/64 bits, unfortunately.

With all that in mind, I wish all my friends of the community a happy anniversary - don't overwork yourselves (says man sitting in front his Playstation while writing his post)!

— Mingcong Bai