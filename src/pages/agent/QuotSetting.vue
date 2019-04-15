<template>
  <div>
    <Header :title="title" to="/" is_white="true"></Header>
    <Percent v-show="percent_show" v-on:addSelectEvent="handleSelect" v-on:closeEvent="handleColse" :show="percent_show"></Percent>
    <div class="setting-wrapper">
      <div class="setting-title">选择报价方式</div>
      <div class="setting-way">
        <div class="default-way border quote" v-bind:class="{selected: selected === 'default'}" @click="handleClick('default')">默认报价
          <i class="" :class="{selected_img: selected === 'default'}"></i>
        </div>
        <div class="default-times border quote" v-bind:class="{selected: selected === 'times'}" @click="handleClick('times')">每次报价
          <i class="" :class="{selected_img: selected === 'times'}"></i>
        </div>
      </div>
      <div class="setting-percent">设置每个项目的百分比加价作为收成（10%~50%）</div>
      <div class="percent-input" @click="openSelect">{{percent}}</div>
      <!--<input class="percent-input" type="text" v-model="percent" @click="openSelect">-->
      <div class="button" @click="handleSave">保存</div>
    </div>
  </div>
</template>

<script>
  import Header from "../common/Header"
  import Percent from "../common/Percent"
  export default {
    name: "quotSetting",
    components: {
      Header,
      Percent
    },
    data() {
      return {
        percent: '',
        selected: 'default',
        title: '报价设置',
        percent_show: false
      }
    },
    methods: {
      handleClick(type) {
        this.selected = type
      },
      handleSave() {
        if(true) {
          alert('保存成功')
          this.$router.push('/agent')
        }
      },
      openSelect() {
        this.percent_show = true
      },
      handleSelect(percent) {
        this.percent = percent;
        this.percent_show = false;
      },
      handleColse() {
        this.percent_show = false;
      }
    }
  }
</script>

<style scoped>
  .setting-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .setting-title {
    color: #515151;
    font-size: .36rem;
    font-weight: 500;
    height: .9rem;
    line-height: .9rem;
  }
  .setting-way {
    display: flex;
    justify-content: space-between;
    color: #B5B5B5;
  }
  .selected {
    color: #28B2FE;
  }
  .selected:before {
    border-color: #28B2FE;
  }
  .default-way {
  }
  .border:before {

    border-radius: .08rem;
  }
  .quote {
    width: 2.84rem;
    height: .84rem;
    line-height: .84rem;
    text-align: center;
    font-size: .3rem;
    font-weight: 500;
    position: relative;
  }
  .selected_img {
    width: .5rem;
    height: .5rem;
    position: absolute;
    top: -.18rem;
    right: -.18rem;
    background: url("/static/images/selected.png");
    background-size: 100% 100%;
  }
  .setting-percent {
    color: #515151;
    font-size: .28rem;
    font-weight: 400;
    margin-top: .41rem;
    margin-bottom: .2rem;
  }
  .percent-input {
    height: 1.01rem;
    line-height: 1.01rem;
    background: #F0F0F0;
    padding: 0 .2rem;
    font-size: .3rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: .1rem;
    text-align: center;
  }

  .button {
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    width: 6.06rem;
    background: #28B2FE;
    color: #ffffff;
    font-size: .28rem;
    font-weight: 400;
    border-radius: .1rem;
    margin: .8rem auto;
  }
</style>
