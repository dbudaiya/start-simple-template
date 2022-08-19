import Focus from './focus'

const install = function (Vue) {
  Vue.directive('focus', Focus)
}

if (window.Vue) {
  window.clipboard = Focus
  Vue.use(install); // eslint-disable-line
}

Focus.install = install
export default Focus;
