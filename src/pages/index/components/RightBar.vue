<script setup name="RightBar">
import { reactive } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
const distroList = reactive([
  {
    img: "/assets/distros/aosc-os.svg",
    title: "AOSC OS",
    description: "可靠、简明、精制",
  },
  {
    img: "/assets/distros/afterglow.svg",
    title: "Afterglow",
    description: "承前启后",
  },
  {
    img: "/assets/icons/computer-monitor.min.svg",
    title: "LiveKit",
    description: "备不时之需",
  },
]);
const commonLinkList = reactive([
  {
    url: "#",
    title: "报告系统使用问题",
  },
  {
    url: "#",
    title: "报告安全漏洞",
  },
  {
    url: "#",
    title: "寻求现场或远程协助",
  },
  {
    url: "#",
    title: "镜像源支持",
  },
  {
    url: "#",
    title: "参与社区投票",
  },
  {
    url: "#",
    title: "赞助硬件或服务",
  },
]);
</script>

<template>
  <div class="w-[37.5%] bg-right-bar-bg">
    <img src="/assets/banners/banner_minor1.svg" alt="" class="w-full" />
    <img src="/assets/banners/banner_minor2.svg" alt="" class="w-full" />
    <div>
      <category-second title="系统方案" />
      <article class="pt-[1em] pb-[0.5em] pl-[1em]">
        <div
          class="flex items-center pb-[15px]"
          v-for="item in distroList"
          :key="item.title"
        >
          <div class="basis-[50px] mr-[20px] ml-[0.5em]">
            <img :src="item.img" alt="" class="w-full" />
          </div>
          <div class="flex-1 p-0">
            <div class="text-[14pt] font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[12pt]">
              {{ item.description }}
            </div>
            <div class="text-[12pt]">
              <a href="" class="text-link on-underline mr-2">下载</a>
              <a href="" class="text-link on-underline">发行说明</a>
            </div>
          </div>
        </div>
      </article>
      <category-second title="常用链接" />
      <ul class="list-disc ml-[40px] mt-5">
        <li v-for="item in commonLinkList" :key="item.title">
          <a :href="item.url" class="text-link no-underline">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>