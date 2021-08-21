import path from 'path';

const pkgJson = require('../../package.json') as Record<string, string>;
/** General and commonly used info about this program. */
export const Program = {
  /** From package.json */
  name: pkgJson.name,
  version: pkgJson.version,
  /** Reflects process.cwd() */
  cwd: process.cwd(),
  /** Path of the src/ dir, or lib, if compiled. */
  srcPath: path.join(__dirname, '..'),
  /** Path of the program root dir, where for example is the package.json. */
  rootPath: path.join(__dirname, '..', '..'),
  /** Short for path.join(Program.cwd, ...segments) */
  pathFromCwd: (...segments: string[]): string => path.join(Program.cwd, ...segments),
  /** Short for path.join(Program.srcPath, ...segments) */
  pathFromSrc: (...segments: string[]): string => path.join(Program.srcPath, ...segments),
  /** Short for path.join(Program.rootPath, ...segments) */
  pathFromRoot: (...segments: string[]): string => path.join(Program.rootPath, ...segments),
};