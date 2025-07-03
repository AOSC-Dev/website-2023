<script setup>
import MarkdownDetail from '../../components/MarkdownDetail.vue';

const articles = import.meta.glob('./articles/*.zh.md');
</script>

<template>
  <MarkdownDetail
    :articles="articles"
    default-title="众筹详情"
    path-suffix=".zh.md" />
</template>
