---
categories:
  - advisories
title: "让我们说中文：Bash 拼音补全功能开放测试"
date: 2025-06-12T23:19:13-08:00
important: false
home: true
---
![](/assets/news/pinyin-completion.png)

> 拼音补全，让我们说中文！

在使用终端的过程中，您是否也在处理中文路径时需要**输入法切换频繁**，遭致一顿手忙脚乱？又是否在 TTY 下发现自己根本无法打开或切换到带有中文的路径中？终端中的复杂文字输入（尤其是中文）一直是个难题。

为了解决这些问题，[wxiwnd](https://github.com/wxiwnd) 近日发布了 [bash‑pinyin‑completion-rs](https://github.com/AOSC-Dev/bash-pinyin-completion-rs) 项目，可通过拼音匹配汉字候选补全，打拼音即可打开中文路径及文件。该项目基于 Bash 的补全机制 [bash-completion](https://github.com/scop/bash-completion) 及 Rust 拼音库 [IbPinyinLib](https://github.com/Chaoses-Ib/IbPinyinLib) 开发，支持全拼、声母匹配等功能。

![](/assets/news/pinyin-completion-2.png)

bash-pinyin-completion-rs 支持全拼、声母及首字母补全：例如 “输入法” 可使用 `srf` 或 `shurufa` 补全，也可以通过 `sr` 等方式匹配所有符合条件的候选项。

## 上手示例

```bash
$ ls ~/文档/antong<tab>
安同社区.pdf  安痛系统设计.odt  暗桶会议记录.txt
# 继续按下 <tab> 即可切换候选！

# 只记得首字母？没关系！
$ cd ~/wd<tab>
# 自动补全为 ~/文档/
```

## 试用指南

我们已为安同 OS 准备好测试源，使用下列命令即可安装该功能：

```bash
oma topics --opt-in bash-pinyin-completion-rs-0.1.0-new
```

安装后需重新启动终端模拟器或重新登录，方能启用拼音补全功能。

## 手动编译安装

### 构建依赖

要编译和使用 `bash-pinyin-completion-rs`，您需要安装如下依赖：

- Rust 工具链
- bash-completion

### 安装流程

手动安装流程如下：

```bash
git clone https://github.com/AOSC-Dev/bash-pinyin-completion-rs
cd bash-pinyin-completion-rs
bash scripts/install_completion.sh
```

而后，请向 `~/.inputrc` 追加以下配置，以启用与 Zsh 类似的候选菜单：

```
set show-all-if-ambiguous on
set menu-complete-display-prefix on
TAB: menu-complete
set colored-completion-prefix on
set colored-stats on
"\e[Z": menu-complete-backward
```

安装后需重新启动终端模拟器或重新登录，方能启用拼音补全功能。

## 已知问题

- 小部分软件无法使用拼音补全

## 反馈与贡献

如果您在使用 `bash-pinyin-completion-rs` 过程中遇到任何问题或有改进建议、贡献思路等，欢迎：

- 在 [GitHub](https://github.com/AOSC-Dev/bash-pinyin-completion-rs/issues) 提交问题工单
- 在我社[各聊天群组](https://aosc.io/contact)与我们联系反馈
