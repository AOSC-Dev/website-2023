---
categories:
  - warning
title: "Dracut 触发器在更新系统时可能会失效"
date: 2021-04-10T17:03:31+08:00
important: false
---

若你在升级中遇到了此错误：

    正在设置 xine-lib (1.2.10-2) ...
    dpkg: 处理触发器时发现回路：
    包含或可能包含对此有责任的触发器的软件包链：
      dracut -> dracut
    无法解决的软件包未决触发器：
      dracut: /usr/lib/modprobe.d
    dpkg: 处理软件包 dracut (--configure)时出错：
    触发器循环，放弃

这是已知问题，暂时的解决方法是再执行一次 `apt full-upgrade` 让它执行完 `dracut` 的步骤。
我们仍在调查这个问题，不过这个问题似乎只影响到 `gnome-40` 尝鲜主题的测试用户。

----

— Mag Mell
