module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint', {
    rules: {
      "no-use-before-define": "off",
      'semi': 'error',
    }
  }),
  rules: {
    "no-use-before-define": "off",
    'semi': 'error',
    "react/jsx-key": "off",
  }
};
