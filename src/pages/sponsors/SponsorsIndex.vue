<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
import { ref } from 'vue';

const sponsorList = ref([
  {
    title: '服务与设施',
    list: [
      {
        name: '光圈网络 (Apernet Internet Laboratory)',
        web: 'https://apernet.io/',
        img: 'apernet'
      },
      {
        name: 'GlobalSign',
        web: 'https://www.globalsign.com/',
        img: 'globalsign'
      },
      {
        name: '龙芯中科（武汉）技术有限公司',
        web: 'https://www.loongson.cn/',
        img: 'loongson'
      },
      {
        name: 'Microsoft Open Source',
        web: 'https://opensource.microsoft.com/',
        img: 'microsoft'
      }
    ]
  },
  {
    title: '镜像源',
    list: [
      {
        name: '北京大学开源镜像站',
        web: 'https://mirrors.pku.edu.cn/',
        img: 'pku'
      },
      {
        name: '北京外国语大学开源软件镜像站',
        web: 'https://mirrors.bfsu.edu.cn/',
        img: 'bfsu'
      },
      {
        name: '电子科技大学 Linux 用户组',
        web: 'https://uestclug.org/',
        img: 'uestclug'
      },
      {
        name: 'Fastly CDN',
        web: 'https://www.fastly.com/products/cdn',
        img: 'fastly'
      },
      {
        name: '哈尔滨工业大学 Linux 开源学生俱乐部',
        web: 'https://github.com/hitlug',
        img: 'hit-lug'
      },
      {
        name: '荷兰本地 Unix 用户组 (NLUUG)',
        web: 'https://nluug.nl/',
        img: 'nluug'
      },
      {
        name: 'Hexhu',
        web: 'https://arch.hu.fo/',
        img: 'hexhu'
      },
      {
        name: '吉林大学 Linux 用户协会',
        web: 'https://jlulug.org/',
        img: 'jlu-lug'
      },
      {
        name: '兰州大学开源社区 (LZUOSS)',
        web: 'https://github.com/lzuoss',
        img: 'lzuoss'
      },
      {
        name: '南京大学 e-Science 中心',
        web: 'https://sci.nju.edu.cn/',
        img: 'nju-lug'
      },
      {
        name: '南阳理工学院计算机与信息化处理协会',
        web: 'https://cips.nyist.edu.cn/',
        img: 'nyist-cips'
      },
      {
        name: '齐鲁工业大学开源软件镜像站 ',
        web: 'https://mirrors.qlu.edu.cn/',
        img: 'qlu'
      },
      {
        name: '清华大学 TUNA 协会',
        web: 'https://tuna.moe/',
        img: 'tuna'
      },
      {
        name: '山东大学（青岛）网管会镜像站学生运营团队',
        web: 'https://mirrors.sdu.edu.cn/',
        img: 'sdu'
      },
      {
        name: '上海交通大学 Linux 用户组',
        web: 'https://mirror.sjtu.edu.cn/',
        img: 'sjtug'
      },
      {
        name: '南方科技大学开源软件镜像站',
        web: 'https://mirrors.sustech.edu.cn/',
        img: 'sustech'
      },
      {
        name: '上海科技大学 Geekpie 协会',
        web: 'https://geekpie.club/',
        img: 'geekpie'
      },
      {
        name: '腾讯云',
        web: 'https://cloud.tencent.com/',
        img: 'tencent-cloud'
      },
      {
        name: '中国科学技术大学 Linux 用户组 (LUG@USTC)',
        web: 'https://lug.ustc.edu.cn/',
        img: 'lug-ustc'
      },
      {
        name: '中山大学网络与信息中心 & Matrix 开发团队',
        web: 'https://mirror.sysu.edu.cn/',
        img: 'sysu'
      }
    ]
  },
  {
    title: '开发设备',
    list: [
      {
        name: 'Banana Pi 社区',
        web: 'https://www.banana-pi.org/',
        img: 'bpi'
      },
      {
        name: '龙芯中科（武汉）技术有限公司',
        web: 'https://www.loongson.cn/',
        img: 'loongson'
      },
      {
        name: 'PLCT 实验室',
        web: 'https://plctlab.org/zh/',
        img: 'plct'
      },
      {
        name: 'PINE64',
        web: 'https://pine64.org/',
        img: 'pine64'
      }
    ]
  },
  {
    title: '软件许可',
    list: [
      {
        name: 'CodeWeavers',
        web: 'https://www.codeweavers.com/',
        img: 'crossover'
      },
      {
        name: 'JetBrains',
        web: 'https://www.jetbrains.com/',
        img: 'jetbrains'
      }
    ]
  }
]);

const sponsorsListHistoric = ref([
  {
    title: '历史赞助方（服务与设施）',
    list: [
      {
        name: 'FuslVZ',
        web: 'https://fuslvz.ws/',
        img: 'fuslvz'
      },
      {
        name: 'KoDDoS',
        web: 'https://koddos.net/',
        img: 'koddos'
      },
      {
        name: 'OSSPlanet',
        web: 'https://ossplanet.net/',
        img: 'ossplanet'
      },
      {
        name: '青云 QingCloud',
        web: 'https://www.qingcloud.com/',
        img: 'qingcloud'
      },
      {
        name: 'SB Blog',
        web: 'https://sb.sb/',
        img: 'sb-blog'
      },
      {
        name: 'xTom',
        web: 'https://xtom.com/',
        img: 'xtom'
      }
    ]
  },
  {
    title: '历史赞助方（镜像源）',
    list: [
      {
        name: '重庆大学蓝盟',
        web: 'http://lanunion.cqu.edu.cn/',
        img: 'cqu-lanunion'
      },
      {
        name: '重庆邮电大学 Linux 用户组',
        web: 'https://github.com/cquptlug',
        img: 'cqupt-lug'
      },
      {
        name: 'QVQNetwork',
        web: 'https://mirrors.qvq.net.cn/',
        img: 'qvq'
      },
      {
        name: '上海大学开源社区',
        web: 'https://www.shuosc.org/',
        img: 'shuosc'
      },
      {
        name: '首都在线',
        web: 'http://mirrors.capitalonline.net/',
        img: 'cods'
      }
    ]
  }
]);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="赞助方一览" />
    <div class="p-6">
      多年来，社区内外诸多好友慷慨解囊，提供诸如服务器托管、测试设备和镜像源等形式的持续支持。在降低项目开发维护成本和提高工作体验的同时，也让社区各项目的用户们享受到了尽可能好的服务质量。赞助方们的大力支持让安同开源社区在保持独立运作、志愿驱动的基本原则的同时得以存活和发展，我们在此展示社区当今及历史上的各赞助单位与个人，谨以此表达我们由衷的感激。
    </div>

    <div v-for="item in sponsorList" :key="item.title">
      <category-second :title="item.title" />
      <div class="p-6">
        <div class="grid grid-cols-4 gap-6 p-2">
          <a
            v-for="sponsor in item.list"
            :key="sponsor.name"
            class="cursor-pointer text-center"
            :href="sponsor.web"
            target="_blank">
            <div class="min-h-[91.74px]">
              <img
                loading="lazy"
                :src="`/assets/sponsors/${sponsor.img}.svg`"
                :alt="sponsor.name"
                class="w-[100%] max-w-[100%]" />
            </div>
            <div class="text-link">{{ sponsor.name }}</div>
            <div v-if="sponsor.name == 'JetBrains'">
              <span style="font-size: 0.7rem; color: #666">
                Copyright © 2000-2024 JetBrains s.r.o. JetBrains and the
                JetBrains logo are registered trademarks of JetBrains s.r.o.
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <category-second title="个人捐赠者" />
    <div class="p-6">
      <p>
        社区的持续运行同样离不开离不开社区好友以个人名义的捐赠，多年来，他们向社区捐赠各类硬件、积极参与社区发起的众筹项目，在支持各社区项目维护高效运转的同时，还为社区贡献者们分担了许多经济压力。 </p
      ><br />
      <p>
        2025
        年前，社区未有鸣谢个人捐赠者的流程，亦有提出希望保持匿名的朋友，因此本列表并不完整。我社谨以本节鸣谢一切未有留名的个人捐赠者。 </p
      ><br />

      <table>
        <caption class="text-[12pt] font-semibold">
          AOSCC 2025 会务款项（2025 年 7 月 19 日）
        </caption>
        <tbody>
          <tr>
            <td>Alpine 中文小群</td>
            <td>baka</td>
            <td>Camelia Atelier@CLS</td>
            <td>ChiyoYuki</td>
          </tr>
          <tr>
            <td>冲浪的小鱼</td>
            <td>Christine Gu</td>
            <td>Deng</td>
            <td>邓子 (Deng Yichao)</td>
          </tr>
          <tr>
            <td>Frank@xdlinux</td>
            <td>禾风之水</td>
            <td>imgradeone</td>
            <td>KF</td>
          </tr>
          <tr>
            <td>林子</td>
            <td>lz差不多是条咸鱼了</td>
            <td>猫叔</td>
            <td>喵酱Catty</td>
          </tr>
          <tr>
            <td>Mikura Kyouka</td>
            <td>内蒙古合诚网络科技有限公司</td>
            <td>内蒙古墨云网络科技有限公司</td>
            <td>匿</td>
          </tr>
          <tr>
            <td>nobootleg</td>
            <td>曲阜师范大学计算机爱好者协会</td>
            <td>蚊子 (Mozz.ie)</td>
            <td>御坂云见#17535</td>
          </tr>
          <tr>
            <td>自言者一么</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <br />

      <table>
        <caption class="text-[12pt] font-semibold">
          软件源源服务器冷存储用硬盘（2025 年 2 月 6 日）
        </caption>
        <tbody>
          <tr>
            <td>冲浪的小鱼</td>
            <td>黄逸君</td>
            <td>kf</td>
            <td>刘璨贤</td>
          </tr>
          <tr>
            <td>okami2012</td>
            <td>要塞姬Ilikara</td>
            <td>Yo Kaslana</td>
            <td>梓瑶</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-for="item in sponsorsListHistoric" :key="item.title">
      <category-second :title="item.title" />
      <div class="p-6">
        <div class="grid grid-cols-4 gap-6 p-2">
          <a
            v-for="sponsor in item.list"
            :key="sponsor.name"
            class="cursor-pointer text-center"
            :href="sponsor.web"
            target="_blank">
            <div class="min-h-[91.74px]">
              <img
                loading="lazy"
                :src="`/assets/sponsors/${sponsor.img}.svg`"
                :alt="sponsor.name"
                class="w-[100%] max-w-[100%]" />
            </div>
            <div class="text-link">{{ sponsor.name }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
