<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const route = useRoute();

const featuresRef = useTemplateRef('features');

const navigationList = [
  useHIndex(localLink.download, 0),
  linkValue.thisPageFeatures,
  useHIndex(localLink.aoscRelnote, 0),
  useHIndex(localLink.aoscRequirements, 0),
  linkValue.thisPageSupport
];

const switchHash = () => {
  switch (route.hash) {
    case '#features':
      highlightElement(featuresRef);
      break;
  }
};
useHighlightWatch(switchHash);
const docList = [
  localLink.aoscRightForMe,
  useHIndex(useTIndex(localLink.aoscRequirements, 3), 0),
  useHIndex(useTIndex(localLink.aoscIsaTableTitle, 1), 0)
];
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <div class="mt-[1.5rem]">
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div ref="bgImg" class="h-649.12">
        <img src="/aosc-os/aosc-os.jpg" class="mt-2 h-auto w-full" alt="" />
      </div>
    </div>

    <category-second id="features" :title="textValue.title2" />
    <div ref="features" class="p-6">
      <app-h2>{{ textValue.subheading1 }}</app-h2>
      <p>{{ textValue.p2 }}</p>
      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <p>{{ textValue.p3 }}</p>
      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <p>{{ textValue.p4 }}</p>
      <app-h2>{{ textValue.subheading4 }}</app-h2>
      <p>{{ textValue.p5 }}</p>
      <app-h2>{{ textValue.subheading5 }}</app-h2>
      <p>{{ textValue.p6 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
