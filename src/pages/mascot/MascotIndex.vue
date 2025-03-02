<script setup>
import LinkButton from '../../components/LinkButton.vue';
import AppLink from '../../components/AppLink.vue';

const navigationList = [
  {
    text: 'QQ 表情包',
    path: 'https://zb.vip.qq.com/hybrid/emoticonmall/detail?id=239191'
  },
  {
    text: 'Telegram 贴图包',
    path: 'https://t.me/addstickers/AnAnTongTong'
  },
  {
    text: '贴图包素材',
    path: 'https://repo.aosc.io/mascots/zhaxia-stickers-v1.zip'
  }
];
</script>

<template>
  <div class="grid grid-cols-1">
    <category-second title="社区吉祥物" />
    <div> <img class="w-full imgScale1" src="/assets/mascot/anan.png" /></div>
    <div class="grid grid-cols-2">
      <category-second title="安安和同同设定稿" />
      <category-second
        title="Minecraft 人物模型 (Figura)"
        class="border-l border-l-white" />
      <div class="flex">
        <div
          class="p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]"
          ><p>
            社区吉祥物安安和同同的原始设定稿由钛山设计，使用 CC BY-SA 4.0
            International
            许可证进行授权。钛山为自由及开源软件项目提供免费且许可开放的吉祥物设计服务。有意者敬请联系：
          </p>
          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                text="下载设定稿"
                link="https://github.com/AOSC-Dev/fumo-anan" />
            </div>
            <div class="grid grid-col-1 gap-y-3"
              ><app-link to="https://tysontan.com" class="text-link"
                >https://tysontan.com</app-link
              ><app-link to="mailto:tysontan@tysontan.com" class="text-link"
                >tysontan@tysontan.com</app-link
              ></div
            >
          </div>
        </div>
      </div>
      <div class="border-l flex theme-border-secondary">
        <div
          class="p-[1.75rem] flex flex-col justify-between text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]"
          ><p>
            社区吉祥物安安的 Minecraft 人物模型由社区好友 @安慕希 设计，面向
            <app-link to="https://figuramc.org/">Figura</app-link>
            模组制作。本人物模型使用 CC BY-SA 4.0 International 许可证进行授权。
          </p>
          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                text="下载人物模型"
                link="https://github.com/OvOla2/AnAn-Figura-avatar" />
            </div>
            <div class="grid grid-col-1 gap-y-3">
              <div class="invisible">占位</div><div class="invisible">占位</div>
            </div>
          </div>
        </div>
      </div>
      <category-second title="贴图包" />
      <category-second title="Fumo 设定稿" class="border-l border-l-white" />
      <div class="flex">
        <div class="p-[1.75rem] grid grid-cols-2">
          <div class="mr-[1.5rem]">
            <div>
              <img src="/assets/mascot/qr.png" alt="二维码" />
            </div>

            <p
              class="text-[0.95em] xl:text-[1.3em] 2xl:text-[1.5em] text-center">
              扫码获取微信贴图包
            </p>
          </div>
          <div
            class="flex flex-col justify-between text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
            <div
              v-for="(item, index) in navigationList"
              :key="`mascot-index-1-link-${index}`"
              class="flex flex-row"
              ><link-button
                class="w-full"
                :link="item.path"
                :text="item.text" />
              <div class="grid grid-col-1 gap-y-3 w-0 whitespace-pre">
                <div class="invisible">占位 </div
                ><div class="invisible">占位</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-l flex theme-border-secondary">
        <div
          class="p-[1.75rem] justify-between flex flex-col text-[0.8em] xl:text-[1.07em] 2xl:text-[1.2em]"
          ><p>
            社区吉祥物安安的 Fumo 布偶设定稿由“番茄炒蛋”社团画师 Yukata
            受用户委托设计，使用 CC BY-SA 4.0 International 许可证进行授权。
          </p>
          <p>
            “番茄炒蛋”社团提供付费可选商用的二次元形象 Fumo
            化设计服务，有意请点击<app-link
              to="https://m.tb.cn/h.TegyiGv?tk=zBfT3w1AVmz"
              class="text-link"
              >闲鱼</app-link
            >（常用联系方式）、<app-link
              to="https://huajia.163.com/main/profile/LBpmxjyE"
              class="text-link"
              >画加</app-link
            >
          </p>
          <div class="mt-[1rem] flex flex-row">
            <div class="w-[50%] mr-[2rem]">
              <link-button
                class="h-full my-auto"
                text="下载设定稿"
                link="https://repo.aosc.io/mascots/fumo.zip" /> </div
            ><div class="grid grid-col-1 gap-y-3">
              <div class="invisible">占位</div><div class="invisible">占位</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <category-second title="安安的故事" />
    <div class="flex p-[1.75rem]">
      <!-- 左边 -->
      <div class="basis-1/2 *:mb-[10px] pr-[1.75rem]">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;“龙虾龙虾龙虾！”</p>
        <p>
          安安本来是只兔子，但有一天早上醒来发现自己变成了长着兔耳和兔尾巴的人类……
        </p>
        <p>…… 别的她似乎都记不起来了。</p>
        <ul class="list-disc list-inside">
          <li>生日：12 月 1 日</li>
          <li>年龄：???</li>
          <li>发色：黑</li>
          <li>瞳色：黑</li>
          <li>最喜欢的颜色：红黄蓝白黑</li>
          <li>最喜欢的食物：咸鱼煲仔饭、果冻、冰淇淋……</li>
          <li>宠物：同同、龙虾</li>
        </ul>
        <p class="text-justify">
          安安性格内向，但在同伴间会展现出截然不同的性格：热心肠，耐心，还是个造梗狂魔。
        </p>
        <ul class="list-disc list-inside">
          <li>
            安安小时候非常固执，数年前在 Linux
            爱好者社区里大闹了一场，令她后悔不已。而后，她决定潜心学习开源相关技能，但仍然保持了自己的一些执着。
          </li>
          <li>尽管几年来社交非常有限，但安安还是在社区里交到了许多朋友。</li>
          <li>她不喜欢干预他人的选择，总和朋友们说“适合自己的就是最好的”。</li>
        </ul>
      </div>

      <!-- 右边 -->
      <div class="basis-1/2 *:mb-[10px] pl-[1.75rem]">
        <ul class="list-disc list-inside">
          <li>
            她认为社区的意义在于分享乐趣和技能，自己也为了让 Linux
            更为实用不断努力着。
          </li>
          <li>
            与其写日记，安安更喜欢通过收集社区里的各种梗来整理自己的记忆。
          </li>
          <li>
            安安是个无可救药的工作狂，工作时必须听着音乐。她工作时格外认真，对自己的要求也非常严格，但从来不会否定其他人的工作成果。
          </li>
        </ul>
        <p>她通晓多种语言，是个本地化和文字排版爱好者。</p>
        <ul class="list-disc list-inside">
          <li>安安喜欢收集好看的字体，认为优雅的文字也要有好字体的衬托。</li>
          <li>她也喜好言语上的推敲，对翻译的信达雅要求十分苛刻。</li>
        </ul>
        <p>她的业余爱好是折腾各种古董电脑。</p>
        <ul class="list-disc list-inside">
          <li>
            安安家柜子里都放满了各种古董电脑和古怪设备，她还给每台都起了各种无厘头的名字。
          </li>
          <li>因为家里总运转着超过十台设备，室内温度总会比室外高出一截。</li>
          <li>安安家里有台叫“龙虾”的宠物服务器。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  margin-top: 15px;
  margin-bottom: 15px;
}

.a-li {
  margin: 12px 0;
}
.imgScale1 {
  aspect-ratio: 7/3;
}
</style>
