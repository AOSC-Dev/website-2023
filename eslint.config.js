import stylisticJs from '@stylistic/eslint-plugin-js';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

// 配置允许覆盖，自定义配置应放置于常规配置之后
export default [
  // vue插件的推荐配置
  ...pluginVue.configs[
    ('flat/base', 'flat/essential', 'flat/strongly-recommended')
  ],
  // eslint推荐的js监控
  js.configs.recommended,
  {
    plugins: {
      // eslint将风格(stylistic)类的监控都转移到了另一个插件中
      // 理论上来说，只要运行prettier便无需stylisticJs提醒，但不是所有人都会在上传前运行prettier,所以我们保留stylisticJs
      myJs: stylisticJs,
      vue: pluginVue
    },
    rules: {
      'myJs/semi': 2,
      'myJs/arrow-spacing': 2,
      'vue/require-default-prop': 0,
      'no-unused-vars': [
        2,
        {
          args: 'none',
          caughtErrors: 'none',
          // 对于未使用的变量，忽略以_开头或名为err、props的变量
          varsIgnorePattern: '^(_\\w+|props|err)$'
        }
      ]
    },
    ignores: ['auto-imports.d.ts', 'components.d.ts']
  },
  // 这个配置会关闭eslint与prettier冲突的配置，防止出现prettier格式完eslint爆红
  eslintConfigPrettier
];
