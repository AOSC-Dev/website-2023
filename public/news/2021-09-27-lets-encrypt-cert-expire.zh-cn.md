---
categories:
  - warning
title: "有关 Let's Encrypt 主要根证书迁移的注意事项"
date: 2021-09-27T09:54:24-07:00
important: true
---

由于 Let's Encrypt 先前的主要根证书 DST Root CA X3 将于 2021 年 9 月 30 日过期，Let's Encrypt 在更换根证书后采取了一系列补救措施，以避免老设备和系统无法正常访问由新证书保护的站点。

而由于其中一个措施导致使用旧版 OpenSSL 和 GnuTLS 库的应用无法连接任何受 Let's Encrypt 保护的站点，AOSC OS 被迫通过 `ca-certs` 20210907 更新禁用 DST Root CA X3 根证书来避免这一状况发生。

尽管 DST Root CA X3 在本月末前仍然有效，如果更新了 `ca-certs`，你可能无法访问仅由其保护的站。这样的站点非常少见，但如果你不幸遇上这样的站点，可以使用如下命令手动回滚 `ca-certs` 至 20201201-1 来暂时恢复访问：

    sudo apt install ca-certs=20211201-1

该预警将于 2021 年 9 月 30 日失效，届时你可放心升级至新版。

欲知更多详情及讨论，请参阅 [aosc-os-abbs #3473](https://github.com/AOSC-Dev/aosc-os-abbs/discussions/3473) 。

---

— Kexy Biscuit, Zixing Liu
