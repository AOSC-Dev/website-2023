<script setup>
import CategorySecond from '../../../components/CategorySecond.vue';
import PageNotFound from '../../../components/PageNotFound.vue';
import { useRoute } from 'vue-router';
import { ref, computed, defineAsyncComponent } from 'vue';

const route = useRoute();
const error = ref();

const articleComponent = computed(() => {
  const slug = route.params.slug;
  return defineAsyncComponent(() =>
    import(`../articles/${slug}.zh.md`).catch((err) => {
      console.error('Article not found:', err);
      error.value = err;
    })
  );
});
</script>

<template>
  <div class="pl-[1px]">
    <template v-if="error">
      <page-not-found />
    </template>
    <template v-else>
      <div class=""></div>
      <category-second v-if="!error" title="AOSCC" class="sticky top-0 z-1" />
      <component class="vuepress-markdown-body" :is="articleComponent" />
    </template>
  </div>
</template>
