# eslint-config-gev

My common ESLint configs for Typescript. Intended to work without Prettier, as ESLint can really manage the code basic looks by itself.

You can also use my [**`gev`** npx package](https://github.com/srbrahma/gev) that will create a new project with everything properly and automatically configured.

Works according to https://eslint.org/docs/developer-guide/shareable-configs


# Install:

The other packages after this one are there to ensure the basic requirements are installed and updated.

- For Typescript projects:

`npm i -D eslint-config-gev@latest eslint@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`

- For Typescript + React Native projects:

`npm i -D eslint-config-gev@latest eslint@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest eslint-plugin-react-native@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`


# Usage:

After installing, you just need to add `"eslint-config-gev"` to the `"extends": [...]` field in your eslintrc.

Besides my customized rules, it will also add `"@typescript-eslint"` to the `"plugins"` field, and `"eslint:recommended"`, `"plugin:@typescript-eslint/recommended"` and `"plugin:@typescript-eslint/eslint-recommended"` to the `"extends"` field. You don't need to also have them in your eslintrc.

[Read the **ts.js** file to see what it exactly changes](./ts.js).


Your eslintrc.js will look like this (you may copy & paste):


<details><summary><b>eslintrc.js for Typescript</b></summary>

```js
module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint-config-gev", // https://github.com/SrBrahma/eslint-config
    "plugin:@typescript-eslint/recommended-requiring-type-checking" // *1
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname, // *1
    "project": ['./tsconfig.json'], // *1
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "rules": {
  }
};

// [*1] - Optional but improves the linting for Typescript:
// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
```
</details>

<details><summary><b>eslintrc.js for Typescript + React Native</b></summary>

```js
module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "react-native/react-native": true // *2
  },
  "extends": [
    "eslint-config-gev/react-native", // https://github.com/SrBrahma/eslint-config
    "plugin:@typescript-eslint/recommended-requiring-type-checking" // *1
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
  "rules": {
  }
};

// [*1] - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#getting-started---linting-with-type-information
// [*2] - https://github.com/Intellicode/eslint-plugin-react-native#configuration
```

</details>


</br>

*You can still add other extends, plugins, rules etc to your **eslintrc**.*

</br>

# [Changelog](./CHANGELOG.md)

# Future

* **lerna** integration for multiple packages (and different peerDeps)

* Since npm v7, peerDeps are automatically installed. But they probably aren't easily updatable by the user. This eslint-config could have them as devDeps, and have some kind of hook to automatically increase its version when a eslint dep updates. No more installing **all** those eslint packages! Maybe this would mess npm lint scripts, but there may be a workaround.