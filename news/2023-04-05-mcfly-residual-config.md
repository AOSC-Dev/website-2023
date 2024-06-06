---
categories:
  - warning
title: "Residual Configuration After McFly Update May Cause Errors"
date: 2023-04-05T13:43:01+08:00
important: false
draft: false
---


In our recent update to McFly, we deprecated a default setting to override the
Ctrl-R with McFly by removing `/etc/profile.d/mcfly.bash` from the package.
However, as this file was registered as a configuration file (`conffile`), it
will not be removed automatically. With this residual configuration, you may
encounter the following error while starting a shell session:

```
error: a value is required for '--append-to-histfile <HISTFILE>' but none was supplied

For more information, try '--help'.
```

You may resolve this issue by removing the residual file with the following
command:

```
sudo rm -v /etc/profile.d/mcfly.bash
```

After which, restart your shell or terminal, and the above error should no
longer occur.

---

— Mingcong Bai
