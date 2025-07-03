<script setup>
const props = defineProps({
  title: { type: String, required: true },
  rightText: { type: String, default: '' },
  rightUrl: { type: String, default: '' },
  rightName: { type: String, default: '' },
  showRightChevron: { type: Boolean },
  params: { type: String, default: '' }
});
</script>

<template>
  <div class="category-second">
    <span>
      {{ props.title }}
    </span>

    <span v-if="props.rightText">
      <span v-if="props.rightUrl === undefined">
        {{ props.rightText }}
      </span>
      <NuxtLinkLocale
        v-else
        :to="
          props.params
            ? { name: props.rightUrl, params: props.params }
            : props.rightUrl
        ">
        {{ props.rightText }}
      </NuxtLinkLocale>
      <!-- 右箭头 -->
      <Icon v-if="showRightChevron" name="bi-chevron-double-right" />
    </span>
  </div>
</template>

<style scoped></style>
