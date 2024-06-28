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
import axios from "axios";
let msStoreScript = document.createElement("script");
msStoreScript.setAttribute(
  "src",
  "https://get.microsoft.com/badge/ms-store-badge.bundled.js"
);
document.head.appendChild(msStoreScript);

const versionArch = ref(null);
onMounted(() => {
  /*axios.get('https://releases.aosc.io/manifest/livekit.json', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => {
    console.log('架构: ', res)
  }).catch(err => {
    console.log('获取异常: ', err)
  })*/
  versionArch.value = [
    {
      arch: "i486",
      date: "20220819",
      downloadSize: 644354048,
      instSize: 644354048,
      path: "os-i486/livekit/aosc-os_livekit_20220819_i486.iso",
      sha256sum:
        "3ed2ace8f90ef58f820636bf6451a43aa5e6967ade99cf3949be6b2e3cbff337",
    },
    {
      arch: "i486",
      date: "20230713",
      downloadSize: 748335104,
      instSize: 748335104,
      path: "os-i486/livekit/aosc-os_livekit_20230713_i486.iso",
      sha256sum:
        "761894ddd9a0de6e13fe0afaa8ea23f1293bd3880be973e37c45fd8d9b285003",
    },
    {
      arch: "i486",
      date: "20230707",
      downloadSize: 747786240,
      instSize: 747786240,
      path: "os-i486/livekit/aosc-os_livekit_20230707_i486.iso",
      sha256sum:
        "854cba64ff9b287760f71f08fdf104ec8a31b96a0b9e9fde03ec8d88224e8b8a",
    },
    {
      arch: "riscv64",
      date: "20220509",
      downloadSize: 843384832,
      instSize: 843384832,
      path: "os-riscv64/livekit/aosc-os_livekit_20220509_riscv64.iso",
      sha256sum:
        "2ff48e20a6ea56a76bac5411befdec8eac378e0a47382da3fa8713057122fb5c",
    },
    {
      arch: "i486",
      date: "20230810",
      downloadSize: 724860928,
      instSize: 724860928,
      path: "os-i486/livekit/aosc-os_livekit_20230810_i486.iso",
      sha256sum:
        "68110005d511829bef5891066493528662c092f4dd4c285e640df99e4fe7036f",
    },
    {
      arch: "ppc64el",
      date: "20231016",
      downloadSize: 2895865856,
      instSize: 2895865856,
      path: "os-ppc64el/livekit/aosc-os_livekit_20231016_ppc64el.iso",
      sha256sum:
        "01a711f5aa8158815bf3856f4fe145a29d05240b4264945470a82cd74278c47a",
    },
    {
      arch: "ppc64el",
      date: "20230706",
      downloadSize: 3188293632,
      instSize: 3188293632,
      path: "os-ppc64el/livekit/aosc-os_livekit_20230706_ppc64el.iso",
      sha256sum:
        "67b9689c14790a9d5999a10d5c8d2eaa65351dafaeeef1ae3280553bdeca4df3",
    },
    {
      arch: "ppc64el",
      date: "20230428",
      downloadSize: 1135267840,
      instSize: 1135267840,
      path: "os-ppc64el/livekit/aosc-os_livekit_20230428_ppc64el.iso",
      sha256sum:
        "8e0f8cef30090f6e6486027dbd82e0e222dff79ac890a468e4aaecbfabaccff8",
    },
    {
      arch: "riscv64",
      date: "20230706",
      downloadSize: 3370393600,
      instSize: 3370393600,
      path: "os-riscv64/livekit/aosc-os_livekit_20230706_riscv64.iso",
      sha256sum:
        "452d0b17a7fa483a3ac20ae98a30a92849d529793f4739068c7cdd36cf01dafb",
    },
    {
      arch: "loongson3",
      date: "20220901",
      downloadSize: 1038360576,
      instSize: 1038360576,
      path: "os-loongson3/livekit/aosc-os_livekit_20220901_loongson3.iso",
      sha256sum:
        "7e6aaadc4724ed8dc6f612f5c70c5356012d271c39067ed07c83d78946153995",
    },
    {
      arch: "riscv64",
      date: "20231016",
      downloadSize: 3099983872,
      instSize: 3099983872,
      path: "os-riscv64/livekit/aosc-os_livekit_20231016_riscv64.iso",
      sha256sum:
        "425e2435d9f6925b74df3187a7c3a4dcedb1b7e08a4eb9fd17bf7a369a30d830",
    },
    {
      arch: "ppc64el",
      date: "20230711",
      downloadSize: 3188439040,
      instSize: 3188439040,
      path: "os-ppc64el/livekit/aosc-os_livekit_20230711_ppc64el.iso",
      sha256sum:
        "58dbf88b5a35e072573f635f0315f1dc160084d70a3d9accb0df7cc0ff476288",
    },
    {
      arch: "riscv64",
      date: "20220508",
      downloadSize: 843014144,
      instSize: 843014144,
      path: "os-riscv64/livekit/aosc-os_livekit_20220508_riscv64.iso",
      sha256sum:
        "628a284dd9c648ba11d1519f7310cb0f2ddeb7554b981c14e3f2d1095d4bf225",
    },
    {
      arch: "riscv64",
      date: "20230711",
      downloadSize: 3376410624,
      instSize: 3376410624,
      path: "os-riscv64/livekit/aosc-os_livekit_20230711_riscv64.iso",
      sha256sum:
        "0336401baca96bbcc16e318b2779b977f141589502e4015d8ed929fbfab6edb0",
    },
    {
      arch: "ppc64el",
      date: "20231017",
      downloadSize: 2907969536,
      instSize: 2907969536,
      path: "os-ppc64el/livekit/aosc-os_livekit_20231017_ppc64el.iso",
      sha256sum:
        "e3f676a07e8576511f655f0192376db4249ba8d160db0e0fa724a6986419b14b",
    },
    {
      arch: "loongson3",
      date: "20231031",
      downloadSize: 2777354240,
      instSize: 2777354240,
      path: "os-loongson3/livekit/aosc-os_livekit_20231031_loongson3.iso",
      sha256sum:
        "58399cb85f6e5e75649b98264ee6045ab0aae88a282e62b62cb7790d0a4f72a9",
    },
    {
      arch: "loongson3",
      date: "20231031.1",
      downloadSize: 2778007552,
      instSize: 2778007552,
      path: "os-loongson3/livekit/aosc-os_livekit_20231031.1_loongson3.iso",
      sha256sum:
        "922af47da164e0b9dd427308258aec0d45672044288a26ea6fd98eb84c3ff645",
    },
    {
      arch: "loongarch64",
      date: "20240214",
      downloadSize: 3170418688,
      instSize: 3170418688,
      path: "os-loongarch64/livekit/aosc-os_livekit_20240214_loongarch64.iso",
      sha256sum:
        "6da903bf5986e88489161c926917c4b70223c2e2f8e85f155e0bbe6e2df41693",
    },
    {
      arch: "amd64",
      date: "20240214",
      downloadSize: 3690047488,
      instSize: 3690047488,
      path: "os-amd64/livekit/aosc-os_livekit_20240214_amd64.iso",
      sha256sum:
        "d8e0912c9b39aeefa18465a4990b51f9ec56751f429eaa634c5f4e8e20ff405c",
    },
    {
      arch: "arm64",
      date: "20240214",
      downloadSize: 4090470400,
      instSize: 4090470400,
      path: "os-arm64/livekit/aosc-os_livekit_20240214_arm64.iso",
      sha256sum:
        "3c120ede1054475b73b8c8d28a0fd22ead5069832290133862ca9100f4f9080a",
    },
    {
      arch: "loongarch64",
      date: "20240303",
      downloadSize: 3375474688,
      instSize: 3375474688,
      path: "os-loongarch64/livekit/aosc-os_livekit_20240303_loongarch64.iso",
      sha256sum:
        "a19adb20433103a2cb725ba63fbcd25c35fd41d28bcceaab9d1493717cb50620",
    },
    {
      arch: "amd64",
      date: "20240507",
      downloadSize: 3681191936,
      instSize: 3681191936,
      path: "os-amd64/livekit/aosc-os_livekit_20240507_amd64.iso",
      sha256sum:
        "f25f18a6f744ed88e374c49201c7375b9daf7aaa8ae83d83a79e55f43a251e6a",
    },
    {
      arch: "amd64",
      date: "20240603.2",
      downloadSize: 3751696384,
      instSize: 3751696384,
      path: "os-amd64/livekit/preview/aosc-os_livekit_20240603.2_amd64.iso",
      sha256sum:
        "8bef950ef7106a26f255047c418d0ecfb158af957573ec28454fd72838b0ff33",
    },
    {
      arch: "loongarch64",
      date: "20240603.2",
      downloadSize: 3325511680,
      instSize: 3325511680,
      path: "os-loongarch64/livekit/preview/aosc-os_livekit_20240603.2_loongarch64.iso",
      sha256sum:
        "9372d1516f6de8d608adf33eac73d2205980be80a6406a756658a1e6479ea3df",
    },
    {
      arch: "arm64",
      date: "20240603.2",
      downloadSize: 3583012864,
      instSize: 3583012864,
      path: "os-arm64/livekit/preview/aosc-os_livekit_20240603.2_arm64.iso",
      sha256sum:
        "1777aa944975fb12591e416c94096148b1b8e64b4d771ca98dbb51116accf830",
    },
    {
      arch: "arm64",
      date: "20240607",
      downloadSize: 3582529536,
      instSize: 3582529536,
      path: "os-arm64/livekit/preview/aosc-os_livekit_20240607_arm64.iso",
      sha256sum:
        "e4637436e1680eb827d21582253454665e63f47f7d95f334fb0cc06a5447ac51",
    },
    {
      arch: "loongarch64",
      date: "20240607",
      downloadSize: 3324710912,
      instSize: 3324710912,
      path: "os-loongarch64/livekit/preview/aosc-os_livekit_20240607_loongarch64.iso",
      sha256sum:
        "103caae33059390995b1983dbf468030e64807fa0a3cefa664a0034920f2815e",
    },
    {
      arch: "amd64",
      date: "20240607",
      downloadSize: 3752089600,
      instSize: 3752089600,
      path: "os-amd64/livekit/preview/aosc-os_livekit_20240607_amd64.iso",
      sha256sum:
        "f2aeabf52a97f90d7cf90ab8fa58c6e0deb89cb0ccf377cd83a1b561e4e54ed7",
    },
    {
      arch: "loongarch64",
      date: "20240613",
      downloadSize: 3351621632,
      instSize: 3351621632,
      path: "os-loongarch64/livekit/preview/aosc-os_livekit_20240613_loongarch64.iso",
      sha256sum:
        "34eacc768bd33d9347cdaae738176760fad52c7b46bf3c58dba9e36a10d0ec35",
    },
    {
      arch: "arm64",
      date: "20240613",
      downloadSize: 3608436736,
      instSize: 3608436736,
      path: "os-arm64/livekit/preview/aosc-os_livekit_20240613_arm64.iso",
      sha256sum:
        "e3ec605741686f6cba48f5721e26c50f40d4013b6324add2621c4a8ead69a48f",
    },
    {
      arch: "amd64",
      date: "20240613",
      downloadSize: 3779231744,
      instSize: 3779231744,
      path: "os-amd64/livekit/preview/aosc-os_livekit_20240613_amd64.iso",
      sha256sum:
        "eb5af825651ff98274e733bce343bfb2e6fc5e194aba13a9358eb384b68d4069",
    },
    {
      arch: "loongarch64",
      date: "20240627",
      downloadSize: 7631859712,
      instSize: 7631859712,
      path: "os-loongarch64/installer/preview/aosc-os_installer_20240627_loongarch64.iso",
      sha256sum:
        "1a62dc610468d037e69e457cb748acccd49aa3a8dc6e89ea909e7e6f844a791b",
    },
    {
      arch: "arm64",
      date: "20240627",
      downloadSize: 8472170496,
      instSize: 8472170496,
      path: "os-arm64/installer/preview/aosc-os_installer_20240627_arm64.iso",
      sha256sum:
        "c7c6351a2c9059f5918ef17929690ee236e3b9c089444ad76fbc48e0bf4f19b6",
    },
    {
      arch: "amd64",
      date: "20240627",
      downloadSize: 9038639104,
      instSize: 9038639104,
      path: "os-amd64/installer/preview/aosc-os_installer_20240627_amd64.iso",
      sha256sum:
        "2d394f09003fa817f8f3a68096ab0778d3ca9d409d365aae7efe90c31a2eb955",
    },
  ];
  antong1List.value.forEach((v) => {
    v.info = getNewVersioArch(v.title);
    console.log(v.info);
  });
});

const antong1List = ref([
  {
    title: "amd64",
  },
  {
    title: "arm64",
  },
  {
    title: "loongarch64",
  },
]);
const antong2List = ref([
  {
    title: "ppc64el",
  },
  {
    title: "riscv64",
  },
  {
    title: "loongson3",
  },
]);
const xingxia1List = ref([
  {
    title: "i486",
  },
  {
    title: "loongson2f",
  },
  {
    title: "powerpc",
  },
]);
const xingxia2List = ref([
  {
    title: "m68k",
  },
  {
    title: "armv4",
  },
  {
    title: "armv6hf",
  },
  {
    title: "armv7hf",
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

/**
 * js字节数转gb
 */
function byteToGb(byte) {
  return (byte / 1024 / 1024 / 1024).toFixed(2);
}
</script>

<template>
  <div class="pl-[1px] flex flex-col" v-if="versionArch != null">
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
                  :title="item.title"
                  :isoInfo="item.info"
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
                  :title="item.title"
                  :isoInfo="item.info"
                ></download-button>
              </span>
            </div>
          </div>
          <div class="pt-[4.5rem] min-w-[96px] w-[30%]">
            <img src="/assets/download/afterglow-web.svg" />
          </div>
        </div>
      </div>
      <!--<div class="livekit-container w-[100%] flex flex-row">
        <div id="livekit-title" class="flex flex-col pl-[2rem] py-[1rem]">
          <p>
            <span id="livekit" class="text-[24pt] leading-none">LiveKit</span>
            <span id="livekit-alt" class="flex leading-6 text-[14pt]"
              >安同 OS 安装及救援环境</span
            >
            <span id="livekit" class="text-[16pt] leading-8"
              >功能完备，应不时之需</span
            >
          </p>
          <p>
            <a href="#">发行说明</a>
            <span class="px-[.25rem]">·</span>
            <a href="#">配置需求</a>
          </p>
        </div>
        <div
          id="livekit-buttons"
          class="buttons-col flex flex-col justify-between gap-2 my-[1rem] pr-[8rem] ml-auto"
        >
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
            <span id="wsl-alt" class="flex leading-6 text-[14pt]"
              >适用于 WSL 的安同 OS</span
            >
            <span id="wsl-description" class="text-[16pt] leading-8"
              >Windows 与安同双双联手，生产力触手可及</span
            >
          </p>
          <p>
            <a href="#">发行说明</a>
            <span class="px-[.25rem]">·</span>
            <a href="#">配置需求</a>
          </p>
        </div>
        <div
          id="wsl-buttons"
          class="buttons-col flex flex-col justify-between gap-2 my-[1rem] pr-[8rem] ml-auto"
        >
          <ms-store-badge
            class="mt-auto h-[60px]"
            style="max-width: 224px"
            productid="9NMDF21NV65Z"
            window-mode="popup"
            theme="dark"
            language="en-us"
            animation="on"
          >
          </ms-store-badge>
        </div>
      </div>-->
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
            :title="item.title"
            :isoInfo="item.info"
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
            :title="item.title"
            :isoInfo="item.info"
          />
        </span>
      </div>
    </div>
    <category-second title="容器镜像" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        我们为Docker用户提供了容器镜像，您可以通过如下命令抓取安同OS容器
      </div>
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
./components/Header.vue
