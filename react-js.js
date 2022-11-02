module.exports = {
  settings: {
    react: {
      version: 'detect', // To remove the warning.
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it
    './js.js',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    /** No space between prop and equal, and equal and value.
     *
     * `Wrong: <C prop = {value}/>; Right: <C prop={value} />`
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md */
    'react/jsx-equals-spacing': ['warn', 'never'],
    /** No space inside prop value, and no space inside children brackets.
     *
     * `Wrong: <C prop={ value }/>; Right: <C prop={value} />`
     *
     * `Wrong: <C>{ value }</C>; Right: <C>{value}</C>`
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md */
    'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],

    /** No spaces after tag opening and before tag closing.
     *
     * Wrong: < View >< /View >; Right: <View></View>;
     *
     * Wrong: <View />; Right: <View/>
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md */
    'react/jsx-tag-spacing': ['warn', {
      beforeSelfClosing: 'never',
      beforeClosing: 'never',
    }],

    /** Allow to use <Component children={x}/>. Sometimes it's useful to simplify the code and to do some nice hacks,
     * like conditional wrapping component.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md */
    'react/no-children-prop': 'off',

    /** Enable deps autofix. I've only had infinite loops once, and the autofix was off,
    * I just accept the suggestions and don't spend time analysing it. Rare to happen, easy to notice.
    *
    * https://github.com/facebook/react/issues/18235#issuecomment-898636301 */
    'react-hooks/exhaustive-deps': ['warn', {
      enableDangerousAutofixThisMayCauseInfiniteLoops: true,
    }],
    /** https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md */
    // Dropped it as it won't allow <></> to fit JSX.Element return.
    // "react/jsx-no-useless-fragment": ["warn", {"allowExpressions": true}],

    /** From <A b={'c'}>d</A> to <A b="c">{'d'}<A/>
     *
     * Note that it always converts to double-quotes when changing,
     * so we use `jsx-quotes` rule for props and `quotes` rule for children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md */
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'always' }],

    /** Convert <A b="c"/> to <A b='c'/>. */
    'jsx-quotes': ['warn', 'prefer-single'],

    /** Prefer <> over <React.Fragment> if not using key=''.
     *
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md */
    'react/jsx-fragments': 'warn',
  },
};