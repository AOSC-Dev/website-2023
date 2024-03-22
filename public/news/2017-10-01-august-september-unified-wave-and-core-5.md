---
categories:
  - news
date: '2017-10-01'
important: false
title: August-September Unified Wave and Core 5!
url: /news/2017/10/01/august-september-unified-wave-and-core-5.html
---


![core5-banner](/assets/i/news/core5-banner.jpg)

We are happy to report that the August-September Wave of updates are now made available for AMD64 users of AOSC OS - along with AOSC OS Core 5 component updates, eMMC is here!

--------

First of all, let's take a glance at the August-September Wave.

## Give AOSC OS a Scouring in ACID!

The majority of our work in these two months has been focused upon fixing broken packages (build-time) by ACID, an idea brought up by Lion Yang to spawn "clean", BuildKit containers and perform a coverage testing with our ABBS tree - putting Ciel to use.

As a result, hundreds of packages - old and new - were marked as broken. ~99% of them has been fixed now. Apart from the effects of fixing these tatty packages (that they should work better than before with less bugs), is the inspiration for us to further enhance the quality assurance modules and error handling of Autobuild3 - our automatic packaging toolkit.

## Delayed Updates for Ports

As noted from Mingcong Bai's last [update](https://aosc.io/news/2839-goings-on-a-quick-mid-september-update), we have failed to sync up package updates for our non-AMD64 AOSC OS ports: PowerPC 32/64-bit Big Endian, ARMv7, AArch64, and MIPS 32/64-bit. However...

- Core 5 is now available in their `testing` repositories (except MIPS 32/64-bit)
- All `bugfix` updates are made available (thus no security concerns as of yet).

We will continue to work on catching up with these ports.

--------

## eMMC...

Now, onto the exciting stuff, Core 5 "eMMC" is now made available to AOSC OS users as...

- Stable updates for AMD64.
- "Testing" updates for other ports, excluding MIPS 32/64-bit ports.

## What's Up?

As how major (+1.0) Core updates go for AOSC OS, Core 5 includes more extensive updates over the Core 4 series - of course, from the GNU C Library at the bottom, to your GNU Compiler Collection (GCC) - are all updated to the newest versions.

Though no new architectural port is brought to the table for this year, we have worked on improving, and fixing up system application and development experiences.

For example, our compiler/linker hardening spec files were included within Autobuild3 - while some packages, like Python and Qt, records build-time compiler/linker flags, which references to the spec file included within Autobuild3's installation directory - making developments using tools provided by these packages practically impossible without installing Autobuild3, which is absurd. In Core 5, we have moved these files to the `gcc` package, working around this potential issue.

AArch64 should also be able to run applications more reliably with latest fixes in GCC and Binutils - a lot of applications that used to exit with a Segmentation Fault should work properly now. Though by our observation this should be a gradual process.

## Overlays

As one of the major changes to be brought by Core 5, we are introducing the Overlays system to AMD64 users in the coming month or two.

The Overlays system provides binary packages optimised for newer processors - and in AMD64's case, processors with AVX2 instruction set support - to squeeze out extra performance potentially obtainable by enabling new instructional optimisation flags. For example, instruction-aware packages like GNU C Library, FFmpeg, Mesa, etc. should see observable performance gain than packages built with our standard compilation configurations - for example, all AMD64 packages are built with instruction set support up to SSE3.

Changes were required for Autobuild3 and `apt-gen-list` to make it work smoothly for our developers and users, respectively. Autobuild3 now includes "sub-architectural" support, for example, setting `$ARCH` to `amd64/haswell+` will enable configurations to build packages for the Haswell+ (AVX2) Overlay, while generating packages for the `amd64` architecture in general.

Then, the new implementation of `apt-gen-list` detects processor capability when generating APT repository configurations so that, say, users with their computer running Intel's 5th generation Core processors, when running `apt-gen-list -e "40-source"`, should result in an APT configuration using the [source repository](https://repo.aosc.io/) with the `haswell+` Overlay repository automatically enabled - so that they could take advantage of their processors newer instruction sets, thus higher application performance.

--------

## October and Beyond

October will be a good time to make up package updates left behind in the past two months due to our focus on ACID. Major desktop updates like GNOME 3.26, KDE Applications 16.08 will roll out by the end of October - along with many more applications and component updates to improve your experience with AOSC OS. What's more...

- A new desktop environment, the Deepin Desktop Environment, with assistant from our friends Zamir Sun and Felix Yan, will be made available as an additional choice to your desktop experience.
- Tarballs and ARM device images will be updated as well, and this time, using Ciel as a helper for building fully automated and reproducible system releases.
- Ciel will continue to scour for rusts and cruds in AOSC OS, and this time on a higher performance server kindly provided by Staph Zhang - this will become a regular, monthly procedure to ensure AOSC OS package quality and user experience.

-------

## Problems sir?

- Report any issue to our [Issues](https://github.com/AOSC-Dev/aosc-os-abbs/issues) page.

Or alternatively…

- Find us on the #aosc IRC channel, Telegram group information will be provided if requested on IRC.
- Send us an e-mail at [discussions@lists.aosc.io](mailto:discussions@lists.aosc.io).

--------

## More Details?

- Full changelog of this Wave of updates is available [here](https://github.com/AOSC-Dev/aosc-os/blob/master/changelogs/201708-201709-changelog.md).
- Full changelog of AOSC OS Core 5 is available [here](https://github.com/AOSC-Dev/aosc-os-core/releases/tag/v5.0.0%2B4).