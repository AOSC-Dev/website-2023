import { defineStore } from 'pinia';

export const useHighBrightnessControllerStore = defineStore(
  'highBrightnessController',
  {
    state: () => ({ obj: {} }),
  },
);

// const returnColor = (solarTerms, time) => {
//     let primary = '#718c71'
//     let secondary = '#7f9e7f'
//     switch (time) {
//         case 'night': {
//             switch (solarTerms) {
//                 case 'spring': {
//                     primary = '#718c71';
//                     secondary = '#7f9e7f';
//                     break;
//                 }
//                 case 'summer': {
//                     primary = '#577c8a';
//                     secondary = '#6a8a96';
//                     break;
//                 }
//                 case 'autumn': {
//                     primary = '#a59571';
//                     secondary = '#b4a582';
//                     break;
//                 }
//                 case 'winter': {
//                     primary = '#757791';
//                     secondary = '#80829b';
//                     break;
//                 }
//             }
//             break;
//         }
//         case 'drak': {
//             switch (solarTerms) {
//                 case 'spring': {
//                     primary = '#517a47';
//                     secondary = '#779f68';
//                     break;
//                 }
//                 case 'summer': {
//                     primary = '#346c75';
//                     secondary = '#6699a1';
//                     break;
//                 }
//                 case 'autumn': {
//                     primary = '#422c24';
//                     secondary = '#5c4b41';
//                     break;
//                 }
//                 case 'winter': {
//                     primary = '#003049';
//                     secondary = '#5c4b41';
//                     break;
//                 }
//             }
//             break;
//         }
//     }
//     return {
//         primary, secondary
//     }
// }

const themeList = {
  springDrak: {
    primary: '#517a47',
    secondary: '#779f68',
  },
  springNight: {
    primary: '#718c71',
    secondary: '#7f9e7f',
  },
  summerDrak: {
    primary: '#346c75',
    secondary: '#6699a1',
  },
  summerNight: {
    primary: '#577c8a',
    secondary: '#6a8a96',
  },
  autumnDrak: {
    primary: '#422c24',
    secondary: '#5c4b41',
  },
  autumnNight: {
    primary: '#a59571',
    secondary: '#b4a582',
  },
  winterDrak: {
    primary: '#003049',
    secondary: '#5c4b41',
  },
  winterNight: {
    primary: '#757791',
    secondary: '#80829b',
  },
};

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    if (month >= 1 && month <= 3) {
      return themeList.springNight;
    } if (month >= 4 && month <= 6) {
      return themeList.summerNight;
    } if (month >= 7 && month <= 9) {
      return themeList.autumnNight;
    } if (month >= 10 && month <= 12) {
      return themeList.winterNight;
    }
  },
  actions: {
    set(solarTerms, time) {
      const newColor = themeList[solarTerms + time.charAt(0).toUpperCase() + time.slice(1)];
      console.log(newColor);
      this.primary = newColor.primary;
      this.secondary = newColor.secondary;
    },
  },
  persist: true,
});
