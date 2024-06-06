---
categories:
  - warning
title: "Recent Kernel Update May Break Virtual Machines on Intel 11th Gen (or Newer) Platforms"
date: 2022-08-26T11:49:37-07:00
important: true
draft: false
---

The Kernel 5.19.3 update, which recently made available, may result in boot
failures with virtual machines using BIOS/UEFI CSM boot modes. This issue has
been reproduced on Qemu and VirtualBox. In some cases, it may also result in
the host system freezing.

Based on our preliminary investigation, this issue is possibly resulted from
the Intel IBT (Indirect Branch Tracking) feature, enabled with this Kernel
update. This feature is an effort to improve platform security with newer Intel
processors. The aforementioned issue has been fixed in Kernel 5.19.4 update,
which we will make available in the immediate future (see Reference 3).

In the mean time, you may workaround this issue by appending the `ibt=off`
Kernel parameter. To do so, please edit `/etc/default/grub` with superuser
permission. For instance:

```
sudo nano /etc/default/grub
```

On the line starting with `GRUB_CMDLINE_LINUX_DEFAULT=`, append `ibt=off`
between the quotation marks. Please take care to separate this parameter with
others with one or more spaces. As follows:

GRUB_CMDLINE_LINUX_DEFAULT="quiet rw rd.auto rd.auto=1 splash ibt=off"

After which, execute:

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

And reboot your device to apply changes.

---

References:

1. [User Report](https://bbs.archlinux.org/viewtopic.php?id=276699) on the Arch Linux forum (bug report attached within).
2. [Upstream Kernel bug report](https://bugzilla.kernel.org/show_bug.cgi?id=216332) (virtual machine boot failure).
3. Upstream Kernel patches ([1](https://lore.kernel.org/lkml/20220823080128.867380224@linuxfoundation.org/), [2](https://lore.kernel.org/lkml/20220823080128.907850538@linuxfoundation.org/)）.

---

— Mingcong Bai
