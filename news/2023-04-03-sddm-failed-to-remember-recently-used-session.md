---
categories:
  - warning
title: "[SOLVED] SDDM Does Not Remember Recently Used Session"
date: 2023-04-03T15:43:01+08:00
important: true
draft: false
---

It has recently came to our attention that SDDM default to the first session type available and was unable to remember the last used session. If you have another package containing X11 session configuration(s), especially those ranked higher alphabetically than "Plasma", you may find that SDDM would start a desktop session that is not consistent with the last one you have used.

This issue has been resolved with a recent update, please update `sddm` to `0.19.0-7` or newer.

---

— Cyan
