#!/usr/bin/env node
const { program, Argument } = require('commander');
const path = require('path');
const fs = require('fs');

const pkgJson = require('./package.json');


const flavorPath = (flavor = '') => path.resolve(
  __dirname,
  './examples/',
  flavor ? flavor + '.eslintrc.js' : '',
);

const files = fs
  .readdirSync(flavorPath())
  .filter((s) => s.includes(('.eslintrc.js')));

const flavors = files.map((s) => s.replace('.eslintrc.js', ''));


function applyFlavor(flavor, force) {
  const filePath = flavorPath(flavor);
  const exists = fs.existsSync(filePath);
  if (exists && !force)
    program.error('There is already an .eslintrc.js in the directory! Use -f to overwrite.');
  fs.copyFileSync(filePath, '.eslintrc.js');
}


// TODO use a lighter lib for cli parsing
program
  .description('Creates .eslintrc.js')
  .version(pkgJson.version, '-v, --version', 'Output the version number.')
  .helpOption('-h, --help', 'Display help for command.') // Capitalize the first letter of description.
  .option('-f, --force', 'Overwrite existing .eslintrc.js')
  // https://github.com/tj/commander.js/issues/518#issuecomment-872769249
  .addArgument(new Argument('<flavor>', `The project kind.`)
    .choices(flavors)) // Will also print in the usage the possible options
  .action((flavor) => {
    const { force } = program.opts();
    applyFlavor(flavor, force);
  })
  .parse();