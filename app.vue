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
    <div ref="mainBody" class="flex-1 pl-[1px]"><NuxtPage /> </div
  ></NuxtLayout>
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
