import Vue from 'vue'
import Vuex from 'vuex'
import root from './root'
Vue.use(Vuex)

const env = process.env.VUE_APP_ENV
const devtools = env === 'dev' || env === 'stage'
const strict = env === 'dev'

export const store = new Vuex.Store({
  devtools,
  strict,
  ...root,

  /* module 应该启用命名空间，即 namespaced: true */
  modules: {},
})

export default store
