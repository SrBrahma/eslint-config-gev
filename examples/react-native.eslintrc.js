// https://github.com/SrBrahma/eslint-config-gev
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution")

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    es2021: true,
    node: true,
    "react-native/react-native": true, // *1
  },
  extends: ["eslint-config-gev/js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["eslint-config-gev/react-native"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
          // *1
          jsx: true,
        },
      },
    },
  ],
  rules: {},
}

// [*1]: https://github.com/Intellicode/eslint-plugin-react-native#configuration

module.exports = config
