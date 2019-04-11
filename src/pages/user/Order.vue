<template>
  <div style="height: 100%">
    <Header :title="title" to="/user"></Header>
    <div class="wrapper">
      <ul class="quote-item">
        <li @click="handleRoute">
          <div class="order-title border-bottom">
            <span class="title">论文润色</span>
            <span class="price">￥3409.00</span>
          </div>
          <div class="people">
            <img src="/static/images/avatar.png" alt="">
            <span class="name">Kimberly Hernandez</span>
            <span class="goto-price">{{action_name}}
                <img src="/static/images/arrow_right.png" alt="">
              </span>
          </div>
        </li>
        <li @click="handleRoute">
          <div class="order-title border-bottom">
            <span class="title">论文润色</span>
            <span class="price">￥3409.00</span>
          </div>
          <div class="people">
            <img src="/static/images/avatar.png" alt="">
            <span class="name">Kimberly Hernandez</span>
            <span class="goto-price">{{action_name}}
                <img src="/static/images/arrow_right.png" alt="">
              </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "UserOrder",
    components: {
      Header
    },
    data() {
      return {
        action_name: '去付款',
        action_url: '/user/order',
        url_map: {
          wait: '/user/order_pay',
          doing: '/user/item_info/doing',
          done: '/user/item_info/complete'
        },
        name_map: {
          wait: '去付款',
          doing: '查看详情',
          done: '查看详情',
        },
        is_show: false,
        complete_show: true,
        title: '待报价  (234)',
        title_map: {
          wait: '待付款',
          doing: '进行中',
          done: '完成的'
        }
      }
    },
    methods: {
      handleRoute() {
        this.$router.push(this.action_url)
      },
      init(){
        let status = this.$route.params.status
        if (this.url_map[status]) {
          this.action_url = this.url_map[status]
        }

        if (this.name_map[status]) {
          this.action_name = this.name_map[status]
        }

        if (this.title_map[status]) {
          this.title = this.title_map[status]
        }
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: .2rem;
    text-align: center;
  }
  .quote-item {

  }
  .quote-item li {
    height: 1.73rem;
    margin-bottom: .2rem;
    background: #ffffff;
    border-radius: .1rem;
  }
  .order-title {
    height: .96rem;
    line-height: .96rem;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .order-title, .people {
    border-radius: .2rem;
  }
  .order-title .title {
    display: inline-block;
    float: left;
    font-size: .3rem;
    color: #515151;
  }
  .order-title .price {
    display: inline-block;
    float: right;
    color: #28B2FE;
    font-size: .36rem;
  }
  .people {
    height: .76rem;
    line-height: .76rem;
    padding-left: .2rem;
    padding-right: .2rem;
    text-align: left;
  }
  .people img {
    height: .4rem;
    width: .4rem;
  }
  .people .name {
    font-size: .24rem;
    color: #B5B5B5;
  }
  .people .goto-price {
    display: inline-block;
    float: right;
    font-size: .24rem;
    color: #28B2FE;
  }
  .goto-price img {
    margin-left: .23rem;
    width: .31rem;
    height: .26rem;
  }
  .complete-content {
    display: inline-block;
    float: right;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
</style>
