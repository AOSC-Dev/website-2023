---
categories:
  - news
date: '2016-10-21'
important: true
title: 'AOSA-2016-0019: update Linux Kernel to 4.8.3'
url: /news/2016/10/21/aosa-2016-0019-update-linux-kernel-to-483.html
---


Please update your `linux+kernel` package to version `55` (which depends on `linux-kernel-4.8.3`).

A severe security vulnerability was disclosed for Linux Kernel versions <= 4.8.2 that:

*"A race condition was found in the way the Linux kernel's memory subsystem handled the copy-on-write (COW) breakage of private read-only memory mappings. An unprivileged local user could use this flaw to gain write access to otherwise read-only memory mappings and thus increase their privileges on the system."*

Which was consequently assigned with a CVE:

[CVE-2016-5195](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-5195).

Relevant documentation:

- [Dirty COW](http://dirtycow.ninja/)
- [Dirty COW Vulnerability Details](https://github.com/dirtycow/dirtycow.github.io/wiki/VulnerabilityDetails)
- [Original ABBS Tree Issue #476 (with an demonstration of the vulnerability)](https://github.com/AOSC-Dev/aosc-os-abbs/issues/476)