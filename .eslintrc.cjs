module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'main.tsx', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-useless-path-segments': 'error',
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        'arrow-body-style': 'off',
      },
    },
  ],
};
