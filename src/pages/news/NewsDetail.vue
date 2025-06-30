<script setup>
import { ref } from 'vue';
import CategorySecond from '../../components/CategorySecond.vue';
import { useRoute } from 'vue-router';
import {
  setTitle,
  requestGetJson,
  requestToYaml,
  handleCopyCodeSuccess
} from '../../utils/utils.js';

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');

(async () => {
  const newsPath = route.params.newsPath;
  newsDate.value = newsPath.substring(0, 10);
  let [res, err] = await requestGetJson(`/news/${newsPath}`);
  if (res) {
    [mdRes.value, yamlDoc.value] = requestToYaml(res);
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
      class="sticky top-0 z-1 mb-6" />
    <v-md-preview :text="mdRes" @copy-code-success="handleCopyCodeSuccess" />
  </div>
</template>

<style lang="css" scoped></style>
