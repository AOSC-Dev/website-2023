<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import Button from "./components/Button.vue";
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="系统下载" />
    <div class="download-page">
      <div class="aosc-os">
        <div class="download-logo">
          <img src="/assets/download/aosc-os-web.svg" style="width: 150px" />
        </div>
        <div class="download-container">
          <div class="text-aosc-os">
            <p style="font-size: 32pt">安同 OS</p>
            <p style="font-size: 14pt">称心得意的桌面操作系统</p>
            <p style="font-size: 10pt">2024/3/3·发行说明·配置需求</p>
          </div>
          <div class="button-container-aoscos">
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">x86-64/AMD64</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">AArch64</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">龙架构 (LoongArch)</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
          </div>
          <div>
            <span style="font-size: 10pt; display: flex; text-align: right;">二级架构、WSL、Docker 及虚拟机镜像<br>等其他下载</span>
          </div>
        </div>
      </div>
      <div class="afterglow">
        <div class="download-container">
          <div class="text-afterglow">
            <p style="font-size: 32pt; color: #fff">星霞 OS</p>
            <p style="font-size: 14pt; color: #fff">老设备也能发光发热</p>
            <p style="font-size: 10pt; color: #fff">
              2024/3/3·发行说明·配置需求
            </p>
          </div>
          <div class="button-container-afterglow">
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">x86-64/AMD64</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">AArch64</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
            <button
              class="button bg-secondary hover:opacity-85 ml-1 cursor-pointer"
            >
              <p style="button-p">龙架构 (LoongArch)</p>
              <p style="button-p">3.1GB ISO</p>
            </button>
          </div>
        </div>
        <div class="download-logo">
          <img src="/assets/download/afterglow-web.svg" style="width: 150px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-page {
  display: flex;
  height: 100%;
}

.download-logo {
  margin-top: 4.5em;
}
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
  margin-top: 2em;
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

.button {
  width: 224px;
  margin: unset;
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
</style>
./components/Header.vue
