---
categories:
  - warning
title: "Recent Update Introduces PolyMC as Replacement for MultiMC 5"
date: 2022-07-27T15:23:41-07:00
important: false
---

Due to issues with MultiMC 5's
[redistribution and copyright policies](https://github.com/MultiMC/Launcher#forkingredistributingcustom-builds-policy),
we could no longer provide branded MultiMC 5 package (multimc5). After the
removal of the package, please consider replacing MultiMC 5 with PolyMC (a
community driven launcher based on MultiMC 5).

Please execute the following command to install PolyMC:

```
sudo apt install polymc
```

After installing PolyMC, please follow the
[migration guide](https://polymc.org/wiki/getting-started/migrating-multimc/#migrating-instances-from-multimc)
to migrate your Minecraft instances from MultiMC 5 to PolyMC.

You may now remove MultiMC using the following command after migrating all
instances:

```
sudo apt remove multimc5
```

---

— Kaiyang Wu
