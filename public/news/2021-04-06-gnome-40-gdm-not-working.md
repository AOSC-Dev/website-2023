---
categories:
  - warning
title: "[SOLVED] GDM Not Working on GNOME 40"
date: 2021-04-06T18:34:00+08:00
important: false
---

The GNOME 40 update is now available for testing via the `gnome-40` topic. You may enable this topic in
[ATM](https://github.com/AOSC-Dev/atm/) to receive the updates. However, GDM would fail to start due to
incorrect PAM authentication configuration. You may use LightDM or SDDM for now as an workaround, and
start GNOME 40 via the "GNOME" / "GNOME on Xorg" session.

We will release a fix for GDM soon to address this issue.

----

2021-04-07 Update
-----------------

The following updates are now available to address the issue above:

    gnome-40-main amd64
    ^ [gdm](https://packages.aosc.io/packages/gdm) 40~rc ⇒ 40.0
    ^ [gdm-dbg](https://packages.aosc.io/packages/gdm-dbg) 40~rc ⇒ 40.0

----

— Jack Wu (Original Author: Mingcong Bai)
