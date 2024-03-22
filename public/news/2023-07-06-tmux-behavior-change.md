---
categories:
  - warning
title: "Recent tmux Update May Change Its Default Behaviors"
date: 2023-07-06T16:00:00+08:00
important: false
draft: false
---

Tmux (package name `tmux`) is an open-source terminal multiplexer pre-installed with all AOSC OS distributions.

In a recent update (verson `3.3a`), we introduced a distribution configuration for Tmux which enables mouse mode by default. However, we found that this particular configuration is very unpopular and decided to revert it to upstream default (mouse mode off). This behavior change is introduced with package version 3.3a-1.

If you are an active Tmux user using the default configuration, you may notice the aforementioned behavior change after a system upgrade. To keep mouse mode on after system upgrade, uncomment the following line in tmux's system-wide configuration file `/etc/tmux.conf` as instructed:

```conf
# Turn on mouse mode
#set -g mouse on
```

---

— Camber Huang 
