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
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
  }
};