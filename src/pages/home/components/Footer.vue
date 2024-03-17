<script setup name="Footer">

const nowYear = new Date().getFullYear();
</script>

<template>
  <div class="bg-secondary">
    <div class="text-white px-[10px] py-[5px] m-auto max-w-[1024px]">
      <span class="m-12px">&copy; 安同开源社区 2011 - {{ nowYear }}</span>
      <span class="mx-[20px]">|</span>
      <a href="">网页源码</a>
      <span class="mx-[20px]">|</span>
      <a href="">报告内容问题</a>
    </div>
  </div>
</template>

<style scoped></style>
