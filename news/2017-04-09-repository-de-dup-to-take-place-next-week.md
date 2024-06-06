---
categories:
  - news
date: '2017-04-09'
important: false
title: Repository De-Dup to Take Place Next Week
url: /news/2017/04/09/repository-de-dup-to-take-place-next-week.html
---


Since 2014, our [community repository](https://repo.aosc.io/) has been growing in size due to our (essentially) permissive policy on keeping all old versions of all our packages.

As we stand today, the repository is roughly 500GiB in size. This is abnormal even when considering all of our architectural ports, as Debian, **the** largest binary-based *nix distribution requires just over 1TiB in size. This continuing growth in repository size has brought storage challenges to both our mirror hosts and our own repository server.

Therefore, it is decided that starting at **midnight of next Friday** (April 14th, UTC time) that we will be starting to remove all packages that are not the newest provided across **all architectures**. We expect this operation to be finished by the weekend of April 16th.

Users (like you) should not be concerned about this operation, nor would impact your experience with AOSC OS. Removal of old packages only removes the possibility for developers to backtrack onto older revisions of a packages for comparative and regression testing.