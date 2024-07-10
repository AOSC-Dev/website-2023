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
          class="p-[1.5rem] flex border-r-[1px] border-r-solid border-r-secondary"
        >
          <div class="basis-1/2">
            <img src="/assets/mascot/qr.png" alt="二维码" />

            <p class="lg:text-[1em] xl:text-[1.3em] 2xl:text-[1.5em] text-center">扫码获取微信贴图包</p>
          </div>
          <div class="basis-1/2 flex flex-col justify-between grow">
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
        <div
          class="p-[1.5em] flex flex-col justify-between h-[calc(100%-2em)]"
        >
          <b class="lg:text-[0.8em] xl:text-[1.2em] 2xl:text-[1.3em]">
            本设定稿由钛山设计，使用 CC-BY-SA 4.0International
            许可证进行授权。钛山为自由及开源软件项目提供免费且许可开放的吉祥物设计服务。有意者敬请联系：
          </b>
          <div class="my-[10px] lg:text-[0.8em] xl:text-[1.2em] 2xl:text[1.3em]">
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
    <category-second title="" />
  </div>
</template>

<style scoped>
li {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
