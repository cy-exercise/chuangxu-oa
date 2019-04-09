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
              <span>论文润色</span>
              <span>￥3409.00</span>
            </div>
            <div class="people">
              <img src="http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png" alt="">
              <span>Kimberly Hernandez</span>
              <span>开始报价</span>
              <span>→</span>
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
    background: #ffffff;
  }
  .order-title, .people {
    border-radius: .2rem;
  }
  .people img {
    height: .4rem;
    width: .4rem;
  }
</style>
