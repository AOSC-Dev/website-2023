<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import Button from "./components/Button.vue";
import Select from "./components/Select.vue";
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="下载主页" />
    <img
      src="/assets/banners/banner_download.svg"
      class="w-full h-auto"
      alt=""
    />
    <category-second title="AOSC OS" />
    <div class="flex mb-3">
      <img
        src="/assets/distros/aosc-os.svg"
        class="w-[80px] ml-10 mr-6"
        alt=""
      />
      <div class="heading-6">
        <p class="text-[12pt]">
          AOSC OS 是一款主要面向有一定 Linux
          使用经验的用户，针对个人设备优化体验的操作系统。本系统致力于开箱即用、简化系统管理和提供可靠的工作环境。
          详见：
          <router-link class="text-link" to="/">AOSC OS适合我吗？</router-link>
        </p>
        <br />
        <div>
          <Select>
            <optgroup label="安装盘" class="font-extrabold">
              <option>x86_64 个人电脑</option>
              <option>ARM64 个人电脑</option>
            </optgroup>
            <optgroup label="WSL 镜像">
              <option>x86_64 个人电脑</option>
              <option>ARM64 个人电脑</option>
            </optgroup>
            <optgroup label="Docker 镜像">
              <option>x86_64</option>
              <option>ARM64</option>
            </optgroup>
            <optgroup label="设备镜像">
              <option>Apple Silicon</option>
              <option>Raspberry Pi</option>
            </optgroup>
            <optgroup label="虚拟机镜像">
              <option>x86_64 (Hyper-V)</option>
              <option>x86_64 (QEMU)</option>
              <option>x86_64 (VirtualBox)</option>
            </optgroup>
          </Select>
          <Button>下载</Button>
        </div>
      </div>
    </div>

    <category-second title="LiveKit" />
    <div class="flex mb-3">
      <img
        src="/assets/distros/aosc-os.svg"
        class="w-[80px] ml-10 mr-6"
        alt=""
      />
      <div class="heading-6">
        <p class="text-[12pt]">
          系统恢复盘是每个电脑用户的必备法宝，搭载众多备份、恢复和系统修复工具的
          LiveKit 更是您不可多得的救急利器。
        </p>
        <br />
        <div>
          <Select>
            <option>x86_64 个人电脑</option>
            <option>ARM64 个人电脑</option>
          </Select>
          <Button>下载</Button>
        </div>
      </div>
    </div>

    <category-second title="Afterglow" />
    <div class="flex">
      <img
        src="/assets/distros/afterglow.svg"
        class="w-[80px] ml-10 mr-6"
        alt=""
      />
      <div class="heading-6">
        <p class="text-[12pt]">
          Icon AOSC：“关爱您的奇妙开发板、迷之处理器和史前遗产。”
          无论性能多么有限，存储多么袖珍，内存多么紧俏，AOSC OS/Retro
          竭诚为你的古董设备续命。
        </p>
        <br />
        <div>
          <Select>
            <option>兼容 Intel 80486 的个人电脑</option>
          </Select>
          <Button>下载</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
