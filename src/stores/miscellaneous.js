import { defineStore } from 'pinia';

export const useHighBrightnessControllerStore = defineStore(
  'highBrightnessController',
  {
    state: () => ({ obj: {} })
  }
);

const themeList = {
  springDrak: {
    primary: '#517a47',
    secondary: '#779f68'
  },
  springNight: {
    primary: '#718c71',
    secondary: '#7f9e7f',
    backageImg: 'spring.svg'
  },
  summerDrak: {
    primary: '#346c75',
    secondary: '#6699a1'
  },
  summerNight: {
    primary: '#577c8a',
    secondary: '#6a8a96',
    backageImg: 'summer.svg'
  },
  autumnDrak: {
    primary: '#422c24',
    secondary: '#5c4b41'
  },
  autumnNight: {
    primary: '#a59571',
    secondary: '#b4a582',
    backageImg: 'autumn.svg'
  },
  winterDrak: {
    primary: '#003049',
    secondary: '#5c4b41'
  },
  winterNight: {
    primary: '#757791',
    secondary: '#80829b',
    backageImg: 'winter.svg'
  }
};

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    if (month >= 3 && month <= 5) {
      return themeList['springNight'];
    } else if (month >= 6 && month <= 8) {
      return themeList['summerNight'];
    } else if (month >= 9 && month <= 11) {
      return themeList['autumnNight'];
    } else {
      return themeList['winterNight'];
    }
  },
  actions: {
    set(solarTerms, time) {
      const newColor =
        themeList[solarTerms + time.charAt(0).toUpperCase() + time.slice(1)];
      console.log(newColor);
      this.primary = newColor.primary;
      this.secondary = newColor.secondary;
    }
  },
  persist: true
});
