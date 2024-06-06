---
categories:
  - warning
title: "[已修复]近期一轮系统更新可能安装失败"
date: 2024-04-02T22:19:13-08:00
important: true
draft: false
---

日前，我们推出了提供 Debian 兼容性标记的 Spiral 更新，但由于更新的基础组件存在依赖环，可能会导致一些近期未更新过的系统更新失败；我们正在着力解决该问题，请大家暂时不要更新系统。

如您已经更新系统且 dpkg 包管理器报错，则代表 dpkg 已经陷入依赖循环状态；此时，请请执行如下命令手动完成更新：

```bash
sudo dpkg --configure --force-depends --force-configure-any dbus
sudo apt -f install
sudo oma upgrade
```
我们目前正在积极调查和解决该问题，并计划在问题解决之后发布更新后第一时间通知各位，谢谢大家的理解支持！