module.exports = {
  plugins: [
    "unused-imports",
    "no-relative-import-paths",
    "jsdoc",
    "prefer-arrow-functions",
    "@stylistic",
    "require-extensions",
    "json-files",
  ],
  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:require-extensions/recommended",
  ],
  overrides: [
    {
      files: ["package.json"],
      plugins: ["json-files"],
      rules: {
        "json-files/sort-package-json": [
          "warn",
          {
            sortOrder: [
              "name",
              "version",
              "description",
              "author",
              "main",
              "bin",
              "scripts",
              "files",
              "license",
              "homepage",
            ],
          },
        ],
      },
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["biome"],
    },
  ],
  rules: {
    /** ignoreRestSiblings: Ignore {unusedProp, ...rest} */
    "no-unused-vars": ["warn", { ignoreRestSiblings: true }],

    /** Changes from error to warn, and allows `while (true)`. */
    "no-constant-condition": ["warn", { checkLoops: false }],

    /** https://eslint.org/docs/rules/require-await */
    "require-await": "warn",

    /**
     * Disallow Number Literals That Lose Precision
     * https://eslint.org/docs/rules/no-loss-of-precision
     */
    "no-loss-of-precision": "error",

    /** Warn about unreachable code. */
    "no-unreachable-loop": "warn",
    "no-unreachable": "warn",
    /** Warn about empty blocks. Recommended was 'error'. */
    "no-empty": "warn",
    /** Disable error about empty functions. This is good to allow .catch(() => {}) */
    "no-empty-function": "off",
    /**
     * Default recommended is error. Changed it to warn to avoid confusions, as I had.
     * https://eslint.org/docs/rules/no-useless-catch
     */
    "no-useless-catch": "warn",

    /**
     * Space after comment.
     * https://eslint.org/docs/rules/spaced-comment
     */
    "spaced-comment": [
      "warn",
      "always",
      { exceptions: ["-", "+"], markers: ["/"] },
    ],

    /**
     * Newline after class members.
     * https://eslint.org/docs/latest/rules/lines-between-class-members
     */
    "lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],

    /**
     * Automatically removes unused imports. Saves time! But may be annoying! I re-enabled after moving it to limbo.
     *
     * https://github.com/sweepline/eslint-plugin-unused-imports
     */
    "unused-imports/no-unused-imports": "warn",

    /**
     * Simplify objects.
     * https://eslint.org/docs/rules/object-shorthand
     */
    "object-shorthand": ["warn", "always"],

    /**
     * Disallow `throw 4` and `throw 'error'`. It will be required to always throw an Error-like object,
     * such as `throw new Error('error')`.
     *
     * https://eslint.org/docs/latest/rules/no-throw-literal
     */
    "no-throw-literal": "warn",

    /** Disallow var keyword */
    "no-var": "warn",

    /**
     * Enforce default parameters to be last
     *
     * https://eslint.org/docs/latest/rules/default-param-last
     */
    "default-param-last": "error",

    /**
     * https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions
     */
    "prefer-arrow-functions/prefer-arrow-functions": ["warn"],
    /** https://github.com/gajus/eslint-plugin-jsdoc */
    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",

    "@stylistic/padding-line-between-statements": [
      "warn",
      // Line before return
      { blankLine: "always", prev: "*", next: "return" },
      // Line after vars block
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      // Line before function
      { blankLine: "always", prev: "*", next: "function" },
      // Line before type/interface (TS)
      { blankLine: "always", prev: "*", next: ["interface", "type"] },
    ],
    /**
     * Remove wrapping braces if they can be omitted
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    "arrow-body-style": "warn",
    /** https://eslint.org/docs/latest/rules/prefer-template */
    "prefer-template": "warn",
  },
}
