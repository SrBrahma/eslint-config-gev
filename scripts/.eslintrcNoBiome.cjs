// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution")
const path = require("path")

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["../js.js"],
  overrides: [
    {
      files: ["*.ts"],
      extends: ["../ts.js"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: path.resolve(__dirname, ".."),
        project: ["../tsconfig.json"],
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
  ],
}
