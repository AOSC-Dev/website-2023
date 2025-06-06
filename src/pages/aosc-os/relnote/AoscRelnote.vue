b
<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行注记：2025 年 6 月" />
    <div class="p-6">
      <p>
        本次发布的安同 OS 系统安装介质包含自 2025 年 4 月以来的各类系统组件更新及安全修复。除常规更新外，本次的主要更新内容包括对预装软件的调整及安装盘大小的优化、新老硬件平台支持增强、引入安全修复和许多针对用户体验的细节修缮。本发行注记将简略介绍相关变化。
      </p><br />
      <p>
        本次发行亦带有针对安装体验的修复，本发行注记也将进行介绍。
      </p><br />
      <p>
        <b>请注意：如果您已安装安同 OS，本发行注记提到的修复及变化均已通过系统更新推送，您无需重装系统或额外安装任何软件包。</b>
      </p><br />
    </div>

    <category-second title="平台支持" id="platform-support" />
    <div class="p-6">
      <p>
        本次更新包含大量针对硬件平台支持的更新和修复，主要的更改如下：
      </p><br />
      <p>
        <b>主要支持更新</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>
            Linux 内核更新至 6.14.10，包含针对机械革命无界 14X 笔记本无法进入 S0ix 睡眠、REDMI Book Pro 14 2025 无线网卡不可用、数个 x86 及 Arm 平台的 Spectre-v2/Spectre-BHB（敏感信息泄漏）漏洞、龙芯笔记本睡眠后背光设置错误及较老的龙芯 3B6000/3C6000 系列处理器步进上部分 PCIe 设备协商速率错误的问题
          </li>
        </ul>
      </div>
      <p>
        <b>设备支持 — 通用</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>更新 NVIDIA 驱动至 575.57.08，可支持近期发布的 GeForce RTX 5060 及 5060Ti 显卡</li>
          <li>开启基于主板固件 (BIOS) 的基础显示支持，解决部分无显卡驱动支持的平台启动系统后无输出的问题</li>
          <li>修复 AMD Radeon RX 9000 系列显卡从 ACPI 睡眠 (S3) 唤醒后的偶发稳定性问题</li>
          <li>修复较新型号的惠普 LaserJet 系列打印机无法使用的问题</li>
          <li>修复博通 (Broadcom) 官方网卡驱动 (<code>broadcom-wl</code>) 无法安装的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持 — x86-64</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复 Intel Cascade Lake, Cooper Lake, Whiskey Lake V, Coffee Lake R, Comet Lake, Ice Lake, Tiger Lake 及 Rocket Lake 核心处理器上的 Spectre-v2（代号：Training Solo）敏感信息泄漏漏洞</li>
          <li>修复机械革命无界 14X 笔记本进入 S0ix 睡眠后立即唤醒并发热的问题</li>
          <li>修复 REDMI Book Pro 14 2025 上无线网络不可用的问题</li>
          <li>彻底修复 ThinkBook 14/16 G6+/G7+ 多个“锐龙版”型号在频繁调整屏幕亮度 (Fn-F5/F6) 或合盖睡眠时，设备可能意外断电或复位的问题：先前的修复方式只能在较大程度上缓解上述症状，目前该修复已迭代，经测试已完全解决问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持 — 龙架构</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复部分基于龙芯 3A5000/3A6000 的笔记本从 S3 睡眠唤醒时，屏幕背光亮度可能被复位为最低的问题</li>
          <li>规避较老步进的龙芯 3C6000 系列处理器 PCIe 桥未正确设置支持链路速率而导致部分设备（尤其是 AMD Radeon RX 400/500 系列及 RX 5000/7000 系列，即基于 GCN 4.0 及 RDNA 1.0/3.0 架构的显卡）性能和功能受限的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持 — AArch64</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复部分平台上的 Spectre-BHB 敏感信息泄漏漏洞</li>
        </ul>
      </div>
    </div>

    <category-second title="关键组件更新" id="component-updates" />
    <div class="p-6">
      <p> 本次系统发行更新包含许多组件更新，其中较为关键的更新及修复有： </p>
      <br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>安同 OS 核心包 (Core) 更新至 12.2.0，更新 GCC 至 14.3.0 并开启 systemd 动态用户支持</li>
          <li>小熊猫包管理 (oma) 更新至 1.17，包含全新磁盘占用分析器、磁盘将满警告、Zsh 补全等新特性</li>
          <li>Firefox 及 Thunderbird 更新至 139.0，包含超过 30 个漏洞修复（含 1 个严重漏洞及 9 个高危漏洞）</li>
          <li>修复 Coreutils、OpenVPN、Python 3 及 Samba 等组件中的数个安全漏洞（含数个高危漏洞）</li>
          <li>Linux 固件包 (linux-firmware) 更新至 20250425，包含对数款音频、图形、网络设备及 SoC 平台的支持增强，并修复 REDMI Book Pro 14 2025 上无线网络不可用的问题</li>
          <li>Intel 处理器微码更新至 20250512，修复代号为 "Training Solo" 的自训练 Spectre-v2（敏感信息泄漏）漏洞</li>
        </ul>
      </div>
    </div>

    <category-second title="功能修缮" id="bugfixes" />
    <div class="p-6">
      <p>
        除功能更新带来的修复外，我们还针对用户反馈的问题对部分系统功能中存在的问题进行了修复： </p
      ><br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复无法通过文件管理器 (Dolphin) 连接和挂载 Samba 共享的问题</li>
          <li>修复 Firefox 在使用内置标题栏（客户端窗口装饰）并最大化时，窗口标题栏可能超出屏幕显示范围的问题</li>
          <li>修复部分软件包中静态库未正确移除非必要信息（strip），导致部分软件大小异常增大的问题</li>
          <li>修复虚拟终端（KMSCON，在 TTY2+ 使用）在部分（尤其处理器单核性能较低且使用 > 1080p 或无显卡加速的）平台上输入延迟极高、屏幕刷新慢的问题</li>
          <li>修复虚拟终端（CJKTTY，在 TTY1 使用）在使用高 DPI 密度屏幕（如 4K 屏幕或较小的 1080p 屏幕等）时 CJK（中文、日文及韩文）字符显示错误的问题</li>
          <li>清理大量无用依赖并精简预装软件集</li>
        </ul>
      </div>
    </div>

    <category-second title="安装体验修缮" id="installation" />
    <div class="p-6">
      <p>
        本次更新还包含针对安装盘功能及安装体验的一系列修缮：
      </p><br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>新增在安装程序的分区界面中显示分区中现存操作系统的功能，避免意外格式化其他系统正在使用的分区</li>
          <li>修复命令行安装程序中部分界面元素对比度低下的问题</li>
          <li>修复启动安装盘后系统时钟 (RTC) 可能被意外调整的问题</li>
          <li>修复 APT 本地数据库缓存及 oma 历史数据库残留于安装盘的问题</li>
          <li>不再随龙架构安装盘附带 LATX（龙芯 x86 架构转译器）及 x86 运行时，大幅度缩减安装盘大小</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
