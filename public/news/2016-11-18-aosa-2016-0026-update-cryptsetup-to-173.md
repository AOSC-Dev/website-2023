---
categories:
  - news
date: '2016-11-18'
important: true
title: 'AOSA-2016-0026: Update Cryptsetup to 1.7.3'
url: /news/2016/11/18/aosa-2016-0026-update-cryptsetup-to-173.html
---


Please update your `cryptsetup` package to version `1.7.3`.

A new version of Cryptsetup was announced with fix to the following security vulnerability:

[CVE-2016-4484](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-4484).

More specifically, this is a vulnerability that a large amount of "Enter" keystroke may allow attacker/user to gain root access to the shell. However, at a note of relief - in the case of AOSC OS, an attacker could only get so far before he was prompted for decryption when trying to access files on an encrypted partition - as the attacker may only gain access to the shell of the initialization RAM disk, but not the partition itself (where the system was installed).

Relevant documentation:

- [Cryptsetup 1.7.3 release note](https://www.kernel.org/pub/linux/utils/cryptsetup/v1.7/v1.7.3-ReleaseNotes)
- [*CVE-2016-4484: Cryptsetup Initrd root Shell*](http://hmarco.org/bugs/CVE-2016-4484/CVE-2016-4484_cryptsetup_initrd_shell.html)