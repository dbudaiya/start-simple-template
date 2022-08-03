<template>
  <div class="div">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'PrivateComponents',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped lang="less">
div {
  h1 {
    color: red;
    font-size: 20px;
  }
}
</style>
