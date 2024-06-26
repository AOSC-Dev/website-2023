<script setup name="Header">
import { reactive } from "vue";

const languageList = reactive([
  { name: "English", value: "en" },
  { name: "简体中文", value: "cn" },
]);
</script>

<template>
  <div class="bg-cover">
    <div class="flex">
      <div class="grow"></div>
      <div class="content-container flex justify-end">
        <div
          class="bg-primary text-white flex justify-end py-[5px] whitespace-nowrap text-clip *:ml-[12px] *:no-underline pl-[50px]"
        >
          <router-link to="/download">下载 AOSC OS</router-link>
          <span>|</span>
          <router-link to="/about">关于社区</router-link>
          <span>|</span>
          <section class="flex flex-col">
            <div
              class="relative overflow-hidden hover:overflow-visible h-[calc(1em+10px)] *:cursor-pointer z-[2]"
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
    <div class="flex justify-center">
      <div class="content-container">
        <router-link to="/">
          <img
            src="/assets/heading/portal-logo.zh-cn.svg"
            class="w-[12rem] pb-[10px] pl-[0.5rem]"
            alt="logo"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  box-shadow: 0px 0px 10px #666;
}

.topbar-r {
  box-shadow: 10px 0px 10px #666;
}

@media (max-width: 1000px) {
	.bg-cover {
		background-image: url('/assets/backgrounds/floral-landscape.svg');
		background-attachment: fixed;
		background-position-y: center;
		background-size: contain;
		background-color: #fffbf5;
	}
}
</style>
