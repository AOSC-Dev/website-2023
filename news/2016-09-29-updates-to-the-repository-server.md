---
categories:
  - news
date: '2016-09-29'
important: false
title: Updates to the Repository Server
url: /news/2016/09/29/updates-to-the-repository-server.html
---


Along with the removal of RPM packages from the [repository server](https://repo.aosc.io), we have also cleaned up our repository server (which is way over due).

- Old OS1 and OS2 (AOSC OS from 2013 and 2014) files are moved to the [os-archives](https://repo.aosc.io/os-archives/) directory.
- The `mirrorupdater` script was rewritten (first since early 2014!), and posted on our [repository-scripts](https://github.com/AOSC-Dev/repository-scripts) Git repo.
  - DPKG repositories now contain a catalog that provides index to multiple versions of a same package, making downgrading packages a lot easier - when need be.

With such major change to the repository server, we might be experiencing some unstability in service. If you have encountered any issue with updating, refreshing, and installing packages, please file an issue/complaint at [aosc-os-abbs](https://github.com/AOSC-Dev/aosc-os-abbs/issues).