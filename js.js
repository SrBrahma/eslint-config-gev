// Add https://www.npmjs.com/package/eslint-plugin-import ?

// plugin vs extends: https://stackoverflow.com/a/61232480/10247962

module.exports = {
  "plugins": [],
  "extends": [
    "eslint:recommended",
  ],

  "rules": {
  // Prettyfier / Utils
    // 2 spaces ftw. I used to use 4 and reject 2. People change! Sometimes for worse! >:D
    "indent": ["warn", 2],

    // \n instead of \r\n
    "linebreak-style": ["warn", "unix"],

    // Single quotes instead of double. Allows using template even if not required.
    "quotes": ["warn", "single", { "allowTemplateLiterals": true }],

    // Adds `;` to every possible line end.
    "semi": ["warn", "always"],

    // Adds space after `,`
    "comma-spacing": ["warn"],

    // Adds trailing `,` on multiline items using `,`. Easier to add new items.
    "comma-dangle": ["warn", "always-multiline"],

    // TODO may/should be specified the cases https://eslint.org/docs/rules/space-in-brackets#exceptions
    "array-bracket-spacing": ["warn", "never"],

    // Spacing `{ spaceBeforeAndAfterItemsInCurlyBrackets }`
    "object-curly-spacing": ["warn", "always"],

    // "eslint:recommended" sets it as "error". We change it to "warn"!
    "no-unused-vars": "warn",


  // Etc
    // As said in https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md,
    // the above rule (@typescript-eslint/require-await) requires this one.
    "require-await": "warn",

    // Limbo. Disabled, but may be reenabled at some point.

    // "no-prototype-builtins": "off", // Allow obj.hasOwnProperty https://eslint.org/docs/rules/no-prototype-builtins
  }
};