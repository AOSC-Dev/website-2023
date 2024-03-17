<script setup name="Header">
import { reactive } from "vue";

const languageList = reactive([
  {name: 'English', value: 'en'},
  {name: '简体中文', value: 'cn'}
])
</script>

<template>
  <div>
    <div
      class="bg-primary text-white flex pl-[400px] py-[5px] z-1 whitespace-nowrap text-clip absolute right-0 *:ml-[12px] *:no-underline z-20"
    >
      <router-link to="/download">下载AOSC OS</router-link>
      <span>|</span>
      <router-link to="/about">关于社区</router-link>
      <span>|</span>
      <section class="flex flex-col">
        <div class="relative overflow-hidden hover:overflow-visible h-[calc(1em+10px)] *:cursor-pointer">
          <span>网站语言</span>
          <ul class="bg-primary pt-[7px]">
            <li v-for="item in languageList" :key="item.value" class="hover:bg-secondary text-white py-2 px-2">{{ item.name }}</li>
          </ul>
        </div>
      </section>
      <div class="w-[calc(50vw-530px)] inline-block"></div>
    </div>

    <div class="p-0 relative min-w-0 max-w-[1024px] overflow-clip">
      <img src="/assets/heading/heading-wave.svg" class="w-[1024px] object-cover h-[160px] z-10" alt="">
      <router-link to="/">
        <img src="/assets/heading/portal-logo.zh-cn.svg" class="absolute top-[50px] ml-[25px] w-[276px]" alt="">
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
