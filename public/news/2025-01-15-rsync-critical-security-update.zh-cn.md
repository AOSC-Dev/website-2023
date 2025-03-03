---
categories:
  - advisories
title: "rsync 推送高危安全漏洞修复更新"
date: 2025-01-15T09:15:00+08:00
important: true
---

北京时间今日凌晨，rsync 公开了六个安全漏洞，其中最严重的漏洞 CVSS 3.1 评分高达 9.8，可允许匿名且仅有只读权限的客户端在服务端运行任意代码。

目前，安同 OS 已推送包含修复的 3.4.0 版本至稳定 (stable) 软件源，建议用户朋友们尽快更新。

升级完成后，如 rsyncd.service 服务正在运行，推荐您重启服务，方式见下（重启系统也能达到同样效果）：

```
sudo systemctl try-restart rsyncd
```
