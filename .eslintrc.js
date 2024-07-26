const {
  typescriptConfig,
  templateConfig,
  javascriptConfig,
} = require('./eslint-configs')

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jasmine: true,
    node: true,
  },
  root: true,
    plugins: [
    '@angular-eslint/template',
    '@nx',
    '@typescript-eslint',
    'html',
    'import', 
    'jasmine',
    'unused-imports',
  ],
  overrides: [
    typescriptConfig,
    templateConfig,
    javascriptConfig,
  ],
}
