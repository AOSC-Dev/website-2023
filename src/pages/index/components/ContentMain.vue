<script setup name="ContentMain">
import { reactive } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const infoKeyList = reactive([
  {
    type: '资讯',
    title: '重返线下：AOSCC 2023 回顾【置顶】'
  }, {
    type: '公告',
    title: 'tmux 更新可能导致默认行为变化'
  }, {
    type: '公告',
    title: '更新 devel-base 后可能需要手动干预'
  }, {
    type: '公告',
    title: 'MCFly 更新后残留的配置文件可能导致报错'
  }
])

const zhuanlanList = reactive([
  {
    img: '/assets/icons/computer-monitor.min.svg',
    title: '高效工作',
    description: 'AOSC OS 以开箱即用及简明设计为目标，是您日常工作的得力伙伴。'
  }, {
    img: '/assets/icons/globe.min.svg',
    title: '走向世界',
    description: '如果您在互联网连接受限的地区生活，AOSC OS 内建工具可助您畅游全球互联网。'
  }, {
    img: '/assets/icons/shield.min.svg',
    title: '有备无患',
    description: '内建 Rescuekit 助您排除故障恢复数据。亦可用于备份等预防式维护。'
  },
])

function toAoscOs() {
  router.push('/aoscos')
}
</script>

<template>
  <div class="w-[62.5%] bg-content-main-bg p-0">
    <img src="/assets/banners/banner_main1.svg" alt="" class="w-full cursor-pointer" @click="toAoscOs">
    <!-- 咨讯要点 -->
    <div>
      <category-second title="资讯要点" />
      <article class="p-[1em] leading-6">
        <ul class="ms-0 pl-[1.5em] list-disc">
          <li v-for="item in infoKeyList" :key="item.title">
            <span class="font-semibold mr-2">
              {{ item.type }}
            </span>
            <a href="" class="text-[#0056cc] no-underline">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="text-right px-[15px] py-[10px] font-[12pt] leading-6">
            >> 查阅最新 AOSC OS <a class="text-[#0056cc] no-underline">安全公告</a> 及 <a class="text-[#0056cc] no-underline">维护公告</a>
          </div>
      </article>
    </div>
    <!-- 专栏 -->
    <div id="topic">
      <category-second title="专栏: 初识AOSC OS" />
      <article class="p-[1em] leading-6">
        <div class="flex items-center pb-[15px]" v-for="item in zhuanlanList" :key="item.title">
          <div class="basis-[50px] mr-[20px] ml-[0.5em]">
            <img :src="item.img">
          </div>
          <div class="flex-1 p-0">
            <div class="text-[14pt] font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[12pt]">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="text-right px-[15px] text-[12pt] leading-6">
            <a class="text-[#0056cc] no-underline" href="https://wiki.aosc.io/zh/aosc-os/is-aosc-os-right-for-me/"> 详情请见：AOSC OS 适合我吗？</a>
          </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
../../../components/CategorySecond.vue