---
categories:
  - news
date: '2017-02-06'
important: true
title: 'AOSA-2017-0009: Update OpenSSL'
url: /news/2017/02/06/aosa-2017-0009-update-openssl.html
---


Please update your `openssl` and `openssl+32` package to version `1.0.2k`.

A recently released version of OpenSSL libraries and tools has addressed the following security vulnerabilities:

- Truncated packet could crash via OOB (out-of-bounds) read ([CVE-2017-3731](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-3731)).
- `BN_mod_exp` may produce incorrect results on `x86_64` ([CVE-2017-3732](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-3732)).
- Montgomery multiplication may produce incorrect results ([CVE-2016-7055](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7055)).

Relevant documentation:

- [Original announcement](https://www.openssl.org/news/openssl-1.0.2-notes.html).
- [Full 1.0.2 series changelog](https://www.openssl.org/news/cl102.txt).