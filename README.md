AOSC Portal
===

[简体中文自述文件 >>](/README.zh-cn.md)

The Portal website for AOSC since 2024 (designed in 2023, hence the name),
built using Vue.js.

At a glance
---

The main design goal for this new website is to maximise information density
on a single screen space, utilising both multi-column and conventional
navigation systems. It also seeks to depart from a conventional "FOSS
community" aesthetic by emphasizing vivid and product-oriented presentation
for prospective and current users.

In terms of visual styling, this website intentionally seeks to re-create a
2000s Web 1.0 aesthetic (whilst adopting modern technological frameworks and
layout optimisations). Inspiration for the site layout comes from Microsoft's
Windows home page from 2001 - 2004:

- [Reference 1, Windows XP home from late 2001](https://web.archive.org/web/20011211230629/http://microsoft.com/windowsxp/default.asp)
- [Reference 2, Windows XP mid-cycle home from 2004](https://web.archive.org/web/20040204080626/http://www.microsoft.com/china/windows/default.mspx)

Technically speaking, this website is built as a client-side rendered Web
application. In the near future, we plan to refactor this website into one
that is powered by server-side rendering or static site generator to help
with performance and indexability.

This website is not yet optimised for mobile, legacy (Afterglow-targeted),
and functionally-limited browsers. We are currently evaluating plans to
implement a purpose-specific site to help with these scenarios.

Deployment and testing
---

This website is deployed to our Web server using a GitHub workflow. It should
also be deployed in conjunction with [website-2023-utils](https://github.com/AOSC-Dev/website-2023-utils).
Please follow also the instructions there.

To test the website locally, you would need a Node.js + NPM toolchain and a
deployment of the aforementioned [website-2023-utils](https://github.com/AOSC-Dev/website-2023-utils).
To install Node.js + NPM on AOSC OS:

```
oma install nodejs
```

Then, build and serve the website locally:

```
npm i
npm run dev
```

Submitting news
---

All news articles are written in Markdown and stored in `/public/news`, with
extra assets (images, etc.) stored in `/assets/...`. All assets should be
referenced from the site (`/assets/...`, not `https://...`).

News articles should contain a header:

```
---
categories:
  - journals
title: "安记冰室・九月上"
date: 2024-09-19T23:00:00+08:00
important: false
home: true
---
```

- `categories` (enum):
    - `advisories`: User advisories (usually AOSC OS-related).
    - `news`: Community news about events, sponsorships, etc.
    - `journals`: Community journals (entitled *Coffee Break*).
    - `minutes`: Contributor meeting records.
- `title` (string): News title.
- `date` (string): Publication date to be presented as-is.
- `important` (boolean): Highlight as important.
- `home` (boolean): Whether to list in the news highlight section at the Portal home.

### Localising news articles

To localise a news article, use a language code suffix such as `.zh-cn`, i.e.:

```
2024-09-18-aosc-os-relnote.zh-cn.md
```
