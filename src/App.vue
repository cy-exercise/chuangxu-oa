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
      if (this.$route.path == '/login') return;
      if (!this.$cookies.get('access_token')) {
        window.location.href = 'http://cy123.natapp1.cc/m/auth/weixin/login'
        // window.location.href = 'https://nurse.chuangxu.cn/m/auth/weixin/login'
      }
    }
  },
  created() {
    //console.log(1234)
    this.loginCheck()
  },
  mounted() {
    // console.log(1234)
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
