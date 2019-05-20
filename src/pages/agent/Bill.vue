<template>
    <div class="wrapper">
      <!--<Header :title="title" to="/agent/earnings" ></Header>-->
      <Empty v-show="empty_show" info="暂无零钱提现记录" icon="@/assets/img/bill_icon.png"></Empty>

      <ul class="bill-list" v-show="!empty_show">
        <li v-for="draw of draws">
          <div class="bill-icon">
            <img src="@/assets/img/wallet@2x.png" alt="">
          </div>
          <div class="bill-content border-bottom">
            <div class="block-title">
              <div>
                <div class="bill-title">提现</div>
                <div class="bill-date">{{draw.created_at}}</div>
              </div>
            </div>
            <div class="bill-money">
              <div>
                <div class="amount">￥{{draw.amount}}</div>
                <div class="status">提现申请已提交</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  // import Header from "../common/Header"
  import Empty from '../common/Empty'
  import {getDraws} from  "api"
  export default {
    name: "Bill",
    components: {
      // Header,
      Empty
    },
    data() {
      return {
        title: '账单',
        empty_show: false,
        draws: []
      }
    },
    methods: {
      // 获取提现列表
      _getDraws() {
        getDraws().then(draws => {
          if (draws.data) {
            this.draws = draws.data
          } else {
            this.empty_show = true
          }

        })
      }
    },
    created() {
      this._getDraws()
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
    height: 1.45rem;
    line-height: 1;
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
  .status {
    height: .33rem;
    line-height: .33rem;
    text-align: right;
    font-size: .2rem;
    color: #B5B5B5;
  }
  .amount {
    height: .42rem;
    font-size: .48rem;
    font-weight: 500;
    color: #28B2FE;
    margin-top: .4rem;
    margin-bottom: .1rem;
  }
</style>
