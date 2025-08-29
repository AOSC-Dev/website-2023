<script setup>
const route = useRoute();
const details = ref(null);
const imgSuffixList = ['jpg', 'jpeg', 'png', 'gif'];
const failReason = ref('');

const { tm, locale } = useI18n();
const textValue = tm('paste.detail');
useHead({ title: textValue.title1 });
// FIXME: `useRobotsRule({ noindex: true, nofollow: true })` generates
// `<meta name="robots" content="[object Object]">` currently
useRobotsRule('noindex, nofollow');

const isImg = (name) => {
  const suffixIndex = name.lastIndexOf('.');
  const suffix = name.substring(suffixIndex + 1);
  return imgSuffixList.find((v) => v === suffix) !== undefined;
};

const getAttachUrl = (name) => {
  return `/pasteContent/${route.query.id}/files/${name}`;
};

const isReady = ref(false);

onBeforeMount(async () => {
  const [res, _err] = await requestGetJson('/pasteApi/paste', {
    id: route.query.id
  });

  if (res) {
    const results = res.data;
    if (results.code != 0) {
      failReason.value = results.message;
    } else {
      // 此处是正常返回值
      details.value = results.data;
    }
  } else {
    failReason.value = `${textValue.message1}`;
  }
  isReady.value = true;
});

const back = () => {
  failReason.value = '';
};
const returnHref = () => window.location.href;
</script>

<template>
  <ShowLoading :is-ready="isReady" class="w-[100%]">
    <div v-if="details != null">
      <category-second :title="textValue.title1" />
      <div class="flex flex-col p-[2em]">
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div>
              <div ref="div1">{{ textValue.div1 + details.title }}</div>
              <div ref="div2">{{ textValue.div2 + details.expDate }}</div>
            </div>
            <button
              class="theme-bg-color-primary-static cursor-pointer px-[3em] py-[1em] text-white"
              @click="
                copyToClipboard(locale, returnHref(), textValue.message2)
              ">
              {{ textValue.button1 }}
            </button>
          </div>
          <ul class="el-upload-list el-upload-list--text">
            <li
              v-for="filename in details.fileList"
              :key="filename"
              class="el-upload-list__item is-ready">
              <div class="flex items-center">
                <el-icon class="mr-2">
                  <ElIconDocument />
                </el-icon>
                <span>
                  <img
                    v-if="isImg(filename)"
                    :src="getAttachUrl(filename)"
                    class="w-full" />
                  <AppLink v-else :to="getAttachUrl(filename)" target="_blank">
                    {{ filename }}
                  </AppLink>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <LazyMonacoEditor
          v-model="details.content"
          :options="{ readOnly: true }"
          hydrate-on-visible
          class="theme-border-primary h-[50vh] rounded-none border-2"
          :lang="details.language" />

        <button
          class="theme-bg-color-primary-static mt-[10px] ml-auto cursor-pointer px-[3em] py-[1em] text-white"
          @click="copyToClipboard(locale, details.content, textValue.message3)">
          {{ textValue.button3 }}
        </button>
      </div>
    </div>
    <el-result v-if="failReason != ''" icon="warning" :title="failReason">
      <template #extra>
        <el-button
          v-if="failReason === '密码错误' || failReason === '需要密码'"
          ref="button2"
          type="primary"
          @click="back">
          {{ textValue.button2 }}
        </el-button>
      </template>
    </el-result>
  </ShowLoading>
</template>

<style scoped></style>
