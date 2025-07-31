---
categories:
  - advisories
title: "安同 OS 测试源现已推送 Chromium 127.0.6533.72"
date: 2024-07-30T12:00:00+08:00
important: true

---



社区贡献者 @KexyBiscuit 整理了 @jiegec 维护的 Chromium 126 补丁集，移除了过期的补丁、并将其余的补丁和上游新增的补丁适配至 Chromium 127 上。

考虑到 LLVM 18 已支持龙架构的 LSX 向量扩展指令集，本次生成中为龙架构（LoongArch64，下同）上的 Clang 开启了 LSX 优化，由此发现了[上游一处生成脚本中的缺陷](https://issues.chromium.org/issues/356038456)，其修复补丁也包含在本次的测试版本中，并已交由上游[审阅](https://chromium-review.googlesource.com/c/chromium/src/+/5740787)。

更改日志

- chromium: 升级至 127.0.6533.72
  - 使用系统提供的 rust-bindgen 以修复 AArch64 及 LoongArch64 上的生成
  - 从生成依赖中移除不再需要的 OpenJDK
  - 移除不再需要的 OpenJDK 相关补丁
  - 移除生成脚本中的部分绕过逻辑
  - 移除了 appdata.xml 中一个多余的字符
  - 在 LoongArch64 上启用 libpng 的 LSX 优化
  - AOSC OS 所使用的 Chromium 补丁现可在[此处](https://dev.azure.com/AOSC-Tracking/chromium/_git/chromium/commits?itemVersion=GBaosc%2Fv127.0.6533.72)追踪
  - 为大部分补丁补全了署名信息
- chromium: 现依赖 libyuv
- libyuv: 升级至 Chromium 所需的 2024-02-15 日提交版本
- autobuild4: 升级至 4.3.10 以修复 GCC 生成
- gcc: 为 LoongArch64 重新生成，以调整为 medium code model

如果您有兴趣测试安同 OS 上的 Chromium 127.0.6533.72，请通过如下命令打开测试源并安装 Chromium。需注意，目前安同 OS 上的 Chromium 仅支持 AMD64 (x86-64) 、AArch64 和龙架构。

```
sudo oma topics --opt-in chromium-127.0.6533.72 && sudo oma install chromium
```

如果您在使用 Chromium 127.0.6533.72 测试版的过程中遇到问题或有疑问及反馈，请通过安同社区各聊天群组或社区论坛以联系我们，或直接前往[拉取请求](https://github.com/AOSC-Dev/aosc-os-abbs/pull/7270)下方留言。
