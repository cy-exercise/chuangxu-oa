import { MessageBox } from 'mint-ui';

const urlMap = {
  development: 'http://cy123.natapp1.cc/api/',
  production: 'https://www.chuangxu.cn/api/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 200

export default {
  apiGet(url, params) {
    return axios.get(url, {params: params}).then(res => {
      const {code, data} = res.data
      if (code === ERR_OK) {
        return data
      }
    }).catch(error => {
      MessageBox.alert(e.response.data.message)
    })
  }
}
