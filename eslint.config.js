import { defineConfig, globalIgnores } from 'eslint/config';

import {
  generalEslintConfig,
  nextJsEslintConfig,
  prettierEslintConfig,
  typescriptEslintConfig,
  reactEslintConfig,
  storybookEslintConfig,
} from './configs/eslint/index.js';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // "configs/eslint/*",
    'eslint.config.js',
    'prettier.config.js',
    'lint-staged.config.js',
    'husky/*',
    '!.storybook/**',
    '!storybook-static/**',
  ]),

  // General
  ...generalEslintConfig,
  // Next.js
  ...nextJsEslintConfig,
  // TypeScript
  ...typescriptEslintConfig,
  // React (JSX)
  ...reactEslintConfig,
  // Prettier
  ...prettierEslintConfig,
  // Storybook
  ...storybookEslintConfig,
]);
