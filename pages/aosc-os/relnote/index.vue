<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.relnote.index');
const linkValue = tm('allUniversalLink');
// const localLink = linkValue.local;
useHead({ title: textValue.title1 });

const issuanceNoteRef = useTemplateRef('issuance-note');
const route = useRoute();
const switchHash = () => {
  switch (route.hash) {
    case '#issuance-note':
      highlightElement(issuanceNoteRef);
      break;
  }
};
useHighlightWatch(switchHash);

onMounted(() => {
  switchHash();
});
</script>

<template>
  <div class="container-p">
    <category-second id="issuance-note" :title="textValue.title1" />
    <div ref="issuance-note" class="p-6">
      <p>{{ textValue.p1 }}</p>
      <p>{{ textValue.p2 }}</p>
      <p
        ><b>{{ textValue.b1 }}</b></p
      >
    </div>

    <category-second id="platform-support" :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p3 }}</p>
      <div class="px-16 pt-2 pb-4">
        <app-ul-ordinary :lis="textValue.ul1.li" my-key="aosc-os-relnote-1" />
      </div>
    </div>

    <category-second id="architectural-changes" :title="textValue.title3" />
    <div class="p-6">
      <p
        >{{ textValue.p4[0] }}<code>{{ textValue.p4[1] }}</code
        >{{ textValue.p4[2] }}</p
      >
      <div class="px-16 pt-2 pb-4">
        <app-ul-ordinary :lis="textValue.ul2.li" my-key="aosc-os-relnote-2" />
      </div>
    </div>

    <category-second id="component-updates" :title="textValue.titl4" />
    <div class="p-6">
      <p>{{ textValue.p5 }}</p>
      <div class="px-16 pt-2 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul3.li"
            :key="`aosc-os-relnote-3-li-${index}`"
            ><template v-if="index === 1"
              ><link-standard
                :link="useTIndex(linkValue.omaSourceGithub, 1)" />{{
                item
              }}</template
            ><template v-else-if="index === 2"
              ><link-standard
                :link="useTIndex(linkValue.liblol.sourceHomepage, 1)" />{{
                item[0]
              }}<code>statx()</code>{{ item[1] }}<code>lxstat64()</code
              >{{ item[2] }}</template
            ><template v-else-if="index === 8"
              >{{ item[0] }}<code>ssh-agent.service</code
              >{{ item[1] }}</template
            ><template v-else-if="index === 9"
              >{{ item[0] }}<code>x11-app</code>{{ item[1] }}<code>x11perf</code
              >{{ item[2] }}</template
            ><template v-else>{{ item }}</template></li
          >
        </ul>
      </div>
    </div>

    <category-second id="bugfixes" :title="textValue.title5" />
    <div class="p-6">
      <p>{{ textValue.p6 }}</p>
      <div class="px-16 pt-2 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul4.li"
            :key="`aosc-os-relnote-4-li-${index}`"
            ><template v-if="index === 2"
              >{{ item[0] }}<code>$PATH</code>{{ item[1] }}</template
            ><template v-else>{{ item }}</template></li
          >
        </ul>
      </div>
    </div>

    <category-second id="installation-media" :title="textValue.title6" />
    <div class="p-6">
      <p>{{ textValue.p7 }}</p>
      <div class="px-16 pt-2 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul5.li"
            :key="`aosc-os-relnote-5-li-${index}`"
            ><template v-if="index === 1"
              >{{ item[0] }}<link-standard :link="linkValue.dkcli" />{{
                item[1]
              }}</template
            ><template v-if="index === 3"
              >{{ item[0] }}<code>live</code>{{ item[1] }}</template
            ><template v-if="index === 6"
              >{{ item[0] }}<link-standard :link="linkValue.memtest" />{{
                item[1]
              }}</template
            ><template v-else>{{ item }}</template></li
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
