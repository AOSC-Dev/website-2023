---
categories:
  - warning
title: "Trigger Looping While Upgrading the System"
date: 2021-07-03T19:48:57+08:00
important: false
---

If you encountered the following error when upgrading the system:

    dpkg: cycle found while processing triggers:
     chain of packages whose triggers are or may be responsible:
      dracut -> dracut
     packages' pending triggers which are or may be unresolvable:
      dracut: /usr/lib/modprobe.d
    dpkg: error processing package dracut (--configure):
     triggers looping, abandoned
    Errors were encountered while processing:
     dracut
    E: Sub-process /usr/bin/dpkg returned an error code (1)

Please execute `apt install -f` to work around the issue.

---

— Kaiyang Wu, Mag Mell
