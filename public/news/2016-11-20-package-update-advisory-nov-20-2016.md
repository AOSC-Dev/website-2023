---
categories:
  - news
date: '2016-11-20'
important: true
title: 'Package Update Advisory: Nov. 20, 2016'
url: /news/2016/11/20/package-update-advisory-nov-20-2016.html
---


Recent update to Jasper and GpgME (`jasper` and `gpgme`, respectively) contained undocumented update to their "so-ver" (version suffix to share libraries) - which we did not perform a rebuild as the result of this oversight.

- If you have updated AOSC OS between now and November 18th (UTC time), you may experience issue that some applications crashes on launch, or crashes during usage.
- If not, we advise that you avoid updating system within 24 hours of this advisory to prevent issue described above.

A batch of updates was pushed earlier today to fix this issue.

Note: This issue only applies to AOSC OS for the **AMD64/x86_64** architecture.

We apologize for any inconvenience.