---
categories:
  - news
date: '2016-11-14'
important: true
title: 'Package Update Advisory: Nov. 14, 2016'
url: /news/2016/11/14/package-update-advisory-nov-14-2016.html
---


A failed package `systemd` version `1:232-1` for **AMD64/x86_64** was pushed to the repository by mistake, which lacks the set of files for `libgudev` - a library for providing GObject bindings for UDev.

This update could result in the following issues:

- NetworkManager failing to start due to missing runtime libraries.
- GNOME failing to start or crashing due to missing runtime libraries.

Results above may be detrimental to the usability of AOSC OS. We advise that you do not update your system within 24 hours of this notice to prevent expected damage to your system.

If you have already updated your system and ran into issues described above, please download the following package and install the update manually - as `root` or by using `sudo`.

    wget https://repo.aosc.io/os-amd64/os3-dpkg/s/systemd_232-1_amd64.deb
    dpkg -i systemd_232-1_amd64.deb

And restart AOSC OS.

My sincere apologies to this incident. If you have further questions about this incident or need additional assistance, please contact us at #aosc or find me, JeffBai on Freenode.

— Mingcong Bai