<script setup>
import AppLink from './AppLink.vue';
import CategorySecond from '../components/CategorySecond.vue';
import highlightElement from '../utils/animation';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHighlightWatch } from '../utils/utils';

const route = useRoute();

const props = defineProps({
  navigationList: {
    type: Array,
    required: true
  }
});
const switchHash = () => {
  switch (route.hash) {
    case '#support':
      highlightElement(support);
      break;
  }
};
useHighlightWatch(switchHash);

const support = ref();
</script>
<template>
  <CategorySecond title="支持文档" id="support" />
  <div ref="support" class="px-16 pt-4 pb-[60px]">
    <ul class="list-disc">
      <li v-for="item in navigationList" :key="item.title">
        <AppLink
          :to="
            item.url
              ? item.url
              : {
                  path: item.path,
                  hash: item.hash
                }
          "
          >{{ item.title }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
