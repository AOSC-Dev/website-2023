---
categories:
  - news
date: '2020-02-07'
important: false
title: This Week in AOSC OS Development
url: /news/2020/02/07/this-week-in-aosc-os-development.html
---


It's been a busy week since we kicked off the Winter 2020 iteration.
As time permits, we will be pushing weekly updates to the Stable branch,
including security, bug-fix, patch-level version updates (e.g. 2.3.1 => 2.3.2),
and major updates included as
[Exceptions](https://wiki.aosc.io/developer/packaging/cycle-exceptions).

Here below is a breakdown of what we've done this week.

Stable Branch Updates
---------------------

Multiple security updates have now been made available for Stable branch users
(AMD64-only for now, we are working to sync other architectures):

- Chromium (`chromium`) and Google Chrome (`google-chrome`)
  v79.0.3945.117 => v80.0.3987.87.
- cURL (`curl`, `curl+32`) v7.66.0 => 7.67.0.
- GNU Screen (`screen`) v4.7.0 => v4.7.0-1.
- OpenJDK and OpenJFX...
    - OpenJDK 8 (`openjdk-8`) v3:8u232+ga-1 => v3:8u242+ga-1.
    - OpenJFX 8 (`openjfx-8`) v8u202+ga-1.
    - OpenJDK 11 (`openjdk`) v3:11.0.5+ga => 3:11.0.6+ga.
    - OpenJFX 11 (`openjfx`) v11.0.3+1.
- Sudo (`sudo`) v1.8.29 => v1.8.31.

Desktop environments have also received updates and fixes:

- GNOME v3.34.0 => v3.34.1.
- Plasma Desktop v5.17.4 => v5.17.5.
- Default settings for various desktop environments are updated with new
  default wallpaper and themes. In particular, Plasma Desktop now uses a
  package (`plasma-default-settings`) to ship AOSC OS specific settings,
  and the AOSC OS logo in KInfoCenter has been replaced with an vector
  image to improve appearance in HiDPI set-ups.

Other notable updates:

- Linux Kernels...
    - Mainline (`linux+kernel`) v5.5.0 => v5.5.2.
    - Long-Term Support (`linux+kernel+lts`) v5.4.15 => v5.4.17.
- Node.js (`nodejs`) v2:12.14.0 => v2:12.14.1.
- Pale Moon Browser (`palemoon`) v28.8.0 => v28.8.2.2.
- Telegram Desktop (`telegram-desktop`) v1.9.3-2 => v1.9.9.
    - This version fixes the spellcheck function.
- Thunderbird (`thunderbird`) v68.4.1 => v68.4.2.
- You-Get (`you-get`) v0.4.1388 => v0.4.1403.
- Youtube-DL (`youtube-dl`) v2020.01.01 => 2020.01.24.

Looking Ahead
-------------

Major works are also done on the Testing-Proposed => Testing front, which will
be made available by the end of April for Stable users. Across the tree, we
have surveyed for non-encrypted (or non-secured) source links (`ftp://` and
`http://`) and attmpted to replace them all with HTTPS (`https://`).
At present, we have detected over 1600 packages with non-encrypted source
links, and replaced over 1200 of them with HTTPS, with 328 remaining (either
not provided by the upstream, or new links would have to be detected).

Major desktop environment updates are packaged and pending for further testing:

- Cinnamon Desktop and Applications v4.2 => v4.4.
- MATE Desktop and Applications v1.20 => v1.22.
- Xfce and Applications v4.12 => v4.14.

Other notable updates:

- Brise, a dictionary for the RIME input method, has been deprecated and
  replaced with a new collection of RIME Dictionary Data (`rime-data`) as
  specified by its [upstream](https://github.com/rime/plum).
- IPython Shell (`ipython`) v7.10.2 => v7.11.1.
- Visual Studio Code, or Code-OSS (`vscode`) v1.41.1 => v1.42.0.
- Wine (`wine`) v5.0 => v5.1.

In the coming week, we are expecting Plasma 5.18 to be released by the KDE
Community. Currently, Plasma 5.18 Beta is already in the Testing-Proposed
repository to prepare for the final release. We are expecting to complete
building the 5.18.0 release in the coming week, and make it available for
Testing branch users.

---

— Mingcong Bai