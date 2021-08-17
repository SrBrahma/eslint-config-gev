// Add https://www.npmjs.com/package/eslint-plugin-import ?


const jsRules = require('./js-no-extends').rules;

/** Get value from the given rule name, set it off and turn on the TS version.
 *
 * Uses fallback if rule isn't present in js-no-extends.js file.
 *
 * @returns An object containing the base rule deactivation and the new rule.
 * Use ...on it. */
function replaceBaseRule(name, fallback = "warn", force = false) {
  const value = force ? fallback : (jsRules[name] || fallback);
  return {
    [name]: "off",
    ['@typescript-eslint/' + name]: value
  }
}

module.exports = {
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // After the others https://stackoverflow.com/a/61555310/10247962
    "./js-no-extends.js", // Further configs!
  ],

  "rules": {

  /** ========== Style ========== */

    /** Semicolons everywhere!
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md */
     ...replaceBaseRule("semi"),
     "@typescript-eslint/member-delimiter-style": "warn",

     /** Trailing commas in multiline also for TS stuff
      *
      * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md */
     ...replaceBaseRule("comma-dangle", ["warn", "always-multiline"]),

     /** Require consistent spacing around type annotations
      * Wrong: let a :string; Right: let a: string;
      * Wrong: type F = ()=>null; Right: type F = () => null;
      * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md */
     "@typescript-eslint/type-annotation-spacing": "warn",

     /** Other replaces. Keeps the js rule behavior, integrate TS. */
     ...replaceBaseRule("quotes"),
     // ...replaceBaseRule("indent"), // problematic, open issue: https://github.com/typescript-eslint/typescript-eslint/issues/1824


  /** =========== Etc =========== */

    // Async functions that don't use await them will throw a warn. The default behaviour with the current extends, is to throw an error.
    ...replaceBaseRule("require-await"),

    // Allows explicitating implicit types, like `const a: number = 10`
    "@typescript-eslint/no-inferrable-types": "off",

    // Else would complain about // @ts-ignore in .js files. If I didn't need this ts-comment, this could be removed
    "@typescript-eslint/ban-ts-comment": "off",

    // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    "@typescript-eslint/no-floating-promises": "warn",

    // This wasn't allowing different data types in `templates string`. Why the fuck not?
    "@typescript-eslint/restrict-template-expressions": "off",

    // wasn't allowing eg setTimeout(async () =>...). Any good reason to keep it on? https://stackoverflow.com/a/63488201/10247962
    "@typescript-eslint/no-misused-promises": "off",

    // Wasn't simply allowing `const a = x.y.functionA`.
    "@typescript-eslint/unbound-method": "off",

    // [1.1.0] Allows to use `const a = require('...')`. This is specially useful for `const pkg = require('../package.json')`,
    // as TS will complain about importing a file outside rootDir (defined in tsconfig)
    "@typescript-eslint/no-var-requires": "off",

    // Allow having a `function a(callback: () => void) {...}` to be called with a(async () => {...})`
    "@typescript-eslint/no-misused-promises": [ "error", {
      "checksVoidReturn": false
    }],

    // js "no-unused-vars" will complain about unused arguments in type declaration of functions.
    // The extends order would already fix this, but as js-no-extends.js contains the "no-unused-vars",
    // we have to unset it. https://stackoverflow.com/a/61555310/10247962
    ...replaceBaseRule("no-unused-vars"),

    // Allow 'aString'.match('a').
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.3/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    "@typescript-eslint/prefer-regexp-exec": "off",


    /** Other replaces. Keeps the js rule behavior, integrate TS. */
    ...replaceBaseRule("keyword-spacing"),
    ...replaceBaseRule("no-loss-of-precision"),
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    ...replaceBaseRule("default-param-last", "error"),
    ...replaceBaseRule("no-empty-function"),


  /** =========== Unsafe / any ===========
   *  === Be responsible and careful! ==== */

    // Allows using `a!.b`. Not safe, but sometimes we really know it is valid.
    "@typescript-eslint/no-non-null-assertion": "off",

    // Let us have our empty stuff!
    "@typescript-eslint/no-empty-interface": "off",

    // Allows using `any` as explicit type. Sometimes, we know what we are doing!
    "@typescript-eslint/no-explicit-any": "off",

    // Allows `as any`. Sometimes it's really useful for really complex types.
    "@typescript-eslint/no-unsafe-assignment": "off",

    // Allows the function return as `any`.
    "@typescript-eslint/no-unsafe-return": "off",

    // Allows acessing props of any type var. Useful for `if ((X as any).Y)`, to check if it exists.
    "@typescript-eslint/no-unsafe-member-access": "off",

    // Allows calling new (Intl as any).RelativeTimeFormat(...), as TS doesn't know it yet.
    "@typescript-eslint/no-unsafe-call": "off",

    // Allow exported function to have an argument typed as any.
    // TODO ?: https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.2/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    "@typescript-eslint/explicit-module-boundary-types": ["warn", {
      "allowArgumentsExplicitlyTypedAsAny": true
    }],

  }
};


  // Limbo. Disabled, but may be reenabled at some point.
    // "@typescript-eslint/explicit-module-boundary-types": "off", // Removes the need of exported functions to have explicit rtn type
    // TS doesn't allow "== false" yet (4.1.2), so, this rule isn't good enough to test for falsy values.
    // https://github.com/microsoft/TypeScript/issues/26592#issuecomment-731608973
    // "@typescript-eslint/strict-boolean-expressions": ["warn", {
    //   allowNullableBoolean: true,
    // }],
    //