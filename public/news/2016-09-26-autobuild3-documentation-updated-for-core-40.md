---
categories:
  - news
date: '2016-09-26'
important: false
title: Autobuild3 Documentation Updated for Core 4.0+
url: /news/2016/09/26/autobuild3-documentation-updated-for-core-40.html
---


The *"AOSC Cadet Training"* - a handbook for new AOSC OS packagers - has been updated by Mingcong Bai with information about new configuration options, changes, and syntactic sugar (and of course, those deprecated with the update), here below is a quick re-cap of what's changed:

- `autobuild/defines` has received some new configuration options:
  - `AB_FLAGS_O3` for switching between `-O2` and `-O3` optimization level;
  - `AB_FLAGS_SPECS` for toggling the use of compiler/linker hardening specs on/off;
  - LTO is now enabled by default on `amd64/x86_64`;
- `autobuild/pax` specifies post-installation operations to mark executables/libraries/directories for PaX/Grsecurity compatibility;
- Autobuild3 now processes architecture-aware patches contained in `autobuild/patches/` with architectural suffixes;
- The old `perl_local` Autobuild3 filter is now renamed as `perl`, which additionally purges all `.packlist` files in the packaging root;

For more detailed information, get yourself ready for the updated *["AOSC Cadet Training"](https://github.com/AOSC-Dev/aosc-os-abbs/wiki)*!

For those who had finished reading this handbook, here below are the pages changed with this update:

- [Autobuild3](https://github.com/AOSC-Dev/aosc-os-abbs/wiki/Autobuild3).
- [Autobuild3 Filters/File Manipulators](https://github.com/AOSC-Dev/aosc-os-abbs/wiki/Autobuild3-Filters).