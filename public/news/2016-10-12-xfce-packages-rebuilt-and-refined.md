---
categories:
  - news
date: '2016-10-12'
important: false
title: Xfce Packages Rebuilt and Refined
url: /news/2016/10/12/xfce-packages-rebuilt-and-refined.html
---


Xfce, as an agile and lightweight desktop environment favoured by many, did not receive a sufficient amount of care from us - so we thought we'd rebuild all Xfce packages, fix them up, and make it all shiny again.

Not much have changed on the appearance side except for the default wallpaper is now set to be one of AOSC OS's wallpaper, as shown below:

![xfce-rebuilt-1](/assets/i/news/xfce-rebuilt-1.jpg)
(Xfce desktop and desktop context menu)

![xfce-rebuilt-2](/assets/i/news/xfce-rebuilt-2.jpg)
(Xfce desktop showing off some windows)

However, under the hood, Xfce is now built with newly defined compiler and linker flags so that:

- The whole desktop is now hardened.
- On AMD64/x86_64, Xfce is built with Link Time Optimization enabled.

You may now grab updates from our [community repository](https://repo.aosc.io/).