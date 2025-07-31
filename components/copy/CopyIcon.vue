<script setup>
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
    @click="copyToClipboard(props.contentTarget)" />
</template>

<style scoped></style>
