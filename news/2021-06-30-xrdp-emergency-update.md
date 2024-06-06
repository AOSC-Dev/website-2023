---
categories:
  - warning
title: "[SOLVED] EMERGENCY UPDATE: xrdp Contains Pre-generated Private Keys"
date: 2021-06-30T08:28:30+08:00
important: false
---

In a report from Void Linux maintainer "Chocimier [\<chocimier@tlen.pl\>](mailto:chocimier@tlen.pl),"
our `xrdp` packages contained build-time-generated private keys. **This is a
serious security issue, and we have since taken action to release an emergency
update.** If you have installed `xrdp` in your system, please make sure that
the package now has a version of at least `0.9.14-1`.

In this emergency update, we have re-generated all `xrdp` private keys. As a
result, your client and server applications may inform you of mis-matched
public keys. Our sincerest apologies for any inconvenience that this may
have caused.

----

— Mingcong Bai
