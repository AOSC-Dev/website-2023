<script setup>
import { reactive, ref, watch } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import { useRoute, useRouter } from "vue-router";
import AppLink from "../../components/AppLink.vue";
import { useHighBrightnessControllerStore } from "../../stores/miscellaneous"
import AccordionNavigation from "../../components/AccordionNavigation.vue";

const router = useRouter()
const route = useRoute()

const highBrightnessControllerStore = useHighBrightnessControllerStore()


const navigationList = [{
  title: '代码仓库',
  url: 'https://github.com/AOSC-Dev/oma'
}, {
  title: '支持文档',
  path: '/oma',
  hash: '#support'
}, {
  title: '下载oma',
  path: '/download',
  hash: '#oma-download'
}
]

watch(() => highBrightnessControllerStore.obj[route.path], () => {
  switch (route.hash) {
  }
}, {
  flush: 'post'
})

const docList = reactive([
  {
    title: '如何管理安同 OS 系统测试源',
    url: '#'
  }, {
    title: '如何撤销错误操作',
    url: '#'
  }, {
    title: '图文教您玩转小熊猫包管理 TUI 界面',
    url: '#'
  }
])
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="小熊猫包管理 (oma)" />
    <div class="p-6">
      <p>
        小熊猫包管理 (oma) 是一款为使用 <AppLink to="https://wiki.debian.org/Teams/Dpkg">dpkg</AppLink>
        的发行版设计的软件包管理前端，也是<AppLink to="/aosc-os">安同 OS</AppLink> 的默认包管理界面。小熊猫包管理的主要设计目标有：
      </p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li><b>改良 APT 界面：</b>兼容 dpkg 发行版常用的 APT 包管理工具的同时，让界面指引、报错及操作逻辑更为简洁易懂</li>
          <li><b>增强防呆机制：</b>通过清晰的指引和操作撤销等机制，助您避免因粗心或其他原因造成系统故障，进而浪费时间和精力</li>
          <li><b>优化网络性能：</b>使用 HTTP/2 和多线程下载等技术，大幅度加快软件包安装与更新</li>
          <li><b>提升使用效率：</b>结合 CLI（命令行）和 TUI（终端窗体）界面，让您的系统管理体验更轻松明晰</li>
          <li><b>集成系统功能：</b>与安同 OS 的测试源和镜像源数据等机制集成，提供一站式的系统组件管理体验</li>
          <li><b>兼容主流系统：</b>支持 Debian、Ubuntu 和 deepin 等主流 dpkg 发行版，让软件包管理更易用</li>
        </ul>
      </div>
      <div>
        <AccordionNavigation :navigationList="navigationList"/>
      </div>
      <img src="/assets/oma/oma.png" class="w-full h-auto mt-2" alt="">
    </div>

    <Support :navigationList="docList" />

  </div>
</template>

<style scoped></style>
./components/Header.vue
