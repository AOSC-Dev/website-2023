<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
import AppLink from '../../components/AppLink.vue';

const mainGroup = [
  {
    liText: 'QQ — 群号 875059676'
  },
  {
    liText: '微信 — 请联系公众号“安同开源”'
  },
  {
    spanText: 'Telegram — ',
    url: 'https://t.me/aosc_main',
    aText: '加入群组'
  },
  {
    spanText: 'Discord — ',
    url: 'https://discord.gg/VYPHgt9',
    aText: '加入聊天室'
  },
  {
    spanText: 'IRC: #aosc @ Libera Chat — ',
    url: 'irc://irc.libera.chat:6697/aosc',
    aText: '加入频道'
  },
  {
    spanText: 'Matrix: #aosc:matrix.aosc.io — ',
    url: 'https://matrix.to/#/%23aosc:matrix.aosc.io',
    aText: '加入聊天室'
  }
];

const antiqueComputer = [
  {
    spanText: 'Telegram — ',
    url: 'https://t.me/aosc_retro',
    aText: '加入群组'
  },
  {
    spanText: 'Discord — ',
    url: 'https://discord.gg/VYPHgt9',
    aText: '加入聊天室'
  },
  {
    spanText: 'IRC: #aosc-retro @ Libera Chat — ',
    url: 'irc://irc.libera.chat:6697/aosc-retro',
    aText: '加入频道'
  },
  {
    spanText: 'Matrix: #retro:matrix.aosc.io — ',
    url: 'https://matrix.to/#/%23retro:matrix.aosc.io',
    aText: '加入聊天室'
  }
];

const waterGroup = [
  {
    spanText: 'Telegram — ',
    url: 'https://t.me/aosc_tuosai',
    aText: '加入群组'
  },
  {
    spanText: 'Discord — ',
    url: 'https://discord.gg/VYPHgt9',
    aText: '加入聊天室'
  },
  {
    spanText: 'IRC: #aosc-offtopic @ Libera Chat — ',
    url: 'irc://irc.libera.chat:6697/aosc-offtopic',
    aText: '加入频道'
  },
  {
    spanText: 'Matrix: #offtopic:matrix.aosc.io — ',
    url: 'https://matrix.to/#/%23offtopic:matrix.aosc.io',
    aText: '加入聊天室'
  }
];
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="联系方式" />
    <div class="p-6">
      <p>
        我社成员遍布世界各地，正因这一特质，我们的日常工作和交流基本都通过互联网进行。每天，社区好友们在我们的众多聊天群组中工作、交流和娱乐。
      </p>
    </div>

    <category-second title="聊天群组" />
    <div class="p-6">
      <p
        >如下列出的各组 Telegram 群组、Discord 聊天室、Matrix 房间及 IRC
        频道均由转发机器人联通，请选择最适合自己的方式加入群聊。亦有 QQ
        群和微信群可供使用（无转发）。</p
      >
    </div>

    <category-second title="主群组" id="main" />
    <div class="p-6">
      <p>社区主群组用于开发交流、技术支持及相关技术话题讨论：</p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in mainGroup" :key="index">
          <span v-if="item.spanText">{{ item.spanText }}</span>
          <AppLink v-if="item.url" :to="item.url">{{ item.aText }}</AppLink>
          {{ item.liText }}
        </li>
      </ul>
    </div>

    <category-second title="古董计算机兴趣小组" id="retro" />
    <div class="p-6">
      <p>该小组用于讨论各类古董软硬件及 Afterglow（星霞 OS）开发。</p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in antiqueComputer" :key="index">
          <span v-if="item.spanText">{{ item.spanText }}</span>
          <AppLink v-if="item.url" :to="item.url">{{ item.aText }}</AppLink>
          {{ item.liText }}
        </li>
      </ul>
    </div>

    <category-second title="水群（又称：托腮群）" id="offtopic" />
    <div class="p-6">
      <p>
        水群用于讨论各式话题，但需注意遵守我社
        <AppLink to="/guidelines">人际关系准则</AppLink>
      </p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in waterGroup" :key="index">
          <span v-if="item.spanText">{{ item.spanText }}</span>
          <AppLink v-if="item.url" :to="item.url">{{ item.aText }}</AppLink>
          {{ item.liText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
