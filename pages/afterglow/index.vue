<script setup>
const route = useRoute();

const features = ref();

const highBrightnessControllerStore = useHighBrightnessControllerStore();

watch(
  () => highBrightnessControllerStore.obj[route.path],
  () => {
    switch (route.hash) {
      case '#features':
        highlightElement(features);
        break;
    }
  },
  {
    flush: 'post'
  }
);

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

const docList = [
  {
    title: '系统配置需求表',
    path: '/afterglow/requirements'
  },
  {
    title: '架构支持规格表',
    path: '/afterglow/isa'
  }
];

</script>

<template>
  <div>
    <CategorySecond title="星霞 OS" />
    <div class="p-6">
      <p>
        星霞 OS（英译：Afterglow）基于安同 OS
        开发，通过精简特性、配置调优和软件精选等手段，致力于为各类老旧设备提供持续软件和技术更新，通过持续维护良好体验和性能让老旧设备焕发新生、让用户们“重拾旧爱”。
      </p>
      <br />
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div ref="bgImg" class="h-[779.27px]">
        <img
          src="/afterglow/afterglow.zh-cn.jpg"
          class="w-full h-auto mt-2"
          alt="" />
      </div>
    </div>

    <CategorySecond title="系统特性" id="features" />
    <div ref="features" class="p-6">
      <AppH2>因地制宜</AppH2>
      <p
        >星霞 OS 支持已经年近三旬的设备，如搭载 486 处理器的 PC 机和 m68k
        处理器麦金塔 (Macintosh) 电脑，也支持较新的设备，如来自 2010
        年前后搭载的 Intel 凌动 (Atom) 上网本或 PowerPC 处理器的
        Mac。通过配置调优和特性分级等手段，星霞 OS
        可确保各类老旧设备上良好的使用体验。</p
      >
      <AppH2>持续维护</AppH2>
      <p
        >让老旧设备继续发光发热的基本前提就是持续且完整的软件支持，星霞 OS
        提供持续的特性更新和安全漏洞修复，让您放心地在各类场景继续使用老旧设备。</p
      >
      <AppH2>面向未来</AppH2>
      <p
        >我们计划在未来数年继续维护星霞 OS
        并周期性地发布更新包，让您安心地继续享用和把玩曾经给您带来过快乐和承载早年记忆的电脑。</p
      >
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped>
</style>
./components/Header.vue
