<div align="center">

[![npm](https://img.shields.io/npm/v/eslint-config-gev)](https://www.npmjs.com/package/eslint-config-gev)
[![npm](https://img.shields.io/npm/dw/eslint-config-gev)](https://www.npmjs.com/package/eslint-config-gev)

</div>


# eslint-config-gev

My curated ESLint configs for Javascript/Typescript. All my projects are using this.

Intended to work without Prettier, as ESLint can really manage the code looks by itself.

You can also use my [**`gev`** npx package](https://github.com/srbrahma/gev) that will create a new project with everything properly and automatically configured.

Works accordingly to https://eslint.org/docs/developer-guide/shareable-configs


If interested, take a look into the source files to see what will be used as plugins, extends and rules.


## 💿 Install:

* `npm i -D eslint-config-gev"

* Add the following to the top of your .eslintrc.js:

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");
```

With it, you won't need to install `eslint` and all the plugins we use!

### Typescript projects:
* Add `"eslint-config-gev"` *(or `"eslint-config-gev/ts"`)* to the `"extends": [...]` field in your eslintrc.

### Typescript + React projects:
* Add `"eslint-config-gev/react"` to the `"extends": [...]` field in your eslintrc.

### Typescript + React Native projects:
* Add `"eslint-config-gev/react-native"` to the `"extends": [...]` field in your eslintrc.

### Javascript:
* Add `"eslint-config-gev/js"` to the `"extends": [...]` field in your eslintrc.




## 🦉 Your eslintrc.js will look like this (you may copy & paste):


<details><summary><b>eslintrc.js for Typescript</b></summary>

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // *1
    "eslint-config-gev", // https://github.com/SrBrahma/eslint-config-gev-gev
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname, // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "ignorePatterns": [
    "/lib/**/*", // Ignore built files.
    "/dist/**/*",
    "/.eslintrc.js" // Ignore itself
  ],
  "rules": {
  }
};

// [*1]: Optional but improves the linting for Typescript:
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information

```
</details>


<details><summary><b>eslintrc.js for Typescript + React</b></summary>

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "env": {
    "es2021": true,
    "node": true,
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // *1
    "eslint-config-gev/react", // https://github.com/SrBrahma/eslint-config-gev
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname, // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": { // To support .jsx files
      "jsx": true
    }
  },
  "ignorePatterns": [
    "/lib/**/*", // Ignore built files.
    "/dist/**/*",
    "/.eslintrc.js" // Ignore itself
  ],
  "rules": {
  }
};

// [*1]: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
```

</details>


<details><summary><b>eslintrc.js for Typescript + React Native</b></summary>

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "react-native/react-native": true // *2
  },
  "extends": [
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // *1
    "eslint-config-gev/react-native", // https://github.com/SrBrahma/eslint-config-gev
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname, // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": { // *2
      "jsx": true
    }
  },
  "ignorePatterns": [
    "/lib/**/*", // Ignore built files.
    "/dist/**/*",
    "/.eslintrc.js" // Ignore itself
  ],
  "rules": {
  }
};

// [*1]: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
// [*2]: https://github.com/Intellicode/eslint-plugin-react-native#configuration
```

</details>




<details><summary><b>eslintrc.js for Javascript</b></summary>

```js
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  "env": {
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint-config-gev/js", // https://github.com/SrBrahma/eslint-config-gev
  ],
  "ignorePatterns": [
    "/.eslintrc.js" // Ignore itself
  ],
  "rules": {
  }
};

```

</details>



</br>

*You can still add other extends, plugins, rules etc to your **eslintrc**.*

</br>

## 📰 [Changelog](./CHANGELOG.md)
