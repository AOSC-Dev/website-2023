<script setup></script>
const s=1
<template>
  <div class="pl-[1px]">
    <category-second title="社区众筹" />
    <div class="p-6">
      <p
        >根据社区<router-link to="/guidelines" class="text-link"
          >《人际关系准则》</router-link
        >的要求，社区不接受作为社区及项目运转资金之用的捐款。但由于我社作为无运作资本的志愿者社区，在社区日常运营及为具体项目购置大宗物件（如构建用服务器和
        AOSCC
        年度聚会等场合）时经常需要资金及物质支持。因此，我们接受针对特定项目及购买计划的金钱、物品（如电脑机箱、电源及硬盘等）及服务（如网站服务器资源等）捐赠。</p
      ><br />
      <p
        >您可以前往 Wiki 站点查阅<a
          class="text-link"
          href="https://wiki.aosc.io/community/crowdsourcing/"
          >众筹项目记录</a
        >。</p
      >
    </div>

    <category-second title="补充条例" />
    <div class="p-6">
      <ul class="list-disc py-6 pl-16">
        <li>
          资金及物品捐赠必须用于具体社区项目（例：为 AOSC OS
          移植构建或升级构建用服务器）。
        </li>
        <li>
          社区将鸣谢捐赠者，但捐赠者不会自动成为社区贡献者（后者享受如社区门户上的个人主页、Git
          写入访问及 @aosc.io 邮箱等福利）。捐赠者享有如下权利：
        </li>
        <ul class="list-disc pl-10">
          <li>捐赠者可请求访问其参与众筹的设备及服务。</li>
          <li>社区将通知捐赠者有关设备后续用途、维护及置换的具体事宜。</li>
        </ul>
        <li>在所需金额及物品集齐后，众筹项目即认定完成。</li>
        <li>如筹得额外资金，额外资金将按捐款顺序退还，直到还清为止。</li>
        <ul class="list-disc pl-10">
          <li>如捐款者不接受退款，可根据需要调整众筹内容。</li>
        </ul>
        <li>如众筹项目被取消，将全额退还捐款予捐赠者。</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
