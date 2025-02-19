<script setup>
import { ElPopover } from 'element-plus';
import DownloadButton from './DownloadButton.vue';

const props = defineProps({
  title: { type: String },
  description: { type: String },
  buttonProps: { type: Array[Object], required: true }
});
</script>

<template>
  <div class="flex flex-col">
    <div class="leading-none">
      <span v-if="title" class="text-[10pt]">{{ title }}</span>
      <el-popover
        placement="top"
        :content="description">
        <template #reference>
          <span class="text-[8pt]">（这是什么？）</span>
        </template>
      </el-popover>
    </div>

    <div
      class="grid grid-cols-[repeat(3,1fr)] auto-rows-fr gap-x-4 gap-y-2 pt-1">
      <DownloadButton
        v-for="buttonProp in buttonProps"
        :key="buttonProp.archName"
        v-bind="buttonProp"
        class="*:py-2" />
    </div>
  </div>
</template>

<style scoped></style>
