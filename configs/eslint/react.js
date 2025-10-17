// @ts-check
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    name: 'project/custom/react',
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
      'react-refresh': pluginReactRefresh,
    },

    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs['recommended-latest'].rules,
      ...pluginReactRefresh.configs.vite.rules,

      /**
       * project custom rules
       */

      // Enable

      // Disable
    },
  },
];
