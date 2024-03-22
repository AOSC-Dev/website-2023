---
categories:
  - news
date: '2016-10-21'
important: false
title: System Release Update - Oct. 21st, 2016
url: /news/2016/10/21/system-release-update-oct-21st-2016.html
---


A wave of new system releases are now available to AOSC OS, this time for the AMD64/x86_64 architecture. With this update, all system releases come with AOSC OS Core 4.0.1 and Linux Kernel 4.8.3, while releases with desktop environments comes with:

- KDE Plasma Destkop 5.8.1 and KDE Applications 16.08.2.
- GNOME 3.22.1.
- MATE 1.16.0.
- Xfce 4.12.

For each of their respective releases. There are much more to the new system releases apart from basic system software updates:

- From this release, all system releases are built from the "Base" variant, instead of rolling updates on top of old releases - hopefully providing a cleaner and properly minimalized dependency tree.
- All system releases with desktop envrionments' apperances have been slightly customized:
    - All releases now uses the new AOSC OS default wallpaper, showcased [here](https://aosc.io/news/aosc-oss-default-wallpapers).
    - All GTK+ based desktop envrionments now use the Arc Darker GTK+ theme by default.
    - MATE and Xfce releases now use Numix icons by default, replacing the old Vertex icons.
- All system releases should have higher usability out of the box:
    - Printing and scanning.
    - Network connection, management, and Bluetooth connectivity.
    - Web access, and e-mails.
    - Basic productivity.
    - Multimedia support.

Take this example of our MATE release, as you can see:

![mate-desktop-1](/assets/i/de-preview/mate/thumbs/1.png.jpg)

It now comes with all the appearance customization mentioned above, in addition to bluetooth connectivity support - powered by Blueberry from the [Linux Mint Project](https://github.com/linuxmint/blueberry) - everything should function out of the box, so you can jump right into work and entertainment.

You may now head over to our [Download](/os-download) section to get the new system releases, or simply update your existing installation.


### Known issues:

- When the system release boots for the first time, it may take two or three minutes due to a bug in the Fontconfig caching system, which does not distinguish symbolic links from normal files representing fonts. *We are aware of this issue.* This should only happen once on the first boot, if this issue still occurs to you in future startups, please do file a [complaint](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new).
- While these releases should boot on Bay Trail devices, the graphical interface may not start or function properly, if that's the case, please append `nomodeset` to your Linux Kernel parameter (defined in GRUB, our default bootloader) to workaround this issue. There is still an ongoing effort to make AOSC OS work better on theses devices.
- Surface Pro 3 keyboard may not work properly with AOSC OS, this is not yet confirmed with the newest Kernel updates - but it did not work with 4.7 Kernel release series.