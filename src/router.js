import { createRouter, createWebHistory } from 'vue-router';
import { setTitle } from './utils/utils';
import Index from './pages/index/Index.vue';
import About from './pages/about/Index.vue';
import Download from './pages/download/Index.vue';
import AoscOs from './pages/aosc-os/Index.vue';
import AoscOsSysReq from './pages/aosc-os/requirements/Index.vue';
import AoscOsIsaMatrix from './pages/aosc-os/isa/Index.vue';
import AoscOsRelNote from './pages/aosc-os/relnote/Index.vue';
import Afterglow from './pages/afterglow/Index.vue';
import AfterglowSysReq from './pages/afterglow/requirements/Index.vue';
import AfterglowIsaMatrix from './pages/afterglow/isa/Index.vue';
import AfterglowRelNote from './pages/afterglow/relnote/Index.vue';
import libLoL from './pages/liblol/Index.vue';
import Oma from './pages/oma/Index.vue';
import L10n from './pages/l10n/Index.vue';
import Contact from './pages/contact/Index.vue';
import Gallery from './pages/gallery/Index.vue';
import Guidelines from './pages/guidelines/Index.vue';
import Mascot from './pages/mascot/Index.vue';
import Sponsors from './pages/sponsors/Index.vue';
import Crowdsourcing from './pages/crowdsourcing/Index.vue';
import News from './pages/news/Index.vue';
import NewsList from './pages/news/List.vue';
import NewsDetail from './pages/news/Detail.vue';
import Paste from './pages/paste/Index.vue';
import PasteDetail from './pages/paste/Detail.vue';
import MdView from './pages/mdView/Index.vue';
import PageNotFound from './components/PageNotFound.vue';
import Support from './components/Support.vue';
import Internship from './pages/internship/Index.vue';
import Events from './pages/events/Index.vue';
import LiveKitRelNote from './pages/aosc-os/livekit/relnote/Index.vue';
import WSLRelNote from './pages/aosc-os/wsl/relnote/Index.vue';
import LiveKitSysReq from './pages/aosc-os/livekit/requirements/Index.vue';
import WSLSysReq from './pages/aosc-os/wsl/requirements/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '社区门户',
      },
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于社区',
      },
    }, {
      path: '/download',
      name: 'download',
      component: Download,
      meta: {
        title: '下载中心',
      },
    }, {
      path: '/aosc-os',
      name: 'aoscos',
      component: AoscOs,
      meta: {
        title: '安同 OS',
      },
      children: [{
        path: '',
        name: 'aosc-os-support',
        components: { support: Support },
        props: true,
      }],
    }, {
      path: '/aosc-os/requirements',
      name: 'aoscossysreq',
      component: AoscOsSysReq,
      meta: {
        title: '系统配置需求表（安同 OS）',
      },
    }, {
      path: '/aosc-os/livekit/requirements',
      name: 'livekitsysreq',
      component: LiveKitSysReq,
      meta: {
        title: '系统配置需求表 (LiveKit)',
      },
    }, {
      path: '/aosc-os/wsl/requirements',
      name: 'wslsysreq',
      component: WSLSysReq,
      meta: {
        title: '系统配置需求表 (AOSC OS on WSL)',
      },
    }, {
      path: '/aosc-os/isa',
      name: 'aoscosisamatrix',
      component: AoscOsIsaMatrix,
      meta: {
        title: '架构支持规格表（安同 OS）',
      },
    }, {
      path: '/aosc-os/relnote',
      name: 'aoscosrelnote',
      component: AoscOsRelNote,
      meta: {
        title: '发行说明（安同 OS）',
      },
    }, {
      path: '/aosc-os/livekit/relnote',
      name: 'livekitrelnote',
      component: LiveKitRelNote,
      meta: {
        title: '发行说明 (LiveKit)',
      },
    }, {
      path: '/aosc-os/wsl/relnote',
      name: 'WSLrelnote',
      component: WSLRelNote,
      meta: {
        title: '发行说明 (AOSC OS on WSL)',
      },
    }, {
      path: '/afterglow',
      name: 'afterglow',
      component: Afterglow,
      meta: {
        title: '星霞 OS',
      },
    }, {
      path: '/afterglow/requirements',
      name: 'afterglowsysreq',
      component: AfterglowSysReq,
      meta: {
        title: '系统配置需求表（星霞 OS）',
      },
    }, {
      path: '/afterglow/isa',
      name: 'afterglowisamatrix',
      component: AfterglowIsaMatrix,
      meta: {
        title: '架构支持规格表（星霞 OS）',
      },
    }, {
      path: '/afterglow/relnote',
      name: 'afterglowrelnote',
      component: AfterglowRelNote,
      meta: {
        title: '发行说明（星霞 OS）',
      },
    }, {
      path: '/liblol',
      name: 'liblol',
      component: libLoL,
      meta: {
        title: 'libLoL 兼容层',
      },
    }, {
      path: '/oma',
      name: 'oma',
      component: Oma,
      meta: {
        title: '小熊猫包管理',
      },
    }, {
      path: '/l10n',
      name: 'l10n',
      component: L10n,
      meta: {
        title: '软件本地化',
      },
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: '联系方式',
      },
    }, {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: '活动相册',
      },
    }, {
      path: '/guidelines',
      name: 'guidelines',
      component: Guidelines,
      meta: {
        title: '人际关系准则',
      },
    }, {
      path: '/mascot',
      name: 'mascot',
      component: Mascot,
      meta: {
        title: '社区吉祥物',
      },
    }, {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors,
      meta: {
        title: '赞助方一览',
      },
    }, {
      path: '/crowdsourcing',
      name: 'crowdsourcing',
      component: Crowdsourcing,
      meta: {
        title: '社区众筹',
      },
    }, {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        title: '新闻资讯',
      },
    }, {
      path: '/oma',
      name: 'oma',
      component: Oma,
      meta: {
        title: '小熊猫包管理器',
      },
    }, {
      path: '/news/list/:category/:categoryTitle',
      name: 'newsList',
      component: NewsList,
    }, {
      path: '/news/detail/:newsPath/',
      name: 'newsDetail',
      component: NewsDetail,
    }, {
      path: '/mdView/:mdPath/',
      name: 'mdView',
      component: MdView,
    }, {
      path: '/paste',
      name: 'paste',
      component: Paste,
      meta: {
        title: '粘贴板',
      },
    }, {
      path: '/paste/detail',
      name: 'pasteDetail',
      component: PasteDetail,
      meta: {
        title: '粘贴板',
      },
    }, {
      path: '/internship',
      name: 'Internship',
      component: Internship,
      meta: {
        title: '实习资源',
      },
    }, {
      path: '/events',
      name: 'Events',
      component: Events,
      meta: {
        title: '社区活动',
      },
    }, {
      path: '/404',
      name: 'PageNotFound',
      meta: {
        title: '页面未找到',
      },
      component: PageNotFound,
    }, {
      path: '/:pathMatch(.*)',
      component: PageNotFound,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return {
      top: 0,
    };
  },
});

router.afterEach((to) => {
  const { meta } = to;
  if (meta && meta.title) {
    setTitle(meta.title);
  }
});

export default router;
