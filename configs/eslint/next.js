import nextVitalConfig from 'eslint-config-next/core-web-vitals';
import nextTypescriptConfig from 'eslint-config-next/typescript';

export default [
  ...nextTypescriptConfig.map((config) => ({
    ...config,
    name: 'project/eslint-config-next/typescript',
    files: ['**/*.{ts,tsx}'],
    // Custom rules
    rules: {},
  })),
  ...nextVitalConfig.map((config) => ({
    ...config,
    name: 'project/eslint-config-next/core-web-vitals',
    files: ['**/*.{ts,tsx}'],
    // Custom rules
    rules: {},
  })),
];
