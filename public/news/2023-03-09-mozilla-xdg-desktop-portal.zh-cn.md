---
categories:
  - warning
title: "Firefox 及 Thunderbird 更新后需要重新启动系统"
date: 2023-03-09T01:30:48-07:00
important: true
draft: false
---

我们即将推送的 Firefox 110.0.1 和 Thunderbird 102.8.0 中包含一项更改，即利用 XDG Desktop Portal 技术让上述两个应用使用桌面环境原生的文件对话框等。这一更改将明显提升 KDE 上使用 Firefox 和 Thunderbird 的体验。

因为各桌面的 XDG Desktop Portal 支持需要配合桌面会话启动，在更新后，请重启 AOSC OS 。在重启前，上述软件的文件对话框等可能无法使用。

---

— 白铭骢
