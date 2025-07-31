import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ]
  }
});
