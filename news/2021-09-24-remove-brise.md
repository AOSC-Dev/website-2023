---
categories:
  - warning
title: "Brise Users May Need to Migrate to Schema Packages"
date: 2021-09-24T07:51:01+08:00
important: false
---

Brise users be advised:

We have recently split our Rime schema package (`brise`) into several packages,
and we will remove the old `brise` package will from the repository soon.
If you're still using Brise, please migrate to the new schema packages as soon as possible.

You may simply migrate with the following commands:

```
apt remove brise # Uninstall brise
apt install rime-base # If you don't mind installing unused schemas, you can simply install rime-base. Otherwise you can install specific schemas, such as rime-luna-pinyin.
```

---

— Mag Mell, Kaiyang Wu, Mingcong Bai
