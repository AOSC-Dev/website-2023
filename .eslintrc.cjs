module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue'],
  rules: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.vue', '.ts'],
      },
    },
    'import/no-extraneous-dependencies': 'off',
  },
};
