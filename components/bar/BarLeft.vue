<script setup>
const { tm } = useI18n();

const navigationList = computed(() => {
  const textValue = tm('BarLeft');
  const linkValue = tm('allUniversalLink');
  const localLink = linkValue.local;

  return [
    {
      title: textValue.title1,
      children: [
        localLink.aoscOs,
        localLink.afterglow,
        localLink.liblol,
        localLink.oma,
        localLink.l10n
      ],
      show: true
    },
    {
      title: textValue.title2,
      children: [
        localLink.news,
        localLink.gallery,
        useTIndex(localLink.contact, 1),
        useTIndex(linkValue.AOSCWiki, 1)
      ],
      show: true
    },
    {
      title: textValue.title3,
      children: [
        localLink.about,
        localLink.events,
        localLink.internship,
        localLink.sponsors,
        localLink.crowdsourcing,
        localLink.guidelines,
        localLink.mascot
      ],
      show: true
    },
    {
      title: textValue.title4,
      children: [
        localLink.paste,
        linkValue.forum,
        useTIndex(linkValue.GitHub, 1),
        linkValue.mail20,
        linkValue.buildbots,
        linkValue.buildit
      ],
      show: true
    }
  ];
});

const openMenuList = new Set();

const menuDivRef = useTemplateRef('menuDiv');
const menuRef = useTemplateRef('menu');
const rowHeight = 32;
const rowHeightpx = `${rowHeight}px`;

const route = useRoute();

const openMenu = (MenuOpenEvent) => {
  const result = navigationList.value.find(
    (item) => item.title === MenuOpenEvent
  );
  let height =
    result.children.length * rowHeight + menuDivRef.value.clientHeight;
  for (const item of openMenuList) {
    if (highlyIsQualified(height)) {
      break;
    } else {
      height =
        height -
        navigationList.value.find((item1) => item1.title === item).children
          .length *
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
  // 在中心内容长度小于window.innerHeight时，回到首页弹窗不可能出来
  // 此时高度比较参照中心内容长度即可，不需要算上弹窗和底栏
  // 中心内容长度大于window.innerHeight时，总长度要加上底栏和弹窗和1px的弹窗下边距与window.innerHeight对比
  if (
    height + rowHeight * 2 + 1 < window.innerHeight &&
    height <
      menuDivRef.value.parentNode.parentNode.nextElementSibling.clientHeight
  )
    return true;
  return false;
};

const { $mitt } = useNuxtApp();
onMounted(() => {
  $mitt.on('routeSwitching', () => {
    retractMenuBar();
  });
});
onBeforeUnmount(() => {
  $mitt.off('routeSwitching');
});

const retractMenuBar = () => {
  let height = menuDivRef.value.clientHeight;
  for (const item of openMenuList) {
    if (highlyIsQualified(height)) {
      break;
    } else {
      if (openMenuList.size === 1) break;
      height =
        height -
        navigationList.value.find((item1) => item1.title === item).children
          .length *
          rowHeight;
      openMenuList.delete(item);
      menuRef.value.close(item);
    }
  }
};
onMounted(() => {
  // 每次缩放改变的时候，判断有没有栏目需要缩回去，先展开的，优先缩进
  window.onresize = (() => {
    let timeoutID = undefined;
    return () => {
      if (timeoutID !== undefined) clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        retractMenuBar();
        timeoutID = undefined;
      }, 40);
    };
  })();
  let height = menuDivRef.value.clientHeight;
  // 初次加载的时候尝试打开当前栏目分类
  // 记一下目前所在分类的title
  let thisTitle = null;
  let thisColumnIsShow = false;
  for (const item of navigationList.value.values()) {
    const resule = item.children.find(
      (item1) => item1.url === route.path.replace(/\/+$/, '')
    );
    if (resule) {
      height = height + item.children.length * rowHeight;
      if (highlyIsQualified(height)) {
        // 记下可以展开，但先不展开，因为要给这个放到队列尾
        thisColumnIsShow = true;
      }
      thisTitle = item.title;
      break;
    }
  }
  // 然后在剩余空间里按顺序遍历栏目，能展开尽量展开
  for (const item of navigationList.value) {
    if (thisTitle !== item.title) {
      height = height + item.children.length * rowHeight;
      if (highlyIsQualified(height)) {
        openMenuList.add(item.title);
        menuRef.value.open(item.title);
      } else {
        break;
      }
    }
  }
  // 剩余栏目展开完毕，展开当前所在栏目，此时屏幕缩小优先关闭其他栏目
  if (thisColumnIsShow) {
    openMenuList.add(thisTitle);
    menuRef.value.open(thisTitle);
  }

  // 判断当前所在位置是否需要回到顶部按钮
  returnFromTop();
  // 挂载上面监听器
  window.addEventListener('scroll', returnFromTop);
});

const returnFromTop = (() => {
  let timeoutID = undefined;
  return () => {
    if (timeoutID !== undefined) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      if ((window.scrollY || document.documentElement.scrollTop) > 103) {
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
        class="to-top-color mb-[1px] flex justify-between leading-8 text-white"
        onclick="window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' 
        })">
        <el-icon class="my-auto ml-4" size="20"><el-icon-top /></el-icon>
        <span class="mr-4">{{ $t('BarLeft.span1') }}</span>
      </div>
    </Transition>
    <div ref="menuDiv">
      <el-menu
        ref="menu"
        class="my-el-menu"
        @close="closeMenu"
        @open="openMenu">
        <el-sub-menu
          v-for="(item, index) in navigationList"
          :key="`barleft-1-link-${index}`"
          :index="item.title">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <div class="my-item-ul"
            ><AppLink
              v-for="(item2, index2) in item.children"
              :key="`barleft-2-link-${index2}`"
              :to="item2.url"
              class="hover:no-underline"
              ><el-menu-item
                :index="getSpecifiedTitle(item2)"
                class="my-el-menu-item"
                :class="{
                  'my-el-menu-item-hover': route.path
                    .replace(/\/+$/, '')
                    .trim()
                    .startsWith(item2.url.trim())
                }"
                >{{ getSpecifiedTitle(item2) }}</el-menu-item
              ></AppLink
            ></div
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
  --el-menu-text-color: white;
  --el-menu-active-color: black;
  --el-menu-hover-bg-color: var(--secondary);
  --el-menu-item-height: v-bind(rowHeightpx);
  --el-menu-sub-item-height: v-bind(rowHeightpx);
  --el-menu-base-level-padding: 10px;
  --el-menu-level-padding: 5px;
  border: 0;
}

.my-el-menu-item {
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

.my-item-ul {
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #ececec;
}
</style>
