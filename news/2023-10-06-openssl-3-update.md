---
categories:
  - warning
title: "OpenSSL 3 Update Now Available"
date: 2023-10-06T21:00:00+08:00
important: true
draft: false
---

After almost two months of rebuilding, tweaking, and updating, the OpenSSL 3 runtime update is now available in the stable repository. This update replaces the OpenSSL 1.1 runtime, which had [lost upstream support](https://www.openssl.org/blog/blog/2023/09/11/eol-111/).

Should you run into problems during the update, please [file an issue](https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=&projects=&template=bug-report.yml) or get in touch via our [community chat groups](https://aosc.io/contact/). To ensure compatibility with some older software packages, we will continue to ship an OpenSSL 1.1 compatibility runtime package (`openssl-1.1`). However, considering the potential security risks, we recommend that you update such software packages or get in touch with the distributors regarding OpenSSL 3 compatibility.

**Note: This wave of update is fairly large in volume, the system update may take a bit longer than usual. Moreover, considering that OpenSSL is a basic system runtime, should an accident occur during the update, it may render your system unusable. We therefore recommend that you plug in your laptops or other battery-powered devices to an AC power source and ensure steady power supply to avoid accidents.**

---

— Mingcong Bai 
