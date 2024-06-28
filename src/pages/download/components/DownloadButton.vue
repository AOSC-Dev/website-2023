<script setup DownloadButton>
import { defineProps } from "vue";
const props = defineProps(["title", "isoInfo"]);

function byteToGb(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}
function downloadIso() {
  window.open(`https://releases.aosc.io/${props.isoInfo.path}`);
}
</script>
<template>
  <button
    class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer text-[10pt]"
    @click="downloadIso"
  >
    <div>{{ props.title }}</div>
    <p>{{ byteToGb(props.isoInfo.downloadSize) }}GB ISO</p>
  </button>
</template>

<style scoped>
.button {
  border: #7f9e7f;
  border-radius: 5px;
}

.button-p {
  font-size: 10pt;
}
</style>
