---
categories:
  - warning
title: "[SOLVED] fwupd May Not Be Able to Update and Install Device Firmwares"
date: 2021-06-11T14:09:42+08:00
important: false
---

Currently `fwupd` is unable to use the LVFS (Linux Vendor Firmware Service)
update checking and installation feature due to missing `libsmbios_c.so.2`.
We will release a fix as soon as possible.

----

2021-06-16 Update
-----------------

The fix has already been merged into the stable repository.

----

— Jack Wu, Mingcong Bai
