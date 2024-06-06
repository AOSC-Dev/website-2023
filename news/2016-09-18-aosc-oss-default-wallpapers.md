---
categories:
  - news
date: '2016-09-18'
important: false
home: true
title: AOSC OS's Default Wallpapers
url: /news/2016/09/18/aosc-oss-default-wallpapers.html
---


With a vote during AOSCC 2016, we have chosen the wallpaper design from Yitong He, or [axionl](https://github.com/axionl) as the default wallpaper of AOSC OS with Core 4. This set of default wallpapers come in two times two equals... four variants:

### "Day"

![day](/assets/i/day.jpg)

### "Night"

![night](/assets/i/night.jpg)

Yes, we got it, some people are just not a big fan of texts all around their desktop background, so a "plain" variant with **absolutely** no text on them:

### "Day", with no text

![day-plain](/assets/i/day-plain.jpg)

### "Night", with no text

![night-plain](/assets/i/night-plain.jpg)

Dynamic wallpaper
-----------------

If you happen to be using GNOME, MATE, or Cinnamon as your desktop environment, you will get the extra "dynamic" feature of this wallpaper set:

- During day time (7:00 to 19:00), the "Day" variant is shown.
- During night time (19:00 to 7:00 the following day), the "Night" variant is shown.

Getting the wallpapers
----------------------

This set of wallpapers is now available for you to "build" with the "sources" [here](https://github.com/AOSC-Dev/aosc-os-artworks). You will need:

- GNU Make, so you can actually start building it.
- Inkscape, for generating PNG products from SVG "sources".

Simply `make` and `make install` and you are good to go.