---
categories:
  - news
date: '2016-10-18'
important: true
title: 'AOSA-2016-0018: update GD Graphics Library to 2.2.3-1'
url: /news/2016/10/18/aosa-2016-0018-update-gd-graphics-library-to-223-1.html
---


Please update your `libgd` package to version `2.2.3-1`.

A recent commit found in GD Graphics Library's Git `master` branch fixed a security vulnerability, described as follows:

    Avoid potentially dangerous signed to unsigned conversion

    We make sure to never pass a negative `rlen` as size to memcpy().

Which is assigned with the following CVE:

[CVE-2016-8670](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-8670) (reserved but not issued).

Relevant documentation:

- [Original commit](https://github.com/libgd/libgd/commit/53110871935244816bbb9d131da0bccff734bfe9).
- [PHP bug report #73280](https://bugs.php.net/bug.php?id=73280).