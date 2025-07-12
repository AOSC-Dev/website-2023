<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadButton');

const props = defineProps({
  archName: {
    type: String,
    required: true
  },
  isaInfo: {
    type: Object,
    required: true
  },
  secondLineFontSize: {
    type: Number,
    default: 9
  },
  firstLineFontSize: {
    type: Number,
    default: 11
  },
  width: {
    type: Number,
    default: 140
  },
  popoverData: {
    type: Object,
    required: true
  },
  buttonColor: {
    type: String,
    default: undefined
  },
  url: {
    type: String,
    default: ''
  },
  sources: {
    type: Array,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  initialDialogTab: {
    type: String,
    default: 'installer'
  }
});

const router = useRouter();
const dialogState = ref(false);
const archNameBrackets = props.archName.match(/^(.*?)([（(].*[）)])?$/);

// Adding "+ 'pt'" in  v-bind() won't work correctly in SSG
const firstLineFontSize = props.firstLineFontSize + 'pt';
const secondLineFontSize = props.secondLineFontSize + 'pt';

const dialogTitle = computed(
  () => `${textValue.text1}${textValue.osName} - ${props.isaInfo?.label}`
);

const onClick = () => {
  if (props.url) {
    router.push(props.url);
  } else {
    dialogState.value = true;
  }
};
</script>

<template>
  <div>
    <el-popover
      :disabled="popoverData === undefined || dialogState"
      :placement="popoverData?.placement"
      :hide-after="0"
      trigger="hover"
      :content="popoverData?.content">
      <template #reference>
        <button
          :disabled="disabled"
          :style="{
            borderColor: 'var(--primary)',
            backgroundColor: buttonColor,
            width: $props.width + 'px'
          }"
          class="theme-bg-color-secondary-primary h-full grow cursor-pointer overflow-hidden py-2 hover:no-underline"
          @click="onClick">
          <slot />
          <span class="first-line-p">{{ archNameBrackets[1] }}</span>
          <span class="second-line-p">{{ archNameBrackets[2] }}</span>
        </button>
      </template>
    </el-popover>

    <el-dialog
      v-if="!disabled && popoverData && isaInfo"
      v-model="dialogState"
      width="80%"
      destroy-on-close
      :title="dialogTitle">
      <DownloadDetails
        :arch="archName"
        :content="popoverData.content"
        :isa-info="isaInfo"
        :sources="sources"
        :initial-tab="initialDialogTab" />
    </el-dialog>
  </div>
</template>

<style scoped>
.first-line-p {
  font-size: v-bind(firstLineFontSize);
  font-weight: 450;
}

.second-line-p {
  font-size: v-bind(secondLineFontSize);
  font-weight: 400;
}

span {
  margin: auto 0;
  text-align: center;
  color: white;
  display: block;
}

button:disabled {
  cursor: not-allowed;
  background-color: #8d8d8d;
}

button:disabled span {
  color: #dddddd;
}
</style>
