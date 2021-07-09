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
  }
};