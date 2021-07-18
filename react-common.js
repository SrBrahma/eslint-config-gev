// Common stuff for React and React Native
// TODO read better https://github.com/yannickcr/eslint-plugin-react#configuration to
// add further configs

module.exports = {
  "settings": {
    "react": {
      "version": "detect", // To remove the warning.
    }
  },
  "plugins": [
    "react",
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "./ts.js",
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    /** No space between prop and equal, and equal and value.
     *
     * `Wrong: <C prop = {value}/>; Right: <C prop={value} />`
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md */
    "react/jsx-equals-spacing": ["warn", "never"],
    /** No space inside prop value, and no space inside children brackets.
     *
     * `Wrong: <C prop={ value }/>; Right: <C prop={value} />`
     *
     * `Wrong: <C>{ value }</C>; Right: <C>{value}</C>`
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md */
    "react/jsx-curly-spacing": ["warn", { "when": "never", "children": true }]
  }
};