---
categories:
  - news
date: '2020-02-22'
important: false
title: This Week in AOSC OS Development
url: /news/2020/02/22/this-week-in-aosc-os-development.html
---


Second to last weekend of February and onto the 29th. As usual, we push weekly
updates to the Stable branch, including security, bug-fix, patch-level version
updates (e.g. 2.3.1 => 2.3.2), and major updates included as
[Exceptions](https://wiki.aosc.io/developer/packaging/cycle-exceptions).

Here below is a breakdown of what we've done this week.

Stable Branch Updates
---------------------

Multiple security updates have now been made available for Stable branch users
(AMD64-only for now, we are working to sync other architectures):

- Django (`django`) v3.0 => v3.0.3.
- Pale Moon (`palemoon`) v28.8.2.1 => v28.8.3.

AOSC OS Core has received two patch releases, containing updates to the core
runtime and toolchains on which AOSC OS is built upon. With these updates,
AOSC OS Core is updated from v7.0.4 to v7.0.5:

- GCC (`gcc-runtime`, `gcc`) v9.2.1-2 => v9.2.1-3.
  - Contains maintenance fixes from the releases/gcc-9 branch.
- Glibc (`glibc`) v1:2.30-2 => v1:2.30-3.
  - Contains maintenance fixes from the release/2.30 branch.
- Linux API Headers (`linux+api`) v2:5.4.19 => v2:5.4.21.
- Ncurses (`ncurses`) v6.1+20200118 => v6.1+20200118-1.
  - Drops the `/usr/share/terminfo/f/fbterm` to fix a file collision with
    Fbterm (`fbterm`).

Desktop Enviroments and Components have also received updates, most notably:

- GNOME Desktop v3.34.3 => v3.34.4.
- KDE Applications v19.12.0 => v19.12.2.

Other notable updates:

- Brave Browser (`brave-browser`) v1.3.115 => v1.3.118.
- Chromium and Google Chrome (`chromium`, `google-chrome`)
  v80.0.3987.87 => v80.0.3987.116.
- Linux Kernels...
    - Mainline (`linux+kernel`) v5.5.4 => v5.5.5.
    - Long-Term Support (`linux+kernel+lts`) v5.4.19 => v5.4.21.
- Telegram Desktop (`telegram-desktop`) v1.9.13 => v1.9.14.
- Vivaldi Browser (`vivaldi`) v2.11.1811.33 => v2.11.1811.38.
- YouTube-DL (`youtube-dl`) v2020.01.24 => v2020.02.16.
- ZFS Kernel Module and Tools (`zfs`) v0.8.2 => v0.8.3.
    - With this update, as ZFS is not compatible with our current mainline
      Kernel (5.5.\*). As a result, we have now marked this package as
      incompatible ("Broken" in DPKG speech) with our Mainline Kernels.

Mesa Update and New Allwinner A64 Images
----------------------------------------

Included with this week's Stable branch updates is Mesa 19.3.4.
[Icenowy Zheng](https://github.com/Icenowy), our resident ARM guru and
Allwinner/Pine64 device support maintainer have backported a set of patches
to bring enhanced features and stability fixes to the
[Lima](https://gitlab.freedesktop.org/lima/web) graphics driver.

Lima is an open source graphics driver for Mali-400/450-based GPUs, for our
scope of support, this driver is used by Pine64's, PineBooks, PinePhones,
and PineTabs. Thanks to all the great work from the Lima developers, these
devices can run (relatively) graphically intensive desktop environments like
the GNOME and Plasma desktops at acceptable performance (according to Icenowy
in our recent conversation, she mentioned that there is certainly room for
optimisation, but as to how much, she couldn't say).

That said, expect new device images for the Lima-enabled devices, and we will
keep you updated with a news post.

Linux Kernel 5.6
----------------

Five days ago, Linux Kernel 5.6-rc2 was tagged, and we have promptly packaged
this update and uploaded it to the `rckernel` repository. According to
[Phoronix](https://www.phoronix.com/scan.php?page=news_item&px=Linux-5.6-rc2-Released),
this release has overall been "quite a calm test release."

*"More than half of the Linux 5.6-rc2 changes amount to documentation updates*
*and of the rest a good portion is of tooling updates around the `perf`*
*subsystem. When it comes to updates of actual kernel code, there are Intel*
*ICE E800 series updates, various graphics/DRM fixes, and other fixes*
*flowing in following the closure last week of the Linux 5.6 merge window."*

And in case you've missed it, we opened a new repository called `rckernel` for
those who want to get in the testing game. To obtain our 5.6 RC Kernels, or
any future Kernel release candidates, please invoke the following command:

```
# apt-gen-list b rckernel
```

If you are using the Testing or Testing-Proposed branch, please run the
following command:

```
# apt-gen-list b testing
```

or...

```
# apt-gen-list b testing-proposed
```

And `rckernel` will be enabled automatically. Simply update your system after
the above command is run:

```
# apt update && apt full-upgrade
```

And you should receive Kernel 5.6-rc1 as a system update.

Looking Ahead
-------------

On the Testing-Proposed front, this week has been mostly quiet, as most of
our efforts have been dedicated to bringing in more Stable updates. That said,
with GNOME 3.36 on the horizon (due to release on March 11th) and Python 3.8
high on our [priority](https://github.com/AOSC-Dev/aosc-os-abbs/issues/2073),
you can expect the next few months to be quite Testing-Proposed-heavy.

We also expect to push for Core 7.1 in the weeks leading up to our freezing
deadline on March 31st. We are expecting updates to GMP
([v6.1.2 => v6.2](https://gmplib.org/gmp6.2.html)), GNU Make ([v4.2.1 => 4.3](https://lists.gnu.org/archive/html/info-gnu/2020-01/msg00004.html)),
and Binutils ([v2.33.1 => v2.34](https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git;a=blob_plain;f=binutils/NEWS;hb=refs/tags/binutils-2_34))
to make it into the 7.1.0 release.

This will conclude our development update for the week of February 10th.

---

— Mingcong Bai