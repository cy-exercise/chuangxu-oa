<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/withdraw" is_white="true"></Header>
      <div class="card-wrapper">
        <div class="card-number">
          <div class="name">银行卡号码</div>
          <input type="text" v-model="card_number">
        </div>
        <div class="people-name">
          <div class="name">持卡人姓名</div>
          <input type="text" v-model="people_name">
        </div>
        <div class="button" @click="handleAdd">确定</div>
      </div>
    </div>
</template>

<script>
  import Header from "../common/Header"
  export default {
    name: "AddCard",
    components: {
      Header
    },
    data() {
      return {
        card_number: '',
        people_name: '',
        title: '添加银行卡'
      }
    },
    methods: {
      handleClick() {
        if (! this.card_number) {
          alert('请输入卡号: ')
          return false;
        }
        if (! this.people_name) {
          alert('请输入姓名：')
          return false;
        }
        let data = {
          card_num: this.card_number,
          name: this.people_name
        };
        if (this.addCard(data)) {
          this.$router.push({path: '/withdraw'})
        }
      },
      addCard(data) {
        return true;
      },
      handleAdd() {

      }
    }
  }
</script>

<style scoped>
  .card-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: .71rem;
  }
  .card-number input {
    margin-bottom: .4rem;
  }
  .name {
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
    height: .33rem;
    margin-bottom: .2rem;
  }
  input {
    background: #F0F0F0;
    width: 6.86rem;
    height: .96rem;
    border-radius: .1rem;
    font-size: .32rem;
    padding: 0 .2rem;
    box-sizing: border-box;
    font-weight: 400;
  }
  .button {
    color: #ffffff;
    background: #28B2FE;
    height: .76rem;
    line-height: .76rem;
    width: 6.06rem;
    margin-left: .4rem;
    margin-top: .4rem;
    text-align: center;
    font-size: .28rem;
    font-weight: 400;
    border-radius: .08rem;
  }
</style>
