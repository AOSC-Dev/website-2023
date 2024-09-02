<script setup name="Header">
import { useThemeStore } from '../stores/miscellaneous';

const themeStore = useThemeStore()

const props = defineProps(["title", "rightText", "rightUrl", 'showRightChevron']);
</script>
<template>
  <div :style="{ backgroundColor: themeStore.secondary }"
    class="flex justify-between items-end text-white py-[5px] px-[10px] m-p select-none h-[2rem] leading-none items-center">
    <span>
      {{ props.title }}
    </span>

    <span v-if="props.rightText">
      <span v-if="props.rightUrl == undefined">
        {{ props.rightText }}
      </span>
      <router-link :to="props.rightUrl" v-else>
        {{ props.rightText }}
      </router-link>
      <!-- 右箭头 -->
      <v-icon v-if="showRightChevron" name="bi-chevron-double-right" />
    </span>
  </div>
</template>

<style scoped></style>
