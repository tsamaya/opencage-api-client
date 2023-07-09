module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'airbnb-base',
    // 'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
};
