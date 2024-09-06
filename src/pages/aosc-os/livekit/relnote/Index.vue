<script setup>
import CategorySecond from '@/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行说明：2024 年 9 月" />
    <div class="p-6">
      <p>
        LiveKit 是用于维护安同 OS 和进行故障修复的可移动环境，本次发行包含的新特性与更改如下。
      </p><br />
    </div>

    <category-second title="新特性与更改" id="features" />
    <div class="p-6">
      <p>
        除将系统组件更新到 2024 年 8 月的基线外，LiveKit 还包含如下新特性：
      </p><br />
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li>更新 Linux 内核至 6.10 分支，支持更多新硬件</li>
          <li>引入新的命令行安装程序 <a href="https://github.com/AOSC-Dev/dkcli" class="text-link mr-2">dkcli</a>，可支持无人值守安装</li>
          <li>将安同 OS 安装程序（在线模式）更新至最新版，修复大量已知问题</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
