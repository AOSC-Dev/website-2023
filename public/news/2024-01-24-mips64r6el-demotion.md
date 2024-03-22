---
categories:
  - warning
title: "MIPS64 Release 6 Port (mips64r6el) Demoted As Experimental"
date: 2024-01-24T18:47:12+08:00
important: false
draft: false
---

With the lack of available hardware and serious usability issue after the LLVM
17 update (all Rust programs would fail to build), we have decided to demote the
MIPS64 Release 6 port (`mips64r6el`) to avoid further delays on shipping updates
for primary and secondary architectures.

Following the demotion, we will continue maintaining this port, but with no
guarantees on timely updates. Should you run into issues while using this port,
please [contact us](https://aosc.io/contact) for assistance.

— Mingcong Bai
