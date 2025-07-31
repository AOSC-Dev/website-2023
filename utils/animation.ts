// 如何给页面添加一个可重复的高亮动画
// watch(
//   () =>
//     highBrightnessControllerStore.obj[route.path.replace(/\/+$/, '')],
//   () => {
//     switch (route.hash) {
//     }
//   },
//   {
//     flush: 'post'
//   }
// );

export const highlightElement = (dom: Ref<HTMLDivElement>) => {
  if (isRef(dom)) {
    if (dom.value) {
      dom.value.animate({ opacity: [1, 0.3, 1] }, 1500);
    } else {
      console.log('dom不存在');
    }
  }
};

export default highlightElement;
