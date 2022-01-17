module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    semi: ['error', 'always'],
    'no-undef': [0, 'always'],
    'no-unused-vars': 'error',
    //'no-console': 'error',
    'func-call-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'no-empty': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'comma-spacing': ['error', {before: false, after: true}],
    'key-spacing': ['error', {beforeColon: false}],
    'max-len': ['error', {code: 150}],
    'no-trailing-spaces': ['error', {skipBlankLines: true}],
    'no-tabs': ['error', {allowIndentationTabs: true}],
  },
};
