---
categories:
  - news
title: Suspending Stale AOSC OS Ports and Initiating the AOSC OS/Retro Project
date: '2020-05-03'
important: true
---

Effective April 27, 2020, AOSC OS has suspended development on various stale ports, including the following:

- ARMv7 (`armel`), for ARMv7 devices with hardware floating-point unit and support for the Neon SIMD architecture extension.
- PowerPC 32-bit - Big Endian (`powerpc`), for PowerPC G3/G4-based Apple Macintosh computers.
- PowerPC 64-bit - Big Endian (`ppc64`), for PowerPC G5-based Apple Macintosh computers.
- RISC-V 64-bit (`riscv64`), for RISC-V 64-bit devices of the RV64GC variant.

Do note however, this does not mean that we are abandoning these ports. These ports are currently in a poor maintenance shape, and we would like to reboot most of these ports as part of our AOSC OS/Retro family - with a slower (but stable) maintenance lifecycle, and a limited set of features enabled for selected components. Please keep reading for more details.

For ARMv7 users, we will continue to provide security updates for existing users. We are also working on measures to aid transition as we reboot the ARMv7 port as a Retro distribution.

For users of the big endian PowerPC ports however, we encourage that you stop using AOSC OS before the reboot in interest of security and usability.

In terms of the RISC-V port, we will suspend the port until our developers could obtain more affordable devices for building and testing. As the $999 HiFive Unleashed stands as the sole viable option for this purpose (and that it is quite slow for the job), it's difficult to proceed further with the port.

Now, let's dive into what differences you should expect as we transition these ports as AOSC OS/Retro distributions.

AOSC OS/Retro: An Overview
--------------------------

As the name may suggest, AOSC OS/Retro, unlike AOSC OS, targets legacy and vintage devices. Also unlike AOSC OS, the Retro distributions are strips down many features from its packages and slims down the dependency tree in order to lower system requirements. Besides these changes, AOSC OS/Retro is still for the most part functionally and, in terms of user experience, compatible with its mainline counterpart. Yes, you will see 1995 devices running modern, 2020 software (yes, also systemd, though very well stripped down) - and running well at that.

![aosc-os-retro](https://i.imgur.com/Ofyaz8C.png)
The AOSC OS/Retro logo.

----

Between now and the end of June, we intend to release Retro distributions for the following architectures:

- ARMv5te/ARMv6 (`armel`), for devices with ARMv5te-compatible processors and above. For devices with hardware floating-point unit (for instance, the original Raspberry Pi), optimised packages will be shipped in an overlay repository.
- ARMv7 (`armhf`), for devices with ARMv7-compatible processors and above, requires hardware floating-point unit and support for the Neon SIMD architecture extension. This replaces the old mainline `armel` port.
- i486 (`i486`), for 32-bit x86 compatible PCs, requires an i486-class processor or newer, does not require a floating-point unit.
- PowerPC 32-bit - Big Endian (`powerpc`), for PowerPC G3/G4-based Apple Macintosh computers.
- PowerPC 64-bit - Big Endian (`ppc64`), for PowerPC G5-based Apple Macintosh computers.
- MIPS 64-bit - Little Endian (`mips64el`), for 64-bit MIPS processors (using the n64 ABI). Using the Loongson 2F processors as reference.

Completed ports will ship with the following flavours:

- Base: Base system release with a minimal set of applications and tools to get you started. This flavour should require less than 500MiB of hard disk space, and less than 32MiB of RAM.
- Desktop: System release bundled with a graphical user interface. This release contains a lightweight desktop environment (based on IceWM) and various graphical applications for desktop usage. This flavour should require less than 1.5GiB of hard disk space, and less than 64MiB of RAM.
- Server: System release bundled with software to kit your device for various server/appliance utilities. This flavour should require less than 1GiB of hard disk space, and less than 64MiB of RAM.

It's still early days, but we have made good progress on the i486 front, which also serves as our first proof of concept. Please look out for a visual tour of the Retro port soon!

AOSC OS/Retro: Development
--------------------------

In terms of development, AOSC OS/Retro shares the same [aosc-os-abbs](https://github.com/AOSC-Dev/aosc-os-abbs) tree, and is developed on the [Retro](https://github.com/AOSC-Dev/aosc-os-abbs/tree/retro) branch. In other words, packages are shared between Retro and the mainline, but not all will be packaged for AOSC OS/Retro. The [Retro](https://github.com/AOSC-Dev/aosc-os-abbs/tree/retro) branch syncs with the mainline's [Stable](https://github.com/AOSC-Dev/aosc-os-abbs/tree/stable) branch on both directions - regularly from Retro to Stable, but only annually from Stable to Retro. Security updates are, when applicable, cherry-picked from Stable to Retro.

By introducing the Retro branch, it allows us to divert more resources to maintaining mainline, modern architectures: AMD64 (`amd64`), AArch64 (`arm64`), and little-endian POWER (`ppc64el`; yes, really).

----

— Mingcong Bai
