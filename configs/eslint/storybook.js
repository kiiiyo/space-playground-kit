// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import storybookPlugin from 'eslint-plugin-storybook';

/**
 * Storybook flat config recommended rules
 * @see https://github.com/storybookjs/eslint-plugin-storybook/blob/main/lib/configs/flat/recommended.ts
 */
export default [
  {
    name: 'project/storybook',
    files: [
      '**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
      '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)',
    ],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },

  {
    name: 'project/storybook/main-rules',
    files: ['.storybook/main.@(js|mjs|cjs|ts)'],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
  },
];
