const common = require('./common')

module.exports = {
  extends: [ 'eslint:recommended' ],
  files: [ './apps/**/*.js', './libs/**/*.js', './.eslintrc.js' ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    ...common
  },
  overrides: [ ]
};
