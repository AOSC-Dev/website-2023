<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="p-0 my-0 h-[100vh] flex flex-col">
      <Header />
      <div class="flex pb-[20px] 2xl:mx-[15vw] flex-1">
        <LeftBar class="min-w-[15%] overflow-y-hidden hover:overflow-y-auto *:text-nowrap" />
        <router-view class="flex-1" style="scrollbar-gutter: stable;"></router-view>
      </div>
    </div>
    <Footer class="fixed bottom-0" />
  </div>
</template>

<style scoped></style>
