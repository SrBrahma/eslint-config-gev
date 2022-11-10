// https://github.com/SrBrahma/eslint-config-gev
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint-config-gev/react-js'],
  ignorePatterns: ['/lib/**/*', '/dist/**/*'],
  rules: {},
};
