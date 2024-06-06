---
categories:
  - news
date: '2017-08-02'
important: false
title: Coming Up in August...
url: /news/2017/08/02/coming-up-in-august.html
---


With a somewhat successful completion of the monthly update cycle in the [July Wave](https://aosc.io/news/4882-july-wave-is-here), we have just finished discussion on goals/objectives in the August Wave of updates. The focus or the theme, if you like, of this month will be refinement and clean up.

First of all, a majority of work to be done this week will be dictacted by ACID - a CI-like mechanism which builds every single packages on offer in the [ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs/). Packages to be fixed are mounting up to couple hundreds at present, and that will be what we are doing this month - fix them while the number climbs even higher. In addition to that, new commits introduced to our [Autobuild3](https://github.com/AOSC-Dev/autobuild3/) toolkit - if you haven't heard of it yet, it's our only official packaging tool for AOSC OS - increased the level of strictness while running build scripts, loads of old scripts should end up failing. It's better to rebuild these old and low-quality packages preemptively than ending up as bugs discovered by users, and this is exactly why we are doing this in August.

While handling this potentially significant task load, in August...

- All pakreqs, optreqs, and updreqs will be handled, those delayed to September and further should be explained in August Wave's changelog.
- All open issues on Github, except those marked with `longterm` label, should be re-investigated and (if time allows) fixed, or else closed (if justified).
- Core 5 should be planned according to AOSCC announcement and discussions, and prepared for a mid-September release.
- Experiment on packaging with [the Ciel](https://github.com/AOSC-Dev/ciel/).

--------

How about package updates then? Those not specifically requested by community members will be handled according to time allowance in August - while of course, those requested will be dealt with with priority. As always, security and urgent bugfixes will be provided at instance of availability as usual, no worries there.

Hopefully, in September we developers and users will be working with a cleaner copy of AOSC OS.

--------

— Mingcong Bai