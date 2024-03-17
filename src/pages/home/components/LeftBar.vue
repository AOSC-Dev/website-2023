<script setup name="LeftBar">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const linkArr = reactive([
  {
    title: "社区项目",
    children: [
      { title: "AOSC OS", link: "/aoscos" },
      { title: "Afterglow", link: "/afterglow" },
      { title: "LiveKit", link: "#" },
      { title: "小熊猫包管理", link: "#" },
    ],
  },
  {
    title: "咨询与支持",
    children: [
      { title: "新闻资讯", link: "/news" },
      { title: "活动相册", link: "#" },
      { title: "安装指南", link: "#" },
      { title: "系统需求", link: "#" },
      { title: "联系方式", link: "/contact" },
    ],
  },
  {
    title: "事务与文化",
    children: [
      { title: "人际关系准则", link: "/guidelines" },
      { title: "社区简介", link: "#" },
      { title: "例会与投票", link: "#" },
      { title: "赞助与众筹", link: "/sponsoring" },
      { title: "实习资源", link: "#" },
    ],
  },
  {
    title: "服务设施",
    children: [
      { title: "文档", link: "#" },
      { title: "代码", link: "#" },
      { title: "贡献者邮箱", link: "#" },
      { title: "镜像源", link: "#" },
      { title: "公共粘贴板", link: "#" },
    ],
  },
]);
</script>

<template>
  <div class="bg-leftbar-bg">
    <div v-for="item1 in linkArr" :key="item1.title">
      <div class="bg-primary text-white px-[10px] py-[5px] m-0 select-none">
        {{ item1.title }}
      </div>
      <ul class="py-[3px]">
        <router-link
          v-for="item2 in item1.children"
          :key="item2.title"
          :to="item2.link"
          class="leading-8 hover:bg-[#dcdcdc] cursor-pointer pr-[10px] pl-[16px] block"
          >{{ item2.title }}</router-link
        >
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
