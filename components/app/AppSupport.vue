<script setup>
const route = useRoute();

const props = defineProps({
  navigationList: {
    type: Array,
    required: true
  }
});
const highBrightnessControllerStore = useHighBrightnessControllerStore();

watch(
  () => highBrightnessControllerStore.obj[route.path],
  () => {
    console.log(1);
    switch (route.hash) {
      case '#support':
        highlightElement(support);
        break;
    }
  },
  {
    flush: 'post'
  }
);

const support = ref();
</script>
<template>
  <CategorySecond id="support" title="支持文档" />
  <div ref="support" class="pt-4 pb-[60px] px-16">
    <ul class="list-disc">
      <li v-for="item in navigationList" :key="item.title">
        <AppLink
          :to="
            item.url
              ? item.url
              : {
                  path: item.path,
                  hash: item.hash
                }
          "
          >{{ item.title }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
