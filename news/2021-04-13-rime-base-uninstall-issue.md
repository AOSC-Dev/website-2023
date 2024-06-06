---
categories:
  - warning
title: "[SOLVED] Uninstalling rime-base May Result in Configuration Errors"
date: 2021-04-13T11:49:26+08:00
important: false
---

We are aware of an issue where uninstalling `rime-base` will result in an error.
We will release a fix as soon as possible, and post an update here.
For the meanwhile, please do not uninstall `rime-base`.

----

2021-04-14 Update
-----------------

The following updates are now available to address the issue above:

    stable-main all
    ^ rime-prelude (https://packages.aosc.io/packages/rime-prelude) 20210208 ⇒ 20210208-1

    stable-main amd64
    + rime-schema-manager (https://packages.aosc.io/packages/rime-schema-manager) 1:0.2.1
    + rime-schema-manager-dbg (https://packages.aosc.io/packages/rime-schema-manager-dbg) 1:0.2.1

    stable-main arm64
    + rime-schema-manager-dbg (https://packages.aosc.io/packages/rime-schema-manager-dbg) 1:0.2.1
    + rime-schema-manager (https://packages.aosc.io/packages/rime-schema-manager) 1:0.2.1

    stable-main loongson3
    + rime-schema-manager (https://packages.aosc.io/packages/rime-schema-manager) 1:0.2.1

    stable-main ppc64el
    + rime-schema-manager-dbg (https://packages.aosc.io/packages/rime-schema-manager-dbg) 1:0.2.1
    + rime-schema-manager (https://packages.aosc.io/packages/rime-schema-manager) 1:0.2.1


----

— Jack Wu (Original Author: Mag Mell, Translation: Mingcong Bai)
