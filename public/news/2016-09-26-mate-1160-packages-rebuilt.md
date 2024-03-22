---
categories:
  - news
date: '2016-09-26'
important: true
title: MATE 1.16.0 Packages Rebuilt
url: /news/2016/09/26/mate-1160-packages-rebuilt.html
---


With the GNOME 3.22 update yesterday, you may experience the following issues with MATE Desktop:

- When dragging icons on the desktop, the icon remains in the same location, while another "shadow" is moved to its new location.
- It is not possible to change wallpapers without killing the `caja` process or re-login.

This is due to a design in MATE 1.16.0's code (in `mate-desktop` and `caja`) that default behavior on the desktop is chosen at build time - depending on the GTK+ version available in the build environment.

So I have just rebuilt all MATE packages against the newest GTK+ 3.22 libraries - and re-versioned all MATE packages to `1.16.0-1` - the problems listed above should be resolved with this set of updates.

— Mingcong (Jeff) Bai