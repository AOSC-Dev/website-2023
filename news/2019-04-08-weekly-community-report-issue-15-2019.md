---
categories:
  - news
date: '2019-04-08'
important: false
title: 'Weekly Community Report: Issue 15, 2019'
url: /news/2019/04/08/weekly-community-report-issue-15-2019.html
---


So, let's kick off the weekly updates (*note: issue "15" for this is "week 15" of 2019)! I'm still trying for a good format at the moment (and also tight on time), but hopefully we will see better quality in future posts.

AOSC OS
-------

We are currently trying to wrap up the current cycle (which has been dragging on for almost six months at this point) - there are still hundreds more packages to rebuild for the upcoming Core 6 (GCC C++ ABI, and Perl 5.28). After these rebuilds are sorted for AMD64, we will go into a month-long freezing period - hopefully starting on April 26th. During this freeze period, the rest of our ports will be synchronised.

In this cycle, we have updated or rebuilt virtually all packages in the repository - mostly because of other major updates, namely Python 3.7 and OpenSSL 1.1.

Now, having trapped ourselves (and you) in this extremely long cycle, we are looking to shorten the next one - focusing on updating all major desktop environments and their components - GNOME 3.32, Plasma 5.16, KDE Applications 19.04, MATE Desktop 1.22, etc.

We are also working on transitioning our RISC-V port (`riscv64gc`) port into "regular" maintenance - it will have working Testing and Stable branches, and ready to follow future cycle schedules by the end of this cycle. 

Looking back into history (literally), we have been putting (low-priority) effort into creating a new i586 port for 32-bit only, Pentium (1993) and newer devices (Pentium II, Pentium III, Transmeta Crusoe, ...). We are also planning to create specialised configurations for ports targetting older devices (`i586`, `mips64el`, `powerpc`, and `ppc64`), while sharing the same [Core](https://github.com/AOSC-Dev/aosc-os-core/) and [ABBS tree](https://github.com/AOSC-Dev/aosc-os-abbs/) - more detail to come in future weeks.

Community Infrastructure
------------------------

A new Telegram bot has been created by [The Salted Fish](https://gist.github.com/RedL0tus/), which manages a game of Last Man Standing... Where people who unfortunately can't go to sleep early can entertain themselves with competetive "staying-up."

*Of course, we don't endorse such unhealthy behaviour... But if you'd like to have some fun while not asleep in early morning - here's one option.*

----

Okay, that should do it for this week. Come back next Monday at 6:00AM for more community and project updates!

— Mingcong Bai