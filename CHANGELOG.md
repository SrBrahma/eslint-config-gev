# Changelog


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