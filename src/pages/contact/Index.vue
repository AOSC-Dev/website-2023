<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";

</script>

<template>
  <div class="pl-[1px]">
    <category-second title="联系方式" />
    <div class="p-6">
      <p>
        我社成员遍布世界各地，正因这一特质，我们的日常工作和交流基本都通过互联网进行。每天，社员们在我们的众多聊天群组中工作、交流和娱乐。
      </p>
      <br />
      <del>
        来啊，快活啊，反正有，……（被拖走）
      </del>
      <br />
    </div>

    <category-second title="聊天群组" />
    <div class="p-6">
      <p>如下列出的各组 Telegram 群组、Discord 聊天室、Matrix 房间及 IRC 频道均由转发机器人联通，请选择最适合自己的方式加入群聊。亦有 QQ 群和微信群可供使用（无转发）。</p><br />
      
    </div>

    <category-second title="主群组" />
    <div class="p-6">
      <p>社区主群组用于开发交流、技术支持及相关技术话题讨论。</p><br />
      <ul class="list-disc pl-10">
        <li>QQ — 群号 875059676</li>
        <li>微信 — 请联系公众号“安同开源”</li>
        <li>
          <span>Telegram — </span>
          <a href="https://t.me/aosc_main" class="text-link">加入群组</a>
        </li>
        <li>
          <span>Discord — </span>
          <a href="https://discord.gg/VYPHgt9" class="text-link">加入聊天室</a>
        </li>
        <li>
          <span>IRC: #aosc @ Libera Chat — </span>
          <a href="irc://irc.libera.chat:6697/aosc" class="text-link">加入频道</a>
        </li>
        <li>
          <span>Matrix: #aosc:matrix.aosc.io — </span>
          <a href="https://matrix.to/#/%23aosc:matrix.aosc.io" class="text-link">加入聊天室</a>
        </li>
      </ul>
    </div>

    <category-second title="古董计算机兴趣小组" />
    <div class="p-6">
      <p>该小组用于讨论各类古董软硬件及 Afterglow（星霞 OS）开发。</p><br />
      <ul class="list-disc pl-10">
        <li>
          <span>Telegram — </span>
          <a href="https://t.me/aosc_retro" class="text-link">加入群组</a>
        </li>
        <li>
          <span>Discord — </span>
          <a href="https://discord.gg/VYPHgt9" class="text-link">加入聊天室</a>
        </li>
        <li>
          <span>IRC: #aosc @ Libera Chat — </span>
          <a href="irc://irc.libera.chat:6697/aosc-retro" class="text-link">加入频道</a>
        </li>
        <li>
          <span>Matrix: #aosc:matrix.aosc.io — </span>
          <a href="https://matrix.to/#/%23retro:matrix.aosc.io" class="text-link">加入聊天室</a>
        </li>
      </ul>
    </div>

    <category-second title="水群（又称：托腮群）" />
    <div class="p-6">
      <p>
        水群用于讨论各式话题，但需注意遵守我社
        <router-link to="/guidelines">人际关系准则</router-link>
      </p><br />
      <ul class="list-disc pl-10">
        <li>
          <span>Telegram — </span>
          <a href="https://t.me/aosc_tuosai" class="text-link">加入群组</a>
        </li>
        <li>
          <span>Discord — </span>
          <a href="https://discord.gg/VYPHgt9" class="text-link">加入聊天室</a>
        </li>
        <li>
          <span>IRC: #aosc @ Libera Chat — </span>
          <a href="irc://irc.libera.chat:6697/aosc-offtopic" class="text-link">加入频道</a>
        </li>
        <li>
          <span>Matrix: #aosc:matrix.aosc.io — </span>
          <a href="https://matrix.to/#/%23offtopic:matrix.aosc.io" class="text-link">加入聊天室</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped></style>
./components/Header.vue
