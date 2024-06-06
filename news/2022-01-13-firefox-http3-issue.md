---
categories:
  - warning
title: "HTTP3 Feature in Firefox May Cause Usability Issues"
date: 2022-01-13T10:42:39-08:00
important: true
---

At present, Firefox browser may suddenly stop loading when browsing web pages, or get stuck while loading pages, accompanied by high CPU usage.
This issue may be related to [Firefox's HTTP3 Sockets feature](https://bugzilla.mozilla.org/show_bug.cgi?id=1749908).

You may temporarily workaround this issue by disabling Firefox's HTTP3 features.
Begin by accessing Firefox's advanced configurations page by entering `about:config` in the address bar,
search for `network.http.http3.enabled` and set it to `false`. After which, restart the browser,
and Firefox should load pages normally. Alternatively, you may workaround this issue by unchecking
"Allow Firefox to send technical information and interaction data to Mozilla" in Settings - Privacy & Security.

We will soon push a Firefox update to address this issue,
disabling the Firefox feature to upload "technical information and interaction data" to Mozilla by default.

---

— WhiredPlank, Mingcong Bai
