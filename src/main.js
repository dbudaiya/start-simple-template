
import Vue from 'vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import App from './App.vue'

import './scripts/injects'
import './catchError'
import './process'
import './common-loader'

import './styles/index.less'

export default new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
