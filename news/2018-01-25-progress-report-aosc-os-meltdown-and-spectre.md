---
categories:
  - news
date: '2018-01-25'
important: true
title: 'Progress Report: AOSC OS, "Meltdown" and "Spectre"'
url: /news/2018/01/25/progress-report-aosc-os-meltdown-and-spectre.html
---


Since our last [progress report](https://aosc.io/news/6972-progress-report-aosc-os-meltdown-and-spectre), the following progress has been accomplished in our effort to mitigate the “Meltdown” and “Spectre” vulnerabilities for our users:

- Browsers. Chromium and Google Chrome 64 (64.0.3282.119), containing fixes for Spectre vulnerabilities, has been made available as a security update.
- Virtualisation. VirtualBox 5.2.6, containing a fix for CVE-2017-5715, a variant of the Spectre vulnerabilities, has been made available as a security update.
- Intel Microcode version 20180108 has been made available as a security update, however, it is warned by Intel that this update could lead to "unexpected reboots" on certain devices. We have decided to provide this update anyway, to make sure maximum patch availability for our users - though if you are encountering issues with this package, please uninstall `intel-ucode`. On the other hand, if you haven't installed this package yet, please do so - though it should install automatically if you have `boot-base` installed.

Please update your AOSC OS as soon as possible.

— Mingcong Bai