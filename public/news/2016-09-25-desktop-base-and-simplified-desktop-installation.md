---
categories:
  - news
date: '2016-09-25'
important: false
title: '"desktop-base" and Simplified Desktop Installation'
url: /news/2016/09/25/desktop-base-and-simplified-desktop-installation.html
---


An update today has addressed issue [#292](https://github.com/AOSC-Dev/aosc-os-abbs/issues/292) - installation of desktop environments should be (a lot) easier now.

## So what is "desktop-base"?

The package `desktop-base` is a "bridge" package that forms a common basis for all desktop environments (the meta-packages discussed below, to be more precise) to rely on, by:

- Depending on all necessary Xorg/Wayland runtime;
- Depending on a default system font, in our case, `noto-fonts`;
- Containing our default wallpapers, earlier shown [here](https://aosc.io/news/aosc-oss-default-wallpapers);

Forming such basis may (to some extent) avoid confusion when users try and install a desktop environment - from the "base" variant, or from another desktop environment. Common problems that users may run into when trying to install a desktop environment may include that:

- The user may not know what to install for Xorg input and video drivers;
- The user may not know that some basic fonts should be installed before UIs may render properly;
- The user may not know what collection of packages may be necessary for running some desktop environments;

## Desktop meta-packages

In addition to what we did with the `desktop-base` package, we have also created some meta-packages for common desktop environments that we ship:

- `cinnamon-meta` for Cinnamon desktop;
- `gnome-meta` for GNOME;
- `kde-meta` or `plasma-meta` for KDE/Plasma desktop;
- `mate-meta` for MATE desktop;
- `xfce-meta` or `xfce4-meta` for XFCE;

Installing the packages above should land you with a fully working desktop environment, avoiding all the hassel on the way.