<template>
  <div style="height: 100%">
    <Empty v-show="show_empty"></Empty>
    <div class="wrapper" v-show="!show_empty">
      <ul class="quote-item" @scroll="handleScroll">
        <li @click="handleRoute(order.id, order.project)" v-for="order in orders">
          <div class="order-title border-bottom">
            <span class="title project-name">{{(order.project === null) ? '' : order.project.title}}</span>
            <span class="price">￥{{order.price}}</span>
          </div>
          <div class="people">
            <img :src="order.user.avatar.url" alt="">
            <span class="name">{{order.user.name}}</span>
            <span class="goto-price" v-show="is_show">{{action_name}}
                <img src="@/assets/img/arrow_right.png" alt="">
              </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Empty from '../common/Empty'
  import { Indicator } from 'mint-ui';
  export default {
    name: "OrderQuote",
    components: {
      // Header,
      Empty
    },
    data() {
      return {
        action_name: '开始报价',
        action_url: '/agent/order',
        url_map: {
          4: '/agent/order',
          11: '/agent/order_info',
          0: '/agent/order_complete'
        },
        name_map: {
          11: '开始报价',
          4: '详情'
        },
        is_show: false,
        complete_show: true,
        title: '待报价',
        title_map: {
          11: '待报价',
          4: '进行中',
          0: '已完成'
        },
        projects: [],
        show_empty: false,
        status_map: {
          wait: 11,
          doing: 4,
          done: 0
        },
        isLoading: false,
        page: 1,
        orders: [],
        scloll:true,
        pageTotal: '',
        agent: {},
        user: {}
      }
    },
    methods: {
      handleRoute(order_id, project) {

        let project_id = project ? project.id : ''
        if (this.$route.query.status == this.status_map.wait) {
          this.$router.push('/agent/order/' + `${order_id}`)
          return;
        }

        if (this.$route.query.status == this.status_map.doing) {
          this.$router.push('/agent/order_info?order_id=' + order_id + `&project_id=${project_id}`)
        }
        if (this.$route.query.status == this.status_map.done) {
          this.$router.push('/agent/order_complete?order_id=' + order_id + `&project_id=${project_id}`)
        }

      },
      init() {
        let status = this.$route.query.status
        if (this.url_map[status]) {
          this.action_url = this.url_map[status]
        }

        if (this.name_map[status]) {
          this.action_name = this.name_map[status]
        }
        if (status == this.status_map.doing || status == this.status_map.wait) {
          this.is_show = true
          this.complete_show = false
        } else {
          this.is_show = false
          this.complete_show = true
        }

        if (this.title_map[status]) {
          this.title = this.title_map[status]
        }

        this.agent = JSON.parse(localStorage.getItem('agent'))
        this.user = JSON.parse(localStorage.getItem('user'))
        document.title= "进行中(1234)"

      },
      getItem(page = 1) {
        let _this = this
        let status = this.$route.query.status

        let self = this;
        // let agent_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b2'
        // let user_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b1'
        let agent_id = this.agent.id
        let user_id = this.user.id
        this.$ajax.get(`/api/agent/${agent_id}/order` + `?status=${status}&page=${page}&meta=1&user_id=${user_id}`)
          .then(function (response) {
            if (response.data.data.data.length !== 0) {
              self.orders.push(...response.data.data.data)
              //console.log(self.orders)
              self.projects.push(...response.data.data.data);
              self.pageTotal = response.data.data.meta.last_page;
              if (self.page == 1) {
                self.title = self.title + ` (${response.data.data.meta.total})`
              }
              self.page ++;

            } else {
              if (self.page == 1) {
                self.show_empty = true;
              }
            }
            self.isLoading = false
            Indicator.close()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 判断是否滚动到底部
      handleScroll(e) {
        if(e.srcElement.scrollTop + e.srcElement.offsetHeight>e.srcElement.scrollHeight - 40 && !this.isLoading){
          this.loadmore()
        }
      },
      loadmore() {
        if (this.page <= this.pageTotal) {
          this.isLoading = true
          Indicator.open('加载中...');
          this.getItem(this.page)
        }
      }
    },
    mounted() {

    },
    beforeMount() {
      this.init();
      this.getItem();
    }
  }
</script>

<style scoped>
  .wrapper {
    background: #F8F8F8;
    text-align: center;
  }

  .quote-item {
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: .2rem;
    background: #F8F8F8;
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    overflow: auto
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
    display: flex;
    justify-content: space-between;
  }

  .order-title, .people {
    border-radius: .2rem;
  }

  .project-name {
    display: inline-block;
    float: left;
    font-size: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
