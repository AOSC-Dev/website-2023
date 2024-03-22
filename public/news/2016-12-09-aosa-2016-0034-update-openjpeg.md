---
categories:
  - news
date: '2016-12-09'
important: true
title: 'AOSA-2016-0034: Update OpenJPEG'
url: /news/2016/12/09/aosa-2016-0034-update-openjpeg.html
---


Please update your `openjpeg` package to version `2.1.2-1`.

Two vulnerabilities in OpenJPEG have just been disclosed:

- [CVE-2016-9580](http://www.cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9580) integer overflow in tiftoimage resulting into heap buffer overflow.
- [CVE-2016-9581](http://www.cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9581) infinite loop in tiftoimage resulting into heap buffer overflow in convert_32s_C1P1.

Relevant documentation:

- [Original GitHub issue for CVE-2016-9580](https://github.com/uclouvain/openjpeg/issues/871)
- [Original GitHub issue for CVE-2016-9581](https://github.com/uclouvain/openjpeg/issues/872)
- [Fix commit for the two CVEs](https://github.com/szukw000/openjpeg/commit/cadff5fb6e73398de26a92e96d3d7cac893af255)