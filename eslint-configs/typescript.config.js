const common = require('./common')
const domains = require('./domains.json')

module.exports = {
  files: [ './apps/**/*.ts', './libs/**/*.ts' ],
  extends: [
    'plugin:@angular-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:jasmine/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  rules: {
    '@nx/enforce-module-boundaries': [
      'error',
      {
        allowCircularSelfDependency: true,
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
          { sourceTag: '*', onlyDependOnLibsWithTags: [ '*' ] },
          {
            sourceTag: 'app:randomapp',
            onlyDependOnLibsWithTags: [ 'lib:randomlib' ],
          },
          {
            sourceTag: 'lib:randomlib',
            onlyDependOnLibsWithTags: [ 'lib:randomlib' ],
          },
          ...domains.map(domain => ({
            sourceTag: `scope:${domain}`,
            onlyDependOnLibsWithTags: [ `scope:${domain}` ],
          }))
        ]
      }
    ]
  },
  overrides: []
}