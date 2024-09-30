<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  class: {
    type: String,
    default: 'ml-4 my-auto cursor-pointer'
  },
  contentTarget: {
    type: String,
    required: true
  }
});
const copy = () => {
  navigator.clipboard
    .writeText(props.contentTarget)
    .then(() => {
      ElMessage.success('复制成功');
    })
    .catch((err) => {
      ElMessage.success(`复制失败:${err}`);
    });
};
</script>
<template>
  <el-icon v-bind="props" @click="copy">
    <el-icon-document-copy> </el-icon-document-copy
  ></el-icon>
</template>

<style scoped></style>
