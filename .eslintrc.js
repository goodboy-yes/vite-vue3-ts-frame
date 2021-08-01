module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended', // 添加 prettier 插件,ESLint 就会按照 Prettier 的配置规则来格式化代码,Prettier 配置规则 > ESLint 配置规则。
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off', // 解决.vue文件中'The template root requires exactly one element.'eslint报错
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // 解决'×××'should be listed in the project's dependencies, not devDependencies.eslint报错
    // 'import/no-absolute-path': 'off',
    'import/no-unresolved': 'off', // 解决Unable to resolve path to module ××× 的eslint报错
    // 解决Missing file extension for ts 的报错
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    // 解决Missing file extension for ts 的报错
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
      }
    }
  }
}
