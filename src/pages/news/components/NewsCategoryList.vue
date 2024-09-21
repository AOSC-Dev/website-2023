<script setup>
const props = defineProps({
  newsList: {
    type: Array
  }
});
</script>

<template>
  <div>
    <div
      v-if="
        props.newsList == undefined ||
        props.newsList.length == 0
      ">
      暂无数据
    </div>
    <div v-else class="flex flex-col">
      <div
        v-for="item in newsList"
        :key="item.title"
        class="newslist-item">
        <router-link
          :to="'/news/detail/' + item.Path"
          class="hover:bg-leftbar-bg flex cursor-pointer pl-6 h-[2rem] leading-8">
          <span class="truncate flex-1">
            {{ item.Title }}
          </span>
          <span class="flex-0 pr-6"
            >[{{ item.Date }}]</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newslist-item:nth-child(2n) {
  background-color: #fefaf6;
}
.newslist-item:nth-child(2n + 1) {
  background-color: white;
}
</style>
