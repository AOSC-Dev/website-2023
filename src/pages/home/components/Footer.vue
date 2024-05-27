<script setup name="Footer">

const nowYear = new Date().getFullYear();
</script>

<template>
  <div class="bg-secondary">
    <div class="text-white py-auto px-[15vw]">
      <span>&copy; 安同开源社区&nbsp;&nbsp;&nbsp;&nbsp;2011 - {{ nowYear }}</span>
      <span class="mx-[20px]">|</span>
      <a href="">网页源码</a>
      <span class="mx-[20px]">|</span>
      <a href="">报告内容问题</a>
    </div>
  </div>
</template>

<style scoped></style>
