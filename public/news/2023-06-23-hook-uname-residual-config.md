---
categories:
  - warning
title: "Recent `devel-base` Update May Require Manual Intervention"
date: 2023-06-23T21:00:00+08:00
important: false
draft: false
---

A recent update to `devel-base` removed the `hook-uname` dependency, which
contains the shell configuration `/etc/profile.d/hook_uname.sh`. If you decide
to remove `hook-uname` as an unused package, you will need to also run...

```
sudo apt purge hook-uname
```

To ensure that its configuration files are removed. After which, please log-off
and login your user account to apply the configuration changes.

---

— Mingcong Bai
