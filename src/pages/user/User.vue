<template>
  <div class="wrapper">
    <div class="box" style="">
      <div class="people">
        <img class="avatar" :src="user.avatar.uri" alt="">
        <div class="nickname">
          {{user.name}}
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="item-box">
      <div class="item-wrapper">
        <div class="item" @click="handleRoute(status.pending)">
          <div class="icon-wrapper">
            <img class="item-img" src="@/assets/img/dollar@2x.png" alt="">
          </div>
          <div class="item-right border-bottom">
            <span>待付款的项目</span>
            <img class="icon" src="@/assets/img/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute(status.doing)">
          <div class="icon-wrapper">
            <img class="item-img" src="@/assets/img/doing.png" alt="">
          </div>

          <div class="item-right border-bottom">
            <span>进行中的项目</span>
            <img class="icon" src="@/assets/img/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute(status.done)">
          <div class="icon-wrapper">
            <img class="item-img" src="@/assets/img/completed.png" alt="">
          </div>
          <div class="item-right border-bottom">
            <span>完成的项目</span>
            <img class="icon" src="@/assets/img/into_normal.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    components: {
    },
    data() {
      return {
        selected: true,
        order_url: '/user/order',
        user: {},
        status: {
          pending: 2, //待付款
          doing: 4, // 进行中
          done: 5 // 已完成
        }
      }
    },
    methods: {
      handleRoute(status) {
        this.$router.push(this.order_url + '?status=' + status)
      },
      init() {
        this.user = JSON.parse(localStorage.getItem('user'))
        if(!this.user) {
          window.location.href = window.baseURL + '/m/auth/weixin/login'
        }
        let agent = localStorage.getItem('agent')
        if (agent) {
          // this.$router.push('/agent')
        }
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .space {
    height: .8rem;
  }
  .box {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }

  .people {
    position: relative;
    width: 100%;
    height: 4.13rem;
    text-align: center;
    z-index: 1;
  }

  .people:after {
    width: 120%;
    height: 4.13rem;
    position: absolute;
    left: -10%;
    top: 0;
    z-index: -1;
    content: '';
    border-radius: 0 0 50% 50%;
    background: linear-gradient(top, #50B8F3, #448EF6);;
  }

  .people .avatar {
    height: 1.44rem;
    width: 1.44rem;
    border-radius: .72rem;
    margin-top: 1.35rem;
  }

  .nickname {
    color: #ffffff;
    margin-top: .12rem;
    font-size: .3rem;
  }
  .mint-tabbar a {
    color: #515151;
    font-size: .24rem;
  }

  .item-box {
    padding-left: .32rem;
    padding-right: .32rem;
    background: #F8F8F8;
    text-align: center;
  }

  .item-wrapper {
    height: 3.38rem;
    margin: 0 auto;
    background: #ffffff;
  }

  .item {
    position: relative;
    height: 1.13rem;
    line-height: 1.13rem;
    text-align: left;
  }

  .item .item-img {
    max-height: .44rem;
    max-width: .44rem;
    /*float: left;*/
    /*margin-top: .34rem;*/
    /*margin-left: .2rem;*/
  }
  .icon-wrapper {
    float: left;
    margin-left: .2rem;
  }

  .item-right {
    vertical-align: middle;
    height: 100%;
    width: 6.04rem;
    float: right;
  }
  .item-right .icon {
    height: .36rem;
    width: .36rem;
    position: absolute;
    right: .2rem;
    top: .4rem;
  }
</style>
