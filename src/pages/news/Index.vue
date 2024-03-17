<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";

</script>

<template>
  <div class="pl-[1px]">
    <img src="/assets/banners/banner_news.svg" alt="">
    <div class="flex flex-wrap *:w-1/2">
      <div class="h-[20vw] border-r-[1px] border-r-solid border-r-secondary">
        <category-second title="用户公告" class="border-r-[1px] border-r-solid border-r-white"/>
        <ul class="list-disc py-6 pl-16 pr-10">
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
        </ul>
      </div>
      <div class="h-[20vw]">
        <category-second title="安全公告" />
        <ul class="list-disc py-6 pl-16 pr-10">
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
        </ul>
      </div>
      <div class="h-[20vw] border-r-[1px] border-r-solid border-r-secondary">
        <category-second title="社区新闻" class="border-r-[1px] border-r-solid border-r-white" />
        <ul class="list-disc py-6 pl-16 pr-10">
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
        </ul>
      </div>
      <div class="h-[20vw]">
        <category-second title="社区期刊" />
        <ul class="list-disc py-6 pl-16 pr-10">
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
          <li>
            <router-link to="/" class="text-link">tmux 更新可能会导致默认行为变化【严重】</router-link>
          </li>
        </ul>
      </div>
      <div class="h-[20vw]" style="width: 100%;">
        <category-second title="社区相册" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
