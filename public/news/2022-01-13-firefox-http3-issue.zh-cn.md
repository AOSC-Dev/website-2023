---
categories:
  - warning
title: "Firefox 的 HTTP3 特性可能导致可用性问题"
date: 2022-01-13T10:37:33-08:00
important: true
---

目前源内的 Firefox 浏览器可能会出现浏览网页时突然停止加载，或一直处于正在加载的状态，并伴随高 CPU 占用率。此问题可能与 [Firefox 的 HTTP3 Socket 功能有关](https://bugzilla.mozilla.org/show_bug.cgi?id=1749908)。

临时解决方案是关闭 HTTP3 功能，方法为地址栏输入 `about:config`，搜索 `network.http.http3.enabled`，设置为 `false`，重启浏览器后方可正常加载网页。亦可通过在“设置” > “隐私和安全”页面中取消勾选“允许 Firefox 向 Mozilla 发送技术信息及交互数据”来暂时解决问题。

我们将在近期的 Firefox 更新中修复此问题并默认关闭向 Mozilla 发送技术信息及交互数据的功能。

---

— Mingcong Bai
