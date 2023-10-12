module.exports = {
  root: true,

  extends: '@proreact/eslint-config-wicomico',

  env: {
    mocha: true,
  },

  rules: {
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
  },
}
