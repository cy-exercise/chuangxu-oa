<template>
  <div style="height: 100%" >
    <!--<Header :title="title" to="/user"></Header>-->
    <Empty v-show="show_empty"></Empty>
    <div class="wrapper" v-show="!show_empty">
      <ul class="quote-item">
        <li @click="handleRoute(item)" v-for="item in order_list">
          <div class="order-title border-bottom">
            <span class="title">{{item.title}}</span>
            <span class="price">￥{{item.order.price}}</span>
          </div>
          <div class="people">
            <span class="order-date">{{item.order.created_at}}</span>
            <span class="goto-price">{{action_name}}
                <img src="@/assets/img/arrow_right.png" alt="">
              </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import Header from '../common/Header'
  import Empty from '../common/Empty'
  import {getProjects} from "api";
  export default {
    name: "UserOrder",
    components: {
      // Header,
      Empty
    },
    data() {
      return {
        action_name: '去付款',
        action_url: '/user/order',
        url_map: {
          wait: '/user/order/pay',
          doing: '/user/item_info/doing',
          done: '/user/item_info/complete'
        },
        name_map: {
          wait: '去付款',
          doing: '查看详情',
          done: '查看详情',
        },
        title: '待报价  ',
        title_map: {
          wait: '待付款',
          doing: '进行中',
          done: '完成的'
        },
        show_empty: false,
        order_list: [],
        status_map: {
          2: 'wait',
          3: 'doing',
          6: 'done'
        },
        status: ''
      }
    },
    methods: {
      handleRoute(item) {
        if (this.status == 2) {

          this.$router.push(`/user/order/pay?order_id=${item.id}`)
        } else  {

          this.$router.push(this.action_url + `?project_id=${item.id}`)
        }
      },
      init(){
        this.status = this.$route.query.status;
        let status = this.status_map[this.status];
        if (this.url_map[status]) {
          this.action_url = this.url_map[status]
        }

        if (this.name_map[status]) {
          this.action_name = this.name_map[status]
        }

        if (this.title_map[status]) {
          this.title = this.title_map[status]
        }
      },
      _getProjects() {
        let params = {
          status: this.status,
          size: 100
        }
        getProjects(params).then(projects => {
          if (projects.length < 1) {
            this.show_empty = true
            return
          }
          this.order_list = projects
          document.title = this.title_map[this.status_map[this.status]] + ` (${projects.length})`
        })
      }
    },
    created() {
      this.init();
      this._getProjects()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    overflow: auto;
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
    /*line-height: .96rem;*/
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .order-title, .people {
    border-radius: .2rem;
  }
  .order-title .title {
    flex: 1;
    text-align: left;
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
  .people .order-date {
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
