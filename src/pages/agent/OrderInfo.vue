<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/quot/doing"></Header>
      <div class="order-item">
        <img src="/static/images/logo.png" alt="" class="logo">
        <div class="order-title">论文润色</div>
        <div class="price">￥3409.00</div>
      </div>
      <div class="step-wrapper">
        <div class="title">项目进度</div>
        <div class="message-wrapper">
        <div class="message">
          <div class="circle">
            <img src="/static/images/time.png" alt="">
          </div>
          <div class="step-time">2018/12/29</div>
          <span class="step-name">发起提现申请</span>
          <div class="line-border">
          </div>
        </div>
      </div>
        <div class="message-wrapper">
          <div class="message">
            <div class="circle">
              <img src="/static/images/circle_gray.png" alt="">
            </div>
            <div class="step-time">2018/12/29</div>
            <span class="step-name">发起提现申请</span>

          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="item-info-wrapper">
        <div class="item-info-title border-bottom">项目详情</div>
        <ul class="detail-block">
          <li>
            <span>抄袭指数：</span>
            <span>23%</span>
          </li>
          <li>
            <span>字 数：</span>
            <span>1673</span>
          </li>
          <li>
            <span>原 价：：</span>
            <span>￥4567.00</span>
          </li>
          <li>
            <span>抄袭指数：</span>
            <span>￥5895.00</span>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="contribute-wrapper">
        <div class="contribute-title border-bottom">项目投稿人</div>
        <div class="call-container">
          <img src="/static/images/avatar.png" alt="">
          <div class="call-info-wrapper">
            <div class="name">Kimberly Hernandez</div>
            <div class="phone">电话：{{phone}}</div>
          </div>
          <div class="call-button" @click="callPhone(phone)">打电话给他</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from "../common/Header"
  export default {
    name: "OrderInfo",
    components: {
      Header
    },
    data() {
      return {
        title: '项目详情',
        phone: '18725975901'
      }
    },
    methods: {
      callPhone(phone) {
        window.location.href = 'tel://' + phone
      },
    }
  }
</script>

<style scoped>
  .order-item {
    text-align: center;
    padding-top: .6rem;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .2rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
    height: .7rem;
    line-height: .7rem;
  }
  .logo {
    width:60px;
    height:60px;
  }
  .step-wrapper {
    padding-left: 1.64rem;
    margin-top: .8rem;
  }
  .title {
    color: #515151;
    font-weight: 400;
    font-size: .3rem;
    height: .42rem;
  }
  .line {
    height: .2rem;
    background: #F8F8F8;
  }
  .item-info-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .item-info-title {
    height: .75rem;
    line-height: .75rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .detail-block {
    margin-top: .39rem;
  }
  .detail-block li {
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .2rem;
  }
  .detail-block  li span {
    color: #515151;
    font-size: .3rem;
    font-weight: 400;
  }
  .contribute-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .contribute-title {
    height: .76rem;
    line-height: .76rem;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
  }

  .call-container {
    position: relative;
    height: 1rem;
    padding-top: .4rem;
    padding-bottom: .4rem;
  }

  .call-button {
    position: absolute;
    bottom: .4rem;
    right: .32rem;
    height: .56rem;
    width: 1.87rem;
    line-height: .56rem;
    background: #28B2FE;
    color: #ffffff;
    font-size: .28rem;
    border-radius: .04rem;
    text-align: center;
  }
  .call-container img {
    height: 1rem;
    width: 1rem;
    margin-right: .2rem;
  }
  .call-info-wrapper {
    display: inline-block;
    position: absolute;
    height: 1rem;
    bottom: .2rem;
  }
  .name {
    height: .5rem;
  }
  .call-button {
    position: absolute;
  }
  /* 项目进度 */
  .message-wrapper {
    padding-left: 1.5rem;
    position: relative;
  }

  .message {
    height: 1rem;

  }

  .circle {
    width: .39rem;
    height: .39rem;
    float: left;
    margin-right: .2rem;
  }

  .circle img {
    width: .39rem;
    height: .39rem;

  }

  .line-border {
    display: block;
    height: .7rem;
    margin-left: .18rem;
    width: 100%;
    border-left: .02rem dashed #64AA62;
  }
  .step-time {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
