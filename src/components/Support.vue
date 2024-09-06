<script setup>
import { ref, watch, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import AppLink from './AppLink.vue';
import CategorySecond from './CategorySecond.vue';
import highlightElement from '../utils/animation.ts';
import { useHighBrightnessControllerStore } from '../stores/miscellaneous';

const route = useRoute();

const props = defineProps({
  navigationList: {
    type: Array,
    required: true,
  },
});
const highBrightnessControllerStore = useHighBrightnessControllerStore();
const support = ref();
watch(
  () => highBrightnessControllerStore.obj[route.path],
  () => {
    switch (route.hash) {
      case '#support':
        highlightElement(support);
        break;
      default:
        break;
    }
  },
  {
    flush: 'post',
  },
);

</script>
<template>
  <CategorySecond title="支持文档" id="support" />
  <div ref="support" class="pt-4 pb-[60px] px-16">
    <ul class="list-disc">
      <li v-for="item in navigationList" :key="item.title">
        <AppLink
          :to="item.url ? item.url : { path: item.path, hash: item.hash }"
          >{{ item.title }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
