<script setup>
const { tm } = useI18n();
const textValue = tm('sponsors.index');
const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title7 });
const linkDevelopmentEquipment = linkValue.sponsors.developmentEquipment;
const sponsorList = [
  {
    title: textValue.title1,
    list: [...Object.values(linkValue.sponsors.servicesAndFacilities)]
  },
  {
    title: textValue.title2,
    list: [...Object.values(linkValue.sponsors.imageSource)]
  },
  {
    title: textValue.title3,
    list: [
      linkDevelopmentEquipment.bananaPi,
      linkValue.sponsors.servicesAndFacilities.loongson,
      linkDevelopmentEquipment.plctlab,
      linkDevelopmentEquipment.pine64
    ]
  },
  {
    title: textValue.title4,
    list: [...Object.values(linkValue.sponsors.softwareLicense)]
  },
  {
    title: textValue.individualDonors.title
  },
  {
    title: textValue.title5,
    list: [...Object.values(linkValue.sponsors.oldServicesAndFacilities)]
  },
  {
    title: textValue.title6,
    list: [...Object.values(linkValue.sponsors.oldSoftwareLicense)]
  }
];
</script>

<template>
  <div>
    <category-second :title="textValue.title7" />
    <div class="p-6">{{ textValue.p1 }}</div>

    <div v-for="item in sponsorList" :key="item.title">
      <category-second :title="item.title" />
      <div v-if="item.title !== textValue.individualDonors.title" class="p-6">
        <div class="grid grid-cols-4 gap-6 p-2">
          <app-link
            v-for="sponsor in item.list"
            :key="sponsor.title"
            class="cursor-pointer text-center"
            :href="sponsor.url"
            target="_blank">
            <div class="min-h-[91.74px]">
              <img
                loading="lazy"
                :src="`/sponsors/${sponsor.img}.svg`"
                :alt="sponsor.title"
                class="w-[100%] max-w-[100%]" />
            </div>
            <div class="text-link">{{ getSpecifiedTitle(sponsor) }}</div>
            <div v-if="sponsor.title == 'JetBrains'">
              <span style="font-size: 0.7rem; color: #666">
                Copyright © 2000-2024 JetBrains s.r.o. JetBrains and the
                JetBrains logo are registered trademarks of JetBrains s.r.o.
              </span>
            </div>
          </app-link>
        </div>
      </div>
      <div v-else class="heti">
        <p
          v-for="description in textValue.individualDonors.description"
          :key="description">
          {{ description }}
        </p>
        <table>
          <caption class="text-[12pt] font-semibold">
            AOSCC 2025 会务款项（2025 年 7 月 19 日）
          </caption>
          <tbody>
            <tr>
              <td>Alpine 中文小群</td>
              <td>baka</td>
              <td>Camelia Atelier@CLS</td>
              <td>ChiyoYuki</td>
            </tr>
            <tr>
              <td>冲浪的小鱼</td>
              <td>Christine Gu</td>
              <td>Deng</td>
              <td>邓子 (Deng Yichao)</td>
            </tr>
            <tr>
              <td>Frank@xdlinux</td>
              <td>禾风之水</td>
              <td>imgradeone</td>
              <td>KF</td>
            </tr>
            <tr>
              <td>林子</td>
              <td>lz差不多是条咸鱼了</td>
              <td>猫叔</td>
              <td>喵酱Catty</td>
            </tr>
            <tr>
              <td>Mikura Kyouka</td>
              <td>内蒙古合诚网络科技有限公司</td>
              <td>内蒙古墨云网络科技有限公司</td>
              <td>匿</td>
            </tr>
            <tr>
              <td>nobootleg</td>
              <td>曲阜师范大学计算机爱好者协会</td>
              <td>蚊子 (Mozz.ie)</td>
              <td>御坂云见#17535</td>
            </tr>
            <tr>
              <td>自言者一么</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <caption class="text-[12pt] font-semibold">
            软件源源服务器冷存储用硬盘（2025 年 2 月 6 日）
          </caption>
          <tbody>
            <tr>
              <td>冲浪的小鱼</td>
              <td>黄逸君</td>
              <td>kf</td>
              <td>刘璨贤</td>
            </tr>
            <tr>
              <td>okami2012</td>
              <td>要塞姬Ilikara</td>
              <td>Yo Kaslana</td>
              <td>梓瑶</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
