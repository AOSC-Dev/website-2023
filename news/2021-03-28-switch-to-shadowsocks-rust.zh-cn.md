---
categories:
  - warning
title: 上游建议迁移至 `shadowsocks-rust`
date: 2021-03-28T09:51:00+08:00
important: false
---

`shadowsocks-libev` 上游已宣布进入了[“只修复 Bug 状态”](https://github.com/shadowsocks/shadowsocks-libev)，
并建议用户尽快转到 `shadowsocks-rust` 上。

    # apt update && apt install shadowsocks-rust

若您曾启用 `shadowsocks-libev` 本地代理服务，可以使用以下命令转移到 `shadowsocks-rust` 的服务。

    # systemctl disable --now shadowsocks-libev@[config]
    # systemctl enable --now shadowsocks-rust-local@[config]
 
----

—— Mag Mell
