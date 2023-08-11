module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    '.imports.eslintrc.cjs',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    'prettier',
    'eslint-plugin-import',
    'eslint-plugin-import-helpers',
    'tailwindcss',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-fragments': ['error', 'element'],
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'tailwindcss/classnames-order': ['error'],
    'tailwindcss/enforces-negative-arbitrary-values': ['error'],
    'tailwindcss/enforces-shorthand': ['error'],
    'tailwindcss/migration-from-tailwind-2': ['error'],
    'tailwindcss/no-arbitrary-value': ['off'],
    'tailwindcss/no-contradicting-classname': ['error'],
    'tailwindcss/no-custom-classname': [
      'error',
      {
        whitelist: ['span-full', 'scrollbar-hidden'],
      },
    ],
    'import/no-relative-parent-imports': ['error'],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
}
