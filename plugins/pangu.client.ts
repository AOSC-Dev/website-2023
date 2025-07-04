import pangu from 'pangu';

// 不好 SSR 所以有嵌套 tag 时用用，平时尽量先用 computed
// <p v-pangu>{{ text1 }}<a href="/example">{{ linkName }}</a>{{ text2 }}</p>
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('pangu', (el) => {
    el.innerHTML = pangu.spacing(el.innerHTML);
  });
});
