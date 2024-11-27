<script setup>
const { tm, locale } = useI18n();
const textValue = tm('afterglow.isa');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const docList = [
  localLink.afterglowRequirements,
  localLink.afterLowRequirementsTitle
];

const route = useRoute();

const switchHash = () => {
  switch (route.hash) {
    case '#afterLowIsaTitle':
      highlightElement(afterLowIsaList);
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

const afterLowIsaList = ref();
</script>

<template>
  <div>
    <category-second id="afterLowIsaTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <app-table-isa
        ref="afterLowIsaList"
        my-key="afterlow-isa-1"
        :table-value="textValue.table1" />
    </div>
    <div class="p-6 mb-[1rem]">
      <p> {{ textValue.p2 }} </p>
      <p>{{ textValue.p3 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
