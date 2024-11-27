<script setup>
const { tm, locale } = useI18n();
const textValue = tm('AppSupport');

const props = defineProps({
  navigationList: {
    type: Array,
    required: true
  }
});

const route = useRoute();
const switchHash = () => {
  switch (route.hash) {
    case '#support':
      highlightElement(supportRef);
      break;
  }
};
const highBrightnessControllerStore = useHighBrightnessControllerStore();
watch(
  () => highBrightnessControllerStore.obj[route.path.replace(/\/+$/, '')],
  () => {
    switchHash();
  },
  {
    flush: 'post'
  }
);

onMounted(() => {
  switchHash();
});

const supportRef = useTemplateRef('support');
</script>
<template>
  <CategorySecond id="support" :title="textValue.title1" />
  <div ref="support" class="pt-4 pb-[60px] px-16">
    <ul class="list-disc">
      <li
        v-for="(item, index) in navigationList"
        :key="`${route.path}-${getSpecifiedTitle(item)}-${index}`">
        <AppLink
          :to="
            item.url
              ? Number.isFinite(item.hIndex)
                ? `${item.url}${item.hash[item.hIndex]}`
                : item.url
              : `${route.path.replace(/\/+$/, '')}${item.hash}`
          "
          >{{ getSpecifiedTitle(item) }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
