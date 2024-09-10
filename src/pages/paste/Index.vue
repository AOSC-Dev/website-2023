<script setup>
import { ref, toRaw } from "vue";
import dayjs from "dayjs";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import hljs from "highlight.js/lib/core";
import { useThemeStore } from "../../stores/miscellaneous";
import { requestPostJson } from "../../utils/utils";

const themeStore = useThemeStore()

const languageList = ref(hljs.listLanguages());

const router = useRouter()
const selectDateTime = ref(dayjs().add(7, "day").format("YYYY-MM-DD"));
const minExpDate = ref(dayjs().add(1, "day").format("YYYY-MM-DD"));
const pasteFormData = ref({
  title: "",
  content: "",
  language: "plaintext",
  expDate: null,
});
const pasteRes = ref(null);

const linkPre = `${window.location.protocol}//${window.location.host}`;

const submiting = ref(false);
const submit = async () => {
  if (pasteFormData.value.content == '') {
    ElMessage.error('内容不能为空')
    return
  }
  submiting.value = true;
  const formdata = new FormData();

  formdata.append("title", pasteFormData.value.title);
  formdata.append("content", pasteFormData.value.content);
  formdata.append("language", pasteFormData.value.language);
  if (selectedFileList.value.length > 0) {
    selectedFileList.value.forEach((v) => {
      console.log(toRaw(v));
      formdata.append("fileList", v);
    });
  }
  if (pasteFormData.value.expDate != null) {
    formdata.append("expDate", pasteFormData.value.expDate);
  } else {
    // 如果不选择日期，默认保留一周
    const nextYear = dayjs().add(7, "day").format("YYYY-MM-DD");
    formdata.append("expDate", nextYear);
  }

  const isSuccess = ref(true);
  let [res, err] = await requestPostJson("/pasteApi/paste", formdhata)
  if (res) {
    const results = res.data;
    console.log("服务器结果: ", results);
    if (results.code == 0) {
      isSuccess.value = true;
      pasteRes.value = results.data.id;
      router.push({
        path: '/paste/detail', query: {
          id: results.data.id
        }
      })
    } else {
      alert(results.message)
    }
  } else if (err) {
    isSuccess.value = false;
    alert("网络异常")
  }
  submiting.value = false;
}

let selectedFileList = ref([]);

const editorOptions = ref({
  minimap: {
    enabled: false,
  },
});

function fileChange(event) {
  for (let i = 0; i < event.target.files.length; i++) {
    selectedFileList.value.push(event.target.files[i])
  }
}
function deleteFile(index) {
  selectedFileList.value.splice(index, 1)
}
</script>

<template>
  <div class="pl-[1px]" v-loading="submiting">
    <category-second title="公共粘贴板" />
    <div class="py-[30px] px-[100px]">
      <div class="flex justify-between mb-[10px]">
        <div class="flex">
          <select v-model="pasteFormData.language" filterable class="border-2 border-primary rounded-none mr-[20px]">
            <option v-for="item in languageList" :key="item" :value="item">
              {{ item }}
            </option>
          </select>

          <input required type="date" class="border-2 border-primary rounded-none" v-model="selectDateTime"
            :min="minExpDate" />
        </div>
        <button class="theme-bg-color-secondary-primary rounded-none px-[50px] py-[10px] text-white"
          @click="submit">
          提交
        </button>
      </div>
      <input type="text" class="border-2 border-primary rounded-none w-full mb-[10px] py-[10px]" placeholder="标题"
        v-model="pasteFormData.title" />
      <!-- 内容编辑器 -->
      <vue-monaco-editor class="border-2 border-primary rounded-none" :language="pasteFormData.language"
        v-model:value="pasteFormData.content" :options="editorOptions" height="50vh" />

      <!-- 选择文件 -->
      <label for="selectFile"
        class="theme-bg-color-secondary-primary rounded-none w-full block text-center cursor-pointer py-[10px] mt-[10px] text-white">选择附件</label>
      <input id="selectFile" type="file" class="hidden" multiple @change="fileChange" />

      <!-- 已选择的文件列表 -->
      <div v-for="(file, index) in selectedFileList" :key="file.name">
        <span class="text-primary">
          {{ file.name }}
        </span>
        <v-icon name="md-deleteforever-outlined" class="text-primary cursor-pointer" @click="deleteFile(index)" />
      </div>
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
