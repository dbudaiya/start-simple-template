// https://dbudaiya.github.io/dushenyan-share-record-blog.github.io/2022/07/31/eslint/
module.exports = {
  root: true,
  env: { 
    node: true,
    commonjs: true,
    es6: true,
   },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.VUE_APP_ENV === 'prod' ? 'error' : 'off',
    'no-debugger': 'warn',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true /* 解构剩余变量时不检查 */,
        varsIgnorePattern: '^h$', // 支持 JSX 的 h 变量
      },
    ],
    'no-var': 'warn',
    'prefer-const': ['warn', { destructuring: 'all' }],
    'no-empty': 'warn',
    'vue/order-in-components': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: { jest: true },
    },
  ],
}
