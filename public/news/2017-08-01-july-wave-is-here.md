---
categories:
  - news
date: '2017-08-01'
important: false
title: July Wave is Here!
url: /news/2017/08/01/july-wave-is-here.html
---


Today marks the conclusion to our first AOSC OS monthly update cycle - yes, we are a day late, however, this was largely due to some difficulties trying to get Mozilla software (Firefox, Thunderbird, etc.) working on ARMv7 (`armel`) and AArch64 (`arm64`) - not much success this month despite a five-day effort, however, we've heard good news about version 55 of Mozilla software. Anyways, here's a re-cap.

--------

![tegra](/assets/i/news/2017-july-tegra-building.jpg)

This NVIDIA Jetson TX1 development kit has handled most of the packaging work, computing resources on non-PC platform is still quite scarce in AOSC.

--------

Usability Up!
-------------

With a longer period for packaging and testing, we are more confident about our updates. Another thing which time could "buy" is better attention to usability of packages - and that would include higher availability of packages for a particular port, higher reliability, and more importantly, better coverage with usability investigation for existing packages.

The first part could be seen with updates made to our two ARM ports, which includes for the first time, a full KDE/Plasma suite. Though we are still having a blocker which prevented Plasma from running on ARMv7 devices, and a minor issue which will crash KInfoCenter when checking PCI information on a device (which is, well, most ARM devices) which does not have such bus on board. We will be looking into pushing a quick patch revision for ARMv7 later this week for the former issue, while the latter will have to wait for upstream's response (it is quite dangerous for a software upstream to disregard their own portable software running on non-x86 platforms, eh?). Apart from that, we are looking at a ~+300 package delta for this port, and more will come later as we get around to it.

--------

![krita-orange-pi](/assets/i/news/2017-july-calligra.jpg)
Krita running on an AArch64-capable board, Orange Pi PRIME - AOSC OS image is available in the [download page](https://aosc.io/os-download).

--------

For usability investigation then, we would have to talk about two sets development utilities, the Ciel (Lion Yang asked me to leave "the" in so...) and ACID (just a random name). The Ciel is a (development) environment deployment and manipulation kit which manages one or more systemd-nspawn containers running on a hierarchical OverlayFS architecture, which allows for quick rollback of development/packaging environment(s) - soon to be a requirement for AOSC OS packaging, starting as an experiment in August.

Working upon the Ciel will be ACID, which is a simple script running on our servers to thoroughly build all packages in our [ABBS tree](https://github.com/AOSC-Dev/aosc-os-abbs/), acting somewhat like a CI (considering the amount of packages - 4000+ of them - to be built continuously over the course of a month) to discover any packaging error - missing dependencies, misspelled words, incorrect scripting, and more. This system will surely improve the general packaging quality for AOSC OS, benefiting developers and users alike.

--------

![acid-netdata](/assets/i/news/2017-july-acid-status.jpg)

Lion Yang's laptop looking at a [netdata](https://my-netdata.io/) page of our buildbot (compiling host).

--------

Interactivity Up!
-----------------

With the introduction of monthly cycles, we have now introduced two new types of community requests available to community members: updreq (Update Request) and optreq (Optimisation Request). The former is quite easy to understand, a package is too old, then request it.

The latter though could be more variable in its content, for example, Profile Guided Optimisation is available for a package, say `git`, then a community member could open a optreq specifying building the `git` package with PGO enabled (which involves changes to the build script, or configurations). For another example, which will be a future feature to be introduced to AOSC OS, the Overlay system - in this case, a community member may request that the package Python to be built with AVX2 support flags enabled, further enhancing its performance on newer processors, to be found in its `avx2` overlay.

While updreq could be a quick and simple request, optimisation could quite easily be more difficult to open, and for our developers to investigate request and decide on if such request is actually beneficial - and to be fair, this could require more technical awareness on the part of our community members, one may quite simply think that "GNOME is too damn slow on my computer" is a valid request for us to invest into, but let's just say up front, "tell it to the upstream, we did not write the program, can't really help here, sorry".

MIPS and PowerPC?
-----------------

We've mentioned that PowerPC (32/64-bit big endian) ports will be halted until September due to lack of device availability for building and testing.

Similarly, but with time, our MIPS maintainer Junde Yhi decided that it will be quite difficult for our MIPS ports to catch up with the cycles until some major architecture-specific issues (compilers, and more) could be properly resolved. He's also estimating a September return to the cycled updates. Meanwhile, catching up will be his task.

AOSA?
-----

You might have noticed a lack of AOSA news posts on this page in August, we are currently working on a new community website which contains AOSC OS related Errata and Knowledge Base articles. Future AOSA will be posted there with a set format and more technical details (vulnerability descriptions, and PoCs if available).

We will keep you updated on this issue.

Enjoy!
------

My apologies for rambling on and on about July - there are actually quite a bit happening in our July development cycle, the changelog is over 700 lines long, it's quite hard to generalise them all - will keep practicing, I promise (LOL). But do expect the same amount of work done to AOSC OS - as our part of our continuous development effort to improve and optimise AOSC OS as your daily productivity platform.

Anyways, please enjoy this month's update. For more information on what's changed in this month's wave of updates, please take a read at our [complete changelog](https://github.com/AOSC-Dev/aosc-os/blob/master/changelogs/2017-july-changelog.md).

Problems sir?
---------------

- Report any issue to our [Issues](https://github.com/AOSC-Dev/aosc-os-abbs/issues) page.

Or alternatively...

- Find us on the #aosc IRC channel, Telegram group information will be provided if requested on IRC.
- Send us an e-mail at [discussions@lists.aosc.io](mailto:discussions@lists.aosc.io).

August
------

Information on August wave of updates will be announced tomorrow, or the day after - we are currently in the process of determining what's to be done this month. Stay tuned.

--------

— Mingcong Bai (with kind regards)