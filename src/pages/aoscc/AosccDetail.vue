<script setup>
import PageNotFound from '../../components/PageNotFound.vue';
import { useRoute } from 'vue-router';
import { ref, defineAsyncComponent, watch } from 'vue';

const route = useRoute();
const error = ref();
const articleComponent = ref();
const articles = import.meta.glob('./articles/*.zh.md');

function loadArticle(slug) {
  const path = `./articles/${slug.split('#')[0]}.zh.md`;
  const loader = articles[path];
  if (!loader) error.value = true;
  articleComponent.value = defineAsyncComponent(loader);
}

loadArticle(route.params.slug);
watch(() => route.params.slug.split('#')[0], loadArticle(route.params.slug));
</script>

<template>
  <div class="pl-[1px]">
    <template v-if="error">
      <page-not-found />
    </template>
    <template v-else>
      <component class="vuepress-markdown-body" :is="articleComponent" />
    </template>
  </div>
</template>
