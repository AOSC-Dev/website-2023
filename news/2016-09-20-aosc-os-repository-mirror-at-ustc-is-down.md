---
categories:
  - news
date: '2016-09-20'
important: true
title: AOSC OS Repository Mirror at USTC is Down
url: /news/2016/09/20/aosc-os-repository-mirror-at-ustc-is-down.html
---


Our mirror at [USTC](https://mirror.ustc.edu.cn) is down (in fact, for quite some time now) due to hardware failures in their hard disk arrays.

That said, you might need to change your APT source lists to install and update packages normally. Use `apt-gen-list -l` to see your options (avoid `10-ustc` for now), and `apt-gen-list -e "repo1 repo2 repo3"` to enable new mirrors to use.

We will post another notice when USTC's mirror has resolved this issue.

Relevant documentation:

- USTC's notice about their [hard disk array failure](https://servers.blog.ustc.edu.cn/2016/09/mirrors-disk-failure-2/).
- USTC's update to their previous notice, they have decided to perform an [offline maintenance](https://servers.blog.ustc.edu.cn/2016/09/mirrors-severe-disk-failure/).