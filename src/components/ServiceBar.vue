<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <img class="icon-setting" src="/imgs/icon-setting.png" alt="">
          预约维修服务
        </li>  
        <li>
          <img class="icon-7day" src="/imgs/icon-7day.png" alt="">
          7天无理由退换货
        </li>  
        <li>
          <img class="icon-15day" src="/imgs/icon-15day.png" alt="">
          15天免费换货
        </li>  
        <li>
          <img class="icon-post" src="/imgs/icon-post.png" alt="">
          满150包邮
        </li>  
      </ul>  
    </div>
  </div>
</template>

<script>
export default {
  name:'service-bar',
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
  .service{
    padding:33px 0;
    height:16px;
    font-size: 16px;
    color:#666666;
    ul{
      display: flex;
      li{
        width:24.9%;
        text-align: center;
        border-right:1px solid #e5e5e5;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:20px;
          height:20px;
          margin-right:8px;
        }
      }
    }
  }
</style>