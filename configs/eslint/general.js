// @ts-check

import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    name: 'project/eslint/general',
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
