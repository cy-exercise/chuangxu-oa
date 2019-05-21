import axios from 'axios'
import { MessageBox } from 'mint-ui';

const urlMap = {
  development: 'http://cy123.natapp1.cc/api/',
  production: 'https://www.chuangxu.cn/api/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 200

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {code, data} = res.data
      if (code === ERR_OK) {
        return data
      }
    }).catch((e) => {
      MessageBox.alert(e.response.data.message)
    })
  }
}
export function post(url) {
  return function(data = {}) {
    return axios.post(baseUrl + url, data).then((res) => {
      const {code, data} = res.data
      if (code === ERR_OK) {
        return data
      }
    }).catch((e) => {
      MessageBox.alert(e.response.data.message)
    })
  }
}

export function put(url) {
  return function(data = {}) {
    return axios.put(baseUrl + url, data).then((res) => {
      const {code, data} = res.data
      if (code === ERR_OK) {
        return data
      }
    }).catch((e) => {
      MessageBox.alert(e.response.data.message)
    })
  }
}
