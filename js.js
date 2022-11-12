module.exports = {
  plugins: ['no-autofix', 'simple-import-sort', 'import', 'unused-imports'],
  extends: ['eslint:recommended', './removeFormatter/js.js'],
  rules: {
    /** ignoreRestSiblings: Ignore {unusedProp, ...rest} */
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],

    /** Changes from error to warn, and allows `while (true)`. */
    'no-constant-condition': ['warn', { checkLoops: false }],

    /** https://eslint.org/docs/rules/require-await */
    'require-await': 'warn',

    /** Still warn about using let instead of const, but won't auto-fix (no more ctrl+s fixing it!)
     * https://eslint.org/docs/rules/prefer-const
     * https://www.npmjs.com/package/eslint-plugin-no-autofix */
    'prefer-const': 'off', // Disable the default rule
    'no-autofix/prefer-const': 'warn', // Use the no-autofix

    /** Disallow Number Literals That Lose Precision
     * https://eslint.org/docs/rules/no-loss-of-precision */
    'no-loss-of-precision': 'error',

    /** Warn about unreachable code. */
    'no-unreachable-loop': 'warn',
    'no-unreachable': 'warn',
    /** Warn about empty blocks. Recommended was 'error'. */
    'no-empty': 'warn',
    /** Disable error about empty functions. This is good to allow .catch(() => {}) */
    'no-empty-function': 'off',
    /** Default recommended is error. Changed it to warn to avoid confusions, as I had.
     * https://eslint.org/docs/rules/no-useless-catch */
    'no-useless-catch': 'warn',

    /** Space after comment.
     * https://eslint.org/docs/rules/spaced-comment */
    'spaced-comment': ['warn', 'always', { exceptions: ['-', '+'], markers: ['/'] }],

    /** Sort imports and exports
     * https://github.com/lydell/eslint-plugin-simple-import-sort
     * https://github.com/lydell/eslint-plugin-simple-import-sort/issues/83#issue-976190535
     * */
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            '^\\u0000', // Side effect imports.
            '^react', // `react` related packages come first.
            // Node.js builtins.
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            '^@?\\w',
            '~', // Imports with path alias
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$', // Parent imports. Put `..` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$', // Other relative imports. Put same-folder imports and `.` last.
            '^.+\\.s?css$', // Style imports.
          ],
        ],
      },
    ],

    /** Sorts exports
     * https://github.com/lydell/eslint-plugin-simple-import-sort */
    'simple-import-sort/exports': 'warn',

    /** 2 blank lines after imports block.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md */
    'import/newline-after-import': [
      'warn',
      {
        count: 1, // Can't be >1 as would conflict with prettier
        // Not yet released. (currently 2.26.0)
        // "considerComments": true
      },
    ],

    /** Newline after class members.
     * https://eslint.org/docs/latest/rules/lines-between-class-members */
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    /** Merges multiple imports statements from same module.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md */
    'import/no-duplicates': 'warn',

    /** Automatically removes unused imports. Saves time! But may be annoying! I re-enabled after moving it to limbo.
     *
     * https://github.com/sweepline/eslint-plugin-unused-imports */
    'unused-imports/no-unused-imports': 'warn',

    /** Simplify objects.
     * https://eslint.org/docs/rules/object-shorthand */
    'object-shorthand': ['warn', 'always'],

    /** Disallow `throw 4` and `throw 'error'`. It will be required to always throw an Error-like object,
     * such as `throw new Error('error')`.
     *
     * https://eslint.org/docs/latest/rules/no-throw-literal */
    'no-throw-literal': 'warn',

    /** Disallow var keyword */
    'no-var': 'warn',

    /** Enforce default parameters to be last
     *
     * https://eslint.org/docs/latest/rules/default-param-last */
    'default-param-last': 'error',
  },
};
