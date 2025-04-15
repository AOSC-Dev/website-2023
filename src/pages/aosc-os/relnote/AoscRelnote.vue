b
<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行注记：2025 年 4 月" />
    <div class="p-6">
      <p>
        本次发布的安同 OS 系统安装介质包含自 2025 年 2 月以来的各类系统组件更新及安全修复。除常规更新外，本次的主要更新内容包括新老硬件平台支持增强、引入安全修复和许多针对用户体验的细节修缮。本发行注记将简略介绍相关变化。
      </p><br />
      <p>
        本次发行亦带有大量针对安装体验的修复，本发行注记也将进行介绍。
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
            Linux 内核更新至 6.14.1，包含针对龙芯 3C6000/D 多路服务器、龙芯 3A5000/6000 + 7A2000 台式机与笔记本、瑞芯微 RK3588 等平台支持的改进，新增了对 AMD XDNA 控制器（AI Engine）、Intel Touch Host Controller 及 Thunderbolt 3 替代模式 (Alternative Mode) 等硬件或功能的支持，改善了龙架构平台对 AMD Radeon RX 9000 与 Intel DG1/DG2/Battlemage 系列显卡等支持
          </li>
          <li>
            更新 Mesa 至 25.0.3，大幅度改善 Intel DG1/DG2/Battlemage 系列显卡的性能，修复 AMD Radeon RX 9000 系列显卡无法从睡眠唤醒的问题
          </li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 通用</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复 Intel Battlemage 系列（如 Intel Arc B580）显卡在使用硬件视频加速播放本地视频时，视频播放器会立即崩溃的问题</li>
          <li>预装 <code>libva-intel-driver</code> 与 <code>libva-nvidia-driver</code>，分别改善 Intel Broadwell 或更早平台，以及 NVIDIA 显卡（搭配官方驱动）的视频播放体验</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — x86-64</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复联想 ThinkPad P14s Gen1 在睡眠后立即唤醒的问题</li>
          <li>修复联想 ThinkPad T470/T480/A485 上 TrackPooint（小红点）速度过慢的问题</li>
          <li>修复松下 Let's Note CF-SV2 在睡眠后插入 USB 设备（含 USB-C 充电器）后设备意外唤醒的问题</li>
          <li>修复华硕 XA441U 在启动后存储及网络性能低下，抑或时有发生无法连接无线网络及死机的问题</li>
          <li>修复新突思 (Synaptics) X11 输入驱动无法识别 HID 总线设备的问题，并以此修复部分松下笔记本电脑上触摸板面积设置不正确的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 龙架构</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>将内核支持的最大处理器数量提高到 256 个，理论上可支持双路龙芯 3C6000/Q 平台（共 256 个逻辑核心）</li>
          <li>修复双路 3C6000/D 服务器由于可编程 I/O 控制器数量设置不正确，导致其无法启动的问题</li>
          <li>修复在龙架构平台插入 AMD Radeon RX 9000 系列显卡后，系统无法启动及无法从 ACPI S3 睡眠唤醒的问题</li>
          <li>修复在华硕 XC-LS3A6M 等主板上 USB 设备（尤其是键盘和鼠标）随机丢失的问题</li>
          <li>修复攀升等品牌的 3A6000 笔记本触摸板灵敏度极低的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — AArch64</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>新增 Intel 显卡硬件编解码支持</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 龙芯三号 (MIPS)</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复 BM6J74 等主板无法使用独立显卡进入 X11 图形界面的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — RISC-V（64 位）</b>
      </p>
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复搭载 RVV 指令集扩展的 RISC-V 设备上运行部分应用程序时崩溃的问题</li>
        </ul>
      </div>
    </div>

    <category-second title="关键组件更新" id="component-updates" />
    <div class="p-6">
      <p> 本次系统发行更新包含许多组件更新，其中较为关键的更新及修复有： </p>
      <br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>安同 OS 核心包 (Core) 更新至 12.1.2，修复了 AArch64 及 Power（64 位，小端序）平台构建部分程序时的内部编译器错误 (Internal Compiler Error)，更新 Zstd、libxcrypt 及 Linux API 头文件等组建至同分支最新版本</li>
          <li>小熊猫包管理 (oma) 更新至 1.16，新增可选软件包依赖提示、软件包状态修复指引增强、阅读器功能增强和撤销功能 (<code>oma undo</code>) 新增安同 OS 测试源 (topics) 设置状态同步功能等特性与界面优化，亦有针对 <code>file:</code> 协议本地源的性能优化</li>
          <li>更新主题元数据正式投产，用户可在使用 oma 更新系统时查阅关键更新列表及详细备注，帮助用户更好地理解系统更新内容及重要性</li>
          <li>Firefox 及 Thunderbird 更新至 137.0.1，新增 HEVC (H.265) 视频硬件解码支持及数个高危漏洞修复</li>
          <li>KDE Plasma 桌面更新至 5.27.12，包含针对数个现存问题的修复</li>
          <li>翻修 32 位 x86 子系统，使其组件版本乃至维护质量与主仓库组件对齐，可提升在新平台上运行 32 位 x86 程序时的外设兼容性及性能</li>
          <li>龙芯 x86 架构转译器 (Loongson Architecture Translator for x86) 更新至 1.6.0，包含对数个使用场景的兼容性与性能改善</li>
          <li>Linux 固件包 (linux-firmware) 更新至 20250220，包含 AMD 及 Intel 显卡，Intel、高通 (Qualcomm)、瑞昱 (Realtek) 等厂商的无线网卡固件，以及各类外设驱动和安全平台（如 AMD SEV）所使用的固件更新</li>
          <li>X.Org Server 更新至 21.1.16，包含安全漏洞修复</li>
          <li>Intel 处理器微码更新至 20250211，包含安全漏洞修复</li>
        </ul>
      </div>
    </div>

    <category-second title="功能修复" id="bugfixes" />
    <div class="p-6">
      <p>
        除功能更新带来的修复外，我们还针对用户反馈的问题对部分系统功能中存在的问题进行了修复： </p
      ><br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>修复使用 <code>update-grub</code> 命令更新 GRUB 引导器菜单时误将安同 OS 安装盘识别为 macOS 的问题</li>
          <li>修复网络管理器 (NetworkManager) 无法连接到 L2TP VPN 的问题</li>
          <li>遵从上游建议，更换网络管理器 (NetworkManager) 的默认 DHCP 客户端为内置实现</li>
          <li>修复卸载 <code>ostree</code> 后，使用 <code>update-initramfs</code> 刷新初始化内存盘 (initramfs) 时报配置文件缺失错误的问题</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
