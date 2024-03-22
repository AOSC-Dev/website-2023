---
categories:
  - news
date: '2017-03-29'
important: false
title: GNOME 3.24 is Now Available!
url: /news/2017/03/29/gnome-324-is-now-available.html
---


GNOME 3.24 was released on March 22nd, 2017 with a large amount of new features and fixes, and here below is a quick summary of changes brought in by the 3.24 release:

- Night Light is now a part of GNOME 3.24, which reduces blue light emission from the screen after sun down, or during any time period specified by the user.
- A new application, GNOME Recipes is added to aid our great chefs with community created recipes.
- GNOME Builder, the IDE (Integrated Development Environment) for GNOME now has better integration with [Flatpak](http://flatpak.org/), a sandboxed application runtime for Linux.

And here below are some things we are happy to notice with GNOME 3.24:

- The applications menu animations are now observed to be slightly smoother.
- Simplified Chinese and Japanese localization have been greatly improved over 3.22, thanks to significant community effort put in to the 3.24 release.

For a full list of changes brought in by GNOME 3.24, please read the GNOME [Release Notes](https://help.gnome.org/misc/release-notes/3.24/).

---------------------------------------------

However, GNOME 3.24 is not without its issues. For now, we have experienced the following issues:

- GNOME Software will crash (segmentation fault) when a package is installed - please avoid updating your AOSC OS with GNOME Software.
- When taking a screenshot of the "current window" on a system running proprietary NVIDIA graphics driver, you may experience colour mismatch issue (seems like blue and red colour values are swapped).
- Budgie will no longer function with the GNOME 3.24 update - and for they are -[rewriting Budgie with Qt](https://budgie-desktop.org/2017/01/25/kicking-off-budgie-11/), they have no intention on fixing Budgie for 3.24. We have already dropped the Budgie package from our repository, and the download for release tarball with Budgie desktop is no longer available.

We are currently looking into these issues and we are committed to bring fixes to these issues to you as soon as possible.

---------------------------------------------

![gnome-3.24](https://img.vim-cn.com/70/b9ae1d9eb5f083b17934a89b0d47041967c0cd.png)

Enjoy!