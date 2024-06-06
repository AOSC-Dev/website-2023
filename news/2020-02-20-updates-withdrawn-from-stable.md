---
categories:
  - news
date: '2020-02-20'
important: true
title: Updates Withdrawn from the Stable Repository
url: /news/2020/02/20/updates-withdrawn-from-stable.html
---


Within the past 24 hours, 73 updates were accidentally uploaded to the Stable
repository (intended for Stable-Proposed). In particular, an update to LDNS
(`ldns`, 1.7.0-3 | 1.7.1) have broken OpenSSH (`openssh`), OpenSSH-HPN
(`openssh-hpn`), and DNSCrypt Proxy (`dnscrypt`). To mitigate this issue,
please issue the following command:

```
# apt install ldns=1.7.0-3
```

We are not aware of any other issue caused by this incident. We will be merging
changes from Stable-Proposed on Friday or Tuesday, UTC time. Before then, if you
you have applied the mitigation from above, you should not run into other issues.

However, as the updates were withdrawn, some packages installed on your system
will now show up with `local` markers, meaning that a specific version of a
package installed on your system is not found on the repository enabled by
your configuration. The Stable-Proposed merge in the coming days will result in
a wave of updates which will render your system consistent with the repository
again. In short, these `local` markers are temporary and should not affect
system functionality.

We apologise for any inconvenience that we may have caused. If you run into other
issues after updating your system, please don't hesistate to
[inform us](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new/choose/).

----

Attachment: List of Packages Affected by the Withdrawal
-------------------------------------------------------

| Package, Version, and Architecture      | Deferred To     |
|-----------------------------------------|-----------------|
| babl 0.1.74-0 (amd64)                   | stable-proposed |
| brial 1.2.7-0 (amd64)                   | stable-proposed |
| chromium 80.0.3987.116-0 (amd64)        | stable-proposed |
| cimg 2.8.4-0 (amd64)                    | stable-proposed |
| clblast 1.5.1-0 (amd64)                 | stable-proposed |
| cln 1.3.6-0 (amd64)                     | stable-proposed |
| exempi 2.5.1-0 (amd64)                  | stable-proposed |
| folks 0.13.2-0 (amd64)                  | stable-proposed |
| fox 1.7.67-0 (amd64)                    | stable-proposed |
| fplll 5.3.2-0 (amd64)                   | stable-proposed |
| gdk-pixbuf 2.38.2-0 (amd64)             | stable-proposed |
| glib-networking 2.62.3-0 (amd64)        | stable-proposed |
| gloox 1.0.23-0 (amd64)                  | stable-proposed |
| gnupg 2.2.19-0 (amd64)                  | stable-proposed |
| gnutls 3.6.12-0 (amd64)                 | stable-proposed |
| goffice 0.10.46-0 (amd64)               | stable-proposed |
| google-chrome 80.0.3987.116-0 (amd64)   | stable-proposed |
| gsasl 1.8.1-0 (amd64)                   | stable-proposed |
| gsoap 2.8.98-0 (amd64)                  | stable-proposed |
| gssdp 1.2.2-0 (amd64)                   | stable-proposed |
| gupnp 1.2.2-0 (amd64)                   | stable-proposed |
| http-parser 2.9.3-0 (amd64)             | stable-proposed |
| ibus-hangul 1.5.3-0 (amd64)             | stable-proposed |
| ibus-table 1.9.25-0 (amd64)             | stable-proposed |
| krusader 2.7.2-0 (amd64)                | stable-proposed |
| ktorrent 5.1.2-0 (amd64)                | stable-proposed |
| ldns 1.7.1-0 (amd64)                    | stable-proposed |
| libabw 0.1.3-0 (amd64)                  | stable-proposed |
| libasr 1.0.4-0 (amd64)                  | stable-proposed |
| libcap-ng 0.7.10-0 (amd64)              | stable-proposed |
| libcdr 0.1.6-0 (amd64)                  | stable-proposed |
| libepoxy 1.5.4-0 (amd64)                | stable-proposed |
| libfdk-aac 2.0.1-0 (amd64)              | stable-proposed |
| libgcrypt-static 1.8.5-0 (amd64)        | stable-proposed |
| libgee 0.20.3-0 (amd64)                 | stable-proposed |
| libgovirt 0.3.7-0 (amd64)               | stable-proposed |
| libgpiod 1.4.2-0 (amd64)                | stable-proposed |
| libgusb 0.3.3-0 (amd64)                 | stable-proposed |
| libjpeg-turbo 2.0.4-0 (amd64)           | stable-proposed |
| liblangtag 0.6.3-0 (amd64)              | stable-proposed |
| libmicrohttpd 0.9.70-0 (amd64)          | stable-proposed |
| libmirage 3.2.4-0 (amd64)               | stable-proposed |
| libmtp 1.1.17-0 (amd64)                 | stable-proposed |
| libpcap 1.9.1-0 (amd64)                 | stable-proposed |
| libphonenumber 8.11.4-0 (amd64)         | stable-proposed |
| libpst 0.6.74-0 (amd64)                 | stable-proposed |
| libpwquality 1.4.2-0 (amd64)            | stable-proposed |
| libqmi 1.24.4-0 (amd64)                 | stable-proposed |
| librsvg 2.46.4-0 (amd64)                | stable-proposed |
| libshake 0.3.1-0 (amd64)                | stable-proposed |
| libsigrokdecode 0.5.3-0 (amd64)         | stable-proposed |
| libsmbios 2.4.3-0 (amd64)               | stable-proposed |
| libsolv 0.7.11-0 (amd64)                | stable-proposed |
| libsoup 2.68.3-0 (amd64)                | stable-proposed |
| libtorrent-rasterbar 1.2.4-0 (amd64)    | stable-proposed |
| libuv 1.34.2-0 (amd64)                  | stable-proposed |
| libvisio 0.1.7-0 (amd64)                | stable-proposed |
| linux-kernel-5.5.4 5.5.4-1 (amd64)      | stable-proposed |
| mbedtls 2.16.4-0 (amd64)                | stable-proposed |
| mesa 19.3.4-0 (amd64)                   | stable-proposed |
| mtdev 1.1.6-0 (amd64)                   | stable-proposed |
| netcdf 4.7.3-0 (amd64)                  | stable-proposed |
| ntl 11.4.3-0 (amd64)                    | stable-proposed |
| pango 1.44.7-0 (amd64)                  | stable-proposed |
| protobuf-c 1.3.3-0 (amd64)              | stable-proposed |
| snappy 1.1.8-0 (amd64)                  | stable-proposed |
| source-highlight 3.1.9-0 (amd64)        | stable-proposed |
| talloc 2.3.1-0 (amd64)                  | stable-proposed |
| tevent 0.10.2-0 (amd64)                 | stable-proposed |
| tpm2-tss 2.3.3-0 (amd64)                | stable-proposed |
| vte-gtk3 0.58.3-0 (amd64)               | stable-proposed |
| zfs 0.8.3-0 (amd64)                     | stable-proposed |
| zfs 0.8.3-1 (amd64)                     | stable-proposed |

----

— Mingcong Bai