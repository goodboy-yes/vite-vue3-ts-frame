module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件,ESLint 就会按照 Prettier 的配置规则来格式化代码,Prettier 配置规则 > ESLint 配置规则。
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off' // 解决.vue文件中'The template root requires exactly one element.'eslint报错
  }
}
