# Changelog


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