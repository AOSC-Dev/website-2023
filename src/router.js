import { createRouter, createWebHistory } from 'vue-router'
import { setTitle } from './utils/utils.js'
import Index from '/src/pages/index/Index.vue'
import About from './pages/about/Index.vue'
import Download from './pages/download/Index.vue'
import AoscOs from './pages/aosc-os/Index.vue'
import AoscOsSysReq from './pages/aosc-os/requirements/Index.vue'
import AoscOsIsaMatrix from './pages/aosc-os/isa/Index.vue'
import AoscOsRelNote from './pages/aosc-os/relnote/Index.vue'
import Afterglow from './pages/afterglow/Index.vue'
import AfterglowSysReq from './pages/afterglow/requirements/Index.vue'
import AfterglowIsaMatrix from './pages/afterglow/isa/Index.vue'
import AfterglowRelNote from './pages/afterglow/relnote/Index.vue'
import libLoL from './pages/liblol/Index.vue'
import Oma from './pages/oma/Index.vue'
import L10n from './pages/l10n/Index.vue'
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
        title: '下载系统'
      }
    }, {
      path: '/aosc-os',
      name: 'aoscos',
      component: AoscOs,
      meta: {
        title: '安同 OS'
      }
    }, {
      path: '/aosc-os/requirements',
      name: 'aoscossysreq',
      component: AoscOsSysReq,
      meta: {
        title: '系统配置需求表'
      }
    }, {
      path: '/aosc-os/isa',
      name: 'aoscosisamatrix',
      component: AoscOsIsaMatrix,
      meta: {
        title: '架构支持规格表'
      }
    }, {
      path: '/aosc-os/relnote',
      name: 'aoscosrelnote',
      component: AoscOsRelNote,
      meta: {
        title: '发行说明'
      }
    }, {
      path: '/afterglow',
      name: 'afterglow',
      component: Afterglow,
      meta: {
        title: '星霞 OS'
      }
    }, {
      path: '/afterglow/requirements',
      name: 'afterglowsysreq',
      component: AfterglowSysReq,
      meta: {
        title: '系统配置需求表'
      }
    }, {
      path: '/afterglow/isa',
      name: 'afterglowisamatrix',
      component: AfterglowIsaMatrix,
      meta: {
        title: '架构支持规格表'
      }
    }, {
      path: '/afterglow/relnote',
      name: 'afterglowrelnote',
      component: AfterglowRelNote,
      meta: {
        title: '发行说明'
      }
    }, {
      path: '/liblol',
      name: 'liblol',
      component: libLoL,
      meta: {
        title: 'libLoL 兼容层'
      }
    }, {
      path: '/oma',
      name: 'oma',
      component: Oma,
      meta: {
        title: '小熊猫包管理'
      }
    }, {
      path: '/l10n',
      name: 'l10n',
      component: L10n,
      meta: {
        title: '软件本地化'
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