<script setup>
/**
 * 参照 https://github.com/highlightjs/vue-plugin
 */
import { ElMessage } from "element-plus";
import hljs from "highlight.js/lib/core";
import { onMounted, ref } from "vue";
import useClipboard from "vue-clipboard3";

const { toClipboard } = useClipboard();
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  lang: {
    type: String,
    default: "",
  },
});

const codeRef = ref(null);

onMounted(() => {
  codeRef.value.innerHTML = hljs.highlight(props.code, {
    language: props.lang,
  }).value;
});

function copy() {
  toClipboard(props.code);
  ElMessage.success("复制成功");
}
</script>

<template>
    <pre class="relative">
    <code :class="`hljs ${props.lang}`" ref="codeRef">
    </code>
    <div class="absolute top-[2em] right-[1em] cursor-pointer text-link" @click="copy">复制</div>
  </pre>
    
</template>

<style scoped>

</style>
