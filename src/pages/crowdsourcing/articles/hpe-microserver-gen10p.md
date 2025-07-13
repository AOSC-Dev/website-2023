---
title: '[COMPLETE] Upgrade Primary Repository Server'
date: 2021-06-05
---

This is a proposal to crowdsource an HPE (Hewlett Packard Enterprise) ProLiant MicroServer Gen10 Plus to host the community's primary repo and source code caching (for offline package building purposes) services.

## Rationale

Currently, the community's primary repository server is sponsored by xTom, but the storage space on that server is limited. Therefore, the community hopes to acquire a server with sufficient storage capacities to replace the current one. In addition, with the expanded storage capacities, the community also hopes to use this server for storing the source archives of packages, which would enable building packages offline. Finally, the current repository server is also slightly underpowered for the p-vector dependency scanner, and the community hopes to have this rectified. 

This proposal aims to acquire a server with sufficient storage capacities and performance to host the aforementioned services, while still keeping the total costs under control. The ProLiant MicroServer Gen10 Plus has just enough storage and memory capacity for these services, and with a proper CPU upgrade, will have enough compute capability to fulfill the needs of the p-vector dependency scanner.

## Budget

Update: The funds and additional hardware needed to complete this project have been fulfieed, thanks to everyone who contributed!

Sijie Bu, a community member, will provide the following moderately used hardware at discounted prices as his way of supporting this project:

+ HPE ProLiant MicroServer Gen10 Plus Base System (320 USD):
   - Originally equipped with an Xeon E-2224 processor and 16GB DDR4 ECC UDIMM, upgraded to 32GB (compatible but non-matching) memory.
   - Comes with the iLO Enablement Kit (HPE SKU # P13788-B21) installed.
   - Has some stickers on it, but could be removed if needed.
+ System drive kit (30 USD):
   - One (1) QNAP QM2-2S-220A Dual M.2 22110/2280 SATA SSD Expansion Card, with two M.2 SATA slots and integrated ASMedia SATA controller.
   - One (1) 250GB WD Blue SATA M.2 2280 SSD.
+ Data drives:
   - Two (2) Western Digital Ultrastar HC310 4TB hard drives, originally purchased as OEM/gray market drives (w/o warranty from WD) (215 USD total).
   - Two (2) Western Digital Ultrastar HC520 12TB hard drives, shucked from WD Black D10 external drives (125 USD total).

The following upgrades needs to be purchased at marked prices, but can be croudsourced as either a direct donation or funding support:

+ [Purchased as used] CPU:
  - Either an Xeon E-2234 or Xeon E-2236 will be required. However the final decision would rely on the progress of crowdsourcing.
  - Xeon E-2234: 230 USD.
  - [Selected] Xeon E-2236: 340 USD.
+ [Purchased as new] Secondary boot SSD (250 GB, optional):
  - Needed if redundant boot drive is required (desirable since the server will be hosted in a data center out of easy reach of community members).
  - WD Blue SATA M.2 2280: 44.99 USD.
  - [Selected] Samsung 860 EVO M.2 SATA: 44.99 USD.

(CPU prices are from eBay and SSD prices are from Amazon US, both pre-tax)

## FAQ

+ Why not buy new hardware (especially the hard drives)?
   - Giving the current market prices of hard drives, buying new ones (whether with warranty or not) are prohibitively costly.
   - Current (Jun 05 2021) prices for Ultrastar HC310 4TB (Amazon US Marketplace, gray market): 188.08 USD.
   - Current (Jun 05 2021) prices for WD Black D10 12T external HDD (Amazon US): 399.99 USD.
+ What are the conditions of the hardware?
   - The ProLiant MicroServer Gen10 Plus originally served as a home NAS since June 2020; and all the hard drives were originally used as data drives on this server. The WD SSD was originally used as an external drive, but did not see any use beside a few operating system transfers. So all of them are in moderately used condition and are all around one year old.
+ How are the prices derived?
   - Since all the hardware are still current-generation (within the respective HPE, QNAP, and Western Digital lineups) and relatively niche, there are no reliable used market reference prices.
   - Therefore, the final prices for the server and hard drives are approximated by halving the original pre-tax purchase prices.
   - The final prices for the boot drive kit (M.2 adapter and SSD) is only a reflection of the time that Sijie took to assemble the kit with the selected drives and a guarantee of them in working order.
   - The original purchase prices of the hardware are of the following:
      - HPE ProLiant MicroServer Gen10 Plus Xeon E-2224 16GB S100i (CDW): 703.99 USD.
      - HPE iLO Enablement Kit (CDW): 115.99 USD.
      - Silicon Power 16GB Hynix IC DDR4 2666MHz 2Rx8 ECC UDIMM (Amazon US): 92.99 USD.
      - Ultrastar HC310 4TB HDD (two different Newegg Marketplace sellers): 119.99 USD and 129.95 USD.
      - WD Black D10 12TB external HDDs (Amazon US): 223.99 USD each (two pieces).
      - QNAP QM2-2S-220A Dual M.2 22110/2280 SATA SSD Expansion Card (Amazon US): 99.00 USD.
      - WD Blue SATA 250GB M.2 2280 SSD (Newegg): 44.99 USD.
+ Why upgrade the CPU?
   - The Xeon E-2224 (4C4T) is still underpowered for the p-vector dependency scanner, but it is also the best CPU officially supported by HPE. Therefore, we need to install our own CPU upgrade for the purpose.

## Proposed Timeline

- [Completed] June 2021: Sijie finishes decommissioning the server and sanitizing the drives.
- [Completed] June-July 2021: Mingcong finishes purchasing and setting up the server.
- Summer 2021:
    - [Completed] Server configured and installed at the hosting provider.
    - [In progress] Workload moved to the new server.

## Participants

- Sijie Bu <sijie.bu@aosc.io>, hardware provider.
- Mingcong Bai <jeffbai@aosc.io>, purchase coordinator.
