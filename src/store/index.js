import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// https://vuex.vuejs.org/zh/api/#state
export const store = new Vuex.Store({
  devtools: process.env.VUE_APP_ENV === 'dev',
  strict: process.env.VUE_APP_ENV === 'dev',
  getters,
  
  /* module 应该启用命名空间，即 namespaced: true */
  modules
})

export default store
