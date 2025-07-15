---
title: '[COMPLETE] New Repository Server in Hong Kong'
draft: false
date: 2024-05-05
---

To improve reliability and access performance for our repository server, we plan to deploy a new repository server at [Aperture Internet Laboratory](https://apernet.io/)'s Hong Kong location. The new server will:

- Be built upon an [ASUS RS700A-E9-RS12V2](https://servers.asus.com/products/Servers/Rack-Servers/RS700A-E9-RS12V2) based on AMD's EPYC 7002 platform.
- Provide much higher computational (AMD Zen2 versus Skylake) and storage performance (NVMe SSDs versus SATA HDDs).

## Budget

We would need to purchase the following, in addition to the supplied/sponsored components listed in the sections below, in order to deploy this new repository server:

- Processors: 2 * AMD EPYC 7282 (16 cores, 32 threads @ 2.8 - 3.2GHz) - CNY ¥460 * 2 = ¥920
- Power Supply: AcBel R1CA2801A @ 800W - CNY ¥220
- Network Interface: Mellanox ConnectX-4 MCX4421A-ACQN (OCP 2.0) @ 25GbE - CNY ¥180
- Cables: 2 * OCuLink to SFF-8611 cables - CNY ¥75 * 2 = 150

Totals: CNY ¥1,470

Note: The purchase coordinator will purchase the parts in advance for testing - this crowdsourcing will reimburse his expenses.

### Sponsored Components

The following will be supplied by Apernet Internet Laboratory.

- Chassis: ASUS RS700A-E9-RS12V2 server chassis (1U)
- RAM: 16 * 16GiB DDR4 modules @ 2133MT/s
- Boot Media: 2 * SATA SSDs

### From Contributors

Contributors will supply the following:

- Main Storage: 2 * Western Digital SN640 @ 7.68TB

## Timeline

We plan to deploy this new repository server in May, 2024.

## Participants

- Miao Wang <shankerwangmiao@aosc.io>, purchase coordinator and deployment testing.
- Aperture Internet Laboratory, host.
