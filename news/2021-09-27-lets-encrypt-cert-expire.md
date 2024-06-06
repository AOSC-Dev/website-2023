---
categories:
  - warning
title: "Usability Notes on Let's Encrypt's Primary Root Certificate Migration"
date: 2021-09-27T09:54:21-07:00
important: true
---

Let's Encrypt's former primary root certificate, DST Root CA X3, will expire on September 30th.
To prevent connection issues with sites using their new certificates, Let's Encrypt has taken
numerous measures.

One of such measures, however, has rendered applications linked to older OpenSSL and GnuTLS
libraries incapable of accessing secure sites using Let's Encrypt certificates. AOSC OS had to
blacklist the DST Root CA X3 root certificate in the `ca-certs` 20210907 update to workaround this
issue.

Even though DST Root CA X3 will remain valid until the end of this month, if you have updated
`ca-certs`, you may not be able to access secure sites signed __**exclusively**__ with this
certificate. Such sites are rare, though if you ran into such a site, you may manually downgrade
`ca-certs` to 20201201-1 with the following command as a temporary workaround:

    sudo apt install ca-certs=20211201-1

This announcement remains valid until September 30, 2021 - after this date, this update should not
cause any further issue.

For further details and discussions regarding this issue, please refer to
[aosc-os-abbs #3473](https://github.com/AOSC-Dev/aosc-os-abbs/discussions/3473).

---

— Kexy Biscuit, Zixing Liu, Mingcong Bai
