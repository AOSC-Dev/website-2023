---
categories:
  - news
date: '2016-12-08'
important: false
title: Winter Distribution Updates (and Looking Ahead)!
url: /news/2016/12/08/winter-distribution-updates-and-looking-ahead.html
---


You might have already noticed by looking at the [Downloads](/os-download) page that we have expanded our line-up of releases (again). The winter distribution updates is a major update to our AOSC OS releases, and it packs a lot more than just software updates:

- Cinnamon and LXDE are added as new variants.
- SD/eMMC images based on the "Base" variant are now available for ARM devices (Raspberry Pi and Allwinner).
- Desktop variants (variants with pre-configured desktop environments) are now available for multiple architectures (for instance, XFCE is now available for AMD64, ARMv7, ARMv8 64-bit, PowerPC 32-bit, and PowerPC 64-bit *).
- All system distributions are now assembled using our new `*-base` collections (for lack of a good name). They are now built from a minimal system release (a "stub" variant, for our own convenience) every time, instead of being "refreshed" by doing a system update on the old one (a more detailed `*-base` description/explanation is on the way).

Also, GTK+ based desktop variants are now released with a brand new look, incorporating the elegance of the [Arc](https://github.com/horst3180/Arc-Theme) GTK+ theme, and the simplicity of the [Flat-Remix](https://github.com/daniruiz/Flat-Remix) icon theme. As seen in this screenshot of our new GNOME release below.

![gnome-preview](/assets/i/de-preview/gnome/thumbs/4.png.jpg)

--------------------------------------------

Now, looking ahead, there are several things to do between now and our next distribution update - and some changes to our distribution update schedule: we are currently planning to shift the distribution update to a set, seasonal schedule (with the exception of BuildKit and important security updates) - instead of this random and fire-at-will mess we currently have... More on that in a later news post.

Also, from the next update on, we will no longer set the default password for `root` with the default distribution. Enabling `root` user with a default password is quite a bad idea, as some users may forget to disable or reset the password of the `root` user, potentially making the system defenseless on a open network.

--------------------------------------------

But for now, please enjoy (or much rather, please, try our) AOSC OS!

--------------------------------------------

(*) PowerPC ports are **big endian only**, and are only tested on PowerPC-based Macintosh computers with G3 or newer processors.