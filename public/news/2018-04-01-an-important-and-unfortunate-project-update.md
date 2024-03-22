---
categories:
  - news
date: '2018-04-01'
important: true
title: An Important (and Unfortunate) Project Update
url: /news/2018/04/01/an-important-and-unfortunate-project-update.html
---


Now that April is in full swing, we have some news that should be taken notice by our friends here in this community...

Recall the message sent out in a similar time last year:

----

*"Since 2014, our community repository has been growing in size due to our (essentially) permissive policy on keeping all old versions of all our packages.*

*"As we stand today, the repository is roughly 500GiB in size. This is abnormal even when considering all of our architectural ports, as Debian, the largest binary-based &ast;nix distribution requires just over 1TiB in size. This continuing growth in repository size has brought storage challenges to both our mirror hosts and our own repository server."*

----

Another year has passed since the announcement was made, and unfortunately, our repository size has again skyrocketed to the point that we can no longer maintain a reasonable way to keep them there. In order to make the system more future-proof and robust to accommodate all users with all bandwidth limitations as well as our rapid-growing repository size, we have to make the tough decision to remove it entirely from the Internet, and use the more robust Sneakernet in lieu of it.

The Sneakernet, backed up by the Anthon Optical Storage Center funded also in last year, would unlock the unprecedented experience of data transfer. If you are located within the US, the strong and robust Sneakernet would offer a maximum of 27.7 Mbps, improved to 57.9 Mbps in the upcoming month, at a cost of only USD 0.081/GiB - less than 1/10 of the price comparing to our closest competitor. If you are really in a deep budget, we also offer the lowest cost option of USD 0.044/GiB at a bandwidth of 3.97 Mbps. If you are unfortunately located outside of the US, a roaming charge would have to be applied to it, thus raising the cost slightly. The maximum bandwidth of 9.26 Mbps would come with a charge of 0.298/GiB, and the budget bandwidth of 1.98 Mbps would only come with a cost of USD 0.77/GiB - still cheaper than our closest competitor’s domestic rate.

However in order to use the next-generation of Sneakernet-based repository distribution system, you would also need some new hardware requirement. The baseline system requirement would include a Blu-Ray Disc drive, in which you may easily find at anywhere at a price of less than USD 75, and it would be a one-time purchase that you can also use it with your Blu-ray HD Movies.

In favor of the new Sneakernet-based repository, the legacy Internet-based repository would run for another month to allow a smooth transition for our users, and become part of the archive offered by the Anthon Optical Storage Center followed by its official closure date of 20180501T0000Z. While we appreciate the development and support of the Internet over the whole course of the AOSC, there are things we had to give up for others to work better, and unfortunately an Internet-based repository is one that has to go…

----

Now, if you would like to purchase a subscription of our software repository and many additions that will enhance your software installation/update experience - you could do so [here](https://aosc.hanfucw.com/repo/).

Thank you for your continued support for our community and many of its projects.

----

— Anthon Operation: Sneakernet Committee Chair Staph. O. aureus