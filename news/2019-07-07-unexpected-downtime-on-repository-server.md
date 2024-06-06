---
categories:
  - news
date: '2019-07-07'
important: true
title: Unexpected Downtime on Repository Server
url: /news/2019/07/07/unexpected-downtime-on-repository-server.html
---


If you are attempting to update your AOSC OS, or have already experienced trouble downloading packages (wrong sizes and checksums, etc.) - we are aware of this issue, and are working double time to resolve this issue. We have just finished up our (long overdue) Winter update wave, and moving ~10,000 packages triggered some obscure bugs in our package scanning toolkit, [p-vector](https://github.com/AOSC-Dev/p-vector).

- TL;DR: we are sorry, and are trying our best to get our repository back in normal order.
- To our mirror maintainers, we have terminated our `rsync` service 15 minutes before this news, and this should explain why the syncing jobs are failing.

----

— Mingcong Bai