---
categories:
  - warning
title: "McFly 更新后残留的命令行配置文件可能导致报错"
date: 2023-04-05T13:43:01+08:00
important: false
draft: false
---


近期的 McFly 更新中，我们通过删除 `/etc/profile.d/mcfly.bash` 废弃了 McFly 替代默认 Ctrl-R 界面的行为，但是由于这个文件属于配置文件，更新软件包后不会默认删除。因此，您可能会在启动命令行时看到如下错误：

```
error: a value is required for '--append-to-histfile <HISTFILE>' but none was supplied

For more information, try '--help'.
```

此时，请使用如下命令删除残留文件：

```
sudo rm -v /etc/profile.d/mcfly.bash
```

而后重启命令行或终端即可。

---

— 白铭骢
