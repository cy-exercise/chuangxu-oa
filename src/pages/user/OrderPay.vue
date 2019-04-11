<template>
  <div class="wrapper">
    <Header title="我的订单" to="/user/order/wait"></Header>
    <div class="order-item">
      <img src="/static/images/logo.png" alt="" class="logo">
      <div class="order-title">论文润色</div>
      <div class="price">￥3409.00</div>
      <div>
        <div class="left">
          <div class="index">23%</div>
          <div class="index-title">抄袭指数</div>
        </div>
        <div class="right">
          <div class="word-number">1673</div>
          <div class="word">字数</div>
        </div>
      </div>
    </div>
    <div style="height: .8rem;"></div>
    <div class="button" @click="handlePay">立即支付</div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "OrderPay",
    components: {
      Header
    },
    methods: {
      handlePay() {
        if (true) {
          this.$router.push('/user/pay_success')
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .order-item {
    height: 5.69rem;
    position: relative;
    text-align: center;
    background: #ffffff;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .2rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
  }
  .left {
    position: absolute;
    left: .32rem;
    bottom: .4rem;
    height: 1.28rem;
    width: 3.23rem;
    background: #F8F8F8;
    border-radius: .04rem;
  }
  .index {
    font-size: .38rem;
    margin-top: .23rem;
  }
  .index-title {
    font-size: .2rem;
    color: #B5B5B5;
    margin-top: .2rem;
  }
  .right {
    position: absolute;
    height: 1.28rem;
    width: 3.23rem;
    right: .32rem;
    bottom: .4rem;
    background: #F8F8F8;
    border-radius: .04rem;
  }
  .word-number {
    font-size: .38rem;
    margin-top: .23rem;
  }
  .word {
    font-size: .2rem;
    color: #B5B5B5;
    margin-top: .2rem;
  }
  .logo {
    width:60px;
    height:60px;
    margin-top: .6rem;
  }
  .button {
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    color: #ffffff;
    background: #28B2FE;
    margin: 0 .32rem;
    border-radius: .1rem;
    font-weight: 500;
    font-size: .3rem;
  }
</style>
