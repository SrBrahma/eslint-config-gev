// By not having extends here, we can use it in ts.js without messing its extends order.

module.exports = {
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

    // Space before curly brackets
    "space-before-blocks": "warn",

    // Space before and after keywords.
    // https://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": ["warn", {
      "after": true, // wrong: if(); right: if ();
      "before": true, // wrong: }else; right: } else
    }],

    // There are other configs for values aligning https://eslint.org/docs/rules/key-spacing
    "key-spacing": ["warn", {
      "beforeColon": false, // wrong: {a : 3}; right: {a: 3};
      "afterColon": true // wrong: {a:3}; right: {a: 3};
    }],

    // Space after unary operators, like void, new, delete... Won't apply to non-words operators like ++.
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["warn", {
      "words": true,
      "nonwords": false
    }],

    // Space between operators. Wrong: 1+2; right: 1 + 2
    // https://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": ["warn", { "int32Hint": true }],

    // No spaces after rest/spread. Wrong: ... [1,2]; right: ...[1,2]
    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["warn", "never"],


  // Etc

    // "eslint:recommended" sets it as "error". We change it to "warn"!
    "no-unused-vars": "warn",

    // Changes from error to warn, and allows `while (true)`.
    "no-constant-condition": ["warn", { "checkLoops": false }],

    // As said in https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md,
    // the above rule (@typescript-eslint/require-await) requires this one.
    "require-await": "warn",

    // Limbo. Disabled, but may be reenabled at some point.

    // "no-prototype-builtins": "off", // Allow obj.hasOwnProperty https://eslint.org/docs/rules/no-prototype-builtins
  }
};