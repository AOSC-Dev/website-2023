---
categories:
  - minutes
title: "纪要：贡献者例会（2025 年 8 月 9 日）"
date: 2025-08-02T16:00:00+08:00
important: false
---

UTC+8 时间 2025 年 8 月 9 日下午二时，社区贡献者组织例会，围绕社区日常工作及相关计划组织讨论。

本期议题
---

### OSPP 2025

- 同步开源之夏项目研发情况

### 系统维护

- 八月发行更新内容介绍、同步，准备编写发行注记
- bash-config PATH/MANPATH 处理问题讨论
- 其他维护疑难问题讨论、PR 审阅请求等现场处理

### 社区门户

- 支持中心设计讨论

OSPP 2025
---

- 陈萱
    - Spectre 问题尚未解决，提交了[上游工单](https://bugzilla.mozilla.org/show_bug.cgi?id=1981138)，上游答复但未有推进
    - 测试通过率依然在可接受范围内
- wxiwnd
    - 上周学生参加比赛，本周继续推进项目，这周提了两组 survey
    - poetry 新版需要自举，目前计划解决方案是将 poetry-core 更新，而后使用 poetry-core 构建 poetry
- 白铭骢
    - aosc-os-abbs 翻译已经基本完成，等待 CI 流程调整，确保 Weblate 可以通过 stable 分支同步翻译更新
    - virt-manager 翻译[已完成翻修](https://github.com/AOSC-Dev/translations/pull/61)，待审阅

八月发行更新内容介绍及同步
---

MIPS PMON 相关更改稍后撤出八月更新范畴，等待九月更新。

bash-config PATH/MANPATH 处理问题讨论
---

背景：bash-config 先前会在非 WSL 环境下，针对交互 Bash 会话充值 PATH，导致 Gentoo Prefix 及 nix-installer 无法使用（这两个软件都会先调整 PATH，而后再启动 Bash）。

要解决这个问题，需要去除 unset PATH 的行为，但这也会造成问题：bashrc 是可以重复执行的，会导致 PATH 内容冗余并不断经过追加 (append) 增长。0.8.0 提出了初步修复，但没有正确处理 PATH 优先级，无法确保 PATH 顺序的正确性——尤其是现在的 SDDM 包中在启动会话时将 `/usr/bin` 放在了 `/usr/local/bin` 中。

因此，最终需求是：bash-config 需要确保一组核心的 PATH 顺序一直正确，将一组固定的 PATH 内容过滤出来，并使用正确的顺序将其写入 PATH 中；而后，再根据需要前置 (prepend) 或追加 (append) 额外可执行目录（如 snapd 应为 append，避免替代系统命令）。

尚存问题：如何确定 bashrc（尤其是其中预置的 `~/.local/bin`）和 profile/profile.d 中定义的 PATH 优先级？如何确定 PATH 内容来自 bashrc 还是 profile/profile.d？

支持中心设计讨论
---

- 需要板块划分、美工设计，以及内容支持
- 需要准备内容设计和功能列表，后续在贡献者群中讨论

其他维护疑难问题讨论
---

- Rust 1.89 更新问题，定位到两个 Arch 使用的补丁，可参考：
    - [0006-compiler-Swap-primary-and-secondary-lib-dirs.patch](https://gitlab.archlinux.org/archlinux/packaging/packages/rust/-/blob/878ea10b0833c728000fae199eb2dac05f898027/0006-compiler-Swap-primary-and-secondary-lib-dirs.patch)：优先使用 lib 而不是 lib64 作为运行时库路径
    - [0007-bootstrap-Workaround-for-system-stage0.patch](https://gitlab.archlinux.org/archlinux/packaging/packages/rust/-/blob/878ea10b0833c728000fae199eb2dac05f898027/0007-bootstrap-Workaround-for-system-stage0.patch)：修复未正确处理 stage0 运行时目录生成的问题（[上游报告](https://github.com/rust-lang/rust/issues/143735)）
- LLVM (optenv32) 需加急，目前阻挡了 Mesa 25.2 更新
- Core 中 GCC 软件包结构调整：gcc 依赖 gcc-15
    - 其中须注意，gcc-* 提供的运行时库均未安装在默认目录 (`/usr/lib`) 下，需要创建软链接
    - 建议使用 gcc 包提供这些软链接，避免后续更新时造成文件迁移（PostgreSQL 也是这样处理的）
- LLVM 也应根据 GCC 结构调整中的建议修改运行时库软链接的提供方式