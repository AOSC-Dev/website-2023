
---
categories:
  - advisories
title: "社区软件源签名迭代公告"
date: 2025-04-18T22:00:00+08:00
important: true
home: true
---

先前使用的密钥已于 UTC+8 时间 2025 年 4 月 18 日 12 时正式弃用。为方便新用户，我们已在 4 月中旬发布一批新的系统安装镜像并包含上述的新公钥。

如果您在更新安同 OS 或安装软件时遇到困难，请于我社[各聊天群组](https://aosc.io/contact)与我们联系反馈、获取支持。

## 迭代原因

自 Ubuntu 24.10 及 APT 2.8 发布后更新了 [APT 加密签名算法要求](https://discourse.ubuntu.com/t/new-requirements-for-apt-repository-signing-in-24-04/42854)，而我社先前使用的软件源 GPG 公钥算法 (nistp521) 已不再符合新要求；新要求中列出的算法包括：

- 2048 位以上的 RSA
- Ed25519
- Ed448

为解决该问题并推动 APT 运行时及工具迭代更新，我们已于上周通过 aosc-os-keyring 软件包推送了先前生成的 Ed25519 的新软件源签名密钥：
```
pub   ed25519 2024-10-06 [SC]
      F54DE04F93DFEDBA123FC2933AE2C2BE062E9F06
uid   AOSC OS Maintainers <maintainers@aosc.io>
sub   cv25519 2024-10-06 [E]
```
