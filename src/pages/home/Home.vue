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
      

      <div class="main-content flex pb-[20px] flex-1 justify-center">
        <div class="content-container shadow flex">
          <div class="min-w-[12rem] w-[15%] *:text-nowrap sticky top-0 bg-leftbar-bg">
            <LeftBar class="min-w-[100%] *:text-nowrap sticky top-0" />
          </div>

          <router-view
            class="flex-1"
            style="scrollbar-gutter: stable"
          ></router-view>
        </div>
      </div>
    </div>
    <Footer class="fixed bottom-0" />
  </div>
</template>

<style scoped>
@media (max-width: 960px) {
	.bg-floral {
		background-image: none !important;
	}
}
.bg-floral {
  background-color: #fffbf5;
  background-image: url(/assets/backgrounds/floral.svg);
  background-position: center;
  background-attachment: fixed;
}
</style>
