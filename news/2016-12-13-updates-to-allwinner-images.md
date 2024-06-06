---
categories:
  - news
date: '2016-12-13'
important: false
title: Updates to Allwinner Images
url: /news/2016/12/13/updates-to-allwinner-images.html
---


A new batch of ARMv7 images for Allwinner is now released by Icenowy Zheng (with date tags `20161212` and `20161213`). One of the main changes is the inclusion of [AOSC ARM Flasher](https://github.com/AOSC-Dev/aosc-os-arm-boot-flasher) for updating Linux Kernel for all supported Allwinner devices (will be available for Raspberry Pi 2/3 soon).

As a side note however, any images released before December 12th, 2016 (thus a date tag older than `20161212`) does not include this mechanism, and it is **strongly advised** that you enroll your device to the Flasher so that you may obtain Kernel updates (feature and security).

To enroll your device, run the following series of commands as `root` (just copy and paste to the terminal and press Enter, the commands should finish automatically):

    echo deb http://repo.aosc.io/os-armel/sunxi/os3-dpkg / > /etc/apt/sources.list.d/10-sunxi.list && apt update && apt dist-upgrade -y && apt install aosc-os-armel-sunxi-boot aosc-os-arm-boot-flasher -y && FLASHER_CAPABILITIES='bootloader kernel' aosc-arm-flasher

New images are now available in the [Downloads](/os-download/) page.