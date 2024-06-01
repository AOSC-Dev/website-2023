<script setup name="Header">
import { reactive } from "vue";

const languageList = reactive([
  { name: "English", value: "en" },
  { name: "简体中文", value: "cn" },
]);
</script>

<template>
  <div class="flex">
    <div class="grow"></div>
    <div class="content-container flex justify-end">
      <div
        class="bg-primary text-white flex justify-end py-[5px] whitespace-nowrap text-clip *:ml-[12px] *:no-underline z-20 pl-[50px]"
      >
        <router-link to="/download">系统下载</router-link>
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
    </div>
    <div class="bg-primary grow"></div>
  </div>
</template>

<style scoped>
.topbar {
  box-shadow: 0px 0px 10px #666;
}

.topbar-r {
  box-shadow: 10px 0px 10px #666;
}
</style>
