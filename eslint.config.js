import { defineConfig, globalIgnores } from 'eslint/config';
import {
  generalESLintConfig,
  typescriptESLintConfig,
  reactESLintConfig,
} from './configs/eslint/index.js';

export default defineConfig([
  globalIgnores([
    'dist',
    'configs/eslint/*',
    'eslint.config.js',
    'prettier.config.js',
    'lint-staged.config.js',
    'husky/*',
    'vite.config.ts',
  ]),

  /* ESLint */
  ...generalESLintConfig,

  /* TypeScript ESLint */
  ...typescriptESLintConfig,

  /* React ESLint */
  ...reactESLintConfig,
]);
