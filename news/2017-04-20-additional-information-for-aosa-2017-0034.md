---
categories:
  - news
date: '2017-04-20'
important: true
title: Additional Information for AOSA-2017-0034
url: /news/2017/04/20/additional-information-for-aosa-2017-0034.html
---


We have received complaints regarding their SSH Host keys being erased despite that they have already regenerated their SSH Host key *before* `AOSA-2017-0034` was posted.

This is our fault for not checking on vulnerable host keys by checksum - instead, we chose to regenerate the keys regardless. But here's the way to workaround this issue, issue this command before you upgrade your system (given that your `openssh` package has version older than `7.5p1-1`).

```
# touch /usr/share/doc/openssh/AOSA-2017-0034
```

Again, we apologize for this incident.