import stylisticJs from '@stylistic/eslint-plugin-js';
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

export default withNuxt([
  {
    plugins: {
      // eslint将风格(stylistic)类的监控都转移到了另一个插件中
      // 理论上来说，只要运行prettier便无需stylisticJs提醒，但不是所有人都会在上传前运行prettier,所以我们保留stylisticJs
      myJs: stylisticJs
    }
  },
  // 这个配置会关闭eslint与prettier冲突的配置，防止出现prettier格式完eslint爆红
  eslintConfigPrettier
]);
