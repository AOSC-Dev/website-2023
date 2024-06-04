<script setup>
import {toUrl} from '/src/utils/utils.js'

const props = defineProps(["newsList"]);
</script>

<template>
  <div class="py-5">
    <div v-if="props.newsList == undefined || props.newsList.length == 0">
      暂无数据
    </div>
    <div v-else class="">
      <div v-for="item in newsList" :key="item.title" class="my-2">
        <div @click="toUrl(`/news/detail/${item.Path}`)" class="hover:bg-leftbar-bg flex cursor-pointer pl-6">
          <span class="truncate flex-1">
            {{ item.Title }}
          </span>
          <span class="flex-0 pr-6">[{{ item.Date }}]</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
