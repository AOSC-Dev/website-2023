---
categories:
  - news
date: '2017-11-03'
important: false
title: October Wave is Here!
url: /news/2017/11/03/october-wave-is-here.html
---


We are happy to announce that our October Wave of updates is now ready for AMD64 users of AOSC OS! We are late for this wave due to the quantity of updates, which are applied to over 500 packages provided for AOSC OS - that is ~20% of all packages available.

Anyways, let's kick this announcement off with a new wallpaper made available to all AOSC OS users, as part of the default collection of wallpapers.

[![core5-blender](/assets/i/news/core5-rendered.jpg)](https://github.com/AOSC-Dev/aosc-os-artworks/raw/master/11/core5-rendered.jpg)

This wallpaper is made by [Tianhao Chai](https://aosc.io/people/~cthbleachbit/) - our resident Wine, NVIDIA, Linux Kernel package maintainer, and Blender enthusiast. This wallpaper is rendered with no other software than Blender, took almost two days to render on his own desktop computer (LOL). Blender project file for this wallpaper is available [here](https://github.com/AOSC-Dev/aosc-os-artworks/raw/master/11/core5.blend), if you would like to make any changes/improvements to this wallpaper, or simply to warm up your room in the coming winter!

--------

Now, to some of the major updates made available in this wave of updates....

## GNOME 3.26

Released earlier in September, is now packaged and tested for users of AOSC OS.

GNOME 3.26 contains a large amount of changes made to further polish user experience. For example, the newly designed GNOME Control Center provides a pane-based layout which eases navigation, as opposed to the old icon-and-page-based design.

HiDPI support also sees great improvement, the feature to set DPI scaling on a "fraction scale", instead of jumping from 1x to 2x, etc. This should offer better flexibility for 2K/3K/4K/... owners.

![gnome-3.26](/assets/i/news/gnome-3.26.jpg)

## KDE/Plasma Updates

With the last months spent on "special" operations like ACID, our KDE/Plasma desktop stack was left outdated, with the October wave of updates, users of KDE/Plasma Desktop could enjoy the newest and (hopefully) greatest on offer by the KDE Community...

- Qt 5.9.2, with a great number of bug fixes and performance optimisations.
- KDE Frameworks 5.39.0 providing fixes and expanded functionality.
- Plasma 5.11.2, providing a more polished desktop layout, a new System Settings application with improved layout and appearance, and better integration with the Kirigami adaptive UI framework.
- KDE Applications 17.08.2, with latest fixes and security enhancements to the KDE application collection.

## Security Updates

This section is dedicated to show our gratitude to [Zero King](https://github.com/l2dy), our new friend and collegue in the AOSC OS development effort. With great knowledge and diligent focus on security updates and announcements, Zero King reported security issues and offered update/patching advices to our [ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs) and [Core Tree](https://github.com/AOSC-Dev/aosc-os-core) on a near-daily basis.

Since his involvement with AOSC OS development, over 100 security advisories was announced in our [security](mailto:security@lists.aosc.io) mailing list - virtually matching the total amount of advisories announced in 2016! If you haven't subscribed to that mailling list yet, please do so [here](https://lists.aosc.io/sympa/info/security) to keep yourselves informed with latest security updates made available to AOSC OS, and other security-related suggestions to better protect your privacy and data safety.

--------

## Promises, Oh Promises...

However, some updates are delayed due to the lack of time with our developers who work on a volunteer basis, making time out of their own busy lives and academic/work occupations...

- Deepin Desktop Environment, which was scheduled for this wave of updates, will be delayed to the next.
- Tarballs, also scheduled for an October refresh, will be delayed to early-to-mid November.

--------

## MIPS Under Review

Due to the lack of man power and device resources, in combination with the problematic implementation of MIPS ISA found in Loongson/Godson processors - our main maintainer of MIPS 32/64-bit ports, [Junde Yhi](https://aosc.io/people/~lmy441900) finds it increasingly difficult to maintain these ports, letting alone keeping up with the large amount of updates.

Therefore, he has proposed to reboot the MIPS 64-bit port with better adaptation to Loongson/Godson platforms - which realistically, are the only personally purchasable devices by our community members and developers. In addition, the MIPS-II port, targetting legacy MIPS 32-bit devices like the YeeLoong 8089D, is also under consideration to be dropped.

For more details on the ongoing discussion, please refer to [here](https://lists.aosc.io/sympa/arc/discussions/2017-10/msg00000.html).

--------

Problems sir?

- Report any issue to our [Issues](https://github.com/AOSC-Dev/aosc-os-abbs/issues) page.

Or alternatively…

- Find us on the #aosc IRC channel, Telegram group information will be provided if requested on IRC.
- Send us an e-mail at [discussions@lists.aosc.io](mailto:discussions@lists.aosc.io).

--------

More Details?

- Full changelog of this Wave of updates is available [here](https://github.com/AOSC-Dev/aosc-os/blob/master/changelogs/201710-changelog.md).