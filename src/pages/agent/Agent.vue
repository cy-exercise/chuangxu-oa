<template>
  <div class="wrapper">
    <Header title="个人中心" to="/agent"></Header>
    <div class="box" style="">
      <div class="people">
        <img class="avatar" src="/static/images/avatar.png" alt="">
        <div class="nickname">
          微信昵称
        </div>
      </div>
    </div>
    <div class="item-title-wrapper border-bottom">
      <div class="item-title ">
        我的项目
      </div>
    </div>
    <div class="quot-wrapper">
      <div class="quot-item" @click="handleRoute('/agent/quot/wait')">
        <img src="/static/images/wait.png" alt="">
        <div class="status">待报价</div>
      </div>
      <div class="quot-item" @click="handleRoute('/agent/quot/doing')">
        <img src="/static/images/doing.png" alt="">
        <div class="status">进行中</div>
      </div>
      <div class="quot-item" @click="handleRoute('/agent/quot/done')">
        <img src="/static/images/completed.png" alt="">
        <div class="status">完成</div>
      </div>
    </div>

    <div class="item-box">
      <div class="item-wrapper">

        <div class="item" @click="handleRoute('/agent/info')">
          <img class="" src="/static/images/agent.png" alt="">
          <div class="item-right border-bottom">
            <span>我的代理信息</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute('/agent/earnings')">
          <img class="" src="/static/images/earnings.png" alt="">
          <div class="item-right border-bottom">
            <span>我的收益</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute('/agent/quot_setting')">
          <img class="" src="/static/images/price_setting.png" alt="">
          <div class="item-right border-bottom">
            <span>报价设置</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
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
        selected: true
      }
    },
    methods: {
      handleRoute(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }
  .header {
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

  .item-title {
    font-size: .24rem;
    font-weight: 500;
    color: #B5B5B5;

  }
  .item-title-wrapper {
    padding-left: .32rem;
    height: .76rem;
    line-height: .76rem;
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
    background: #F8F8F8;
    text-align: center;
    height: 5.88rem;
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
    padding-left: .2rem;
    padding-right: .2rem;
    text-align: left;
  }

  .item img {
    height: .35rem;
    width: .44rem;
  }

  .item-right {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: .2rem;
    width: 5.5rem;
  }
  .item-right .icon {
    position: absolute;
    right: .28rem;
    top: .4rem;
  }
  .quot-wrapper {
    display: flex;
    text-align: center;
    height: 1.4rem;
    align-items:center;
  }
  .quot-item {
    justify-content: center;
    flex: 1;
  }
  .quot-item img {
    height: .44rem;
    width: .44rem;
  }
  .status {
    height: .33rem;
    margin-top: .1rem;
    font-size: .24rem;
    color: #515151;
    font-weight: 400;
  }
</style>
