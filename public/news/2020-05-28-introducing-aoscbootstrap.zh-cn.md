---
categories:
  - news
title: "Introducing AOSCBootstrap"
date: 2020-05-28T18:06:22-06:00
important: false
---

As you may have known from [our recent news](https://aosc.io/news/posts/2020-05-27-new-tarballs-available-for-amd64/), all future tarballs will be generated with [AOSCBootstrap](https://github.com/AOSC-Dev/aoscbootstrap/). It is inspired by [`debootstrap`](https://salsa.debian.org/installer-team/debootstrap) and is written in Perl.

We previously tried to adapt `debootstrap` and quickly found that it was unsuitable for AOSC OS. For instance, it does not support the multi-architecture structure, which is used by AOSC OS to avoid duplicate architecture-independent (`noarch`) packages. Logically, we wrote our own implementation.

You may find more information on using AOSCBootstrap on our [Wiki](https://wiki.aosc.io/software/00004-aoscbootstrap).

---

— Zixing Liu
