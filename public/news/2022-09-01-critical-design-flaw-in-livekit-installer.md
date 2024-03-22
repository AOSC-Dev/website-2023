---
categories:
  - warning
title: "Critical Design Flaw in LiveKit Installer"
date: 2022-08-31T23:12:55-07:00
important: true
draft: false
---

We have discovered a critical design flaw in our current LiveKit Installer -
DeployKit ([aoscdk-rs](https://github.com/AOSC-Dev/aoscdk-rs)). This issue could
lead to destruction of metadata for devices without partition maps, which is
especially fatal for LUKS and MD-based soft RAID devices, rendering data
inaccessible on these devices.

A new LiveKit release will be made available very soon. **Consider LiveKit
releases before 20220901 dangerous and unusable.**

---

— Mingcong Bai
