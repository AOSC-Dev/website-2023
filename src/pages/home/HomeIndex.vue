<script setup>
import HeaderBar from './components/HeaderBar.vue';
import LeftBar from './components/LeftBar.vue';
import FooterBar from './components/FooterBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-[100vh] min-w-[960px]">
    <div
      class="my-0 flex h-[calc(100vh-2rem)] flex-col overflow-y-auto p-0"
      style="scrollbar-gutter: stable both-edges">
      <HeaderBar class="ml-[calc(50%-50vw)] w-screen" />
      <div class="main-content flex flex-1 justify-center">
        <div class="content-container mb-2 flex shadow">
          <div
            class="sticky top-0 w-[15%] min-w-[12rem] bg-leftbar-bg *:text-nowrap">
            <LeftBar class="sticky top-0 min-w-[100%] *:text-nowrap" />
          </div>

          <router-view class="flex-1" style="min-width: 0"></router-view>
        </div>
      </div>
    </div>
    <FooterBar class="h-[2rem]" />
  </div>
</template>
