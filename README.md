# @srbrahma/eslint-config

My common ESLint configs for Typescript. Intended to work without Prettier, as ESLint can really manage the code basic looks by itself.

You can also use my `@srbrahma/ts` npx package, that will create a project with everything properly configured.

Eventually, React and React Native support will be added.
<!-- Includes flavors for React and React Native. -->

Works according to https://eslint.org/docs/developer-guide/shareable-configs

# Install:

The other packages after this one are there to ensure the basic requirements are installed and updated.

- For TS projects:

`npm i -D @srbrahma/eslint-config@latest eslint@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`

<!-- - React:
- React Native: -->


# Usage:

After installing, you just need to add `"@srbrahma/eslint-config"` to the `"extends": [...]` field in your eslintrc.

Besides my customized rules, it will also add `"@typescript-eslint"` to the `"plugins"` field, and `"eslint:recommended"`, `"plugin:@typescript-eslint/recommended"` and `"plugin:@typescript-eslint/eslint-recommended"` to the `"extends"` field. You don't need to also have them in your eslintrc.

[Read the **ts.js** file to see what it exactly changes](./ts.js).


Your eslintrc.js will look like this (you may copy & paste):

<details>
<summary><b>eslintrc.js for TS</b></summary>

```js
module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "@srbrahma/eslint-config", // https://github.com/SrBrahma/eslint-config
    "plugin:@typescript-eslint/recommended-requiring-type-checking" // *1
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": "__dirname", // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "rules": {
  }
};

// [*1] - Optional but improves the linting for TS:
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
```



</details>
<!--
<details>
<summary>eslintrc.js for TS + React Native</summary>

```js
module.exports = {
  "env": {
    "es2020": true,
    "node": true,
    "react-native/react-native": true // *2
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking" // *1
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": "__dirname", // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": { // *2
      "jsx": true
    }
  },
  "rules": {
    }
};

// [*1] - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
// [*2] - https://github.com/Intellicode/eslint-plugin-react-native#configuration
```

</details> -->

</br>

*You can still add other extends, plugins, rules etc.*

</br>

# [Changelog](./CHANGELOG.md)