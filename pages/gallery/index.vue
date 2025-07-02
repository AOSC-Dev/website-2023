<script setup>
import yaml from 'js-yaml';

const galleryList = ref([]);

const { data } = await useFetch('http://localhost:3001/gallery.yml');
galleryList.value = yaml.load(data.value);

const curGallery = ref({});
const curIndex = ref(0);
const showBig = ref(false);
function clickImg(gallery, index) {
  curGallery.value = gallery;
  curIndex.value = index;
  showBig.value = true;
}

function closeBigImg() {
  showBig.value = false;
}
</script>

<template>
  <div>
    <div v-for="gallery in galleryList.gallery" :key="gallery.title">
      <category-second :title="gallery.title" class="sticky top-0" />
      <div class="grid grid-cols-4 gap-2 p-2">
        <div v-for="(photo, index) in gallery.album" :key="photo.file">
          <img
            loading="lazy"
            :src="`/galleryFile/thumbs/${photo.file}.jpg`"
            :alt="photo.desc"
            class="aspect-video w-[100%] max-w-[100%] cursor-pointer object-cover"
            @click="clickImg(gallery, index)" />
        </div>
      </div>
    </div>

    <!-- 弹出框 -->
    <div
      v-if="showBig"
      class="fixed top-0 left-0 h-[100vh] w-[100vw] content-center bg-gray/[.9]">
      <el-carousel
        height="100vh"
        indicator-position="outside"
        style="z-index: 1"
        :initial-index="curIndex"
        :autoplay="false">
        <el-carousel-item
          v-for="photo in curGallery.album"
          :key="photo.file"
          :label="photo.desc">
          <div class="flex h-[100%] w-[100%] justify-center">
            <img
              class="h-[auto] w-[100%] object-contain"
              :src="`/galleryFile/${photo.file}`"
              :alt="photo.desc" />
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 关闭按钮 -->
      <div
        class="theme-bg-color-primary-static fixed top-[20px] right-[20px] z-999 cursor-pointer rounded-full p-[2px]"
        @click="closeBigImg">
        <!-- <v-icon scale="1.5" fill="#fff" name="io-close-circle-outline" /> -->
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
