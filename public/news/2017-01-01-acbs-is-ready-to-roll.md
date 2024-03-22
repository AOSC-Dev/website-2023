---
categories:
  - news
date: '2017-01-01'
important: false
title: ACBS is Ready to Roll
url: /news/2017/01/01/acbs-is-ready-to-roll.html
---


ACBS (Autobuild CI Build System), after several re-writes, is now available as a replacement to our old Autobuild manifest and configuration manager ABBS (AutoBuild Build Service). ACBS comes with enhanced functionality, improved reliability, and full compatibility with old ABBS trees:

- Multi-tree support (a "forest", so to speak).
- Checksum verification support.
- Cache cleaning and management support.
- Logging support.
- Proper dependency calculation (automatic build sequences, useful for bootstrapped bases).

Extra blings are also included:

- Build timing utilities.
- More detailed error messages.

The new set of tool is written in Python 3 (and you will need a version newer than 3.3), along with several essential dependencies - which are commonly found in any well built Linux distributions - ACBS is built for any Linux distribution eyeing on Autobuild for its packaging work.

New packages built for AOSC OS since today will be built with ACBS - just to give it more real-world and detailed testing - but as it stands today, it is already quite a bit more advanced than ABBS. Definitely a recommended upgrade.

Our AOSC OS packaging documentation ["AOSC Cadet Training"](https://github.com/AOSC-Dev/aosc-os-abbs/wiki/) is also updated for using ACBS - please note that ABBS is now marked deprecated, and you should not continue to use ABBS - we are not interested in fixing old and deprecated stuff, as we usually do.