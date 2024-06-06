---
categories:
  - news
date: '2018-04-27'
important: false
title: AOSC OS Spring Wave of Updates!
url: /news/2018/04/27/aosc-os-spring-wave-of-updates.html
---


I know... We are supposed to push out waves of updates every month, however, with a new constraint added to our already high workload-per-capita, a monthly wave was simply too difficult for our development capacity. However, there are certainly enough changes made to AOSC OS for you to be excited about.

New Packages, and Dropped Packages
---------------------------------------

Several quick statistics on package addition and removal...

- 63 new packages were added.
- 9 packages were dropped (removed from repository).

Most of the new packages were not, unfortunately, added from user requests, but to serve new features added to AOSC OS - some of which new functions, some of which dependencies. I will get into more details... Now.

Enhancements and Changes
---------------------------

Most of the package changes made in this Wave are to catch up with upstream versions, and to ensure all architectures could enjoy as much of the new updates as possible. However, changes are also made to the desktop experience and system base in general.

### Major Component Updates

- Linux Kernel is updated to the 4.15 branch, while the LTS (Long-Term Support) branch has switched from 4.9 to the 4.14 branch.
- GNOME Desktop and applications have been updated to 3.28.
- KDE Frameworks have been updated to 5.44.0, Plasma Desktop has been updated to 5.12.4, and KDE Applications to 17.12.3.
- MATE Desktop has been updated to 1.20.
- AOSC OS Core has been updated to [5.3.1](https://github.com/AOSC-Dev/aosc-os-core/releases/tag/v5.3.1), with component updates and added RISC-V architecture support.

### Desktop-Specific Changes

Various MATE components have been updated and ported from Ubuntu MATE to further enhance desktop functionalities and user experience. Most notably of which was the introduction of MATE Tweak, which allows for easy management of desktop layouts, window manager alternatives, and individual enhancements like the MATE HUD (a keyboard-driven menu browsing system) and global application menu (as found with macOS and Unity 7).

----

![mate-tweak](/assets/i/news/2018-spring-mate-tweak.png)

MATE Tweak, showing possible customisations with desktop layouts and extra panel features.

---- 

### Core Component Enhancements

Package for GNU C Library (Glibc, `glibc`) now generates all locales at compile-time. Users should experience significantly faster update times, especially on performance constrained devices like older PowerPC hardware, ARM-based devices, etc. as the package will no longer generate locales as a post-installation configuration procedure - saving up to an hour.

### Performance Enhancements

With Fontconfig updated to 2.13.0 and Michal Srb's performance tweaks (https://github.com/michalsrb/fontconfig) rebased to our Fontconfig package, applications like LibreOffice should see visible improvement to UI responsiveness. The new update also significantly improved efficiency of font cache generation (fc-cache), especially with larger font packages installed (Noto CJK Fonts, for instance), generation time reduced from several minutes to seconds - also avoiding freezing issues with GNOME when updating the Fontconfig package.

We have also [removed an old patch](https://github.com/AOSC-Dev/aosc-os-abbs/commit/48b896b282d6e3a0c1531c646a7107d9afa97fe9) for Pixman which introduces gamma correction, as it caused larger LibreOffice Calc to become unresponsive when scrolling through larger spreadsheets.

Architectural Ports
----------------------

As mentioned in our last Wave's [announcement](https://aosc.io/news/AOSC-OS-End-of-2017-Wave-of-Updates) in January, we were working on re-synchronising package updates between our various architectural ports. We are happy to report that this wave of updates are now available for all of our currently active ports:

- AMD64, or x86_64 (`amd64`).
- ARMv7 (`armel`) and AArch64 (`arm64`).
- PowerPC 32/64-bit, Big Endian (`powerpc` and `ppc64`, respectively).

----

![ibook-g4](/assets/i/news/2018-spring-ibook-g4.jpg)

Apple iBook G4, freshly updated to the Spring Wave.

----

And so says "active", as in this news, we regret to announce an indefinite freeze to our MIPS/Loongson ports due to lack of developer commitment and the software repositories for both 32 and 64 bit ports are now off-line. We will report back if we gain any more development support for these two ports.

Oops, almost forgot, we have now started an experimental port to the RISC-V 64-bit architecture (specifically, `rv64gc`). We have now compiled all packages contained in a "Container" distribution variant - that is, a "Base" variant minus bootloader and Linux Kernel. Due to the lack of hardware available to our developers, we currently have no plan to expand this particular repository. Also, due to the experimental nature of this port, we have not yet differentiated stable and testing repositories for this port. The packaging architecture is denoted as `riscv64`.

New Tarballs?
---------------

We are looking to release new tarballs for all architectures in the coming month, along with updated ARM device images.

----

![n900](/assets/i/news/2018-spring-n900.jpg)

A sneak-peek at our new project device, Nokia N900, running on mainline Linux Kernel.

----

Next Wave, When?
------------------

Assuming that the current development workload continues, you should expect the next wave of update before July - though still in debate, our update cycle may lengthen to a season (that is, normally, three months) instead of a monthly update.

In the coming cycle, we will return our focus on user requests and further enhancement of user experience (or usability in general) on non-AMD64 ports, especially for users of ARM-based devices.

----

Thanks for your continued support for AOSC OS, and we wish you productivity and enjoyment with AOSC OS.

— Mingcong Bai