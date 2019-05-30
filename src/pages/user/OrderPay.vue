<template>
  <div class="wrapper">
    <!--<Header title="我的订单" to="/user/order?status=2"></Header>-->
    <div class="order-item">
      <img src="@/assets/img/logo.png" alt="" class="logo">
      <div class="order-title">{{project.title}}</div>
      <div class="price">￥{{order.price}}</div>
      <div>
        <div class="left">
          <div class="index">{{review ? review.rate : ''}}</div>
          <div class="index-title">抄袭指数</div>
        </div>
        <div class="right">
          <div class="word-number">{{project.manuscripts && project.manuscripts[0] ? project.manuscripts[0].extra.word_count : ''}}</div>
          <div class="word">字数</div>
        </div>
      </div>
    </div>
    <div style="height: .8rem;"></div>
    <div class="button" @click="handlePay">立即支付</div>
  </div>
</template>

<script>
  // import Header from '../common/Header';
  import { MessageBox } from 'mint-ui';
  import wx from "weixin-js-sdk";
  import {getUserOrder, orderPay, getWxconfig, getProject} from 'api'
  export default {
    name: "OrderPay",
    data() {
      return {
        project: {},
        order_id: '',
        project_id: '',
        status: '',
        order: {},
        review: {},
      }
    },
    components: {
      // Header
    },
    methods: {
      handlePay() {
        let data = {
          pay_type: 21,
        }
        let _this = this
        orderPay(this.order_id, data).then(res => {
          this.wxPay(res.data)
        })
      },
      wxPay(pay) {
        let _this = this
        wx.chooseWXPay({
          timestamp: pay.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: pay.nonceStr, // 支付签名随机串，不长于 32 位
          package: pay.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: pay.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: pay.paySign, // 支付签名
          success: function (res) {
              // 支付成功后的回调函数
            console.log(res)
            _this.$router.push('/user/pay_success')
          },
          fail: function (res) {
            alert(JSON.stringify(res))
          }
        });
      },
      init() {
        this.project_id = this.$route.query.order_id
      },
      getOrder() {
        getProject(this.project_id).then(project => {
          this.order = project.order
          this.order_id = this.order.id
          this.project = project
          this.review = project.review
        })
      },
      initWxConfig() {
        let url = window.location.href.split('#')[0]
        getWxconfig({url: url}).then(res => {
          console.log(res)
          wx.config(res);

          //处理验证失败的信息
          wx.error(function (res) {
            console.log('验证失败返回的信息:', res);
          });
        })
      }
    },
    created() {
      this.init();
      this.initWxConfig()
      this.getOrder();
    },
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
    margin-top: .3rem;
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
