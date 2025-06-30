<script setup>
import PageNotFound from '../../components/PageNotFound.vue';
import { useRoute } from 'vue-router';
import { ref, defineAsyncComponent, watch } from 'vue';

const route = useRoute();
const error = ref();
const articleComponent = ref();

function loadArticle() {
  const slugWithoutHash = route.params.slug.split('#')[0];
  articleComponent.value = defineAsyncComponent(() =>
    import(`./articles/${slugWithoutHash}.zh.md`).catch((err) => {
      console.error('Article not found:', err);
      error.value = err;
    })
  );
}

loadArticle();
watch(() => route.params.slug.split('#')[0], loadArticle);
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
