---
categories:
  - warning
title: "Issues with Thunderbird 102.2.0"
date: 2022-09-02T23:12:55-07:00
important: true
draft: false
---

We recently updated Thunderbird to version 102.2.0, but unfortunately, 
we discovered an issue where Thunderbird may crash when opening an HTML email under certain circumstances. 
We had determined the cause to be an incorrect optimization applied by LLVM compiler infrastructure when building with cross-program-language optimization enabled.
We plan to correct this issue in an upcoming update to the Thunderbird package update.
Stay tuned.

We also changed the OpenPGP implementation in Thunderbird with sequoia-pgp to make Thunderbird more secure when encrypting and decrypting emails.
Since this is a new implementation, it has a very low chance of corrupting your Thunderbird PGP keyring storage.
Nevertheless, we strongly recommend you back up your Thunderbird personal profile to be safe.

---

— Zixing Liu
