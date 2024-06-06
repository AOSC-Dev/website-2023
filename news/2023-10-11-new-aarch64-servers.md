---
categories:
  - news
title: "Two New AArch64 Build Servers Deployed for AOSC OS Maintenance"
date: 2023-10-11T13:00:00+08:00
important: false
draft: false
---

![Two new servers deployed for AOSC OS AArch64 maintenance.](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231011/imgs/new-aarch64-servers.jpg)

After [upgrading our AMD64 build server](https://wiki.aosc.io/zh/community/crowdsourcing/epyc-22333-upgrade-2023/) earlier this year, our computational resources for maintaining the AArch64 (`arm64`) port became relatively limited. Added with limited Internet bandwidth and storage I/O performance, the current build server could no longer keep up with the aforementioned build server for AMD64 (`amd64`). This slowed down compilation, packaging, and testing for our Primary (tier 1) archiectures.

In June, a friend from the community donated two high-performance AArch64 servers - one with a 64-core Phytium FT2000/64 processor and the other with a 64-core Kunpeng 920 processor. Shortly after, with support from friends of the community, we [successfully crowdsourced some additional essential parts](https://wiki.aosc.io/zh/community/crowdsourcing/new-aarch64-server-parts/) and got sponsorship for colocation.

As of today, these servers are now [live and deployed](https://github.com/AOSC-Dev/Buildbots/compare/588d37621c6d0528db82a37306540230445687ad...630b94a078d4803334ed6329ff028ff3ec352ff4), accelerating and easing maintenance for AOSC OS's AArch64 port. Thank you for all your support!
