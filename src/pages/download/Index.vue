<script setup>
/**
 * 版本及架构说明
 * 有两个子发行版，安同 OS 和星霞 OS
 * 这两个一同覆盖了这 15 个架构，且不重复
 * 然后两个子发行版支持的架构里分一级和二级架构
 *
 * 其中安同 OS 支持的一级架构包括 amd64, arm64, loongarch64；支持的二级架构有 ppc64el, riscv64 和 loongson3
 * 星霞 OS 暂定一级架构有 i486, loongson2f 和 powerpc；二级架构有 m68k, armv4, armv6hf 和 armv7hf
 * 由于两个子发行版各自支持不同的架构，所以可以通过架构名判断是安同 OS 还是星霞 OS，一二级架构同理
 */
import CategorySecond from "/src/components/CategorySecond.vue";
import DownloadButton from "./components/DownloadButton.vue";
import { onMounted, ref } from "vue";
import VCodeBlock from '@wdns/vue-code-block';
let msStoreScript = document.createElement("script");
msStoreScript.setAttribute(
  "src",
  "https://get.microsoft.com/badge/ms-store-badge.bundled.js"
);
document.head.appendChild(msStoreScript);

const versionArch = ref([]);
onMounted(() => {
  fetch("https://releases.aosc.io/manifest/livekit.json", {
    headers: {
      Origin: "*",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("架构: ", res);
      versionArch.value = res;
      antong1List.value.forEach((v) => {
        v.info = getNewVersioArch(v.title);
        console.log(v.info);
      });
      antong2List.value.forEach((v) => {
        v.info = getNewVersioArch(v.title);
        console.log(v.info);
      });
      xingxia1List.value.forEach((v) => {
        v.info = getNewVersioArch(v.title);
        console.log(v.info);
      });
      xingxia2List.value.forEach((v) => {
        v.info = getNewVersioArch(v.title);
        console.log(v.info);
      });
    })
    .catch((err) => {
      console.log("获取异常: ", err);
    });
});

const antong1List = ref([
  {
    title: "amd64",
    zhLabel: 'x86-64',
    enLabel: 'x86-64'
  },
  {
    title: "arm64",
    zhLabel: 'AArch64',
    enLabel: 'AArch64',
  },
  {
    title: "loongarch64",
    zhLabel: '龙架构 (LoongArch)',
    enLabel: 'LoongArch',
  },
]);
const antong2List = ref([
  {
    title: "ppc64el",
    zhLabel: 'IBM POWER（小端序）',
    enLabel: 'IBM POWER',
  },
  {
    title: "riscv64",
    zhLabel: 'RISC-V（64 位）',
    enLabel: 'RISC-V（64 位）'
  },
  {
    title: "loongson3",
    zhLabel: '基于 MIPS 的龙芯三号处理器',
    enLabel: '基于 MIPS 的龙芯三号处理器'
  },
]);
const xingxia1List = ref([
  {
    title: "i486",
    zhLabel: 'Intel 80486 或更新',
    enLabel: 'Intel 80486 or new'
  },
  {
    title: "loongson2f",
    zhLabel: '基于 MIPS 的龙芯二号处理器',
    enLabel: '基于 MIPS 的龙芯二号处理器'
  },
  {
    title: "powerpc",
    zhLabel: 'PowerPC（32 位，大端序）',
    enLabel: 'PowerPC/powerpc'
  },
]);
const xingxia2List = ref([
  {
    title: "m68k",
    zhLabel: 'Motorola 68000 系列处理器**',
    enLabel: 'Motorola 68000'
  },
  {
    title: "armv4",
    zhLabel: 'ARMv4',
    enLabel: 'ARMv4'
  },
  {
    title: "armv6hf",
    zhLabel: 'ARMv6（硬浮点）',
    enLabel: 'ARMv6'
  },
  {
    title: "armv7hf",
    zhLabel: 'ARMv7（硬浮点）',
    enLabel: 'ARMv7'
  },
]);

/**
 * 根据架构找出最新的下载信息
 */
function getNewVersioArch(arch) {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.sort((v1, v2) => {
    return v1.date < v2.date;
  });
  return list[0];
}
</script>

<template>
  <div class="pl-[1px] flex flex-col" v-if="versionArch.length > 0">
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
              <span v-for="item in antong1List" :key="item.title">
                <download-button
                  :isaInfo="item"
                ></download-button>
              </span>
            </div>
            <span style="font-size: 10pt; display: flex; text-align: right"
              >二级架构、Docker 及虚拟机镜像等其他下载</span
            >
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
              <span v-for="item in xingxia1List" :key="item.title">
                <download-button
                  v-if="item.info != undefined"
                  :isaInfo="item"
                ></download-button>
              </span>
            </div>
          </div>
          <div class="pt-[4.5rem] min-w-[96px] w-[30%]">
            <img src="/assets/download/afterglow-web.svg" />
          </div>
        </div>
      </div>
    </div>
    <category-second title="安同 OS（二级架构）" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        安同OS支持支持众多处理器微架构，除x86-64、AArch64及龙架构外，我们还支持一众存量较少或软件支持尚未完善的架构供各位玩家试用和评估。
      </div>
      <div class="flex justify-between">
        <span v-for="item in antong2List" :key="item.title">
          <download-button
            v-if="item.info != undefined"
            :isaInfo="item"
          />
        </span>
      </div>
    </div>
    <category-second title="星霞 OS（其他版本）" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        星霞OS支持许多来自不同年代和不同形式的设备，点击下方对应您设备的下载按钮即可。
      </div>
      <div class="flex justify-between">
        <span v-for="item in xingxia2List" :key="item.title">
          <download-button
            v-if="item.info != undefined"
            :isaInfo="item"
          />
        </span>
      </div>
    </div>
    <category-second title="容器镜像" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        我们为Docker用户提供了容器镜像，您可以通过如下命令抓取安同OS容器
      </div>
      <VCodeBlock code="docker pull aosc/aosc-os" lang="shell" highlightjs theme="github" />
    </div>
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
  background: linear-gradient(90deg, #f6d5ac, 75%, transparent),
    url("/assets/backgrounds/livekit.jpg");
  background-position-x: 0%, 100%;
}
.wsl-container {
  background: linear-gradient(90deg, #b7e4fc, 75%, transparent),
    url("/assets/backgrounds/aosc-os-wsl.jpg");
  background-color: #000;
  background-position-x: 0%, 30rem;
  background-size: 100%, 50rem;
  background-repeat: no-repeat;
}
.buttons-col button {
  padding: 0.25rem 0;
}
ms-store-badge::part(img) {
  width: 160px;
  display: block;
  height: 60px;
}
</style>
