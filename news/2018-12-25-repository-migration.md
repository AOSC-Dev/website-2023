---
categories:
  - news
date: '2018-12-25'
important: true
title: Repository Migration
url: /news/2018/12/25/repository-migration.html
---


On December 29th (UTC +8), our Community Repository server will migrate to a new server in the United States with a 1Gbps bandwidth. As users of AOSC OS, no manual intervention would be needed. However, if you are any of our mirror maintainers, please take note of the following:

- Check if you are using any of [repo.aosc.io, mirror.anthonos.org, repo.anthonos.org] as rsync domain.
  - If so, no intervention is needed. We will change the DNS record on Dec 30, 2018.
  - If not, please replace any non-domain reference (i.e., IP addresses) with repo.aosc.io. Under no circumstances should you use the IP address directly in the future.
- Check if the syncing completes successfully on Dec 31, 2018.
  - If not, please contact Xiaoxing Ye, our Repository maintainer at [xiaoxing@aosc.io](mailto:xiaoxing@aosc.io).

The server is kindly sponsored by [xTom.com](xTom.com). For more information, please refer to our [Migration Guide](https://wiki.aosc.io/developer/infrastructure/knowledge-base/00003-repository-migration).