<script setup>
import { reactive, ref } from 'vue';
import CategorySecond from '../../components/CategorySecond.vue';
import AppH2 from '../../components/AppH2.vue';
import { useRoute } from 'vue-router';
import highlightElement from '../../utils/animation';
import AppSupport from '../../components/AppSupport.vue';
import AccordionNavigation from '../../components/AccordionNavigation.vue';
import { useHighlightWatch } from '../../utils/utils';

const route = useRoute();

const features = ref();

const switchHash = () => {
  switch (route.hash) {
    case '#features':
      highlightElement(features);
      break;
  }
};
useHighlightWatch(switchHash);

const navigationList = [
  {
    title: '下载系统',
    path: '/download',
    hash: '#afterglow-download'
  },
  {
    title: '系统特性',
    hash: '#features'
  },
  {
    title: '发行注记',
    path: '/afterglow/relnote'
  },
  {
    title: '系统配置需求',
    path: '/afterglow/requirements'
  },
  {
    title: '支持文档',
    hash: '#support'
  }
];

const docList = reactive([
  {
    title: '系统配置需求表',
    path: '/afterglow/requirements'
  },
  {
    title: '架构支持规格表',
    path: '/afterglow/isa'
  }
]);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="星霞 OS" />
    <div class="p-6">
      <p>
        星霞 OS（英译：Afterglow）基于安同 OS
        开发，通过精简特性、配置调优和软件精选等手段，致力于为各类老旧设备提供持续软件和技术更新，通过持续维护良好体验和性能让老旧设备焕发新生、让用户们“重拾旧爱”。
      </p>
      <br />
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div ref="bgImg">
        <img
          src="/assets/afterglow/afterglow.zh-cn.jpg"
          class="w-full aspect-4/3 mt-2"
          alt="" />
      </div>
    </div>

    <category-second title="系统特性" id="features" />
    <div ref="features" class="p-6">
      <app-h2>因地制宜</app-h2>
      <p
        >星霞 OS 支持已经年近三旬的设备，如搭载 486 处理器的 PC 机和 m68k
        处理器麦金塔 (Macintosh) 电脑，也支持较新的设备，如来自 2010
        年前后搭载的 Intel 凌动 (Atom) 上网本或 PowerPC 处理器的
        Mac。通过配置调优和特性分级等手段，星霞 OS
        可确保各类老旧设备上良好的使用体验。</p
      >
      <app-h2>持续维护</app-h2>
      <p
        >让老旧设备继续发光发热的基本前提就是持续且完整的软件支持，星霞 OS
        提供持续的特性更新和安全漏洞修复，让您放心地在各类场景继续使用老旧设备。</p
      >
      <app-h2>面向未来</app-h2>
      <p
        >我们计划在未来数年继续维护星霞 OS
        并周期性地发布更新包，让您安心地继续享用和把玩曾经给您带来过快乐和承载早年记忆的电脑。</p
      >
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
