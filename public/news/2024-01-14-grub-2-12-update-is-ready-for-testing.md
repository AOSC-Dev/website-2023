---
categories:
  - warning
title: "GRUB 2.12 Now Available for Testing"
date: 2024-01-14T18:47:12+08:00
important: true
draft: false
---

Dear Users and Maintainers:

GRUB 2.12 has recently been released and we have improved our packaging for your testing. As GRUB is a key and fundamental system component, your testing and feedback on different setups will be much appreciated (such as LVM and LUKS partition layouts).

To test GRUB 2.12, use the following command:

```sh
oma topics
```

Toggle the testing repository for `grub-2.12`, save your changes and exit.

Please note that, shold and error occur during installation, please report the error output right away and note any particularities in your setups that may have caused the issue (such as LVM/LUKS usage and EFI system partition, etc.). If you run into boot failure, please download [LiveKit](https://aosc.io/downloads) to rescue.

Thank you in advance for your attention.

— Cyan
