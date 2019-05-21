<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    loginCheck() {
      // 判断当前页页是否为登录页
      if (this.$route.path === '/login') return false;
      let access_token = this.$cookies.get('access_token')
      let user = localStorage.getItem('user')
      let agent = localStorage.getItem('agent')

      // 判断是否需要重新登录
      console.log(!access_token)
      console.log(!user && !agent)
      if (!access_token || (!user && !agent)) {
        let path = this.$route.path
        window.location.href = window.baseURL + '/m/auth/weixin/login' + `?target_url=${path}` + `&source=13`
      }
    }
  },
  created() {
    this.loginCheck()
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
#app {
  height: 100%;
}
/* 移动端禁止上下滑动出现空白 */
body, html {
  width:100%;
  height:100%;
}
</style>
