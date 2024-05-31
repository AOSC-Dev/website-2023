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
        <div class="min-w-[15%] *:text-nowrap sticky top-0 bg-leftbar-bg">
          <LeftBar class="min-w-[100%] *:text-nowrap sticky top-0" />
        </div>

        <router-view
          class="flex-1"
          style="scrollbar-gutter: stable"
        ></router-view>
      </div>
    </div>
    <Footer class="fixed bottom-0" />
  </div>
</template>

<style scoped></style>
