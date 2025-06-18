---
title: '[COMPLETE] Cold Storage HDD for Community Repository'
---

This crowdsourcing project aims to fund the purchase of two hard disk drives to expand the community repository's cold storage.

## Rationale

As AOSC OS's software package and system release updates increase in both frequency and volume, the demand for cold storage and backup capacity has grown significantly in more recent times. We are currently running out of space for cold storage (~8TiB) and is in urgent need for more storage capacity. The cold storage contains mostly backups for old system releases and packages can help us record changes in packages and systems for regression testing.

## Budget

According to our investigation of the current market, the Western Digital Ultrastar DC HC570 (22TB) has excellent price to capacity ratio (for our price analysis, see [this table](https://kdocs.cn/l/ckvFzk5MYxqc)). We therefore plan to purchase two hard drives of this model to build a RAID1 array (this configuration should be fine for single-site application, as we plan to investigate potential backup solutions). The drives are to be purchased through JD's first-party seller, as the price premium is reasonable (accounting for exactly the 13% VAT) and the drives purchased through this channel has relatively good warranty coverage.

Kexy Biscuit（柯晓宇）has offered to pay for the 13% VAT difference (we have therefore wrote this budget in accordance with the quote from the Taobao store "南京梵多电子科技", which is exactly JD's quote - 13% VAT). According to the current pricing (Feb. 5, 2025), the budget is as follows:

- 2 * Western Digital Ultrastar DC HC570: 2 * 2729 = CNY ¥5458.

## Timeline

- Early February, 2024: Parts purchase and shipment to Loongson (Wuhan).
- Early February, 2024: Drives to be hooked up to the hosting location's virtualised platform, going online for backups.

## Participants

- Kexy Biscuit（柯晓宇）<kexybiscuit@aosc.io>, purchase and shipping coordinator.
- Kaijian Ruan from Loongson (Wuhan), server host.
