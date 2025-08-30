---
categories:
  - advisories
title: "Bash 拼音补全 v0.3.0 更新日志"
date: 2025-08-30T15:45:00+08:00
important: false
home: true
---

![pinyin-completion-0.3.0](/assets/news/pinyin-completion-0.3.0.webp)
> 这些个年…… 小登连双拼五笔都不会了，真是一代不如一代咯——

Bash 拼音补全 ([bash-pinyin-completion-rs](https://github.com/AOSC-Dev/bash-pinyin-completion-rs)) v0.3.0 发布啦，本次更新的主要内容有：

- 增强补全接口兼容性，适配更多程序的补全功能
- 新增双拼补全功能，支持多种常用方案
- 更新拼音匹配器后端 [ib-matcher](https://github.com/Chaoses-Ib/ib-matcher) (ib-pinyin) 至 v0.3.0

### 测试指南

安同 OS 用户可通过如下命令获取 bash-pinyin-completion-rs v0.3.0 测试版更新：

```shell
oma topic --opt-in bash-pinyin-completion-rs-0.3.0
```

如果您在测试 bash-pinyin-completion-rs 的过程中遇到问题或有任何建议，欢迎您来我社[各聊天群组](https://aosc.io/contact)与我们联系反馈。

### 兼容更多程序

bash-pinyin-completion-rs 的核心工作原理是接入 Bash 的补全功能并替换一部分补全接口，本版更新接入了更底层和更通用的接口，使得更多命令能够使用补全逻辑。如 unzip、scp 等先前无法使用拼音补全的命令现已得到完美支持。

### 双拼支持

本版 bash-pinyin-completion-rs 还加入了新的双拼支持，支持多种双拼方案。更新后，您仅需通过 `PINYIN_COMP_MODE` 设置补全方案即可自定义希望使用的补全方案：

- `Quanpin`: 全拼（默认）
- `ShuangpinAbc`: 智能 ABC（全拼）
- `ShuangpinJiajia`: 拼音加加（双拼）
- `ShuangpinMicrosoft`: 微软拼音（双拼）
- `ShuangpinThunisoft`: 紫光拼音（双拼）
- `ShuangpinXiaohe`: 小鹤双拼
- `ShuangpinZrm`: 自然码双拼

未设置此变量时，bash-pinyin-completion-rs 默认使用全拼方案。

### 未来计划

在未来发布的 v0.4.0 版中，我们计划引入如下新特性：

- 增强兼容性，并且正确处理包含环境变量的路径补全
- 加入日语（罗马字拼音）输入支持

### 致谢

本版 bash-pinyin-completion-rs 的新功能由如下社区好友实现：

- [@wxiwnd](https://github.com/wxiwnd)
- [@black-desk](https://github.com/black-desk)
- [@Chaoses-Ib](https://github.com/Chaoses-Ib)

感谢各位的贡献！