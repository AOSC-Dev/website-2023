---
categories:
  - news
date: '2017-02-06'
title: 'AOSA-2017-0007: Update Flatpak'
---


Please update your `flatpak` package to version `0.8.1`.

A recently released version of Flatpak have addressed the following security vulnerability:

*"Flatpak now uses seccomp to disallow the TIOCSTI ioctl in the sandbox,
which works around the possibility to inject text on the controlling
tty ([CVE-2017-5226](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5226))."*

Relevant documentation:

- [Original announcement](https://github.com/flatpak/flatpak/releases/tag/0.8.1).