<script setup>
import { ref, toRaw } from 'vue';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import hljs from 'highlight.js/lib/core';
import { requestPostJson } from '../../utils/utils';

const languageList = ref(hljs.listLanguages());

const router = useRouter();
const selectDateTime = ref(
  dayjs().add(7, 'day').format('YYYY-MM-DD')
);
const minExpDate = ref(
  dayjs().add(1, 'day').format('YYYY-MM-DD')
);
const pasteFormData = ref({
  title: '',
  content: '',
  language: 'plaintext',
  expDate: null
});
const pasteRes = ref(null);
const submiting = ref(false);
const submit = async () => {
  if (pasteFormData.value.content == '') {
    ElMessage.error('内容不能为空');
    return;
  }
  submiting.value = true;
  const formdata = new FormData();

  formdata.append(
    'title',
    pasteFormData.value.title
  );
  formdata.append(
    'content',
    pasteFormData.value.content
  );
  formdata.append(
    'language',
    pasteFormData.value.language
  );
  selectedFileList.value.forEach((file) => {
    formdata.append(
      'fileList',
      toRaw(file.raw),
      file.name
    );
  });
  if (pasteFormData.value.expDate != null) {
    formdata.append(
      'expDate',
      pasteFormData.value.expDate
    );
  } else {
    // 如果不选择日期，默认保留一周
    const nextYear = dayjs()
      .add(7, 'day')
      .format('YYYY-MM-DD');
    formdata.append('expDate', nextYear);
  }

  const isSuccess = ref(true);
  let [res, err] = await requestPostJson(
    '/pasteApi/paste',
    formdata
  );
  if (res) {
    const results = res.data;
    if (results.code == 0) {
      isSuccess.value = true;
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
  } else if (err) {
    isSuccess.value = false;
    alert('网络异常');
  }
  submiting.value = false;
};

let selectedFileList = ref([]);

const editorOptions = ref({
  minimap: {
    enabled: false
  }
});

const handleChange = (
  uploadFile,
  uploadFiles
) => {
  if (uploadFile.size / 1024 / 1024 > 10) {
    ElMessage.error(`${uploadFile.name} 超出10MB的文件最大限制!`);
    selectedFileList.value.pop();
  } else
    ElMessage.success(
      `成功添加文件: ${uploadFile.name}`
    );
};
</script>

<template>
  <div class="pl-[1px]" v-loading="submiting">
    <category-second title="公共粘贴板" />
    <div class="py-[30px] px-[100px]">
      <div class="flex justify-between mb-[10px]">
        <div class="flex">
          <select
            v-model="pasteFormData.language"
            filterable
            class="border-2 theme-border-primary rounded-none mr-[20px]">
            <option
              v-for="item in languageList"
              :key="item"
              :value="item">
              {{ item }}
            </option>
          </select>

          <input
            required
            type="date"
            class="border-2 theme-border-primary rounded-none"
            v-model="selectDateTime"
            :min="minExpDate" />
        </div>
        <button
          class="theme-bg-color-secondary-primary rounded-none px-[50px] py-[10px] text-white"
          @click="submit">
          提交
        </button>
      </div>

      <input
        type="text"
        class="border-2 theme-border-primary rounded-none w-full mb-[10px] py-[10px]"
        placeholder="标题"
        v-model="pasteFormData.title" />
      <!-- 内容编辑器 -->
      <vue-monaco-editor
        class="border-2 theme-border-primary rounded-none"
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
        <div class="h-[26px] my-[-26px]">
          <el-icon size="24"
            ><upload-filled
          /></el-icon>
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
