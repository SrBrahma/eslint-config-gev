/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: [
    "unused-imports",
    "no-relative-import-paths",
    "jsdoc",
    "prefer-arrow-functions",
    "@stylistic",
  ],
  extends: ["eslint:recommended", "plugin:jsdoc/recommended"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["biome"],
    },
  ],
  rules: {
    /** ignoreRestSiblings: Ignore {unusedProp, ...rest} */
    "no-unused-vars": ["warn", { ignoreRestSiblings: true }],

    /** https://eslint.org/docs/rules/require-await */
    "require-await": "warn",

    /**
     * Disallow Number Literals That Lose Precision
     * https://eslint.org/docs/rules/no-loss-of-precision
     */
    "no-loss-of-precision": "error",

    /** Warn about unreachable code. */
    "no-unreachable-loop": "warn",
    /** Disable error about empty functions. This is good to allow .catch(() => {}) */
    "no-empty-function": "off",

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

    /**
     * https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions
     */
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],
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
      // Line after import block
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
      // Line before export block
      { blankLine: "always", prev: "*", next: "export" },
    ],
    /**
     * Remove wrapping braces if they can be omitted
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    "arrow-body-style": "warn",
  },
}

module.exports = config
