<script setup name="Header">
const props = defineProps({
  title: { type: String },
  rightText: { type: String },
  rightUrl: { type: String },
  showRightChevron: { type: Boolean }
});
</script>
<template>
  <div
    class="theme-bg-color-secondary-static m-p category-second">
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
