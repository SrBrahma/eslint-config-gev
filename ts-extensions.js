/**
 * File smartly and automatically generated by my scripts/makeTsExtensions.js
 *
 * Some Typescript rules extends the JS rules to also support TS syntax.
 * This disables the JS rules and have their values in the TS corresponding rules.
 */

module.exports = {
  rules: {
['brace-style']: 'off',
['@typescript-eslint/brace-style']: ["off"],

['comma-dangle']: 'off',
['@typescript-eslint/comma-dangle']: ["off"],

['comma-spacing']: 'off',
['@typescript-eslint/comma-spacing']: ["off"],

['default-param-last']: 'off',
['@typescript-eslint/default-param-last']: ["error"],

['func-call-spacing']: 'off',
['@typescript-eslint/func-call-spacing']: ["off"],

['keyword-spacing']: 'off',
['@typescript-eslint/keyword-spacing']: ["off"],

['lines-between-class-members']: 'off',
['@typescript-eslint/lines-between-class-members']: ["warn","always",{"exceptAfterSingleLine":true}],

['no-dupe-class-members']: 'off',
['@typescript-eslint/no-dupe-class-members']: ["error"],

['no-empty-function']: 'off',
['@typescript-eslint/no-empty-function']: ["off"],

['no-extra-parens']: 'off',
['@typescript-eslint/no-extra-parens']: ["off"],

['no-extra-semi']: 'off',
['@typescript-eslint/no-extra-semi']: ["off"],

['no-loss-of-precision']: 'off',
['@typescript-eslint/no-loss-of-precision']: ["error"],

['no-redeclare']: 'off',
['@typescript-eslint/no-redeclare']: ["error"],

['no-throw-literal']: 'off',
['@typescript-eslint/no-throw-literal']: ["warn"],

['no-unused-vars']: 'off',
['@typescript-eslint/no-unused-vars']: ["warn",{"ignoreRestSiblings":true}],

['object-curly-spacing']: 'off',
['@typescript-eslint/object-curly-spacing']: ["off"],

['quotes']: 'off',
['@typescript-eslint/quotes']: [0],

['require-await']: 'off',
['@typescript-eslint/require-await']: ["warn"],

['semi']: 'off',
['@typescript-eslint/semi']: ["off"],

['space-before-blocks']: 'off',
['@typescript-eslint/space-before-blocks']: ["off"],

['space-before-function-paren']: 'off',
['@typescript-eslint/space-before-function-paren']: ["off"],

['space-infix-ops']: 'off',
['@typescript-eslint/space-infix-ops']: ["off"],
  }
}
