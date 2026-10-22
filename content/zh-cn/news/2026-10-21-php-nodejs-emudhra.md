---
categories:
  - security
title: "安同 OS 重要安全公告 (2026/10/21)：PHP 及 eMudhra 证书"
date: 2026-10-21T23:30:00+08:00
important: true
home: false
---

![安同 OS 重要安全公告 (2026/10/21)：PHP 及 eMudhra 证书](/assets/news/cve-php-and-emudhra-20261021.webp)

近两日有多个严重安全漏洞被披露，我们也已收到用户朋友们的关切，故发布该公告说明修补进展。

PHP 8.5.12：CVE-2026-109618 及 CVE-2026-109619
---

2026 年 10 月 21 日，PHP 公布了两个严重级别的远程任意代码执行漏洞 [CVE-2026-109618](https://nvd.nist.gov/vuln/detail/cve-2026-109618) 和 [CVE-2026-109619](https://nvd.nist.gov/vuln/detail/cve-2026-109619)，评分均为 9.2。鉴于漏洞的严重性及且该漏洞可能已经被利用，我们推荐任何使用 PHP 对外提供服务的用户立即升级 PHP 版本至 8.5.12。

Node.js 22.23.4/24.22.1/26.12.1
---

今日随 [Node.js 2026 年 10 月 21 日安全更新公告](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)发布的 Node.js 长期支持 (LTS) 分支更新 (22.23.4/24.22.1/26.12.1) 包含远程代码执行 (RCE) 漏洞在内的多个高危漏洞修复，我们正在着手推送相关更新，预计在未来数小时内完成，请注意及时更新。

关于 eMudhra 相关证书吊销进展的说明
---

2026 年 10 月 20 日，多方报道称 eMudhra 管理的多个中间证书私钥被破解，产生中间人攻击 (Man-in-the-Middle) 等安全风险。为保护无法在线验证证书有效性的应用，我们决定不再信任为这些证书签名的根证书。受影响的证书包括 emSign Root CA - C1/G3、emSign ECC Root CA - C3，以及 Comodo AAA Services。其中 Comodo AAA Services 先前为 eMudhra 交叉签名过部分中间证书，同时签发时间过早，已不符合现行证书信任策略，因此将被一并解除信任。

安同 OS 维护者已在 Dennis Jackson 及社区贡献者们一同维护的 [eMudhra Intermediate CA Compromise](https://emudhra.we-have-a-problem.com/) 站点的帮助下辨认了第一批含 NSS、oma 及 Node.js 等在内共 26 个常用且须修复的软件包。我们目前正在对这些软件包进行构建和使用测试，预计在周末前可以推送这些更新。

此外，考虑到大量 Rust 程序可能仍在使用受影响的 `rustls-webpki` < 0.103.16 库 ([RUSTSEC-2026-0382](https://rustsec.org/advisories/RUSTSEC-2026-0382.html))，我们计划在未来一周内着手预防性地重构所有基于 Rust 的软件包，并利用 Autobuild 中基于 [cargo-audit](https://rustsec.org/) 实现的自动依赖修补流程完成证书吊销工作。
