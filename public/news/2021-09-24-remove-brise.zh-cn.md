---
categories:
  - warning
title: "Brise 用户可能需要手动迁移至分拆后的 Rime 方案包"
date: 2021-09-24T07:51:04+08:00
important: false
---

使用 Brise 的用戶请注意：

目前我们的 rime 方案已经拆包许久，老的 Brise 近期将会从源中删除，若你还在使用 Brise 请尽快完成迁移。

迁移方法：

```
apt remove brise # 卸载 brise
apt install rime-base # 若想省事，可直接安装 rime-base，若嫌这个方法安装了用不到的方案，可直接安装其方案，如 rime-luna-pinyin，安装后用戶不需要做其他步骤便迁移完成
```

---

— Mag Mell
