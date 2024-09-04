<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-w-[960px] min-h-[100vh]">
    <div class="bg-floral p-0 my-0 min-h-[100vh] flex flex-col">
      <Header />
      <div class="main-content flex pb-[2.5rem] flex-1 justify-center">
        <div class="content-container shadow flex">
          <div class="min-w-[12rem] w-[15%] *:text-nowrap sticky top-0 bg-leftbar-bg">
            <LeftBar class="min-w-[100%] *:text-nowrap sticky top-0" />
          </div>

          <router-view
            class="flex-1"
            style="scrollbar-gutter: stable; min-width: 0;"
          ></router-view>
        </div>
      </div>
    </div>
    <Footer class="fixed bottom-0 h-[2rem]" />
  </div>
</template>

<style scoped>
.bg-floral {
  background-color: #fffbf5;
  background-image: url(../../../public/assets/backgrounds/floral.svg);
  background-position: center;
  background-attachment: fixed;
}
</style>
