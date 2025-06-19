<script setup>
import MarkdownDetail from '../../components/MarkdownDetail.vue';

const articles = import.meta.glob('./articles/*.zh.md');
</script>

<template>
  <MarkdownDetail
    :articles="articles"
    default-title="AOSCC"
    path-suffix=".zh.md" />
</template>
