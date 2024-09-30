---
categories:
  - news
  - advisories
title: "Mesa 上游合并 llvmpipe OrcJIT 及 RISC-V 支持"
date: 2024-07-16T23:00:00+08:00
important: true

---
![](/assets/news/2024-07-16-mesa-llvmpipe-orcjit-and-risc-v-merged.png)

经过接近两年的审阅、修订及测试工作，图形加速套件 Mesa 的 llvmpipe OrcJIT 及 RISC-V 支持终于成功合并上游。该支持合并后，RISC-V 将可以正常使用由 OrcJIT 加持的软渲染加速。感谢 [Alex Fan](https://github.com/alexfanqi) 及 [Yukari Chiba](https://github.com/YukariChiba) 等贡献者为此上游补丁付出的努力！在此过程中，我社率先在安同 OS 的 Mesa 组件中集成、测试了该支持，并多次提供反馈。

此外，由我社贡献者 [Icenowy Zheng](https://github.com/Icenowy) 实现的[龙架构 llvmpipe OrcJIT 适配](https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/30197)及[盘上（on-disk）着色器缓存支持](https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/30036)也紧随其后进入上游审阅流程，后续也将为更多发行版长期提供支持（安同 OS 的 Mesa 组件已在过去一段时间对这部分功能进行测试了测试验证）。

如下是 CNRV 发布的新闻稿，点击原文即可了解详情。

[CNRV 新闻稿 >> ](https://mp.weixin.qq.com/s/mlgZcAVUD8BGIGyA500sEg)
