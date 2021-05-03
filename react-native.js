module.exports = {
  "plugins": [
    "react",
    "react-native",
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "./ts.js", // On conflicting rules, ours have priority.
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-native/no-raw-text": "error",
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  }
};