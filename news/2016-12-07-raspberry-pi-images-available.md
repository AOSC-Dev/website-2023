---
categories:
  - news
date: '2016-12-07'
important: false
title: Raspberry Pi images available!
url: /news/2016/12/07/raspberry-pi-images-available.html
---


Shortly after the release of Allwinner AOSC OS images, the image for Raspberry Pi 2/3 is now available as well. The image is based on the "Base" variant of AOSC OS releases and they can now be obtained in the respective section in the [Download](/os-download) page.

Note that currently the image is based on ARMv7 (therefore 32-bit) userspace, as the official kernel that Raspberry Pi supplies (BSP) is ARMv6/ARMv7 only. We will be releasing separate images for Raspberry Pi 3 soon, as mainline Kernel support will land for this particular board.

Before then, do a fast SD card burn/dd...

    # dd if=imagefile of=/dev/sdX bs=4M status=progress

(Where `imagefile` is the `.img` file you would obtain after extracting from the `.img.xz` you would download, and `sdX` is the device file of your SD card)

And enjoy AOSC OS on your Pi!

![pi-aosc](/assets/i/news/rpi-img.jpg)