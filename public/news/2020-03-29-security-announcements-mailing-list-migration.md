---
categories:
  - news
date: '2020-03-29'
important: true
title: Security Announcements Mailing List Migration
url: /news/2020/03/29/security-announcements-mailing-list-migration.html
---


Due to technical difficulties that we have encountered, we have decided to migrate the security advisories to a new mailing list: security-announcements@lists.aosc.io. The migration will happen anywhere within the next week. We are still figuring out how to best handle the subscribers and the archives. In the worst case, though, history might not be able to be migrated, and in that case, the old list will be preserved only for archival purposes.


Background
----------

Last week we experienced rejections when attempting to post security advisories to our current mailing list, security@lists.aosc.io, and we have not been able to resolve this problem despite having attempted methods including temporarily bypassing inbound spam filtering, and reviewing various configuration files. Since almost no manual configuration change was conducted after the list went operational in 2018, it was more likely that a change in the underlying software (Sympa) broke our configuration. In the process, we also discovered that as per RFC 2142, "security" is a reserved mailbox that is meant to go to the site administrator, therefore I also advised to re-create the list under a different name. After some short discussions in the Telegram chat group over the weekend, it was settled to use the name "security-announcements" for the new mailing list.

Resolution
----------

The mailing list server will be taken down for a few hours next week to perform the necessary operations. We are currently still researching the best approach towards this upcoming migration. Ideally, it would be possible to directly migrate both the current subscribers and archives to the new list. However, if this is not possible, the subscribers would need to be imported manually, and the old mailing list might have to be kept (but in a disabled state) for archival purposes. Subscribers might also get confirmation emails from the new mailing list to confirm their subscriber status. After the migration, inbound spam filtering will also be re-activated.

As the exact downtime slot is not settled yet, a separate email and Telegram announcement will go out on the day that the mailing list server will taken down for this migration. Users that expect themselves to be impacted should either subscribe to "announcements@lists.aosc.io" mailing list, or pay attention to related announcements in the community's Telegram group. Thank you for your understanding.

---

— Tom Bu