---
categories:
  - warning
title: "700+ Packages Retired - What You Should Know"
date: 2023-02-11T22:55:48-07:00
important: true
draft: false
---

Rationale
---------

Here's a little known fact, AOSC OS has been built upon the same source tree
since 2014. That's almost ten years worth of accumulated packages and code!

Impressive, right? Well, not quite in the long run. As we examined our
maintenance statistics, we found at a not insignificant proportion of our
[ABBS Tree](https://github.com/AOSC-Dev/aosc-os-abbs) hasn't received any
update for more than two years. This has prompted us to start retiring
packages. How might this benefit users like you?

1. Less unmaintained (orphaned) packages means less packages that may come
   broken from the repository. You can be more confident about packages
   working right out of the box.
2. Less work for us means more time to polish existing packages. Merely
   compiling and packaging software is not enough for a good experience. Take
   for example our KDE packages, we took time to discuss and test each
   pre-installed component, [finding numerous areas for improvement](https://wiki.aosc.io/developer/minutes/20230204/).
   It takes hours to work through each affected packages and implement fixes,
   less time spent on seldom used packages means more time to spend on more
   frequently used ones.

Effect
------

What does this mean? This means that some packages that you may be using could
be removed from repository and will receive no further updates and fixes.
Continue using these package may potentially be risky, as security
vulnerabilities will no longer be addressed. To help you be aware of what
packages were retired, we have developed [Hunter](https://github.com/AOSC-Dev/hunter).

Unless you removed `util-base` at some point, a system update should install
this tool automatically. Otherwise, execute the following command to do so:

```
# sudo apt install hunter
```

Then, simply run `hunter` to see a list of affected packages.

Re-introducing Packages
-----------------------

Want a package back in the repository? No problem, just let us know by filing
a [bug report](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&template=bug-report.yml).

---

— Mingcong Bai
