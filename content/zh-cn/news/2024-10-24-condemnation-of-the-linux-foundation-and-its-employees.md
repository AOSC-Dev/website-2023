---
categories:
  - news
title: "安同开源社区有关 Linux 基金会及其职员不当行为的谴责"
date: 2024-10-24T18:30:00+08:00
important: true
---

![Linus Torvalds 关于革除数名俄罗斯籍内核贡献者、子系统维护者的公开声明](/assets/news/linus-torvalds-letter.png)

过去一天无疑是耻辱和令人绝望的。我们目睹了 Linus Torvalds 对我社贡献者乃至工作的攻击、侮辱和诋毁。

上周日，一条践踏社区信任的、可耻的提交被无声合并。数十名俄罗斯籍 Linux 内核贡献者、子系统维护者在未被告知的情况下被革除维护者身份。[¹](https://lore.kernel.org/all/2024101835-tiptop-blip-09ed@gregkh/)在诸多提出质疑的内核贡献者与关注者中，我社人员也提出了自己的质疑和严厉批评。[²](https://lore.kernel.org/all/a08dc31ab773604d8f206ba005dc4c7a@aosc.io/)[³](https://lore.kernel.org/all/20241023080935.2945-2-kexybiscuit@aosc.io/)而 Linux 基金会在此事中不仅没有发布任何公告解释行为，Linux 内核项目创始人和核心维护人员 Linus Torvalds 与 [linux-stable](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git) 分支维护者 Greg Kroah-Hartman 两位技术人员更是伙同 Linux 基金会一道，开始了极具歧视性的“猎巫行动”。

在此次新一轮回应之前，昨日我社人员编撰的新闻稿中已有详细的背景介绍，此处全文贴出：

> 日前，Linux 内核主要维护者之一 Greg Kroah-Hartman (Greg K-H) 提交了一项不寻常的“文档”[更新](https://github.com/torvalds/linux/commit/6e90b675cf942e50c70e8394dfb5862975c3b3b2)，将数名具有 <.ru> 顶级域名邮箱的维护者，和一名明确为俄罗斯身份的维护者从 MAINTAINERS（维护者名录）文件除名。

> 这一提交已于上周日被 Linus Torvalds 拉取并包含于 6.12-rc4 版本的代码中。

> Greg K-H 并未详述这项更新的具体原因，仅含糊其辞地表示该更改是“由于某些合规性要求”，并指出“（相关人员）提供充足文档后，方可回归（维护者名录）”。

> 相关的维护者移除方式相当暴力，其中部分子系统由于唯一维护者使用 <.ru> 顶级域名邮箱，整个子系统都被从 MAINTAINERS 文件中移除，这之中不乏诸如 UFS 文件系统和 PPTP 驱动等重要且被广泛使用的子系统。由于 Linux 内核开发流程完全基于邮件列表进行，当 MAINTAINERS 文件中移除相关维护者后，也就意味着与相关子系统的补丁或沟通将不再被发送至维护者的邮箱，乃至相关的邮件列表。这很可能会造成许多补丁“石沉大海”；而如果某个子系统未得到充分维护，那么其被从内核中移除也只是时间问题了。

> 通常而言，Linux 内核补丁除了发送至邮件列表外，还需要抄送与之相关的人士（如子系统维护者和活跃贡献者），并且经过讨论和审阅后才会被拉取合并。然而，Greg K-H 似乎刻意绕过了这部分流程，仅仅将补丁发送至流量最大、几乎不会有人认真阅读每封邮件的 [patches@lists.linux.dev](https://lore.kernel.org/linux-patches/?t=20241018113153) 列表，并于仅仅两天后就向 Linus Torvalds 发起拉取请求，而 Torvalds 亦未对相关修改提出质疑和意见便拉取合并这笔更改了。

> 考虑到 Linus Torvalds 与 Greg K-H 均受雇于 The Linux Foundation，后者为注册在美国的 501(c)(6) 组织，“某些合规性要求”为何显而易见。

> 截至发稿时，Greg K-H 尚未回应邮件列表上的相关质询。无论结果为何，这都将是 Linux 内核社区历史上最为耻辱的提交之一。

在这一风波伊始，我社贡献者柯晓宇采取了非常勇敢的行动，在提出撤回补丁 (Revert) 的同时，据理力争表达了自己的不满与质疑。[⁴](https://lore.kernel.org/all/20241023080935.2945-2-kexybiscuit@aosc.io/)与此同时，我们的贡献者密切地关注着这个话题，我们都抱有一丝似有似无的希望：“Greg Kroah-Hartman 和 Linus Torvalds 是否正迫于难以言状的政治压力才做出如此令人意外的事情？”

很不幸的是，在 Greg Kroah-Hartman 选择违反 [Linux 邮件列表网络礼仪](https://people.kernel.org/tglx/notes-about-netiquette-qw89)与列表中的多人私下交涉后（我社贡献者白铭骢在认定 Greg Kroah-Hartman 的私下沟通全无诚意且具有侮辱性后选择公开邮件对话全文[⁵](https://lore.kernel.org/all/444fa53bdfdee75522a1af41655a99b0@aosc.io/)，Linus Torvalds 直接选择了最令人不齿的方式回应质疑——攻击、侮辱和诋毁我社贡献者[⁶](https://lore.kernel.org/all/CAHk-=whNGNVnYHHSXUAsWds_MoZ-iEgRMQMxZZ0z-jY4uHT+Gg@mail.gmail.com/)：

> It's entirely clear why the change was done, it's not getting reverted, and using multiple random anonymous accounts to try to "grass root" it by Russian troll factories isn't going to change anything.

> 为什么要这样改原因很明确，我们也不会撤回这个提交。就算这样用一堆俄罗斯巨魔工厂里整来的匿名账号群起而攻之，结果也不会改变。

Linus Torvalds 还提到，“无辜的路人们”应当理解 Greg Kroah-Hartman 所指的“某些合规性要求”并非美国专利。他还指出，不了解什么是对俄制裁的读者有空应该“多读新闻”。

而后，Linus Torvalds 话锋一转，攻击由柯晓宇提交的关于撤回变更的补丁：

> As to sending me a revert patch - please use whatever mush you call brains. I'm Finnish. Did you think I'd be *supporting* Russian aggression? Apparently it's not just lack of real news, it's lack of history knowledge too.

> 至于前面发来的撤回补丁，请用一用你们那坨可能叫做脑子的东西。我是芬兰人，你们觉得我可能会**支持**俄国的侵略吗？显然你们不光没读过真实的新闻，还对历史一无所知。

在如今地缘政治极端紧张的今天，Linus Torvalds 选择使用国籍囊括政治观点的行为极端不负责任。更不用说将社区的一切反对意见都归结为“俄罗斯巨魔”和吸取“俄罗斯国家赞助的垃圾信息”的后果。Linus Torvalds 的发言无疑将为 Linux 内核及国际开源社区的协作互信，乃至全人类自由与开源软件运动带来难以弥补的损害。

因上述事由，我们对 Linux 基金会职员、乃至该组织的不当行为表示强烈抗议和谴责。我们要求 Linux 基金会就 Linus Torvalds 及 Greg Kroah-Hartman 的行为作出解释并对所有相关人员致歉并恢复名誉。
