<script setup>
import { useRoute } from 'vue-router';
import CategorySecond from './CategorySecond.vue';
import { onMounted, ref } from 'vue';
import AppLink from './AppLink.vue';

const route = useRoute();
const curUrl = ref('');

onMounted(() => {
  curUrl.value = route.path;
});
</script>
<template>
  <div class="pl-[1px]">
    <category-second title="错误页" />
    <div class="p-[20px]">
      <h1 class="text-4xl font-bold"
        >找不到页面 (404)</h1
      >
      <p class="my-[20px]"
        >您想要访问的页面：{{
          curUrl
        }}
        在站点上不存在。请检查您输入的网页地址
        (URL) 是否正确。</p
      >
      <p
        >如果该页面链接是其他网页中所引用的，请
        <AppLink
          target="_blank"
          to="https://aosc.io/contact/"
          >与我们联系</AppLink
        >。
      </p>
    </div>
  </div>
</template>

<style scoped></style>
