---
categories:
  - warning
title: "升级系统时可能遇到触发器循环"
date: 2021-07-03T19:48:54+08:00
important: false
---

若在升级时遇到此错误：

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

请执行 `apt install -f` 来暂时解决问题。
 
---

— Mag Mell
