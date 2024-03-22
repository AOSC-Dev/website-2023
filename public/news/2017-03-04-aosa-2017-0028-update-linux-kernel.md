---
categories:
  - news
date: '2017-03-04'
important: true
title: 'AOSA-2017-0028: Update Linux Kernel'
url: /news/2017/03/04/aosa-2017-0028-update-linux-kernel.html
---


Please update your `linux+kernel` to versionf `69`.

A security vulnerability was disclosed for the Linux Kernel:

*This is an announcement about `CVE-2017-6074` [1] which is a double-free
vulnerability I found in the Linux kernel. It can be exploited to gain
kernel code execution from an unprivileged processes.*

*The oldest version that was checked is 2.6.18 (Sep 2006), which is
vulnerable. However, the bug was introduced before that, probably in
the first release with DCCP support (2.6.14, Oct 2005).*

*The kernel needs to be built with `CONFIG_IP_DCCP` for the vulnerability
to be present. A lot of modern distributions enable this option by
default.*

And was assigned [CVE-2017-6074](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6074).

Relevant documentation:

- [Original announcement](http://seclists.org/oss-sec/2017/q1/471).