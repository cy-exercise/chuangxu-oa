<template>
    <div style="height: 100%">
      <mt-header fixed title="待报价">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

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
              <span class="goto-price" v-show="is_show">{{action_name}}
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
              <span class="goto-price" v-show="is_show">{{action_name}}
                <img src="/static/images/arrow_right.png" alt="">
              </span>
              <span class="complete-content" v-show="complete_show">2018/03/15</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "OrderQuote",
    data() {
      return {
        action_name: '开始报价',
        action_url: '/agent/order',
        url_map: {
          wait: '/agent/order',
          doing: '/agent/order_info',
          done: '/agent/order_complete'
        },
        name_map: {
          wait: '开始报价',
          doing: '详情'
        },
        is_show: false,
        complete_show: true
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
        if (status == 'doing' || status === 'wait') {
          this.is_show = true
          this.complete_show = false
        } else {
          this.is_show = false
          this.complete_show = true
        }
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  .mint-header {
    background: #EDEDED;
    color: #515151;
    font-size: .36rem;
  }
  >>> .mintui {
    font-size: .4rem;
  }
  .wrapper {
    height: 100%;
    background: #F8F8F8;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: 1rem;
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
