<template>
  <div class="step">
    <article>
      <section class="current">
        <span class="point-time point-green"></span>
        <time datetime="2013-03">
          <span>2012/16/20</span>
        </time>
        <aside>
          <p class="things">Visitor at Maketing Live 2012</p>
        </aside>
      </section>
      <section class="undo">
        <span class="point-time point-green"></span>
        <time datetime="2012-11">
          <span>2012</span>
        </time>
        <aside>
          <p class="things">Visitor at Daily web 2012</p>
        </aside>
      </section>
      <section class="complete">
        <span class="point-time point-red"></span>
        <time datetime="2012-09">
          <span>2012</span>
        </time>
        <aside>
          <p class="things">You reached 500 followers</p>
        </aside>
      </section>
      <section>
        <span class="point-time point-blue"></span>
        <time datetime="2012-08">
          <span>August</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">New job position as </p>
        </aside>
      </section>
      <section>
        <span class="point-time point-red"></span>
        <time datetime="2012-03">
          <span>2012</span>
        </time>
        <aside>
          <p class="things">Speaker at ASMO conference</p>
        </aside>
      </section>
    </article>
    </div>
</template>

<script>
    export default {
        name: "StepTwo"
    }
</script>

<style scoped>

  .step article {
    position: relative;
  }
  .step article section {
    position: relative;
    height: 56px;
  }
  .step article section::before {
    content: "";
    /*width: 5px;*/
    border-left: 1px dashed;
    top: 30px;
    bottom: -20px;
    left: 30%;
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
    left: 30%;
    background: #B5B5B5;
    margin-left: -4px;
    border-radius: 50%;
    /*box-shadow: 0 0 0 5px #fff;*/
  }
  .current .point-time {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 17px;
    left: 30%;
    background: #B5B5B5;
    margin-left: -9px;
    background: url("/static/images/time.png");
    background-size:100% 100%;
  }
  .step article section time {
    width: 15%;
    height: 100%;
    line-height: 56px;
    display: block;
    position: absolute;
  }
  .step article aside {
    /*color: #3a3a38;*/
    margin-left: 45%;
    height: 100%;
    line-height: 56px;
  }
  .step article section time > span {
    display: block;
    text-align: right;
  }
  article, section, time, aside {
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
