
---
categories:
  - advisories
title: "社区软件源签名迭代公告"
date: 2025-03-10T22:00:00+08:00
important: true
---

自 Ubuntu 24.10 及 APT 2.8 发布后，其更新了[APT 加密签名算法要求](https://discourse.ubuntu.com/t/new-requirements-for-apt-repository-signing-in-24-04/42854)，而我社先前使用的软件源 GPG 公钥算法 (nistp521) 已不再符合新要求；新要求中列出的算法包括：

- 2048 位以上的 RSA
- Ed25519
- Ed448

为解决该问题并推动 APT 运行时及工具迭代更新，我们已于上周通过 `aosc-os-keyring` 软件包推送了先前生成的 Ed25519 的新软件源签名密钥：
```
pub   ed25519 2024-10-06 [SC]
      F54DE04F93DFEDBA123FC2933AE2C2BE062E9F06
uid   AOSC OS Maintainers <maintainers@aosc.io>
sub   cv25519 2024-10-06 [E]
```
## 更新可及性警告

先前使用的密钥将于 UTC+8 时间 2025 年 4 月 10 日零时正式弃用，届时您将无法通过旧密钥验证软件源数据。

请在上述时间前（自本公告发布一个月内）至少更新一次系统并确定 aosc-os-keyring 版本为至少 20241006，以免后续出现软件源访问困难。

为方便新用户，我们也将在 4 月 10 日前发布一批新的系统安装镜像并包含上述的新公钥。
