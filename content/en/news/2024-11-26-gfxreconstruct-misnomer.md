---
categories:
  - advisories
title: "gfxreconstruct 软件包标记错误"
date: 2024-11-26T22:00:00+08:00
important: false
---

由于维护者疏忽，我们错误将今日引入的 `gfxreconstruct` 工具的软件包名标记为了 `gfxconstruct`；考虑到软件包刚刚引入，我们决定采取撤包并重新上传带有正确名称的软件包的操作。

如果您安装了该软件包，请先使用如下命令卸载：
```
oma remove gfxconstruct
```
待正确的 gfxreconstruct 软件包推送后，请通过如下命令重新安装：
```
oma install gfxreconstruct
```
我们为此带来的不便表示歉意！
