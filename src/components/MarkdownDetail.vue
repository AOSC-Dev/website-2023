<script setup>
import CategorySecond from './CategorySecond.vue';
import PageNotFound from './PageNotFound.vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import {
  shallowRef,
  defineAsyncComponent,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue';

const props = defineProps({
  // const articles = import.meta.glob('./articles/*.zh.md');
  articles: {
    type: Object,
    required: true
  },
  defaultTitle: String,
  pathPrefix: String,
  pathSuffix: String
});

useHead({ title: props.defaultTitle });

const route = useRoute();
const loadError = shallowRef(false);
const articleComponent = shallowRef();
const title = shallowRef(props.defaultTitle);

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

watch(
  () => route.params.slug.split('#')[0],
  (newSlug) => loadArticle(newSlug),
  { immediate: true }
);

// Update CategorySecond's title
// I guess there would be a better solution :(
let observer;
onMounted(() => {
  observer = new MutationObserver((mutations) => {
    title.value = mutations[0].target.text.split('|')[0].trim();
  }).observe(document.querySelector('title'), {
    subtree: true,
    characterData: true,
    childList: true
  });
});
onBeforeUnmount(() => {
  if (observer) console.log(observer.disconnect());
});
</script>

<template>
  <div class="pl-[1px]">
    <template v-if="loadError">
      <PageNotFound />
    </template>
    <template v-else>
      <CategorySecond :title="title" />
      <component class="vuepress-markdown-body" :is="articleComponent" />
    </template>
  </div>
</template>
