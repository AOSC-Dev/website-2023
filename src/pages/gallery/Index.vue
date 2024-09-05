<script setup>
import { ref } from "vue";
import yaml from "js-yaml";
import CategorySecond from "/src/components/CategorySecond.vue";
import { useThemeStore } from "../../stores/miscellaneous";
import { requestGetJson } from "../../utils/utils";

const themeStore = useThemeStore()

const galleryList = ref([]);

(async () => {
  let [res, err] = await requestGetJson("/gallery.yml");
  if (res) {
    galleryList.value = yaml.load(res.data);
  } else if (err) {
    console.log(err);
  }
})()

const curGallery = ref({});
const curIndex = ref(0);
const showBig = ref(false);
function clickImg(gallery, index) {
  curGallery.value = gallery;
  curIndex.value = index;
  showBig.value = true;
}

function closeBigImg() {
  console.log("关闭图片预览");
  showBig.value = false;
}
</script>

<template>
  <div>
    <div v-for="gallery in galleryList.gallery" :key="gallery.title" class="pl-[1px]">
      <category-second :title="gallery.title" class="sticky top-0" />
      <div class="grid grid-cols-4 gap-2 p-2">
        <div v-for="(photo, index) in gallery.album" :key="photo.file">
          <img loading="lazy" :src="`https://aosc.io/assets/i/gallery/thumbs/${photo.file}.jpg`" :alt="photo.desc"
            class="cursor-pointer w-[100%] max-w-[100%] object-cover aspect-video" @click="clickImg(gallery, index)" />
        </div>
      </div>
    </div>

    <!-- 弹出框 -->
    <div v-if="showBig" class="fixed content-center top-0 left-0 w-[100vw] h-[100vh] bg-gray/[.9]">
      <el-carousel height="100vh" indicator-position="outside" style="z-index: 1" :initial-index="curIndex"
        :autoplay="false">
        <el-carousel-item v-for="photo in curGallery.album" :key="photo.file" :label="photo.desc">
          <div class="flex justify-center w-[100%] h-[100%]">
            <img class="w-[100%] h-[auto] object-contain" :src="`https://aosc.io/assets/i/gallery/${photo.file}`"
              :alt="photo.desc" />
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 关闭按钮 -->
      <div class="fixed top-[20px] right-[20px] p-[2px] rounded-full cursor-pointer z-[999]"
        :style="{ backgroundColor: themeStore.primary }" @click="closeBigImg">
        <v-icon scale="1.5" fill="#fff" name="io-close-circle-outline" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-carousel ::v-deep(.el-carousel__indicators--outside li button) {
  display: none;
}

.gallery-modal {
  background-color: #999;
}
</style>
