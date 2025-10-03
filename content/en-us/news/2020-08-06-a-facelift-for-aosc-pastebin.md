---
categories:
  - news
title: A Facelift for AOSC Pastebin
date: '2020-08-06'
important: false
---

The AOSC Pastebin has recently gone through a facelift.

The new pastebin is a proxy to our old pastebin service, with a completely redesigned
UI that more closely resembles our main website, and uses no JavaScript in
order to improve compatibility, accessibility, and speed.

Our new pastebin is now online, accessible at https://paste.aosc.io .

Any Compatibility Issue?
-------------------------
Currently most basic functions are fully supported by the new
pastebin website. This includes basic pasting, setting title, deactivating, and setting
expiration time.

However, a few non-essential functions are left off. This includes:
- Multiple attachments: one attachment should be sufficient. If not, you can always tar/zip them.
- Syntax highlighting: This was accomplished in JavaScript, so it is not implemented now.
- Password: It is slightly more complex. We need more time to implement it.

Future updates regarding which functions are getting implemented or left off would be updated on the new pastebin's [about page](https://paste.aosc.io/about.html).

How About Our Old Pastebin? 
---------------------------

For those of you who still miss the good'ol pastebin (which is now serving as the backend of our
new pastebin), either because you need a function that is not offered in the new pastebin
as indicated above, or you can't give up the convenience offered by JavaScript,
such as the eyecandies and the syntax highlighting, or because you just have too much
computational power to waste (Hey you are blessed!)... Please beware that
our old pastebin is still running on https://pastebin.aosc.io . A link is also offered
at the bottom of each paste on the new pastebin, allowing you to view them on the old
pastebin with JavaScript highlighting and more.

Hey, I've Got a Question!
----------

If you have any further questions or feature requests, please [contact us](https://github.com/AOSC-Dev/aosc-portal-kiss.github.io/issues)!

Enjoy Pasting the AOSC way!

----

— _S. aureus_
