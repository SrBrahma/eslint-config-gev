// Add https://www.npmjs.com/package/eslint-plugin-import ?
// plugin vs extends: https://stackoverflow.com/a/61232480/10247962
// Read js-no-extends so understand why we separated the js.js and js-no-extends.js.
module.exports = {
  "plugins": [],
  "extends": [
    "eslint:recommended",
    "./js-no-extends.js"
  ],
};