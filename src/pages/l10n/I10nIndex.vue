<script setup>
import { reactive } from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
import AppSupport from '../../components/AppSupport.vue';

const navigationList = [
  {
    title: '支持文档',
    hash: '#support'
  },
  {
    title: '社区 Weblate 平台',
    url: 'https://weblate.aosc.io/'
  }
];

const docList = reactive([
  {
    title:
      '《大陆简中自由软件本地化工作指南》1.5.4 版',
    url: 'https://repo.aosc.io/aosc-l10n/zh_CN_l10n_1.5.4.pdf'
  }
]);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="软件本地化" />
    <div class="p-6">
      <p>
        作为一个主要由中文母语用户组成的社区，我们非常重视软件界面和使用习惯的本地化
        (L10n)
        工作。社区成立多年以来，我社在重视项目界面及文书本地化的同时，长期投身于如
        GNOME、KDE、CUPS 和 Wine
        等上游项目的本地化工作，改善各类软件面向简体中文的使用体验。 </p
      ><br />
      <p>
        在推动这些工作的同时，我们还肩负起了《大陆简中自由软件本地化工作指南》这一本地化工作规范文档的编辑维护工作，指引各路同仁正确、高效地推进本地化工作。此外，自
        2020
        年开始，我们还通过中科院软件所“开源之夏”发布本地化工作的实习项目，吸引各路新人参与到我社的本地化工作中。 </p
      ><br />
      <div>
        <AccordionNavigation
          :navigation-list="navigationList" />
      </div>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
