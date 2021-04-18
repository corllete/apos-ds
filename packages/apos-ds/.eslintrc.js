const path = require('path');

module.exports = {
  extends: [
    'apostrophe'
  ],
  env: {
    commonjs: true,
    node: true,
    mocha: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    babelOptions: {
      configFile: path.join(__dirname, '.babelrc')
    }
  },
  parser: '@babel/eslint-parser',
  globals: {
    MDC: 'writeable',
    hljs: 'readonly'
  },
  ignorePatterns: [
    'modules/@corllete/apos-ds-page-type/assets/js/lib',
    'modules/@corllete/aspo-ds-page-type/assets/css/highlight',
    'ui/'
  ]
};
