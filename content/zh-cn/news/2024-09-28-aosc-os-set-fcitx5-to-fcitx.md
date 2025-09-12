---
categories:
  - advisories
title: "近期安装的安同 OS 可能无法在部分程序中使用输入法"
date: 2024-09-28T10:00:00+08:00
important: true
home: true
---

在九月发布的安装盘中，默认系统配置中设置了错误的输入法模块，导致一部分闭源软件（已知微信及 Steam 受此问题波及）无法正常使用输入法。

由于这一部分默认配置属于用户配置，我们无法通过系统更新修复该问题；如果您遇到此问题，请打开终端模拟器，使用如下命令打开当前用户的 .xprofile 配置文件：
```shell
nano ~/.xprofile
```
将文件开头四行的 `fcitx5` 字样逐一改为 `fcitx`，按 Ctrl-S、Ctrl-X 组合键保存退出；即从原文件中的：
```
export GTK_IM_MODULE=fcitx5
export QT_IM_MODULE=fcitx5
export QT5_IM_MODULE=fcitx5
export XMODIFIERS=@im=fcitx5
```
改为：
```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export QT5_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```
完成后重新登录即可。

我们为此带来的不便表示歉意！
