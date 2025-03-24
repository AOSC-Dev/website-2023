---
categories:
  - advisories
title: "【已解决】近期 Linux 固件更新可能导致 AMD 显卡驱动故障"
date: 2025-01-23T16:44:00+08:00
important: true
---

![](/assets/news/amdgpu-fault-firmware-20250120.png)

根据用户报告，在近期更新 `firmware-nonfree` 软件包至 `20250120+debian20241210+1` 版本后，其联想 ThinkBook 14+ 锐龙版（2024，又称 ThinkBook 14 G6+ AHP）在插拔 USB-C 屏幕时出现了死机故障，并出现了类似如下的错误：

```
amdgpu 0000:64:00.0: [drm] *ERROR* dc_dmub_srv_log_diagnostic_data: DMCUB error - collecting diagnostic data
```

解决方案
---

如果您遇到了类似上述的问题，请更新系统并确保 `firmware-nonfree` 版本大于等于 `20250122+debian20241210+1`。

波及范围
---

该故障目前已知影响搭载 DCN 3.1.4 显示控制器核心、代号为 Phoenix 的 APU，对应的处理器和 APU 型号如下：

**AMD Radeon 740M**

- AMD Ryzen 3 7440U/8300G/8300GE/8440U
- AMD Ryzen 5 (PRO) 7540U/7545U
- AMD Ryzen 5 7540U/8500G/8500GE/8540U

**AMD Radeon 760M**

- AMD Ryzen 5 (PRO) 7640U/7640HS
- AMD Ryzen 5 7640H/8600G/8640U/8640HS/8645HS
- AMD Ryzen 5 PRO 8600GE

**AMD Radeon 780M**

- AMD Ryzen 7 7840H/8700G/8840U/8840HS/8845HS
- AMD Ryzen 7 (PRO) 7840U/7840HS/7940HS
- AMD Ryzen 9 7940H/8845HS/8845H
- AMD Ryzen 9 (PRO) 7940HS

**定制型号**

- AMD Ryzen Z1 APU

调查经过
---

经查，这是 AMD 在 2025 年 1 月 11 推送的 [DCMUB 3.1.4 固件更新](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/commit/amdgpu/dcn_3_1_4_dmcub.bin?id=b3049665a5d0e6b411d1b10f78986a72862ec703)（版本 0.0.249.0）导致的，该版固件被包含在我们推送的上述版本的 `firmware-nonfree` 更新中。数小时前，AMD 亦发现了相关问题并已[撤回此固件更新](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/commit/?id=0e16f416fa296f66c83187c2bfa2984ef0be47a0)，上游的报告反馈和调查修复过程可见此[上游工单](https://gitlab.freedesktop.org/drm/amd/-/issues/3913)。
