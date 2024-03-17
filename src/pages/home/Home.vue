<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="p-0 my-0 mx-[auto] max-w-[1024px]">
      <Header />
      <div class="flex">
        <LeftBar class="w-[20%]" />
        <router-view class="w-[80%] flex-1"></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
./components/Header.vue
