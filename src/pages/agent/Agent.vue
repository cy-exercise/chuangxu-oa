<template>
  <div class="wrapper">
    <!--<Header title="个人中心" to="/agent"></Header>-->
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
          <div class="quot-item" @click="handleRoute(status.wait, 'status')">
            <div class="icon-wrapper">
              <div class="icon-wait" :class="{'icon-wait-have': wait_have}">
                <img src="@/assets/img/wait.png" alt="">
              </div>
            </div>
            <div class="status">待报价</div>
          </div>
          <div class="quot-item" @click="handleRoute(status.doing, 'status')">
            <div class="icon-wrapper">
              <img src="@/assets/img/doing.png" alt="">
            </div>
            <div class="status">进行中</div>
          </div>
          <div class="quot-item" @click="handleRoute(status.done, 'status')">
            <div class="icon-wrapper">
              <img src="@/assets/img/completed.png" alt="">
            </div>
            <div class="status">完成</div>
          </div>
        </div>
      </div>
      <div class="item-box">
        <div class="item-wrapper">
          <div class="item" @click="handleRoute('/agent/info')">
            <img class="item-img" src="@/assets/img/agent.png" alt="">
            <div class="item-right border-bottom">
              <span>我的代理信息</span>
              <img class="icon" src="@/assets/img/into_normal.png" alt="">
            </div>
          </div>
          <div class="item" @click="handleRoute('/agent/earnings')">
            <img class="item-img" src="@/assets/img/earnings.png" alt="">
            <div class="item-right border-bottom">
              <span>我的收益</span>
              <img class="icon" src="@/assets/img/into_normal.png" alt="">
            </div>
          </div>
          <div class="item" @click="handleRoute('/agent/quot_setting')">
            <img class="item-img" src="@/assets/img/price_setting.png" alt="">
            <div class="item-right">
              <span>报价设置</span>
              <img class="icon" src="@/assets/img/into_normal.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAgentOrders} from 'api'
  import {getStore} from "../../config/Utils";

  export default {
    name: "Agent",
    components: {
    },
    data() {
      return {
        selected: true,
        user: {
          name: '',
          avatar: {
            url: ''
          }
        },
        status: {
          done: 0,
          doing: 4,
          wait: 11
        },
        wait_have: false,
        agent: {}
      }
    },
    methods: {
      handleRoute(status, type = '') {
        if (type === 'status') {
          this.$router.push('agent/quote' + `?status=${status}`)
        } else {
          this.$router.push(status);
        }

      },
      init() {
        this.user = JSON.parse(getStore('user'))
        this.agent = JSON.parse(getStore('agent'))
      },
      getProjects() {
        let params = {
          status: this.status.wait
        }
        getAgentOrders(this.agent.id, params).then(orders => {
          this.wait_have = orders.data.length
        })
      }
    },
    created() {
      this.init()
      this.getProjects()
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
    top: 0;
    bottom: 0;
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
    background: linear-gradient(top, #50B8F3, #448EF6);
    background: -webkit-gradient(linear, left top, left bottom, from(#50B8F3), to(#448EF6));
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
    background: #F8F8F8;
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
  .icon-wait-have::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border: 1px solid #ffffff;
    position: absolute;
    top: -.06rem;
    right: -.04rem;
    background: #FF5151;
    box-sizing: border-box;
  }
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
