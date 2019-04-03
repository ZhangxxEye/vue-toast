<template>
  <div class="toast" v-show="isShow">
    <div class="cont">
      <p>{{msg}}</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .toast {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
  }
  .cont {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
    background-color: #000000;
    border-radius: 10px;
    width: 80%;
    min-height: 50px;
    p {
      font-size: 16px;
      line-height: 25px;
      margin: 12px;
      color: #ffffff;
      text-align: center;
    }
  }
</style>
<script>
  export default {
    name: "tips",
    data() {
      return {
        timer: null,
        msg: "",
        isShow: false
      }
    },
    mounted() {
    },
    destroyed() {
      clearInterval(this.timer);
    },
    methods: {
      showFn(opts) {
        this.isShow = true;
        this.msg = opts.msg || "";
        this.timer = setTimeout(() => {
          this.isShow = false;
          opts.cb && opts.cb();
          clearTimeout(this.timer);
        }, opts.wait || 20000);
      },
    }
  }
</script>
