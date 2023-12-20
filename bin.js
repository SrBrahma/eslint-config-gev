#!/usr/bin/env node
const { defineCommand, runMain } = require('citty');
const path = require('path');
const fs = require('fs');

const pkgJson = require('./package.json');

const getFlavorPath = (flavor = '') =>
  path.resolve(__dirname, 'examples', flavor ? flavor + `.eslintrc.js` : '');

const files = fs.readdirSync(getFlavorPath()).filter((s) => s.includes('.eslintrc.js'));

const flavors = files.map((s) => s.replace('.eslintrc.js', ''));
const flavorsString = flavors.join(', ');

const addDependency = (packageName, version, dev = false) => {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  const depKey = dev ? 'devDependencies' : 'dependencies';

  packageJson[depKey] = packageJson[depKey] || {};
  packageJson[depKey][packageName] = version;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

const setupEslint = (flavor, { force, js }) => {
  const filename = `.eslintrc.${js ? 'js' : 'cjs'}`;

  if (fs.existsSync(filename) && !force)
    throw new Error('There is already an .eslintrc.js in the directory! Use -f to overwrite.');

  fs.copyFileSync(getFlavorPath(flavor), filename);

  addDependency('eslint-config-gev', pkgJson.version, true);
  console.log(
    'eslint-config-gev was added as a devDependency! Run "npm/yarn/pnpm/bun install" to install it!',
  );
};

const main = defineCommand({
  meta: {
    name: pkgJson.name,
    version: pkgJson.version,
    description: pkgJson.description,
  },
  args: {
    force: {
      type: 'boolean',
      alias: '-f',
      description: "Overwrites the existing '.eslintrc'",
    },
    js: {
      type: 'boolean',
      description: "Use '.eslintrc.js' instead of '.eslintrc.cjs'",
    },
    flavor: {
      type: 'positional',
      required: true,
      description: `Your project kind. One of these: ${flavorsString}`,
    },
  },
  run: ({ args: { flavor, force, js } }) => {
    if (!flavors.includes(flavor))
      throw new Error(`The flavor must be one of these: ${flavorsString}`);

    setupEslint(flavor, { force, js });
  },
});

runMain(main);
