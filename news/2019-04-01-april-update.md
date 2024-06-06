---
categories:
  - news
date: '2019-04-01'
important: false
title: April Update!
url: /news/2019/04/01/april-update.html
---


It's April again! And we have here yet another update on the development of AOSC OS.

When maintaining AOSC OS, we have a policy to package everything we can redistribute, whether it's free, open source, or proprietary by nature. This is because we think we should prioritise our user's productivity. Because of this policy, we don't just package these packages, we package them with all features enabled. However, this has led us to the problem that our repository is overwhelmingly over-sized. The "Sneakernet" from last year has proven not to be enough to overcome this problem. And because of the intense pressure we have received from the [Free Software Foundation](https://fsf.org/), we intially planned to remove all of the free/libre software in our repository, especially those from the GNU Project.

Upon further discussion, however, we found that removing all GNU packages isn't quite (or "quietly", as it might be more true to the fact... regardless, delete this note before final publication) destructive for AOSC OS, as we are blessed by a world of (great) alternatives.

- The kernel: The Linux Kernel is licensed under the GPL. We are going to replace it with the Apple XNU kernel. XNU is also a brilliant kernel. It is also a hybrid kernel, it will be smaller in size compared to monolithic kernels like the Linux Kernel.
- The C library: The GNU C Library (glibc), obviously, is one from the GNU project. Fortunately, we have several options...
	- Musl: Another popular light-weight C library, but it only supports the Linux Kernel. We need some way to adapt it to XNU.
	- Relibc: A new-born C library written in Rust. However, should we choose this as our new alternative, we will face challenges adapting it to `ppc32be` and `ppc64be`, as they are not well supported by Rust.
- Coreutils can be replaced with Toybox (a BSD-licensed re-implementation of the Busybox). This is all you need - right?
- The rest of the GNU packages will be dropped unconditionally.

These changes will ship with AOSC OS Core 7. With this, we can shave ~100GB off the size of our repository (the fact that Apple don't release new XNU versions as often as the Linux Kernel will further contribute to this weight reduction). The experience will roughly be the same, along with some improvements. For instance, if we choose Relibc as our new default C library, users will be blessed by the fresh air of memory-safety right following system boot-up.

The last but not least, we are setting up our own foundation - the Proprietary Software Foundation! The foundation is founded with the objective protect our right to use proprietary software. In spirit of this glorious liberation from the clinch of the Free Software Foundation and its GNU Project, we have also drafted a new *Community Manifesto*:

*We, therefore, the Representatives of the Proprietary Software Foundation, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of the Open Source Community, solemnly publish and declare, That these communities are, and of Right ought to be Free and Independent Communities, that they are Absolved from all Allegiance to the GNU Project, and that all political connection between them and the Free Software Foundation, is and ought to be totally dissolved; and that as Free and Independent communities, they have full Power to package and use proprietary software and to do all other Things which Independent Communities may of right do. — And for the support of this Declaration, with a firm reliance on the protection of Divine Providence, we mutually pledge to each other our Lives, our Fortunes, and our sacred Honor.*

Thank you for choosing AOSC OS and we wish you a happy April.

— The Salted Fish, Head of the AOSC Licensing and Propaganda Department