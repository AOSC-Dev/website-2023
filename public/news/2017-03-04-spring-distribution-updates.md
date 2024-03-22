---
categories:
  - news
date: '2017-03-04'
important: false
title: Spring Distribution Updates!
url: /news/2017/03/04/spring-distribution-updates.html
---


Another batch of tarballs are now available for AOSC OS, available to users of the AMD64, ARMv7, ARMv8/AArch64, PowerPC 32/64-bit Big Endian ports. As usual, they contain the newest packages available for AOSC OS, along with some enhancements, changes, and additions:

- New variants, Budgie and i3wm.
- The `root` user is now locked down by default, but you may still enable the `root` user by setting a password for `root`, check out our new [installation guide](https://github.com/AOSC-Dev/aosc-os/wiki) for more information.
- AMD Ryzen support is available (Kernel 4.9.11).

----------------------------

Here below is the default look to the AOSC OS i3wm variant, powered by the i3 window manager, Conky, and i3blocks - a configuration based on Manjaro's i3 edition. This is our first i3wm distribution, so this release may still contain some inconsistency and shortcomings in design - tell us what you think!

![i3wm-desktop](/assets/i/de-preview/i3wm/thumbs/1.png.jpg)

Budgie, the "flagship" desktop environment of the [Solus Project](https://solus-project.com/) - this is their own take on the GNOME desktop experience.

![budgie-desktop](/assets/i/de-preview/budgie/thumbs/4.png.jpg)

Neofetch is now installed with every AOSC OS distribution to provide you with some basic system information - and a chance to show off your distro!

![neofetch](/assets/i/de-preview/lxde/thumbs/7.png.jpg)

----------------------------

You might have noticed that tarballs for MIPS32 are not updated yet, this is because we are currently working on the Kernel port for MIPS32 - and it didn't happen in time for this wave of updates - we will be releasing updates for MIPS32, along with MIPS64, with full mainline Kernel support on Loongson 2E, 2F, and 3A devices - as they are currently our principle target platform for these two ports (having said that, our MIPS ports are still **generic** and **not specific** to Loongson/Godson systems).

----------------------------

Thanks for stopping by, and we wish you a good experience working with AOSC OS!