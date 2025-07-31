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
        <span>{{ textValue.p2 }}</span>
        <link-standard :link="linkValue.CambridgeED" />
      </p>
      <p>{{ textValue.p3 }}</p>
    </div>

    <category-second id="rationale" :title="textValue.title2" />
    <div class="p-6">
      <p>
        <span>{{ textValue.p4 }}</span>
        <b>{{ textValue.b1 }}</b>
      </p>
    </div>

    <category-second id="principles" :title="textValue.title3" />
    <div class="p-6">
      <p class="pb-[1rem]">
        <span>{{ textValue.p5 }}</span>
        <b>{{ textValue.b2 }}</b>
        <span>{{ textValue.p6 }}</span>
      </p>
      <ul class="list-disc pl-10">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`guidelines-index-1-li-${index}`">
          <span>{{ item[0] }}</span>
          <b>{{ item[1] }}</b>
          <span>{{ item[2] }}</span>
        </li>
      </ul>
    </div>

    <category-second id="overview" :title="textValue.title4" />
    <div class="p-6">
      <p>
        <span>{{ textValue.p7 }}</span>
        <b>
          <span>{{ textValue.b3 }}</span>
          <link-standard :link="linkValue.AOSCWiki" />
          <span>{{ textValue.p8 }}</span>
          <link-standard :link="linkValue.GitHub" />
          <span>{{ textValue.p9 }}</span>
          <link-standard :link="locallink.home" />
          <span>{{ textValue.p10 }}</span>
        </b>
      </p>

      <p class="pb-[1rem]">{{ textValue.p11 }}</p>
      <ul class="list-disc pl-10">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`guidelines-index-2-li-${index}`">
          <span v-if="Array.isArray(item)">
            <span>{{ item[0] }}</span>
            <b>{{ item[1] }}</b>
            <span>{{ item[2] }}</span>
          </span>
          <span v-else>{{ item }}</span>
        </li>
      </ul>
    </div>

    <category-second :title="textValue.title5" />
    <div id="codes" class="p-6">
      <app-h2>{{ textValue.subheading1 }}</app-h2>
      <p class="pb-2">
        <span>{{ textValue.p12 }}</span>
        <link-standard :link="linkValue.AOSCWiki" />
        <span>{{ textValue.p8 }}</span>
        <link-standard :link="linkValue.GitHub" />
        <span>{{ textValue.p9 }}</span>
        <link-standard :link="locallink.home" />
        <span>{{ linkValue.aPeriod }}</span>
      </p>

      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li>
          <span>{{ textValue.p14 }}</span>
          <link-standard :link="linkValue.aoscReceptionPoint" />
          <span>{{ textValue.p15 }}</span>
          <b>{{ textValue.b4 }}</b>
          <span>{{ textValue.p16 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          <span>{{ textValue.p17 }}</span>
          <b>{{ textValue.p18 }}</b>
          <span>{{ textValue.p19 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>
            <span>{{ textValue.clean[0] }}</span>
            <b>{{ textValue.p37 }}</b>
            <span>{{ textValue.clean[1] }}</span>
          </li>
        </ul>
        <li>
          <span>{{ textValue.p17 }}</span>
          <b>{{ textValue.p18 }}</b>
          <span>{{ textValue.p20 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.p21 }}</li>
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          <span>{{ textValue.p17 }}</span>
          <b>{{ textValue.p18 }}</b>
          <span>{{ textValue.p22 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          <span>{{ textValue.p17 }}</span>
          <b>{{ textValue.p18 }}</b>
          <span>{{ textValue.p23 }}</span>
          <link-standard :link="linkValue.AOSCPastebin" />
          <span>{{ textValue.p24 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>{{ textValue.warning }}</li>
        </ul>
        <li>
          <span>{{ textValue.p17 }}</span>
          <b>{{ textValue.p18 }}</b>
          <span>{{ textValue.p25 }}</span>
        </li>
        <ul class="list-disc pl-10">
          <li>
            <span>{{ textValue.clean[0] }}</span>
            <b>{{ textValue.p37 }}</b>
            <span>{{ textValue.clean[1] }}</span>
          </li>
        </ul>
      </ul>

      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <span
          v-for="(item, index) in textValue.ul4.li"
          :key="`guidelines-4-li-${index}`">
          <li>{{ item }}</li>
          <span v-if="index !== 1">
            <app-ul-ordinary
              class="list-disc pl-10"
              :lis="textValue.ul4[`ul${index + 1}`].li"
              :my-key="`guidelines-index-4-${index}`" />
          </span>
          <span v-else>
            <ul class="list-disc pl-10">
              <li>
                <span>{{ textValue.ul4[`ul${index + 1}`].li[0][0] }}</span>
                <link-standard :link="linkValue.AOSCStickerPack" />
                <span>{{ textValue.ul4[`ul${index + 1}`].li[0][1] }}</span>
              </li>
            </ul>
          </span>
        </span>
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
        <span>{{ textValue.p30 }}</span>
        <link-standard :link="linkValue.contributorConvention" />
        <span>{{ textValue.p31 }}</span>
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
