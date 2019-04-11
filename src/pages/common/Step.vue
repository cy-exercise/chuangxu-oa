<template>
  <div class="wrapper">
    <div class="step-wrapper">
      <ul class="step">
        <li class="">
          <div class="step-block">
            <div class="step-time">2018/12/29</div>
            <div class="step-icon"><img src="/static/images/time.png" alt=""></div>
            <div class="step-name">图表制作</div>
          </div>
          <div class="step-line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Step"
  }
</script>

<style scoped>
  .wrapper{
    height: 100%;
    background: #ffffff;
  }
  .step li {
    height: 1.36rem;
  }
  .step-wrapper {
    width: 100%;
    text-align: center;
  }
  .step-block {
    position: relative;
    height: .39rem;
    line-height: .39rem;
  }
  .step-icon img {
    height: .39rem;
    width: .39rem;
  }
  .step-time,.step-icon,.step-name{
    position: absolute;
  }
  .step-icon {
    left: 1.72rem;
  }
  .step-name {
    left: 2.31rem;
  }
  .step-line {
    height: .79rem;
    border-left: .02rem solid gray;
    padding-left: 1rem;
  }
</style>
