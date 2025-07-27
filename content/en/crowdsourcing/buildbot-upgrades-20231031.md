---
title: '[COMPLETE] Build Server Upgrades'
draft: false
date: 2023-10-30
---

This crowdsourcing campaign aims to upgrade two of our build servers, "kp920" (AArch64, 24426) and "Stomatapoda" (LoongArch, 27863), to alleviate each of their performance constraints. 

- The scratch disk (buildroots) on kp920 was powered by a mechanical SAS drive, which significantly dragged out Ciel's intensive I/O operations - such as system upgrades and dependency installation. We would like to purchase a SAS SSD for this machine.
- On Stomatapoda, the 16-core Loongson 3C5000 chip was only paired with 32GiB of RAM, which is not sufficient for building some applications without eating deep into the swap space. For instance, building Mozilla Firefox 117.0.1 with LTO enabled required more than 80GiB of RAM. We would like to purchase 128GiB of RAM for this machine.

## Budget

- kp920.
    - 1 \* HGST Ultrastar SS200, 800GB: CNY 500.
- Stomatapoda.
    - 4 \* UniIC S2332GU3200ZG2, 32GiB, DDR4 Registered ECC @ 3200MT/s: CNY 700 * 4 = 2,800.

Totals: CNY 3,300.

## Timeline

Shortly after the completion of this crowdsourcing campaign:

- The HGST SSD will be purchased and shipped to kp920's host.
- The RAM modules will be procured through Loongson and installed by tomatapoda's host at Loongson Wuhan.

## Participants

- Lain Yang <fsf@live.com>, purchase and shipping coordinator.
