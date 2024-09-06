<script setup>
/**
 * 参照 https://github.com/highlightjs/vue-plugin
 */
import { ElMessage } from 'element-plus';
import hljs from 'highlight.js/lib/core';
import { onMounted, ref } from 'vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  lang: {
    type: String,
    default: '',
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
  ElMessage.success('复制成功');
}
</script>

<template>
  <pre class="relative">
    <code :class="`hljs ${props.lang}`" ref="codeRef">
    </code>
    <v-icon
      class="text-primary absolute top-[2em] right-[1em] cursor-pointer"
      name="fa-copy"
      @click="copy"
    />
  </pre>
</template>

<style scoped></style>
