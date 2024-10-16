<script setup>
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="安同 OS 适合我吗？" id="aoscOsRequirementsTitle" />
    <div class="p-6">
      <p>
        安同 OS 是一款使用 dpkg 包管理、基于 Linux
        内核和各类组件独立构建和维护的操作系统。安同 OS 主要面向有一定 Linux
        使用经验的用户，针对个人设备优化体验。此外，安同 OS
        致力于开箱即用、简化系统管理和提供可靠的工作环境。 </p
      ><br />
      <p>
        安同 OS 是众多 Linux 发行版中的一员。因此，在选择 Linux
        发行版时，您也许苦于“选择困难症”。此文旨在从多方面介绍安同
        OS，以助您作出选择。
      </p>
    </div>
    <category-second title="设计理念" id="design" />
    <div class="p-6">
      <p>安同 OS 的设计基于如下目标和理念：</p>
      <div class="pt-4 pb-2 px-16">
        <ul class="list-disc">
          <li>如非必要不切分软件包，即每个应用一个软件包。</li>
          <li>为不同语言的用户提供良好的开箱体验。</li>
          <li>对开源和闭源软件一视同仁。</li>
          <li>重视系统可靠性。</li>
          <li>在不同架构上提供相近的功能和体验。</li>
        </ul>
      </div>
    </div>
    <category-second title="安同 OS 的主要优点" id="pros" />
    <div class="p-6">
      <p>安同 OS 主要优点如下：</p>
      <div class="pt-4 pb-2 px-16">
        <ul class="list-disc">
          <li>部署快捷，开箱即用。</li>
          <li>系统管理简单明了。</li>
          <li>维护者重视技术支持。</li>
          <li>闭源和商用软件支持良好。</li>
          <li>多语言支持开箱即用。</li>
          <li>硬件驱动支持完整。</li>
          <li>电源管理配置开箱即用。</li>
          <li>预装针对特定地区的网络连通工具。</li>
          <li>通过 Wine 提供良好的 Windows 应用支持。</li>
          <li>各架构体验统一且优化充分。</li>
        </ul>
      </div>
    </div>
    <category-second title="安同 OS 的主要缺点" id="cons" />
    <div class="p-6">
      <p>与此同时，安同 OS 有如下几个主要缺点，供您参考：</p>
      <div class="pt-4 pb-2 px-16">
        <ul class="list-disc">
          <li>系统比较庞大，相对于其他发行版需要更多存储空间。</li>
          <li>缺少 multilib 和 multiarch 支持，跨架构开发较为繁琐。</li>
          <li>软件仓库的规模较小。</li>
          <li>对第三方商业软件支持有限。</li>
          <li>维护者人手有限，软件修复和安全更新响应较慢。</li>
          <li>预装闭源和非自由软件。</li>
        </ul>
      </div>
    </div>
    <category-second title="适用场景" id="recommended-usage" />
    <div class="p-6">
      <p>适用本系统的场景如下：</p>
      <div class="pt-4 pb-2 px-16">
        <ul class="list-disc">
          <li>个人和家庭用途。</li>
          <li>硬件条件较为理想：存储充分且互联网连接较为稳定。</li>
          <li>对部署简易性有追求且偏好开箱即用的系统。</li>
          <li>对软件更新速度要求较低。</li>
          <li>笔记本电脑等能耗和散热性能敏感的设备。</li>
          <li>您希望参与安同 OS 开发。</li>
        </ul>
      </div>
    </div>
    <category-second title="不适用场景" id="discouraged-usage" />
    <div class="p-6">
      <p>我们不推荐在如下场景部署和使用安同 OS：</p>
      <div class="pt-4 pb-2 px-16">
        <ul class="list-disc">
          <li>无 Linux 使用和管理经验。</li>
          <li>对系统轻量化或可定制性有要求。</li>
          <li>对软件更新的响应速度要求较高。</li>
          <li>商用或有高可靠性需求的环境。</li>
          <li>公有云或虚拟服务器等存储成本较高的环境。</li>
          <li>对非自由软件敏感。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
