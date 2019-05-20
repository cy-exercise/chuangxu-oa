<template>
  <div class="step-block">
    <div class="item-title">项目进度</div>
    <div  v-for="(node, index) of nodes" :class="[{'step': index < nodes.length - 1}, {'step-end': index == nodes.length - 1}]">
      <div :class="[{'step-main step-border': index < nodes.length - 1}, {'step-main-end': index == nodes.length - 1}]">
        <div class="step-icon-wrapper" :class="[{'step-doing': node.status == 1},{'step-gray': node.status==2 || node.status == 0}]">
          <div :class="[{'step-icon-img': node.status == 1},{'step-icon-gray': node.status == 2 || node.status == 0}]"></div>
        </div>
        <span class="step-title">{{node.workflow_node.title}}</span>
        <span class="step-date">{{node.created_at}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Step",
    props: {
      nodes: Array
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .step-block {
  }
  .item-title {
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .24rem;
  }
  .step {
    height: 1.09rem;
    padding-left: 1.92rem;
  }
  .step-main {
    position: relative;
    height: 1.09rem;
  }
  .step-border {
    border-left: 1px dashed green;
  }

  .step-icon-wrapper {
    position: absolute;
    top: -.05rem;
    background: #ffffff;
  }
  .step-doing {
    left: -.2rem;
  }
  .step-gray{
    left: -.09rem;
  }
  .step-icon-img {
    height: 20px;
    width: 20px;
    background: url("~@/assets/img/time.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
  }
  .step-icon-gray {
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #B5B5B5;
  }
  .step-icon img  {
    top: 0;
    height: 20px;
    width: 20px;
  }
  .step-title {
    position: absolute;
    left: .4rem;
    top: -.02rem;
    /*margin-left: .4rem;*/
    color: #515151;
    font-size: .28rem;
    /*height: .4rem;*/
    /*line-height: .4rem;*/
    font-weight: 400;
  }
  .step-date {
    /*top: -.02rem;*/
    position: absolute;
    left: -1.92rem;
    font-size: .28rem;
    font-weight: 400;
  }
  .step-end {
    height: .8rem;
    padding-left: 1.92rem;
  }
  .step-main-end {
    position: relative;
    height: .8rem;
  }
</style>
