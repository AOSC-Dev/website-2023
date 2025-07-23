<script setup>
const { tm } = useI18n();
const textValue = tm('internship.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title1 });

const navigationList = [
  useTIndex(useHIndex(localLink.internship, 0), 2),
  useTIndex(useHIndex(localLink.internship, 1), 3)
];
const route = useRoute();
const todoRef = useTemplateRef('todo');
const osppRef = useTemplateRef('ospp');
const switchHash = () => {
  switch (route.hash) {
    case '#todo':
      highlightElement(todoRef);
      break;
    case '#ospp':
      highlightElement(osppRef);
      break;
  }
};
useHighlightWatch(switchHash);

const summerOfOpenSource = textValue.summerOfOpenSource.map((obj) => {
  obj.url = linkValue.summerOspp.url + obj.url;
  return obj;
});
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p
        v-for="(item, index) in textValue.ps1"
        :key="`internship-index-1-ps-${index}`">
        {{ item }}
      </p>
      <p>
        <AccordionNavigation :navigation-list="navigationList" />
      </p>
    </div>

    <category-second id="todo" :title="localLink.internship.title[2]" />
    <div ref="todo" class="p-6">
      <p>
        {{ textValue.p1 }}
        <link-standard :link="linkValue.local.contact" />
        {{ textValue.p2 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul1.li"
            :key="`internship-index-1-li-${index}`">
            <b>{{ item[0] }}</b>
            {{ item[1] }}
          </li>
        </ul>
      </div>
    </div>

    <category-second id="ospp" :title="localLink.internship.title[3]" />
    <div ref="ospp" class="p-6">
      <p>
        {{ textValue.p3 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul2.li"
            :key="`internship-index-1-li-${index}`">
            <b>{{ textValue.ul2.header + item + '：' }}</b>
            <link-standard :link="summerOfOpenSource[index]" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
