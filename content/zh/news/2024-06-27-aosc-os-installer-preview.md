---
categories:
  - news
  - advisories
title: "安同 OS 预览版离线安装盘发布！"
date: 2024-06-27T23:00:00+08:00
important: false

---
![](/assets/news/aosc-os-installer-preview.png)

一直以来，由于安同 OS 依赖树齐全及功能全开的设计导向，系统大小与其他操作系统相比明显偏大；这一特征加之以安装盘需要从互联网拖取（大小相当可观的）系统包的设计广受用户诟病——一个超过 3GiB 大小的安装盘，居然还需要下载系统数据！

为解决这一问题，我们实现了一款基于 OverlayFS 差分文件系统的离线系统安装盘；该安装盘集成了所有系统镜像并对共用组件进行了去重，这样一来，用户朋友们不但不需要在安装过程中等待下载，还可以：

- 直接从 U 盘或光盘启动试用安同 OS 的桌面版
- 在搭载 NVIDIA 显卡的设备上正常启动安装和试用环境

可谓一石三鸟！虽然系统大小直奔 8GiB，双层 DVD 都要塞不下了，但您就说功能全不全吧——

下载试用

欢迎各位用户朋友下载测试本轮预览镜像，您的反馈和建议是我们工作的动力：

- [x86-64](https://releases.aosc.io/os-amd64/installer/preview/aosc-os_installer_20240627_amd64.iso)
- [AArch64](https://releases.aosc.io/os-arm64/installer/preview/aosc-os_installer_20240627_arm64.iso)
- [龙架构(LoongArch)](https://releases.aosc.io/os-loongarch64/installer/preview/aosc-os_installer_20240627_loongarch64.iso)

如果您在测试时遇到问题或困难，请通过社区[各聊天群组](https://aosc.io/contact)或[社区论坛](https://bbs.aosc.io/)与我们联系

感谢您的测试！
