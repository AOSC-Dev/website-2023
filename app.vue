<script setup lang="js">
const highBrightnessControllerStore = useHighBrightnessControllerStore();
const router = useRouter();
const { t } = useI18n();

useHead({
  title: t('seo.heading.siteTitle'),
  titleTemplate: (title) => `${title} | ${t('seo.site.siteName')}`,
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/aosc.svg' }],
  script: [
    {
      // This script will execute before the browser renders the <body>,
      // ensuring the correct season class is set from the very beginning.
      textContent:
        'document.documentElement.classList.add(["spring","summer","autumn","winter"][(new Date().getMonth()+10)%12/3|0])',
      type: 'text/javascript',
      tagPosition: 'head'
    }
  ]
});

useSeoMeta({
  description: t('seo.seo.siteDescription'),
  ogImage: '/aosc.svg',
  ogSiteName: t('seo.site.siteName')
});

router.afterEach((to, _from) => {
  highBrightnessControllerStore.obj[to.path] =
    !highBrightnessControllerStore.obj[to.path];
});

const { $mitt } = useNuxtApp();
const mainRef = useTemplateRef('mainBody');
const heightRef = useTemplateRef('dMainBody');
onMounted(() => {
  new ResizeObserver(() => {
    $mitt.emit('mainDomChange', mainRef.value.clientHeight);
  }).observe(heightRef.value);
});
</script>

<template>
  <NuxtLayout>
    <div ref="mainBody" class="flex-1 pl-[1px]">
      <div ref="dMainBody">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>
