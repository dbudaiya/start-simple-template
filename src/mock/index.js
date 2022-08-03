/* http://mockjs.com/examples.html */

import createMock from './createMock'
import * as news from './module/news'
const myMock = createMock(process.env.VUE_APP_BASEURL_API)

/* 统一在这里注册 */
myMock('reg:/news/getList', news.getList)
myMock('reg:/news/getNews', news.getNews)
myMock('reg:/news/getDetails', news.getDetails)
