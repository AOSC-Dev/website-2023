<script setup DownloadButton>
import { onMounted, ref } from "vue";

const props = defineProps({
  labelInfo: {
    type:Object
  },isaInfo: {
    type:Object
  },secondLineFontSize: {  
    type: Number,  
    default: 10  
  },firstLineFontSize: {
    type:Number,
    default: 12
  },width: {
    type:Number,
    default: 224
  }})
function byteToGb(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}
console.log(props.labelInfo)
function downloadIso() {
  window.open(`https://releases.aosc.io/${props.isaInfo.path}`);
}
</script>
<template>
  <button
    class="text-white bg-secondary hover:opacity-85 cursor-pointer mx-1"
    :style="{width:$props.width + 'px'}"
    @click="downloadIso"
  >
    <div :style="{fontSize: $props.firstLineFontSize+'pt'}">{{ props.labelInfo.zhLabel }}</div>
    <p :style="{fontSize: $props.secondLineFontSize+'pt'}">{{ byteToGb(props.isaInfo.downloadSize) }}GB ISO</p>
  </button>
</template>

<style scoped>
.button {
  border: #7f9e7f;
}

.button-p {
  font-size: 10pt;
}
</style>