<template>
  <div>
    <div>ComponentExamples</div>
    <div>过滤器: {{ users | capitalize }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ComponentExamples",
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style lang="less" scoped>
div {
  background-color: greenyellow;
}
</style>
