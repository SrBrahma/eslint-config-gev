// https://github.com/SrBrahma/eslint-config-gev
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution")

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint-config-gev/js"],
  overrides: [
    {
      files: ["*.ts"],
      extends: ["eslint-config-gev/ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
  ],
}

module.exports = config
