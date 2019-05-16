<template>
    <div class="wrapper">
      <!--<Header :title="title" to="/agent/quot/doing"></Header>-->
      <div class="order-item">
        <img src="/static/images/logo.png" alt="" class="logo">
        <div class="order-title">{{project.title}}</div>
        <div class="price">￥{{order.price}}</div>
      </div>
      <div class="step-wrapper">
        <Step :nodes="project.nodes"></Step>
      </div>
      <div class="line"></div>
      <div class="item-info-wrapper">
        <div class="item-info-title border-bottom">项目详情</div>
        <ul class="detail-block" v-if="review">
          <li>
            <span>抄袭指数：</span>
            <span>{{review.rate}}</span>
          </li>
          <li>
            <span>字 数：</span>
            <span>{{review.word_count}}</span>
          </li>
          <li>
            <span>原 价：</span>
            <span>￥{{order.price}}</span>
          </li>
          <li>
            <span>我的报价</span>
            <span>￥{{order.quoted_price}}</span>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="contribute-wrapper">
        <div class="contribute-title border-bottom">项目投稿人</div>
        <div class="call-container">
          <img src="/static/images/avatar.png" alt="">
          <div class="call-info-wrapper">
            <div class="name">{{user.name}}</div>
            <div class="phone">电话：{{user.phone}}</div>
          </div>
          <div class="call-button" @click="callPhone(user.phone)">打电话给他</div>
        </div>
      </div>
    </div>
</template>

<script>
  // import Header from "../common/Header"
  import Step from "../common/Step"
  import {formatDate} from "@/assets/js/date";

  export default {
    name: "OrderInfo",
    components: {
      // Header,
      Step
    },
    data() {
      return {
        title: '项目详情',
        project_id: '',
        project: {},
        order: {},
        review: {},
        user: {}
      }
    },
    methods: {
      callPhone(phone) {
        window.location.href = 'tel://' + phone
      },
      getProject() {
        let project_id = this.$route.query.project_id
        this.$ajax.get('/api/project/' + project_id).then(res => {
          this.project = res.data.data
          this.order = this.project.order
          this.review = this.project.review
          this.user = this.project.user
        }).catch(error => {

        })
      }
    },
    created() {
      this.getProject()
    }
  }
</script>

<style scoped>
  .order-item {
    text-align: center;
    padding-top: .6rem;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .2rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
    height: .7rem;
    line-height: .7rem;
  }
  .logo {
    width:60px;
    height:60px;
  }
  .step-wrapper {
    padding-left: 1.64rem;
    margin-top: .8rem;
  }
  .title {
    color: #515151;
    font-weight: 400;
    font-size: .3rem;
    height: .42rem;
  }
  .line {
    height: .2rem;
    background: #F8F8F8;
  }
  .item-info-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .item-info-title {
    height: .75rem;
    line-height: .75rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .detail-block {
    margin-top: .39rem;
  }
  .detail-block li {
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .2rem;
  }
  .detail-block  li span {
    color: #515151;
    font-size: .3rem;
    font-weight: 400;
  }
  .contribute-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .contribute-title {
    height: .76rem;
    line-height: .76rem;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
  }

  .call-container {
    position: relative;
    height: 1rem;
    padding-top: .4rem;
    padding-bottom: .4rem;
  }

  .call-button {
    position: absolute;
    bottom: .4rem;
    right: .32rem;
    height: .56rem;
    width: 1.87rem;
    line-height: .56rem;
    background: #28B2FE;
    color: #ffffff;
    font-size: .28rem;
    border-radius: .04rem;
    text-align: center;
  }
  .call-container img {
    height: 1rem;
    width: 1rem;
    margin-right: .2rem;
  }
  .call-info-wrapper {
    display: inline-block;
    position: absolute;
    height: 1rem;
    bottom: .2rem;
  }
  .name {
    height: .5rem;
  }
  .call-button {
    position: absolute;
  }
  /* 项目进度 */
  .message-wrapper {
    padding-left: 1.5rem;
    position: relative;
  }

  .message {
    height: 1rem;
    border-left: .02rem dashed #64AA62;
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
    height: .7rem;
    margin-left: .18rem;
    width: 100%;
    border-left: .02rem dashed #64AA62;
  }
  .step-time {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
