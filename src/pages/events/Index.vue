<script setup>
import CategorySecond from '@/components/CategorySecond.vue';

const navigationList = [
  {
    title: 'AOSCC：社区年度聚会',
    hash: '#support',
  },
  {
    title: '安同校园行',
    hash: '#campus',
  },
  {
    title: '春节烙饼会',
    hash: '#springcon',
  },
  {
    title: '其他活动',
    hash: '#others',
  },
];
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="社区活动" />
    <div class="p-6">
      <p>
        除日常开发活动外，我社还定期组织形式多样的线上及线下活动，
        以期活跃社区氛围、分享社区资源。作为主要活跃于互联网的开源社区，这些活动亦有拉近人际关系、让社区贡献及参与的概念具象化的作用。社区自
        2015 年起每年暑期均会举办名为 AOSCC
        的年度聚会，邀请包括社区贡献者、成员、校园社团、企业和个人参与，在向外界宣传社区工作的同时，为爱好者和行业代表提供了分享技术技巧和行业知识及动向的平台。自
        2024
        年起，我们还组织了春节“烙饼会”，与社区好友们共享节日气氛，谋划来年的工作目标。
      </p>
      <br />
      <p>此外，社区还积极组织与高校社团协办“安同校园行”活动，并参与许多由</p>
      <br />
      <div>
        <AccordionNavigation :navigationList="navigationList" />
      </div>
    </div>

    <category-second title="AOSCC：社区年度聚会" id="aoscc" />
    <div class="p-6">
      <p>
        AOSCC
        是我社每年一度的线下聚会，公开邀请社区好友参与。活动期间，社区邀请社区贡献者、高校社团成员和行业代表等分享、交流工作，并组织抽奖、代号投票等趣味活动。近年来，AOSCC
        均由中国高校社团协办，每年吸引超过 100 来自与会者参与。以下是自 2015
        年的 AOSCC 活动地点、日期和会议信息记录：
      </p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li>
            <b>2024 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2024/"
              >吉林大学（2024 年 7 月 13 - 14 日）</a
            >
          </li>
          <li>
            <b>2023 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2023/"
              >上海科技大学（2023 年 7 月 15 - 16 日）</a
            >
          </li>
          <li>
            <b>2022 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2022/"
              >由于新冠肺炎疫情，于线上举办（2022 年 9 月 17 日）</a
            >
          </li>
          <li>
            <b>2021 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2021/"
              >由于新冠肺炎疫情，于线上举办（2021 年 9 月 19 - 20 日）</a
            >
          </li>
          <li>
            <b>2020 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2020/"
              >由于新冠肺炎疫情，于线上举办（2020 年 9 月 25 - 26 日）</a
            >
          </li>
          <li>
            <b>2019 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2019/"
              >中国科学技术大学（2019 年 7 月 12 - 14 日）</a
            >
          </li>
          <li><b>2018 年：</b>聚会取消</li>
          <li>
            <b>2017 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://wiki.aosc.io/zh/community/aoscc/2017/"
              >广东工业大学（2019 年 7 月 14 - 16 日）</a
            >
          </li>
          <li><b>2016 年：</b>上海科技大学（2016 年 7 月）</li>
          <li><b>2015 年：</b>深圳长虹科技大厦（2015 年 7 月）</li>
        </ul>
      </div>
    </div>

    <category-second title="安同校园行" id="campus" />
    <div class="p-6">
      <p>
        安同开源社区从校园诞生，校园及草根开源社区和组织的发展也是社区建立时的初心之一。如今，高校社团亦是我社关注和扶持的对象。自
        2024
        年起，我们与众多高校社团协作，组织“安同校园行”活动，邀请社区贡献者、行业代表等走进校园，分享社区和专业工作经验，让更多学生接触、了解和融入开源社区乃至行业前沿。
      </p>
      <br />
      <p>如下是我社“安同校园行”的足迹：</p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li>
            <b>2024 年 3 月：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://www.bilibili.com/video/BV1wr42187aT/?spm_id_from=333.999.0.0"
              >曲阜师范大学（“社团开放活动：计算进化”）</a
            >
          </li>
        </ul>
      </div>
      <p>如下是近期规划内的“安同校园行”目的地：</p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li><b>2024 年 10 月：</b>宁夏理工学院</li>
          <li><b>2024 年 9 月：</b>南阳理工学院</li>
        </ul>
      </div>
    </div>

    <category-second title="春节烙饼会" id="springcon" />
    <div class="p-6">
      <p>
        自 2023
        年始，为更及时地展示和沟通社区工作进展和规划，我们开始在春节假期组织线上“烙饼会”（取画饼之意），邀请贡献者和社区好友一道交流成果、计划与期望。如下是往期“烙饼会”的直播录像：
      </p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li>
            <b>2024 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://www.bilibili.com/video/BV1Fj421X7gX"
              >甲辰烙饼会（2024 年 2 月 15 日）</a
            >
          </li>
        </ul>
      </div>
    </div>

    <category-second title="其他活动" id="others" />
    <div class="p-6">
      <p>
        作为社区、校园乃至企业交流的一环，社区贡献者积极参与各公开会议、聚会活动。如下是我们的参与记录及录像：
      </p>
      <div class="pt-4 pb-4 px-16">
        <ul class="list-disc">
          <li>
            <b>2024 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://www.bilibili.com/video/BV1K142127oB"
              >开源之夏 2024
              校园行：吉林大学（白铭骢：一个草根社区的自白——安同开源社区、开源产业与全民信创）</a
            >
          </li>
          <li>
            <b>2024 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://www.bilibili.com/video/BV1K142127oB"
              >北京大学 Linux 俱乐部与清华大学 TUNA 协会协办：Towards Modern
              Distro（白铭骢：从 AOSC OS 浅谈发行版社区的日常、雄心和无奈）</a
            >
          </li>
          <li>
            <b>2022 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://repo.aosc.io/aosc-documentation/fosdem-2022/20210113-slides.odp"
              >FOSDEM 2022（白铭骢：AOSC OS/Retro - Our Ongoing Quest for the
              Possibility of Modern Linux on Vintage Hardware）</a
            >
          </li>
          <li>
            <b>2018 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://repo.aosc.io/aosc-documentation/soscon-2018/slide.pdf"
              >学生开源年会
              (SOSCON18)（白铭骢、黎民雍：从宣传队到大社团——安同开源社区的历史、项目和文化综述）</a
            >
          </li>
          <li>
            <b>2014 年：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://repo.aosc.io/aosc-documentation/hkosc-2014/HK_Presentation.pdf"
              >香港开源人年会 (HKOSC
              2014)（叶晓星：安同開源社區——開源青春，開源中國）</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
