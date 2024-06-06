---
categories:
  - news
date: '2016-12-31'
important: true
title: 'AOSA-2016-0040: Update FlightGear'
url: /news/2016/12/31/aosa-2016-0040-update-flightgear.html
---


Please update your `flightgear` package to version `2016.4.3-1`.

A fix was recently introduced to the source code for the FlightGear Flight Simulator to address the following security vulnerability:

- [CVE-2016-9956](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9956)

*"The FlightGear project fixed a security issue, allowing arbitrary file
overwrites for files the user running FlightGear has write access to
and could be taken advantage to for other impact as arbitrary code
execution."*

Relevant documentation:

- [Debian Security Advisory DSA-3742](https://www.debian.org/security/2016/dsa-3742).
- [Original oss-security mailing list post](http://www.openwall.com/lists/oss-security/2016/12/14/11).
- [Original patch](https://sourceforge.net/p/flightgear/flightgear/ci/280cd523686fbdb175d50417266d2487a8ce67d2/).