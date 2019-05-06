<template>
    <div></div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      login() {
        const access_token = this.$route.query.access_token;

        this.$cookies.set('access_token', access_token);
        this.$ajax.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
        this.getUserInfo();
        //this.$router.push('/salary')
      },
      getUserInfo(access_token) {
        let self = this;
        this.$ajax.post('/api/user/info').then(res => {
          this.$cookies.set('user_id', res.data.data.id);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          self.getAgents(res.data.data.id);
        })
      },
      // 如果能获取到代理信息就说明他是个代理
      getAgents() {
        this.$ajax.get('/api/agent').then(res => {
          if (res.data.data.data.length > 0) {
            localStorage.setItem('agent', JSON.stringify(res.data.data.data[0]))
            this.$router.push('/agent')
          } else {
            this.$router.push('/user')
          }
        })

      }
    },
    created() {
      this.login()
    }
  }
</script>

<style scoped>

</style>
