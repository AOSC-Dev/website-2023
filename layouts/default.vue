<script setup lang="js">
const themeStore = useThemeStore();
onMounted(() => {
  document.documentElement.style.setProperty('--primary', themeStore.primary);
  document.documentElement.style.setProperty(
    '--secondary',
    themeStore.secondary
  );
});
</script>

<template>
  <div
    :style="{
      '--primary': themeStore.primary,
      '--secondary': themeStore.secondary,
      backgroundImage: `url(/backgrounds/${themeStore.backageImg})`
    }">
    <div class="min-h-[100vh] min-w-[960px]">
      <div class="my-0 flex min-h-[100vh] flex-col p-0">
        <BarHeader />
        <div class="main-content flex flex-1 justify-center pb-[2.5rem]">
          <div class="content-container myShadow flex">
            <div
              class="sticky top-0 w-[15%] min-w-[12rem] bg-leftbar-bg *:text-nowrap">
              <BarLeft class="sticky top-0 min-w-[100%] *:text-nowrap" />
            </div>
            <slot />
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
