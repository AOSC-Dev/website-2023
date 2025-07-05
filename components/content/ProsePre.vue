<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
});

const pre = useTemplateRef('prose-pre');
</script>

<template>
  <pre ref="prose-pre" :class="`${$props.class} relative`"><slot /><CopyIcon
    class="absolute top-3 right-3" 
    :content-target="pre?.textContent??undefined" /></pre>
</template>

<style>
pre code .line {
  display: block;
}
</style>
