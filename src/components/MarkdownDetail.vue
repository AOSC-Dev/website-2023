<script setup>
import PageNotFound from './PageNotFound.vue';
import { useRoute } from 'vue-router';
import { shallowRef, defineAsyncComponent, watch } from 'vue';

const props = defineProps({
  articles: {
    type: Object,
    required: true
  },
  title: String,
  pathPrefix: String,
  pathSuffix: String
});
// const articles = import.meta.glob('./articles/*.zh.md');

const route = useRoute();
const loadError = shallowRef(false);
const articleComponent = shallowRef();

function loadArticle(slug) {
  const path = `${props.pathPrefix ?? './articles/'}${slug.split('#')[0]}${props.pathSuffix ?? '.md'}`;
  const loader = props.articles[path];
  if (!loader) loadError.value = true;
  articleComponent.value = defineAsyncComponent({
    loader,
    onError: (error, retry, fail, attempts) => {
      loadError.value = error;
    }
  });
}

loadArticle(route.params.slug);
watch(
  () => route.params.slug.split('#')[0],
  (newSlug) => loadArticle(newSlug),
  { immediate: true }
);
</script>

<template>
  <div class="pl-[1px]">
    <template v-if="loadError">
      <PageNotFound />
    </template>
    <template v-else>
      <component class="vuepress-markdown-body" :is="articleComponent" />
    </template>
  </div>
</template>
