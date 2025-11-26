// @ts-check

import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    name: 'project/react',
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      globals: {
        JSX: true,
        React: true,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },

    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs['recommended-latest'].rules,

      /**
       * project custom rules
       */

      // Enable

      // Disable
    },
  },
];
