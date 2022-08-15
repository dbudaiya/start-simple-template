<template>
  <div>ComponentExamples</div>
</template>

<script>
export default {
  name: "ComponentExamples",
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
div {
  background-color: greenyellow;
}
</style>
