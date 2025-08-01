<script lang="ts" setup>
const props = defineProps<{ category: string }>();

const route = useRoute();
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  computed(() => `${locale.value}:${props.category}:${route.params.slug}`),
  () => {
    return queryCollection(locale.value)
      .path(`/${props.category}/${route.params.slug}`)
      .first();
  }
);
useHead({ title: page.value?.title });
</script>

<template>
  <article v-if="page">
    <category-second
      v-if="page?.body.value[0][0] !== 'h2'"
      :id="page?.title"
      :title="page?.title"
      :right-text="page?.date.substring(0, 10)"
      :title-url="`${route.path}#${page.title}`" />
    <ContentRenderer :value="page" class="heti" />
  </article>
</template>
