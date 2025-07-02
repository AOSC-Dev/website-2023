<script setup>
const route = useRoute();

const featuresRef = useTemplateRef('features');
const switchHash = () => {
  switch (route.hash) {
    case '#features':
      highlightElement(featuresRef);
      break;
  }
};
useHighlightWatch(switchHash);

const { tm } = useI18n();
const textValue = tm('afterglow.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const navigationList = [
  useHIndex(localLink.download, 1),
  linkValue.thisPageFeatures,
  localLink.afterglowRelnote,
  useHIndex(localLink.afterglowRequirements, 0),
  linkValue.thisPageSupport
];

const docList = [
  useHIndex(useTIndex(localLink.afterglowRequirements, 1), 0),
  localLink.afterglowIsa
];
</script>

<template>
  <div>
    <CategorySecond :title="textValue.title1" />
    <div class="p-6">
      <p class="mb-[1.5rem]">
        {{ textValue.p1 }}
      </p>
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div id="bgImg" ref="bgImg">
        <img src="/afterglow/afterglow.jpg" class="mt-2 h-auto w-full" alt="" />
      </div>
    </div>

    <CategorySecond id="features" :title="textValue.title2" />
    <div ref="features" class="p-6">
      <AppH2>{{ textValue.subheading1 }}</AppH2>
      <p>{{ textValue.p2 }}</p>
      <AppH2>{{ textValue.subheading2 }}</AppH2>
      <p>{{ textValue.p3 }}</p>
      <AppH2>{{ textValue.subheading3 }}</AppH2>
      <p>{{ textValue.p4 }}</p>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped>
.features:nth-of-type(1) {
  margin-top: 0;
}
#bgImg {
  aspect-ratio: 4/3;
}
</style>
./components/Header.vue
