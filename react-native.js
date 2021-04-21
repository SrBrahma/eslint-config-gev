// Not tested yet. You shouldnt use this.

module.exports = {
  "extends": [
    "./ts.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  "plugins": [
    "react",
    "react-native",
    // "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",

    "react-native/no-raw-text": "error",
  }
};