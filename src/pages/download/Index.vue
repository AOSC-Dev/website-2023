<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import Button from "./components/Button.vue";
let msStoreScript = document.createElement('script');
msStoreScript.setAttribute('src', "https://get.microsoft.com/badge/ms-store-badge.bundled.js");
document.head.appendChild(msStoreScript);

</script>
<!-- <script type="module" src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"></script> -->

<template>
  <div class="pl-[1px] flex flex-col">
    <category-second title="系统下载" />
    <div class="flex flex-col flex-1">
      <div class="flex flex-row">
        <div class="flex flex-row w-[47%] justify-around bg-white px-[1rem]">
          <div class="pt-[4.5rem] min-w-[96px] w-[30%]">
            <img src="/assets/download/aosc-os-web.svg" style="width: 150px" />
          </div>
          <div class="download-container my-[2rem]">
            <div class="text-aosc-os">
              <p style="font-size: 32pt">安同 OS</p>
              <p style="font-size: 14pt">称心得意的桌面操作系统</p>
              <p style="font-size: 10pt">2024/3/3·发行说明·配置需求</p>
            </div>
            <div class="button-container-aoscos buttons-col">
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">x86-64/AMD64</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">AArch64</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">龙架构 (LoongArch)</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
            </div>
            <span style="font-size: 10pt; display: flex; text-align: right;">二级架构、Docker 及虚拟机镜像等其他下载</span>
          </div>
        </div>
        <div class="afterglow px-[1rem]">
          <div class="download-container my-[2rem]">
            <div class="text-afterglow">
              <p style="font-size: 32pt; color: #fff">星霞 OS</p>
              <p style="font-size: 14pt; color: #fff">老设备也能发光发热</p>
              <p style="font-size: 10pt; color: #fff">
                2024/3/3·发行说明·配置需求
              </p>
            </div>
            <div class="button-container-afterglow buttons-col">
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">x86-64/AMD64</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">AArch64</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
              <button
                class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
              >
                <p style="button-p">龙架构 (LoongArch)</p>
                <p style="button-p">3.1GB ISO</p>
              </button>
            </div>
          </div>
          <div class="pt-[4.5rem] min-w-[96px] w-[30%]">
            <img src="/assets/download/afterglow-web.svg" />
          </div>
        </div>
      </div>
      <div class="livekit-container w-[100%] flex flex-row">
        <div id="livekit-title" class="flex flex-col pl-[2rem] py-[1rem]">
          <p>
          <span id="livekit" class="text-[24pt] leading-none">LiveKit</span>
          <span id="livekit-alt" class="flex leading-6 text-[14pt]">安同 OS 安装及救援环境</span>
          <span id="livekit" class="text-[16pt] leading-8">功能完备，应不时之需</span>
          </p>
          <p>
            <a href="#">发行说明</a>
            <span class="px-[.25rem]">·</span>
            <a href="#">配置需求</a>
          </p>
        </div>
        <div id="livekit-buttons" class="buttons-col flex flex-col justify-between gap-2 my-[1rem] pr-[8rem] ml-auto">
          <button
            class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
          >
            <p style="button-p">x86-64/AMD64</p>
            <p style="button-p">3.1GB ISO</p>
          </button>
          <button
            class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
          >
            <p style="button-p">AArch64</p>
            <p style="button-p">3.1GB ISO</p>
          </button>
          <button
            class="w-[224px] m-0 text-white bg-secondary hover:opacity-85 ml-1 cursor-pointer"
          >
            <p style="button-p">龙架构 (LoongArch)</p>
            <p style="button-p">3.1GB ISO</p>
          </button>
        </div>
      </div>
      <div class="wsl-container w-[100%] flex flex-row min-h-[12rem]">
        <div id="wsl-title" class="flex flex-col pl-[2rem] py-[1rem]">
          <p>
          <span id="wsl" class="text-[24pt] leading-none">WSL 环境</span>
          <span id="wsl-alt" class="flex leading-6 text-[14pt]">适用于 WSL 的安同 OS</span>
          <span id="wsl-description" class="text-[16pt] leading-8">Windows 与安同双双联手，生产力触手可及</span>
          </p>
          <p>
            <a href="#">发行说明</a>
            <span class="px-[.25rem]">·</span>
            <a href="#">配置需求</a>
          </p>
        </div>
        <div id="wsl-buttons" class="buttons-col flex flex-col justify-between gap-2 my-[1rem] pr-[8rem] ml-auto">
          <ms-store-badge
            class="mt-auto h-[60px]"
            style="max-width: 224px"
                productid="9NMDF21NV65Z"
                window-mode="popup"
                theme="dark"
                language="en-us"
                animation="on">
          </ms-store-badge>
        </div>
      </div>
    </div>
    <category-second title="二级架构下载" />
  </div>
</template>

<style scoped>
.aosc-os {
  display: flex;
  flex-flow: row;
  background-color: white;
  width: 47%;
  justify-content: space-around;
}

.download-container {
  display: flex;
  flex-flow: column;
  margin-left: -0.75em;
}

.text-aosc-os {
  display: flex;
  text-align: right;
  flex-flow: column;
}

.text-afterglow {
  display: flex;
  text-align: left;
  flex-flow: column;
}

.afterglow {
  background-color: black;
  width: 53%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.normal-p {
  font-size: 12pt;
  color: #fff;
  justify-content: right;
  display: flex;
}

.button-p {
  font-size: 10pt;
}

.button-container-aoscos {
  display: flex;
  justify-content: right;
  flex-flow: column;
  row-gap: 0.5em;
  align-self: flex-end;
  margin-top: 1em;
}

.button-container-afterglow {
  display: flex;
  justify-content: left;
  flex-flow: column;
  row-gap: 0.5em;
  margin-top: 1em;
}

.livekit-container {
  background: linear-gradient(90deg, #f6d5ac, 75%, transparent), url('/assets/backgrounds/livekit.jpg');
  background-position-x: 0%, 100%;
}
.wsl-container {
  background: linear-gradient(90deg, #b7e4fc, 75%, transparent), url('/assets/backgrounds/aosc-os-wsl.jpg');
  background-color: #000;
  background-position-x: 0%, 30rem;
  background-size: 100%, 50rem;
  background-repeat: no-repeat;
}
.buttons-col button {
  padding: .25rem 0;
}
ms-store-badge::part(img) {
  width: 160px;
  display: block;
  height: 60px;
}
</style>
./components/Header.vue
