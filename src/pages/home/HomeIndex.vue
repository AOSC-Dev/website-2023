<script setup>
import HeaderBar from './components/HeaderBar.vue';
import LeftBar from './components/LeftBar.vue';
import FooterBar from './components/FooterBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-[100vh] min-w-[960px]">
    <div class="my-0 flex min-h-[100vh] flex-col p-0">
      <HeaderBar />
      <div class="main-content flex flex-1 justify-center pb-[2.5rem]">
        <div class="content-container flex shadow">
          <div
            class="sticky top-0 w-[15%] min-w-[12rem] bg-leftbar-bg *:text-nowrap">
            <LeftBar class="sticky top-0 min-w-[100%] *:text-nowrap" />
          </div>

          <router-view
            class="flex-1"
            style="scrollbar-gutter: stable; min-width: 0"></router-view>
        </div>
      </div>
    </div>
    <FooterBar class="fixed bottom-0 h-[2rem]" />
  </div>
</template>
