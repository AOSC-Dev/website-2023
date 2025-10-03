<script setup>
const { locale } = useI18n();
const props = defineProps({
  contentTarget: {
    type: String,
    required: true
  }
});
</script>

<template>
  <Icon
    v-if="contentTarget !== 'undefined'"
    class="cursor-pointer !bg-(--primary)"
    v-bind="props"
    name="ep-document-copy"
    @click="copyToClipboard(locale, props.contentTarget)" />
</template>

<style scoped></style>
