---
categories:
  - news
date: '2017-04-10'
important: true
title: Firmware Package Split
url: /news/2017/04/10/firmware-package-split.html
---


With today's newest changes to AOSC OS packages, we have decided to split the `firmware-nonfree` package to free and non-free portions, with the `firmware-nonfree` packages (pre-installed with any system release) containing **only** non-free firmware files, and a new `firmware-free` package containing "free" firmware files.

A normal system upgrade may not install the new `firmware-free` package automatically. If you started encountering issues regarding missing firmware after you upgraded your system, please check if you have installed `firmware-free`.

Both packages will be pre-installed with future system releases.