/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
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
