<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  contentTarget: {
    type: String,
    required: true
  }
});
</script>

<template>
  <Icon
    class="cursor-pointer !bg-(--primary)"
    v-bind="props"
    name="ep-document-copy"
    @click="copyToClipboard(props.contentTarget)" />
</template>

<style scoped></style>
