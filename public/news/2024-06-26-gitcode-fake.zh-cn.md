---
categories:
  - news
title: "关于 GitCode 近日以我社名义镜像 GitHub 组织及仓库内容的声明"
date: 2024-06-26T23:00:00+08:00
important: false

---

![](/assets/news/gitcode-fake.svg)

今日在社区好友的提醒下，我们留意到由[长沙开发者科技有限公司](https://www.tianyancha.com/company/3470940218)旗下[北京创新乐知网络技术有限公司](https://www.tianyancha.com/company/3049500520)（[CSDN](https://www.csdn.net/) 运营方）及[重庆开源共创科技有限公司](https://www.tianyancha.com/company/5924520331)（下附邮件中称之为“贵司”）所搭建的 [GitCode](https://gitcode.com/) 代码托管平台在未告知我社贡献者的情况下镜像了我社于 GitHub 平台的组织 [AOSC-Dev](https://github.com/AOSC-Dev/) 及 [AOSC-Archive](https://github.com/AOSC-Archive) 的数个活跃仓库、工单及合并请求。我们在此声明：

1. GitCode 平台上的上述组织与我社无关，托管的我社源码亦非我方提交；上述行为属于对社区名义的冒用，我社贡献者从未获知及同意该做法
2. 我社不为该平台 AOSC-Dev 及 AOSC-Archive（及其他可能存在的 AOSC 相关）组织中的任何代码贡献负责，亦不受理在该平台上的任何用户咨询和投诉
3. 我社已就此事向 CSDN 及 GitCode 相关运维团队提出抗议和严正交涉，并要求其立即整改（详见下文附带的邮件正文，该邮件正文也将一式两份发布到 GitCode 的[官方反馈中心](https://gitcode.com/Gitcode-offical-team/GitCode-Docs/issues)，以便运营方尽快知悉和整改）

为封存冒用证据，我社贡献者已留存相关页面的归档：

- AOSC-Dev 组织：[Wayback Machine](https://web.archive.org/web/20240626042401/https://gitcode.com/AOSC-Dev) | [Archive.is](https://archive.is/su9h5)
- AOSC-Archive 组织：[Wayback Machine](https://web.archive.org/web/20240626042802/https://gitcode.com/AOSC-Archive) | [Archive.is](https://archive.is/ivJ28)

请各位社区贡献者、用户及好友周知，感谢！

——————

邮件：来自安同开源社区的抗议与严正交涉

CSDN 及 GitCode 运维负责人、同事们：

今日，我社贡献者发现贵司源代码托管平台 GitCode 在未告知及征求意见的情况下以我社名义镜像了我社于 GitHub 平台 [AOSC-Dev](https://github.com/AOSC-Dev) 及 [AOSC-Archive](https://github.com/AOSC-Archive) 组织的数个活跃仓库、工单及合并请求。贵司的行为对我社组织、工作及运营造成了严重困扰，且有机会造成个人名誉权及著作权的损害。我们对此表示最严厉的谴责并提出如下要求：

贵司立即促成 GitCode 平台相关工作人员立即停止爬取行为并彻底地删除我社组织的镜像。

考虑到贵司在以我社名义发布镜像前未尊重我方意愿，本邮件将附于我社今日发布的新闻稿件中向互联网公示。此外，考虑到贵司行为恶劣且有恶意冒用我社名义的性质，我们不接受且不会答复任何形式的咨询和异议。

安同开源社区全体贡献者

2024 年 6 月 26 日

——————

![](/assets/news/gitcode-fake-email.jpg)

我们已收到来自 GitCode 客服的回邮，相关组织及仓库页面已无法访问，亦无法使用 Git 克隆相关内容：

```bash
mingcongbai@JellyNote [ ~ ] $ git clone https://gitcode.com/AOSC-Dev/aosc-os-abbs
正克隆到 'aosc-os-abbs'...
remote: {"status": false, "message":"The project you were looking for could not be found."}
致命错误：无法访问 'https://gitcode.com/AOSC-Dev/aosc-os-abbs/'：The requested URL returned error: 403
```
