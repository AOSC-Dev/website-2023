<script setup>
import Header from "./components/Header.vue";
import LeftBar from "./components/LeftBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="bg-floral p-0 my-0 min-h-[100vh] flex flex-col">
      <Header />
      <div class="main-content flex pb-[20px] flex-1">
        <div class="horizontal-spacer"></div>
        <div class="content-container flex">
          <div class="min-w-[15%] *:text-nowrap sticky top-0 bg-leftbar-bg">
            <LeftBar class="min-w-[100%] *:text-nowrap sticky top-0" />
          </div>

          <router-view
            class="flex-1"
            style="scrollbar-gutter: stable"
          ></router-view>
        </div>
        <div class="horizontal-spacer"></div>
      </div>
    </div>
    <Footer class="fixed bottom-0" />
  </div>
</template>

<style scoped>
.bg-floral {
	background-color: #fffbf5;
	background-image: url(/assets/backgrounds/floral.svg);
	background-position: center;
	background-attachment: fixed;
}
.horizontal-spacer {
  flex-grow: 1;
}
.content-container {
  width: 70%;
  min-width: 1024px;
  max-width: 1280px;
  flex: 0 0 100%;
  background: #fafafa;
  box-shadow: 0px 0px 10px #999;
}
</style>
