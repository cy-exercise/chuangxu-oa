<template>
    <div style="">
      <div>
        <mt-header fixed title="个人中心">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="box" style="margin-top: .8rem">
        <div class="people">
          <img class="avatar" src="http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png" alt="">
          <div class="nickname">
            微信昵称
          </div>

        </div>
      </div>
      <div class="item-title">
        我的项目
      </div>
      <hr>
      <div class="item-container">
        <mt-tabbar>
        <mt-tab-item id="外卖">
          <img slot="icon" src="/static/images/wait.png">
          待报价
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="/static/images/doing.png">
          进行中
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="/static/images/completed.png">
          完成
        </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="item-box">
        <div class="item-wrapper">
         <div class="item">
           <img class="" src="/static/images/agent.png" alt="">
           <div class="item-right border-bottom">
             <span>我的代理信息</span>
             <img class="icon" src="/static/images/into_normal.png" alt="">
           </div>
         </div>
          <div class="item">
            <img class="" src="/static/images/earnings.png" alt="">
            <div class="item-right border-bottom">
              <span>我的收益</span>
              <img class="icon" src="/static/images/into_normal.png" alt="">
            </div>
          </div>
          <div class="item">
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
    export default {
        name: "People",
        data() {
          return {
            selected: true
          }
        }
    }
</script>

<style scoped>
  .mint-header {
    background: #EDEDED;
    color: #515151;
    font-size: .36rem;
  }
  >>> .mintui {
    font-size: .4rem;
  }

  .box{width:100%;margin:auto;overflow:hidden;}
  .people{position: relative;width:100%;height: 4.13rem;text-align:center;}
  .people:after {
    width: 120%;
    height: 4.13rem;
    position: absolute;
    left: -10%;top:0;
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
    margin-left: .32rem;
    height: .33rem;
    margin-top: .22rem;
    margin-bottom: .2rem;
  }
  .item-container {
    height: 1.4rem;
  }
  .mint-tabbar {
    background: #ffffff;
    bottom: unset;

  }
  .mint-tabbar a {
    color: #515151;
    font-size: .24rem;
  }
  >>> .mint-tab-item-icon {
    height: .48rem;
    width: .44rem;
  }
  .item-box {
    height: 5.76rem;
    padding-top: .4rem;
    padding-left: .32rem;
    padding-right: .32rem;
    /*padding-bottom: 1.98rem;*/
    background: #F8F8F8;
    text-align: center;
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
</style>
