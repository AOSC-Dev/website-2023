---
categories:
  - community
  - news
title: Virtual AOSCC 2020 Re-cap
date: '2020-09-30'
important: false
---

*With [over 20 attendees on Discord](https://aosc.io/news/gallery/), live
streaming on Bilibili, talks, and workshops, it was a fun and fruitful AOSCC
2020 indeed.*

Year In Review
--------------

As usual, I started this year's AOSCC with an annual review of our community's
accomplishments, challenges, and outlook. Overall, our community maintained
a strong culture, while seeing significant growth in both of our hardware
and software arsenals.

### Community Culture, and An-An

As before, our community has been as vibrant as ever. Famous for our cheeky
jokes, we generated over 100 new jokes, many of which became known beyond
AOSC. We also saw the imminent introduction of An-An (安安), our community
mascot, designed by none other than Tyson Tan. Tyson is the designer of Konqi
and Kiki, mascots of KDE 5 and Krita, respectively.

Here below is a first draft of how she would look like. We plan on creating
a page dedicated to show case her and her story, An-An souvenirs are also
coming to our next AOSCC (if an offline one could happen)!

![an-an](https://i.imgur.com/1TRhCCU.jpg)

### Hardware and Software Projects

On the hardware front, 2019 saw a surge in new [BuildBots](https://wiki.aosc.io/developer/infrastructure/buildbots/),
increasing our compiling capacity exponentially. Most notably, the
[generous donation](https://aosc.io/news/posts/2020-05-03-new-aarch64-build-server/)
of a Huawei Kunpeng 920-based server from a Chinese university helped us
reaching feature parity between our AArch64 (`arm64`) and AMD64 (`amd64`)
ports. The introduction of multiple Loongson 3 machines, along with a
[Blackbird](https://www.raptorcs.com/BB/) built around POWER9 processors
sprung to life multiple new ports to AOSC OS and AOSC OS/Retro.

The increase in computing capacity also made it possible for us to enable
Link-Time Optimisation across all architectural ports and all packages where
possible. The enablement of Link-Time Optimisation means potential decrease
in binary sizes and memory consumption, as well as performance uplift in
many cases.

### Plans and Outlook

We also have many plans for the coming year, some more conservative, and
some more optimistic. Among the conservative (and more likely) plans, we
plan to start rebuilding our packages by sections by the end of the year,
transitioning into a topic-based iteration system (detail to come below),
as well as introducing the concept of "secondary" architectures for those
ports whose build hosts lacked in compute power and could require more
experimental attention (e.g., the Loongon 3 and POWER9 ports).

### In Further Detail

Many other reviews on our infrastructures and development projects were also
discussed, more details could be found on my
[slides (in Simplified Chinese)](https://repo.aosc.io/aosc-documentation/aoscc-2020/mingcong-bai/AOSCC%202020%20-%20Year%20in%20Review.pdf),
and also a [recording (in Mandarin Chinese)](https://www.youtube.com/watch?v=eXPzOF2hX3s)
for my presentation.

AOSCNet
-------

Staph Zhang introduced a replacement for our current
[BuildBot Relay infrastructure](https://wiki.aosc.io/developer/infrastructure/buildbots/),
which used to rely on two central servers to relay SSH connections. This
has been proven prone to downtime due to server failures, and despite
improvements to our Relay infrastructure, less-than-ideal latencies when
accessing from multiple localities.

Staph's AOSCNet instead creates a "full mesh" community-wide private network
using the [Tinc VPN](https://www.tinc-vpn.org/). By doing so, Staph expects
reliability (and probably performance) improvements when accessing community
resources such as BuildBots and other assets.

More details could be found in Staph's [AOSCNet slides](https://repo.aosc.io/aosc-documentation/aoscc-2020/staph-zhang/AOSCC2020AOSCNet.pdf)
and [recording of his talk (in Mandarin Chinese)](https://www.youtube.com/watch?v=gRPewpLvOEo).

ACBS, Autobuild3, DeployKit, and Ciel-rs
----------------------------------------

Zixing Liu was a true M.V.P. when it comes to improving our community's
development tooling, as well as implementing (a way overdue) user feature.

In his presentation, he recounts his contributions from vastly improving
[ACBS's](https://github.com/AOSC-Dev/acbs/) and
[Autobuild3's](https://github.com/AOSC-Dev/autobuild3/) reliability, allowing
AOSC OS maintainers more time and peace of mind and, of course, improving
our distribution's reliability and projected quality. He plans to do the same
with his Rust re-implementation of [Ciel](https://github.com/AOSC-Dev/ciel/),
our containerised build environment manager.

Another important contribution from Liu this year was (finally) a working
implementation of DeployKit, albeit for now, only in the form of a Terminal
UI based on a Rust curses library. That now ends AOSC OS's history without a
functioning installer. To complement DeployKit, a Live image is coming soon.

Check out Liu's [slides (in Simplified Chinese)](https://repo.aosc.io/aosc-documentation/aoscc-2020/zixing-liu/20200923-liushuyu.pdf)
and [talk (in Mandarin Chinese)](https://www.youtube.com/watch?v=MXeXdMD3qpQ)
for a list of his contributions.

Topic-Based Iteration System
----------------------------

After two hours of [heated debates and efficient discussions](https://www.youtube.com/watch?v=5kxl_TIcPAE),
we worked out an action plan to switch to a topic-based iteration system.
This new system is brought out to replace our inefficient seasonal iteration
cycles.

Well, for how much was gone over in the discussion, I think this section would
be better presented with our draft of our new
[Maintenance Guidelines](https://wiki.aosc.io/developer/packaging/topic-based-maintenance-guideline/)
for the topic-based iteration system. With this change in our iterative model,
we expect to see faster (and better tested) updates and package introduction.

Let's see how this goes starting mid-October, fingers crossed.

Missed AOSCC 2020?
------------------

To catch up with AOSCC 2020's talks and discussions, please head on over to
our [YouTube channel](https://www.youtube.com/channel/UCQcEbjx5eVZYeH2Q59vPf9g)
for recordings. These recordings, since most of our attendees are from China
or are Chinese speakers, are in Mandarin Chinese.

If you need help understanding anything or would like clarifications, please
don't hesitate to reach out to us on IRC (Freenode #aosc),
[Discord](https://discord.gg/VYPHgt9), or Telegram (please inquire on IRC or
Discord). We will try our best to help.

Pictures from of our shelter-in-place AOSCC 2020 "venue" could be found in our
[Photo Albums](https://aosc.io/news/gallery/).

AOSCC 2021?
-----------

Who knows, since we could only hope for the best... But for the meanwhile, 
please stay safe and healthy!

----

— Mingcong Bai
