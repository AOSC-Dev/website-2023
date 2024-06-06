---
categories:
  - warning
title: "Dracut Trigger May Fail with Error while Updating System"
date: 2021-04-10T17:03:31+08:00
important: false
---

If you encounter the following error when updating AOSC OS:

    Setting up xine-lib (1.2.10-2) ...
    dpkg: cycle found while processing triggers:
    chain of packages whose triggers are or may be responsible:
      dracut -> dracut
    packages' pending triggers which are or may be unresolvable:
      dracut: /usr/lib/modprobe.d
    dpkg: error processing package dracut (--configure):
    triggers looping, abandoned

You may re-execute `apt full-upgrade` again, which will allow APT to finish update configuration.
We are still investigating this issue, but this issue appears to only affect `gnome-40` topic testers.

----

— Jack Wu (Original Author: Mag Mell)
