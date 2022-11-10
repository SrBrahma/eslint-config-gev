module.exports = {
  plugins: ['react-native'],
  extends: ['./react.js'],
  rules: {
    'react-native/no-raw-text': 'error',
    /** Warns unused styles. Won't autofix.
     * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md */
    'react-native/no-unused-styles': 'warn',
    /** Removes unnecessaries arrays wrapping single styles.
     * https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md */
    'react-native/no-single-element-style-arrays': 'warn',
  },
};
