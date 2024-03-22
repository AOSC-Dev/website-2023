import { createRouter, createWebHistory } from 'vue-router'
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
import Md from './pages/md/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/download',
      name: 'download',
      component: Download
    }, {
      path: '/aoscos',
      name: 'aoscos',
      component: AoscOs
    }, {
      path: '/afterglow',
      name: 'afterglow',
      component: Afterglow
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/guidelines',
      name: 'guidelines',
      component: Guidelines
    }, {
      path: '/sponsoring',
      name: 'sponsoring',
      component: Sponsoring
    }, {
      path: '/news',
      name: 'news',
      component: News,
    }, {
      path: '/news/list/:category/:categoryTitle',
      name: 'newsList',
      component: NewsList,
    }, {
      path: '/news/detail/:newsPath/',
      name: 'newsDetail',
      component: NewsDetail,
    }, {
      path: '/md',
      name: 'md',
      component: Md
    }
  ]
})

export default router