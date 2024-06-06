---
categories:
  - news
date: '2020-02-14'
important: false
title: This Week in AOSC OS Development
url: /news/2020/02/14/this-week-in-aosc-os-development.html
---


Happy Valentines Day! Hey, kudos to you if you do have a date tonight - we won't
take this day off, however. As usual, we push weekly updates to the Stable branch,
including security, bug-fix, patch-level version updates (e.g. 2.3.1 => 2.3.2),
and major updates included as
[Exceptions](https://wiki.aosc.io/developer/packaging/cycle-exceptions).

Here below is a breakdown of what we've done this week.

Stable Branch Updates
---------------------

Multiple security updates have now been made available for Stable branch users
(AMD64-only for now, we are working to sync other architectures):

- Firefox (`firefox`) v72.0.2 => v73.0.
    - This version is now built with Clang and enables three-tier profile-guided
      optimisation (PGO), with a new build script adapted from
      [Arch Linux](https://git.archlinux.org/svntogit/packages.git/tree/trunk/PKGBUILD?h=packages/firefox).
- LibEXIF (`libexif`, `libexif+32`) v0.6.21-4 => v0.6.21-5.
- Thunderbird (`thunderbird`) v68.4.2 => v68.5.0.

AOSC OS Core has received two patch releases, containing updates to the core
runtime and toolchains on which AOSC OS is built upon:

- Bash v5.0.11-1 => v5.0.16.
- Binutils v2.33.1-1 => v2.33.1-2.
    - Contains maintenance fixes from the [`binutils-2_33-branch`](https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git;a=shortlog;h=refs/heads/binutils-2_33-branch) branch.
- GCC v9.2.1-1 => v9.2.1-2.
    - Contains maintenance fixes from the [`releases/gcc-9`](https://github.com/gcc-mirror/gcc/commits/releases/gcc-9) branch.
- Glibc v1:2.30-1 => v1:2.30-2.
    - Contains maintenance fixes from the [`release/2.30`](https://sourceware.org/git/?p=glibc.git;a=shortlog;h=refs/heads/release/2.30/master) branch.
- ISL v1:0.22 => v1:0.22.1.
- Linux API Headers v2:5.4.5 => v2:5.4.19.
- Ncurses v6.1+20191214 => v6.1+20200118.
- Readline v8.0.1 => v8.0.4.

With these updates, AOSC OS Core is updated from v7.0.2 to v7.0.4.

Other notable updates:

- Go v1.13.5-1 => v1.13.8.
    - All Go-based packages have been rebuilt using the new Go compiler.
- Linux Kernels...
    - Mainline (`linux+kernel`) v5.5.2 => v5.5.3.
    - Long-Term Support (`linux+kernel+lts`) v5.4.17 => v5.4.19.
- LLVM (`llvm`, `llvm+32`) v9.0.0-2 => v9.0.1.
    - This version re-enables binary hardening.
- LMMS (`lmms`) v2:1.2.0rc8-2 => v2:1.2.1.
- Rust (`rustc`) v1:1.39.0 => v1:1.41.0.
    - This version re-enables binary stripping and the resulting package
      should be much smaller.
- Telegram Desktop (`telegram-desktop`) v1.9.9 => v1.9.13.
- VirtualBox (`virtualbox`, `virtualbox-guest`) v6.1.0 => v6.1.2.
- Vivaldi Browser (`vivaldi`) v2.10.1745.27 => v2.11.1811.33.

Linux Kernel 5.6
----------------

As you may be aware, Linux Kernel 5.6 is quite possibly
[one of the most exciting Kernel releases in years](https://www.phoronix.com/scan.php?page=article&item=linux-56-features&num=1),
as a large amount of new features made it into the new release:

- SATA temperature sensors are now exposed from the Linux Kernel, that said,
  with a due update to `lm-sensors` (which provides the `sensors` command),
  you should now be able to monitor your storage devices which are connected
  via SATA.
- WireGuard has finally been merged into the Kernel for a secure VPN tunnel.
- The ZoneFS from Western Digital has been merged into the Kernel.
- AMD Zen/Zen2 (Ryzen 1st, 2nd, and 3rd Generation) thermal and power monitoring
  has been improved.
- ...

It seems that Whiskey Lake-based laptops could now suspend more reliably too,
but this remains to be seen with further testing (I personally use a Panasonic
Let's Note CF-SV8R, which did not suspend well with Kernels 5.4 - 5.5).

With this exciting news, we have also decided to open a new repository called
`rckernel` for those who want to get in the testing game. To obtain Linux Kernel
5.6-rc1, or any future Kernel release candidates, please invoke the following
command:

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

On the Testing-Proposed front, we have mainly focused on desktop environment
updates and update survey (that is, checking for available updates and recording
them on our [Iteration Plan for Winter 2020](https://github.com/AOSC-Dev/aosc-os-abbs/issues/2073)).

Desktop environment updates made available for testing this week:

- MATE Desktop and Applications (`groups/mate`) v1.22 => 1.24.
- Plasma Desktop (`groups/plasma`) v5.17.90 => 5.18.0.
    - KDE Frameworks (`groups/kf5`) v5.66.0 => v5.67.0.

Other notable updates:

- Racket (`racket`) v7.5 => v7.6.
- Visual Studio Code, or Code - OSS (`vscode`) v1.14.1 => v1.42.0
- Wine (`wine`, with Wine-Staging patch set) v2:5.0 => v2:5.1.

In the coming week, we are expecting to update to Python 3.8, and with this,
a large amount of packages will be updated and rebuilt. Otherwise, we will
continue to package updates that we've found from our surveys.

This will conclude our development update for the week of February 10th.

---

— Mingcong Bai