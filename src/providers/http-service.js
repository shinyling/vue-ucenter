import axios from 'axios'
import router from '../router'
import store from '../store/store'
import { Loading, Message } from 'element-ui'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

var loadingInstance
axios.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  if (store.state.access_token) {
    config.headers.access_token = store.state.access_token
  }
  loadingInstance = Loading.service({fullscreen: true})
  return config
}, error => {
  loadingInstance.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    loadingInstance.close()
    var result = response.data
    if (result.code === 200) {
      Message.success('请求成功')
      return result
    } else {
      Message.error(result.msg)
    }
  }, error => {
    switch (error.response.status) {
      case 401: {
        store.commit('logout')
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break
      }
      default: {
        loadingInstance.close()
        Message.error({
          message: '加载失败'
        })
      }
    }
    return Promise.reject(error)
  }
)

export const POST = (url, params) => {
  return axios.post(`${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${url}`, {params: params}).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${url}`, {params: params}).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${url}`, params).then(res => res.data)
}

export default axios
