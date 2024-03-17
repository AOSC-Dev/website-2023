/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#003049',
      'secondary': '#3f6075',
      'leftbar-bg': '#ececec',
      'rightbar-bg': '#fcfcfc',
      'content-main-bg': '#fcfcfc',
      'white': '#fff',
      link: '#0056cc'
    }
  },
  plugins: [],
}

