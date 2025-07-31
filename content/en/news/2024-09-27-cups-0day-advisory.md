---
categories:
  - advisories
title: "前方注意！CUPS 及相关软件包推送高危漏洞修复"
date: 2024-09-27T10:00:00+08:00
important: true
home: true
---

北京时间今日凌晨，安全研究员 [evilsocket](https://www.evilsocket.net/2024/09/26/Attacking-UNIX-systems-via-CUPS-Part-I/) 披露了与 CUPS 等软件包相关的四个安全漏洞，CVSS 3.1 评分最高达到 [9.1](https://www.cve.org/CVERecord?id=CVE-2024-47177)。

目前，安同 OS 相关修复已经推送至稳定 (`stable`) 软件源。考虑到该漏洞已公开且可利用，建议用户尽快更新，相关软件包及其修复版本见下：

- `cups` (2.4.10-2)
- `cups-browsed` (2.0.0-1)
- `libcupsfilters` (2.0.0-1)
- `libppd` (2.0.0-1)

升级完成后，如 cups.service 服务正在运行，推荐用户重启服务，方式见下。重启系统也能达成同样的效果。

```
sudo systemctl try-restart cups
```

另：由于 `cups-browsed` 软件包在实践中用途有限，并且无法彻底修复与之相关的安全漏洞，软件包 `cups-filters` 版本 `2.0.0-2` 已不再推荐安装 `cups-browsed`，推荐无需相关功能的用户主动卸载 `cups-browsed` 软件包。