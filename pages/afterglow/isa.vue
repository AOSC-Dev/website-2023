<script setup>
const { tm } = useI18n();
const textValue = tm('afterglow.isa');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const docList = [useHIndex(useTIndex(localLink.afterglowRequirements, 3), 0)];

const route = useRoute();

const switchHash = () => {
  switch (route.hash) {
    case '#afterlowIsaTitle':
      highlightElement(afterlowIsaListRef);
      break; 
  }
};
useHighlightWatch(switchHash);
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
    <div class="mb-[1rem] p-6">
      <p> {{ textValue.p2 }} </p>
      <p>{{ textValue.p3 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
