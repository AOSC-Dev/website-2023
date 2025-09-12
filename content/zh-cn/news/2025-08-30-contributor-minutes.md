---
categories:
  - minutes
title: "纪要：贡献者例会（2025 年 8 月 30 日）"
date: 2025-08-30T15:40:00+08:00
important: false
---

UTC+8 时间 2025 年 8 月 30 日下午二时，社区贡献者组织例会，围绕社区日常工作及相关计划组织讨论。

本期议题
---

### OSPP 2025

- 开源之夏项目研发情况同步

### 系统维护

- oma Clap 本地化功能测试及翻译整理
- Devena + OOBE 实现情况同步
- bash-pinyin-completion-rs 发行注记定稿
- 主题制维护流程调整及中文翻译
- 软件包样式指南修改
- 长期维护分支沟通问题
- k8s 及云服务相关软件包维护讨论
- KDE 中文搜索功能测试
- 其他维护疑难问题讨论、PR 审阅请求等现场处理

开源之夏项目研发情况同步
---

- 陈萱
    - 近期 MIPS64 及龙架构修改破坏了 RISC-V 的测试通过率
    - 在学生报告后，上游开发者已发[补丁](https://bugzilla.mozilla.org/show_bug.cgi?id=1985581)修复
- wxiwnd
    - 合并了一个 survey，弄炸了 protobuf 更新，但已修复
    - 目前在默认安装的安同 OS 基础系统中可以不包含 Python 2 了，但 aoscbootstrap 还是会拉入 python-2 包，待查
- 白铭骢
    - 已完成安同 OS 软件包简介、virt-manager 翻修，正在推动 Inkscape 翻修

oma Clap 本地化功能测试及翻译整理
---

[Saki](https://github.com/eatradish) 展示了 oma Clap 本地化标记的基本流程（目前只完成了主帮助信息的内容，子命令说明仍需翻译）：

- 将每个子命令中的 arg 注释复制到 Fluent 编目中并起名（如 clap-no-progresss）
- 在子命令中对应的 arg 中添加 `help = fl!()` 宏定义
- 长命令说明对应的字符串也要改为 `fl!()` 宏

命令报错无须翻译，已通过 [clap-i18n-richformatter](https://github.com/eatradish/clap-i18n-richformatter) 统一实现。

Devena + OOBE 实现情况同步
---

[杨欣辉](https://github.com/Cyanoxygen) 展示了 [devena-firstboot](https://github.com/AOSC-Dev/devena-firstboot) 设备初始化框架及 OOBE 向导（图形化及命令行界面），基本功能如下：

- devena-firstboot 于 initrd 运行，负责调整分区大小、配置引导器等初始功能，完成后会重启
- 重启后，触发 firstboot 状态，启动 OOBE（根据是否安装了 `kde-base` 决定启动何种 OOBE 向导），完成后再次重启
- 系统完成配置

目前存在如下需要调整或额外实现的功能：

- 命令行版界面须先提示用户选择语言，而后再次执行向导，利用好 KMSCON/CJKTTY 的中文显示功能
- 命令行版界面应先显示欢迎辞
- 命令行、图形化版 OOBE 均需要调整界面文案（目前为安装盘衍生）
- Devena 错误界面考虑引入本地化并更清晰地引导用户联系开发者报告问题

主题制维护流程调整及中文翻译
---

- 新包 topic 分支名中不再包含版本号
- 引导开发者使用 oma 测试 topic 而不是使用现已弃用的 atm
- 新架构移植及全局重构规则待探索
- AOSC OS/Retro 更名为 Afterglow，且取消独立分支维护的说明（后续通过自动化设施与主线同步更新维护，同样使用主题制）
- 补充额外检查的流程：
    - 与其他长期分支的交互
    - 需要检查的 ABI 变更、文件变化等，设置为待办列表，要求维护者勾选

软件包样式指南修改
---

明确 transitional/元包的 noarch 对应关系：如 A 依赖 B 而 B 不是 noarch 包，则 A 也不得为 noarch，解决分支合并后构建环境不一致的问题。

长期维护分支沟通问题
---

- 在贡献者联络群发布公告说明长期测试分支的维护者、涉及范围和沟通请求
- 提醒长期测试分支维护者及时审阅相关软件包

k8s 及云服务相关软件包维护讨论
---

- 云服务：短期目标为 Erlang、RabbitMQ，抑或 OpenStack
    - OpenStack 工程较大，软件包数量接近 200，后续考虑是否推进
- k8s：kubectl、kubeadm 及 kubelet
    - 是否需要合并成一个包（都是一个源码）？
        - 孙远航：可能不需要，大多数用户不会同时安装全部三个工具，且 kubectl 和 kubeadm/kubelet 的版本管理需求可能不同（kubeadm 及 kubelet 的更新可能不应该太频繁，否则可能影响 k8s 容器的管理）
    - calico 可通过现存容器生态获取（Docker.io 及 lcr.loongnix.cn），具体效果待测
- containerd 将插件等额外数据都默认安装到了 /opt 下 (`/opt/containerd`)
    - 路径是写死在 Go 源码里的
    - 如对其他软件包有影响且互联网文档惯例指向这个路径，则不要改

KDE 中文搜索功能测试
---

测试由 [SignKirigami](https://github.com/prcups) 实现的 KDE 中文搜索功能（KRunner 集成），[krunner-pinyin-search](https://github.com/prcups/krunner-pinyin-search)：

- 主 KRunner、默认应用菜单（“应用程序启动器”）功能正常
    - 安同 OS 默认菜单、全屏应用菜单不可用，应该是源码中硬编码插件范围导致的，需要打补丁
- 默认搜索关键字长度设置为了 3，应该更低
- 默认搜索优先级设置为了 0.6，应该更高，否则基本不起作用（应用程序应有足够高的搜索优先级）
- 暂无上游推进计划，可通过社区渠道宣传给其他发行版打包

其他维护疑难问题讨论、PR 审阅请求等现场处理
---

- 树莓派内核：5.10 开始，树莓派 3 上 brcmfmac 读取压缩过的 txt 配置文件会导致驱动崩溃，目前已复现（调查暂无头绪）
    - 解法：firmware-nonfree 将相关 txt 文件先按无压缩分发
    - https://github.com/AlmaLinux/raspberry-pi/issues/17
- Gitea：将数据库服务及 memcached 挪入 PKGSUG（而不是会默认安装的 PKGRECOM），明确可直接开箱使用的内部特性直接列入 PKGDEP（OpenSSH 等）