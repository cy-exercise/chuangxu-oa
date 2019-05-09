<template>
  <div class="wrapper">
    <Header :title="title" to="/" is_white="true"></Header>
    <div class="container">
      <div class="item">
        <div class="item-title-wrapper border-bottom">
          <div class="item-title">
            我的代理码
            <a :href="agent.qrcode_uri">
              <span class="save-button">保存二维码</span>
            </a>
          </div>
        </div>
        <div class="qr-code">
          <img :src="agent.qrcode_uri" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../common/Header"
  export default {
    name: "Info",
    components: {
      Header: Header
    },
    data() {
      return {
        qr_code: '',
        title: '我的代理信息',
        agent: {},
      }
    },
    methods: {
      init() {
        this.agent = JSON.parse(localStorage.getItem('agent'))
        // console.log(this.agent)
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
  .container {
    height: 100%;
    background: #F8F8F8;
    padding-left: .34rem;
    padding-right: .34rem;
    padding-top: .2rem;
  }
  .item {
    width: 6.86rem;
    height: 7.42rem;
    background: #ffffff;
    border-radius: .1rem;
  }
  .item-title {
    padding-left: .4rem;
    padding-right: .4rem;
  }
  .item-title-wrapper {
    height: .96rem;
    line-height: .96rem;
    color: #515151;
    font-size: .28rem;
    font-weight: 500;
  }
  .save-button {
    color: #448EF6;
    font-weight: 400;
    font-size: .28rem;
    float: right;
    display: inline-block;
  }
  .qr-code {
    text-align: center;
    height: 6.44rem;
    line-height: 6.44rem;
  }
  .qr-code img {
    height: 5.66rem;
    width: 5.66rem;
  }
</style>
