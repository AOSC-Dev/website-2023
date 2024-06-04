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
  const newsPath = route.params.newsPath;
  newsDate.value = newsPath.substring(0, 10)
  axios.get(`/news/${newsPath}`).then((res) => {
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
    <category-second :title="yamlDoc['title']" :right-text="newsDate" class="sticky top-0" />
    <v-md-preview :text="mdRes" class="pt-[50px]"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import '/src/css/md.scss'
</style>
