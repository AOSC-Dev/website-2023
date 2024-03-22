---
categories:
  - news
date: '2017-06-29'
important: true
title: 'AOSA-2017-0044: Update Systemd'
url: /news/2017/06/29/aosa-2017-0044-update-systemd.html
---


Please update your `systemd` package to version `2.3.3-4`.

A security vulnerability was recently discovered in `systemd-resolved` (DNS resolve configuration daemon) that...

*Certain sizes passed to dns_packet_new can cause it to allocate a buffer that's too small. A page-aligned number - sizeof(DnsPacket) + sizeof(iphdr) + sizeof(udphdr) will do this - so, on x86 this will be a page-aligned number - 80. Eg, calling dns_packet_new with a size of 4016
on x86 will result in an allocation of 4096 bytes, but 108 bytes of this
are for the DnsPacket struct.*

*A malicious DNS server can exploit this by responding with a specially
crafted TCP payload to trick systemd-resolved in to allocating a buffer
that's too small, and subsequently write arbitrary data beyond the end
of it.*

This security vulnerability was assigned [CVE-2017-9445](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9445).

Relevant documentation:

- [Original oss-security Report](http://www.openwall.com/lists/oss-security/2017/06/27/8)