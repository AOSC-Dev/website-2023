---
categories:
  - advisories
title: "NetworkManager 1.50.0 更新可能导致 DHCP 客户端无法获取 IPv4 地址"
date: 2025-02-20T09:53:00+08:00
important: true
home: true
---

北京时间 2025 年 2 月 20 日晚间我们推送 NetworkManager（包名：`networkmanager`）1.50.0 更新后，数名用户报告无法通过 DHCP 获取 IPv4 地址且部分软件（如腾讯 QQ）无法正常登录使用.

在发现问题后，我们已经撤回相关更新，避免更多用户收到波及。该问题是我们的测试疏忽导致的（需要重启系统或请求 DHCP Lease 才能复现，但测试人员仅测试了服务重启），我们为此带来的不便表示歉意。

**我们建议您暂时不要更新系统，并等待版本为 1.50.2 的 `networkmanager` 软件包更新（如您是在远程访问的服务器上使用安同 OS，建议您在确保可通过 BMC 或物理访问后再进行更新）。**

若您先前已通过系统更新获取到 1.50.0 更新，请见下方“临时修复指引”。

临时修复指引
---

考虑到 NetworkManager 属于核心网络服务，该更新带来的故障可能导致系统管理和使用上的困难，我们建议您暂时通过如下命令降级相关组件：

```
oma install networkmanager=1.40.6-3
```

如果您因为之前已经清理软件包缓存，且由于网络故障无法降级或获取老版本的相关组件包，请通过如下命令手动获取 IPv4 地址：

```
sudo dhclient
```

原因分析
---

经查，该问题是 NetworkManager 中 eBPF 支持实现缺陷导致的，该问题早在一年前便有[其他发行版维护者报告](https://gitlab.freedesktop.org/NetworkManager/NetworkManager/-/issues/1485#note_2297552)。

上游至今未有正式答复相关问题或提出正式修复（在维护者报告后默认禁用了该特性，但没有在编译配置文件中记录原因或将特性标注为实验性），因此我们已暂时通过临时关闭 eBPF 特性规避该问题。