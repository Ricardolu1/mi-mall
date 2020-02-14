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
        <div class="ads-box">
          <a :href="'/#/product/'+item.id" v-for="(item,index) of adsList" :key="index">
            <img v-lazy="item.img" alt="">
          </a>
        </div>
        <div class="banner">
          <a href="'/#/product/30'">
            <img v-lazy="'/imgs/banner-1.png'" alt="">
          </a>
        </div>
      </div>
      <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <a class="banner-left" href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
            <div class="list-box">
              <ul class="list" v-for="(arr,index) of phoneList" :key="index">
                <li class="item" v-for="(item,j) of arr"  :key="j">
                  <span :class="{'new-pro':j%2===0}">新品</span>
                  <img class="item-img" v-lazy="item.mainImage" alt="">
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">
                      {{item.price}}元
                      <a href="javascript:;">
                        <img src="/imgs/icon-cart-hover.png" alt="">
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar />
    <modal 
      title="提示" 
      sureText="查看购物车" 
      btnType="1" 
      modalType="middle"
      :showModal="showModal"
      @submit="gotoCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal >
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name:'index',
  components:{
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
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
          id:'46',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'46',
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
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png',
        },{
          id:48,
          img:'/imgs/ads/ads-2.jpg',
        },{
          id:45,
          img:'/imgs/ads/ads-3.png',
        },{
          id:47,
          img:'/imgs/ads/ads-4.jpg',
        },
      ],
      phoneList:[],
      showModal:false,
    }
  
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then((res)=>{
        res.list = res.list.slice(6,14)
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
      })  
    },
    addCart(id){
      this.showModal = true
    },
    gotoCart(){
      this.$router.push('/cart')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
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
    .ads-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        margin-top:14px;
        margin-bottom:31px;
        img{
          width:296px;
          height:167px;
        }
      }
    }
    .banner{
      img{
        width:100%;
      }
      margin-bottom:50px;
    }
    .product-box{
      h2{
        font-size: $fontF;
        height:21px;
        line-height: 21px;
        color:$colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right:16px;
          img{
            width:224px;
            height:619px;
          }
        }
        .list-box{
          .list{
            width:986px;
            display: flex;
            justify-content: space-between;
            margin-bottom:14px;
            &:last-child{
              margin-bottom:0;
            }
            .item{
              width:236px;
              height:302px;
              background: $colorG;
              display: flex;
              flex-direction: column;
              align-items: center;
              .item-img{
                height:195px;
                width:auto;
              }
              span{
                text-align: center;
                width:67px;
                height:24px;
                line-height: 24px;
                color:#FFF;
                font-size:14px;
                &.new-pro{
                  background: #7ECF68;
                }
                &.kill-pro{
                  background: #e82626;
                }
              }
              .item-info{
                text-align: center;
                h3{
                  font-size:$fontJ;
                  color:$colorB;
                  font-weight: bold;
                }
                p{
                  color:$colorD;
                  margin:6px 0 13px;
                }
                .price{
                  color:#f20a0a;
                  font-size:$fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  // align-items: center;
                  a{
                    height:16px;
                    margin-left:5px;
                    img{
                      height:16px;
                      width:auto;
                    }
                  }
                }
              }
            }
          }
        }
      }
      background: $colorJ;
      padding: 30px 0 50px;
    }
  }

</style>