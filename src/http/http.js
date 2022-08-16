import _ from 'lodash'
import createAxios from './createAxios'
import config from './config'

// 请求拦截
const requestHandle = config => {
  // do something before request is sent

  // if (store.getters.token) {
  //     config.headers['X-Token'] = getToken()
  // }
  return config
}

// 请求失败拦截
const requestErrHandle = err => {
  // do something with request error
  // console.log(err) // for debug
  return Promise.reject(err)
}

// 响应成功拦截
const responseHandle = res => {
  const { code, msg } = res.data || {}
  // 200 类成功
  if (
    code === '2000' || // TODO: 结合具体项目
    /^(arraybuffer|blob|stream)$/.test(_.get(res.request, 'responseType'))
  ) {
    return res
  }
  // 200 类失败
  else {
    let message = `${msg || '系统错误'}`
    if (code) {
      message = `${code} :: ${message}`
    }
    if (!res.config.exNoErrorMassage) {
      window.console.error(message) // TODO: 使用其它组件弹出消息
    }
    const err = new Error(message)
    err['exRes'] = res
    throw err
  }
}

/* 响应失败拦截 */
const responseErrHandle = err => {
  // 非 200 类失败 (有响应 & 响应体解析后是 json 对象)
  if (err.response && _.isPlainObject(err.response.data)) {
    if (!_.get(err.config, 'exNoErrorMassage')) {
      const code = _.get(err.response.data, 'code')
      let message = _.get(err.response.data, 'msg') || '系统错误'
      if (code) {
        message = `${code} :: ${message}`
      }
      window.console.error(message) // TODO: 使用其它组件弹出消息
    }
  }
  throw err
}

export const http = createAxios(config, instance => {
  instance.interceptors.request.use(requestHandle, requestErrHandle)
  instance.interceptors.response.use(responseHandle, responseErrHandle)
})

export default http
