---
categories:
  - warning
title: "tmux 更新可能导致默认行为变化"
date: 2023-07-06T16:00:00+08:00
important: false
draft: false
---

tmux 是一款终端复用器，预装于所有 AOSC OS 发行上。

在近期的更新（版本号 `3.3a`）中，我们引入了一个发行版默认配置，默认启用鼠标模式 (mouse mode)。然而，我们发现这一默认配置十分不受欢迎，并因此决定将其回滚至上游默认行为（即关闭鼠标模式）。该行为变化已于版本 `3.3a-1` 引入。

如果您使用 tmux 且使用我们的默认配置，您可能会在系统升级后注意到上述行为变化。若要在系统升级后保持鼠标模式开启，请按照指示在 tmux 的全局配置文件 `/etc/tmux.conf` 中取消下述注释：

```conf
# Turn on mouse mode
#set -g mouse on
```

---

— Camber Huang 
