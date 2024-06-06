---
categories:
  - warning
title: "[SOLVED] Recent kmod 31 Update May Prevent System from Booting"
date: 2023-12-31T02:26:59+08:00
important: true
draft: false
---

We have since issued kernel updates to address this issue. You may now update
your system as usual. If you have held `kmod`'s package version, please use
the following command to unhold:

```
sudo oma mark unhold kmod
```

Thank you for your patience and our apologies for any inconvenience caused.

---

The `modprobe` utility in recently updated kmod 31 uses a potentially broken
module loading code path in the kernel, and may prevent xz-compressed modules
from loading. As AOSC OS currently ships all kernel modules xz-compressed,
modules will fail to load during early boot in initrd stage and in most cases
prevent the system from booting:

```
decompression failed with status 6
systemd[1]: Failed to start systemd-module-load.service.
dracut: FATAL: iscsiroot requested but kernel/initrd does not support iscsi
```

If you have updated your system, please downgrade `kmod` to `30-1` immediately:

```
sudo oma install kmod:30-1
```

If you have not yet updated your system, please refrain from updating or hold
your `kmod` version to `30-1`:

```
sudo oma mark hold kmod
```

We will identify the root cause of this problem and issue an update as soon as
possible.

---

— Cyan
