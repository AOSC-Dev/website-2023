---
categories:
  - news
title: "安同 OS 图形安装预览镜像更新（6 月 7 日）"
date: 2024-06-07T22:19:13-08:00
important: false
draft: false
---

![](/assets/news/2024-06-04-aoscos-livekit-pre.jpg)

## 更改日志

- 修复在 x86 以外架构错误显示 NVIDIA 版本系统的问题
- 测试软件源后在镜像列表右侧显示测速结果
- 修复主机名不允许使用 - 字符的问题
- 修复打开 GParted 时界面锁死且无说明
- 将 ESP 选择界面移至分区界面后，更符合操作逻辑
- 将启动盘从分区界面上剔除
- 将重启行为改为软复位并指引用户拔除 U 盘，降低故障几率
- 不挂载 /run 虚拟系统，提高磁盘卸载可靠度
- 将默认音量调整至 60%（原为 30%，根据用户反馈音量过小）

## 下载链接

集成上述修复后，我们发布了一批新的预览镜像供进一步测试：

- [x86-64 ](https://releases.aosc.io/os-amd64/livekit/preview/aosc-os_livekit_20240607_amd64.iso "x86-64 ")
- [AArch64 ](https://releases.aosc.io/os-arm64/livekit/preview/aosc-os_livekit_20240607_arm64.iso "AArch64 ")
- [龙架构(LoongArch) ](https://releases.aosc.io/os-loongarch64/livekit/preview/aosc-os_livekit_20240607_loongarch64.iso "龙架构(LoongArch) ") 

## 已知问题

在测试修复过程中，我们还发现了一系列问题，计划在下一批（大概率是正式版）镜像中修复：

- “意欲何为？”页面的重启选项行为与最终重启界面的指示不一致，应告知用户在点击重启后立即移除安装镜像
- 网络连接在设置后仍需点击“配置网络”后才能进入下一步
- 目标存储选择界面依然列出了安装盘（应剔除）

如果您在测试时遇到问题或困难，请通过社区[各聊天群组](https://aosc.io/zh-cn/contact/ "各聊天群组")或社区[论坛](https://bbs.aosc.io/ "论坛")与我们联系。

