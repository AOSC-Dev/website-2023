---
categories:
  - advisories
title: "安同 OS 自动镜像跳转服务 (redir.aosc.io) 开放测试"
date: 2025-03-05T22:00:00+08:00
important: true
home: false
---
针对用户朋友们之前反映的有关安同 OS 软件源访问不稳定、下载速度慢等问题，我们协同数个国内高校镜像源建立了一套准实时镜像同步和重定向系统，根据用户所在地理位置及网络服务配置自动跳转请求至性能最好的镜像源，以期改善各位用户的使用体验。

目前该系统已初步于 redir.aosc.io 上线（后续将替代原 repo.aosc.io 的部分请求响应）。

## 测试指南

请使用如下命令打开 oma 镜像源选择界面：
```
oma mirror
```
并确保只选中了如下镜像源（注意，本界面是多选）：
```
AOSC Automatic Redirect Mirror [TESTING] (Global) (redir)
```
按 Esc 保存配置后正常操作 oma 进行系统包管理操作即可。

## 测试反馈

如果您在测试过程中遇到困难或异常，也请通过社区[各聊天群组](https://aosc.io/contact)与我们联系。

感谢各位的参与！
