<script setup>

/**
 * 显示markdown内容，功能未完成...
 */
import { ref } from 'vue';
import { useRoute, useProps } from 'vue-router';
import CategorySecond from './CategorySecond.vue';
import { requestGetJson, requestToYaml, setTitle } from '../utils/utils';

const props = useProps(['mdPath']);

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');

(async () => {
  const [res, err] = await requestGetJson(`/news/${newsPath}`);
  if (res) {
    // 将头信息和内容分开，头信息为yml格式
    [mdRes.value, yamlDoc.value] = requestToYaml(res);
    setTitle(yamlDoc.value.title);
  }
})();
</script>

<template>
  <div class="pl-[1px]">
    <category-second :title="yamlDoc['title']" :right-text="newsDate" class="absolute w-[calc(59.5vw-1px)]" />
    <v-md-preview :text="mdRes" class="pt-[50px]"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import '/src/css/index.scss'
</style>
