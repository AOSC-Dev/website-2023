---
categories:
  - news
date: '2016-09-27'
important: true
title: Fixes Now Available for GNOME Shell 3.22
url: /news/2016/09/27/fixes-now-available-for-gnome-shell-322.html
---


Users who have updated to GNOME 3.22 recently has reported that they were unable to enable any of the extensions provided by `gnome-shell-extensions` in GNOME Tweak Tool.

This situation is now fixed with the following updates:

- `gnome-shell` version `3.22.0-1`;
- `mutter` version `3.22.0-2`;

A Linux Kernel update:

- `linux-kernel-4.7.5` version `4.7.5`, installed as a dependency to `linux+kernel` version `51`;

Has also been issued as an attempt to fix issue [#404](https://github.com/AOSC-Dev/aosc-os-abbs/issues/404): GNOME Shell crashes when attempting to change screen configurations on a Dell Vostro 14 with a Intel "Skylake" processor, and display artifacts found on both external and internal screens.