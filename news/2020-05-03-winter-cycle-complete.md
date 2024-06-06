---
categories:
  - news
title: Winter Cycle Complete!
date: '2020-05-03'
important: false
---

We are happy to report that the Winter 2020 development cycle is now complete and updates have been made available for AMD64 and AArch64! This cycle brought thousands of features updates, as well as stability and reliability improvements.

Updates for ARMv7 and big-endian PowerPC ports will be delayed until June, as developments on these ports are currently suspended. For more information about this situation, please refer to our [recent post](https://aosc.io/news/posts/2020-05-03-suspending-stale-aosc-os-ports-and-initiating-retro/).

Here's a quick tour of the updates now available from the [community repository](https://repo.aosc.io/).

Desktop Environments
--------------------

Various desktop environments received major updates. GNOME 3.36, Plasma 5.18, MATE Desktop 1.24, Cinnamon Desktop 4.4, XFCE 4.14 are now avilable from the repository. Some came quite late due to delays from the previous cycles, but we expect updates to arrive sooner for the cycles to come.

![plasma-5.18](https://i.imgur.com/OT5q5tB.png)
KDE Plasma 5.18, their greatest release yet!

----

We expect to release new distribution tarballs in the following week, shipping with the aforementioned desktop environment updates.

System Components
-----------------

Lots of system components got their share of updates as well. Most notably, Python has been updated to 3.8.2 in this cycle, bringing performance and compatibility improvements.

For users using Intel Broadwell graphics or later, with Mesa 20.0 that comes with this wave of updates, OpenGL applications now defaults to the reworked, Gallium-based "Iris" driver that replaces the aging "i965" driver. This resulted in a sizeable performance uplift as shown with this [Phoronix report](https://www.phoronix.com/scan.php?page=article&item=mesa193-iris-september&num=1).

The Linux Kernel also received major updates throughout the cycle, as the mainline Kernel is now on the 5.6 branch, bringing integrated WireGuard support from within the Kernel (whereas it was shipped as a separate package). Linux Kernel 5.6 is probably one of the most anticipated release in the Kernel's recent history, with [heaps of features](https://www.phoronix.com/scan.php?page=article&item=linux-56-features&num=1) introduced to this now nearly 30-year-old Kernel. The Long-Term Support (LTS) Kernels are also updated to the 5.4 branch.

Package Quality Improvements
----------------------------

With recent changes made to [Autobuild3](https://github.com/AOSC-Dev/autobuild3), our packaging toolkit is now stricter when executing our build scripts, which exposed a large amount of coding and quality issues. This, when combined with our [QA page](https://packages.aosc.io/qa/) will help us locating potential reliability issues.

We have put in a considerable amount of work in this cycle, and will continue to work on improving packaging quality for AOSC OS.

Looking Forward to the Spring 2020 Cycle
----------------------------------------

In the coming cycle, we anticipate a temporary diversion from general component updates, and instead shift our focus to fulfilling existing [package requests (pakreq)](https://pakreq.aosc.io). Security, bugfixes, and [exceptional](https://wiki.aosc.io/developer/packaging/cycle-exceptions) updates will be made available as usual.

The next cycle will also be unusually short, with cycle completion anticipated on June 30. This decision is made so that our Summer Cycle will also start in the summer and (hopefully) end before Fall this year.

----

— Mingcong Bai
