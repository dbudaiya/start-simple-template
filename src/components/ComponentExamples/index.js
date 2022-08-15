import ComponentExamples from "./index.vue";

ComponentExamples.install = function(Vue){
  Vue.component(ComponentExamples.name, ComponentExamples);
}

export default ComponentExamples;
