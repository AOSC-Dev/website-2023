<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import CategorySecond from '../../components/CategorySecond.vue';
import { setTitle, requestToYaml, requestGetJson } from '../../utils/utils';

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('');

(async () => {
  const { mdPath } = route.params;
  const [res, err] = await requestGetJson(`/${mdPath.replaceAll('_', '/')}`);
  if (res) {
    [mdRes.value, yamlDoc.value] = requestToYaml(res);
    setTitle(yamlDoc.value.title);
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
      class="absolute w-[calc(59.5vw-1px)]"
    />
    <v-md-preview :text="mdRes"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import "/src/css/index.scss";
</style>
