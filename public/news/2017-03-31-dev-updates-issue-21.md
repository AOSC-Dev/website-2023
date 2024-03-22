---
categories:
  - community
date: '2017-03-31'
important: false
title: 'Dev. Updates Issue #2.1'
url: /news/2017/03/31/dev-updates-issue-21.html
---


**We screwed up a bit with the timing for this Dev. Update (LOL), the whole article below was intended for April Fools, and only for a laugh... Don't panic.**

---------------------------------------

We know we've just released an issue of development update, but there was just too much going on in the past week that we feel obliged to tell you about them. There has been major changes in our community, and especially with AOSC OS.

So what happened with AOSC OS?
---------------------------------------

### A new port!

As users of modern technologies, we often times find ourselves looking back at our older devices and computers and thought, why not put AOSC OS on them and make them useful again? This exact thought has led to our PowerPC 32-bit port which runs on Apple Macintoshes with G3 processors - many of which more than 17 years old now. So here's what we did: We started a port to the Intel i486 architecture (and of course it runs on any newer Intel x86 compatible devices as a 32-bit system).

You may be pleasantly surprised on how fast your 486DX4, Pentium, and Pentium II are when running AOSC OS. They all run XFCE4 just fine, with at least an ISA/VLB graphics card, you will be able to run it with desktop composition turned on (fancy shadows and all that jazz...).

If we take a look at this screenshot of AOSC OS running on a Pentium 4 laptop (and of course, AOSC OS is blazing fast on it)...

![pentium4-aosc-os](/assets/i/news/april-fools-2017.png)

You may have noticed a website running with no window decoration or any form of toolbars, and a system property window from Windows Me (?!). Well, as most of our developers have experienced Microsoft Windows 98, a great operating system (albeit not free and open source, nor did it Respect Our Freedom™), we admired the idea of having a web page displayed right at the desktop so you could get to know the newest information online without relying on the complicated Conky...

As for the system properties window, we have worked alongside some old dudes from the Windows Development Team to better integrate older Windows applications with AOSC OS. The integration was so great and complete that even these core Windows components could run and correctly identify themselves! Great huh? Be happy for us.

### A Removed port...

So far AOSC OS has been ported to various kinds of CPU architectures, but we have not enough people to maintain them. After extensive discussions, we plan to sell all our AMD64 devices in favour of a POWER8-based build farm - and thus deprecating support of AMD64 by the end of 2017. Instead, PPC64el and RV64g will be mainly supported.

For those of you who uses AOSC OS on their AMD64 devices, please migrate to any other architectures we still support. There are things we had to give up for others to work better, and unfortunately AMD64 is one that has to go...

New departments established in AOSC
---------------------------------------------

To better serve our community members, and to aid our development effort, we have decided to create the following community-run departments in... our community:

- The Department of Justice for Developers Suffering From Pakreq Bombing
- The Department of Shocking News
- The Department on Attack of Fake News
- The Department of News and Social Media Synchronization
- The Department of Flying Toasters Observation and Preservation
- The Department of Editor Religious Management and Diplomatics

On this note, we should all applaud for The Department of Shocking News, for their great efficiency in service since their establishment on yesterday. Richard Fortsworth Saltenfishery have produced a report on the heavy usage of unclosed parentheses in their chat history on the #aosc channel, and produced a lengthy paper titled "Shocking! And Here's the Reason Why AOSC Members Are Using Unclosed Parentheses in their Conversations...", and literally, the title is all that the paper contains, so you didn't miss anything here.

Anthropoid Observational Study Center
-------------------------------------

(Here below is a public service announcement from our community member Staph Zhang...)

We are proud to announce that a new research center on anthropoids including great ape and human, is established with recent funding from n.s.f.

### About AOSC

The Anthropoid Observational Study Center advances science and health by providing access to data obtained from observation of anthropoids. Proudly supported by and fully integrated with the AOSC OS, we are the world's first observational study center that use computational resources to observe and obtain data from anthropoids, especially those with some fundamental knowledge of programming and Internet browsing.

### AOSC and You

As our valuable research participants, we welcome your input through using of our AOSC OS. As our valuable researchers, we also welcome you to use our AOSC OS to empower your researches through the use of the following software packages available:

- NCBI ngs - Facilitates the use of Next-Generation Sequencing equipments that enables us to conduct Whole Genome Sequencing with reasonable cost.
- NCBI blast - Provided basic alignment functionalities between nucleotides and polypeptides.
- FlightGear Flight Simulator: For better observation on behavior changes of airborne anthropoids.
- Vim, Emacs, Nano, and Ed: Good tool to enable the anthropoids with ability to do programming to actually write programs.
- Clang: User-friendly compiler with extended grammatical check ability to help anthropoids to learn programming.

### Legal Information

This research has obtained prior approval through the Institutional Review Board of the Anthon Open Science Committee.

AOSC Groceries and Pub!
-----------------------------

To help our developers through their long days of packaging, localization, infrastructure, and chatting workloads, we have set up an online service for purchasing snacks and drinks - exclusively for our developers and contributors. Here below is a quick look at our menu:

- Staphylococcus Aureus Chaw-Fun (4.99 Lunch/7.99 Dinner)
- Combustible Jelly Bowl (0.99 Lunch/0.02 Dinner)
- Willow Fish Soup (7.99 Lunch/12.99 Dinner)

Developers and contributors rejoice, and enjoy your meals!