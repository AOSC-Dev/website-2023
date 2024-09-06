<script setup name="RightBar">
import {
  reactive, ref, useTemplateRef, onMounted, onUnmounted,
} from 'vue';
import CategorySecond from '@/components/CategorySecond.vue';
import AppLink from '@/components/AppLink.vue';

const distroList = reactive([
  {
    img: '/assets/distros/aosc-os.svg',
    title: '安同 OS',
    description: '可靠、简明、精制',
    downloadPath: '/download',
    downloadHash: '#aosc-os-download',
    relnotePath: '/aosc-os/relnote',
    relnoteHash: '',
  },
  {
    img: '/assets/distros/afterglow.svg',
    title: '星霞 OS',
    description: '承前启后',
    downloadPath: '/download',
    downloadHash: '#afterglow-download',
    relnotePath: '/afterglow/relnote',
    relnoteHash: '',
  },
]);
const commonLinkList = reactive([
  {
    url: '/contact#main',
    title: '报告系统使用问题',
  },
  {
    url: 'https://github.com/AOSC-Dev/aosc-os-abbs/issues/new?assignees=&labels=security&projects=&template=security-vulnerabilities-report.yml',
    title: '报告安全漏洞',
  },
  {
    url: 'https://wiki.aosc.io/zh/developer/infrastructure/knowledge-base/00002-how-to-mirror/',
    title: '镜像源支持',
  },
  {
    url: '/crowdsourcing',
    title: '赞助硬件或服务',
  },
]);

const imgHeight = ref();

const img = useTemplateRef('bgImg');

let observer = null;
onMounted(() => {
  observer = new ResizeObserver(() => {
    imgHeight.value = `${(img.value.clientWidth / 1.7455).toFixed(2)}px`;
    console.log(imgHeight.value);
  });
  observer.observe(img.value);
});

const onImgLoad = () => {
  if (observer) {
    observer.disconnect();
  }
  imgHeight.value = 'auto';
};

onUnmounted(() => {
  // 在组件销毁前取消观察
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template :style="{ '--homepage-img-height2': imgHeight }">
  <div class="bg-right-bar-bg w-[37.5%] flex flex-col">
    <a href="https://wiki.aosc.io/zh/aosc-os/is-aosc-os-right-for-me">
      <img
        @load="onImgLoad"
        ref="bgImg"
        src="/assets/banners/banner_minor1.svg"
        class="bg-img-height w-full cursor-pointer"
      />
    </a>
    <a href="https://bbs.aosc.io/">
      <img
        src="/assets/banners/banner_minor2.svg"
        class="bg-img-height w-full cursor-pointer"
        href="https://bbs.aosc.io/"
      />
    </a>
    <div class="flex flex-col flex-grow">
      <category-second
        title="系统方案"
        class="border-l border-solid border-content-main-bg"
      />
      <article class="pt-[1em] pb-[0.5em] pl-[1em] border-l border-secondary">
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
              <AppLink
                :to="{ path: item.downloadPath, hash: item.downloadHash }"
                class="text-link mr-2"
                >系统下载</AppLink
              >
              <AppLink :to="{ path: item.relnotePath, hash: item.relnoteHash }"
                >发行说明</AppLink
              >
            </div>
          </div>
        </div>
      </article>
      <category-second title="常用链接" />
      <div class="border-l border-secondary flex flex-col flex-grow">
        <a
          v-for="item in commonLinkList"
          :key="item.title"
          :href="item.url"
          class="hover:bg-leftbar-bg cursor-pointer flex flex-row justify-between items-center px-[1rem] h-[2rem] odd:bg-[#fefaf6] bg-white"
        >
          <span>{{ item.title }}</span>
          <v-icon name="hi-solid-external-link" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img-height {
  height: var(--homepage-img-height2);
}
</style>
