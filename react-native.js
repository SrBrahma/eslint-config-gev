module.exports = {
  "settings": {
    "react": {
      "version": "detect", // To remove the warning.
    }
  },
  "plugins": [
    "react",
    "react-native",
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "./ts.js",
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-native/no-raw-text": "error",
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  }
};