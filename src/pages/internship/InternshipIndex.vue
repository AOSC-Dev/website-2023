<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';

const navigationList = [
  {
    title: '英雄帖：待办项目',
    hash: '#todo'
  },
  {
    title: '实习项目：开源之夏',
    url: '#ospp'
  }
];
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="实习资源" />
    <div class="p-6">
      <p>
        我社重视围绕开源软件生态协作共进及技能共享：近年来，我社每年还以导师身份安排贡献者参与国内外的开源项目推进活动，如中国科学院软件研究所（下略：中科院软件所）的“开源之夏”活动，带领国内外高校学生锻炼应用和研发能力、积累专业经验。 </p
      ><br />
      <p>
        除上述活动外，我社众多项目均由贡献者志愿参与维护与管理。社区许多项目不仅与其他社区乃至上游项目有直接及密切的联系，在行业内亦有一定知名度。过去数年中，许多贡献者通过参与社区项目和管理锻炼了技术能力、积累了个人经验，在就业时亦充分证明了这些经验的积极意义。 </p
      ><br />
      <p>
        本页面介绍社区历史上参与的实习项目，并对当前人力紧迫和待办的项目进行简要介绍，供各位社区好友参考。 </p
      ><br />
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
    </div>

    <category-second title="英雄帖：待办项目" id="todo" />
    <div class="p-6">
      <p>
        我社项目繁多但人员稀少，天马行空的大坑也好，细处着手的小事也罢，常常因为人力问题难以得到实施。如下是眼下有待完成的项目，欢迎您通过<router-link
          class="text-[#0056cc] no-underline"
          to="/contact"
          >各聊天群组</router-link
        >与我们联系，从英雄帖拿下属于您的立功机会：
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li><b>安同 OS：</b>改善 RISC-V 架构支持情况并制作安装介质</li>
          <li><b>安同 OS：</b>制作并发布虚拟机（及云服务）镜像</li>
          <li><b>星霞 OS：</b>编写维护指南并进行特性规划</li>
          <li
            ><b>社区门户：</b
            >实现“支持中心”栏目（框架搭建、内容编写及索引功能等）</li
          >
          <li
            ><b>社区外宣：</b>为 Bilibili 及 YouTube
            平台制作指南与用户支持视频</li
          >
        </ul>
      </div>
    </div>

    <category-second title="实习项目：开源之夏" id="ospp" />
    <div class="p-6">
      <p>
        自 2020
        年起，我社贡献者以导师的角色积极参与中科院软件所的“开源之夏”活动，成功指导多名学生完成实习项目，直接参与到社区的贡献中来。如下是我们过去参与指导的项目列表：
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li
            ><b>开源之夏 2024：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/org/prodetail/24f3e0160"
              >自由及开源软件简中本地化工作（导师：白铭骢）</a
            ></li
          >
          <li
            ><b>开源之夏 2024：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/org/prodetail/24f3e0161"
              >设计编写安同 OS 用户手册及编写规范（导师：温柔）</a
            ></li
          >
          <li
            ><b>开源之夏 2024：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/org/prodetail/24f3e0162"
              >为 RISC-V 开发板提供安同 OS 系统镜像（导师：Icenowy Zheng）</a
            ></li
          >
          <li
            ><b>开源之夏 2023：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2023/org/prodetail/23f3e0031"
              >为 实现 DeployKit 图形界面（导师：刘子兴）</a
            ></li
          >
          <li
            ><b>开源之夏 2023：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2023/org/prodetail/23f3e0032"
              >自由及开源软件简中本地化工作（导师：刘子兴，学生：刘万涛）</a
            ></li
          >
          <li
            ><b>开源之夏 2023：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2023/org/prodetail/23f3e0033"
              >Autobuild 3 自动化打包测试框架（导师：黄烜宁，学生：李泽睿）</a
            ></li
          >
          <li
            ><b>开源之夏 2022：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2022/#/org/prodetail/22f3e0079"
              >全志 RISC-V 芯片主线化开发工作（导师：Icenowy Zheng，学生：Moteen
              Shah）</a
            ></li
          >
          <li
            ><b>开源之夏 2022：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2022/#/org/prodetail/22f3e0080"
              >AOSC 的软件包信息站重实现（导师：刘子兴，学生：桂民强）</a
            ></li
          >
          <li
            ><b>开源之夏 2021：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2021/#/org/prodetail/210080041"
              >全志 RISC-V 芯片主线化开发工作（导师：Icenowy Zheng）</a
            ></li
          >
          <li
            ><b>开源之夏 2021：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2021/#/org/prodetail/210080042"
              >半自动软件包退休、封存与整理系统（导师：张顺然，学生：李宗汶）</a
            ></li
          >
          <li
            ><b>开源之夏 2021：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2021/#/org/prodetail/210080099"
              >自由及开源软件简中本地化工作（导师：白铭骢，学生：龚健威）</a
            ></li
          >
          <li
            ><b>开源之夏 2021：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2021/#/org/prodetail/210080100"
              >安装程序 DeployKit 的实现（导师：刘子兴）</a
            ></li
          >
          <li
            ><b>开源之夏 2021：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2021/#/org/prodetail/210080299"
              >AOSC OS 的 LoongArch 移植（导师：白铭骢，学生：许彦骐）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >半自动软件包退休、封存与整理系统（导师：张顺然，学生：穆信东）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >自由及开源软件简中本地化工作（导师：白铭骢，学生：徐玮毅）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >发行版构建自动化：打包调度器（导师：Dingyuan Wang）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >发行版构建自动化：自动化测试框架（导师：Dingyuan Wang）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >安装程序 DeployKit 的实现（导师：黎民雍）</a
            ></li
          >
          <li
            ><b>开源之夏 2020：</b
            ><a
              class="text-[#0056cc] no-underline"
              href="https://summer-ospp.ac.cn/2020/#/organisations/aosc"
              >为 libinput 框架实现“划圈滚动 (Circular
              Srolling)”（导师：白铭骢）</a
            ></li
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
