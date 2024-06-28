<script setup>
import {reactive} from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";

const osppList = reactive([
  {
    title: '开源之夏 2024',
    url: 'https://summer-ospp.ac.cn/',
  },
  {
    title: '开源之夏 2023',
    url: '#',
  },
  {
    title: '开源之夏 2022',
    url: '#',
  },
  {
    title: '开源之夏 2021',
    url: '#',
  },
  {
    title: '开源之夏 2020',
    url: '#',
  },
])
const aoscList = reactive([
  {
    title: '开源之夏 2024',
    url: '#',
  },
  {
    title: '开源之夏 2023',
    url: '#',
  },
  {
    title: '开源之夏 2022',
    url: '#',
  },
  {
    title: '开源之夏 2021',
    url: '#',
  },
  {
    title: '开源之夏 2020',
    url: '#',
  }
])
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="参与贡献"/>
    <div class="p-6">
      <p>安同开源社区（Anthon Open Source Community，简称 AOSC）是一个由计算机爱好者志愿组织工作，主要活动于线上的开源社区。主要项目围绕
        AOSC OS 和 Afterglow
        两大系统项目设计开发，亦有维护一系列周边应用和实用工具，以及各类开发维护用工具。社区的主要活动包括开发、测试、文档编写、活动组织、宣传推广、解疑答惑等。</p>
      <br>
      <p>
        社区随时欢迎贡献者的加入，无论是技术流想要实现功能，专业流想要撰写文档，文艺流想参与宣发，哪怕是想在主群组为用户答疑解惑，我们都欢迎你的加入，为社区贡献一份属于你的力量！</p>
      <br></div>
    <category-second title="开源之夏" id="support"/>
    <div class="p-6">
      <p>
        开源之夏（OSPP）是由中国科学院软件研究所“开源软件供应链点亮计划”发起并长期支持的一项暑期开源活动，旨在鼓励在校学生积极参与开源软件的开发维护，培养和发掘更多优秀的开发者，促进优秀开源软件社区的蓬勃发展，助力开源软件供应链建设。</p>
      <br>
      <p>2020 年起，社区每年积极参与中科院软件所组织的暑期 OSPP 活动。在相关活动中，社区任命导师，OSPP
        活动主办方派遣学生，导师与学生合作完成指定项目课题。参与该活动旨在为社区吸引新贡献者并为社区贡献者提供专业经验。社区导师及学生亦可通过双方工作赚取一定量的经济收入。</p>
      <br>
      <p>项目组委会记录：</p>

      <div class="pt-4 pb-[20px] px-16">
        <ul class="list-disc">
          <li v-for="item in osppList" :key="item.title">
            <router-link class="text-link" :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <p>社区日志：</p>
      <div class="pt-4 pb-[20px] px-16">
        <ul class="list-disc">
          <li v-for="item in aoscList" :key="item.title">
            <router-link class="text-link" :to="item.url">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
