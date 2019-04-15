<template>
  <div style="height: 100%">
    <Header :title="title" to="/agent"></Header>
    <Empty v-show="show_empty"></Empty>
    <div class="wrapper" v-show="!show_empty">
      <ul class="quote-item">
        <li @click="handleRoute" v-for="project in projects">
          <div class="order-title border-bottom">
            <span class="title">{{project.project.title}}</span>
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
        isLoading: false
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
      getItem() {
        let _this = this
        //this.$cookies.set('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5NWI5MTY3NmM0MjBlNDZiNzM0ODhlYjMzMzk1ZDljODg3NWY4OGU0Njg4NTM1MTJmMjZmMThkZmZhODE1ZjVkNWQ2NzU1ZjU3ODJjZDMzIn0.eyJhdWQiOiI0IiwianRpIjoiMjk1YjkxNjc2YzQyMGU0NmI3MzQ4OGViMzMzOTVkOWM4ODc1Zjg4ZTQ2ODg1MzUxMmYyNmYxOGRmZmE4MTVmNWQ1ZDY3NTVmNTc4MmNkMzMiLCJpYXQiOjE1NTUyOTgyNDgsIm5iZiI6MTU1NTI5ODI0OCwiZXhwIjoxNTU2NTk0MjQ4LCJzdWIiOiI5MTQwMTkyMy1jM2M2LTRlYmYtOTYyMS1hOTliOGI5MGU0YjEiLCJzY29wZXMiOltdfQ.HN4ZEs80DZqGYOqSbwW8J8KvgXCTIio0bQJxWiR6_O8qr-cxnMs1Zd-xq-H2fWLcGswmEivb3CJXP9jj1sbdEsQ1u3x6kor4R7Cp18YkdsR60QIjyf54tjZWk0ibzjmM4RyoOA64m82-1Q8uRSjbFssP4YS8-UNjxN3Qj2t5sSjqG-JHIWGUyyoxwD5W9-Pd0bhU6SfJDlugtVTOkZYxoTO2fT0AKQX-9Nwnv9uQZTRStjCH-Bqm8O6s732ezDKgFX6OE6MTfgQSpyIG-kthFeX5MRML-Fv8xuTZNPVhyNEKtXIAM2Nn0o3YQRduq7OVNh7kaW6YMt0tZKjQzP8Qbwv8MqIVkQIVk6_KT-DghTEH_MRmQs_5EwU3M2VDqWOTYwEwNjSNm1uUp91WOHYX00lM1j2oZi68_dUMF5FmXlS18FiQmUC8GruakeTR114ZaZDUG9VYlviVZUGGWGMo7lX3OpkCaD8l5J4NFg-ir4X_1_MllTFTwiFxUza9Sg6W99N4tIdQfSqK1h2eflPzZhAX3bM1_kTfS7QuROiwuYT-gAaJJb7AhTQShGB6T7Y83nWvpL4RoMBZg1D8qi1l3FPyYaGXF69WkmZpi8X_f_tP5RrnBOOVWUM0lVm12S-lIk8ChsSeUZgC--R_pZz47CR3X75OfFL6db1SFRfBH7c')
        let config = {
          headers: {
            Authorization: 'Bearer ' + this.$cookies.get('access_token')
          }
        };
        let status = this.status_map[this.$route.params.status];
        let page = 1;
        let self = this;
        let agent_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b2'
        let user_id = '91401923-c3c6-4ebf-9621-a99b8b90e4b1'
        this.$ajax.get(`/agent/${agent_id}/order` + `?status=${status}&page=${page}&meta=1&user_id=${user_id}`, config)
          .then(function (response) {
            if (response.data.data.length !== 0) {
              self.projects = response.data.data.data
              self.title = self.title + ` (${self.projects.data.meta.total})`
            } else {
              self.show_empty = true;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
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
