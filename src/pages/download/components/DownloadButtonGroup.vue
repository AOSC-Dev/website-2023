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
      <span v-if="title" class="text-[10pt] font-[450]">{{ title }}</span>
      <el-popover placement="top" width="233" ref="whatsThisArchLevelPopup">
        <div @click="$refs.whatsThisArchLevelPopup.hide()"
          >{{ description }}
        </div>
        <template #reference>
          <span class="text-[8pt] font-[450]">（这是什么？）</span>
        </template>
      </el-popover>
    </div>

    <div
      v-if="buttonProps.length > 3"
      @click="expand = !expand"
      class="theme-bg-color-secondary-primary mb-1 flex cursor-pointer items-center justify-center py-1 text-[11pt]">
      <span>{{ expand ? '收起架构' : '展开架构' }}</span>
      <v-icon name="md-arrowdropdown" :class="expand ? 'rotate-180' : ''" />
    </div>

    <div
      :class="`buttons grid auto-rows-fr grid-cols-[repeat(3,1fr)] gap-x-4 gap-y-2 ${buttonProps.length <= 3 || expand ? 'expand' : ''}`">
      <DownloadButton
        v-for="buttonProp in buttonProps"
        :key="buttonProp.archName"
        v-bind="buttonProp" />
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
