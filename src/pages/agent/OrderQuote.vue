<template>
  <div style="height: 100%">
    <Header :title="title" to="/agent"></Header>
    <Empty v-show="show_empty"></Empty>
    <div class="wrapper" v-show="!show_empty">
      <ul class="quote-item" @scroll="handleScroll">
        <li @click="handleRoute" v-for="project in projects">
          <div class="order-title border-bottom">
            <span class="title">{{(project.project === null) ? '' : project.project.title}}</span>
            <span class="price">￥{{project.price}}</span>
          </div>
          <div class="people">
            <img :src="project.user.avatar.url" alt="">
            <span class="name">{{project.user.name}}</span>
            <span class="goto-price" v-show="is_show">{{action_name}}
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
  import Empty from '../common/Empty'
  import { Indicator } from 'mint-ui';
  export default {
    name: "OrderQuote",
    components: {
      Header,
      Empty
    },
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
        complete_show: true,
        title: '待报价',
        title_map: {
          wait: '待报价',
          doing: '进行中',
          done: '已完成'
        },
        projects: [],
        show_empty: false,
        status_map: {
          wait: 1,
          doing: 4,
          done: 5
        },
        isLoading: false,
        page: 1,
        orders: [],
        scloll:true,
        pageTotal: ''
      }
    },
    methods: {
      handleRoute() {
        this.$router.push(this.action_url)
      },
      init() {
        let status = this.$route.params.status
        if (this.url_map[status]) {
          this.action_url = this.url_map[status]
        }

        if (this.name_map[status]) {
          this.action_name = this.name_map[status]
        }
        if (status === 'doing' || status === 'wait') {
          this.is_show = true
          this.complete_show = false
        } else {
          this.is_show = false
          this.complete_show = true
        }

        if (this.title_map[status]) {
          this.title = this.title_map[status]
        }
      },
      getItem(page = 1) {
        let _this = this
        let status = this.status_map[this.$route.params.status];

        let self = this;
        let agent_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b2'
        let user_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b1'
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
    /*height: 100%;*/
    background: #F8F8F8;

    text-align: center;
  }

  .quote-item {
    /*height: 100%;*/
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: .2rem;
    background: #F8F8F8;
    position: fixed;
    top:.8rem;
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
