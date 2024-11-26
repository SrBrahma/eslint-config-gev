module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "./js.js",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "./ts-extensions.js",
  ],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["biome"],
    },
  ],

  rules: {
    // Allows explicitating implicit types, like `const a: number = 10`
    "@typescript-eslint/no-inferrable-types": "off",

    // Else would complain about // @ts-ignore in .js files. If I didn't need this ts-comment, this could be removed
    "@typescript-eslint/ban-ts-comment": "off",

    // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    "@typescript-eslint/no-floating-promises": "warn",

    // This wasn't allowing different data types in `templates string`. Why the fuck not?
    "@typescript-eslint/restrict-template-expressions": "off",

    // Wasn't simply allowing `const a = x.y.functionA`.
    "@typescript-eslint/unbound-method": "off",

    // [1.1.0] Allows to use `const a = require('...')`. This is specially useful for `const pkg = require('../package.json')`,
    // as TS will complain about importing a file outside rootDir (defined in tsconfig)
    "@typescript-eslint/no-var-requires": "off",

    // Allow having a `function a(callback: () => void) {...}` to be called with a(async () => {...})`
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],

    // Allow 'aString'.match('a').
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.3/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    "@typescript-eslint/prefer-regexp-exec": "off",

    /** Disable it to allow empty catch blocks. */
    "@typescript-eslint/no-empty-function": "off",

    /**
     * This is kinda useless. It's more of a pain, actually:
     * If you are writting a function like f({}: Props) to later fill the object with the desired props,
     * it will mark it as an error.
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    "no-empty-pattern": "off",

    /** https://typescript-eslint.io/rules/no-unnecessary-condition/ */
    "@typescript-eslint/no-unnecessary-condition": [
      "warn",
      {
        allowConstantLoopConditions: true, // Allow `while (true)`
      },
    ],

    /**
     * =========== Unsafe ===========
     *  === Be responsible and careful! ====
     */

    // Allows using `a!.b`. Not safe, but sometimes we really know it is valid.

    // Let us have our empty stuff!
    "@typescript-eslint/no-empty-interface": "off",

    /** [2022-02-03] It's bugging often, so I disabled it. */
    "@typescript-eslint/restrict-plus-operands": "off",

    /**
     * Improves tree-shaking and improves TS optimization.
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
     */
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: false, // Allows import('foo').Bar. Useful in global.d.ts.
      },
    ],

    /**
     * Remove unnecessary boolean literal conditionals`.
     * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
     */
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "warn",
      {
        allowComparingNullableBooleansToTrue: false,
      },
    ],

    /**
     * TS handles this, it raised false-positives sometimes.
     * https://github.com/Chatie/eslint-config/issues/45#issuecomment-1003990077
     */
    "no-undef": "off",

    /** -=-=-=- Disallow dangerous stuff, converts recommended warn to error -=-=-=- */
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-non-null-assertion": "error",

    /**
     * Prefer Array<string> instead of string[]. Faster to read and to change.
     *
     * https://typescript-eslint.io/rules/array-type/
     */
    "@typescript-eslint/array-type": ["warn", { default: "generic" }],

    /**
     * https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
     */
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  },
}

// Limbo. Disabled, but may be reenabled at some point.
// "@typescript-eslint/explicit-module-boundary-types": "off", // Removes the need of exported functions to have explicit rtn type
// TS doesn't allow "== false" yet (4.1.2), so, this rule isn't good enough to test for falsy values.
// https://github.com/microsoft/TypeScript/issues/26592#issuecomment-731608973
// "@typescript-eslint/strict-boolean-expressions": ["warn", {
//   allowNullableBoolean: true,
// }],
//
