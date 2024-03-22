---
categories:
  - warning
title: Upstream Advises Migration to `shadowsocks-rust`
date: 2021-03-28T09:51:00+08:00
important: false
---

The `shadowsocks-libev` upstream announced that the project is now under ["Bug-fix-only"](https://github.com/shadowsocks/shadowsocks-libev) maintenance,
and recommends using `shadowsocks-rust` instead.

    # apt update && apt install shadowsocks-rust

If you have enabled the `shadowsocks-libev` service for local proxy, you may use the following commands to switch to `shadowsocks-rust`.

    # systemctl disable --now shadowsocks-libev@[config]
    # systemctl enable --now shadowsocks-rust-local@[config]

----

—— Jack Wu
