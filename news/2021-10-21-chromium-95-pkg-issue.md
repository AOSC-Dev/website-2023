---
categories:
  - warning
title: "[SOLVED] Chromium 95.0.4638.54 Fails to Launch"
date: 2021-10-21T21:20:15-07:00
important: false
---

Chromium 95.0.4638.54 in the repository fails to launch due to a packaging issue:

    FATAL:double_fork_and_exec.cc(131)] execv /usr/lib/chromium/chrome_crashpad_handler: No such file or directory (2)

Please look up the previous version by executing apt list chromium -a, and downgrade using the following command:

    sudo apt install chromium/<Last version of Chromium>

Please replace the placeholder with the version you found. There are several security updates in Chromium 95, therefore we will release a fix within a day.

---

— Mingcong Bai, Kaiyang Wu
