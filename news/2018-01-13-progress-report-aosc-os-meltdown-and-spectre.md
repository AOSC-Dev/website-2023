---
categories:
  - news
date: '2018-01-13'
important: true
title: 'Progress Report: AOSC OS, "Meltdown" and "Spectre"'
url: /news/2018/01/13/progress-report-aosc-os-meltdown-and-spectre.html
---


Since our last [progress report](https://aosc.io/news/1115-core-511-meltdown-and-spectre), the following progress has been accomplished in our effort to mitigate the "Meltdown" and "Spectre" vulnerabilities for our users:

- Browsers. With the recently released WebKit2GTK+ 2.18.5, which addressed ["Spectre"-related issues](https://webkitgtk.org/security/WSA-2018-0001.html) - at the present moment, it should be safe to use browsers and applications based on this engine: Midori, Epiphany (GNOME Web), Yelp (GNOME Help/Manual Browser), etc.
- Microcode. Intel has released version 20180108 of their Microcode update package to further the mitigation of both vulnerabilities. However, there are reports announced by [Lenovo](https://pcsupport.lenovo.com/us/en/product_security/ps500151) and [Intel](https://newsroom.intel.com/news/intel-security-issue-update-addressing-reboot-issues/) regarding the update resulting in unexpected reboots. Please notify us if you encountered such issue.
- Applications. Wireshark has recently released version 2.4.4 which mitigated one of the variants of "Spectre", Kernel-Side Attack.

Please update your AOSC OS as soon as possible.

— Mingcong Bai