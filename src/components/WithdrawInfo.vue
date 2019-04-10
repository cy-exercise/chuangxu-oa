<template>
  <div>
    <div class="title">收益提现</div>
    <div class="message-wrapper">
      <div class="message">
        <div class="circle">
          <img src="/static/images/circle_green.png" alt="">
        </div>
        <span class="time">发起提现申请</span>
        <div class="line-border">
        </div>
      </div>
    </div>
    <div class="message-wrapper">
      <div class="message">
        <div class="circle">
          <img src="/static/images/time.png" alt="">
        </div>
        <span class="time">后台正在处理中</span>
        <div class="line-border">
        </div>
      </div>
    </div>
    <div class="message-wrapper">
      <div class="message">
        <div class="circle">
          <img src="/static/images/circle_gray.png" alt="">
        </div>
        <span class="time">每周星期五我们将统一发帐</span>
        <div class="">
        </div>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="total-money border-top">提现金额</div>
      <div class="bank-account">到银行账户
        <span>XX银行（567345345434****2345）</span>
      </div>
    </div>
    <div class="button">完成</div>
  </div>
</template>

<script>
  export default {
    name: "WithdrawInfo"
  }
</script>

<style scoped>
  .title {
    height: .5rem;
    line-height: .5rem;
    color: #515151;
    font-size: .36rem;
    font-weight: 500;
    text-align: center;
    /*margin-top: .22rem;*/
    margin-bottom: 1.13rem;
  }

  .message-wrapper {
    padding-left: 1.8rem;
  }

  .message {
    height: 1.16rem;
  }

  .circle {
    width: .39rem;
    height: .39rem;
    float: left;
    margin-right: .2rem;
  }

  .circle img {
    width: .39rem;
    height: .39rem;

  }

  .line-border {
    display: block;
    height: .88rem;
    margin-left: .18rem;
    width: 100%;
    border-left: .02rem dashed #64AA62;
  }
  .info-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .button {
    width: 4rem;
    height: .76rem;
    line-height: .76rem;
    color: #28B2FE;
    position: fixed;
    bottom: 1rem;
    left: 1.75rem;
    border-radius: .1rem;
    border: .02rem solid #28B2FE;
    text-align: center;
  }
</style>
