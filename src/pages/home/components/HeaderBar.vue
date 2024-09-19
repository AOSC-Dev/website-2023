<script setup name="Header"></script>

<template>
  <div class="bg-cover">
    <div class="flex">
      <div class="grow"></div>
      <div
        class="content-container flex justify-end">
        <div
          class="theme-bg-color-primary-static text-white flex justify-end py-[5px] whitespace-nowrap text-clip *:ml-[12px] *:no-underline pl-[50px] pr-[0.5rem]">
          <router-link to="/download"
            >下载中心</router-link
          >
          <span>|</span>
          <a
            href="https://bbs.aosc.io/"
            target="_blank"
            >社区论坛
          </a>
          <span>|</span>
          <router-link to="/about"
            >关于社区</router-link
          >
          <!-- 尚未实现 -->
          <!-- <span>|</span>
          <section class="flex flex-col">
            <div
              class="relative overflow-hidden hover:overflow-visible h-[calc(1em+10px)] *:cursor-pointer z-[2]"
            >
              <span>网站语言</span>
              <ul class="bg-primary pt-[7px]">
                <li
                  v-for="item in languageList"
                  :key="item.value"
                  class=" text-white py-2 px-2"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </section> -->
        </div>
      </div>
      <div
        class="grow theme-bg-color-primary-static"></div>
    </div>
    <div class="flex justify-center">
      <div class="content-container">
        <router-link to="/">
          <img
            src="/assets/heading/portal-logo.zh-cn.svg"
            class="w-[12rem] pb-[18px] pl-[0.5rem]"
            alt="logo" />
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
</style>
