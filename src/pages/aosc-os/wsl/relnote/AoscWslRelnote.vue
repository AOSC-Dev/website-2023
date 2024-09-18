<script setup>
import { reactive } from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      title="发行注记：2024 年 9 月" />
    <div class="p-6">
      <p>
        AOSC OS on WSL 是用于 Windows Subsystem
        for Linux 环境的安同 OS
        版本，本次更新包含如下更改。 </p
      ><br />
    </div>

    <category-second
      title="新特性与更改"
      id="features" />
    <div class="p-6">
      <p>
        本次发行属常规更新，包含截至 2024 年 9 月
        5 日的所有系统更新。 </p
      ><br />
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
