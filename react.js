module.exports = {
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
    ...require("./shared-react.js"),
  },
}
