---
categories:
  - warning
title: "近期内核更新可能导致虚拟机在 Intel 11 代（或更新）平台上不可用"
date: 2022-08-26T11:49:37-07:00
important: true
draft: false
---

今日推送的 5.19.3 内核更新在 Intel 11 代或更新的处理器可能会导致使用 BIOS/UEFI CSM 模式启动的 KVM 虚拟机无法启动，该问题可以在 Qemu 及 VirtualBox 上复现。在某些情况下，甚至可能导致宿主机锁死。

经初步调查，该问题可能是本次更新开启的 Intel IBT (Indirect Branch Tracking) 功能导致的。该功能可用于改善平台安全性。内核 5.19.4 已解决该问题，我们将在近期推送该内核更新（见引用 3）。

在此之前，您可以通过追加内核参数 `ibt=off` 以便暂时解决问题。请编辑 `/etc/default/grub`：

```
sudo nano /etc/default/grub
```

并于该文件的 `GRUB_CMDLINE_LINUX_DEFAULT=` 行的双引号之间加入 `ibt=off` 参数，并注意与前一个参数用至少一个空格间隔开来。见下例：

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet rw rd.auto rd.auto=1 splash ibt=off"
```

而后，请执行如下命令：

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

并重启您的设备以应用更改。

---

引用：

1. Arch Linux 论坛上的[用户报告](https://bbs.archlinux.org/viewtopic.php?id=276699)（内附发行版问题报告）
2. 内核[上游报告](https://bugzilla.kernel.org/show_bug.cgi?id=216332)（虚拟机启动失败）
3. 内核上游补丁（[之一](https://lore.kernel.org/lkml/20220823080128.867380224@linuxfoundation.org/)，[之二](https://lore.kernel.org/lkml/20220823080128.907850538@linuxfoundation.org/)）

---

— Mingcong Bai
