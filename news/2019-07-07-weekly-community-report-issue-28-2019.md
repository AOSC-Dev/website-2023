---
categories:
  - news
date: '2019-07-07'
important: false
title: 'Weekly Community Report: Issue 28, 2019'
url: /news/2019/07/07/weekly-community-report-issue-28-2019.html
---


*Well, it's been yet another... two months (?!) since the last community report.*

Let's not make this a trend - but the writer of this series of news posts was drowned in packaging tasks to finish off the last wave of updates. Plus we are now just four days away from AOSCC 2019, so at any rate, we should have posted something anyways - right?

Winter Wave: 7 Months Late
------------------------------

The last update cycle has been nothing short of disastrous, with way too many features planned and crammed into the 3-month timeframe (which should have ended before 2019). Well at least it didn't turn into another [Windows "Longhorn"](https://web.archive.org/web/20060218125408/http://blogs.msdn.com/michkap/archive/2005/10/16/481625.aspx), phew!

![core-6-update](https://i.imgur.com/gGcmMUO.png)

But as a user, while you may be angry at the delay - and rightfully so - we have worked (literally) beyond our capacity to bring you a ship load of system-wide upgrades...

- All architectures have ~50% of their packages updated or refreshed. With this huge pass of builds, we have eliminated a huge amount of quality (and thus usability) issues with our packages - owing to our new [Quality Assurance](https://packages.aosc.io/qa/) project led by [Gumblex](https://github.com/gumblex). We hope that you won't miss the golden age of application launch errors.
- Major component updates - most notably, OpenSSL 1.1, Python 3.7, and GCC C++ ABI upgrade. This is actually the main reason for the delay, across our five active architectures (plus one data/architectural-independent "architecture"), over 10,000 packages were built.
- Core 6 "Fsck" is here! One year late. All toolchains and basic runtime components like the GNU C libraries are now up to date.
- Device support improvements, such as (but not limited to)...
	- Added support for Intel Wi-Fi 6 AX200 wireless cards.
	- Improved support for post-Sony Vaio laptops, specifically, their keyboard backlight controls.
	- Added support for PineTab and its peripherals.
	- ...
- Package updates as usual, you know the drill. But admittedly we are a little behind on desktop environments for reasons stated above.

You should be able to obtain the (large set of) updates now. However, we are aware of **an issue that might prevent a smooth update.** We have documented the cause and workaround in this [Errata entry](https://wiki.aosc.io/aosc-os/errata/00009-error-updating-to-systemd-242).

Again, we are sorry about the delay and will work on cycle management improvements in the coming AOSCC sessions.

AOSCC 2019
-----------

On July 12 - 14th, AOSCC 2019 will take place in the University of Science and Technology of China - in Hefei, China. This three-day community gathering will provide loads of fun and giggles... and of course, ample opportunities for face-to-face discussions on community projects, talks from the friends of our community, and lucky draws.

Since we didn't get to meet last year due to venue troubles, we have greatly expanded our souvenir collection to try and make up for it. In keeping with our community traditions, we have made not one, but two pages of stickers for you meme aficionadoes!

![stickers](https://i.imgur.com/unUT3CC.png)

Additionally, we have made badges from the community, AOSC OS, and AOSC OS/Retro's logos. These badges and the sticker sets are all free to take at the AOSCC venue - and available at the cost of postage after the conference.

Information about attendance and schedules are availabe from the ["AOSCC 2019" Wiki page](https://wiki.aosc.io/community/aoscc/2019). We look forward to seeing you there!

----

— Mingcong Bai