<script setup name="LeftBar">
import { reactive, ref, onMounted } from "vue";
import { useRouter, RouterLink } from "vue-router";

// 该变量将在左侧边栏组件加载时设定
// 记录有多少个分类可以被展开，由视图 (Viewport) 垂直高度决定
let allowedCategories = 0;
let currentShowing;
const router = useRouter();
const linkArr = reactive([
  {
    title: "社区项目",
    children: [
      { title: "安同 OS", link: "/aosc-os" },
      { title: "星霞 OS", link: "/afterglow" },
      { title: "libLoL 兼容层", link: "/liblol" },
      { title: "小熊猫包管理 (oma)", link: "/oma" },
      { title: "软件本地化", link: "/l10n" },
    ],
    show: true,
  },
  {
    title: "资讯与支持",
    children: [
      { title: "新闻资讯", link: "/news" },
      { title: "活动相册", link: "/gallery" },
      { title: "系统需求", link: "#" },
      { title: "联系方式", link: "/contact" },
    ],
    show: true,
  },
  {
    title: "事务与文化",
    children: [
      { title: "社区简介", link: "/about" },
      { title: "线下活动", link: "#" },
      { title: "实习资源", link: "#" },
      { title: "赞助方一览", link: "/sponsors" },
      { title: "社区众筹", link: "/crowdsourcing" },
      { title: "人际关系准则", link: "/guidelines" },
    ],
    show: true,
  },
  {
    title: "服务设施",
    children: [
      { title: "文档", link: "https://wiki.aosc.io/" },
      { title: "代码", link: "https://github.com/AOSC-Dev" },
      { title: "邮箱", link: "https://mail20.mymailcheap.com/" },
      { title: "镜像源", link: "https://aosc.io/repo/" },
      { title: "构建服务器", link: "https://aosc.io/repo/" },
      { title: "自动化设施", link: "https://aosc.io/repo/" },
      { title: "粘贴板", link: "/paste" },
    ],
    show: true,
  },
]);
// 默认始终展开 “社区项目”
const constExpandedMenu = linkArr.at(0);

function isCurrentPage(str) {
  return window.location.pathname.trim().startsWith(str.trim());
}

function updateAllowedCategories() {
  // 这里的值需要一直更新！
  let docHeight = document.documentElement.clientHeight;
  switch (true) {
    // 所有分类都展开的最小高度
    case docHeight >= 980: {
      allowedCategories = -1;
      linkArr.forEach(function (val) {
        val.show = true;
      });
      break;
    }
    // 能容纳两个展开的分类的最小高度
    case docHeight >= 680: {
      // 常驻展开 “社区项目” 和其他任意一个分类
      allowedCategories = 2;
      break;
    }
    // 能容纳一个的最小高度
    case docHeight >= 520: {
      allowedCategories = 1;
      break;
    }
    // 屏幕实在小的不行，那也没办法；展开分类就得看滚动条了
    default: {
      allowedCategories = 0;
      break;
    }
  }
  if (document.documentElement.clientHeight < 980) {
    // 可视区域高度不够的情况下，始终展开 “社区项目” 分类，及当前页面所属的分类
    // 记录是否有分类被展开
    let menuExpanded = false;
    let menuToExpand;
    // 决定需要展开哪一个
    linkArr.forEach(function (value) {
      let childrenHasCurPath = false;
      value.children.forEach(function (linkitem) {
        // 判断当前页面是否属于当前分类下
        if (isCurrentPage(linkitem.link)) {
          childrenHasCurPath = true;
        }
      });
      if (childrenHasCurPath) {
        menuToExpand = value;
      }
      value.show = false;
    });
    if (menuToExpand == null) {
      menuToExpand = constExpandedMenu;
    }
    switch (allowedCategories) {
      case 2:
        if (menuToExpand == constExpandedMenu) {
          menuToExpand = linkArr.at(1);
        }
        // 展开常驻分类和当前页面所属分类
        constExpandedMenu.show = true;
        menuToExpand.show = true;
        break;
      case 1:
        // 展开当前页面所属分类
        constExpandedMenu.show = false;
        menuToExpand.show = true;
        break;
      default:
        // 不展开任何分类
        break;
    }
    currentShowing = menuToExpand;
  }
}

window.onresize = updateAllowedCategories;
updateAllowedCategories();

function toggle(item) {
  let lastShow = item.show;
  if (allowedCategories < 0) {
    setTimeout(() => {
      item.show = !item.show;
    }, 50);
    return;
  }
  if (allowedCategories == 2 && item == linkArr.at(0)) {
    setTimeout(() => {
      item.show = !item.show;
    }, 50);
    // 不自动收缩其他分类
    return;
  }
  if (allowedCategories <= 2) {
    if (currentShowing != null && currentShowing != item) {
      // Collapse the expanded one first
      currentShowing.show = false;
      currentShowing = item;
    }
    // HACK: 防止切换的过程中内容溢出（有一小段时间两者是同时展开的）
    setTimeout(() => {
      item.show = !item.show;
    }, 50);

    return;
  }
}

const stickyNav = ref(null);
const backToTopBtnShow = ref(false);
let lastStickyNavTop = 0;

onMounted(() => {
  function handleBackToTopButton() {
    // 检测 sticky-nav 是否被钉住
    // 被钉住了，显示 “返回页首” 按钮
    let top = stickyNav.value.getBoundingClientRect().top;
    if (lastStickyNavTop != top) {
      backToTopBtnShow.value = top == 0;
      lastStickyNavTop = top;
    }
  }
  // 执行一次，避免刷新时看不见
  handleBackToTopButton();
  window.addEventListener("scroll", handleBackToTopButton);
});
</script>

<template>
  <div id="sticky-nav" ref="stickyNav">
    <Transition name="anim-button">
      <div
        id="sticky-top-button"
        ref="stickyTopButton"
        class="bg-primary text-white h-[2rem] px-[10px] m-0 select-none flex justify-between items-center cursor-pointer hover:bg-secondary border-b border-b-white"
        onclick="window.scrollTo(0,0, 'smooth')"
        v-show="backToTopBtnShow"
      >
        <v-icon name="bi-chevron-bar-up" />
        <span>返回页首</span>
      </div>
    </Transition>
    <div v-for="item1 in linkArr" :key="item1.title">
      <div
        class="bg-primary text-white h-[2rem] px-[10px] py-[5px] m-0 select-none flex justify-between items-center cursor-pointer hover:bg-secondary"
        @click="toggle(item1)"
      >
        <span>
          {{ item1.title }}
        </span>
        <v-icon
          :name="item1.show ? 'bi-chevron-double-up' : 'bi-chevron-double-down'"
          inverse
        />
      </div>
      <Transition name="menu">
        <ul class="py-[3px] flex nav-container" v-show="item1.show">
          <template v-for="item2 in item1.children">
            <router-link
              v-if="!item2.link.startsWith('http')"
              :to="item2.link"
              :href="item2.link"
              :class="{
                'bg-[#dcdcdc]': $route.path
                  .trim()
                  .startsWith(item2.link.trim()),
              }"
              class="leading-4 navitem-flex hover:bg-[#dcdcdc] cursor-pointer pr-[10px] pl-[16px] block text-wrap select-none href-noline"
              >{{ item2.title }}</router-link
            >
            <a
              v-else
              :href="item2.link"
              :class="{
                'bg-[#dcdcdc]': $route.path
                  .trim()
                  .startsWith(item2.link.trim()),
              }"
              class="leading-4 navitem-flex hover:bg-[#dcdcdc] cursor-pointer pr-[10px] pl-[16px] block text-wrap select-none href-noline"
              >{{ item2.title }}</a
            >
          </template>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.href-noline {
  text-decoration: none;
}

.menu-enter-active {
  overflow-y: hidden;
  animation: menuslide-in 0.15s linear;
}
.menu-leave-active {
  overflow-y: hidden;
  animation: menuslide-in 0.15s linear reverse;
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

@keyframes menuslide-in {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 16rem;
  }
}
.nav-container {
  flex-direction: column;
  flex: 0 0 100%;
}

.navitem-flex {
  display: flex;
  flex: 0 0 100%;
  justify-content: flex-start;
  min-height: 2rem;
  align-content: center;
  flex-wrap: wrap;
}
</style>
