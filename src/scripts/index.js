/**
 * !!!慎用全局注册
 * 这里只适合注册，具体实现需拆分到单独的文件
 */

import Vue from 'vue'
import * as utils from '@/scripts/utils'
import * as constants from '@/scripts/constants'
import eventBus from '@/scripts/eventBus'
import directive from './directive'

/* 原型属性/方法 Vue.prototype (使用 $ 前缀) */
Vue.prototype.$env = Object.freeze(process.env)
Vue.prototype.$utils = Object.freeze({ ...utils })
Vue.prototype.$const = Object.freeze({ ...constants })
Vue.prototype.$isCancel = utils.isCancel
Vue.prototype.$eventBus = eventBus

/* 全局过滤器 Vue.filter */
Vue.filter('dateFormat', utils.dateFormat)

/* 全局指令 Vue.directive */
// Vue.directive('focus', utils.focus)
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})

/* 全局混入 Vue.mixin */

/* 小插件 Vue.use (重量级插件放主目录，如：vue-router、vuex、element-ui、i18n ...) */
