// @ts-check
import tseslint from 'typescript-eslint';

export default [
  {
    name: 'project/typescript-eslint',
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    // Custom rules
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
