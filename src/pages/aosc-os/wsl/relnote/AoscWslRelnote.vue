<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="发行注记：2025 年 3 月" />
    <div class="p-6">
      <p>
        AOSC OS on WSL 是用于 Windows Subsystem for Linux 环境的安同 OS 版本，本次更新包含如下更改。
      </p><br />
    </div>

    <category-second title="新特性与更改" id="features" />
    <div class="p-6">
      <p>本次发行属常规更新，包含截至 2025 年 3 月 20 日的所有系统更新。</p><br />
      <div class="px-12 pt-2 pb-4">
        <ul class="list-disc">
          <li>根文件系统更新至 12.1.0</li>
          <li>适配 Windows 11 版本 24H2 和下一版草稿 C 标准</li>
          <li>修复了 WSLg 可用性问题</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
