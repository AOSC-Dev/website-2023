---
categories:
  - news
date: '2017-09-24'
important: false
title: 'Goings On: A Quick Mid-September Update'
url: /news/2017/09/24/goings-on-a-quick-mid-september-update.html
---


*On a personal note, I do apologise for the lack of update for the past month - as my friend Junde Yhi and I went on a 2-week trip to parts of Russia - and now it's the beginning of the school season so time management was a great struggle.*

Anyways, lets go on with the update. I'm happy to report that Core 5.0 is now in the final testing phase (Release Candidate 4), and should hit the stable repository by the end of the month - yes, with the Joint-August-and-September Wave of updates (and for the same reason mentioned above, we were unable to release the August wave, need more packagers!).

We have now finished preparing a semi-final set (well, final if we didn't find anything stupid) of Core 5 wallpapers with a completely new style, here's a small banner to be used in the Core 5 announcement to give you some ideas...

--------

![core5-banner](/assets/i/news/core5-banner.jpg)

--------

If you want, the full set is already available at the [aosc-os-artworks](https://github.com/AOSC-Dev/aosc-os-artworks) repository, and will be made available to users of the Testing repositories in ~6 hours.

Apart from the wallpaper change, we have made quite some changes to the Core, including...

- Package/component updates (of course).
- Bug fixes.
- Package removal from Core.

But I'm not going to share them all just yet, as in the Release Candidate phase, things can still change... a little bit. We will post another update on the actual date-of-release.

--------

Another thing worth looking forward to in September or October is the inclusion of the first wave of "Overlay" packages for AMD64 (x86_64). We are currently making some final touches to the [Autobuild3](https://github.com/AOSC-Dev/autobuild3) build toolkit and [apt-gen-list](https://github.com/AOSC-Dev/apt-gen-list) - which when done, Overlay repositories should be enabled based on your processor's capabilities.

More on that later (it's still crazy busy here so I do apologise for repeated delays).

--------

As for non-AMD64 (ARMv7, AArch64, PowerPC 32-bit, PowerPC 64-bit, MIPS 32-bit, MIPS 64-bit) ports of AOSC OS, we are currently working to synchronise all updates with the [ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs) - we can't guarantee a date of completion just yet, but here are the two things we are sure about...

- We will proritise the synchronisations of Core, and `bugfix` updates (and that includes all security fixes).
- Any future Core and `bugfix` updates will be synchronised immediately, while "normal updates" from the `staging` branch will settle in the forseable future.

--------

New AOSC OS tarballs and images will roll out in October (probably by the end of the month) with the Core 5 updates - but again, for non-AMD64 ports, this will not necessarily include all the feature updates from the main tree - we do apologise for that.

--------

— Mingcong Bai