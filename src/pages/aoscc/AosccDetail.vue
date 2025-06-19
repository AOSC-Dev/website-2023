<script setup>
import MarkdownDetail from '../../components/MarkdownDetail.vue';

const articles = import.meta.glob('./articles/*.zh.md');
</script>

<template>
  <MarkdownDetail :articles="articles" title="AOSCC" path-suffix=".zh.md" />
</template>
