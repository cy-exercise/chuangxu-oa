// import axios from 'axios'
import { MessageBox } from 'mint-ui';

const urlMap = {
  development: 'http://chuangxu.natapp4.cc/api/',
  production: 'http://chuangxu.natapp4.cc/api/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 200

export function get(url, params = {}) {
  return axios.get(baseUrl + url, {
    params: params
  }).then((res) => {
    const {code, data} = res.data
    if (code === ERR_OK) {
      return data
    }
  }).catch((e) => {
    MessageBox.alert(e.response.data.message)
  })
}
export function post(url, data) {
  return axios.post(baseUrl + url, data).then((res) => {
    const {code, data} = res.data
    if (code === ERR_OK) {
      return data
    }
  }).catch((e) => {
    MessageBox.alert(e.response.data.message)
  })
}

export function put(url, data) {
  return axios.put(baseUrl + url, data).then((res) => {
    const {code, data} = res.data
    if (code === ERR_OK) {
      return data
    }
  }).catch((e) => {
    MessageBox.alert(e.response.data.message)
  })
}
