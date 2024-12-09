module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      'no-console': 'off', // Allow console.log for debugging
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _
    },
  };
  