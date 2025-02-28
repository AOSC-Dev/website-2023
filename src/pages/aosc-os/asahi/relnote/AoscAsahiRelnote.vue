<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行注记：2025 年 2 月" />
    <div class="p-6">
      <p>
        安同 OS (Apple Silicon) 是面向基于 Apple 芯片的 Mac
        设备发布的系统版本，本次更新包含如下主要内容。 </p
      ><br />
    </div>

    <category-second title="组件更新" id="component-updates" />
    <div class="p-6">
      <p>
        本次发行属常规更新，包含截至 2024 年 2 月 15
        日的所有系统更新；其中，Linux 内核版本更新至 6.12.12 版本，带有最新
        Asahi Linux 补丁集。 </p
      ><br />
    </div>

    <category-second title="已知问题" id="component-updates" />
    <div class="p-6">
      <p> 当前发行包含如下已知问题，我们将尽快修复： </p><br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li
            >由于先前缺少测试设备且并未引入相关支持组件，MacBook Air (M1, 2020)
            的音箱暂未正确驱动</li
          >
          <li>OpenGL 图形加速暂不可用，我们正在整理 Asahi Linux 补丁集</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
