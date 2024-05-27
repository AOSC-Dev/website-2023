<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import yaml from "js-yaml";
import CategorySecond from "../../components/CategorySecond.vue";
import { useRoute } from "vue-router";

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
    console.log("读取的yml格式为: " + ymlContent);
    yamlDoc.value = yaml.load(ymlContent);
    console.log("yamlDoc: ");
    console.log(yamlDoc.value);

    mdRes.value = mdContent.substring(i);
  });
});
</script>

<template>
  <div class="pl-[1px]">
    <category-second :title="yamlDoc['title']" :right-text="newsDate" class="absolute w-[calc(59.5vw-1px)]" />
    <v-md-preview :text="mdRes" class="pt-[50px]"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
@import '/src/css/md.scss'
</style>
