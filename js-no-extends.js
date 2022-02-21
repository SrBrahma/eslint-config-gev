// By not having extends here, we can use it in ts.js without messing its extends order.

module.exports = {
  "plugins": [
    "no-autofix",
    "simple-import-sort",
    "import",
    "unused-imports"
  ],
  "rules": {
  // Prettyfier / Utils
    // 2 spaces ftw. I used to use 4 and reject 2. People change! Sometimes for worse! >:D
    "indent": ["warn", 2, { "SwitchCase": 1 }],

    // \n instead of \r\n
    "linebreak-style": ["warn", "unix"],

    // Single quotes instead of double. Allows using template even if not required.
    "quotes": ["warn", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],

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

    /** No excess spaces.
     * Wrong `let a =  1;` Right `let a = 1;` */
    "no-multi-spaces": "warn",

    /** Remove trailing spaces. */
    "no-trailing-spaces": "warn",

    /** Limits and cleans excess lines.
     * https://eslint.org/docs/rules/no-multiple-empty-lines */
    "no-multiple-empty-lines": ["warn", { "max": 5, "maxEOF": 0, "maxBOF": 0 }],

    /** Wrong: foo .bar; foo. bar; Right: foo.bar
     * https://eslint.org/docs/rules/no-whitespace-before-property */
    "no-whitespace-before-property": "warn",

    // No spaces after rest/spread. Wrong: ... [1,2]; right: ...[1,2]
    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["warn", "never"],

    // Newline after [ and before ] on multiline arrays.
    // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": ["warn", "consistent"],

    // Newline after { and before } on multiline objects.
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": ["warn", { "multiline": true, "consistent": true }],

    /** No space inside parentheses.
     * Wrong: ( 1 + 2 ); Right: (1 + 2)
     * https://eslint.org/docs/rules/space-in-parens */
    "space-in-parens": ["warn", "never"],

    /** No space before function definition / call (but anon/async).
     * Wrong: function foo (); async() => null; function();
     *
     * Right: function foo(); async () => null; function ();
     *
     * https://eslint.org/docs/rules/space-before-function-paren */
    "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],

    /** Wrong: ()=>{}
     * Right: () => {} */
    "arrow-spacing": "warn",

  // Etc
    /** ignoreRestSiblings: Ignore {unusedProp, ...rest} */
    "no-unused-vars": ["warn", { "ignoreRestSiblings": true }],

    // Changes from error to warn, and allows `while (true)`.
    "no-constant-condition": ["warn", { "checkLoops": false }],

    // As said in https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md,
    // the above rule (@typescript-eslint/require-await) requires this one.
    "require-await": "warn",

    /** Still warn about using let instead of const, but won't auto-fix (no more ctrl+s fixing it!)
     * https://eslint.org/docs/rules/prefer-const
     * https://www.npmjs.com/package/eslint-plugin-no-autofix */
    "prefer-const": "off", // Disable the default rule
    "no-autofix/prefer-const": "warn", // Use the no-autofix

    /** Disallow Number Literals That Lose Precision
     * https://eslint.org/docs/rules/no-loss-of-precision */
    "no-loss-of-precision": "error",


    /** Warn about unreachable code. */
    "no-unreachable-loop": "warn",
    "no-unreachable": "warn",
    /** Warn about empty blocks. Recommended was 'error'. */
    "no-empty": "warn",
    /** Disable error about empty functions. This is good to allow .catch(() => {}) */
    "no-empty-function": "off",
    /** Default recommended is error. Changed it to warn to avoid confusions, as I had.
     * https://eslint.org/docs/rules/no-useless-catch */
    "no-useless-catch": "warn",

    /** Space after comment.
     * https://eslint.org/docs/rules/spaced-comment */
    "spaced-comment": ["warn", "always", { "exceptions": ["-", "+"], "markers": ["/"] }],

    /** Wrong: `case 0 :break`; Right: `case 0: break`
     * https://eslint.org/docs/rules/switch-colon-spacing */
    "switch-colon-spacing": "warn",

    /** Sort imports and exports
     * https://github.com/lydell/eslint-plugin-simple-import-sort
     * https://github.com/lydell/eslint-plugin-simple-import-sort/issues/83#issue-976190535
     * */
    "simple-import-sort/imports": ["warn", { groups: [[
      "^\\u0000", // Side effect imports.
      "^react", // `react` related packages come first.
      // Node.js builtins.
      "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
      "^@?\\w",
      "^\\.\\.(?!/?$)", "^\\.\\./?$", // Parent imports. Put `..` last.
      "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", // Other relative imports. Put same-folder imports and `.` last.
      "^.+\\.s?css$", // Style imports.
    ]]}],
    /** Sorts imports
     * https://github.com/lydell/eslint-plugin-simple-import-sort */
    "simple-import-sort/exports": "warn",

    /** 3 newlines after imports block
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md */
    "import/newline-after-import": ["warn", { "count": 3 }],

    /** Merges multiple imports statements from same module.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md */
    "import/no-duplicates": "warn",

    /** https://eslint.org/docs/rules/no-confusing-arrow */
    "no-confusing-arrow": "warn",

    /** Always add () to arrow functions params. Makes clearer and increases dev code understanding speed.
     *
     * https://eslint.org/docs/rules/arrow-parens */
    "arrow-parens": "warn",

    /** Automatically removes unused imports. Saves time! But may be annoying! I re-enabled after moving it to limbo.
     *
     * https://github.com/sweepline/eslint-plugin-unused-imports */
    "unused-imports/no-unused-imports": "warn",

    /** Requires explicit parentheses when dealing with different operators, to avoid mistakes. */
    "no-mixed-operators": "warn",

    /** Space inside blocks, e.g. `{return 3}` -> `{ return 3 }` */
    "block-spacing": "warn",

    /** Removes unnecessary quotes from prop keys. https://eslint.org/docs/rules/quote-props */
    "quote-props": ["warn", "as-needed"],

    // Limbo. Disabled, but may be reenabled at some point.
    // "no-prototype-builtins": "off", // Allow obj.hasOwnProperty https://eslint.org/docs/rules/no-prototype-builtins


    // Commented this one below. It was annoying in react componentes, where `condition && \n <Component/>` is a common practice.
    /** Make multi line operators to be in the start of the new lines, not on the ending
     * of the previous line. But, make '='-like operators to be on the same line of the first operand. */
    // "operator-linebreak": ["warn", "before", { "overrides": {
    //   "=": "after", "+=": "after", "-=": "after", "*=": "after", "/=": "after",
    // }}],

    // Commented because it sucks at some cases. It's limited.
    // { on same line of if/try, } on newline. else/catch on same line of }. Allows singleline.
    // https://eslint.org/docs/rules/brace-style
    // "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
  }
};