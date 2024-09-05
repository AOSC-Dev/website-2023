<script setup>
import { reactive, watch } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import { useRouter, useRoute } from "vue-router";
import { useHighBrightnessControllerStore } from "../../stores/miscellaneous"
import AccordionNavigation from "../../components/AccordionNavigation.vue";

const router = useRouter()
const route = useRoute()

const highBrightnessControllerStore = useHighBrightnessControllerStore()

watch(() => highBrightnessControllerStore.obj[route.path], () => {
  switch (route.hash) {

  }
}, {
  flush: 'post'
})

const navigationList = [{
  title: '项目主页',
  url: 'https://liblol.aosc.io/'
}, {
  title: '安装指南',
  url: 'https://liblol.aosc.io/docs/usage/'
}, {
  title: '兼容性数据库',
  url: 'https://liblol.aosc.io/docs/apps/'
}, {
  title: '支持文档',
  hash: '#support'
}]

const docList = reactive([
  {
    title: '关于“新世界”与“旧世界”',
    url: 'https://areweloongyet.com/docs/old-and-new-worlds/'
  }, {
    title: '应用程序兼容性数据库',
    url: 'https://liblol.aosc.io/docs/apps/'
  }, {
    title: '常见问题解答',
    url: 'https://liblol.aosc.io/docs/faq/'
  }, {
    title: '更新日志',
    url: 'https://liblol.aosc.io/docs/dev/changelog/'
  }, {
    title: '打包注意事项',
    url: 'https://liblol.aosc.io/docs/dev/packaging/'
  }, {
    title: '实现原理',
    url: 'https://liblol.aosc.io/docs/dev/design/'
  }
])
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="libLoL 兼容层" />
    <div class="p-6">
      <p>
        libLoL (LoongArch on LoongArch) 是一款用于提供旧世界 ABI 兼容性的运行时。旧世界 ABI 常用于为龙芯提供的 Loongnix 参考发行版和统信 UOS 设计的商业软件，如腾讯 QQ
        Linux 版、金山 WPS for Linux 和龙芯浏览器等。由于这些应用程序尚未移植到新世界 ABI 上，本运行时旨在为新世界发行版用户提供运行上述应用程序的便利。
      </p><br />
      <p>
        安装 libLoL 后，您可以直接安装运行旧世界 ABI 应用程序。
      </p><br />
      <div>
        <AccordionNavigation :navigationList="navigationList" />
      </div>
      <img src="/assets/liblol/liblol.svg" class="w-full h-auto mt-2" alt="">
    </div>

    <Support :navigationList="docList" />

  </div>
</template>

<style scoped></style>
./components/Header.vue
