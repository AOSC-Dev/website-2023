<script setup>
import dayjs from 'dayjs';
import hljs from 'highlight.js/lib/core';

const { tm } = useI18n();
const textValue = tm('paste.index');
// const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title1 });

const languageList = ref(hljs.listLanguages());

const router = useRouter();
const pasteFormData = ref({
  title: '',
  content: '',
  language: 'plaintext',
  // 如果不选择日期，默认保留一周
  expDate: dayjs().add(7, 'day').format('YYYY-MM-DD')
});
const getFormDataSize = () =>
  Object.values(pasteFormData.value).reduce(
    (size, value) =>
      size + (typeof value === 'string' ? value.length : value.size),
    0
  );

const getToailFileSize = () =>
  selectedFileList.value.reduce((size, value) => size + value.size, 0);

const pasteRes = ref(null);
const submiting = ref(false);
const submit = async () => {
  if (pasteFormData.value.content == '') {
    ElMessage.error(textValue.message1);
    return;
  }
  const formdataSize = getFormDataSize();
  const toailFileSize = getToailFileSize();
  if (getFormDataSize() + getToailFileSize() > 10485760) {
    ElMessage.error({
      showClose: true,
      duration: 10000,
      message: `${textValue.message2[0]}${formdataSize}B (${BToMB(formdataSize)}MiB)${textValue.message2[1]}${toailFileSize}B (${BToMB(toailFileSize)}MiB)`
    });
  }
  submiting.value = true;
  const formdata = new FormData();

  formdata.append('title', pasteFormData.value.title);
  formdata.append('content', pasteFormData.value.content);
  formdata.append('language', pasteFormData.value.language);
  selectedFileList.value.forEach((file) => {
    formdata.append('fileList', toRaw(file.raw), file.name);
  });
  formdata.append('expDate', pasteFormData.value.expDate);
  const [res, err] = await requestPostJson('/pasteApi/paste', formdata);
  if (res) {
    const results = res.data;
    if (results.code == 0) {
      pasteRes.value = results.data.id;
      router.push({
        path: '/paste/detail',
        query: {
          id: results.data.id
        }
      });
    } else {
      alert(results.message);
    }
  } else {
    if (err.status === 413) {
      ElMessage.error({
        showClose: true,
        duration: 10000,
        message: `${textValue.message3}`
      });
    }
  }
  submiting.value = false;
};

const selectedFileList = ref([]);

const handleChange = (uploadFile, uploadFiles) => {
  const formdataSize = getFormDataSize();
  const toailSize = uploadFiles.reduce((size, file) => size + file.size, 0);
  if (formdataSize + toailSize > 10485760) {
    ElMessage.error({
      showClose: true,
      duration: 10000,
      message: `${textValue.message4[0]}'${uploadFile.name}'${textValue.message4[1]}`
    });
    selectedFileList.value.pop();
    // showSize();
  } else ElMessage.success(`${textValue.message5}'${uploadFile.name}'`);
};
</script>

<template>
  <div v-loading="submiting">
    <category-second :title="textValue.title1" />
    <div class="px-[10%] py-[30px]">
      <div class="mb-[10px] flex justify-between">
        <div class="flex">
          <select
            v-model="pasteFormData.language"
            filterable
            class="theme-border-primary mr-[20px] rounded-none border-2">
            <option v-for="item in languageList" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
          <input
            v-model="pasteFormData.expDate"
            required
            type="date"
            class="theme-border-primary rounded-none border-2"
            :min="dayjs().add(1, 'day').format('YYYY-MM-DD')" />
        </div>
        <button
          class="theme-bg-color-secondary-primary rounded-none px-[50px] py-[10px] text-white"
          @click="submit">
          {{ textValue.button1 }}
        </button>
      </div>
      <input
        v-model="pasteFormData.title"
        type="text"
        class="theme-border-primary mb-[10px] w-full rounded-none border-2 py-[10px]"
        :placeholder="textValue.placeholder1" />
      <!-- 内容编辑器 -->
      <LazyMonacoEditor
        v-model="pasteFormData.content"
        hydrate-on-visible
        class="theme-border-primary h-[50vh] rounded-none border-2"
        :lang="pasteFormData.language" />
      <!-- 文件选择器 -->
      <el-upload
        v-model:file-list="selectedFileList"
        class="upload-demo my-[10px]"
        :auto-upload="false"
        :on-change="handleChange"
        drag
        multiple>
        <div class="my-[-26px] h-[26px]">
          <el-icon size="24"><el-icon-upload-filled /></el-icon>
          <div ref="div1" class="el-upload__text">
            {{ textValue.div1[0] }} <em>{{ textValue.div1[1] }}</em>
          </div>
        </div>
      </el-upload>
    </div>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
}

input {
  padding: 5px;
}

select {
  padding: 5px;
}
</style>
