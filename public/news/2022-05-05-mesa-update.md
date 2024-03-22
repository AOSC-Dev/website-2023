---
categories:
  - warning
title: "Device Support Changes in the Upcoming Mesa 22.0.2 Update"
date: 2022-05-05T23:31:07-07:00
important: true
---

AOSC OS will soon ship the Mesa 22.0.2 graphics stack. This version includes
driver modules for older devices re-written against the Gallium framework and
also dropped support for some devices.

Among these devices:

- Intel GMA 915/945 series integrated graphics (often found on devices with
Intel Pentium 4/Core/Core 2 CPUs)
- Intel GMA 960/X3100 integrated graphics, up to Intel Haswell/4th Gen Core
graphics (often found on devices with Intel Core 2 and up to 4th Gen Intel Core
CPUs)

Will switch to use the new Gallium-based drivers named i915g and Crocus. Since
the drivers are relatively new, you may encounter usability or performance
issues.  Should you encounter any problems or have questions about your device's
hardware support, please get in touch by
[reporting an issue](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&template=bug-report.yml).

The new Mesa version also dropped OpenGL support for graphic cards based on the
ATI Radeon [R100](https://en.wikipedia.org/wiki/Radeon_R100_series) (a.k.a.
Radeon 7000 series) and [R200](https://en.wikipedia.org/wiki/Radeon_R200_series)
(a.k.a. Radeon 8000/9000 series) cores dropped. If you use these graphic cards
on your devices, you may experience degraded graphical performance (especially
when using the desktop environments with OpenGL composition and effects), most
OpenGL games will also fallback to software rendering.

AOSC OS/Retro will continue to provide the old drivers for the devices listed
above by switching to Mesa's Long Term Support (LTS) branch

---

— Mingcong Bai, Kaiyang Wu
