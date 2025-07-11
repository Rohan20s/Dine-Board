module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'semi': ['error', 'always'], 
      'quotes': ['error', 'single'], 
      'no-console': 'warn', 
      'react/react-in-jsx-scope': 'off', 
      'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.jsx'] }], 
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], 
    },
  };
  