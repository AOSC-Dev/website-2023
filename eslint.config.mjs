import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import tsParser from '@typescript-eslint/parser';

import eslintConfigPrettier from 'eslint-config-prettier';

export default createConfigForNuxt(
  {
    features: {
      stylistic: true
    }
  },
  // 这个配置会关闭eslint与prettier冲突的配置，防止出现prettier格式完eslint爆红
  eslintConfigPrettier
).override('nuxt/javascript', {
  files: ['*.js','*.mjs'],
  parser: '@typescript-eslint/parser',
});
