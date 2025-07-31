<script setup>
const { locale } = useI18n();
defineProps({
  title: {
    type: [Object],
    required: true
  }
});
</script>

<template>
  <span
    v-for="(item, index) in title.texts"
    :key="`${title.texts[0]}-${index}`">
    <span v-if="title.book.includes(index)">
      <span v-if="locale === 'zh'">《{{ item }}》</span>
      <span v-else-if="locale === 'en'">
        <i>{{ item }}</i>
      </span>
    </span>
    <span v-else>{{ item }}</span>
  </span>
</template>

<style scoped>
[class*='features']:not(:first-of-type) {
  margin-top: 1.5rem;
}
</style>
