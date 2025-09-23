<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const imgSuffixList = ['jpg', 'jpeg', 'png', 'gif'];

const { tm } = useI18n();
const textValue = tm('paste.detail');
useHead({ title: textValue.pageTitle });
// FIXME: `useRobotsRule({ noindex: true, nofollow: true })` generates
// `<meta name="robots" content="[object Object]">` currently
useRobotsRule('noindex, nofollow');

const isImg = (name) => {
  const suffixIndex = name.lastIndexOf('.');
  const suffix = name.substring(suffixIndex + 1);
  return imgSuffixList.find((v) => v === suffix) !== undefined;
};

const { data, status } = await useAsyncData(
  route.fullPath,
  () =>
    Promise.all([
      $fetch(`${config.public.pasteApi}/${route.query.id}`),
      $fetch(`${config.public.pasteApi}/${route.query.id}/content`)
    ]),
  { server: false }
);

const details = computed(() => data.value?.[0].msg);
const failReason = computed(() =>
  data.value?.[0].code !== 0 ? (data.value?.[0].msg ?? textValue.promptFetchError) : ''
);

const returnHref = () => window.location.href;
</script>

<template>
  <ShowLoading
    :is-ready="status === 'success' || status === 'error'"
    class="w-[100%]">
    <div v-if="status === 'success' && data?.[0]?.code === 0">
      <category-second :title="textValue.pageTitle" />
      <div class="flex flex-col p-[2em]">
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div>
              <div ref="div1">{{ textValue.pasteTitle + details.title }}</div>
              <div ref="div2">
                {{
                  textValue.pasteExpiration +
                  new Date(details.expiration*1000).toISOString().split('T')[0]
                }}
              </div>
            </div>
            <button
              class="theme-bg-color-primary-static cursor-pointer px-[3em] py-[1em] text-white"
              @click="
                copyToClipboard(returnHref(), textValue.pasteShareLink)
              ">
              {{ textValue.buttonCopyLink }}
            </button>
          </div>
          <ul class="el-upload-list el-upload-list--text">
            <li
              v-for="url in details.attachments"
              :key="url"
              class="el-upload-list__item is-ready">
              <div class="flex items-center">
                <el-icon class="mr-2">
                  <ElIconDocument />
                </el-icon>
                <span>
                  <img v-if="isImg(url)" :src="url" class="w-full" />
                  <AppLink v-else :to="url" target="_blank">
                    {{ url }}
                  </AppLink>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <LazyMonacoEditor
          v-model="data[1]"
          :options="{ readOnly: true }"
          hydrate-on-visible
          class="theme-border-primary h-[50vh] rounded-none border-2"
          :lang="details.language" />

        <button
          class="theme-bg-color-primary-static mt-[10px] ml-auto cursor-pointer px-[3em] py-[1em] text-white"
          @click="copyToClipboard( details.content, textValue.pasteFullContent)">
          {{ textValue.buttonCopyFullContent }}
        </button>
      </div>
    </div>
    <el-result v-else icon="warning" :title="failReason" />
  </ShowLoading>
</template>

<style scoped></style>
