---
categories:
  - warning
title: "Thunderbird 102.2.0 有问题需要关注"
date: 2022-09-02T23:12:55-07:00
important: true
draft: false
---

我们最近将 Thunderbird 软件更新到了 102.2.0 版本，但是我们发现在某些情况下，Thunderbird 可能会在打开 HTML 富文本邮件时崩溃。我们目前已确定此问题的原因是 LLVM 编译器设施在启用了跨语言优化时存在代码优化错误。不过我们计划在之后的 Thunderbird 更新中修正该优化错误，敬请期待！

另外，我们在该版本中将 Thunderbird 的 PGP 密码学实现替换成了 sequoia-pgp。这样可以提高您在加密或解密 PGP 邮件时的安全性。由于这是一个较新的实现，该实现有非常低的概率会损坏您的 Thunderbird 密钥存储区。我们强烈建议您在更新前备份您的 Thunderbird 个人档案文件夹。

---

— Zixing Liu
