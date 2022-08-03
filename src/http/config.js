const config = {
  baseURL:
    process.env.VUE_APP_ENV === 'stage'
      ? localStorage.baseurl_api || process.env.VUE_APP_BASEURL_API
      // stage 环境客户端侧允许自定义接口前缀，方便调试（特别是后端开发）
      : process.env.VUE_APP_BASEURL_API,
  timeout: 10000,
}
export default config
