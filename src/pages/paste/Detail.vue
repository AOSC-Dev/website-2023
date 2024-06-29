<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const id = ref('')
const needPassword = ref(false)
const password = ref('')
const loading = ref(false)
const route = useRoute()
const details = ref(null)
import VCodeBlock from '@wdns/vue-code-block';
const status = ref(0)

onMounted(() => {
  id.value = route.query.id
  needPassword.value = route.query.needPassword
  if (!route.query.needPassword) {
    getPaste(route.query.id)
  }
})

function getPaste() {
  const data = {
    paste_id: id.value,
  }
  if (needPassword.value) {
    data.password = password.value
  }
  loading.value = true
  axios
    .post("/pasteApi/api/paste/details", data)
    .then((res) => {
      loading.value = false
      details.value = res.data.details
      needPassword.value = false
      status.value = 0
    })
    .catch((err) => {
      console.log('获取异常', err.response);
      if (err.response.status == 404) {
        ElMessage({message: '粘贴板不存在', type: 'warning'})
      }
      status.value = err.response.status
      loading.value = false
    });
}
</script>

<template>
  <div class="pt-[30px] p-[80px]" v-loading="loading">
    <el-form label-width="auto" v-if="needPassword">
      <el-form-item label="密码">
        <el-input v-model="password" />
      </el-form-item>
      <el-form-item label=" ">
        <el-button type="primary" @click="getPaste">确定</el-button>
      </el-form-item>
    </el-form>

    <div v-if="details != null" >
      <h1 class="text-3xl font-bold">
        {{ details.title }}
      </h1>
      <VCodeBlock class="w-full" :code="details.contents" :lang="details.language" highlightjs theme="gradient-light" />
      <div v-for="item in details.attachments">
        <img :src="item.url" class="w-full" />
      </div>
    </div>

    <el-result v-if="status == 404" icon="warning" title="粘贴板不存在" />
    <el-result v-if="status == 401" icon="warning" title="密码错误" />
  </div>
</template>

<style scoped></style>
