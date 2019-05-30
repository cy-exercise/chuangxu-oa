<template>
  <div class="step">
    <article>
      <div class="step-title">项目进度</div>
      <section v-for="node of nodes" :class="[{'current': node.status == 1}, {'complete': node.status == 2}, {'undo': node.status == 0}]">
        <span class="point-time"></span>
        <div class="time">
          <span>{{node.updated_at}}</span>
        </div>
        <aside>
          <p class="things">{{node.workflow_node.title}}</p>
        </aside>
      </section>
    </article>
    </div>
</template>

<script>
  export default {
    name: "StepTwo",
    props: {
      nodes: Array
    }
  }
</script>

<style scoped>
  .step-title {
    padding-top: .8rem;
    margin-left: 21%;
    font-size: .3rem;
  }
  .step article {
    position: relative;
  }
  .step article section {
    position: relative;
    height: 56px;
  }
  .step article section::before {
    content: "";
    border-left: 1px dashed;
    top: 30px;
    bottom: -20px;
    left: 50%;
    background: #e6e6e6;
    position: absolute;
    color: #B5B5B5;
  }
  .current::before {
    top: 10px;
  }
  .step article section:last-child::before {
    display: none;
  }
  .point-time {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 20px;
    left: 50%;
    background: #B5B5B5;
    margin-left: -4px;
    border-radius: 50%;
  }
  .current .point-time {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 17px;
    left: 50%;
    background: #B5B5B5;
    margin-left: -9px;
    background: url("~@/assets/img/time.png");
    background-size:100% 100%;
  }
  .step article section .time {
    width: 40%;
    height: 100%;
    line-height: 56px;
    display: block;
    position: absolute;
  }
  .step article aside {
    margin-left: 60%;
    height: 100%;
    line-height: 56px;
  }
  .step article aside p {
    text-align: left;
  }
  .step article section .time > span {
    display: block;
    text-align: right;
  }
  article, section, aside {
    display: block;
  }
  .undo {
    color: #B5B5B5;
  }
  .undo p {
    color: #B5B5B5;
  }
  .complete .point-time {
    background: green;
  }
  .complete span, .complete p {
    color: green;
  }
</style>
