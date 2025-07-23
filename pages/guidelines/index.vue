<script setup>
const { tm } = useI18n();
const textValue = tm('guidelines.index');
const linkValue = tm('allUniversalLink');
const locallink = linkValue.local;
useHead({ title: textValue.title1 });
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p class="pb-[1rem]">{{ textValue.p1 }}</p>
      <i>&nbsp;&nbsp;{{ textValue.i1 }}</i>
      <p class="py-2">
        {{ textValue.p2 }}
        <link-standard :link="linkValue.CambridgeED" />
      </p>
      <p>
        {{ textValue.p3 }}
      </p>
    </div>

    <category-second id="rationale" :title="textValue.title2" />
    <div class="p-6">
      <p>
        {{ textValue.p4 }}
        <b>{{ textValue.b1 }}</b>
      </p>
    </div>

    <category-second id="principles" :title="textValue.title3" />
    <div class="p-6">
      <p class="pb-[1rem]">
        {{ textValue.p5 }}
        <b>{{ textValue.b2 }}</b>
        {{ textValue.p6 }}
      </p>
      <ul class="list-disc pl-10">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`guidelines-index-1-li-${index}`">
          {{ item[0] }}
          <b>{{ item[1] }}</b>
          {{ item[2] }}
        </li>
      </ul>
    </div>

    <category-second id="overview" :title="textValue.title4" />
    <div class="p-6">
      <p>
        {{ textValue.p7 }}
        <b>
          {{ textValue.b3 }}
          <link-standard :link="linkValue.AOSCWiki" />
          {{ textValue.p8 }}
          <link-standard :link="linkValue.GitHub" />
          {{ textValue.p9 }}
          <link-standard :link="locallink.home" />
          {{ textValue.p10 }}
        </b>
      </p>

      <p class="pb-[1rem]">{{ textValue.p11 }}</p>
      <ul class="list-disc pl-10">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`guidelines-index-2-li-${index}`">
          <template v-if="Array.isArray(item)">
            {{ item[0] }}
            <b>{{ item[1] }}</b>
            {{ item[2] }}
          </template>
          <template v-else>{{ item }}</template>
        </li>
      </ul>
    </div>

    <category-second :title="textValue.title5" />
    <div id="codes" class="p-6">
      <app-h2>{{ textValue.subheading1 }}</app-h2>
      <p class="pb-2">
        {{ textValue.p12 }}
        <link-standard :link="linkValue.AOSCWiki" />
        {{ textValue.p8 }}
        <link-standard :link="linkValue.GitHub" />
        {{ textValue.p9 }}
        <link-standard :link="locallink.home" />
        {{ linkValue.aPeriod }}
      </p>

      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li>
          {{ textValue.p14 }}
          <link-standard :link="linkValue.aoscReceptionPoint" />
          {{ textValue.p15 }}
          <b>{{ textValue.b4 }}</b>
          {{ textValue.p16 }}
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          {{ textValue.p17 }}
          <b>{{ textValue.p18 }}</b>
          {{ textValue.p19 }}
        </li>
        <ul class="list-disc pl-10">
          <li>
            {{ textValue.clean[0] }}
            <b>{{ textValue.p37 }}</b>
            {{ textValue.clean[1] }}
          </li>
        </ul>
        <li>
          {{ textValue.p17 }}
          <b>{{ textValue.p18 }}</b>
          {{ textValue.p20 }}
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.p21 }}</li>
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          {{ textValue.p17 }}
          <b>{{ textValue.p18 }}</b>
          {{ textValue.p22 }}
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          {{ textValue.p17 }}
          <b>{{ textValue.p18 }}</b>
          {{ textValue.p23 }}
          <link-standard :link="linkValue.AOSCPastebin" />
          {{ textValue.p24 }}
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          {{ textValue.p17 }}
          <b>{{ textValue.p18 }}</b>
          {{ textValue.p25 }}
        </li>
        <ul class="list-disc pl-10">
          <li>
            {{ textValue.clean[0] }}
            <b>{{ textValue.p37 }}</b>
            {{ textValue.clean[1] }}
          </li>
        </ul>
      </ul>

      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <template
          v-for="(item, index) in textValue.ul4.li"
          :key="`guidelines-4-li-${index}`">
          <li>{{ item }}</li>
          <template v-if="index !== 1">
            <app-ul-ordinary
              class="list-disc pl-10"
              :lis="textValue.ul4[`ul${index + 1}`].li"
              :my-key="`guidelines-index-4-${index}`" />
          </template>
          <template v-else>
            <ul class="list-disc pl-10">
              <li>
                {{ textValue.ul4[`ul${index + 1}`].li[0][0] }}
                <link-standard :link="linkValue.AOSCStickerPack" />
                {{ textValue.ul4[`ul${index + 1}`].li[0][1] }}
              </li>
            </ul>
          </template>
        </template>
      </ul>

      <app-h2>{{ textValue.subheading4 }}</app-h2>
      <ul class="list-decimal pt-2 pb-2 pl-10">
        <li
          v-for="(item, index) in textValue.ul5.li"
          :key="`guidelines-index-5-li-${index}`">
          {{ item }}
        </li>
      </ul>
      <p class="pb-2">{{ textValue.p26 }}</p>

      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li
          v-for="(item, index) in textValue.ul6.li"
          :key="`guidelines-index-6-li-${index}`">
          {{ item }}
          <app-ul-ordinary
            class="list-disc pl-10"
            :lis="textValue.ul6[`ul${index + 1}`].li"
            :my-key="`guidelines-index-6-${index}`" />
        </li>
      </ul>

      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li
          v-for="(item, index) in textValue.ul7.li"
          :key="`guidelines-index-7-li-${index}`">
          {{ item }}
        </li>
      </ul>

      <app-h2>{{ textValue.subheading5 }}</app-h2>
      <p class="pb-2">{{ textValue.p27 }}</p>

      <app-h2>{{ textValue.subheading6 }}</app-h2>
      <p>{{ textValue.p28 }}</p>
      <ul class="list-disc pt-2 pb-2 pl-10">
        <li
          v-for="(item, index) in textValue.ul8.li"
          :key="`guidelines-index-8-li-${index}`">
          {{ item }}
        </li>
      </ul>
      <p>{{ textValue.p29 }}</p>
    </div>

    <category-second :title="textValue.title6" />
    <div id="against-coc" class="p-6">
      <p>
        {{ textValue.p30 }}
        <link-standard :link="linkValue.contributorConvention" />
        {{ textValue.p31 }}
      </p>
      <p>{{ textValue.p32 }}</p>
      <p>{{ textValue.p33 }}</p>
      <p>
        <b>{{ textValue.b5 }}</b>
      </p>
      <p>{{ textValue.p34 }}</p>
      <p>{{ textValue.p35 }}</p>
      <p>
        <b>{{ textValue.b6 }}</b>
      </p>
      <p class="mb-10">{{ textValue.p36 }}</p>
    </div>
  </div>
</template>

<style scoped>
#codes > p {
  margin: auto;
}
</style>
./components/Header.vue
