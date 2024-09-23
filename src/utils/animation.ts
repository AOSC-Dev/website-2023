import { Ref, isRef } from 'vue';

// 如何给页面添加一个可重复的高亮动画
// watch(
//   () =>
//     highBrightnessControllerStore.obj[route.path],
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
    dom.value.animate({ opacity: [1, 0.3, 1] }, 1500);
  }
};

export default highlightElement;
