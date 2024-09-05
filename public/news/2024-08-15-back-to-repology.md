---
categories:
  - news
title: "安同 OS 重返系统软件包版本监测网站 Repology"
date: 2024-08-15T12:00:00+08:00
important: true
home: true
---
![](/assets/news/repology.png)


相信关注 Linux 发行版与软件包更新的朋友们对 [Repology](https://repology.org/) 大概不会陌生，但也许您也发现了安同 OS 一直缺席这一网站的监测仓库列表；实际上，安同 OS 曾经在 Repology 的监测列表上，但由于系统软件包信息站年久失修，Repology 决定暂停监测安同 OS 的仓库。

虽然近几个月以来，在[陈嘉杰](https://github.com/jiegec)、[杨欣辉](https://github.com/Cyanoxygen)、[傅孝元](https://github.com/eatradish)等人的努力下软件包站重新恢复了服务，但一部分数据库结构并未完成迁移，Repology 上线条件并不充分；为改变这一现状并方便用户和维护者查阅安同 OS 的相对维护与更新状态，近日，[张丙戊](https://github.com/xtexChooser)及[杨欣辉](https://github.com/Cyanoxygen)在修复仓库元数据库收集工具 [abbs-meta-rs](https://github.com/AOSC-Dev/abbs-meta-rs) 后，重新向 Repology 提交了监测请求并提交了[监测配置](https://github.com/repology/repology-updater/pull/1418)并已成功受上游接纳；至此，安同 OS 正式重返 Repology 的监测列表。

欢迎感兴趣的朋友们关注 Repology 上安同 OS 的更新维护状态数据，并向我们反馈潜在问题与关切。

[Repology 上的安同 OS 主页 >>](https://repology.org/repository/aosc)
