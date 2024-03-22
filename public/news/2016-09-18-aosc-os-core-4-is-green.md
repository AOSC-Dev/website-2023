---
categories:
  - news
date: '2016-09-18'
important: false
title: AOSC OS Core 4 is Green!
url: /news/2016/09/18/aosc-os-core-4-is-green.html
---


![core4-banner](/assets/i/core4.jpg)

And... Duang! It's here.

AOSC OS Core 4 is a major update over Core 3, which has been the mainline Core
version since last summer (remember?). With this major version update, we are
finally free to get our newest and most radical changes for your device.

With this Core update, you will get higher performance with applications runtime
and launching speed (it gets better over time for the year to come).

At a glance
-----------

With Core 4...

- Full hardening is now the new default for all packages in the repository.
- All core libraries contained in the Core is now optimized with `-O3` instead of the default `-O2` (which is safe according to the tests conducted during Core 4 testing), bringing a boost in performance of those libraries in several aspects (for example, mathematical/arithmetic operations).
- All AMD64 (x86_64) packages will be built with LTO (Link Time Optimization) enabled, bringing a boost in application startup times, and decreases the memory footprint of some applications in some off chances (for example, Firefox).
- PowerPC and PowerPC64 are now supported as two of our new ports, they will eventually become full releases of AOSC OS in the coming year (run it on your PowerPC Macs, they are not even close to be obselete!).

A full changelog is available in the [release page](https://github.com/AOSC-Dev/aosc-os-core/releases/tag/v4.0.0).

Updating
--------

Updates are now available for AMD64 (x86_64) users (updates for other ports coming next week).

Simply update like you would for any system updates, a reboot is not required (and not recommended, keep the uptime up, folks).