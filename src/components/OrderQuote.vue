<template>
    <div style="height: 100%">
      <mt-header fixed title="待报价">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <div class="wrapper">
        <ul class="quote-item">
          <li>
            <div class="order-title border-bottom">
              <span class="title">论文润色</span>
              <span class="price">￥3409.00</span>
            </div>
            <div class="people">
              <img src="/static/images/avatar.png" alt="">
              <span class="name">Kimberly Hernandez</span>
              <span class="goto-price">开始报价
                <img src="/static/images/jiantou.png" alt="">
              </span>
            </div>
          </li>
          <li>
            <div class="order-title border-bottom">
              <span class="title">论文润色</span>
              <span class="price">￥3409.00</span>
            </div>
            <div class="people">
              <img src="/static/images/avatar.png" alt="">
              <span class="name">Kimberly Hernandez</span>
              <span class="goto-price">开始报价
                <img src="/static/images/jiantou.png" alt="">
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "OrderQuote",
    data() {
      return {

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
  .wrapper {
    height: 100%;
    background: #F8F8F8;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: 1rem;
    text-align: center;
  }
  .quote-item {

  }
  .quote-item li {
    height: 1.73rem;
    margin-bottom: .2rem;
    background: #ffffff;
    border-radius: .1rem;
  }
  .order-title {
    height: .96rem;
    line-height: .96rem;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .order-title, .people {
    border-radius: .2rem;
  }
  .order-title .title {
    display: inline-block;
    float: left;
    font-size: .3rem;
    color: #515151;
  }
  .order-title .price {
    display: inline-block;
    float: right;
    color: #28B2FE;
    font-size: .36rem;
  }
  .people {
    height: .76rem;
    line-height: .76rem;
    padding-left: .2rem;
    padding-right: .2rem;
    text-align: left;
  }
  .people img {
    height: .4rem;
    width: .4rem;
  }
  .people .name {
    font-size: .24rem;
    color: #B5B5B5;
  }
  .people .goto-price {
    display: inline-block;
    float: right;
    font-size: .24rem;
    color: #28B2FE;
  }
  .goto-price img {
    margin-left: .23rem;
    width: .31rem;
    height: .26rem;
  }
</style>
