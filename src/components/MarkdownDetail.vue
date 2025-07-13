<script setup>
import PageNotFound from './PageNotFound.vue';
import { useRoute } from 'vue-router';
import {
  shallowRef,
  defineAsyncComponent,
  watch,
  useTemplateRef,
  computed
} from 'vue';
import CategorySecond from './CategorySecond.vue';

const props = defineProps({
  articles: {
    type: Object,
    required: true
  },
  showTitle: {
    type: Boolean,
    default: false
  },
  defaultTitle: String,
  pathPrefix: String,
  pathSuffix: String
});
// const articles = import.meta.glob('./articles/*.zh.md');

const route = useRoute();
const loadError = shallowRef(false);
const articleComponent = shallowRef();
const articleComponentRef = useTemplateRef('articleComponentRef');
const articleTitle = computed(
  () => articleComponentRef.value?.frontmatter.title
);

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
      <CategorySecond
        v-if="showTitle"
        :title="articleTitle ?? defaultTitle" />
      <component
        ref="articleComponentRef"
        class="vuepress-markdown-body"
        :is="articleComponent" />
    </template>
  </div>
</template>
