---
categories:
  - warning
title: "Critical Shadow Security Fix"
date: 2022-07-02T17:14:19-07:00
important: true
draft: false
---

It has recently came to our attention that `/etc/shadow` in all recent AOSC OS
installations are [readable for all users](https://github.com/AOSC-Dev/aosc-os-abbs/issues/4045).
To address this critical security vulnerability, we have now released a
security update.

Please ensure that your system is updated to `shadow >= 4.10-1`.

---

— Mingcong Bai
