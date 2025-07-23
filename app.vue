<script setup lang="js">
const highBrightnessControllerStore = useHighBrightnessControllerStore();
const router = useRouter();
const { t } = useI18n();

useHead({
  title: t('seo.head.title'),
  titleTemplate: (title) => `${title} | ${t('seo.site.name')}`,
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
  description: t('seo.seo.description'),
  ogImage: '/aosc.svg',
  ogSiteName: t('seo.site.name')
});

router.afterEach((to, _from) => {
  highBrightnessControllerStore.obj[to.path] =
    !highBrightnessControllerStore.obj[to.path];
});

const { $mitt } = useNuxtApp();
const bodyRef = useTemplateRef('mainBody');
onMounted(() => {
  const mutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  const observer = new mutationObserver(() => {
    $mitt.emit('routeSwitching');
  });
  observer.observe(bodyRef.value, {
    childList: true
  });
});
</script>

<template>
  <NuxtLayout>
    <div ref="mainBody" class="flex-1 pl-[1px]"><NuxtPage /></div>
  </NuxtLayout>
</template>
