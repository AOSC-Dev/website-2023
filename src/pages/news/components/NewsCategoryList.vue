<script setup>
const props = defineProps(['newsList'])
</script>

<template>
  <div>
    <div v-if="props.newsList == undefined || props.newsList.length == 0">
      暂无数据
    </div>
    <ul v-else class="list-disc">
      <li v-for="item in newsList" :key="item.title">
        <router-link :to="`/news/detail/${item.Path}`" class="text-link">
          <span>[{{ item.Date }}]</span>
          {{ item.Title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>