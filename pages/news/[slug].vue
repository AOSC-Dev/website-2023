<script lang="ts" setup>
const route = useRoute();
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  computed(() => `${locale.value}:news:${route.params.slug}`),
  () => {
    return queryCollection(locale.value)
      .path(`/news/${route.params.slug}`)
      .first();
  }
);
</script>

<template>
  <div>
    <article>
      <category-second
        :title="page?.title"
        :right-text="page?.date.substring(0, 10)"
        class="sticky top-0 z-1" />
      <div v-if="page">
        <ContentRenderer :value="page" class="heti" />
      </div>
    </article>
  </div>
</template>

<style lang="css" scoped></style>
