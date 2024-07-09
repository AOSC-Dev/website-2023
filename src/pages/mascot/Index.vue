<script setup>
import { ref } from "vue";

const featureList1 = ref([
  {
    label: "生日",
    value: "12 月 1 日",
  },
  {
    label: "年龄",
    value: "???",
  },
  {
    label: "发色",
    value: "黑",
  },
  {
    label: "瞳色",
    value: "黑",
  },
  {
    label: "最喜欢的颜色",
    value: "红黄蓝白黑",
  },
  {
    label: "最喜欢的食物",
    value: "咸鱼煲仔饭、果冻、冰淇淋…… 是个吃货",
  },
  {
    label: "宠物",
    value: "同同、龙虾",
  },
]);

const featureList2 = ref([
  "安安小时候非常固执，数年前在 Linux 爱好者社区里大闹了一场，令她后悔不已。而后，她决定潜心学习开源相关技能，但仍然保持了自己的一些执着",
  "尽管几年来社交非常有限，但安安还是在社区里交到了许多朋友。",
  "她不喜欢干预他人的选择，总和朋友们说“适合自己的就是最好的”。",
  "她认为社区的意义在于分享乐趣和技能，自己也为了让 Linux 更为实用不断努力着。 ",
  "与其写日记，安安更喜欢通过收集社区里的各种梗来整理自己的记忆。",
  "安安是个无可救药的工作狂，工作时必须听着音乐。她工作时格外认真，对自己的要求也非常严格，但从来不会否定其他人的工作成果。 ",
]);

const featureList3 = ref([
  "安安喜欢收集好看的字体，认为优雅的文字也要有好字体的衬托。",
  "她也喜好言语上的推敲，对翻译的信达雅要求十分苛刻。",
]);

const featureList4 = ref([
  "安安家柜子里都放满了各种古董电脑和古怪设备，她还给每台都起了各种无厘头的名字。 ",
  "因为家里总运转着超过十台设备，室内温度总会比室外高出一截。 ",
  "安安家里有台叫“龙虾”的宠物服务器。 ",
]);
</script>

<template>
  <div class="px-[250px] py-7">
    <el-row>
      <el-col :span="14">
        <p>“龙虾龙虾龙虾！”</p>
        <p class="my-[20px]">
          安安本来是只兔子，但有一天早上醒来发现自己变成了长着兔耳和兔尾巴的人类。别的她似乎都记不起来了。
        </p>
        <ul class="list-disc list-inside">
          <li v-for="item in featureList1">
            <strong>{{ item.label }}：</strong>
            {{ item.value }}
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
        <img src="/assets/mascot/anan1.png" alt="anan" />
      </el-col>
    </el-row>

    <div class="my-[50px]">
      <ul class="list-disc list-inside">
        <li>
          安安性格内向，但在同伴间会展现出截然不同的性格：热心肠，耐心，还是个造梗狂魔。
        </li>
      </ul>
      <ul class="ml-[20px] list-disc list-inside">
        <li v-for="item in featureList2">
          {{ item }}
        </li>
      </ul>
    </div>

    <el-row>
      <el-col :span="10">
        <img src="/assets/mascot/anan2.webp" alt="anan" />
      </el-col>
      <el-col :span="14">
        <ul class="list-disc list-inside">
          <li>她通晓多种语言，是个本地化和文字排版爱好者。</li>
        </ul>
        <ul class="list-disc ml-[20px] list-inside">
          <li v-for="item in featureList3">
            {{ item }}
          </li>
        </ul>
        <ul class="list-disc list-inside">
          <li>她的业余爱好是折腾各种古董电脑。</li>
        </ul>
        <ul class="list-disc ml-[20px] list-inside">
          <li v-for="item in featureList4">
            {{ item }}
          </li>
        </ul>
      </el-col>
    </el-row>

<el-divider></el-divider>

    <p>
      本页上的艺术作品使用 <a class="text-link" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0">CC-BY-SA 4.0 International</a> 许可证进行授权。
    </p>
    <p class="py-[20px]">
      本吉祥物由钛山设计。钛山为自由及开源软件项目提供免费且许可开放的吉祥物设计服务。 有意者敬请联系：
      <a class="text-link" href="https://tysontan.com/" target="_blank">https://tysontan.com</a> 
      / 
      <a class="text-link" target="_blank" href="mailto:tysontan@tysontan.com">tysontan@tysontan.com</a>
    </p>
  </div>
</template>

<style scoped>
li {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
