<script setup>
import CategorySecond from './CategorySecond.vue';
import PageNotFound from './PageNotFound.vue';
import { useRoute } from 'vue-router';
import { ref, shallowRef, defineAsyncComponent, watchEffect } from 'vue';

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
const articleComponent = ref();

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
watchEffect(
  () => route.params.slug.split('#')[0],
  () => {
    loadArticle(route.params.slug);
  }
);
</script>

<template>
  <div class="pl-[1px]">
    <template v-if="loadError">
      <PageNotFound />
    </template>
    <template v-else>
      <CategorySecond v-if="title" :title="title" />
      <component
        class="vuepress-markdown-body"
        :is="articleComponent"
        ref="mdComponent" />
    </template>
  </div>
</template>
