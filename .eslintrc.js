module.exports = {
  root: true,
  extends: ['@acme/eslint-config-custom/base'],
  rules: {
    // Remove this once all the require is migrated
    '@typescript-eslint/no-var-requires': 'off',
  }
}
