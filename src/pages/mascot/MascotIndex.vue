<script setup>
import LinkButton from '../../components/LinkButton.vue';
import { onImgLoad, useSeizeSeat } from '../../utils/utils';

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
const [observer1, buffer] = useSeizeSeat('bgImg1', 2.3333);
const [observer2, imgHeights] = useSeizeSeat('bgImg2', 1, buffer);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="社区吉祥物" />
    <div ref="bgImg1" class="bg-img-height1">
      <img
        @load="onImgLoad(observer1, imgHeights[0])"
        src="/assets/mascot/anan.png"
    /></div>

    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second title="贴图包" class="border-r border-r-white" />
        <div
          class="p-[2rem] flex justify-between border-r-[1px] theme-border-secondary">
          <div class="basis-1/2 mr-[1em]">
            <div ref="bgImg2" class="bg-img-height2">
              <img
                @load="onImgLoad(observer2, imgHeights[1])"
                src="/assets/mascot/qr.png"
                alt="二维码" />
            </div>

            <p
              class="text-[0.95em] xl:text-[1.3em] 2xl:text-[1.5em] text-center">
              扫码获取微信贴图包
            </p>
          </div>
          <div class="basis-1/2 ml-[1em] flex flex-col justify-between">
            <LinkButton
              class="basis-1/4"
              v-for="(item, index) in navigationList"
              :link="item.path"
              :text="item.text"
              :key="index" />
          </div>
        </div>
      </div>

      <div>
        <category-second title="设定稿" />
        <div class="p-[2em] justify-between h-[calc(100%-2em)] flex">
          <div class="my-auto">
            <p class="text-[0.8em] xl:text-[1.07em] 2xl:text-[1.2em]">
              本设定稿由钛山设计，使用 CC-BY-SA 4.0 International
              许可证进行授权。钛山为自由及开源软件项目提供免费且许可开放的吉祥物设计服务。有意者敬请联系：
            </p>
            <div class="flex flex-row">
              <div class="flex flex-col w-full py-[18px] mr-12">
                <link-button
                  class="h-full my-auto"
                  text="设定稿"
                  link="https://repo.aosc.io/mascots/mascots.zip" />
              </div>
              <ul class="text-[0.8em] xl:text-[1.07em] 2xl:text-[1.2em]">
                <li
                  ><a href="https://tysontan.com" class="text-link"
                    >https://tysontan.com</a
                  ></li
                >
                <li>
                  <a href="mailto:tysontan@tysontan.com" class="text-link"
                    >tysontan@tysontan.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <category-second title="安安的故事" />
    <div class="flex p-[2em]">
      <!-- 左边 -->
      <div class="basis-1/2 *:mb-[10px] pr-[2em]">
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
      <div class="basis-1/2 *:mb-[10px] pl-[2em]">
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

.bg-img-height1 {
  height: v-bind('imgHeights[0].value');
}
.bg-img-height2 {
  height: v-bind('imgHeights[1].value');
}
</style>
