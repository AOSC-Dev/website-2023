b
<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行注记：2025 年 1 月" />
    <div class="p-6">
      <p>
        本次发布的安同 OS 系统安装介质包含自 2024 年 9 月以来的各类系统组件更新及安全修复。除常规更新外，本次的主要更新内容包括新老硬件平台支持增强、引入安全修复和许多针对用户体验的细节修缮。本发行注记将简略介绍相关变化。
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
      <p>本次更新包含大量针对硬件平台支持的更新和修复，主要的更改如下：</p><br />
      <p>
        <b>主要支持更新</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>Linux 内核更新至 6.13，增强 AMD Zen 5、Intel Lunar Lake、龙芯 3C6000 及龙芯 3A4000/3B4000 等新老平台的支持，并修复了 AMD GCN 1.0 核心显卡无法硬件解码部分视频的问题</li>
          <li>为龙架构版系统预装 LoongGPU LG100 系列显卡 (7A2000) 的<a href="https://www.loongnix.cn/zh/graph/loonggpu/">官方驱动</a>，可大幅度改善小主机 (NUC) 及无独立显卡设备用户的使用体验</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 通用</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>修复部分设备通过 USB 启动安装盘时可能掉盘并导致启动失败的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — x86-64</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li><b>（2025 年 1 月修订版）</b>修复兆芯开先 KX-7000 系列平台设备无法启动系统的问题</li>
          <li><b>（2025 年 1 月修订版）</b>修复联想小新 Pro 13（2019，锐龙版）在睡眠唤醒时短暂花屏的问题</li>
          <li>默认关闭 AMD 自适应背光管理 (Adaptive Backlight Management) 功能以避免部分设备亮度不稳定或屏幕闪烁的问题</li>
          <li>修复联想 ThinkBook 14+ 2024 AI 元启锐龙版无法使用触摸板的问题</li>
          <li>修复联想 ThinkBook 13X G4 (IMH)、ThinkBook 14 G6 (ABP)、ThinkBook 16p G4 (21J8)、ThinkBook 16p G8 (IRL) 及 ThinkBook 16p G7+ (ASP) 等设备上键盘状态 LED 无法使用的问题</li>
          <li>修复华硕 Vivobook S 2024 OLED 无法使用触摸板及媒体快捷键的问题</li>
          <li>修复小米 Xiaomi Book Pro 14 2022 无法使用麦克风的问题</li>
          <li>修复惠普暗影精灵 8（2022 款）负载高时功耗异常受限，影响性能释放的问题</li>
          <li>修复微软 Surface Pro 5 无法使用摄像头、无法睡眠及无法使用集成指纹感应器的问题</li>
          <li>修复苹果 MacBook Pro 15''（2010 年中）无法显示引导菜单及开机后无线网卡无法使用的问题</li>
          <li>修复联想 ThinkPad X201/X201s 在开启 Intel VT-d 虚拟化特性后系统性能低且时有死机复位的问题</li>
          <li>修复联想 ThinkPad X200/X201 及 X200s/X201s TrackPoint（小红点）加速过快的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 龙架构</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>修复部分龙架构主板在开机后热插拔 3.5mm 设备时，音频设备配置未正确刷新的问题</li>
          <li>修复龙架构平台在睡眠后无法使用键盘唤醒及唤醒后有几率黑屏死机的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — AArch64</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>新增飞腾腾锐 D2000 部分主板的板载网卡支持</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 龙芯三号 (MIPS)</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>引入固定定时器 (Constant Timer) 支持，修复 3B4000 双路平台上内核时钟不稳定且日志顺序错乱的问题</li>
          <li>引入龙芯三号 (MIPS) 平台温控及风扇调速支持</li>
          <li>将来自 GRUB 2.02 的 <code>mips64-efi</code> 平台支持补丁移植至 GRUB 主线，支持最新的文件系统特性和外设，并修复了长期存在的内存分配问题，可支持更大的内核镜像与初始化内存盘</li>
          <li>针对性优化 dracut 初始化内存盘生成工具逻辑，提高与部分早期 PMON/LEFI 固件的兼容性（此类固件在引导阶段时可用内存容量有限）</li>
          <li>默认禁用 7A1000 内置显卡的 DRM 显示支持，以修复部分 3B4000 主板无法启动的问题</li>
        </ul>
      </div>
      <p>
        <b>设备支持修复 — 网络设备</b>
      </p>
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>修复部分联发科 (MediaTek) 无线网卡内置蓝牙无法使用的问题</li>
          <li>修复部分博通 (Broadcom) 无线网卡（brcmfmac 驱动，具体型号请见<a href="https://wireless.docs.kernel.org/en/latest/en/users/drivers/brcm80211.html#brcmfmac">此列表</a>）有几率无法连接无线网的问题</li>
          <li>修复部分平台上瑞昱 (Realtek) RTL8852BE 可能无法使用的问题</li>
        </ul>
      </div>
    </div>

    <category-second title="关键组件更新" id="component-updates" />
    <div class="p-6">
      <p>
        本次系统发行更新包含许多组件更新，其中较为关键的更新及修复有：
      </p><br />
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>更新安同 OS 核心包 (Core) 至第 12 版，包含 glibc 2.40 和 GCC 14.2 等运行时和工具链更新，并引入了多微架构优化库 (HWCAPS 子目录）支持：HWCAPS 子目录允许系统安装为同一种处理器架构中不同微架构等级优化过的运行库，因此系统将在程序加载时自动调用最优的运行库</li>
          <li>小熊猫包管理 (oma) 更新至 1.13，包含命令反查、APT 刷新后脚本、PPA 支持、关键系统组件保护和更新元数据等特性</li>
          <li>加入了图形化 .deb 软件包安装向导，安装软件包更便利</li>
          <li>修复 CUPS 系列组件及 rsync 中的数个高危漏洞</li>
          <li>Firefox 浏览器更新至 134，修复 MIPS 架构支持</li>
          <li>FFmpeg 更新至 7.1，大幅度增强多媒体编解码特性并改善 Intel Xe/DG1/DG2 显卡的视频编解码支持</li>
          <li>Mesa 图形库更新至 24.3.4，大幅度改善 Intel Xe/DG1/DG2 的桌面性能</li>
          <li>QEMU 虚拟机及模拟器更新至 9.2.0，改善多个平台支持并增强虚拟化功能（如龙架构支持的处理器处理器数量提升至 256 个）</li>
          <li>引入针对 OpenJDK 8/17/21/23 的 2025 年 1 月安全更新</li>
          <li>重构一系列软件包并加入 Spiral 标记，改善数个 Debian/Ubuntu 商业软件包的兼容性</li>
          <li>向 hwdata 提交信息，补全了大量设备的 PCI 及 USB 产品名信息</li>
          <li>加入来自“流浪相机 2024”计划的新壁纸并更新默认壁纸</li>
        </ul>
      </div>
    </div>

    <category-second title="功能修复" id="bugfixes" />
    <div class="p-6">
      <p>
        除功能更新带来的修复外，我们还针对用户反馈的问题对部分系统功能中存在的问题进行了修复：
      </p><br />
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li>修复输入法候选词中无法显示 emoji 的问题</li>
          <li>修复自带视频播放器 (Haruna) 未默认启用视频硬件解码的问题，视频播放更流畅、处理器占用更低</li>
          <li>新增 deepin/UOS 及开放麒麟使用的 <code>/opt/apps</code> 应用安装路径下的应用快捷方式探测支持</li>
          <li>修复使用 TrackPoint（如 ThinkPad 小红点）时，登录前后光标速度不一致的问题</li>
          <li>修复 Plymouth 启动画面管理器在启动时重复输出内核及 systemd 日志，导致实时调试困难的问题</li>
          <li>修复使用 SATA 接口 SSD 时未正确设置 I/O 调度器为 <code>none</code> 的问题</li>
          <li>修复 <code>os-prober(1)</code> 工具可能无法正确探测其他系统的问题</li>
        </ul>
      </div>
    </div>

    <category-second title="安装体验" id="installation-media" />
    <div class="p-6">
      <p>
        本次发行更新包含的安装盘亦包含许多修复与改进，具体有：
      </p><br />
      <div class="pt-2 pb-4 px-12">
        <ul class="list-disc">
          <li><b>（2025 年 1 月修订版）</b>修复龙芯三号 (MIPS) 平台无法使用安装程序“自动分区”功能的问题</li>
          <li><b>（2025 年 1 月修订版）</b>修复龙架构及龙芯三号 (MIPS) 平台安装程序错误将安装盘列为目标存储设备的问题</li>
          <li>改进下拉菜单操作逻辑，安装可在仅使用键盘的情况下完成</li>
          <li>修复安装时未禁止使用系统预留用户名的问题</li>
          <li>修复系统安装后未正确探测设备上其他操作系统的问题</li>
          <li>修复安装过程中屏幕可能熄灭，导致用户不安的问题</li>
          <li>新增安装程序日志记录功能</li>
          <li>新增多语言启动菜单支持</li>
          <li>新增使用 LEFI 固件的龙芯三号 (MIPS) 3A4000/3B4000 平台安装支持</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
./components/Header.vue
