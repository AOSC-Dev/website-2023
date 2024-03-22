<script setup>
import { ref } from "vue";
import axios from 'axios';
import yaml from 'js-yaml'

const mdRes = ref();
axios.get('/news/2016-09-18-aosc-os-core-4-is-green.md').then(res => {
  // 将头信息和内容分开，头信息为yml格式
  let mdContent = res.data.substring(4);
  let i = mdContent.indexOf('---');
  let ymlContent = mdContent.substring(0, i);
  console.log("读取的yml格式为: " + ymlContent);
  const yamlDoc = yaml.load(ymlContent);
  console.log('yamlDoc: ');
  console.log(yamlDoc);

  mdRes.value = "# " + yamlDoc['title'] + "\n\n" + mdContent.substring(i);
})

</script>

<template>
  <div>
    <v-md-preview :text="mdRes"></v-md-preview>
  </div>
</template>

<style lang="css" scoped>
</style>