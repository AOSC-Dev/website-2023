---
categories:
  - warning
title: "[已解决] GLib 的 FAM 模块可能导致 Firefox 稳定性问题"
date: 2022-01-26T14:58:15-08:00
important: false
---

Core 9 更新后，我们留意到 Firefox 的稳定性欠佳，尤其是插件会经常崩溃；拖动页面对象也可能会导致标签页崩溃。我们发现这是 GLib 中的 FAM 模块导致的，但目前尚未了解清楚该模块为何会导致问题。考虑到上游目前已[移除该模块](https://gitlab.gnome.org/GNOME/glib/-/commit/7427bb71)，我们选择通过关闭 FAM 特性解决问题。

该问题已在 `glib` v2.70.2-1 中修复，此更新会在近期进入稳定源。

---

— Mingcong Bai
