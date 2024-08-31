/** @type {import('tailwindcss').Config} */


  // 根据不同季节，计算不同颜色
  let seasonColor = ''
  let seasonColor2 = ''
const now = new Date()
const month =now.getMonth() + 1
if (month >=1 && month <= 3) {
  // 春天
  // seasonColor = '#517a47'
  // seasonColor2 = '#779f68'
  seasonColor = '#718c71'
  seasonColor2 = '#7f9e7f'
} else if (month >=4 && month <= 6) {
  // seasonColor = '#346c75'
  // seasonColor2 = '#6699a1'
  seasonColor = '#577c8a'
  seasonColor2 = '#6a8a96'
} else if (month >=7 && month <= 9) {
  // seasonColor = '#422c24'
  // seasonColor2 = '#5c4b41'
  seasonColor = '#a59571'
  seasonColor2 = '#b4a582'
} else if (month >=10 && month <= 12) {
  // seasonColor = '#003049'
  // seasonColor2 = '#5c4b41'
  seasonColor = '#757791'
  seasonColor2 = '#80829b'
}

export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // 'primary': '#003049',
      primary: seasonColor,
      // 'secondary': '#3f6075',
      secondary: seasonColor2,
      'leftbar-bg': '#ececec',
      'rightbar-bg': '#fcfcfc',
      'content-main-bg': '#fcfcfc',
      white: '#fff',
      season: seasonColor,
      link: '#0056cc',
      gray: '#333',
      black: '#000'
    },
    fontSize: {
      'xl': '1.5rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem'
    }
  },
  plugins: [],
}

