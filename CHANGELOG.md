# Changelog

> Changes to the `js` flavor are also applied to all the other flavors.
> Changes to the `ts` flavor are also applied to `react` and `react-native` flavors.

## 4.5.0

- Added `"react-refresh/only-export-components"`
- Upgraded deps

## 4.4.0

- Upgraded deps

## 4.3.0

- Removed `require-extensions` plugin. Bun ftw!

## 4.2.1

- Fixed `biome` not being in overrides

## 4.2.0

- Upgraded `eslint-config-biome`; removed internals no longer required due to this upgrade.
- Improved package.json sorting.
- `next` now extends `plugin:@next/next/core-web-vitals`.

## 4.1.0-5

- Add next flavor

## 4.0.0~1

- You should now use this package together with Biome, for improved performance. All ESLint rules that have a Biome corresponding rules are now disabled.

- Removed `react-native-js` and `react-js` flavors.

## 3.10.5

- Fix missing files

## 3.10.4

- Add `prefer-template`.

## 3.10.0~3

- Improved the bin. Now the dependency is added with the command and we are using a lighter package for the CLI parsing.

## 3.9.0

- Added `require-extensions` plugin. Let's have `.js` in all imports for ESM compatibility.
- `npx eslint-config-gev <flavor>` will have `.cjs` as extension by default, instead of `.js`. Dropped the `--cjs` flag and added the `--js`.

## 3.8.1

- Remove `no-relative-import-paths/no-relative-import-paths`

## 3.8.0

- Add `arrow-body-style`

## 3.7.0

- Add `'@typescript-eslint/array-type': ['warn', { default: 'generic' }]`
- Add `'@typescript-eslint/prefer-string-starts-ends-with': 'warn'`
- Add package `@stylistic/eslint-plugin`
- Add `"padding-line-between-statements"` for multiple situations

## 3.6.0

- Revert previous minor for functions and use `'eslint-plugin-prefer-arrow-functions'` instead as it has autofix.

## 3.5.0

- Add `'func-style'`, `'prefer-arrow-callback'` rules and `eslint-plugin-jsdoc` package.

## 3.4.0

- Add https://www.npmjs.com/package/eslint-plugin-no-relative-import-paths

## 3.3.4

- Fixed .cjs extension

## 3.3.3

- Added `allowConstantLoopConditions: true` to `@typescript-eslint/no-unnecessary-condition`

## 3.3.2

- Reverted the 3.3.0~1 changes and made them to be 'error'. They were just being warnings by the recommended rules default.

## 3.3.0~1

- Removed the following rules overrides that were allowing `any` usage:

  - `'@typescript-eslint/no-explicit-any': 'off'`
  - `'@typescript-eslint/no-unsafe-assignment': 'off'`
  - `'@typescript-eslint/no-unsafe-return': 'off'`
  - `'@typescript-eslint/no-unsafe-member-access': 'off'`
  - `'@typescript-eslint/no-unsafe-argument': 'off'`
  - `'@typescript-eslint/no-unsafe-call': 'off'`

- Removed `'@typescript-eslint/no-non-null-assertion': 'off'`

- Updated dependencies

They can still be disabled for specific lines where they may apply in a good way.

## 3.2.0

- Removed `@typescript-eslint/explicit-module-boundary-types`. Not worth the effort on most cases; typing returns is more of a good practice, shouldn't be enforced as it slows down development.

## 3.1.0

- Re-added `import/newline-after-import` with `count: 1` to be compatible with Prettier (it only removes newlines).

# 3.0.0~1

All formatting rules are now disabled. This is a change in this config's philosophy and I have decided this as ESLint format gets slow on larger codebases and due to [this](https://typescript-eslint.io/docs/linting/troubleshooting/formatting/). You can still use eslint-config-gev@2 to use the formatting rules. Created [prettier-config-gev](https://github.com/SrBrahma/prettier-config-gev).

## 2.47.0~1

- **ts** added `'no-undef': 'off'` to remove false-positives.

## 2.46.0~3

- Added `--cjs` option to CLI

## 2.45.0

- Added executable for creating .eslintrc.js!

## 2.44.0

- Simplified and prettified example usage
- Simplified source code (removed `js-no-extends.js` and `react-common.js` and some unused code)
- `'plugin:@typescript-eslint/recommended-requiring-type-checking'` is now added by default in `ts` flavors `extends`.

## 2.43.0~3

- Now this package uses itself for its own linting!
- **ts**: Added `"@typescript-eslint/no-unnecessary-boolean-literal-compare`
- **ts**: Some TS rules that extended JS ones weren't being used. **This is now fixed with the damn smart ts-extensions.js automatically generated file!**

## 2.42.0

- Now all dependencies have fixed versions to avoid breaking CI/CD if one of them has a breaking change/bug. Before, they all had '\*' as version.

## 2.41.0

**js**: Readded `"brace-style": ["warn", "1tbs", { "allowSingleLine": true }],`

## 2.40.0

**js**: Added `"curly": ["warn", "multi", "consistent"]`

## 2.39.0

**react**: Added `"react/jsx-fragments": "warn"`.

## 2.38.0

- Import sort will now consider `~` path alias.
- **js**: Added `"no-tabs": "warn", "no-var": "warn"`

## 2.37.0

- Added `react-native-js` and `react-js` configs.
- Improved README. Now each .eslintrc.js is right after their corresponding config.

## 2.36.2

- Added `"always"` as 2nd parameter to `"lines-between-class-members"`.

## 2.36.1

- Removed `"considerComments": true` to `"import/newline-after-import"` as it's not yet released.

## 2.36.0

- `"no-multiple-empty-lines": ["warn", { "max":` from `5` to `2`.
- `"import/newline-after-import": ["warn", { "count":` from `3` to `2`.

## 2.35.0

### js

- `"lines-between-class-members"`
- Added `"considerComments": true` to `"import/newline-after-import"`

## 2.34.0

**js, ts**: Added `no-throw-literal: "warn"` and its **ts** variant.

## 2.33.0

**js**: Added `"object-shorthand": ["warn", "always"]`.

## 2.32.3

**react**: `"jsx-quotes": ["error"` to `"warn"`.

## 2.32.2

**ts**: Added `"disallowTypeAnnotations": false` to `"consistent-type-imports"`.

## 2.32.0~1

**js**: Added `"quote-props": ["warn", "as-needed"]`.

## 2.31.0

**js**: Added `"block-spacing": "warn"`. Thanks, [mdjermanovic](https://github.com/eslint/eslint/discussions/15615#discussioncomment-2191461)!

## 2.30.0

**js**: Dropped `"no-empty-function"`.
**ts**: Dropped `"@typescript-eslint/no-empty-function"`.

## 2.29.0

**js**: Added `"no-mixed-operators": "warn"`.

## 2.28.0

**ts**: Added `"@typescript-eslint/consistent-type-imports": "warn"`.

## 2.27.2

**js**: Added `ignoreRestSiblings` to `no-unused-vars`.

## 2.27.0~1

### Now using [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)!

#### You won't need to install all the plugins anymore, nor the `eslint`.

## 2.26.1

**js**: Added missing `plugin: ["unused-imports"]`.

## 2.26.0

**js**: Re-enabled `"unused-imports/no-unused-imports": "warn"`.

## 2.25.1

**ts**: `"@typescript-eslint/restrict-plus-operands": "off"` as it's bugging often.

## 2.25.0

**react**: `"jsx-quotes": ["error", "prefer-single"]`.

## 2.24.0

**react-native**:

- `"react-native/no-unused-styles": "warn"`.
- `"react-native/no-single-element-style-arrays" : "warn"`.

## 2.23.0

**react**: Removed `"react/jsx-no-useless-fragment"`.

## 2.22.0

**react**: `"react/jsx-curly-brace-presence": ["warn", { "props": "never", "children": "always"}]`.

## 2.21.0

**react**: `"react/jsx-no-useless-fragment": ["warn", {"allowExpressions": true}]`.

## 2.20.0

**react**: Now extending `"plugin:react/jsx-runtime"` for React 17 support, `import React` is no longer required.

## 2.19.0

**ts**:

- `"@typescript-eslint/no-unnecessary-condition": "warn"`.

## 2.18.1

~~`dependencies` to `peerDependencies` so they are automatically installed and no longer required to be manually installed.~~ Aparently didn't work.

## 2.18.0

**js**:

- `"import/newline-after-import": ["warn", { "count": 3 }]`.
- `"import/no-duplicates": "warn"`.

## 2.17.0

**js**: `"array-bracket-newline"` from `{ "multiline": true }` to `"consistent"`.

## 2.16.0

**ts**: `"@typescript-eslint/no-unsafe-argument": "off"`.

## 2.15.0

**react**

```"react-hooks/exhaustive-deps": ["warn", {
  "enableDangerousAutofixThisMayCauseInfiniteLoops": true
}],
```

**_(hooks deps autofix! yea)_**

## 2.14.0

**js** `"arrow-spacing": "warn"`.

**ts** `"no-empty-pattern": "off"`.

**reacts** `"react/no-children-prop": "off"`.

## 2.13.0

#### js

- Removed `"brace-style": ["warn", "1tbs", { "allowSingleLine": true }]` because it's limited and complains when it shouldn't, like on comments on line above.

## 2.12.0

#### js

- Added "no-confusing-arrow": "warn" and "arrow-parens": "warn".

## 2.11.0

#### js

- Added "react/jsx-tag-spacing".

## 2.10.0

#### js

- Improved import sort (It's amazing now :)!).

## 2.9.0

#### js

- Added "space-in-parens", "space-before-function-paren".
- Added "simple-import-sort" plugin.

## 2.8.2

- Added GitHub Action to this package.

#### ts

- Changed ?? to || in its replaceBaseRule function to be Node 12 friendly.

## 2.8.1

#### js

- Removed old 'unused-imports' plugin from js-no-extends.

## 2.8.0

#### js

- Removed `operator-linebreak` - would mess React conditional components.
- Removed `unused-imports/no-unused-imports` - would sometimes remove imports when I didn't want to.

## 2.7.1

#### js

- Added `"spaced-comment": ["warn", "always", { "exceptions": ["-", "+"], "markers": ["/"] }]`.
- Added `"switch-colon-spacing": "warn"`.

## 2.7.0

#### js

- Added `"unused-imports/no-unused-imports": "warn"`.

## 2.6.2

#### js

```js
"operator-linebreak": ["warn", "before", { "overrides": {
  "=": "after", "+=": "after", "-=": "after", "*=": "after", "/=": "after",
}}],
```

## 2.6.1

#### js

```js
"no-useless-catch": "warn" // was error, in recommended extends
```

## 2.6.0

#### js

```js
"no-whitespace-before-property": "warn",
```

## 2.5.5~6

#### js

"error" to "warn":

```js
"no-multi-spaces": "warn",
```

## 2.5.4

#### js

"error" to "warn":

```js
"no-empty": "warn",
"no-empty-function": "warn",
```

## 2.5.3

#### js

```js
"no-unreachable-loop": "warn",
"no-unreachable": "warn"
```

## 2.5.2

#### js

```js
"no-multiple-empty-lines": ["warn", { "max": 5, "maxEOF": 0, "maxBOF": 0 }],
```

## 2.5.1

#### js

```js
"no-trailing-spaces": "warn",
```

## 2.5.0

#### js

```js
"no-loss-of-precision": "error",
```

#### ts

- Added function to better replace js based rules.
- Replaced ~5 js rules by ts rules.

## 2.4.6

#### ts

```js
"comma-dangle": "off",
"@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
```

## 2.4.5

#### ts

```js
"semi": "off",
"@typescript-eslint/semi": ["warn"],
"@typescript-eslint/member-delimiter-style",
```

## 2.4.3~4

#### js

- Switched from `"prefer-const"` to `"no-autofix/prefer-const"`. No more auto-fix for `prefer-const`!

## 2.4.2

#### js

- Added `"avoidEscape": true` option to `"quotes"`.

## 2.4.1

#### ts

- Added `"@typescript-eslint/prefer-regexp-exec": "off"`.

## 2.4.0

#### react, react-native

- Added `"react/jsx-equals-spacing"` and `"react/jsx-curly-spacing"`.
- Both are now using the new shared react-common.js file.

## 2.3.2

#### ts

- Added `"@typescript-eslint/explicit-module-boundary-types": ["warn", { allowArgumentsExplicitlyTypedAsAny: true }]`.

## 2.3.1

#### js

- Added `{"SwitchCase": 1}` to indent.

## 2.3.0

#### js

- Added `"brace-style"`, `"array-bracket-newline"`, `"object-curly-newline"`.

## 2.2.1

#### react,react-native

- Added `"settings": { "react": { "version": "detect" }} to remove those pesky warnings.

## 2.2.0

#### js

- Added `"keyword-spacing"`, `"key-spacing"`, `"space-unary-ops"`, `"space-infix-ops"`, `"rest-spread-spacing"`. I could and should have added them earlier!

## 2.1.8

#### ts

- Added `"require-await": "off"` (there is already a ts equivalent rule for it).

## 2.1.7

#### js

- Added `"no-constant-condition": ["warn", { "checkLoops": false }]`.

## 2.1.5~6 (2021-07-02)

- **`[ts]`** - Fixed the extends order. Also, we were extending `"./js.js"` and it extended `"eslint-recommended"`. ts is now extending the new `"js-no-extends.js"`, that don't extends the `"eslint-recommended"`. The `"./js.js"` also extends that new file.

## 2.1.4 (2021-07-02)

- **`[ts]`** - Fixed "no-unused-vars". Ref: https://stackoverflow.com/a/61555310/10247962.

## 2.1.3 (2021-07-02)

- **`[ts]`** - Changed `"@typescript-eslint/no-floating-promises": "off"` to `"@typescript-eslint/no-floating-promises": "warn"`.

## 2.1.2 (2021-06-27)

- **`[js]`** - Added `"space-before-blocks": "warn"`.

## 2.1.1 (2021-06-17)

- **`[js]`** - Changed `no-unused-vars` from **error** to **warn**.

## 2.1.0 (2021-06-13)

- **`[js]`** - Added Javascript (for a friend that still doesn't know the wonderful world of TS!).
- **`[ts]`** - Now extends `js.js`. No rules were changed, just some of its content was moved to js file.

## 2.0.3 (2021-05-27)

- **`[react]`** - Reordered extends.
- Reordered extends in README example.

## 2.0.2 (2021-05-06)

- **`[ts]`** - `@typescript-eslint/require-await` now throws a warn instead of error.

## 2.0.1 (2021-05-03)

- **`[ts]`** - Added.

```
"@typescript-eslint/no-misused-promises": [ "error", {
  "checksVoidReturn": false
}]
```

- **`[react-native]`** - Fixed extends order so `./ts.js` have priority.

# 2.0.0 (2021-04-25)

- Added **react** and **react-native** configs.

- Rename package from `@srbrahma/eslint-config` to `eslint-config-gev`.

## 1.1.0 (2021-04-23)

- Added "@typescript-eslint/no-var-requires": "off".
- Fixed "**dirname" to **dirname (no quotes).

# 1.0.0 (2021-04-21)

- Release version.
