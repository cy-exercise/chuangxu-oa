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
// const baseURL = 'https://www.chuangxu.cn'
const baseURL = 'http://cy123.natapp1.cc'
window.baseURL = baseURL
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('access_token')
axios.defaults.headers['Content-Type'] = 'application/json'

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    let path = window.location.href.split('#')[1]
    window.location.href = baseURL + '/m/auth/weixin/login' + '?target_url=' + path + "&source=13"
  }
  return Promise.reject(error);
});

// 动态设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

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
