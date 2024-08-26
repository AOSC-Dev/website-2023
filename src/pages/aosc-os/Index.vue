<script setup>
import { reactive, onUpdated, ref, watch } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import highlightElement from "../../utils/animation";
import AppLink from "../../components/AppLink.vue";
import { useHighBrightnessControllerStore } from "../../stores/miscellaneous"

const route = useRoute()
const router = useRouter()

const support = ref()
const features = ref()

const highBrightnessControllerStore = useHighBrightnessControllerStore()

watch(() => highBrightnessControllerStore.obj[route.path], () => {
  switch (route.hash) {
    case "#support": highlightElement(support); break
    case "#features": highlightElement(features); break
  }
}, {
  flush: 'post'
})

const navigationList = reactive([{
  title: '下载系统',
  hash: '#aosc-os-download',
  path: '/download'
}, {
  title: '系统特性',
  hash: '#features'
}, {
  title: '发行说明',
  path: '/aosc-os/relnote'
}, {
  title: '系统配置需求',
  path: '/aosc-os/requirements'
}, {
  title: '支持文档',
  hash: '#support'
}])

const docList = reactive([
  {
    title: '安装指南',
    url: '/'
  }, {
    title: '系统配置需求表',
    url: '/aosc-os/requirements'
  }, {
    title: '架构支持规格表',
    url: '/aosc-os/isa'
  }, {
    title: '其他支持文档',
    url: '/'
  }
])

</script>

<template>
  <div class="pl-[1px]">
    <category-second title="安同 OS" />
    <div class="p-6">
      <p>
        安同 OS（英译：AOSC OS）是一款以“简明可靠”为设计及维护目标的 Linux 发行版。本系统主要面向有一定 Linux 使用经验的用户，针对个人桌面设备优化体验，致力于为用户提供开箱即用和简便可靠的工作环境。
      </p>
      <br />
      <div>
        <span v-for="(item, index) in navigationList" :key="item.title">
          <AppLink :url="item.url" :to="{ path: item.path, hash: item.hash }" class="text-link cursor-pointer">
            {{ item.title }}</AppLink>
          <span class="mx-1" v-if="index < navigationList.length - 1">|</span>
          <RouterView />
        </span>
      </div>
      <img src="/assets/aosc-os/aosc-os.zh-cn.jpg" class="w-full h-auto mt-2" alt="">
    </div>

    <category-second title="系统特性" id="features" />
    <div ref="features" class="p-6">
      <H2>高效工作</H2>
      <p>以开箱即用作为主要设计目标，安同 OS 是您日常工作的得力助手。从文字办公到服务器运维，摄影后期到 3D 建模，课堂笔记到文档翻译，我们的系统助您快速部署、高效工作、尽情创作。</p><br />
      <H2>易于管理</H2>
      <p>从安装到系统更新，从组件管理到日常维护，安同 OS 内建许多易于使用的管理工具，助您轻松管理、舒心使用。例如安同 OS 内建的小熊猫包管理 (oma) ，其简明且人性化的界面让系统管理尽可能低风险、低耗时、高可靠。</p>
      <br />
      <H2>省心可靠</H2>
      <p>安同 OS 可选装 RescueKit 恢复与维护环境，以完全独立的环境助您避免操作意外和系统故障。不论是文件系统损坏、文件误删还是系统更新故障，RescueKit
        内建完整工具箱，助您尽快排除故障，重新投入到娱乐、工作与生活中；此外，其内建的备份工具亦可助您轻松完成预防式维护。</p><br />
      <H2>高兼容性</H2>
      <p>我们相信，操作系统是应用程序和生产力的舞台。除软件源中提供的经官方验证的软件外，安同 OS 还支持 Flatpak、Snap 和 AppImage 等跨发行版生态，扩充软件支持的范畴；此外，现正研制中的 Spiral
        项目还将提供 Debian 及 Ubuntu 软件包兼容性。</p><br />
      <H2>随处可用</H2>
      <p>基于灵活性极高的 Linux 内核构建，安同 OS 支持台式机、笔记本、单片机和服务器等多种类型、基于各类主流处理器架构的设备，且为各类使用场景调优，助您发挥各类设备的潜力。</p><br />
      <H2>如影随形</H2>
      <p>我社一向以友好负责的支持工作著称。尊重用户的时间与精力是我们的工作准则，社区也是信息共享的强大后盾——在各社区聊天群组，我们时刻准备着为您排忧解难。</p><br />
    </div>

    <category-second title="支持文档" id="support" />
    <div ref="support" class="pt-4 pb-[60px] px-16">
      <ul class="list-disc">
        <li v-for="item in docList" :key="item.title">
          <router-link class="text-link" :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped></style>
./components/Header.vue
