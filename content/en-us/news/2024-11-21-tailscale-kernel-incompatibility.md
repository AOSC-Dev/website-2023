---
categories:
  - advisories
title: "【已解决】部分 Linux 内核版本可能导致 Tailscale 部分功能不可用"
date: 2024-11-21T22:00:00+08:00
important: false
---
根据[上游用户报告](https://github.com/tailscale/tailscale/issues/13863)，Linux 内核版本：

- 6.11.4
- 6.11.5
- 6.6.57
- 6.6.58

由于上游提交 [`netfilter: xtables: avoid NFPROTO_UNSPEC where needed`](https://github.com/torvalds/linux/commit/0bfcb7b71e735560077a42847f69597ec7dcc326)中的一处[错别字(typo)](https://lore.kernel.org/all/20241019-xtables-typos-v2-1-6b8b1735dc8e@0upti.me/) ，导致 `ip6tables(8) 的 --set-mark` 参数无法正常工作，影响到了 `Tailscale` 的部分功能（如 Magic DNS）。

## 解决方案

目前，该问题已确认在更新版本内核中得到解决；请注意更新 Linux 内核版本并避免使用上述四个内核版本，以防遇到上述可用性问题。
