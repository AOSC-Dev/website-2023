---
categories:
  - warning
title: "[SOLVED] GLib's FAM Module May Cause Stability Issues in Firefox"
date: 2022-01-26T14:58:13-08:00
important: false
---

It recently came to our attention that with the Core 9 update, Firefox suffered
from stability issues. Firefox plugins may often crash, and browser tabs could
crash when dragging and dropping objects. We have since identified that FAM
(File Access Monitoring) module in GLib led to the aforementioned issues, but we
have yet to pin point the cause. Considering the upstream has 
[removed the module](https://gitlab.gnome.org/GNOME/glib/-/commit/7427bb71), we
chose to workaround said issue by turning the FAM module off.

`glib` v2.70.2-1, which includes the fix for the issue, will soon become available
from the stable repository.

---

— Mingcong Bai, Kaiyang Wu
