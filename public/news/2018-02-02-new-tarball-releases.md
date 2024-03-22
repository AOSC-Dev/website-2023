---
categories:
  - news
date: '2018-02-02'
important: false
title: New Tarball Releases!
url: /news/2018/02/02/new-tarball-releases.html
---


A long over due batch of updates is now available for the AMD64 architecture, with a date of 20180128. With the last batch of tarballs released almost a year ago, this update should provide quite some convenience for new users, and old users trying to reinstall.

--------

![plasma-20180128](/assets/i/de-preview/kde/1.png)

Finally, some new looks!

--------

Apart from updating the system releases, we have also made a series of changes to the tarballs - from how they were made, to the content of the tarballs:

- All tarballs are now generated with [Ciel](https://github.com/AOSC-Dev/ciel), our in-house build environment manager. As compared to manual generation, like we did for the past three years, this method should create more consistent and sane tarballs.
- All desktop-variant tarballs (GNOME, MATE, etc.) are now targeting a size of 2GiB, with the exception of ARMv7 and AArch64 (where space is expected to be more constrained). With the increased tarball size target, we have now pre-installed in addition LibreOffice, printing and scanning utilities, and a larger collection of fonts.
- The tarballs no longer come with a default `aosc` user, or the `users` group occupying the 1000 UID and GID, respectively. You would have to create your own user, as discussed in the [Wiki](https://wiki.aosc.io/).
- For AMD64 Linux Kernel and Intel Microcode are now updated and pre-installed to provide protection (mitigation) against the [Meltdown and Spectre Vulnerabilities](https://meltdownattack.com/).

In more detail, here are some of the changes we have made to specific variants:

- Cinnamon has been updated to version 3.6.
- GNOME has been updated to 3.26.2.
- i3wm has slight visual make-over for the top panel and Conky.
- KDE Frameworks have been updated to 5.41.0, while Plasma Desktop has been updated to 5.11.5, and KDE Applications to 17.08.3.
- MATE Desktop has been updated to 1.18.2.

You may ask, where is the variant for the Deepin Desktop Environment? We have decided not to ship this variant, as we recently discovered a "feature" in the DDE Daemon that changes the system GRUB (bootloader) theme without noticing the users. We are working on a method to remove or disable this feature by default, after which the tarballs could be generated with the next batch of updates.

Speaking of the next batch, we do recognise that a year-long gap between updates has brought quite some inconvenience for new and old users a like - we do apologise for procrastinating. With automatic generation made available by Ciel, we are considering a fixed schedule for updating and releasing tarballs (say, monthly, or even weekly) to incorporate latest updates, bug fixes, and security updates. A news post will be made on this topic.

--------

As for other architectural ports of AOSC OS, we are still working on syncing package versions on these architectures, we are aiming for tarball releases in Mid-February.

--------

Thank you for choosing AOSC OS and we wish you enjoy the new releases!