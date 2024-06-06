---
categories:
  - warning
title: "近期更新引入 PolyMC 作为 MultiMC 5 替代"
date: 2022-07-27T15:23:43-07:00
important: false
---

因 MultiMC 5 [重分发及版权政策](https://github.com/MultiMC/Launcher#forkingredistributingcustom-builds-policy) 问题，我们将不再提供 MultiMC 5 的软件包（`multimc5`)。在该软件包移除后，请使用 PolyMC（社区维护的基于 MultiMC 5 的启动器）替代 MultiMC 5。

请执行下列命令安装 PolyMC：

```
sudo apt install polymc
```

安装 PolyMC 后，请参考[迁移指南](https://polymc.org/wiki/getting-started/migrating-multimc/#migrating-instances-from-multimc)将 MultiMC 5 中保存的 Minecraft 实例迁移到 PolyMC 中。

在迁移完毕后便可执行下列命令移除 MultiMC 5：

```
sudo apt remove multimc5
```

---

— Kaiyang Wu
