<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/earnings" ></Header>
      <div class="block-wrapper">
        <div class="item ">
          <div class="icon-wrapper">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="item-right border-bottom">
            <div class="title">提现</div>
            <div class="time">2019/4/12 08:24</div>
            <span class="total">￥2500.00</span>
          </div>

        </div>
        <div class="item ">
          <div class="icon-wrapper">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="item-right border-bottom">
            <div class="title">提现</div>
            <div class="time">2019/4/12 08:24</div>
            <span class="total">￥2500.00</span>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import Header from "../common/Header"
  export default {
    name: "Bill",
    components: {
      Header
    },
    data() {
      return {
        title: '账单'
      }
    },
    methods: {
      test() {
        alert(11)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;

  }
  .block-wrapper {
    background: #ffffff;
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .item {
    height: 1.45rem;
    position: relative;
  }
  .icon-wrapper {
    /*height: 1rem;*/
    /*line-height: 1.45rem;*/
    /*margin-right: .29rem;*/
    display: inline-block;
    margin-bottom: .7rem;
  }
  .icon-wrapper img {
    height: .44rem;
    width: .4rem;
  }
  .item-right {
    height: 1.45rem;
    width: 6.13rem;
    margin-left: .2rem;
    display: inline-block;
  }
  .item-right .title {
    height: .42rem;
    line-height: .42rem;
    width: .6rem;
    margin-top: .4rem;
    margin-bottom: .1rem;

  }
  .time {
    height: .33rem;
    line-height: .33rem;
    width: 2.12rem;
    display: inline-block;
  }
  .total {
    display: inline-block;
    position: absolute;
    bottom: .29rem;
    height: .67rem;
    line-height: .67rem;
    right: 0;
    font-size: .48rem;
    font-weight: 500;
    color: #28B2FE;
    float: right;
  }
</style>
