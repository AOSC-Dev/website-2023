<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useClipboard from 'vue-clipboard3';
import { requestGetJson } from '@/utils/utils';
import { useThemeStore } from '@/stores/miscellaneous';
import Highlight from '@/components/Highlight.vue';

const themeStore = useThemeStore();

const { toClipboard } = useClipboard();
const id = ref('');
const loading = ref(false);
const route = useRoute();
const details = ref(null);
const imgSuffixList = ['jpg', 'jpeg', 'png', 'gif'];

function isImg(name) {
  const suffixIndex = name.lastIndexOf('.');
  const suffix = name.substring(suffixIndex + 1);
  return imgSuffixList.find((v) => v === suffix) !== undefined;
}

function getAttachUrl(name) {
  return `/pasteContent/${id.value}/files/${name}`;
}

const failReason = ref('');

const getPaste = async () => {
  const data = {
    id: id.value,
  };
  loading.value = true;
  const [res, err] = await requestGetJson('/pasteApi/paste', data);
  if (res) {
    console.log(res);
    if (res.code !== 0) {
      failReason.value = res.message;
    } else {
      details.value = res.data;
    }
  } else if (err) {
    console.log('获取异常', err);
    failReason.value = '获取粘贴板异常';
  }
  loading.value = false;
};

onMounted(() => {
  id.value = route.query.id;
  getPaste(route.query.id);
});

function back() {
  failReason.value = '';
}

function copyLink() {
  toClipboard(window.location.href);
}
</script>

<template>
  <div class="pl-[1px]" v-loading="loading">
    <div v-if="details != null">
      <category-second title="公共粘贴板" />
      <div class="p-[2em]">
        <div class="flex justify-between">
          <div>
            <div>标题: {{ details.title }}</div>
            <div>过期时间: {{ details.expDate }}</div>
          </div>
          <button
            :style="{ backgroundColor: themeStore.primary }"
            class="text-white px-[3em] py-[1em]"
            @click="copyLink"
          >
            复制共享链接
          </button>
        </div>
        <highlight
          class="w-full my-[20px]"
          :code="details.content"
          :lang="details.language"
        />
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
        <el-button
          v-if="failReason == '密码错误' || failReason == '需要密码'"
          type="primary"
          @click="back"
          >返回</el-button
        >
      </template>
    </el-result>
  </div>
</template>

<style scoped></style>
