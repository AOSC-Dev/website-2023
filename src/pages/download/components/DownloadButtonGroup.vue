<script setup>
import { ref } from 'vue';
import { ElPopover } from 'element-plus';
import { OhVueIcon as VIcon } from 'oh-vue-icons';
import DownloadButton from './DownloadButton.vue';

const props = defineProps({
  title: { type: String },
  description: { type: String },
  buttonProps: { type: Array[Object], required: true }
});
const expand = ref(false);
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="leading-none">
      <span v-if="title" class="font-[450] text-[10pt]">{{ title }}</span>
      <el-popover placement="top" width="233" :content="description">
        <template #reference>
          <span class="font-[450] text-[8pt]">（这是什么？）</span>
        </template>
      </el-popover>
    </div>

    <div
      v-if="buttonProps.length > 3"
      @click="expand = !expand"
      class="flex justify-center items-center theme-bg-color-secondary-primary text-[11pt] py-1 mb-1 cursor-pointer">
      <span>{{ expand ? '收起架构' : '展开架构' }}</span>
      <v-icon name="md-arrowdropdown" :class="expand ? 'rotate-180' : ''" />
    </div>

    <div
      :class="`buttons grid grid-cols-[repeat(3,1fr)] auto-rows-fr gap-x-4 gap-y-2 ${buttonProps.length <= 3 || expand ? 'expand':''}`">
      <DownloadButton
        v-for="buttonProp in buttonProps"
        :key="buttonProp.archName"
        v-bind="buttonProp"
        class="*:py-2" />
    </div>
  </div>
</template>

<style scoped>
.buttons {
  overflow: hidden;
  max-height: 0;
  opacity: 0.5;
  transition: all 0.3s;
}

.buttons.expand {
  opacity: 1;
  max-height: 1000px;
}
</style>
