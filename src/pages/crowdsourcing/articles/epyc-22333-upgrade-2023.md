---
title: '[COMPLETE] Upgrade Primary AMD64 Build Server (22333)'
draft: false
date: 2023-01-27
---

This page outlines the plans to upgrade our primary AMD64 build server (22333).

## Rationale

After over three years in service, our primary AMD64 build server started to exhibit performance issues (especially with Qemu-built ports, such as RISC-V and MIPS R6, which saturated our PorterAle emulated build host). Moreover, some of the parts on the server began to show excess wear (the Intel SSD 750 which hosts our scratch disk has a total write of over 350TiB, which is more than 100TiB over manufacturer’s specifications). 

These circumstances, in addition to the core count and RAM capacity limitations found with our current AM4/X570 platform, has led us to believe that our primary AMD64 build server can benefit from a platform upgrade. This upgrade aims to achieve the following:

- Higher build efficiency with a processor upgrade.
- Higher RAM capacity for a scratch-disk-on-RAM configuration.
- Replacing end-of-life components like the SSD.

## Budget

We would like to budget 17,000 CNY (2,506.12 USD as of January 27, 2023). The actual quote is 16612.99 CNY (2,449.07 as of January 27, 2023). We will refund the excess funds upon this crowdsourcing project’s completion.

+ Key platform components
    - Motherboard: 1 × Gigabyte MZ31-AR0
    - Processor: 1 × AMD EPYC 7R32 (48 cores, 96 threads)
    - RAM: 16 × Samsung M393A8K40B21-CTC0Q (64GiB, DDR4 2400MT/s, Registered ECC; total capacity 1TiB)
+ Storage
    - System and local repository mirror: 1 × Intel SSD 750 (1.2TB)
+ Accessories and peripherals
    - Cooling: 1 × Coolserver SP3 P42
    - Case, thermal paste, etc.

## Timeline

- Spring 2023: Crowdsourcing and purchase (Lain Yang). We will purchase the parts in the order as they are listed above, as funds become available. Donations collected in US Dollars will be wired to a Chinese account via Western Union.
- Summer 2023: Transportation to Mingcong Bai, the server host (Jiangjin Wang).

## Participants

- Lain Yang <fsf@live.com>, purchase coordinator.
- Jiangjin Wang <kaymw@aosc.io>, transportation coordinator.
- Mingcong Bai <jeffbai@aosc.io>, server host.
