扩展: https://gitee.com/fengziy/Gblog

环境变量

```js
 编译时(node 端)可用的：process.env.*
 运行时(客户端)可用的：process.env.NODE_ENV、process.env.BASE_URL、process.env.VUE_APP_*

 BASE_URL 需要尾斜杠，接口前缀不需要尾斜杠
 BASE_URL 也可以生成为相对路径，详见：https://cli.vuejs.org/zh/config/publicpath

/**
 * 只能添加 NODE_ENV、BASE_URL、VUE_APP_*
 */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly VUE_APP_ENV: 'dev' | 'stage' | 'prod'

    readonly BASE_URL: '' | '/**/'
    readonly VUE_APP_BASEURL_API: '/**/*' | 'http*(s)://**/*'

    readonly VUE_APP_ENABLE_DOCS: 'true' | 'false'
    readonly VUE_APP_MOCK: 'true' | 'false'
  }
}
```
