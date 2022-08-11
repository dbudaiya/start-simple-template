<script>
import PrivateComponent from './components/PrivateComponent.vue'
import { getNewsList, getNewsDetails, getNews } from '@/api/news'

export default {
  name: 'Home',
  components: { PrivateComponent },
  data() {
    return {
      newsList: null,
      newsDetails: null,
    }
  },
  created() {
    getNewsList({ keyword: 'xxx' }).then((res) => (this.newsList = res.exData))
    getNewsDetails('xxx').then((res) => (this.newsDetails = res.exData))
    getNews({ loading: 'xxx' }).then((res) => (this.newsDetails = res.exData))
  },
}
</script>

<template>
  <div class="box bg">
    <div class="res">
      <b>getNewsList：</b>
      {{ newsList }}
      <b>getNewsDetails：</b>
      {{ newsDetails }}
    </div>
    <!-- 在 template 中使用'@'别名 -->
    <img class="logo" src="@/assets/image/logo.png" />
    <PrivateComponent
      class="private_component"
      msg="PrivateComponent..."
    />
  </div>
</template>

<style lang="less" scoped>
.box {
  margin: 1em;
  padding: 1em;
  border: 2px dashed #ccc;
}

.res {
  b {
    display: block;
    margin: 1em 0 0.25em;

    &:first-child {
      margin-top: 0;
    }
  }
}

.private_component {
  margin-top: 3em;
}
</style>
