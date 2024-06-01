<script setup>
import { reactive } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行说明：2023 年 10 月" />
    <div class="p-6">
      <p>近日，我们发布了新一批 AOSC OS 系统发行，包含一年以来的系统组件更新，在引入更新和修复系统中存在的问题的同时，还改善了硬件支持。</p><br />
    </div>
    
    <category-second title="新特性与更改" id="features" />
    <div class="p-6">
      <p>
        本次发行更新囊括许多新特性和使用体验改进，其中最为明显的是新增了社区开发的<a class="text-link" href="/oma">小熊猫包管理 (oma)</a>，让系统组件的管理更方便可靠。此外，我们还更新了内核、图形栈、音频栈等关键硬件支持组件，确保在新硬件上的使用体验。
      </p><br />
      <p>
        我们也对系统各关键组件进行了修缮和更新，主要的几项有：
      </p><br />
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li>更新 Linux 内核至 6.4 分支，同时提供 6.1 长期支持分支，确保新硬件上的系统体验；另有引入一系列针对 Microsoft Surface、华为擎云 W510 和飞腾 D2000/8 系列设备的补丁，改善这些设备上的开箱使用体验</li>
          <li>Core 更新至 11.0.1，包含最新核心运行时库及工具链，如包含更多架构支持及指令集优化的 Glibc 2.37 和支持各类最新语言特性的 GCC 13.2.0</li>
          <li>引入 OpenSSL 3.1.1 运行时，包含最新的算法库及安全修复</li>
          <li>更新预装浏览器套件，包括 Mozilla Firefox 117.0.1 及 Thunderbird 115.2.2</li>
          <li>更新 KDE Plasma 桌面套件，包含截至 2022 年底的最新版本，对默认使用体验和性能进行了调优</li>
          <li>增强默认命令提示符功能，如增加 SSH 远程命令行标记、优化 Git 提示符和规范化启动脚本等</li>
          <li>增强默认编辑器功能，在 GNU Nano 的基础上附加预装 Vim 编辑器mingcongbai@JellyNote</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
