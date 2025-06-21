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
