---
categories:
  - warning
title: "Cutefish Configuration Files May Interfere with KDE User Configurations"
date: 2021-09-04T16:34:31+08:00
important: false
---

Users who would like to test Cutefish (topic: cutefish-survey-new) please be advised:

Currently, Cutefish contains configuration files that conflict with KDE.
Moreover, since the configuration files are shared with KDE in the home directory,
it is not possible for our package manager to handle this conflict.
Please backup your KDE configuration files in `~/.config` before installing Cutefish.

---

— Mag Mell, Mingcong Bai, OriginCode
