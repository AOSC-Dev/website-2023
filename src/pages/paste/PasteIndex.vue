<script setup>
import { ref, toRaw } from 'vue';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import hljs from 'highlight.js/lib/core';
import { requestPostJson, BToMB } from '../../utils/utils';

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
    ElMessage.error('内容不能为空');
    return;
  }
  const formdataSize = getFormDataSize();
  const toailFileSize = getToailFileSize();
  if (getFormDataSize() + getToailFileSize() > 10485760) {
    ElMessage.error({
      showClose: true,
      duration: 10000,
      message: `剪贴板大小超出了 10MiB 限制：文本占用了 ${formdataSize}B (${BToMB(formdataSize)}MiB)、附件占用了 ${toailFileSize}B (${BToMB(toailFileSize)}MiB)`
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
  let [res, err] = await requestPostJson('/pasteApi/paste', formdata);
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
        message: `提交内容大小超出了服务器限制，这可能是一个错误，请报告！`
      });
    }
  }
  submiting.value = false;
};

const selectedFileList = ref([]);

const editorOptions = ref({
  minimap: {
    enabled: false
  }
});

// const showSize = (() => {
//   let isShow = true;
//   return () => {
//     if (isShow) {
//       isShow = false;
//       const formdataSize = getFormDataSize();
//       ElMessage.error({
//         showClose: true,
//         duration: 0,
//         message: `当前文本占用了${formdataSize}B (${BToMB(formdataSize)}MB)`,
//         onClose: () => {
//           isShow = true;
//         }
//       });
//     }
//   };
// })();

const handleChange = (uploadFile, uploadFiles) => {
  const formdataSize = getFormDataSize();
  const toailSize = uploadFiles.reduce((size, file) => size + file.size, 0);
  if (formdataSize + toailSize > 10485760) {
    ElMessage.error({
      showClose: true,
      duration: 10000,
      message: `每个剪贴板大小不得超过 10MiB，上传 '${uploadFile.name}' 后会超出该限制！`
    });
    selectedFileList.value.pop();
    // showSize();
  } else ElMessage.success(`成功添加文件: '${uploadFile.name}'`);
};
</script>

<template>
  <div class="pl-[1px]" v-loading="submiting">
    <category-second title="公共粘贴板" />
    <div class="px-[100px] py-[30px]">
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
            required
            type="date"
            class="theme-border-primary rounded-none border-2"
            v-model="pasteFormData.expDate"
            :min="dayjs().add(1, 'day').format('YYYY-MM-DD')" />
        </div>
        <button
          class="theme-bg-color-secondary-primary rounded-none px-[50px] py-[10px] text-white"
          @click="submit">
          提交
        </button>
      </div>

      <input
        type="text"
        class="theme-border-primary mb-[10px] w-full rounded-none border-2 py-[10px]"
        placeholder="标题"
        v-model="pasteFormData.title" />
      <!-- 内容编辑器 -->
      <vue-monaco-editor
        class="theme-border-primary rounded-none border-2"
        :language="pasteFormData.language"
        v-model:value="pasteFormData.content"
        :options="editorOptions"
        height="50vh" />
      <!-- 文件选择器 -->
      <el-upload
        class="upload-demo my-[10px]"
        :auto-upload="false"
        v-model:file-list="selectedFileList"
        :on-change="handleChange"
        drag
        multiple>
        <div class="my-[-26px] h-[26px]">
          <el-icon size="24"><upload-filled /></el-icon>
          <div class="el-upload__text">
            将文件拖拽到此处 <em>或点击上传</em>
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
