---
categories:
  - advisories
title: "【已解决】近期系统更新后，部分应用程序可能无法正常启动"
date: 2024-11-15T22:00:00+08:00
important: false
---
> 此问题已修复，更新系统即可

根据用户报告，近期 libvpx 1.15.0 组件更新推送后，Firefox 浏览器等应用程序无法正常启动并报告类似如下错误：
```
XPCOMGlueLoad error for file /usr/lib/firefox/libxul.so:
libvpx.so.6: cannot open shared object file: No such file or directory
Couldn't load XPCOM.
```
我们已获悉相关问题并将尽快推送更新修复该问题；在此之前，如果您已经遇到上述问题，请使用如下命令回滚近期更新：
```
oma undo
```
我们为此带来的不便表示歉意
