<template>
  <div class="nav-bar" :class="{fixed:isFixed}">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'nav-bar',
  data () {
    return {
      isFixed:false,
    }
  },
  methods: {
    initHeight(){
      let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true :false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.initHeight)
  },
  destroyed(){
    window.removeEventListener('scroll',this.initHeight)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
  .nav-bar{
    transition: all .5s;
    height:80;
    line-height: 80px;
    border-top:1px solid $colorH;
    background: $colorG;
    &.fixed{
      box-shadow: 0px 5px 5px rgba(0,0,0,0.07);
      position: fixed;
      top:0;
      width:100%;
    }
    .container{
      @include flex()
      .pro-title{
        font-size:$fontH;
        color:$colorB;
        font-weight:bold;
      }
      .pro-param{
        font-size: $fontJ;
        a{
          margin:0 10px;
          color:$colorC;
        }
      }
    }
  }
</style>