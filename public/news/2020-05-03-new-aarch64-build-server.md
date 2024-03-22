---
categories:
  - news
title: New AArch64 Build Server!
date: '2020-05-03'
important: false
---

In late April, we were offered an AArch64 build server to aid with our AArch64 port. This server, provided by a friend of the community, is a Huawei Taishan 2280 v2 server with two 48-core (!) Huawei Kunpeng 920 processors running at 2.6GHz, along with 192GiB (!) of RAM. When building packages for AOSC OS, this server's performance is just shy of our current AMD64 build server, running on an AMD Ryzen 9 3950X and 64GiB of RAM.

This server is currently hosted as a [BuildBot](https://wiki.aosc.io/developer/infrastructure/buildbots), and made available to all AOSC OS contributors. With this performant build server, our AArch64 port will soon reach feature parity with AMD64. What's more, now you can also expect better update frequency and security update response times when using this port.

----

— Mingcong Bai
