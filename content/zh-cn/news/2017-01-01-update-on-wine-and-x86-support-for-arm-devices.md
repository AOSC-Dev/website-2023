---
categories:
  - news
date: '2017-01-01'
important: false
title: Update on Wine and x86 Support for ARM Devices
---


Icenowy Zheng just made an update on the `wine` package for ARMv7 (`armel`), fixing some runtime issues introduced with an earlier commit. To prove its usability, she attempted to build a version of Notepad++ for her tablet running AOSC OS...

<!-- ![wine-on-armel](/assets/news/wine-on-armel.jpg) -->

Along with the update, Zheng is currently marking all `optenv32`, our i686/32-bit x86 runtime environment as architectural neutral packages - in the future, all of our AOSC OS ports will be able to run i686 applications (Wine or Linux Native) with the help of Qemu User Mode Emulation. Keep posted for updates!
