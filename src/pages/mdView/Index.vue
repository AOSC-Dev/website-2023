<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import yaml from "js-yaml";
import CategorySecond from "../../components/CategorySecond.vue";
import { useRoute } from "vue-router";
import { setTitle } from '../../utils/utils.js'

const mdRes = ref();
const route = useRoute();
const yamlDoc = ref({});
const newsDate = ref('')
onMounted(() => {
  const mdPath = route.params.mdPath;
  console.log(mdPath)
  axios.get('/' + mdPath.replaceAll('_', '/')).then((res) => {
    // 将头信息和内容分开，头信息为yml格式
    let mdContent = res.data.substring(4);
    let i = mdContent.indexOf("---");
    let ymlContent = mdContent.substring(0, i);
    yamlDoc.value = yaml.load(ymlContent);

    mdRes.value = mdContent.substring(i);
    setTitle(yamlDoc.value['title'])
  });
});
</script>

<template>
  <div class="pl-[1px]">
    <category-second :title="yamlDoc['title']" :right-text="newsDate" class="absolute w-[calc(59.5vw-1px)]" />
    <v-md-preview :text="mdRes"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import '/src/css/index.scss'
</style>
