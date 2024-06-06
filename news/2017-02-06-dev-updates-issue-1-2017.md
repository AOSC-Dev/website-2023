---
categories:
  - news
date: '2017-02-06'
important: false
title: 'Dev. Updates (Issue #1, 2017)'
url: /news/2017/02/06/dev-updates-issue-1-2017.html
---


Here's a quick introduction to a new series of posts regarding AOSC OS development updates over a period of time (per one to two months) - a brief description about what we have done while nothing was posted on the Portal, and a look into the next period of time - what would we do, and what could you expect from us.

What happened?
--------------

January is a month when most of our developers took a break from busy school work (winter break, whee), and the month when time allows for major changes to AOSC OS. In the past month, we have updated some major components of AOSC OS, including Python 3.6, OpenMPI 2.0, and Boost 1.63. All of these changes will definitely improve performance, and making work easier for developers using AOSC OS. Do keep in mind that these update required an extensive amount of rebuild due to ABI/API incompatibilities introduced with new versions of these components - do expect hundreds to thousands of package updates, and (unfortunately) some bugs introduced by our oversight. If you did happen to bump into a friendly (or not so friendly) bug, do report it to [us](https://github.com/AOSC-Dev/aosc-os-abbs/issues/).

Progress was also made on the MIPS64 front, for which we have finished building a base system - it's ready to boot with full Systemd - when a Kernel is ready for Junde Yhi's Loongson 3A. But given time constraints in recent weeks, we could not guarantee a released tarball until summer break time (June, or July).

What you could expect before Issue #2
-------------------------------------

In the coming month, we will push out a new series of tarballs (system releases) for the spring, which of course, will include the newest packages we could offer for each of our AOSC OS ports. Also, we will make another attempt on pushing out Live system releases with a functional and graphical installation program.

On the question of ports, we are now armed with a bare-metal RISC-V rv32i toolchain, once we get our hands on a device, we should be able to start a new port (8th!) for AOSC OS - if not, we might have to start with RISC-V's official ISA emulator, [Spike](https://riscv.org/software-tools/risc-v-isa-simulator/).

[WSAOSC](https://github.com/AOSC-Dev/WSAOSC) (Windows Subsystem for AOSC OS) will also start a complete rewrite, led by [Yi Rong](https://github.com/LER0ever), the original creator of the old installer written in Go language. More details will be posted when development restarts.

---------------------------------------

And that's all for this issue of Dev. Update for AOSC OS, we will see you around in a bit. If you want to get in touch with us, please join our IRC channel at #aosc on irc.freenode.net.