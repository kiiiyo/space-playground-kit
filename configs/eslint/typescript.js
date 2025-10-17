// @ts-check
import tseslint from 'typescript-eslint';

export default [
  {
    name: 'project/custom/typescript-eslint',
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
