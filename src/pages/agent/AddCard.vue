<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/withdraw"></Header>
      <div class="card-wrapper">
        <div class="people">
          <div class="name">持卡人姓名</div>
          <input type="text" v-model="people_name" placeholder="请填写">
        </div>
        <div class="title">
          <span>请选择并输入银行卡号</span>
        </div>
        <div class="bank">
          <div class="bank-name border-bottom">
            <div class="bank-title name">选择银行</div>
            <input type="text" placeholder="选择银行" v-model="bank" v-on:click.stop="handleSelect">
          </div>
          <div class=" bank-name">
            <div class="bank-title name">银行卡号码</div>
            <input type="text" placeholder="请输入银行卡号码" v-model="bank_card">
          </div>
        </div>
        <div class="button" :class="{ready: bank && bank_card && people_name}" @click="handleAdd">确定</div>
      </div>

      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
        <div class="popup-head">
          <div class="cancel" @click="handleCancel">取消</div>
          <div class="ensure" @click="handleSure">确定</div>
          <div class="popup-title">选择银行</div>
        </div>
        <mt-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="5"></mt-picker>
      </mt-popup>
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
        bank_card: '',
        bank: '',
        people_name: '',
        title: '添加银行卡',
        popupVisible: false,
        year: '1984',
        yearSlot: [{
          flex: 1,
          values: ['工商银行', '农业银行', '中国银行', '建设银行', '招商银行', '邮储银行', '交通银行', '浦发银行', '民生银行', '兴业银行', '平安银行', '中信银行', '华夏银行', '广发银行', '光大银行', '北京银行','宁波银行'],
          className: 'slot1'
        }],
        banks: [
          {
            "text": "工商银行",
            "value": "1002"
          },{
            "text": "农业银行",
            "value": "1005"
          },{
            "text": "中国银行",
            "value": "1026"
          },{
            "text": "建设银行",
            "value": "1003"
          },{
            "text": "招商银行",
            "value": "1001"
          },{
            "text": "邮储银行",
            "value": "1066"
          },{
            "text": "交通银行",
            "value": "1020"
          },{
            "text": "浦发银行",
            "value": "1004"
          },{
            "text": "民生银行",
            "value": "1006"
          },{
            "text": "兴业银行",
            "value": "1009"
          },{
            "text": "平安银行",
            "value": "1010"
          },{
            "text": "中信银行",
            "value": "1021"
          },{
            "text": "华夏银行",
            "value": "1025"
          },{
            "text": "广发银行",
            "value": "1027"
          },{
            "text": "光大银行",
            "value": "1022"
          },{
            "text": "北京银行",
            "value": "1032"
          },{
            "text": "宁波银行",
            "value": "1056"
          }
        ],
      }
    },
    methods: {
      handleClick() {
        if (! this.bank_card) {
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
        if (this.bank && this.bank_card && this.people_name) {
          // 修改银行卡信息
        }
      },
      onYearChange(picker, values) {
        this.year = values[0];
        // console.log(this.year)
      },
      handleCancel() {
        this.popupVisible = false
      },
      handleSure() {
        this.bank = this.year
        this.popupVisible = false
      },
      handleSelect() {
        this.popupVisible = true
      }
    }
  }
</script>

<style scoped>
  .card-wrapper {
    position: fixed;
    top: .8rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: #EFEFEF;
  }

  .people {
    height: .96rem;
    background: #ffffff;
    display: flex;
    padding-left: .32rem;
  }
  .people input {
    flex: 1;
  }

  .title {
    position: relative;
    height: .96rem;
    background: #EFEFEF;
  }

  .title span {
    position: absolute;
    left: .32rem;
    bottom: .2rem;
    color: #B5B5B5;
    font-size: .24rem;
  }

  .bank {
    background: #ffffff;
    padding-left: .32rem;
  }

  .bank-name {
    height: .96rem;
    display: flex;
  }

  .name {
    line-height: .96rem;
    width: 1.8rem;
  }

  input {
    height: .96rem;
    font-size: .32rem;
    padding: 0 .2rem;
    box-sizing: border-box;
    font-weight: 400;
  }
  .button {
    color: #ffffff;
    background:rgba(40,178,254,0.5);
    height: .76rem;
    line-height: .76rem;
    width: 6.06rem;
    margin: 0 auto;
    margin-top: .4rem;
    text-align: center;
    font-size: .28rem;
    font-weight: 400;
    border-radius: .08rem;
  }
  .ready {
    background:rgba(40,178,254,1);
  }
  .mint-popup {
    width: 100%;
    background: #F8F8F8;
  }
  .popup-head {
    height: .8rem;
    background: #ffffff;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .cancel {
    float: left;
    line-height: .8rem;
    color: #B5B5B5;
  }
  .popup-title {
    text-align: center;
    margin: 0 70px;
    line-height: .8rem;
  }
  .ensure {
    float: right;
    line-height: .8rem;
    color: #448EF6;
  }
</style>
