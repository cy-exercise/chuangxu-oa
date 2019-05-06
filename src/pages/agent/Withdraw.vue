<template>
  <div class="wrapper">
    <SelectItem :cards="card" v-show="showSelect" :is_show="showSelect" v-on:addSelectEvent="addSelect" v-on:handleCloseEvent = "handleColse"></SelectItem>
    <Header :title="title" to="/"></Header>
    <div class="container">
      <div class="withdraw-title border-bottom" @click="handleSelect">
        <!--<div class="wx" v-show="!show_card">-->
          <!--<div class="title-left">-->
            <!--<div class="title-left-item">-->
              <!--<span>提现到</span>-->
              <!--<img src="/static/images/logo-wx.png" alt="">-->
              <!--<span class="logo-name">微信</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="description">一次性转账≤￥5000.00</div>-->
          <!--<img class="into-icon" src="/static/images/into_normal.png" alt="">-->
        <!--</div>-->
        <div class="card">
          <span class="input-title">提现到</span>
          <img class="card-icon" src="/static/images/bank_card.png" alt="">
          <span>银行卡 ({{card.account}})</span>
          <img class="into-icon" src="/static/images/into_normal.png" alt="">
        </div>
      </div>
      <div class="withdraw-input border-bottom">
        <div class="input-title">提现金额</div>
        <div class="imput-wrapper">
          <span>￥</span>
          <input type="text" placeholder="" ref="withdraw" v-model="total">
        </div>
      </div>
      <div class="withdraw-submit" :class="{submit: total}">
        <div class="submit-title">
          <span class="salary">工资余额￥{{balance}}</span>
          <span class="all" @click="handleAll">全部提现</span>
        </div>
        <div class="button" @click="handleSubmit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../common/Header"
  import SelectItem from '../common/SelectItem'
  export default {
    name: "Withdraw",
    components: {
      SelectItem,
      Header
    },
    data() {
      return {
        showSelect: false,
        title: '收益提现',
        show_card: false,
        card: {
          name: '',
          account: ''
        },
        total: '',
        balance: '',
        agent: {}
      }
    },
    methods: {
      handleSelect() {
        this.showSelect = true
      },
      addSelect(card) {
        if (card === 'wx') {
          this.show_card = false;
        } else {
          this.show_card = true;
          this.card = card
        }
        this.showSelect = false
      },
      handleColse() {
        this.showSelect = false;
      },
      handleSubmit() {
        if (!this.total) {
          return false;
        }
        let data = {
          amount: this.total
        };
        this.$ajax.post('/api/draw', data).then(res => {

          if (res.data.code === 200) {
            this.$router.push({
              path: '/agent/withdraw_info',
              query: {
                amount: this.total,
                bank: this.card.name,
                bank_card: this.card.account
              }
            })
          }
        }).catch(error => {

        })
      },
      handleAll() {
        this.total = this.balance
      },
      init() {
        this.balance = this.$route.query.balance
        this.agent = JSON.parse(localStorage.getItem('agent'))
        this.card.name = this.agent.bank
        this.card.account = this.agent.bank_card
      }
    },
    mounted() {
      console.log(localStorage.getItem('agent'))
      this.init()
      this.$refs.withdraw.focus()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .container {
    width: 6.86rem;
    /*height: 4.87rem;*/
    background: #ffffff;
    margin-left: .32rem;
    margin-top: .39rem;
    padding-left: .4rem;
    padding-right: .4rem;
    box-sizing: border-box;
  }
  .withdraw-title {
    height: 1.3rem;
    position: relative;
  }
  .title-left {
    width: 3.88rem;
    text-align: left;
    margin-bottom: .08rem;
  }
  .title-left-item {
    padding-top: .26rem;
    height: .44rem;
    line-height: .44rem;
  }
  .title-left-item span {
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 500;
  }
  .title-left-item img {
    height: .44rem;
    width: .44rem;
    margin-left: .49rem;
  }
  .logo-name {
    font-size: .28rem;
    color: #515151;
    margin-left: .21rem;
  }
  .description {
    position: absolute;
    bottom: .25rem;
    left: 1.74rem;
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 400;
  }
  .into-icon {
    position: absolute;
    bottom: .46rem;
    right: 0;
    height: .36rem;
    width: .36rem;
  }
  .withdraw-input {
    height: 1.66rem;
    text-align: left;
    margin-top: .32rem;
    position: relative;
  }
  .input-title {
    text-align: left;
    margin-top: .15rem;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .2rem;
  }
  .imput-wrapper {
    position: absolute;
    bottom: .16rem;
  }
  .imput-wrapper span {
    font-size: .5rem;
    font-weight: 500;
    display: inline-block;
    position: absolute;
    bottom: .1rem;
    height: .5rem;
    width: .5rem;
  }
  .imput-wrapper input {
    font-size: .5rem;
    font-weight: 500;
    margin-left: .5rem;
  }
  .withdraw-submit {
    height: 1.92rem;
  }
  .button {
    background:rgba(40,178,254,0.5);
    font-weight: 400;
    font-size: .28rem;
    color: #ffffff;
    width: 6.06rem;
    height: .76rem;
    line-height: .76rem;
    border-radius: .08rem;
    /*margin-top: .2rem;*/
    text-align: center;
  }
  .submit .button {
    background: #28B2FE;
  }
  .submit-title {
    height: .76rem;
    line-height: .76rem;
  }
  .salary {
    color: #B5B5B5;
    font-weight: 400;
    font-size: .2rem;
  }
  .submit-title .all {
    color: #28B2FE;
    font-weight: 400;
    font-size: .2rem;
  }
  .card-icon {
    height: .25rem;
    width: .32rem;
    display: inline-block;
    margin-left: .4rem;
    margin-right: .1rem;
  }
  .card {
    height: 1.3rem;
    line-height: 1.3rem;
  }
</style>
