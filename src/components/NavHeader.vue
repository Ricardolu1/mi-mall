<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a class="my-cart" href="javascript:;">
            <span class="icon-cart"></span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">

    </div>
  </div>
</template>

<script>
export default {
  name:'nav-header',
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style  lang="scss" scoped>
  .header{
    .nav-topbar{
      line-height:39px;
      height:39px;
      background: #333;
      color:#b0b0b0;
      .container{
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
          display: inline-block;
          color:#b0b0b0;
          margin-right:17px;
        }
        .my-cart{
          width:110px;
          background: #ff6600;
          text-align: center;
          margin-right:0px;          
        }
      }
    }
  }
</style>