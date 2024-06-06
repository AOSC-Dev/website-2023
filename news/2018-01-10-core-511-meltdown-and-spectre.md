---
categories:
  - news
date: '2018-01-10'
important: true
title: Core 5.1.1, "Meltdown", and "Spectre"
url: /news/2018/01/10/core-511-meltdown-and-spectre.html
---


For the past several days we have been continuing our work on the mitigation of "Meltdown" and "Spectre" - though at this point, we are focusing on the latter.

One of the more important progress is the release of AOSC OS Core 5.1.1, while containing some bugfixes and updates, comes with an updated GCC (GNU Compiler Collection) containing Clear Linux's [implementation/backport](https://github.com/clearlinux-pkgs/gcc/blob/master/retpoline.patch) of Retpoline  patch set to the 7.2 branch (which we are currently shipping). The patch set has the target to avoid "generating code which contains an indirect
branch that could have its prediction poisoned by an attacker" - as described by an [LLVM contributor](https://reviews.llvm.org/D41723). While it could take some serious reading to fully understand what is going on, this is a step towards a more complete mitigation of possible impacts of the "Spectre" vulnerability.

Apart from that, we have the following updates since our last [report](https://aosc.io/news/4444-daily-progress-report-aosc-os-meltdown-and-spectre):

- Kernels. With the introduction of Retpoline patches to GCC, the 4.14 branch of Kernels ("Mainline" and "Libre") has been rebulit with the patches from [Clear Linux](https://github.com/clearlinux-pkgs/linux) to include similar fixes in the Kernels. No patch had been made available for our 4.9 branch of Kernel yet.
- NVIDIA. A new driver release, version 390.12 has been released to address the Spectre-related vulnerabilities. No statement from NVIDIA about the 340 branch for older cards has been issued, though [question](https://devtalk.nvidia.com/default/topic/1028537/spectre-fix-backport-for-340/) has been raised in the NVIDIA DevTalk Forum.

That's all for now. We'll continue the progress reports in the coming weeks, possibly.

— Mingcong Bai