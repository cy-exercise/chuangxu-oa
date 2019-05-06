<template>
    <div class="wrapper">
      <Header :title="title" to="/" is_white="true"></Header>
      <div class="bill-wrapper">
        <div class="bill" @click="handleRoute('/agent/bill')">账单</div>
      </div>
      <img class="wallet" src="/static/images/wallet@2x.png" alt="">
      <div class="total">￥{{balance}}</div>
      <div class="total-title">我的收益</div>
      <div class="total-content">您可以随时发起提现，平台会在星期五为您转账</div>

      <div class="submit-button" @click="handleWithdraw" :class="{'submit-gray': gray}">提现</div>
    </div>
</template>

<script>
  import Header from "../common/Header"
  export default {
    name: "Earnings",
    components: {
      Header
    },
    data() {
      return {
        title: '我的收益',
        balance: '',
        gray: false
      }
    },
    methods: {
      handleRoute(url) {
        this.$router.push(url)
      },
      handleWithdraw() {
        if (this.balance <= 0) {
          return false;
        }
        this.$router.push({
          path: '/agent/withdraw',
          query: {
            balance: this.balance
          }
        })
      },
      getAccount() {
        this.$ajax.get(`/api/user/${this.$cookies.get('user_id')}/account`).then(res => {
          this.balance = res.data.data.balance
          if(this.balance <= 0) {
            this.gray = true
          }
        }).catch(function (error) {

        })
      }
    },
    created() {
      this.getAccount()
    }
  }
</script>

<style scoped>

  .wrapper {
    text-align: center;
  }
  .bill-wrapper {
    margin-top: .47rem;
    padding-left: 5.74rem;
    padding-right: .32rem;
  }
  .bill {
    width: 1.44rem;
    height: .56rem;
    line-height: .56rem;
    border-radius: .08rem;
    color: #515151;
    background: rgba(0,0,0,0.1);
    font-size: .28rem;
  }
  .wallet {
    margin-top: .28rem;
    height: .8rem;
    width: .8rem;
  }
  .total {
    font-size: .48rem;
    color: #28B2FE;
    margin-top: .4rem;
  }
  .total-title {
    color: #B5B5B5;
    font-size: .2rem;
    margin-top: .2rem;
  }
  .total-content {
    color: #515151;
    font-size: .28rem;
    margin-top: .4rem;
  }
  .submit-button {
    background: #28B2FE;
    width: 6.06rem;
    height: .96rem;
    line-height: .96rem;
    border-radius: .1rem;
    color: #ffffff;
    margin-top: 1.68rem;
    margin-left: .72rem;
  }
  .submit-gray {
    background:rgba(40,178,254, .5);
  }
</style>
