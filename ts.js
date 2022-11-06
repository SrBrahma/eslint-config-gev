module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // TS handles this, it raised false-positives sometimes.
      // https://github.com/Chatie/eslint-config/issues/45#issuecomment-1003990077
      'no-undef': 'off',
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // After the others https://stackoverflow.com/a/61555310
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './js.js',
    './ts-extensions.js', // Automatic JS to TS rules! I love doing smart stuff! :)
  ],
  rules: {
    /** ========== Style ========== */

    '@typescript-eslint/member-delimiter-style': 'warn',

    /** Require consistent spacing around type annotations
      * Wrong: let a :string; Right: let a: string;
      * Wrong: type F = ()=>null; Right: type F = () => null;
      * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md */
    '@typescript-eslint/type-annotation-spacing': 'warn',

    /** =========== Etc =========== */

    // Allows explicitating implicit types, like `const a: number = 10`
    '@typescript-eslint/no-inferrable-types': 'off',

    // Else would complain about // @ts-ignore in .js files. If I didn't need this ts-comment, this could be removed
    '@typescript-eslint/ban-ts-comment': 'off',

    // Warn if using a Promise without await/then/catch. Good to avoid running stuff in background non intentionally.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': 'warn',

    // This wasn't allowing different data types in `templates string`. Why the fuck not?
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Wasn't simply allowing `const a = x.y.functionA`.
    '@typescript-eslint/unbound-method': 'off',

    // [1.1.0] Allows to use `const a = require('...')`. This is specially useful for `const pkg = require('../package.json')`,
    // as TS will complain about importing a file outside rootDir (defined in tsconfig)
    '@typescript-eslint/no-var-requires': 'off',

    // Allow having a `function a(callback: () => void) {...}` to be called with a(async () => {...})`
    '@typescript-eslint/no-misused-promises': ['error', {
      checksVoidReturn: false,
    }],

    // Allow 'aString'.match('a').
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.3/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    '@typescript-eslint/prefer-regexp-exec': 'off',

    /** Disable it to allow empty catch blocks. */
    '@typescript-eslint/no-empty-function': 'off',

    /** This is kinda useless. It's more of a pain, actually:
     * If you are writting a function like f({}: Props) to later fill the object with the desired props,
     * it will mark it as an error.
     * https://eslint.org/docs/rules/no-empty-pattern */
    'no-empty-pattern': 'off',

    /** I added to remove useless optional chainings, but it also does other operators checks
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md */
    '@typescript-eslint/no-unnecessary-condition': 'warn',

    /** =========== Unsafe / any ===========
   *  === Be responsible and careful! ==== */

    // Allows using `a!.b`. Not safe, but sometimes we really know it is valid.
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Let us have our empty stuff!
    '@typescript-eslint/no-empty-interface': 'off',

    // Allows using `any` as explicit type. Sometimes, we know what we are doing!
    '@typescript-eslint/no-explicit-any': 'off',

    // Allows `as any`. Sometimes it's really useful for really complex types.
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Allows the function return as `any`.
    '@typescript-eslint/no-unsafe-return': 'off',

    // Allows acessing props of any type var. Useful for `if ((X as any).Y)`, to check if it exists.
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Allows calling new (Intl as any).RelativeTimeFormat(...), as TS doesn't know it yet.
    '@typescript-eslint/no-unsafe-call': 'off',

    // Allows func(x as any).
    '@typescript-eslint/no-unsafe-argument': 'off',

    // Allow exported function to have an argument typed as any.
    // TODO ?: https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.2/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    '@typescript-eslint/explicit-module-boundary-types': ['warn', {
      allowArgumentsExplicitlyTypedAsAny: true,
    }],

    /** [2022-02-03] It's bugging often, so I disabled it. */
    '@typescript-eslint/restrict-plus-operands': 'off',

    /** Improves tree-shaking and improves TS optimization.
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md */
    '@typescript-eslint/consistent-type-imports': ['warn', {
      disallowTypeAnnotations: false, // Allows import('foo').Bar. Useful in global.d.ts.
    }],

    /** Remove unnecessary boolean literal conditionals`.
     * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn', {
      allowComparingNullableBooleansToTrue: false,
    }],
  },
};


// Limbo. Disabled, but may be reenabled at some point.
// "@typescript-eslint/explicit-module-boundary-types": "off", // Removes the need of exported functions to have explicit rtn type
// TS doesn't allow "== false" yet (4.1.2), so, this rule isn't good enough to test for falsy values.
// https://github.com/microsoft/TypeScript/issues/26592#issuecomment-731608973
// "@typescript-eslint/strict-boolean-expressions": ["warn", {
//   allowNullableBoolean: true,
// }],
//