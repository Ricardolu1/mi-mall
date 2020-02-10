<template>
  <div>
    <div class="index">
      <div class="container">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:;">
                  手机 电话卡
                  <img src="/imgs/icon-arrow.png" alt=""> 
                </a>
                <div class="children">
                  <ul v-for="(item,index) of menuList" :key="index">
                    <li v-for="(sub,index2) of item" :key="index2">
                      <a :href="sub ? '/#/product'+ sub.id :'javascript:;'">
                        <img :src="sub.img || '/imgs/item-box-1.png'" alt="">
                        {{sub.name||'小米9' }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  电视 盒子
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  笔记本 平板
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  家电 插线板
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  出行 穿戴
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  智能 路由器
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  电源 配件
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">
                  生活 箱包
                  <img src="/imgs/icon-arrow.png" alt="">
                </a>
              </li>
            </ul>
          </div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) of slideList" :key="index">
              <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="ads-box"></div>
        <div class="banner"></div>
        <div class="product-box"></div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name:'index',
  components:{
    swiper,
    swiperSlide,
    ServiceBar
  },
  data () {
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect : 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-5.jpg'
        },
      ],
      menuList:[
        [
          {
            id:'30',
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },{
            id:'31',
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'
          },{
            id:'32',
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro'
          },{
            id:'33',
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区'
          },
        ],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
  .index{
    .swiper-box{
      position: relative;
      .nav-menu{
        box-sizing: border-box;
        position: absolute;
        width:264px;
        height:451px;
        z-index:2;
        padding:26px 0;
        background: #55585a7a;
        .menu-wrap{
          .menu-item{
            height:50px;
            line-height: 50px;
            padding: 0 30px;
            &:hover{
              background: $colorA;
              .children{
                display: block;
              }
            }
            a{
              display: flex;
              align-items: center;
              justify-content: space-between;
              img{
                width:10px;
                height:15px;
              }
              font-size: 16px;
              color:#fff;
            }
            .children{
              display: none;
              box-sizing: border-box;
              width:962px;
              height:451px;
              background: #fff;
              position: absolute;
              top:0;
              left:264px;
              border:1px solid $colorH;
              ul{
                display: flex;
                justify-content: space-between;
                height:75px;
                li{
                  display: flex;
                  align-items: center;
                  height:75px;
                  width:241px;
                  padding-left:60px;
                  a{
                    color: $colorB;
                    font-size:14px;
                    img{
                      width:42px;
                      height:35px;
                      margin-right:15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height:451px;
        .swiper-button-prev{
          left:274px;
        }
        img{
          width:100%;
          height:100%;
        }
      }
    }
  }

</style>