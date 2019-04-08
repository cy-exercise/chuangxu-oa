<template>
  <div>

    <mt-header fixed title="订单报价">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="order-item">
      <div class="image">
        <div class="image-item"></div>
      </div>
      <div>论文润色</div>
      <div>￥3409.00</div>
      <div>
        <div class="left">
          <div>23%</div>
          <div>抄袭指数</div>
        </div>
        <div class="right">
          <div>1673</div>
          <div>字数</div>
        </div>
      </div>
    </div>
    <div class="call-phone">
      <div class="call-people">
        <img src="" alt="">
        <div>Kimberly Hernandez</div>
        <div>电话：13423453431</div>
      </div>
      <div class="call-button"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Order",
    data() {
      return {
        selected: true
      }
    }
  }
</script>

<style scoped>
  .mint-header {
    background: #EDEDED;
    color: #515151;
  }
  .order-item {
    height: 285px;
  }
  .left {
    display: inline-block;
    height: 64px;
    width: 162px;
    background: #F8F8F8;
    border-radius: 4px;
  }
  .right {
    display: inline-block;
    height: 64px;
    width: 162px;
    background: #F8F8F8;
    border-radius: 4px;
  }
  .image-item {
    width:120px;
    height:120px;
    background:rgba(40,178,254,1);
    border-radius: 60px;
    margin: 0 auto;
  }

</style>
