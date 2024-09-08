---
categories:
  - news
title: New AOSC OS Tarballs Available for AMD64 (x86_64)
date: '2020-05-27'
important: false
---

It's been over a year since we last updated our AOSC OS releases, and it's about time we changed that! This batch of releases contains the newest stable packages from the [Winter Cycle](https://aosc.io/news/posts/2020-05-03-winter-cycle-complete/) along with a large amount of [package quality](https://packages.aosc.io/qa/) and quality-of-life improvements.

![kde](https://aosc.io/img/de-preview/kde/2.png)
A screenshot from our latest KDE Plasma tarball release.

NVIDIA-Enabled Tarballs
-----------------------

For more than a decade, despite [Nouveau](https://nouveau.freedesktop.org/wiki/)'s best efforts, running Linux on machines with NVIDIA graphics is still a major pain. Issues ranges from inefficient power management, degraded performance, to stability issues. We commend their effort, but for users wishing to run their systems reliably, NVIDIA's proprietary Unix Drivers still provides a superior desktop experience.

Therefore, with this batch of AMD64 (x86_64) tarballs (in partcular, those bundled with desktop environments), extra tarballs pre-installed with proprietary NVIDIA drivers are made available. Each desktop tarball comes with *three* NVIDIA-enabled tarballs, each designed for a different range of NVIDIA graphics cards:

- NVIDIA Mainline (`aosc-os_${variant}+nvidia_${date}.tar.xz`): For NVIDIA GeForce 600 series (GT600, GTX600, etc.) series, their equivalent Quadro series, and above.
- NVIDIA 390.* (`aosc-os_${variant}+nvidia390_${date}.tar.xz`): For NVIDIA GeForce 400 series (GT400, GTX400, etc.) series, their equivalent Quadro series, and above.
- NVIDIA 340.* (`aosc-os_${variant}+nvidia340_${date}.tar.xz`): For NVIDIA GeForce 8000 series, their equivalent Quadro series, and above.

For a full list of devices supported by the aforementioned NVIDIA Unix Driver series, please refer to their [Unix Drivers](https://www.nvidia.com/en-us/drivers/unix/) page.

_Note: By downloading AOSC OS preloaded with proprietary NVIDIA Unix Drivers (variants suffixed with +nvidia, +nvidia340, or +nvidia+390), you agree to the [LICENSE FOR CUSTOMER USE OF NVIDIA GEFORCE SOFTWARE](https://www.nvidia.com/en-us/drivers/geforce-license/), also enclosed within the relevant AOSC OS distributions._

Automated Tarball Generation
----------------------------

From now on, all system releases (tarballs, images, etc.) will be generated with our new [aoscbootstrap](https://github.com/AOSC-Dev/aoscbootstrap/) scripts. This replaces the old method where we used a hand crafted [`stub`](https://releases.aosc.io/os-amd64/stub/) tarball as the basis for release generation. By doing so, our system releases are now fully reproducible and free of any leftover artifacts.

Watch out for an upcoming news post detailing this new tool, and how it may benefit you as a new way to deploy AOSC OS.

AArch64?
--------

We are currently working on a new batch of AArch64 images and tarballs, which will now cover all desktop and non-desktop variants. Expect new releases to arrive this weekend at the latest.

---

— Mingcong Bai
