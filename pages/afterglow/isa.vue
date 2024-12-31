<script setup>
const { tm, locale } = useI18n();
const textValue = tm('afterglow.isa');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const docList = [
  localLink.afterlowRequirementsTitle
];

const route = useRoute();

const switchHash = () => {
  switch (route.hash) {
    case '#afterlowIsaTitle':
      highlightElement(afterlowIsaListRef);
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

const afterlowIsaListRef = useTemplateRef('afterlowIsaList');
</script>

<template>
  <div>
    <category-second id="afterlowIsaTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <div ref="afterlowIsaList">
        <app-table-isa my-key="afterlow-isa-1" :table-value="textValue.table1"
      /></div>
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
