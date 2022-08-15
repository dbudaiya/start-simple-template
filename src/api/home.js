import request from '@/http'

export function fetchSocial() {
  return request({
    url: '/social',
    method: 'get',
    params: {},
  })
}

export function fetchSiteInfo() {
  return request({
    url: '/site',
    method: 'get',
    params: {},
  })
}
