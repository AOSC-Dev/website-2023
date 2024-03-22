---
categories:
  - warning
title: "紧急安全更新：Shadow"
date: 2022-07-02T17:14:19-07:00
important: true
draft: false
---

近日，AOSC OS 维护者发现系统中的 `/etc/shadow` 文件为[全用户可读](https://github.com/AOSC-Dev/aosc-os-abbs/issues/4045)。该问题属于严重安全漏洞，我们已为此推送安全更新。

请尽快将 shadow 更新至 `>= 4.10-1` 版本。

---

— Mingcong Bai
