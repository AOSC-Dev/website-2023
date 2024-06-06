---
categories:
  - warning
title: "[已解决] 紧急更新：xrdp 包含预生成私钥"
date: 2021-06-30T08:28:30+08:00
important: false
---

据 Void Linux 维护者 Chocimier [\<chocimier@tlen.pl\>](mailto:chocimier@tlen.pl)
报告，我们的 xrdp 软件包内包含了构建时生成的私钥。 **这属于严重安全问题，我们已
就此推送了紧急修复。** 如果你的系统中安装了 `xrdp`，请确保你的 `xrdp` 版本为
至少 `0.9.14-1`。

因该更新将重新生成 `xrdp` 的私钥，客户 / 服务端可能会提示公钥不匹配，我们为此
带来的不便表示诚挚的歉意。

----

— Mingcong Bai
