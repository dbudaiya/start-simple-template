module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  /**
   * 项目优化 按需引入
   */
  plugins: [
    /**
     * @PC.element-ui
     * 链接: https://github.com/ElementUI/babel-plugin-component
     */
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk', // 单独引用了完整的主题包时，把该行替换为 style: false
      },
      'element-ui',
    ],

    /**
     * @H5.Vant
     * 链接: https://github.com/ElementUI/babel-plugin-component
     */
    [
      'component',
      {
        libraryName: 'vant',
        style: 'style/less.js',
      },
      'vant',
    ],

    /**
     * Lodash.js
     * 链接: https://github.com/lodash/babel-plugin-lodash
     */
    ['lodash'],
  ],
}
