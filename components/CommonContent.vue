<script lang="ts" setup>
import { useScrollStore } from '~/stores/scroll';

const props = defineProps<{ path?: string }>();

const route = useRoute();
const { locale } = useI18n();
const scrollStore = useScrollStore();
const contentRef = useTemplateRef('contentRef');


const contentPath = computed(() => {
  if (props.path) return props.path;

  // For `prefix_except_default`
  const prefix = `/${locale.value}`;
  return route.path.startsWith(prefix)
    ? route.path.substring(prefix.length) || '/'
    : route.path;
});

const { data: page, error } = await useAsyncData(
  computed(() => `${locale.value}:${contentPath.value}`),
  () => queryCollection(locale.value).path(contentPath.value).first()
);
useHead({ title: page.value?.title });

if (error.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  });
}

watch(contentRef, () => {
  if (route.hash) scrollStore.scrollAndClear();
});
</script>

<template>
  <article v-if="page">
    <category-second
      v-if="page.body.value[0][0] !== 'h2'"
      :id="page.title"
      :title="page.title"
      :right-text="page.date?.substring(0, 10)"
      :title-url="`${route.path}#${page.title}`" />
    <ContentRenderer ref="contentRef" :value="page" class="heti" />
  </article>
</template>
