---
categories:
  - news
date: '2017-06-30'
important: false
title: 'Dev. Updates Issue #3: New Update Pattern!'
url: /news/2017/06/30/dev-updates-issue-3-new-update-pattern.html
---


In this special issue of Dev. Updates, we are presenting to you a new, monthly, and function defined update pattern for AOSC OS. With this change to update pattern, AOSC OS will be updated in a scheduled fashion, where:

- Regular version/feature updates will be pushed by the last week of each month.
- Security updates will be pushed at availability. [^1]
- Bugfixes with severe damage to usability will be pushed at availability, similar to security updates. [^2]

With that said, with July, you will not be receiving updates to your AOSC OS installation on a irregular basis (usually we aimed for a batch per week, but updates could had happened on a daily basis as well... essentially it was never planned or guaranteed), instead, we are expecting to ship the July wave of updates by around 28th - for all architectures/ports. But as aforementioned, security and important bugfix updates will be pushed as soon as they become available.

What if I can wait though, you asked... Well, by our schedule, we are expected to finish all update packages by Day 20, and tests finished by Day 25 of each month (February could be a mess but we will see). That said, by Day 20 of each month, updates will be pushed to our testing repositories, details coming in the following weeks leading up to AOSCC. However, if you do mean serious business when using AOSC OS, you might want to steer clear of that - as packages could be overwritten without any version change, making it hard sometimes to manage your updates - not to mention all the potential bugs you may run into, as we haven't tested them yet when pushing all these fresh updates to the testing repositories.

It should also be noted that general version or feature updates of all AOSC OS packages are collected and scheduled on the first day of each month, meaning that if a package has a new version to be released on July 2nd, it will be pushed with the August wave of updates - could be sad for some of you cutting-edge users, but we have our reasons not to go full Arch Linux, and here are our reasons...

Firstly, with the introduction of multiple ports and noarch/data packages, updates across different AOSC OS ports could be asynchronous, meaning that some data packages - which is shared among all ports - could be unsuitable for one or more of the ports, as newer data packages could be unsuitable for older application/binary packages, and vice-versa. This was heavily exhibited in the past 6 months with our developers struggling to find time.

Secondly, quality is king, while it's "cool" as a distribution to be able to push a new GNOME release set the week it's got released, the price could be steep as it might come with all manners of issue - introduced with upstream code or general oversight of our packagers - making it hard for work to be carried out on AOSC OS when a big batch of updates come untested.

And lastly, this gives our developers more time (which is not in abundance as most of us are college students) to "improve" our packages, and not just updating them when an update is available - that is a general waste of time for us, and not exactly productive when it comes to improve user experience of AOSC OS. With more time on hand for handling updates and packaging, this could lead to a quality improvement, in general, to AOSC OS.

So that's all we have for now, a quick heads up for our fellow AOSC OS users. Please enjoy the summer.

[^1]: Unless the security update come in a form of a major update, which could potentially break its dependees. In which case you will be notified while we figure out a way to handle this issue.
[^2]: This means that if with a month's update, the package simply stopped working (which is unlikely given that we will be doing tests on them), or a date-sensitive application ceased to function - for example, `youtube-dl`, which relies constantly on newest protocols/routines to grab videos off websites. In that case, upon request, we will update the package(s) and make it (them) available as soon as possible.