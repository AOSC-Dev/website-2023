<script setup>
import { ref } from 'vue';
import CategorySecond from '../../components/CategorySecond.vue';
import { useRoute } from 'vue-router';
import {
  setTitle,
  requestToYaml,
  requestGetJson,
  handleCopyCodeSuccess
} from '../../utils/utils.js';

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');

(async () => {
  const mdPath = route.params.mdPath;
  let [res, err] = await requestGetJson('/' + mdPath.replaceAll('_', '/'));
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
      class="absolute w-[calc(59.5vw-1px)]" />
    <v-md-preview :text="mdRes" @copy-code-success="handleCopyCodeSuccess" />
  </div>
</template>

<style lang="css" scoped></style>
