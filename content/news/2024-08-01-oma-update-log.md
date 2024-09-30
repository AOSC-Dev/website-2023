---
categories:
  - advisories
title: "小熊猫包管理 (oma) v1.3.36 更新日志"
date: 2024-08-01T12:00:00+08:00
important: true

---
![](/assets/news/oma-slim.png)

- 为保证测试源更新时效和测试沟通效率， oma topic 不再支持使用用户指定的镜像源，限定 repo.aosc.io 作为测试包来源
- 修复了 oma search 对 Provides（“提供”，或软件包别名）依赖关系的索引，现在可以通过 oma search build-essential 搜索到开发套件了（感谢 @JeffBai 提交问题报告！）

以上修复已推送至稳定源！
