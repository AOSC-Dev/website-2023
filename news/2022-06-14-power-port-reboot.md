---
categories:
  - warning
title: "AOSC OS POWER (ppc64el) Port Reboot"
date: 2022-06-14T16:50:06-07:00
important: true
---

In order to transition to the more upstream compliant 128-bit IEEE long double
ABI, AOSC OS will now reboot its POWER (`ppc64el`) port. For more details on
the rationales and caveats for this change, Fedora's Project Wiki offers a
[page](https://fedoraproject.org/wiki/Changes/PPC64LE_Float128_Transition)
detailing this change. Due to constraints with our build server's performance,
effective today and until the conclusion of this port reboot, we will suspend
all maintenance work on our current POWER port - this means no more feature,
bugfix, or security updates. If you are currently using our POWER port, we
advise that you switch to another POWER distribution for the meanwhile in order
to ensure your productivity and security.

We apologise for any inconvenience and will update with port reboot status.

---

— Mingcong Bai
