// TODO read better https://github.com/yannickcr/eslint-plugin-react#configuration to
// add further configs

module.exports = {
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
  }
};