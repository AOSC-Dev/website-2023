---
categories:
  - warning
title: "OpenSSL 3 更新进入稳定源"
date: 2023-10-06T21:00:00+08:00
important: true
draft: false
---

经过近两个月的重构、修缮及更新工作，OpenSSL 3 运行时以进入稳定源，取代目前 [已失去上游支持](https://www.openssl.org/blog/blog/2023/09/11/eol-111/) 的 OpenSSL 1.1 运行时。

如果您在更新过程中遇到任何问题，请 [于 aosc-os-abbs 仓库报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) 或 [社区各聊天群组](https://t.me/aosc_main) 与我们联系；为保持对部分老软件的支持，我们依然提供 OpenSSL 1.1 兼容包 (`openssl-1.1`)，但考虑到潜在安全风险，推荐您及早将软件更新或联系发行方适配 OpenSSL 3。

**请注意：本次更新涉及软件包较多，因此系统更新可能需要较长时间；此外，考虑到 OpenSSL 为系统基础库，如出现意外断电或重启的情况，将很有可能导致系统故障。因此，建议将笔记本等使用电池的设备接入交流电并保持供电稳定，以防更新时发生意外。**

---

— 白铭骢
