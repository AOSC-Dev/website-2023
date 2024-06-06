---
categories:
  - news
date: '2017-06-29'
important: true
title: 'AOSA-2017-0043: Update Linux Kernel'
url: /news/2017/06/29/aosa-2017-0043-update-linux-kernel.html
---


Please update your `linux+kernel` package so that your Linux Kernel version is `4.11.5` or higher; or update your `linux+kernel+lts` package so that your Linux Kernel on Long-Term Support branch is version `4.9.32` or higher.

A security vulnerability was reported recently that...

*Until recently, /dev/snd/timer driver was prone to a data race, which led to uninitialized memory from the kernel heap being copied to the userspace.*

And this was assigned [CVE-2017-10000380](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000380).

Relevant documentations:

- [Patch 1/2](https://github.com/torvalds/linux/commit/d11662f4f798b50d8c8743f433842c3e40fe3378)
- [Patch 2/2](https://github.com/torvalds/linux/commit/ba3021b2c79b2fa9114f92790a99deb27a65b728)