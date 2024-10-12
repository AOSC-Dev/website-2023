<script setup name="LeftBar">
const linkArr = [
  {
    title: '社区项目',
    children: [
      { title: '安同 OS', link: '/aosc-os' },
      { title: '星霞 OS', link: '/afterglow' },
      { title: 'libLoL 兼容层', link: '/liblol' },
      {
        title: '小熊猫包管理 (oma)',
        link: '/oma'
      },
      { title: '软件本地化', link: '/l10n' }
    ],
    show: true
  },
  {
    title: '资讯与支持',
    children: [
      { title: '新闻资讯', link: '/news' },
      { title: '活动相册', link: '/gallery' },
      { title: '联系方式', link: '/contact' }
    ],
    show: true
  },
  {
    title: '事务与文化',
    children: [
      { title: '关于社区', link: '/about' },
      { title: '社区活动', link: '/events' },
      { title: '实习资源', link: '/internship' },
      { title: '赞助方一览', link: '/sponsors' },
      {
        title: '社区众筹',
        link: '/crowdsourcing'
      },
      {
        title: '人际关系准则',
        link: '/guidelines'
      },
      { title: '社区吉祥物', link: '/mascot' }
    ],
    show: true
  },
  {
    title: '服务设施',
    children: [
      {
        title: '公共粘贴板',
        link: '/paste'
      },
      {
        title: '社区论坛',
        link: 'https://bbs.aosc.io/'
      },
      {
        title: '参考文档',
        link: 'https://wiki.aosc.io/'
      },
      {
        title: '代码仓库',
        link: 'https://github.com/AOSC-Dev'
      },
      {
        title: '贡献者邮箱',
        link: 'https://mail20.mymailcheap.com/'
      },
      {
        title: '构建服务器',
        link: 'https://wiki.aosc.io/developer/infrastructure/buildbots/'
      },
      {
        title: '自动化设施',
        link: 'https://buildit.aosc.io/'
      }
    ],
    show: true
  }
];
const cilckMenu = (str) => {
  console.log(str);
};
</script>

<template>
  <div id="sticky-nav" ref="stickyNav">
    <el-backtop visibility-height="103" style="all: initial"
      ><div
        class="flex justify-between text-[#ffffff] leading-10 mb-[1px] to-top-color"
        ><el-icon class="my-auto ml-2" size="20"
          ><el-icon-top></el-icon-top
        ></el-icon>
        <span class="mr-2">回到首页</span></div
      ></el-backtop
    >
    <el-menu class="el-menu-color">
      <el-sub-menu
        v-for="item in linkArr"
        :key="item.title"
        :index="item.title">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <AppLink
          v-for="item2 in item.children"
          :key="item2.title"
          :to="item2.link"
          class="hover:no-underline"
          ><el-menu-item
            :index="item2.title"
            class="el-menu-item-bg-color"
            :class="{
              'el-menu-item-bg-color-hover': $route.path
                .trim()
                .startsWith(item2.link.trim())
            }"
            style="height: 40px; color: black"
            @click="cilckMenu"
            >{{ item2.title }}</el-menu-item
          ></AppLink
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-color {
  --el-menu-bg-color: var(--primary);
  --el-menu-text-color: #ffffff;
  --el-menu-active-color: #ffffff;
  --el-menu-hover-bg-color: var(--secondary);
  border-right: 0;
}
.el-menu-item-bg-color {
  background-color: #ececec;
}
.el-menu-item-bg-color-hover {
  background-color: #dcdcdc;
}
.el-menu-item-bg-color:hover {
  background-color: #dcdcdc;
}
.to-top-color {
  background-color: var(--primary);
  cursor: pointer;
}
.to-top-color:hover {
  background-color: var(--secondary);
}
</style>
