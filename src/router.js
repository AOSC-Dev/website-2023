import { createRouter, createWebHistory } from 'vue-router'
import { setTitle } from './utils/utils.js'
import Index from '/src/pages/index/Index.vue'
import About from './pages/about/Index.vue'
import Download from './pages/download/Index.vue'
import AoscOs from './pages/aosc-os/Index.vue'
import Afterglow from './pages/afterglow/Index.vue'
import Contact from './pages/contact/Index.vue'
import Guidelines from './pages/guidelines/Index.vue'
import Sponsoring from './pages/sponsoring/Index.vue'
import News from './pages/news/Index.vue'
import NewsList from './pages/news/List.vue'
import NewsDetail from './pages/news/Detail.vue'
import PageNotFound from './components/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '社区门户'
      }
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于社区'
      }
    }, {
      path: '/download',
      name: 'download',
      component: Download,
      meta: {
        title: '下载AOSC OS'
      }
    }, {
      path: '/aosc-os',
      name: 'aoscos',
      component: AoscOs,
      meta: {
        title: 'AOSC OS'
      }
    }, {
      path: '/afterglow',
      name: 'afterglow',
      component: Afterglow,
      meta: {
        title: 'Afterglow'
      }
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: '联系方式'
      }
    }, {
      path: '/guidelines',
      name: 'guidelines',
      component: Guidelines,
      meta: {
        title: '人际关系准则'
      }
    }, {
      path: '/sponsoring',
      name: 'sponsoring',
      component: Sponsoring,
      meta: {
        title: '赞助与众筹'
      }
    }, {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        title: '新闻资讯'
      }
    }, {
      path: '/news/list/:category/:categoryTitle',
      name: 'newsList',
      component: NewsList,
    }, {
      path: '/news/detail/:newsPath/',
      name: 'newsDetail',
      component: NewsDetail,
    }, {
      path: '/404',
      name: 'PageNotFound',
      meta: {
        title: '页面未找到'
      },
      component: PageNotFound
    }, {
      path: '/:pathMatch(.*)',
      component: PageNotFound
    }
  ]
})

router.afterEach((to, from) => {
  const meta = to.meta
  if (meta && meta.title) {
    setTitle(meta.title)
  }
})

export default router