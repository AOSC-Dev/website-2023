---
categories:
  - news
date: '2017-01-07'
important: false
title: On AOSC OS Ports...
url: /news/2017/01/07/on-aosc-os-ports.html
---


Just figured that some may be curious of how AOSC OS ports are done, so this
particular transmission will be dedicated to this matter.

In case you haven't noticed yet (due to our puzzling download page), AOSC OS
currently has 7 architectural ports under active development:

- AMD64/x86_64, your usual Intel/AMD PCs and servers (`amd64`).
- ARM, for your boards, tablets, phones, servers alike.
  - ARMv7, 32-bit, hard-float, NEON (`armel`).
  - ARMv8, 64-bit, AArch64 (`arm64`).
- MIPS, mainly for Imagination Technologies and Loongson devices.
  - MIPS-II, 32-bit, o32 ABI (`mipsel`).
  - MIPS64, 64-bit, MIPS64r2 ABI (`mips64el`).
- PowerPC, mainly for consumer-oriented Apple and AmigaONE desktops and laptops.
  - PowerPC, 32-bit, big-endian (`powerpc`).
  - PowerPC, 64-bit, big-endian, AltiVec (`ppc64`).

And by AOSC OS design, these ports are all capable of running on mainline
kernels (well not yet for MIPS64el) and various desktop environments (while
some simply can't be built on some architecture yet, for example, Enlightenment
on PowerPC64 due to lack of LuaJIT support). But in most cases, all ports of
AOSC OS can be used with the same level of functionality, but with varying
performance outcomes. There are several reasons to this:

- Plain performance deviations, you can't just expect a 15 year old Apple G4 to
  perform as well as your modern Skylake desktop, can you?
- Optimization compromises, there are certain sacrifices we had to make for a
  port to be (generally) universal for some particular architectures, for
  example, we have given up AltiVec optimizations on our PowerPC 32-bit port,
  so that our port can be run on older PowerPC processors like the 603e, 604e,
  and the G3 (G4 is the first to come with AltiVec support).
- JIT, this is a painful one, and mostly reflecting on some lesser-known
  architectures - JIT generally requires assembly support, which are lacking
  for some architectures in some software projects, say, OpenJDK, which does not
  yet have (or simply won't have in the forseeable future) JIT/Hotspot support
  for MIPS32 and PowerPC 32-bit processors.

Onto the workflow then. There is a rule among AOSC OS developers that, "there
shall be no port before devices exists" - some Linux distributions (go figure)
has lots of architectural ports, but sometimes no device is available for some
architectures. While it's all fine and good as a technical references on these
ports (in fact, we have learned a lot from Fedora and Gentoo, thank you both),
we as a tiny development effort simply can't afford to start a virtual port -
or "theoretical" port, let's say - this is precisely the reason why we haven't
jumped on to porting AOSC OS to RISC-V yet, but when the first boards of that
architecture debut, we will crack on with it. But anyways, if there exists a
device availabled for us to purchase by one of our developers, a port will be
started. Junde Yhi, long time AOSC contributor started his first venture of
porting AOSC OS with his purchase of a Loongson 3A R2 (3A2000C) desktop of
MIPS64el (MIPS 64-bit, little-endian) architecture, and it's truly an
interesting (and perhaps unfortunately, quirky) machine.

![loongson-desktop](/assets/i/news/mips64-buildbot.jpg)

The porting starts without actually doing the build, but with making "specs" for
the particular port. As AOSC OS, there isn't much room for varied system
designs, the work mostly comes to the optimization parameters and configuration
for the toolchain (we use GNU's tools, of course). In the case of MIPS64el,
Yhi spent roughly two weeks reading Loongson's compiler and optimizations
specifications - not that we are making a Loongson port, but SGI's workstations
are just... too much. At the end of the reading, a series of optimization
parameters, or flags are collected and put in as a part of some Autobuild3
[updates](https://github.com/AOSC-Dev/autobuild3/compare/7271c3c26d9e3aca26454e1608d7acb2059be360...fbc87e53a1131e1e187b0716d54b79fe45c01de6).

![yhi-mips64-notes](/assets/i/news/mips64-yhi-notes.jpg)

The next step would be to start reading and build along with the guides at
[Linux From Scratch](http://www.linuxformscratch.org/). The only difference we
make here is to change the triple to ours (in the case of MIPS64el,
`mips64el-aosc-linux-gnu`), and incorporating package management (`dpkg` in our
case) as soon as we could. With package management in place, it's time to start
building the [Core](https://github.com/AOSC-Dev/aosc-os-core/) (from `master`
of course), and debug through issues, committing changes and incorporating them
into the next release. Then it just flows down the stream to our main
[tree](https://github.com/AOSC-Dev/aosc-os-abbs/), where terrible stuff like
"stage-two-ing" (stripping out features for bootstrapping, and re-incorporating
new features when dependencies are available) and you guess it, more bugs, will
be found. But with enough packages available and tested, a new port of AOSC OS
will be available from the [downloads](https://aosc.io/os-download/) page. This
process can take anywhere from weeks to months (our fastest growing ports yet
are the PowerPC 32/64-bit ports, thanks to a powerful PowerMac G5 Quad, taking
only 5 weeks to have the Base, MATE, and XFCE variants available), depending on
the difficulty and fluidity of the porters.

![mips64-workspace](/assets/i/news/mips64-workspace.jpg)

What's next then? Generally, maintaining and hoping for more. Maintaining ports
is a long enduring and often times tedious task. Given that our main port is
still the AMD64/x86_64 port, all new package updates will be built and tested
first on the AMD64 machines, pushed to the `staging` branch, and merged to the
`master` branch before pushing the new updates to the
[community repository](https://repo.aosc.io/). Then, the updates will be
organized into a task list and passed onto... usually me - owning machines from
most of the architectuers available, and having horribly strong patience (just
a boring personality, not praising myself by any means). Every week, ~500 new
package updates/fixes commits are committed to the `staging` branch, and ~200
of them will be available to non-AMD64 ports (some simply can't be built, some
being `noarch` data packages that do not need to be rebuilt). And yes, they take
around ~3 times more in time expense to build despite the smaller number of
tasks. And yes, these machines working together at the same time makes it a
great cure to the Wisconsin winter, and a great tool for my roommate Tianhao Chai
to heat his milk and such (package building for the ports generally happens in
the weekends, a "good" period of time in a week by our definition).

![chadbourne-residential-computing-center](/assets/i/news/ports-build-farm.jpg)

On the "hoping for more" part, we do accept device donations, and we (generally)
make guarantees on porting AOSC OS onto them. Icenowy Zheng, our ARM maintainer,
receives quite a quantity of devices from hardware manufactures due to her
exemplary work in "mainlining" (merging device supports and fixes into the
mainline Linux kernel) support for Allwinner (sunxi) devices - as you may have
seen multiple times on our news. I myself received a Nokia N900 phone from a
good friend of mine - knowing its potential and well maintainership by the
mainline kernel, I should be able to get AOSC OS running - and of course,
releasing images for it in a timely manner.

![nokia-n900](/assets/i/news/nokia-n900.jpg)

And that sums up how the ports happens, and happens to be in the context of
AOSC OS development. If you are interested in donating devices or maintaining
a new port for AOSC OS (that will be really could you know...), please do find
us over at the #aosc IRC channel.

— Mingcong Bai