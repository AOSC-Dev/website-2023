<script setup>
import { ref, computed } from 'vue';
import CategorySecond from '../../components/CategorySecond.vue';
import { useRoute } from 'vue-router';
import {
  requestGetJson,
  requestToYaml,
  handleCopyCodeSuccess
} from '../../utils/utils.js';
import { useHead } from '@unhead/vue';

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');
useHead({ title: computed(() => yamlDoc.value?.title) });

(async () => {
  const newsPath = route.params.newsPath;
  newsDate.value = newsPath.substring(0, 10);
  let [res, err] = await requestGetJson(`/news/${newsPath}`);
  if (res) {
    [mdRes.value, yamlDoc.value] = requestToYaml(res);
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
