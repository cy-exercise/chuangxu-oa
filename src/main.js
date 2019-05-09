// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/style/reset.css'
import './assets/style/border.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;

// 设置axios全局默认值
// axios.defaults.baseURL = 'http://web.chuangxu.com'
axios.defaults.baseURL = 'http://cy123.natapp1.cc'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('access_token')
axios.defaults.headers['Content-Type'] = 'application/json'

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    let path = window.location.href.split('#')[1]
    // window.location.href = 'https://nurse.chuangxu.com/m/auth/weixin/login' + '?target_url=' + path
    window.location.href = 'http://cy123.natapp1.cc/m/auth/weixin/login' + '?target_url=' + path
  }
  return Promise.reject(error);
});

Vue.prototype.$ajax= axios
Vue.use(MintUI)
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
