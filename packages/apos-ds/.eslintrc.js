module.exports = {
  extends: [
    'apostrophe'
  ],
  env: {
    commonjs: true,
    node: true,
    mocha: true
  },
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
