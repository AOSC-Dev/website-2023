---
categories:
  - news
date: '2017-01-26'
important: true
title: 'AOSA-2017-0001: Update PCSC-Lite'
url: /news/2017/01/26/aosa-2017-0001-update-pcsc-lite.html
---


Please update your `pcsclite` package to version `1.8.20`.

A security vulnerability was disclosed for PCSC-Lite:

*"The SCardReleaseContext function normally releases resources associated with the
given handle (including 'cardsList') and clients should cease using this handle.
A malicious client can however make the daemon invoke SCardReleaseContext and
continue issuing other commands that use 'cardsList', resulting in a
use-after-free.  When SCardReleaseContext is invoked multiple times, it
additionally results in a double-free of 'cardsList'.*

*"The issue allows a local attacker to cause a Denial of Service, but can
potentially result in Privilege Escalation since the daemon is running as root
while any local user can connect to the Unix socket."*

And was assigned with the following CVE:

[CVE-2016-10109](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-10109).

Relevant documentation:

- [Original oss-security mailing list post](http://seclists.org/oss-sec/2017/q1/18).