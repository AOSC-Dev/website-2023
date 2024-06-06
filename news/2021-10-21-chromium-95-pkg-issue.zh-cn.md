---
categories:
  - warning
title: "[已解决] Chromium 95.0.4638.54 无法正常启动"
date: 2021-10-21T21:20:18-07:00
important: false
---

目前源内的 Chromium 95.0.4638.54 存在打包问题，会导致浏览器无法正常启动：

    FATAL:double_fork_and_exec.cc(131)] execv /usr/lib/chromium/chrome_crashpad_handler: 没有那个文件或目录 (2)

请暂时通过 apt list chromium -a 查询上个版本并使用如下命令降级：

    sudo apt install chromium/<Last version of Chromium>

请使用查询到的版本替代占位符。因 Chromium 95 带有多个安全更新，我们会在一天内发布修复更新。

---

— Mingcong Bai
