<template>
    <div>
      <div class="login">登录中...</div>
    </div>
</template>

<script>
  import {getAgent} from 'api'
  export default {
    name: "Login",
    methods: {
      login() {
        const access_token = this.$route.query.access_token;

        this.$cookies.set('access_token', access_token);
        this.$ajax.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
        this.getUserInfo();
      },
      getUserInfo() {
        let self = this;
        this.$ajax.post('/api/user/info').then(res => {
          this.$cookies.set('user_id', res.data.data.id);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          self.getAgents(res.data.data.id);
        })
      },
      // 如果能获取到代理信息就说明他是个代理
      getAgents() {
        let path = this.$route.query.target_url
        getAgent().then(res => {
          console.log(res)
          if (res.data.length > 0) {
            localStorage.setItem('agent', JSON.stringify(res.data[0]))
          } else {
            localStorage.setItem('agent', '')
          }
          if (!!path && path != '/login') {
            this.$router.push(path)
          }
          this.$router.push('/user')
        })
      }
    },
    created() {
      this.login()
    }
  }
</script>

<style scoped>
  .login {
    position: fixed;
    bottom: 0;
    top: .8rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: .36rem;
  }
</style>
