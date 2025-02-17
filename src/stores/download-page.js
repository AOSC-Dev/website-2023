import { defineStore } from 'pinia';

export const useDownloadPageStore = defineStore('downloadPageStore', {
  state: () => {
    return {
      dialogTab: 'installer',
      dialogArm64State: false,
      dialogTabArm64: 'installer',
    };
  }
});
