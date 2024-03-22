---
categories:
  - news
date: '2018-01-05'
important: false
title: AOSC OS End-of-2017 Wave of Updates!
url: /news/2018/01/05/aosc-os-end-of-2017-wave-of-updates.html
---


*First of all, a late Happy New Year...*

So, after two months of radio silence, here's a (huge) batch of updates for AOSC OS - again, now for AMD64, and later for other ports. We have two major objectives for this wave of updates:

- Processing package addition/update requests.
- Introduce Deepin Desktop Environment.

And indeed... We are able to push through with the two objectives:

- Obviously, a full suite of Deepin Desktop Environment and its default applications are now available from the community repository. 
- We have been able to clear out all update requests from the [list](http://pakreq.v2bv.net/).
- 261 new packages have been introduced to the repository as a result of the requests and their dependencies. However, some still [remained](http://pakreq.v2bv.net/) to be processed for various reasons.

*EDIT: One of our community members pointed out that also as a part of this Wave of updates, a large collection of GIS (Geographic Information System/Science) software packages. All names of the packages added could be found [here](https://github.com/AOSC-Dev/aosc-os-abbs/tree/b31df1121e7769c575a888e1137bc07a04bc00fc/extra-gis).*

--------

![aosc-os-deepin-201801](/assets/i/news/aosc-os-deepin-201801.jpg)

AOSC OS running the Deepin Desktop Environment!

--------

*I'm currently on a New Year's trip so I will spare you of long paragraphs of details!*

For the rest of January, we will continue to work on synchronising updates on all our ports (apart from the MIPS ports, for their still questionable state), and to produce a new wave of tarball releases - it's been almost one year since the last batch and it's getting increasingly unpractical to download and update with.

Apart from that I would like to drop a note about the recent Intel (and possibly AMD and ARM) Kernel/Compiler security issue, "Meltdown" and "Spectre". Kernel updates are currently in the works, and will be pushed to the stable channel in 24 hours, as for compilers, they will be made available in roughly the same time frame (LLVM), and parts of them in the upcoming Core 5.1 update (probably the day after).

I will leave a list of recommended sources for you to read up about the details. But for now, enjoy the updates and thank you for your continued support for AOSC OS!

--------

- For a full list of changes, please refer to [here](https://github.com/AOSC-Dev/aosc-os/blob/master/changelogs/201711-201712-changelog.md).
- Meltdown and Spectre related:
    - [Meltdown and Spectre](https://meltdownattack.com/)
    - [Project Zero: Reading privileged memory with a side-channel](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html)
    - [Google Online Security Blog: 
More details about mitigations for the CPU Speculative Execution issue](https://security.googleblog.com/2018/01/more-details-about-mitigations-for-cpu_4.html)
    - [Phoronix: 
More Linux Kernel & GCC Patches Come Out In The Wake Of Spectre+Meltdown](https://www.phoronix.com/scan.php?page=news_item&px=Linux-Kernel-Retpoline-Patches)

--------

— Mingcong Bai