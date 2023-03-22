module.exports = {
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: require('postcss-scss'),
      extends: ['stylelint-config-clean-order'],
      rules: {
        'at-rule-no-unknown': null,
        // ..
      },
    },
  ],
}
