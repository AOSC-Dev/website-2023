<script setup name="Footer">
import AccordionNavigation from '../../../components/AccordionNavigation.vue';


const nowYear = new Date().getFullYear();

const navigationList = [
  {
    title: '网页源码',
    url: 'https://github.com/AOSC-Dev/website-2023'
  },
  {
    title: '报告内容问题',
    url: 'https://github.com/AOSC-Dev/website-2023/issues'
  },
  {
    title: '返回主页',
    path: '/'
  }
];
</script>

<template>
  <div
    class="theme-bg-color-secondary-static text-white py-[2px] flex justify-center w-[100vw] footerbar">
    <div class="mx-auto">
      <span class="pl-[0.5rem]"
        >&copy;
        安同开源社区&nbsp;&nbsp;&nbsp;&nbsp;2011 -
        {{ nowYear }}</span
      >
      <span class="mx-[20px]">|</span>
      <AccordionNavigation
        :navigation-list="navigationList"
        span-class="mx-[20px]"
        link-class="cursor-pointer" />
    </div>
  </div>
</template>

<style scoped>
.footerbar {
  box-shadow: 0px 0px 8px #000000e0;
}

@media (max-width: 960px) {
  .footerbar .content-container {
    width: 100%;
    min-width: 0;
    overflow: auto;
  }
}
</style>
