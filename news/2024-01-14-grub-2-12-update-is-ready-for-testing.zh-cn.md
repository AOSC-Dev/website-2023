---
categories:
  - warning
title: "GRUB 2.12 更新可供测试"
date: 2024-01-14T18:47:12+08:00
important: true
draft: false
---

各位用户及维护者：

GRUB 最近发布了 2.12 版本，软件包安装机制经过维护者几番研究之后已经初步完善，可供大家安装测试；由于涉及基本系统组件，请大家在不同的安装模式下测试本更新（如 LVM、LUKS 等），并积极提供反馈。

如需测试，请执行如下命令：

```sh
oma topics
```

然后选中 `grub-2.12` 测试源，保存退出。

请注意，如果安装时出现错误，请立即报告，并且说明任何可能导致安装失败的条件（如使用了 LVM/LUKS、EFI 分区位置等）；如出现引导故障，请下载 [LiveKit](https://aosc.io/zh-cn/downloads) 修复系统，并尽快提供反馈。

感谢大家的测试和支持！

— Cyan
