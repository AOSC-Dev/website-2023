<script setup lang="js">
const highBrightnessControllerStore = useHighBrightnessControllerStore();
const router = useRouter();

router.afterEach((to, from) => {
  highBrightnessControllerStore.obj[to.path] =
    !highBrightnessControllerStore.obj[to.path];
});
const { $mitt } = useNuxtApp();
const bodyRef = useTemplateRef('mainBody');
onMounted(() => {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  const observer = new MutationObserver(() => {
    $mitt.emit('routeSwitching');
  });
  observer.observe(bodyRef.value, {
    childList: true
  });
});
const themeStore = useThemeStore();
</script>
<template>
  <div
    :style="{
      '--primary': themeStore.primary,
      '--secondary': themeStore.secondary,
      backgroundImage: `url(/backgrounds/${themeStore.backageImg})`
    }">
    <div class="min-w-[960px] min-h-[100vh]">
      <div class="p-0 my-0 min-h-[100vh] flex flex-col">
        <BarHeader />
        <div class="main-content flex pb-[2.5rem] flex-1 justify-center">
          <div class="content-container shadow flex">
            <div
              class="min-w-[12rem] w-[15%] *:text-nowrap sticky top-0 bg-leftbar-bg">
              <BarLeft class="min-w-[100%] *:text-nowrap sticky top-0" />
            </div>
            <div ref="mainBody" class="flex-1 pl-[1px]"><NuxtPage /> </div>
          </div>
        </div>
      </div>
      <BarFooter class="fixed bottom-0 h-[2rem]" />
    </div>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
