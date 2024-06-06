---
categories:
  - news
title: "Apple Silicon 版 AOSC OS 系统发布"
date: 2023-11-20T12:00:00+08:00
important: false
draft: false
---

![安同OS，启动！](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231120/imgs/apple-silicon.jpg)

Apple Silicon 版 AOSC OS 系统发布，搭载 M1 或 M2 芯片的 Mac 电脑用户现可安装 AOSC OS 系统。目前的系统在绝大多数基于 M1 芯片的设备开箱即用[^1]，除 OpenGL 图形加速[^2]和 Thunderbolt[^3] 外，内置存储、各接口、音频、Wi-Fi 和摄像头等内置设备均可使用。M2 支持仍在完善中[^4]，M3 支持即将发布。

在 macOS Ventura (13) 或更新版本系统的终端中运行如下命令即可安装 AOSC OS：

```
curl https://releases.aosc.io/install-asahi | sh
```

如果您在安装或使用系统时遇到问题，请在 AOSC OS GitHub 仓库 [报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) 或于下列联系方式中与我们取得联系。

常联系
----

欢迎来我社各聊天群组分享使用体验或于我们的源码仓库[报告问题](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml)，我们将尽一切努力持续为您营造轻松愉快的使用体验。

### 微信群

请扫描此二维码添加好友并说明来意：申请加入 AOSC 社区频道。

![wechat](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231017/imgs/wechat.png)

### QQ 群

![qq](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231017/imgs/qq.jpg)

### Telegram 群组

![telegram](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231017/imgs/telegram.png)

### Discord 语音频道

![discord](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231017/imgs/discord.png)

----

[^1]: 由于某个 [在 macOS 中发现的问题](https://github.com/AsahiLinux/docs/wiki/macOS-Sonoma-Boot-Failures)，搭载 ProMotion 屏幕的 14 和 16 寸 MacBook Pro 可能无法安装 AOSC OS，目前安装程序会自动探测相关设备并报错。
[^2]: OpenGL 支持将于 Mesa 24 中正式加入，该版本预计年底或 2024 年初发布。
[^3]: Thunderbolt 支持暂无日程。
[^4]: M2 设备支持进展请见 Asahi Linux [官方文档](https://github.com/AsahiLinux/docs/wiki/M2-Series-Feature-Support)。
