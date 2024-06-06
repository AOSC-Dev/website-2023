---
categories:
  - news
title: "社区友人捐赠的两台新 AArch64 构建服务器投入使用"
date: 2023-10-11T13:00:00+08:00
important: false
draft: false
---

![近期上线的两台 AArch64 构建服务器](https://raw.githubusercontent.com/AOSC-Dev/newsroom/master/special-issue/20231011/imgs/new-aarch64-servers.jpg)

年初 [升级 AMD64 构建服务器](https://wiki.aosc.io/zh/community/crowdsourcing/epyc-22333-upgrade-2023/) 后，同属 AOSC OS 一级架构的 AArch64 (`arm64`) 维护算力已大幅度落后于 AMD64 (`amd64`) 。加之网络及存储 I/O 性能方面的局限，现有 AArch64 构建服务器拖慢了一级架构编译、打包和测试的效率。六月，社区友人捐赠了两台高性能 AArch64 服务器：一台搭载 64 核飞腾 FT2000/64 处理器，另一台搭载 64 核华为鲲鹏 920。而后，社区朋友慷慨解囊，[成功众筹了一些必要部件](https://wiki.aosc.io/zh/community/crowdsourcing/new-aarch64-server-parts/) 并提供托管服务。

目前，这些服务器已 [正式上线并投入使用](https://github.com/AOSC-Dev/Buildbots/compare/588d37621c6d0528db82a37306540230445687ad...630b94a078d4803334ed6329ff028ff3ec352ff4)，为我们持续维护和改进 AOSC OS 的 AArch64 架构移植提供强劲动力。感谢社区各位友人的支持！
