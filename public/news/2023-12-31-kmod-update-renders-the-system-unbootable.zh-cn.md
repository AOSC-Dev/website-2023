---
categories:
  - warning
title: "[已解决] 近期 kmod 31 更新可能导致系统无法启动"
date: 2023-12-31T02:26:59+08:00
important: true
draft: false
---

我们已推送内核更新，修复先前 `kmod` 更新导致的启动故障，现在您可以放心更新系统了。如果您先前锁定了 `kmod` 版本，请使用如下命令解锁：

```
sudo oma mark unhold kmod
```

感谢您的耐心，我们为先前造成的不便表示歉意。

---

我们发现软件包 `kmod` 近期版本为 `31` 的更新中，其内置命令 `modprobe` 无法正常加载 xz 压缩的内核模块。由于 AOSC OS 内核模块均使用 xz 压缩，该问题会导致启动过程中模块无法正常解压载入，影响初始化内存盘 (initramfs) 引导期间的启动过程，最终导致系统无法启动。

此问题具体表现为启动时报告以下错误信息：

```
decompression failed with status 6
systemd[1]: Failed to start systemd-module-load.service.
dracut: FATAL: iscsiroot requested but kernel/initrd does not support iscsi
```

如果您恰好更新过系统，请立即将 `kmod` 降级到版本 `30-1`：

```
sudo oma install kmod:30-1
```

如果您尚未更新系统，请暂时不要更新，或者保持 `kmod` 软件包的版本为 `30-1`，并锁定该软件包的版本：

```
sudo oma mark hold kmod
```

我们会尽快找到问题根源，并尽早发布更新修复该问题。

---

— Cyan
