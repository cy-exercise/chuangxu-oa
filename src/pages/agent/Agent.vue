<template>
  <div class="wrapper">
    <Header title="个人中心" to="/agent"></Header>
    <div class="block">
      <div class="box" style="">
        <div class="people">
          <img class="avatar" :src="user.avatar.uri" alt="">
          <div class="nickname">
            {{user.name}}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="item-title-wrapper border-bottom">
          <div class="item-title ">
            我的项目
          </div>
        </div>
        <div class="quot-wrapper">
          <div class="quot-item" @click="handleRoute('/agent/quot/wait')">
            <div class="icon-wrapper">
              <div class="icon-wait">
                <img src="/static/images/wait.png" alt="">
              </div>
            </div>
            <div class="status">待报价</div>
          </div>
          <div class="quot-item" @click="handleRoute('/agent/quot/doing')">
            <div class="icon-wrapper">
              <img src="/static/images/doing.png" alt="">
            </div>
            <div class="status">进行中</div>
          </div>
          <div class="quot-item" @click="handleRoute('/agent/quot/done')">
            <div class="icon-wrapper">
              <img src="/static/images/completed.png" alt="">
            </div>
            <div class="status">完成</div>
          </div>
        </div>
      </div>
      <div class="item-box">
        <div class="item-wrapper">
          <div class="item" @click="handleRoute('/agent/info')">
            <img class="item-img" src="/static/images/agent.png" alt="">
            <div class="item-right border-bottom">
              <span>我的代理信息</span>
              <img class="icon" src="/static/images/into_normal.png" alt="">
            </div>
          </div>
          <div class="item" @click="handleRoute('/agent/earnings')">
            <img class="item-img" src="/static/images/earnings.png" alt="">
            <div class="item-right border-bottom">
              <span>我的收益</span>
              <img class="icon" src="/static/images/into_normal.png" alt="">
            </div>
          </div>
          <div class="item" @click="handleRoute('/agent/quot_setting')">
            <img class="item-img" src="/static/images/price_setting.png" alt="">
            <div class="item-right">
              <span>报价设置</span>
              <img class="icon" src="/static/images/into_normal.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "Agent",
    components: {
      Header: Header
    },
    data() {
      return {
        selected: true,
        user: {
          name: '',
          avatar: {
            url: ''
          }
        }
      }
    },
    methods: {
      handleRoute(url) {
        this.$router.push(url)
      },
      init() {
        this.user = JSON.parse(localStorage.getItem('user'))
      }
    },
    created() {
      //this.init()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

  .box {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }
  .block {
    position: fixed;
    top: .8rem;
    bottom: 0;
    /*background: #F8F8F8;*/
    /*left: 0;*/
    /*right: 0;*/
    /*overflow: scroll;*/
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
  .container {
    /*height: 8.43rem;*/
    background: #F8F8F8;
    /*position: fixed;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
  }
  .item-title {
    font-size: .24rem;
    font-weight: 500;
    color: #B5B5B5;

  }
  .item-title-wrapper {
    padding-left: .32rem;
    height: .76rem;
    line-height: .76rem;
    background: #ffffff;
  }

  .mint-tabbar a {
    color: #515151;
    font-size: .24rem;
  }

  .item-box {
    /*height: 5.76rem;*/
    padding-top: .4rem;
    padding-left: .32rem;
    padding-right: .32rem;
    text-align: center;
    height: 100%;
    background: #F8F8F8;
  }

  .item-wrapper {
    height: 3.38rem;
    width: 6.86rem;
    margin: 0 auto;
    background: #ffffff;
  }

  .item {
    position: relative;
    height: 1.13rem;
    line-height: 1.13rem;
    text-align: left;
  }
  .icon-wrapper {
    /*margin-right: .2rem;*/
  }
  .icon-wait {
    position: relative;
    width: .44rem;
    height: .44rem;
    margin: 0 auto;
  }
  /*.icon-wait::before {*/
    /*content: "";*/
    /*width: .14rem;*/
    /*height: .14rem;*/
    /*border-radius: .07rem;*/
    /*border: .02rem solid #ffffff;*/
    /*position: absolute;*/
    /*top: -.06rem;*/
    /*right: -.04rem;*/
    /*background: #FF5151;*/
    /*box-sizing: border-box;*/
  /*}*/
  .item .item-img {
    max-height: .44rem;
    max-width: .44rem;
    float: left;
    margin-top: .34rem;
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
  .quot-wrapper {
    display: flex;
    text-align: center;
    height: 1.4rem;
    align-items:center;
    background: #ffffff;
  }
  .quot-item {
    /*justify-content: center;*/
    flex: 1;
    /*display: flex;*/
  }
  .quot-item img {
    max-height: .44rem;
    max-width: .44rem;
  }
  .status {
    height: .33rem;
    line-height: .33rem;
    margin-top: .1rem;
    font-size: .24rem;
    color: #515151;
    font-weight: 400;
  }
</style>
