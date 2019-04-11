<template>
  <div>
    <Header :title="title" to="/"></Header>
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
    <!-- 打电话 -->
    <div class="call-container">
      <img src="/static/images/avatar.png" alt="">
      <div class="call-info-wrapper">
        <div class="name">Kimberly Hernandez</div>
        <div class="phone">电话：{{phone}}</div>
      </div>
      <div class="call-button" @click="callPhone(phone)">打电话给他</div>
    </div>

    <!--我的报价-->
    <div class="my-quote">
      <div class="quote-title border-bottom">我的报价</div>
      <input class="quote-input" @click="handleClick()" type="text" placeholder="点击输入价格" v-model="price_str">
    </div>

    <div class="submit-box">
      <div class="submit-button" v-bind:class="{active: isActive}" @click="do_quote">立即报价</div>
    </div>

  </div>

</template>

<script>
  import { MessageBox } from 'mint-ui';
  import Header from "../common/Header"
  export default {
    name: "Order",
    components: {
      Header
    },
    data() {
      return {
        selected: true,
        price: '',
        price_str: '',
        isActive: false,
        phone: '13423453431',
        redirect: '/agent/quote_success',
        title: '订单报价'
      }
    },
    methods: {
      handleClick() {
        let _this = this;
        MessageBox.prompt('请输入金额', '我的报价').then(({ value, action }) => {
          _this.price_str = '￥' + value + '.00';
          _this.price = value
          _this.isActive = true
        });
      },

      callPhone(phone) {
        window.location.href = 'tel://' + phone
      },

      // 提交报价
      do_quote() {
        if (!this.isActive) return false;
        let post = {
          price: this.price
        }
        // this.$ajax.post('https://api.github.com/users', post).then(function (response) {
        //   console.log(response)
        // })
        if (true) {
          this.$router.push(this.redirect)
        }
      }
    }
  }
</script>

<style scoped>
  .order-item {
    height: 5.69rem;
    position: relative;
    text-align: center;
    margin-top: 1.2rem;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .2rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
    /*margin-bottom: .33rem;*/
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
  .call-container {
    position: relative;
    height: 1rem;
    border-bottom: .2rem solid rgba(248,248,248,1);
    border-top: .2rem solid rgba(248,248,248,1);
    padding-top: .4rem;
    padding-bottom: .4rem;
    padding-left: .32rem;
    padding-right: .32rem;
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
  .my-quote {
    height: 2.25rem;
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .quote-title {
    height: .76rem;
    line-height: .76rem;
    font-size: .2rem;
    text-align: left;
    color: #B5B5B5;
  }
  .quote-input {
    height: .96rem;
    margin-top: .2rem;
    width: 100%;
    background: rgba(248,248,248,1);
    color: #333333;
    font-size: .34rem;
    text-align: center;
    font-family:Arial;
  }
  .submit-box {
    padding-top: .2rem;
    height: 1.92rem;
    background: rgba(248,248,248,1);
  }
  .submit-button {
    /*margin-left: .32rem;*/
    /*margin-top: .2rem;*/
    margin: 0 .3rem;
    height: .96rem;
    line-height: .96rem;
    border-radius: .1rem;
    width: auto;
    background: rgba(40,178,254,0.5);
    color: #FFFFFF;
    text-align: center;
  }
  .active {
    background: #28B2FE;
  }

  input::-ms-input-placeholder{
    text-align: center;
  }
  input::-webkit-input-placeholder{
    text-align: center;
  }

</style>
