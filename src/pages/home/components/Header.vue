<script setup name="Header">
import { reactive } from "vue";

const languageList = reactive([
  { name: "English", value: "en" },
  { name: "简体中文", value: "cn" },
]);
</script>

<template>
  <div class="bg-[url('/assets/heading/heading-wave.svg')] bg-cover bg-no-repeat bg-[center_top_-7vh]">
    <div
      class="bg-primary text-white flex justify-end pr-[14vw] py-[5px] whitespace-nowrap text-clip absolute right-0 w-[68vw] *:ml-[12px] *:no-underline z-20"
    >
      <router-link to="/download">下载 AOSC OS</router-link>
      <span>|</span>
      <router-link to="/about">关于社区</router-link>
      <span>|</span>
      <section class="flex flex-col">
        <div
          class="relative overflow-hidden hover:overflow-visible h-[calc(1em+10px)] *:cursor-pointer"
        >
          <span>网站语言</span>
          <ul class="bg-primary pt-[7px]">
            <li
              v-for="item in languageList"
              :key="item.value"
              class="hover:bg-secondary text-white py-2 px-2"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </section>
    </div>

    <router-link to="/">
      <img
        src="/assets/heading/portal-logo.zh-cn.svg"
        class="w-[20vw] pt-[6vh] pl-[3vw]"
        alt=""
      />
    </router-link>
  </div>
</template>

<style scoped></style>
