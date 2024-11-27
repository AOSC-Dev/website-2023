<script setup>
const props = defineProps({
  archName: {
    type: String
  },
  isaInfo: {
    type: Object
  },
  secondLineFontSize: {
    type: String,
    default: '10pt'
  },
  firstLineFontSize: {
    type: String,
    default: '12pt'
  },
  popoverData: {
    type: Object
  },
  buttonColor: {
    type: String
  },
  url: {
    type: String
  }
});

const byteToGb = (bytes) => {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
};
</script>
<template>
  <div class="h-[52px]">
    <el-popover
      :placement="popoverData.placement"
      :hide-after="0"
      trigger="hover"
      :content="popoverData.conten">
      <template #reference>
        <AppLink
          :to="url"
          :style="{
            backgroundColor: buttonColor
          }"
          class="px-[0.4rem] theme-bg-color-secondary-primary flex h-full flex-col hover:no-underline cursor-pointer py-1">
          <slot></slot>
          <p v-if="archName" class="first-line-p">{{ archName }}</p>
          <p v-if="isaInfo" class="second-line-p"
            >{{ byteToGb(isaInfo.downloadSize) }}GiB ISO</p
          >
        </AppLink>
      </template>
    </el-popover>
  </div>
</template>

<style scoped>
.first-line-p {
  font-size: v-bind(firstLineFontSize);
}

.second-line-p {
  font-size: v-bind(secondLineFontSize);
}

p {
  margin: auto 0;
  text-align: center;
  color: white;
}
</style>
