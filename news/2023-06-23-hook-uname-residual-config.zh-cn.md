---
categories:
  - warning
title: "近期更新 `devel-base` 后可能需要手动干预"
date: 2023-06-23T21:00:00+08:00
important: false
draft: false
---

近期更新的 `devel-base` 包中删除的 `hook-uname` 依赖中包含一处 Bash 配置 `/etc/profile.d/hook_uname.sh`。在更新软件包后如果自动卸载了这个包，请使用 `sudo apt purge hook-uname` 确保其配置文件已正确删除。

在完成此操作后，请重新登录当前用户。

---

— Mingcong Bai
