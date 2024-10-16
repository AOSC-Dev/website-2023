<script setup>
const loading = ref(true);
const route = useRoute();
const details = ref(null);
const imgSuffixList = ['jpg', 'jpeg', 'png', 'gif'];
const failReason = ref('');

const themeStore = useThemeStore();

function isImg(name) {
  const suffixIndex = name.lastIndexOf('.');
  const suffix = name.substring(suffixIndex + 1);
  return imgSuffixList.find((v) => v == suffix) !== undefined;
}

function getAttachUrl(name) {
  return `/pasteContent/${route.query.id}/files/${name}`;
}

const getPaste = async () => {
  let [res, err] = await requestGetJson('/pasteApi/paste', {
    id: route.query.id
  });
  if (res) {
    const results = res.data;
    if (results.code != 0) {
      failReason.value = results.message;
    } else {
      details.value = results.data;
    }
  } else {
    console.log('获取异常', err);
    failReason.value = '获取粘贴板异常（服务器内部错误）';
  }
  console.log(res);
  loading.value = false;
};

getPaste();

const back = () => {
  failReason.value = '';
};
const returnHref = () => window.location.href;
</script>

<template>
  <div class="pl-[1px] w-[100%]" v-loading="loading">
    <div v-if="details != null">
      <category-second title="公共粘贴板" />
      <div class="p-[2em]">
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div>
              <div>标题: {{ details.title }}</div>
              <div>过期时间: {{ details.expDate }}</div>
            </div>
            <button
              class="text-white px-[3em] theme-bg-color-primary-static py-[1em]"
              @click="copyToClipboard(returnHref())">
              复制共享链接
            </button>
          </div>
          <ul class="el-upload-list el-upload-list--text">
            <li
              class="el-upload-list__item is-ready"
              v-for="filename in details.fileList"
              :key="filename">
              <div class="items-center flex">
                <el-icon class="mr-2"><Document /></el-icon>
                <span
                  ><img
                    :src="getAttachUrl(filename)"
                    class="w-full"
                    v-if="isImg(filename)" />
                  <a
                    v-else
                    class="text-link"
                    :href="getAttachUrl(filename)"
                    target="_blank"
                    >{{ filename }}</a
                  ></span
                ></div
              ></li
            >
          </ul>
        </div>
        <CodeHighlight
          class="bg-[#ccccccc3]/15 mt-4 justify-between"
          button-class="mr-8"
          :button-color="themeStore.primary"
          :code-text="details.content"
          :language="details.language" />
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
