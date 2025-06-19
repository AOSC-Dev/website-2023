import { createRouter, createWebHistory } from 'vue-router';
import { setTitle } from './utils/utils.js';
import AppIndex from './pages/index/AppIndex.vue';
import AboutIndex from './pages/about/AboutIndex.vue';
import DownloadIndex from './pages/download/DownloadIndex.vue';
import AoscIndex from './pages/aosc-os/AoscIndex.vue';
import AoscRequirements from './pages/aosc-os/requirements/AoscRequirements.vue';
import AoscIsa from './pages/aosc-os/isa/AoscIsa.vue';
import AoscRightForMe from './pages/aosc-os/right-for-me/AoscRightForMe.vue';
import AoscRelnote from './pages/aosc-os/relnote/AoscRelnote.vue';
import AfterglowIndex from './pages/afterglow/AfterglowIndex.vue';
import AfterglowRequirements from './pages/afterglow/requirements/AfterglowRequirements.vue';
import AfterglowIsa from './pages/afterglow/isa/AfterglowIsa.vue';
import AfterglowRelnote from './pages/afterglow/relnote/AfterglowRelnote.vue';
import LiblolIndex from './pages/liblol/LiblolIndex.vue';
import OmaIndex from './pages/oma/OmaIndex.vue';
import I10nIndex from './pages/l10n/I10nIndex.vue';
import ContactIndex from './pages/contact/ContactIndex.vue';
import GalleryIndex from './pages/gallery/GalleryIndex.vue';
import GuidelinesIndex from './pages/guidelines/GuidelinesIndex.vue';
import MascotIndex from './pages/mascot/MascotIndex.vue';
import SponsorsIndex from './pages/sponsors/SponsorsIndex.vue';
import CrowdsourcingIndex from './pages/crowdsourcing/CrowdsourcingIndex.vue';
import NewsIndex from './pages/news/NewsIndex.vue';
import NewsList from './pages/news/NewsList.vue';
import NewsDetail from './pages/news/NewsDetail.vue';
import PasteIndex from './pages/paste/PasteIndex.vue';
import PasteDetail from './pages/paste/PasteDetail.vue';
import MdView from './pages/mdView/MdView.vue';
import PageNotFound from './components/PageNotFound.vue';
import AppSupport from './components/AppSupport.vue';
import InternshipIndex from './pages/internship/InternshipIndex.vue';
import EventsIndex from './pages/events/EventsIndex.vue';
import AoscLivekitRelnote from './pages/aosc-os/livekit/relnote/AoscLivekitRelnote.vue';
import AoscWslRelnote from './pages/aosc-os/wsl/relnote/AoscWslRelnote.vue';
import AoscLivekitRequirements from './pages/aosc-os/livekit/requirements/AoscLivekitRequirements.vue';
import AoscWslRequirements from './pages/aosc-os/wsl/requirements/AoscWslRequirements.vue';
import AoscAsahiRelnote from './pages/aosc-os/asahi/relnote/AoscAsahiRelnote.vue';
import AosccIndex from './pages/aoscc/AosccIndex.vue';
import AosccDetail from './pages/aoscc/AosccDetail.vue';
import CrowdsourcingDetail from './pages/crowdsourcing/CrowdsourcingDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: AppIndex,
      meta: {
        title: '社区门户'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutIndex,
      meta: {
        title: '关于社区'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadIndex,
      meta: {
        title: '下载中心'
      }
    },
    {
      path: '/aosc-os',
      name: 'aoscos',
      component: AoscIndex,
      meta: {
        title: '安同 OS'
      },
      children: [
        {
          path: '',
          name: 'aosc-os-support',
          components: { support: AppSupport },
          props: true
        }
      ]
    },
    {
      path: '/aosc-os/requirements',
      name: 'aoscossysreq',
      component: AoscRequirements,
      meta: {
        title: '系统配置需求表（安同 OS）'
      }
    },
    {
      path: '/aosc-os/right-for-me',
      name: 'aoscosrightforme',
      component: AoscRightForMe,
      meta: {
        title: '安同 OS 适合我吗？'
      }
    },
    {
      path: '/aosc-os/livekit/requirements',
      name: 'livekitsysreq',
      component: AoscLivekitRequirements,
      meta: {
        title: '系统配置需求表 (LiveKit)'
      }
    },
    {
      path: '/aosc-os/wsl/requirements',
      name: 'wslsysreq',
      component: AoscWslRequirements,
      meta: {
        title: '系统配置需求表 (AOSC OS on WSL)'
      }
    },
    {
      path: '/aosc-os/isa',
      name: 'aoscosisamatrix',
      component: AoscIsa,
      meta: {
        title: '架构支持规格表（安同 OS）'
      }
    },
    {
      path: '/aosc-os/relnote',
      name: 'aoscosrelnote',
      component: AoscRelnote,
      meta: {
        title: '发行注记（安同 OS）'
      }
    },
    {
      path: '/aosc-os/livekit/relnote',
      name: 'livekitrelnote',
      component: AoscLivekitRelnote,
      meta: {
        title: '发行注记 (LiveKit)'
      }
    },
    {
      path: '/aosc-os/wsl/relnote',
      name: 'WSLrelnote',
      component: AoscWslRelnote,
      meta: {
        title: '发行注记 (AOSC OS on WSL)'
      }
    },
    {
      path: '/aosc-os/asahi/relnote',
      name: 'asahirelnote',
      component: AoscAsahiRelnote,
      meta: {
        title: '发行注记（安同 OS，适用于基于 Apple 芯片的 Mac 设备）'
      }
    },
    {
      path: '/afterglow',
      name: 'afterglow',
      component: AfterglowIndex,
      meta: {
        title: '星霞 OS'
      }
    },
    {
      path: '/afterglow/requirements',
      name: 'afterglowsysreq',
      component: AfterglowRequirements,
      meta: {
        title: '系统配置需求表（星霞 OS）'
      }
    },
    {
      path: '/afterglow/isa',
      name: 'afterglowisamatrix',
      component: AfterglowIsa,
      meta: {
        title: '架构支持规格表（星霞 OS）'
      }
    },
    {
      path: '/afterglow/relnote',
      name: 'afterglowrelnote',
      component: AfterglowRelnote,
      meta: {
        title: '发行注记（星霞 OS）'
      }
    },
    {
      path: '/aoscc',
      name: 'aoscc',
      component: AosccIndex,
      meta: {
        title: 'AOSCC'
      }
    },
    {
      path: '/aoscc/:slug',
      name: 'aosccDetail',
      component: AosccDetail
    },
    {
      path: '/liblol',
      name: 'liblol',
      component: LiblolIndex,
      meta: {
        title: 'libLoL 兼容层'
      }
    },
    {
      path: '/oma',
      name: 'oma',
      component: OmaIndex,
      meta: {
        title: '小熊猫包管理'
      }
    },
    {
      path: '/l10n',
      name: 'l10n',
      component: I10nIndex,
      meta: {
        title: '软件本地化'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex,
      meta: {
        title: '联系方式'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryIndex,
      meta: {
        title: '活动相册'
      }
    },
    {
      path: '/guidelines',
      name: 'guidelines',
      component: GuidelinesIndex,
      meta: {
        title: '人际关系准则'
      }
    },
    {
      path: '/mascot',
      name: 'mascot',
      component: MascotIndex,
      meta: {
        title: '社区吉祥物'
      }
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsIndex,
      meta: {
        title: '赞助方一览'
      }
    },
    {
      path: '/crowdsourcing',
      name: 'crowdsourcing',
      component: CrowdsourcingIndex,
      meta: {
        title: '社区众筹'
      }
    },
    {
      path: '/crowdsourcing/:slug',
      name: 'crowdsourcingDetail',
      component: CrowdsourcingDetail,
      meta: {
        title: '社区众筹'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsIndex,
      meta: {
        title: '新闻资讯'
      }
    },
    {
      path: '/news/list/:category/:categoryTitle',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/news/detail/:newsPath/',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/mdView/:mdPath/',
      name: 'mdView',
      component: MdView
    },
    {
      path: '/paste',
      name: 'paste',
      component: PasteIndex,
      meta: {
        title: '公共粘贴板'
      }
    },
    {
      path: '/paste/detail',
      name: 'pasteDetail',
      component: PasteDetail,
      meta: {
        title: '公共粘贴板'
      }
    },
    {
      path: '/internship',
      name: 'Internship',
      component: InternshipIndex,
      meta: {
        title: '实习资源'
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: EventsIndex,
      meta: {
        title: '社区活动'
      }
    },
    {
      path: '/404',
      name: 'PageNotFound',
      meta: {
        title: '页面未找到'
      },
      component: PageNotFound
    },
    {
      path: '/:pathMatch(.*)',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return {
        top: 0
      };
    }
  }
});

router.afterEach((to, from) => {
  const meta = to.meta;
  if (meta && meta.title) {
    setTitle(meta.title);
  }
});

export default router;
