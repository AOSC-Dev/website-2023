---
categories:
  - news
date: '2020-01-30'
important: false
title: New Wave of Updates Available (Fall 2019)!
url: /news/2020/01/30/new-wave-of-updates-available.html
---


It's been a while since the last news post, but we've been busy working on
various community projects. So let's treat this post like a "Weekly Community
Report," (more to come later, but probably no longer weekly) but let's start
with the latest wave of AOSC OS updates.

"Fall" 2019 Wave
----------------

The last iteration cycle have been quite busy, and the resulting wave of updates
are equally packed full of exciting features and general quality-of-life
improvements.

### Core 7, Codename "Gumblex"

On AOSCC, we voted for our next, G-prefixed codename for AOSC OS Core 7.
For the sake of humour and recognition of his strong contribution records to
the AOSC OS project, the attendees decided that our next codename will be
chosen in honour of Dingyuan Wang, a.k.a. "Gumblex."

![core7-gumblex-postinst](https://i.imgur.com/iQSBbpZ.png)

*All hail the piggy!*

Of course, Core 7 is not just a name, it's a collection of updates and fixes to
AOSC OS' toolchains and core components. Most notably, GCC is updated to 9.2.1,
including the added [D Language compiler](https://wiki.dlang.org/GDC) support.
Other components like Bash, Binutils, as well as the Readline, Ncurses, and GNU
C Library (Glibc) libraries are also updated for better performance and
compatibility with new technical standards.

For developers, all build configurations and scripts in the Core are cleaned up
and reworked for compliance with the
[AOSC OS Package Styling Manual](https://wiki.aosc.io/developer/packaging/package-styling-manual/),
easing future maintenance and changes.

### Application and Component Updates

The last iteration cycle closed with over 1,000 commits across the
[ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs/), loads of updates were
made to the AOSC OS repository. Therefore, listed below are only the most
notable updates out of the hundreds made available for AOSC OS users like you:

- KDE Frameworks 5.65, Plasma Desktop 5.17, and KDE Applications 19.12.
- LibreOffice has been updated to 6.3.4.
- Linux Kernel has been updated to 5.5, with the Long-Term Support Kernel
  updated to the 5.4 branch.
- Vim has been updated to 8.2.
- LLVM (Low-Level Virtual Machine) has been updated to 9.0.
- Mesa has been updated to 19.3.
- Node.js has been updated to the 12.14.0 Long-Term Support Branch.
- Fcitx 5 components are now available.
- FUSE 3.x is now available to provide support for SSHFS 3.x.
- .NET Core 3.1 is now available, and all .NET packages are now maintained
  on a per-branch basis, in compliance with Microsoft's specifications,
  discussed in their
  [.NET Core distribution packaging](https://docs.microsoft.com/zh-cn/dotnet/core/distribution-packaging)
  page.
- ...

Looking Forward to "Winter" 2020
--------------------------------

With the closing of the "Fall" 2019 cycle, we have made various changes ahead
of the next cycle. For instance, the original
[Core Tree](https://github.com/AOSC-Dev/aosc-os-core/) has been merged into
the main [ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs/). We did this
because this will make it easier for us to keep track of issues and branch
merging across the two integral AOSC OS components, whereas before confusion
and time management issue have left the Core components ineffectively
maintained.

We have also made important changes to how we organise and assemble our
Iteration Plans for the future. For instance, in our
["Winter" 2020 Iteration Plan](https://github.com/AOSC-Dev/aosc-os-abbs/issues/2073),
we have introduced two new sections that differentiates the future cycles with
the "Fall" cycle.

### Cycle Schedule

Starting with the "Winter" cycle, we will employ a hard-deadline schedule,
whereas before, our iteration cycles tended to drag past the original 3-month
cycle plans. The reason for the delays were that we haven't been able to
control the amount of work to be done in a cycle, and as we scramble to
complete all entries listed on the Iteration Plan, we have failed to cut off
our cycles decisively.

With a hard-deadline schedule, we intend to control our cycle lengths by
setting cut-off dates along the way, and change our priority from completing
all entries to keeping with the schedule. We will see how it goes in the
months leading up to May, but here is our current schedule as displayed on
our current Iteration Plan:

- February 1, 2020: Start first survey for updates.
- March 1, 2020: Start second survey for updates.
- March 31, 2020: Freeze Testing-Proposed.
    - Merge all changes to Testing for updates.
    - Transfer all skip-ahead changes to Experimental.
    - All non-complete entries on Testing-Proposed => Testing to be deferred to Spring 2020.
- April 1, 2020: Commence draft on Spring 2020 Iteration Plan.
- April 15, 2020: Merge all changes to Stable, cycle completion.

So see you in April 15 with another wave of updates, hopefully.

### Priority Tasks

We have also introduced a new section to our Iteration Plan to distinctly mark
certain tasks as "Priority," and maintainers will be urged to complete them
before all others. For instance, GNOME 3.36 and Plasma 5.18, which are set
to release in February and March, will be listed here for prioritised
completion. Lagging changes like MATE 1.22 and XFCE 4.14 will also be listed
here to make sure they don't drag on for any longer.

Again, we will see how it goes.

New Portal
----------

As you might have noticed, we have switched to a new Community Portal in
December last year. This replaces our last design made in 2015, which, for a
lack of documentation, became increasingly difficult to maintain. This
eventually worsened to the point that it was practically impossible to even
complete elements of the original design (distribution downloads), let alone
for new features to be implemented.

Therefore, with the help from [@liushuyu](/people/~liushuyu), a new design was
made with minimalism in mind, and it is already
[better documented](https://wiki.aosc.io/developer/infrastructure/community-portal) than
the last. It might look simple and plain, but it loads extremely fast, and is
(hopefully, as one of the layout designers) easier to navigate. We have also
took note to keep the most important information up-front. We are primarily
a community and a distribution project, and we intend to present these
information as clearly as we could.

Let us know what you think, and please send your suggestions and complaints
[our way](https://github.com/AOSC-Dev/aosc-portal-kiss.github.io/issue/new/)!

Coronavirus, and AOSCC 2020
---------------------------

As most of you may know, China is currently in deep waters with the Novel
Coronavirus (nCoV 2019) outbreak. As a community primarily stationed in
Mainland China, we hope that you and our community members are staying
healthy and well.

However, as the summer closes in, it also brings to concern as to whether
any venue would be made available in July, and therefore if AOSCC 2020 could
be held. In any case, we will keep you posted on the latest information.

----

And such concludes our first 2020 update. We wish you a happy belated New Year
and all the best for your future endeavours.

— Mingcong Bai