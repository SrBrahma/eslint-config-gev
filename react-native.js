module.exports = {
  "extends": [
    "./ts.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  "plugins": [
    "react",
    "react-native",
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-native/no-raw-text": "error",
  }
};