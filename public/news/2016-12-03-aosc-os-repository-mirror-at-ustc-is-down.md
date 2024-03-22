---
categories:
  - news
date: '2016-12-03'
important: true
title: AOSC OS Repository Mirror at USTC is Down
url: /news/2016/12/03/aosc-os-repository-mirror-at-ustc-is-down.html
---


Our mirror at USTC is down, due to recurring hard disk array failures.

That said, you might need to change your APT source lists to install and update packages normally. Use `apt-gen-list -l` to see your options (avoid `10-ustc` for now), and `apt-gen-list -e "repo1 repo2 repo3"` to enable new mirrors to use.

We will post another notice when USTC's mirror has resolved this issue.

Relevant documentation:

- [USTC Mirror Status](http://mirrors.ustc.edu.cn/status/)