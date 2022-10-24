// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');


module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    './js.js',
  ],
  overrides: [
    {
      files: './scripts/*',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
      },
    },
  ],
};
