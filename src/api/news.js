import http from '@/http'

// 获取新闻列表
export const getNewsList = function (params) {
  params = {
    pageNum: 1,
    pageSize: 10,
    ...params,
  }
  return http.get('/news/getList', { params })
}

// 获取新闻详情
export const getNewsDetails = function (id) {
  return http.get(`/news/getDetails/${id}`)
}
