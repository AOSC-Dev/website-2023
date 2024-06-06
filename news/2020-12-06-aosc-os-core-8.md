---
categories:
  - news
title: AOSC OS Core 8 "Hotfix" Now Available!
date: '2020-12-06'
important: true
---

![welcome-to-core-8](https://i.imgur.com/PpSCv5F.png)

After weeks of hard work (mostly by our [BuildBots](https://wiki.aosc.io/developer/infrastructure/buildbots/))
and testing by our maintainers and users, AOSC OS Core 8 is now available from
the `stable` repository!

Codenamed "Hotfix," Core 8 contains major updates to core system components
like Glibc 2.32, GCC 10.2.1, Perl 5.32, which could improve system stability
and performance. There was one component downgrade for licensing reasons:
Berkeley DB is now downgraded to the 5.x branch. With these major changes
we have also rebuilt a large amount of packages (which are reverse
dependencies to the Core compoennts).

For AMD64 users, we have also made an adjustment to [Autobuild3](https://github.com/AOSC-Dev/autobuild3),
which lowered SIMD requirement from SSE3 (first released with Pentium 4
"Prescott" SKUs) to SSE2 (first released with Pentium 4). Using SSE3 by
default, we found, was problematic, because earlier x86_64 AMD processors
(most that released before the introduction of the AM2 socket) did not
support SSE3. You should not expect a major performance regression, but this
does mean that our AMD64 port is now true to its name - it supports all
x86_64 processors.

With Core 8 now available from the `stable` repository, you should expect
to receive over 100 package updates if you are running a desktop distribution
(and possibly less if running a smaller feature set like the Base
distribution). The update could take more than 30 minutes to complete on older
systems, so it is advised that you update your system according to your
own schedule.

Should you run into any issue updating to AOSC OS Core 8, please [let us know](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new/choose).

----

— Mingcong Bai
