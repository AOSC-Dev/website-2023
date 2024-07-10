<script setup>
import { ref } from "vue";

const btnWidth = ref(240);
const btnHeight = ref(70);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="社区吉祥物" />
    <img src="/assets/mascot/anan.png" />

    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second title="贴图包" class="border-r border-r-white" />
        <div
          class="p-[1.5rem] flex justify-between border-r-[1px] border-r-solid border-r-secondary"
        >
          <div class="basis-1/2 mr-[10px]">
            <img src="/assets/mascot/qr.png" alt="二维码" />

            <p
              class="lg:text-[1em] xl:text-[1.3em] 2xl:text-[1.5em] text-center"
            >
              扫码获取微信贴图包
            </p>
          </div>
          <div class="basis-1/2 ml-[10px] flex flex-col justify-between">
            <link-button
              class="basis-1/4"
              text="QQ 表情包"
              link="https://zb.vip.qq.com/hybrid/emoticonmall/detail?id=239191"
            />
            <link-button
              class="basis-1/4"
              text="Telegram 贴图包"
              :height="btnHeight"
              link="https://t.me/addstickers/AnAnTongTong"
            />
            <link-button
              class="basis-1/4"
              text="贴图包素材"
              :height="btnHeight"
              link="https://repo.aosc.io/mascots/zhaxia-stickers-v1.zip"
            />
          </div>
        </div>
      </div>

      <div>
        <category-second title="设定稿" />
        <div class="p-[1.5em] flex flex-col justify-between h-[calc(100%-2em)]">
          <div class="lg:text-[0.7em] xl:text-[1.1em] 2xl:text-[1.2em]">
            本设定稿由钛山设计，使用 CC-BY-SA 4.0International
            许可证进行授权。钛山为自由及开源软件项目提供免费且许可开放的吉祥物设计服务。有意者敬请联系：
          </div>
          <div
            class="my-[10px] lg:text-[0.7em] xl:text-[1.1em] 2xl:text[1.2em]"
          >
            <a href="https://tysontan.com" class="text-link"
              >https://tysontan.com</a
            >/
            <a href="mailto:tysontan@tysontan.com" class="text-link"
              >tysontan@tysontan.com</a
            >
          </div>
          <link-button
            class="w-1/2 basis-1/4"
            text="设定稿"
            link="https://repo.aosc.io/mascots/mascots.zip"
          />
        </div>
      </div>
    </div>
    <category-second title="安安的故事" />
    <div class="flex p-[20px]">
      <!-- 左边 -->
      <div class="basis-1/2 *:mb-[10px] pr-[20px]">
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
      <div class="basis-1/2 *:mb-[10px] pr-[20px]">
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
</style>
