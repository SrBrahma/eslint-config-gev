// not tested yet. you shouldnt use.

// TODO read better https://github.com/yannickcr/eslint-plugin-react#configuration to
// add further configs

module.exports = {
  "extends": [
    "./ts.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  "plugins": [
    "react",
    // "react-native",
    // "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
  }
};