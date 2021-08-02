<!-- template:
## 2..
###
```js
```
-->

# Changelog

## 2.7.0
### js
* Added `"unused-imports/no-unused-imports": "warn"`

## 2.6.2
### js
```js
"operator-linebreak": ["warn", "before", { "overrides": {
  "=": "after", "+=": "after", "-=": "after", "*=": "after", "/=": "after",
}}],
```

## 2.6.1
### js
```js
"no-useless-catch": "warn" // was error, in recommended extends
```

## 2.6.0
### js
```js
"no-whitespace-before-property": "warn",
```

## 2.5.5~6
### js
"error" to "warn":
```js
"no-multi-spaces": "warn",
```

## 2.5.4
### js
"error" to "warn":
```js
"no-empty": "warn",
"no-empty-function": "warn",
```

## 2.5.3
### js
```js
"no-unreachable-loop": "warn",
"no-unreachable": "warn"
```

## 2.5.2
### js
```js
"no-multiple-empty-lines": ["warn", { "max": 5, "maxEOF": 0, "maxBOF": 0 }],
```

## 2.5.1
### js
```js
"no-trailing-spaces": "warn",
```

## 2.5.0
### js
```js
"no-loss-of-precision": "error",
```
### ts
* Added function to better replace js based rules.
* Replaced ~5 js rules by ts rules.

## 2.4.6
### ts
```js
"comma-dangle": "off",
"@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
```

## 2.4.5
### ts
```js
"semi": "off",
"@typescript-eslint/semi": ["warn"],
"@typescript-eslint/member-delimiter-style",
```

## 2.4.3~4
### js
* Switched from `"prefer-const"` to `"no-autofix/prefer-const"`. No more auto-fix for `prefer-const`!

## 2.4.2
### js
* Added `"avoidEscape": true` option to `"quotes"`.

## 2.4.1
### ts
* Added `"@typescript-eslint/prefer-regexp-exec": "off"`.

## 2.4.0
### react, react-native
* Added `"react/jsx-equals-spacing"` and `"react/jsx-curly-spacing"`
* Both are now using the new shared react-common.js file.


## 2.3.2
### ts
* Added `"@typescript-eslint/explicit-module-boundary-types": ["warn", {
      allowArgumentsExplicitlyTypedAsAny: true
    }]`

## 2.3.1
### js
* Added `{"SwitchCase": 1}` to indent.

## 2.3.0
### js
* Added `"brace-style"`, `"array-bracket-newline"`, `"object-curly-newline"`

## 2.2.1
### react,react-native
* Added `"settings": { "react": { "version": "detect" }} to remove those pesky warnings.

## 2.2.0
### js
* Added `"keyword-spacing"`, `"key-spacing"`, `"space-unary-ops"`, `"space-infix-ops"`, `"rest-spread-spacing"`. I could and should have added them earlier!


## 2.1.8
### ts
* Added `"require-await": "off"` (there is already a ts equivalent rule for it)

## 2.1.7
### js
* Added `"no-constant-condition": ["warn", { "checkLoops": false }]`

## 2.1.5~6 (2021-07-02)
* **`[ts]`** - Fixed the extends order. Also, we were extending `"./js.js"` and it extended `"eslint-recommended"`. ts is now extending the new `"js-no-extends.js"`, that don't extends the `"eslint-recommended"`. The `"./js.js"` also extends that new file.

## 2.1.4 (2021-07-02)
* **`[ts]`** - Fixed "no-unused-vars". Ref: https://stackoverflow.com/a/61555310/10247962

## 2.1.3 (2021-07-02)
* **`[ts]`** - Changed `"@typescript-eslint/no-floating-promises": "off"` to `"@typescript-eslint/no-floating-promises": "warn"`

## 2.1.2 (2021-06-27)
* **`[js]`** - Added `"space-before-blocks": "warn"`.

## 2.1.1 (2021-06-17)

* **`[js]`** - Changed `no-unused-vars` from **error** to **warn**.

## 2.1.0 (2021-06-13)

* **`[js]`** - Added Javascript (for a friend that still doesn't know the wonderful world of TS!)
* **`[ts]`** - Now extends `js.js`. No rules were changed, just some of its content was moved to js file.


## 2.0.3 (2021-05-27)

* **`[react]`** - Reordered extends
* Reordered extends in README example


## 2.0.2 (2021-05-06)

* **`[ts]`** - `@typescript-eslint/require-await` now throws a warn instead of error.


## 2.0.1 (2021-05-03)

* **`[ts]`** - Added
```
"@typescript-eslint/no-misused-promises": [ "error", {
  "checksVoidReturn": false
}]
```

* **`[react-native]`** - Fixed extends order so `./ts.js` have priority


# 2.0.0 (2021-04-25)

* Added **react** and **react-native** configs.

* Rename package from `@srbrahma/eslint-config` to `eslint-config-gev`.


## 1.1.0 (2021-04-23)

* Added "@typescript-eslint/no-var-requires": "off"
* Fixed "__dirname" to __dirname (no quotes)


# 1.0.0 (2021-04-21)

* Release version