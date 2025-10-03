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

export const highlightElement = (dom: Ref<HTMLElement> | HTMLElement) => {
  const domElement = isRef(dom) ? dom.value : dom;
  domElement?.animate({ opacity: [1, 0.3, 1] }, 500);
};

export default highlightElement;
