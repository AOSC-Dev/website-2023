---
categories:
  - news
date: '2017-03-04'
important: true
title: 'AOSA-2017-0029: Update Util-Linux'
url: /news/2017/03/04/aosa-2017-0029-update-util-linux.html
---


Please update your `util-linux` package to version `2.29.2`.

A recently released update to Util-Linux has address a security vulnerability, assigned with [CVE-2017-2616](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-2616).

*It is possible for any local user to send `SIGKILL` to other processes with root privileges. To exploit this, the user must be able to perform su with a successful login. `SIGKILL` can only be sent to processes which were executed after the su process. It is not possible to send `SIGKILL` to processes which were already running.*

Relevant documentation:

- [Original announcement](http://seclists.org/oss-sec/2017/q1/474).