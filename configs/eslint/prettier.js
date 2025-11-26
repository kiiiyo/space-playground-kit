// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    name: 'project/custom/prettier',
    files: ['**/*.{js,ts,tsx}'],
    // Custom rules
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
];
