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

const openMenuList = new Set();

const menuDivRef = useTemplateRef('menuDiv');
const menuRef = useTemplateRef('menu');
const rowHeight = 32;

const route = useRoute();

const openMenu = (MenuOpenEvent) => {
  const result = linkArr.find((item) => item.title === MenuOpenEvent);
  let height =
    result.children.length * rowHeight +
    rowHeight * 2 +
    menuDivRef.value.clientHeight;
  for (const item of openMenuList) {
    if (
      height < window.innerHeight &&
      height <
        menuDivRef.value.parentNode.parentNode.nextElementSibling.clientHeight
    ) {
      break;
    } else {
      height =
        height -
        linkArr.find((item1) => item1.title === item).children.length *
          rowHeight;
      openMenuList.delete(item);
      menuRef.value.close(item);
    }
  }
  openMenuList.add(MenuOpenEvent);
};
const closeMenu = (MenuOpenEvent) => {
  openMenuList.delete(MenuOpenEvent);
};

const highlyIsQualified = (height) => {
  if (
    height < window.innerHeight &&
    height <
      menuDivRef.value.parentNode.parentNode.nextElementSibling.clientHeight
  )
    return true;
  else return false;
};

onMounted(() => {
  window.onresize = (() => {
    let timeoutID = undefined;
    return () => {
      if (timeoutID !== undefined) clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        let height = menuDivRef.value.clientHeight + rowHeight * 2 + 1;
        for (const item of openMenuList) {
          if (highlyIsQualified(height)) {
            break;
          } else {
            if (openMenuList.size === 1) break;
            height =
              height -
              linkArr.find((item1) => item1.title === item).children.length *
                rowHeight;
            openMenuList.delete(item);
            menuRef.value.close(item);
          }
        }
        timeoutID = undefined;
      }, 40);
    };
  })();
  // linkArr.find((item1) => item1.title === item)
  let height = menuDivRef.value.clientHeight + rowHeight * 2 + 1;
  for (const item of linkArr) {
    const resule = item.children.find((item1) => item1.link === route.path);
    if (resule) {
      height = height + item.children.length * rowHeight;
      if (highlyIsQualified(height)) {
        openMenuList.add(item.title);
        menuRef.value.open(item.title);
      }
    }
  }
  for (const item of linkArr) {
    height = height + item.children.length * rowHeight;
    if (highlyIsQualified(height)) {
      openMenuList.add(item.title);
      menuRef.value.open(item.title);
    } else {
      break;
    }
  }
  returnFromTop();
  window.addEventListener('scroll', returnFromTop);
});

const returnFromTop = (() => {
  let timeoutID = undefined;
  return () => {
    if (timeoutID !== undefined) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      console.log(123);
      if (window.scrollY || document.documentElement.scrollTop > 103) {
        backToTopBtnShow.value = true;
      } else {
        backToTopBtnShow.value = false;
      }
      timeoutID = undefined;
    }, 20);
  };
})();

const backToTopBtnShow = ref(false);
</script>

<template>
  <div id="sticky-nav" ref="stickyNav">
    <Transition name="anim-button">
      <div
        v-show="backToTopBtnShow"
        class="flex justify-between text-white leading-8 mb-[1px] to-top-color"
        onclick="window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' 
        })">
        <el-icon class="my-auto ml-4" size="20"
          ><el-icon-top></el-icon-top
        ></el-icon>
        <span class="mr-4">返回页首</span>
      </div>
    </Transition>
    <div ref="menuDiv">
      <el-menu
        ref="menu"
        class="my-el-menu"
        @close="closeMenu"
        @open="openMenu">
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
              class="my-el-menu-item"
              :class="{
                'my-el-menu-item-hover': route.path
                  .trim()
                  .startsWith(item2.link.trim())
              }"
              >{{ item2.title }}</el-menu-item
            ></AppLink
          >
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.my-el-menu {
  --el-menu-item-font-size: 12pt;
  --el-menu-bg-color: var(--primary);
  --el-menu-text-color: #ffffff;
  --el-menu-active-color: #ffffff;
  --el-menu-hover-bg-color: var(--secondary);
  --el-menu-item-height: 32px;
  border: 0;
}
.my-el-menu-item {
  height: 32px;
  color: black;
  background-color: #ececec;
}
.my-el-menu-item-hover {
  background-color: #dcdcdc;
}
.my-el-menu-item:hover {
  background-color: #dcdcdc;
}
.to-top-color {
  background-color: var(--primary);
  cursor: pointer;
}
.to-top-color:hover {
  background-color: var(--secondary);
}
.anim-button-enter-active {
  overflow-y: hidden;
  animation: backtotop-slidein 0.15s linear;
}

.anim-button-leave-active {
  overflow-y: hidden;
  animation: backtotop-slidein 0.15s linear reverse;
}

@keyframes backtotop-slidein {
  0% {
    height: 0;
  }

  100% {
    height: 2rem;
  }
}
</style>
