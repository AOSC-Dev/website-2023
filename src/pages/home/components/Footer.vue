<script setup name="Footer">

const nowYear = new Date().getFullYear();
</script>

<template>
  <div class="bg-secondary text-white py-[2px] flex justify-center w-[100vw] footerbar">
    <div class="content-container">
      <span>&copy; 安同开源社区&nbsp;&nbsp;&nbsp;&nbsp;2011 - {{ nowYear }}</span>
      <span class="mx-[20px]">|</span>
      <a href="">网页源码</a>
      <span class="mx-[20px]">|</span>
      <a href="">报告内容问题</a>
    </div>
  </div>
</template>

<style scoped>
.footerbar {
	box-shadow: 0px 0px 8px #7a7a7a;
}
</style>
