<script setup>
import CategorySecond from '/src/components/CategorySecond.vue';
import AppH2 from '../../components/AppH2.vue';
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="人际关系准则" />
    <div class="p-6">
      <p class="pb-8"> 欢迎来到创立于 2011 年的安同开源社区 (AOSC) ！ </p>
      <i
        >&nbsp;&nbsp;“All the people who live in a particular area, or a group
        of people who are considered as a unit because of their shared interests
        or background.”</i
      >
      <p class="py-2 pb-8">
        — Community (n.), definition from the
        <a
          href="https://dictionary.cambridge.org/dictionary/english/community"
          class="text-link"
          target="_blank">
          Cambridge English Dictionary</a
        >
      </p>
      <p>
        作为安同开源社区的一分子，我们共同的爱好就是探索计算机技术，特别是开源软件的发展和本地化。数年来，安同开源社区将大部分的精力放在了
        AOSC OS 这一发行版及多个社区成员们的兴趣项目。例如在 2019 年我们创建了
        AOSC 古董计算机兴趣小组 (AOSC Retro Computing
        Group)，为古董电脑爱好者提供了一个购买、折腾、把玩古董电脑的交流平台，我们甚至为这些电脑移植和适配了
        AOSC OS。
      </p>
      <br />
    </div>

    <category-second title="我们为什么需要社区准则" id="rationale" />
    <div class="p-6">
      <p
        >没有多年的交流与碰撞，是不会有安同开源社区的 ——
        这些交流和碰撞直接影响到了我们的社群意识。有鉴于此，有必要对我们社区的价值观作出集中解释。在我们列出所有具体的指导方针之前，特此说明：这个准则列出的是社区成员公认的，适用于所有社区成员的准则。
        <b>但总的来说，我们目的并不是限制或处罚不符合这些价值观的行为。</b></p
      ><br />
    </div>

    <category-second title="基本原则" id="principles" />
    <div class="p-6">
      <p>本章节列出的是在我们社区中<b>不容置疑</b>的几项基本原则：</p><br />
      <ul class="list-disc pl-10">
        <li
          >安同开源社区永远是一个<b
            >独立的，为爱好者和发烧友而存在的社区。</b
          ></li
        >
        <li>安同开源社区<b>不会</b>为贡献者提供金钱和物质上的回报。</li>
        <li>安同开源社区<b>决不会</b>容忍任何形式的剽窃行为。</li>
      </ul>
    </div>

    <category-second title="准则条例" id="overview" />
    <div class="p-6">
      <p>
        鉴于我们社区大部分的活动和交流在 Telegram 频道/群组（及相应的 Discord 及
        IRC
        频道/群组）上开展，以下条例将分为“适用于全社区”和“适用于特定场景”两大类。
        <b>
          我们不会也无权约束或限制社区成员在社区（包含所有安同开源社区 Telegram
          频道/群组（及相应的 Discord 及 IRC 频道/群组）、
          <a href="/" class="text-link">AOSC 维基</a>、
          <a href="https://github.com/AOSC-Dev/" class="text-link"
            >GitHub 组织</a
          >
          和
          <router-link to="/" class="text-link">社区门户</router-link>
          ）外的任何行为。
        </b> </p
      ><br />

      <p>对于两个大类，我们又将这些条例进一步分为“硬性规定”和“软性规定”：</p
      ><br />
      <ul class="list-disc pb-8 pl-10">
        <li
          >硬性规定包含了社区所有成员必须遵守的规定，不遵守将受到处罚（在每一类别下都有具体规定）。</li
        >
        <li>不遵守规定的管理员将被立即撤职，同时也会受到同样严厉的处罚。</li>
        <li>
          软性规定只是我们为了保持文明、高效且有趣的对话而提出的一些<b>建议</b>。不遵守这些规定只会使您越来越不受欢迎，更会影响社区内的交流和工作气氛，所以也请您记住这这些规定。
        </li>
        <li>下述各条例最终解释权归社区群组管理员所有。</li>
      </ul>
    </div>

    <category-second title="条例细则" id="codes" />
    <div class="p-6">
      <app-h2>适用于全社区</app-h2>
      <p class="pb-2">
        下面的规定适用于所有安同开源社区 Telegram 频道/群组（及相应的 Discord 及
        IRC 频道/群组）、<a href="/" class="text-link">AOSC 维基</a>、<a
          href="https://github.com/AOSC-Dev/"
          class="text-link"
          >GitHub 组织</a
        >
        和<router-link to="/" class="text-link">社区门户</router-link>。
      </p>

      <app-h2>硬性规定</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li
          >禁止在
          <a
            href="https://t.me/joinchat/BMnG9zvfjCgZUTIAoycKkg"
            class="text-link">
            AOSC 托腮群及招待点
          </a>
          （即水群）外进行<b>任何形式</b>关于政治、宗教和性相关话题的讨论。</li
        >
        <ul class="list-disc pl-10">
          <li
            >管理员将制止并警告违规者（包括所有参与该主题的人）。多次违规者会被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
        <li>禁止在社区<b>任何场合</b>讨论或教唆对自身或他人的物理伤害。 </li>
        <ul class="list-disc pl-10">
          <li
            >违规者（包括所有参与该主题的人）将立即被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
        <li
          >禁止在社区<b>任何场合</b>对社区成员和与之相关人进行谩骂和侮辱。
        </li>
        <ul class="list-disc pl-10">
          <li
            >这不包括偶尔的、明显带有开玩笑语气的的粗言秽语，但如果因此导致任何人产生不满情绪，请立刻停止您的行为。</li
          >
          <li
            >管理员将制止并警告违规者（包括所有参与该主题的人）。多次违规者会被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
        <li
          >禁止在社区<b>任何场合</b>羞辱与歧视任何人、宗教、意识形态或者地域。
        </li>
        <ul class="list-disc pl-10">
          <li
            >管理员将制止并警告违规者（包括所有参与该主题的人）。多次违规者会被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
        <li
          >禁止在社区<b>任何场合</b>发布过长的消息，您应该使用
          <a href="https://pastebin.aosc.io/" class="text-link"
            >AOSC Pastebin</a
          >
          或其他工具。
        </li>
        <ul class="list-disc pl-10">
          <li
            >管理员将制止并警告违规者（包括所有参与该主题的人）。多次违规者会被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
        <li>禁止在社区<b>任何场合</b>发布垃圾信息。 </li>
        <ul class="list-disc pl-10">
          <li
            >违规者（包括所有参与该主题的人）将<b>立即</b>被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
      </ul>

      <app-h2>软性规定</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li>尊重他人的言论自由。 </li>
        <ul class="list-disc pl-10">
          <li
            >争执时常发生，不要总是指望管理员出手，还请尝试发挥自己的聪明才智来化解难题。只有相互尊重才能杜绝人身攻击。</li
          >
          <li
            >用花名称呼他人时，要考虑被提及者的感受以避免其产生不满情绪或感到困惑。</li
          >
          <li>观点分歧时有发生，攻击性言论并不能助人信服及认同您的观点。</li>
          <li
            >在使用脏话前请考虑清楚其作用：说脏话对表达您的观点是否有利？请注意，脏话用多了真的很他妈烦。</li
          >
          <li
            >您可以使用您喜欢的任何语言，但要顾及到他人的语言能力。大多数成员会用中文和英文，在必要时请考虑使用翻译工具。</li
          >
        </ul>
        <li>保持幽默。 </li>
        <ul class="list-disc pl-10">
          <li
            >我们的
            <a
              href="https://github.com/AOSC-Dev/aoscc/tree/master/2019/stickers"
              class="text-link"
              >AOSCC 贴纸包</a
            >
            就是根据社区里日常对话中产生的梗设计制作的。</li
          >
        </ul>
        <li>您的独特性不等同于特殊性。</li>
        <ul class="list-disc pl-10">
          <li
            >人们之所以愿意倾听您的发言是因为他们有兴趣，但他们没有义务时刻听从您的发号施令。</li
          >
        </ul>
        <li>避免同时讨论多个话题。 </li>
        <ul class="list-disc pl-10">
          <li>在讨论频道中同时进行多个讨论必然会造成混乱。</li>
          <li>控制每个话题占用的时间，麦霸行为不礼貌，也会遭人嫌弃</li>
        </ul>
        <li>请勿随意脱离主题。 </li>
        <ul class="list-disc pl-10">
          <li>请不要在 AOSC 的古董计算机兴趣小组里讨论您的全新 MacBook。</li>
        </ul>
      </ul>

      <app-h2>主群组和工作群组</app-h2>
      <ul class="list-decimal pt-2 pb-2 pl-10">
        <li>AOSC バカ（AOSC OS 开发及打包工作组）</li>
        <li>AOSC infra-wg（AOSC 网络设施维护工作组）</li>
      </ul>
      <p class="pb-2"
        >在这些场合，在遵守上面提到的所有社区规则同时，还请留意以下几条附加规则：</p
      >

      <app-h2>硬性规定</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li>禁止使用 Telegram 贴纸或是 GIF 动图。 </li>
        <ul class="list-disc pl-10">
          <li>您可以使用 Emoji 或颜文字作为替代。</li>
          <li>允许发布与技术或工作主题相关的图片和视频。</li>
          <li
            >管理员将制止并警告违规者（包括所有参与该主题的人）。多次违规者会被移出群聊（您可以立即重新加入，但必须停止您的违规行为）。</li
          >
        </ul>
      </ul>

      <app-h2>软性规定</app-h2>
      <ul class="list-decimal pb-2 pl-10">
        <li>少灌水 —— 学会张弛有度，不要给点雨水就泛滥。 </li>
      </ul>

      <app-h2>托腮群</app-h2>
      <p class="pb-2"
        >即“安同开源社区托腮群及招待点”。在该频道请注意遵守上面提到的所有社区规则及针对该群的特许话题。</p
      >

      <app-h2>兴趣小组</app-h2>
      <p>安同开源社区的兴趣小组包括：</p>
      <ul class="list-disc pt-2 pb-2 pl-10">
        <li>AOSC Memes (AOSC 梗)</li>
        <li>AOSC Moe-ification（AOSC 萌化工作组）</li>
        <li>AOSC Retro Computing（AOSC 古董计算机兴趣小组）</li>
        <li>AOSCC Sticker Squad（AOSCC 贴纸设计小组）</li>
      </ul>
      <p>请注意：上面提到的所有“适用于全社区”的规则同样适用于兴趣小组。</p
      ><br />
    </div>

    <category-second title="为何不引入《贡献者公约》？" id="against-coc" />
    <div class="p-6">
      <p>
        我们的社区是在我们独有的社群意识基础之上建立的，通过成员对计算机技术的兴趣得以成形，并根据成员的意愿进行维护和管理。尽管
        <a
          href="https://www.contributor-covenant.org/zh-cn/version/1/4/code-of-conduct/"
          class="text-link"
          >《贡献者公约》</a
        >
        的出发点良好，但《公约》里的条文不适用于我们社区。 </p
      ><br />
      <p
        >我们相信我们社区的成员都应该在持续的实践中不断成长，并通过他们对技术的理解和他们独特的性格特点找到了自己的位置。贡献者公约中并没有重视这一点，而且在试图将他们视作一样的。</p
      ><br />
      <p>这是公约中“我们的义务”一章的原话：</p><br />
      <b
        >“项目维护者有权利和义务去删除、编辑、拒绝违背本行为标准的评论（comments）、提交（commits）、代码、Wiki
        编辑、问题（issues）等贡献；项目维护者可暂时或永久地封禁任何他们认为行为不当、威胁、冒犯、有害的参与者。</b
      ><br /><br />
      <p
        >长久以来，我们社区的各种基础设施均用作开发工具。基于这一点，任何和开发无关的活动都应禁止，而且社区成员们也会谴责任何形式的不检点行为。《贡献者公约》用了四个过于模糊（且多有重合）的形容词来描述所谓的“不当、威胁、冒犯、有害”行为，并没有给予被误判的人充分辩解的机会。我们认为，确立基础设施的专用性，是杜绝在我们的开发工作中出现所谓不可接受行为（及无端谴责或指控）的有效方法。</p
      ><br />
      <p>除此之外，贡献者公约提及的一些执行流程和我们社区的性质有原则性冲突：</p
      ><br />
      <b
        >“未切实遵守或执行本行为标准的项目维护人员，经项目负责人或其他成员决议，可能被暂时或永久地剥夺参与本项目的资格。”</b
      ><br /><br />
      <p class="mb-10"
        >我们社区是由贡献者维护及管理的。虽然我们社区有所谓“创始人”（或事实上的“领导者”），但他（白铭骢）认识到其权力是与众多贡献者们共有且共同行使的。在我们社区，创始人和贡献者、维护者等其它角色事实上没有明显的上下级关系。因此，上面的约束对我们社区是无效的。
        总的来说，《贡献者公约》不承认无等级社区的事实存在，并基于此作了许多假设。更令人担忧的是，《贡献者公约》过多地注重并猜忌文字中的种种意思。综上所述，我们认为在社区中引入并执行《贡献者公约》是不合适，无效，甚至是危险的。</p
      >
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
