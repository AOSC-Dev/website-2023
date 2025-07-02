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
  <el-icon class="cursor-pointer my-auto" v-bind="props" @click="copyToClipboard(props.contentTarget)">
    <el-icon-document-copy/></el-icon>
</template>

<style scoped></style>
