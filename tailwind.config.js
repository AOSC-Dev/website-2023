/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'leftbar-bg': '#ececec',
      'rightbar-bg': '#fcfcfc',
      'content-main-bg': '#fcfcfc',
      white: '#fff',
      link: '#0056cc',
      gray: '#333',
      black: '#000'
    },
    fontSize: {
      xl: '1.5rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem'
    }
  },
  plugins: []
};
