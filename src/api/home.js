import request from '@/http'

export function fetchSocial(params) {
  return request({
    url: '/social',
    method: 'get',
    params
  })
}

export function fetchSiteInfo(params) {
  return request({
    url: '/site',
    method: 'get',
    params
  })
}
