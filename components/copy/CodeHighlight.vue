<script setup>
import hljs from 'highlight.js/lib/core';

const props = defineProps({
  codeText: {
    type: String,
    required: true
  },
  codeClass: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  },
  buttonColor: {
    type: String,
    default: 'white'
  },
  buttonClass: {
    type: String,
    default: ''
  },
  useHljs: {
    type: Boolean,
    default: true
  }
});
const codeRef = useTemplateRef('code');
onMounted(() => {
  if (props.useHljs) {
    codeRef.value.innerHTML = hljs.highlight(props.codeText, {
      language: props.language
    }).value;
  }
});
</script>

<template>
  <pre class="flex py-3">
    <code ref="code" class="pl-[1em]" :class="props.codeClass">{{
      codeText
    }}</code>
    <CopyIcon
      :class="props.buttonClass"
      :color="props.buttonColor"
      :content-target="props.codeText" />
  </pre>
</template>

<style scoped></style>
