<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="p-0 my-0 mx-[10vw]">
      <Header class="h-[15vh]" />
      <div class="flex h-[82vh]">
        <LeftBar class="w-[15%] overflow-y-auto" />
        <router-view class="w-[85%] flex-1 overflow-y-auto"></router-view>
      </div>
    </div>
    <Footer class="h-[3vh]" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
