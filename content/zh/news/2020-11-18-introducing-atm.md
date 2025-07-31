---
categories:
  - news
title: Introducing ATM (AOSC OS APT Topic Manager)
date: '2020-11-18'
important: false
---

With the closing of the Summer 2020 iteration cycle, we have now transitioned
into our new [topic-based iteration model](https://wiki.aosc.io/developer/packaging/topic-based-maintenance-guideline/).

What does this mean? It means that instead of a season-long cycle where feature
updates are accumulated and tested together, feature, security, bugfix "topics"
are created, built, and tested by their own schedule. With this new iteration
model, we expect shorter package introduction, updates, and bugfix response
times. As users, this means that you can test these topics individually based
on your interest.

To help better manage these topics on your AOSC OS installation, we have
developed [ATM](https://github.com/AOSC-Dev/atm/), or AOSC OS APT Topic
Manager. With ATM's TUI interface, you could enroll in topics and receive early
updates with ease. Likewise, whenever you feel like it, you could pull out and
revert packages back to their "stable" versions.

![atm](https://i.imgur.com/Pq5AWsY.png)
ATM displaying a list of available update topics.

If you are using a standardised AOSC OS distribution (and `admin-base` is still
installed), ATM is installed automatically on your AOSC OS installation with a
recent update, and available as the `atm` command. ATM will be pre-installed
with future AOSC OS distributions.

If you couldn't find the `atm` command, you may install ATM with the following
command:

```
sudo apt install atm
```

----

— Mingcong Bai
