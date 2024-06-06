---
categories:
  - news
date: '2018-01-06'
important: true
title: 'Progress Report: AOSC OS, "Meltdown" and "Spectre"'
url: /news/2018/01/06/progress-report-aosc-os-meltdown-and-spectre.html
---


It's been more than 24 hours since our last post, and I would like to offer an as-is progress report on our fixes for the "Meltdown" and "Spectre" bug, affecting Intel - potentially AMD and some ARM processors. To make this easy to read, I'll list everything known at this point in bullet points:

- Linux Kernel fixes. We have been able to produce a working build on the 4.9 branch (LTS current), with backported fixes; while for our 4.14 branch (Main), we are having some issues with DKMS, where kernel modules would fail to build indicating missing `objtool`. The issue with 4.14 is known to be a result of an added feature between 4.14.7 and 4.14.11 (for some reason, on a patch channel?), and we are currently working on a finalised solution.
- Browsers. At this moment, not to be a "shill", but we would not recommend any Web browser **but Firefox**. At this point, only Firefox 57.0.4 was released containing fixes for the "Spectre" security issue. Google has announced that they will make a release with the fixes on the 23rd. Nothing is known with the other browsers.
- Compilers. GCC and LLVM/Clang have already implemented and proposed at least a partial fix, but neither have finalised a patch set for the current stable branch. GCC's fix is not yet mainline, and LLVM/Clang has a patch for the current `master`.
- Qemu and LibVirt. Qemu [stated](https://www.qemu.org/2018/01/04/spectre/) that "there are no public patches to KVM that expose the new CPUID bits and MSRs to the virtual machines, therefore there is no urgent need to update QEMU". However, version 2.11.1 with "Spectre" fixes should be released in the coming days. We are yet to be able to pinpoint the exact fix commit for LibVirt - however, a security advisory was [released by Red Hat](https://access.redhat.com/errata/RHSA-2018:0029).
- Microcode updates. We have not been able to observe any updates from Intel or AMD, we will notify you with a [security mail](mailto:security@lists.aosc.io) - if you haven't subscribed to our security notification list, please do so [here](https://lists.aosc.io/sympa/info/security).

At this point, only the Firefox 57.0.4 update has been pushed to the stable repository. I will post another news article here on the Portal tomorrow with (hopefully) some progress.

Please update your AOSC OS at your earliest convenience, and adjust your software selection (highly recommended).

— Mingcong Bai