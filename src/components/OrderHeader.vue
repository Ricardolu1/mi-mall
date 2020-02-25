<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'order-header',
  props:{
    title:String,

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed:{
    ...mapState(['username'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
  .order-header{
    padding:30px 0;
    border-bottom:2px solid #ff6600;
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height:55px;
      line-height: 55px;
    }
    .title{
      font-size:28px;
      float: left;
      color:#333;
      margin-left: 54px;
      h2{
        height:55px;
        font-size:28px;
        color:#333;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999;
        font-weight:400;
      }
    }
    .username{
      float: right;
      a{
        color:#666;
        font-size:16px;
        font-weight: bold;
      }
    }
  }
</style>