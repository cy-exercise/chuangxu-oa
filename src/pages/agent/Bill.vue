<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/earnings" ></Header>
      <Empty v-show="empty_show" info="暂无零钱提现记录" icon="/static/images/bill_icon.png"></Empty>

      <ul class="bill-list" v-show="!empty_show">
        <li>
          <div class="bill-icon">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="bill-content border-bottom">
            <div class="block-title">
              <div>
                <div class="bill-title">提现</div>
                <div class="bill-date">2019/4/12 08:24</div>
              </div>
            </div>
            <div class="bill-money">￥2500.00</div>
          </div>
        </li>

        <li>
          <div class="bill-icon">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="bill-content border-bottom">
            <div class="block-title">
              <div class="bill-title">提现</div>
              <div class="bill-date">2019/4/12 08:24</div>
            </div>
            <div class="bill-money">￥2500.00</div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import Header from "../common/Header"
  import Empty from '../common/Empty'
  export default {
    name: "Bill",
    components: {
      Header,
      Empty
    },
    data() {
      return {
        title: '账单',
        empty_show: false
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

  .icon-wrapper img {
    height: .44rem;
    width: .4rem;
  }
  .bill-list li {
    height: 1.45rem;
    line-height: 1.45rem;
    background: #ffffff;
    padding-right: .32rem;
  }
  .bill-icon {
    float: left;
    width: 1.05rem;
    height: 1.45rem;
    line-height: 1.45rem;
    text-align: center;
  }

  .bill-icon img {
    height: .44rem;
    width: .4rem;
  }
  .bill-content {
    float: right;
    height: 1.45rem;
    width: 6.13rem;
  }
  .block-title {
    float: left;
    height: 1.45rem;
  }
  .bill-money {
    float: right;
    font-size: .48rem;
    font-weight: 500;
    color: #28B2FE;
  }
  .bill-title {
    height: .42rem;
    line-height: .42rem;
    margin-top: .4rem;
    margin-bottom: .1rem;
  }
  .bill-date {
    height: .33rem;
    line-height: .33rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 400;
  }
</style>
