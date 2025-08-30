<script setup>
const route = useRoute();
const imgSuffixList = ['jpg', 'jpeg', 'png', 'gif'];

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

const { data, status } = await useFetch('/pasteApi/paste', {
  query: { id: route.query.id },
  server: false
});

const details = computed(() => data.value.data);
const failReason = computed(() =>
  data.value?.code !== 0 ? (data.value?.message ?? textValue.message1) : ''
);

const returnHref = () => window.location.href;
</script>

<template>
  <ShowLoading
    :is-ready="status === 'success' || status === 'error'"
    class="w-[100%]">
    <div v-if="status === 'success' && data.code === 0">
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
    <el-result v-else icon="warning" :title="failReason" />
  </ShowLoading>
</template>

<style scoped></style>
