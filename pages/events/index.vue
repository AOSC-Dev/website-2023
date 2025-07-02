<script setup>
const { tm } = useI18n();
const textValue = tm('events.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const route = useRoute();
const aosccRef = useTemplateRef('aoscc');
const campusRef = useTemplateRef('campus');
const springconRef = useTemplateRef('springcon');
const othersRef = useTemplateRef('others');
const switchHash = () => {
  switch (route.hash) {
    case '#aoscc':
      highlightElement(aosccRef);
      break;
    case '#campus':
      highlightElement(campusRef);
      break;
    case '#springcon':
      highlightElement(springconRef);
      break;
    case '#others':
      highlightElement(othersRef);
      break;
  }
};
useHighlightWatch(switchHash);

const evelink = localLink.events;
const navigationList = [
  useTIndex(useHIndex(evelink, 0), 2),
  useTIndex(useHIndex(evelink, 1), 3),
  useTIndex(useHIndex(evelink, 2), 4),
  useTIndex(useHIndex(evelink, 3), 5)
];

const ul1TextLinks = textValue.ul1.link;

const lis2 = textValue.ul2.li.map((obj) => {
  obj.link.url = linkValue.bilibili.url + obj.link.url;
  return obj;
});

const lis4 = textValue.ul4.li.map((obj) => {
  obj.link.url = linkValue.bilibili.url + obj.link.url;
  return obj;
});

const lis5 = textValue.ul5.li.map((obj, index) => {
  if (index < 2) obj.link.url = linkValue.bilibili.url + obj.link.url;
  else obj.link.url = linkValue.aoscDocumentation.url + obj.link.url;
  return obj;
});
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>{{ textValue.p1 }} </p>
      <p> {{ textValue.p2 }} </p>
      <p>
        <AccordionNavigation :navigation-list="navigationList" />
      </p>
    </div>

    <category-second id="aoscc" :title="textValue.title2" />
    <div ref="aoscc" class="p-6">
      <p>
        {{ textValue.p3 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul1.b"
            :key="`events-index-1-li-${index}`"
            ><b>{{ item }}</b
            ><template
              v-if="
                index < textValue.ul1.b.length - 2 &&
                index !== textValue.ul1.b.length - 4
              "
              ><AppLink
                :to="linkValue.aosccWiki.url + ul1TextLinks[index][1]"
                >{{ ul1TextLinks[index][0] }}</AppLink
              ></template
            ><template v-else>{{ ul1TextLinks[index] }}</template></li
          >
        </ul>
      </div>
    </div>

    <category-second id="campus" :title="textValue.title3" />
    <div ref="campus" class="p-6">
      <p> {{ textValue.p4 }} </p>
      <p> {{ textValue.p5 }} </p>
      <div class="pl-[4rem]">
        <app-ul-b-and-link :lis="lis2" my-key="events-index-2-li" />
      </div>
      <p class="pt-[1rem]"> {{ textValue.p6 }} </p>
      <div class="pt-[1rem] pl-[3rem]">
        <li
          v-for="(item, index) in textValue.ul3.li"
          :key="`events-index-3-li-${index}`"
          ><b>{{ item[0] }}</b
          >{{ item[1] }}</li
        >
      </div>
    </div>

    <category-second id="springcon" :title="textValue.title4" />
    <div ref="springcon" class="p-6">
      <p>
        {{ textValue.p7 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <app-ul-b-and-link :lis="lis4" my-key="events-index-4-li" />
      </div>
    </div>

    <category-second id="others" :title="textValue.title5" />
    <div ref="others" class="p-6">
      <p>
        {{ textValue.p8 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <app-ul-b-and-link :lis="lis5" my-key="events-index-5-li" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
