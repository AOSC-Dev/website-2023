<script setup>
import { ref } from 'vue';
import CategorySecond from '../../components/CategorySecond.vue';
import { useRoute } from 'vue-router';
import { setTitle } from '../../utils/utils.js';
import {
  requestGetJson,
  requestToYaml
} from '../../utils/utils.js';

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');

(async () => {
  const newsPath = route.params.newsPath;
  newsDate.value = newsPath.substring(0, 10);
  let [res, err] = await requestGetJson(
    `/news/${newsPath}`
  );
  if (res) {
    [mdRes.value, yamlDoc.value] =
      requestToYaml(res);
    setTitle(yamlDoc.value['title']);
  } else if (err) {
    console.log(err);
  }
})();
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      :title="yamlDoc['title']"
      :right-text="newsDate"
      class="sticky top-0 z-[1]" />
    <v-md-preview :text="mdRes"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import '/src/css/index.scss';
</style>
