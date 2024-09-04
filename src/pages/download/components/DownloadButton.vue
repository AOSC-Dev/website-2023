<script>
// defineProps 无法访问本地变量，必须手动导出
const downloadIso = () => {
  window.open(`https://releases.aosc.io/${props.isaInfo.path}`);
}
export default {
}
</script>
<script setup>
import { useThemeStore } from '../../../stores/miscellaneous';

const themeStore = useThemeStore()
const props = defineProps({
  archName: {
    type: String
  }, isaInfo: {
    type: Object
  }, secondLineFontSize: {
    type: Number,
    default: 10
  }, firstLineFontSize: {
    type: Number,
    default: 12
  }, width: {
    type: Number,
    default: 224
  }, myClick: {
    type: Function,
    default: downloadIso
  }, popoverData: {
    type: Object
  }, buttonColor: {
    type: String
  }
})
const byteToGb = (bytes) => {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}
</script>
<template>
  <el-popover :placement="popoverData.placement" :hide-after="0" trigger="hover" :content="popoverData.conten">
    <template #reference>
      <button :style="{ backgroundColor: buttonColor , width: $props.width + 'px' }"
        class="text-white theme-bg-color cursor-pointer mx-1 py-1" @click="props.myClick">
        <slot></slot>
        <p v-if="archName" :style="{ fontSize: $props.firstLineFontSize + 'pt' }">{{ props.archName }}</p>
        <p v-if="isaInfo" :style="{ fontSize: $props.secondLineFontSize + 'pt' }">{{
          byteToGb(props.isaInfo.downloadSize) }}GB
          ISO</p>
      </button>
    </template>
  </el-popover>
</template>

<style scoped>
.button {
  border: #7f9e7f;
}

.button-p {
  font-size: 10pt;
}
</style>