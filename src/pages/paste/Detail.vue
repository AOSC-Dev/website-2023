<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const id = ref("");
const needPassword = ref(false);
const password = ref("");
const loading = ref(false);
const route = useRoute();
const details = ref(null);
import VCodeBlock from "@wdns/vue-code-block";
import { ElMessage } from "element-plus";
const imgSuffixList = ["jpg", "jpeg", "png", "gif"];

function isImg(name) {
  const suffixIndex = name.lastIndexOf(".");
  const suffix = name.substring(suffixIndex + 1);
  return imgSuffixList.find((v) => v == suffix) !== undefined;
}

function getAttachUrl(name) {
  return `/paste/content/${id.value}/${name}`;
}

onMounted(() => {
  id.value = route.query.id;
  needPassword.value = route.query.needPassword;
  if (!route.query.needPassword) {
    getPaste(route.query.id);
  }
});

const failReason = ref("");
function getPaste() {
  const data = {
    id: id.value,
  };
  if (needPassword.value) {
    data.password = password.value;
  }
  loading.value = true;
  axios
    .get("/pasteApi/paste", { params: data })
    .then((res) => {
      const results = res.data;
      console.log(results);
      if (results.code != 0) {
        failReason.value = results.message;
      } else {
        details.value = JSON.parse(results.data.json);
      }

      needPassword.value = false;
    })
    .catch((err) => {
      console.log("获取异常", err);
      failReason.value = "获取粘贴板异常";
    })
    .finally(() => {
      loading.value = false;
    });
}

function back() {
  needPassword.value = true
  failReason.value = ""
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

    <div v-if="details != null">
      <h1 class="text-3xl font-bold">
        {{ details.title }}
      </h1>
      <VCodeBlock
        class="w-full"
        :code="details.content"
        :lang="details.language"
        highlightjs
        theme="github"
      />
      <div v-if="details.fileList != null">
        <div v-for="item in details.fileList">
          <img :src="getAttachUrl(item)" class="w-full" v-if="isImg(item)" />
          <a
            v-else
            class="text-link"
            :href="getAttachUrl(item)"
            target="_blank"
            >{{ item }}</a
          >
        </div>
      </div>
    </div>
    <el-result v-if="failReason != ''" icon="warning" :title="failReason">
      <template #extra>
          <el-button v-if="failReason == '密码错误' || failReason == '需要密码'" type="primary" @click="back">返回</el-button>
        </template>
    </el-result>
  </div>
</template>

<style scoped></style>
