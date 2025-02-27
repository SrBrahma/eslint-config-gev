/** @type {import("eslint").Linter.Config} */
const config = {
  settings: {
    react: {
      version: "detect", // To remove the warning.
    },
  },
  plugins: ["react", "react-refresh"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it
    "./ts.js",
  ],
  rules: {
    "react/prop-types": "off",
    ...require("./shared-react.js"),
    /** https://www.npmjs.com/package/eslint-plugin-react-refresh */
    "react-refresh/only-export-components": [
      "warn",
      // Only Vite supports this.
      { allowConstantExport: true },
    ],
  },
}

module.exports = config
